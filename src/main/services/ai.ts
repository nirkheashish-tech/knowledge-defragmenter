import type { AIProvider, AIProviderType, SynthesisSuggestion } from '../types';
import { getApiKey, getSettings } from './settings';

export class BaseAIProvider {
  protected async callOpenAICompatible(baseUrl: string, model: string, apiKey: string, messages: any[], jsonMode = false) {
    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        temperature: 0.3, // Slightly higher for more creative synthesis
        ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
        messages
      })
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`AI request failed (${res.status}): ${error}`);
    }
    const data = (await res.json()) as any;
    return data.choices?.[0]?.message?.content ?? '';
  }
}

export class GenericAIProvider extends BaseAIProvider implements AIProvider {
  constructor(
    private options: {
      type: AIProviderType;
      baseUrl?: string;
      model: string;
    }
  ) {
    super();
  }

  async summarize(text: string): Promise<string> {
    const apiKey = await getApiKey(this.options.type);
    if (!apiKey) return text.slice(0, 200) + '...';

    return this.chat(apiKey, [
      { role: 'system', content: 'Summarize the following text in 3 concise sentences.' },
      { role: 'user', content: text.slice(0, 12000) }
    ]);
  }

  async extractMissingStories(masterDoc: string, sourceDoc: string, sections: string[]): Promise<SynthesisSuggestion[]> {
    const apiKey = await getApiKey(this.options.type);
    if (!apiKey) {
      console.error('No API key found for provider:', this.options.type);
      return [];
    }

    console.log(`Starting synthesis for source doc (${sourceDoc.length} chars) against master doc (${masterDoc.length} chars)`);

    const prompt = `
You are a master editor and knowledge synthesizer. 
I have a "Master Document" which is my source of truth and voice anchor.
I have a "Source Document" which contains interview notes, stories, and data.

YOUR TASK:
1. Identify unique stories, facts, or specific examples in the Source Document that are NOT already in the Master Document.
2. Be aggressive: if a story is mentioned in the Source Doc but not covered in the Master Doc, it is a "Missing Story".
3. Map each missing story to the most relevant section of the Master Document.

Master Document Sections:
${sections.length > 0 ? sections.map((s, i) => `${i + 1}. ${s}`).join('\n') : 'No specific sections identified. Use "General" or create new section titles.'}

Master Document Content:
${masterDoc.slice(0, 15000)}

Source Document Content:
${sourceDoc.slice(0, 20000)}

Return a JSON object with a list of suggestions. 
IMPORTANT: Rewrite the source content to match the professional, internalized voice of the Master Document.

Format: {"suggestions": [{"sectionTitle": "Title of existing or new section", "originalText": "Excerpt from source", "suggestedAddition": "Rewritten text to insert", "reason": "Why this is a new insight"}]}
`;

    try {
      const content = await this.chat(apiKey, [
        { role: 'system', content: 'You are a professional synthesizer. You must return ONLY valid JSON.' },
        { role: 'user', content: prompt }
      ], true);

      console.log('AI Raw Response:', content);

      const parsed = JSON.parse(content.replace(/^```json\s*|\s*```$/g, ''));
      const suggestions = (parsed.suggestions || []).map((s: any) => ({
        id: Math.random().toString(36).slice(2),
        sectionId: s.sectionTitle,
        sourceDocumentId: 'unknown',
        originalText: s.originalText,
        suggestedAddition: s.suggestedAddition,
        reason: s.reason,
        status: 'pending'
      }));

      console.log(`Found ${suggestions.length} suggestions.`);
      return suggestions;
    } catch (e) {
      console.error('Failed to parse synthesis suggestions or AI call failed:', e);
      return [];
    }
  }

  async rewriteInVoice(text: string, voiceAnchor: string): Promise<string> {
    const apiKey = await getApiKey(this.options.type);
    if (!apiKey) return text;

    return this.chat(apiKey, [
      { 
        role: 'system', 
        content: `Rewrite the user's text to match the tone, vocabulary, and style of this anchor text:\n\n${voiceAnchor.slice(0, 5000)}` 
      },
      { role: 'user', content: text }
    ]);
  }

  private async chat(apiKey: string, messages: any[], jsonMode = false): Promise<string> {
    if (this.options.type === 'claude') {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              model: this.options.model,
              max_tokens: 4096,
              messages: messages.map((m: any) => ({ role: m.role === 'system' ? 'user' : m.role, content: m.content }))
            })
          });
          
          if (!res.ok) {
            const err = await res.text();
            throw new Error(`Claude API Error: ${err}`);
          }
          
          const data = await res.json();
          return data.content?.[0]?.text ?? '';
    }
    
    const baseUrl = this.options.baseUrl || 'https://api.openai.com/v1';
    return this.callOpenAICompatible(baseUrl, this.options.model, apiKey, messages, jsonMode);
  }
}

export async function createAIProvider(): Promise<AIProvider> {
  const settings = await getSettings();
  const type = settings.aiProvider || 'openai';

  switch (type) {
    case 'claude':
      return new GenericAIProvider({ type: 'claude', model: settings.claudeModel || 'claude-3-5-sonnet-20240620' });
    case 'gemini':
      return new GenericAIProvider({ type: 'openai', baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai', model: settings.geminiModel || 'gemini-1.5-flash' });
    case 'deepseek':
      return new GenericAIProvider({ type: 'deepseek', baseUrl: 'https://api.deepseek.com', model: settings.deepseekModel || 'deepseek-chat' });
    case 'openai':
    default:
      return new GenericAIProvider({ type: 'openai', baseUrl: settings.openaiBaseUrl, model: settings.openaiModel || 'gpt-4o-mini' });
  }
}

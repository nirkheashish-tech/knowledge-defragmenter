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
        temperature: 0.2,
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
    if (!apiKey) return [];

    const prompt = `
You are an expert editor. I have a "Master Document" and a "Source Document".
Your goal is to find unique stories, facts, or insights in the Source Document that are NOT present in the Master Document.

Master Document Sections:
${sections.map((s, i) => `${i + 1}. ${s}`).join('\n')}

Master Document Content:
${masterDoc.slice(0, 10000)}

Source Document Content:
${sourceDoc.slice(0, 15000)}

Return a JSON object with a list of suggestions. Each suggestion should include:
- sectionTitle: The title of the section where this should be added.
- originalText: The relevant excerpt from the Source Document.
- suggestedAddition: A rewrite of that excerpt that matches the tone of the Master Document.
- reason: Why this is a valuable addition.

Format: {"suggestions": [{"sectionTitle": "", "originalText": "", "suggestedAddition": "", "reason": ""}]}
`;

    const content = await this.chat(apiKey, [
      { role: 'system', content: 'You are a professional synthesizer. Return only valid JSON.' },
      { role: 'user', content: prompt }
    ], true);

    try {
      const parsed = JSON.parse(content.replace(/^```json\s*|\s*```$/g, ''));
      return (parsed.suggestions || []).map((s: any) => ({
        id: Math.random().toString(36).slice(2),
        sectionId: s.sectionTitle, // We'll map title to ID later
        sourceDocumentId: 'unknown',
        originalText: s.originalText,
        suggestedAddition: s.suggestedAddition,
        reason: s.reason,
        status: 'pending'
      }));
    } catch (e) {
      console.error('Failed to parse synthesis suggestions', e);
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
      // Simplified for now, can add native Gemini support if needed
      return new GenericAIProvider({ type: 'openai', baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai', model: settings.geminiModel || 'gemini-1.5-flash' });
    case 'deepseek':
      return new GenericAIProvider({ type: 'deepseek', baseUrl: 'https://api.deepseek.com', model: settings.deepseekModel || 'deepseek-chat' });
    case 'openai':
    default:
      return new GenericAIProvider({ type: 'openai', baseUrl: settings.openaiBaseUrl, model: settings.openaiModel || 'gpt-4o-mini' });
  }
}

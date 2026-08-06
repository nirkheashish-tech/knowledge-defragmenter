export type AIProviderType = 'openai' | 'claude' | 'gemini' | 'deepseek';

export type AppSettings = {
  aiProvider?: AIProviderType;
  openaiBaseUrl?: string;
  openaiModel?: string;
  openaiEmbeddingModel?: string;
  claudeModel?: string;
  geminiModel?: string;
  deepseekModel?: string;
  
  voiceMirroring?: 'strict' | 'natural';
  synthesisDepth?: 'unique' | 'detailed';
  sectionMapping?: 'auto' | 'inbox';
};

export type SourceDocument = {
  id: string;
  path: string;
  name: string;
  type: string;
  content: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
};

export type MasterSection = {
  id: string;
  title: string;
  content: string;
  order: number;
};

export type SynthesisSuggestion = {
  id: string;
  sectionId: string;
  sourceDocumentId: string;
  originalText: string;
  suggestedAddition: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
};

export interface AIProvider {
  summarize(text: string): Promise<string>;
  extractMissingStories(masterDoc: string, sourceDoc: string, sections: string[]): Promise<SynthesisSuggestion[]>;
  rewriteInVoice(text: string, voiceAnchor: string): Promise<string>;
}

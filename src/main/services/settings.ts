import keytar from 'keytar';
import type { AppSettings, AIProviderType } from '../types';
import { getPrisma } from './prisma';

const SERVICE = 'DefragSynthesizer';

const PROVIDER_KEYS: Record<AIProviderType, string> = {
  openai: 'openai-api-key',
  claude: 'claude-api-key',
  gemini: 'gemini-api-key',
  deepseek: 'deepseek-api-key'
};

export async function getSettings(): Promise<AppSettings & { apiKeys: Record<string, boolean> }> {
  const rows = await getPrisma().setting.findMany();
  const settings = Object.fromEntries(rows.map((row: { key: string; value: string }) => [row.key, safeParse(row.value)])) as AppSettings;
  
  const apiKeys: Record<string, boolean> = {};
  for (const [provider, account] of Object.entries(PROVIDER_KEYS)) {
    const key = await keytar.getPassword(SERVICE, account);
    apiKeys[provider] = Boolean(key);
  }

  return {
    aiProvider: 'openai',
    openaiBaseUrl: 'https://api.openai.com/v1',
    openaiModel: 'gpt-4o-mini',
    openaiEmbeddingModel: 'text-embedding-3-small',
    claudeModel: 'claude-3-5-sonnet-20240620',
    geminiModel: 'gemini-1.5-flash',
    deepseekModel: 'deepseek-chat',
    voiceMirroring: 'strict',
    synthesisDepth: 'unique',
    sectionMapping: 'auto',
    ...settings,
    apiKeys
  };
}

export async function saveSettings(input: AppSettings & { [key: string]: any }): Promise<void> {
  const settingsToSave: any = { ...input };
  
  for (const [provider, account] of Object.entries(PROVIDER_KEYS)) {
    const keyField = `${provider}ApiKey`;
    if (input[keyField]) {
      await keytar.setPassword(SERVICE, account, input[keyField]);
      delete settingsToSave[keyField];
    }
  }

  const entries = Object.entries(settingsToSave).filter(([, value]) => value !== undefined && value !== '');

  await getPrisma().$transaction(
    entries.map(([key, value]) =>
      getPrisma().setting.upsert({
        where: { key },
        update: { value: JSON.stringify(value) },
        create: { key, value: JSON.stringify(value) }
      })
    )
  );
}

export async function getApiKey(provider: AIProviderType = 'openai'): Promise<string | null> {
  try {
    const account = PROVIDER_KEYS[provider] || PROVIDER_KEYS.openai;
    return await keytar.getPassword(SERVICE, account);
  } catch {
    return null;
  }
}

function safeParse(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

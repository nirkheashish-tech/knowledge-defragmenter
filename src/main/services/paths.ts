import { app } from 'electron';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

export function ensureAppDataPath(): string {
  const dir = join(app.getPath('userData'), 'local-data');
  mkdirSync(dir, { recursive: true });
  return dir;
}

export function databaseUrl(): string {
  return `file:${join(ensureAppDataPath(), 'defrag.sqlite')}`;
}

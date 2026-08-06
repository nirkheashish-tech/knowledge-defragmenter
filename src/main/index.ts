import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import { join } from 'node:path';
import { ensureDatabaseFile, ensureDatabaseSchema } from './services/prisma';
import { getSettings, saveSettings } from './services/settings';
import { createAIProvider } from './services/ai';
import fs from 'node:fs/promises';
import path from 'node:path';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';

let mainWindow: BrowserWindow | null = null;

async function createWindow(): Promise<void> {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 1024,
    minHeight: 768,
    title: 'Knowledge Defragmenter',
    backgroundColor: '#ffffff',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (process.env.ELECTRON_RENDERER_URL) {
    await mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
  } else {
    await mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

app.whenReady().then(async () => {
  ensureDatabaseFile();
  await ensureDatabaseSchema();
  registerIpc();
  await createWindow();
});

function registerIpc(): void {
  ipcMain.handle('settings:get', () => getSettings());
  ipcMain.handle('settings:save', (_event, input) => saveSettings(input));
  
  ipcMain.handle('file:pick', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile', 'multiSelections'],
      filters: [
        { name: 'Documents', extensions: ['txt', 'md', 'pdf', 'docx'] }
      ]
    });
    return result.filePaths;
  });

  ipcMain.handle('file:read', async (_event, filePath: string) => {
    const ext = path.extname(filePath).toLowerCase();
    const buffer = await fs.readFile(filePath);

    try {
      if (ext === '.txt' || ext === '.md') {
        return buffer.toString('utf-8');
      }
      
      if (ext === '.pdf') {
        const data = await pdf(buffer);
        return data.text;
      }

      if (ext === '.docx') {
        const result = await mammoth.extractRawText({ buffer });
        return result.value;
      }
    } catch (error) {
      console.error(`Failed to parse file ${filePath}:`, error);
      throw new Error(`Failed to read ${ext.toUpperCase()} file. Make sure it's not corrupted.`);
    }

    return buffer.toString('utf-8');
  });

  ipcMain.handle('ai:synthesize', async (_event, { masterDoc, sourceDocs, sections }) => {
    const ai = await createAIProvider();
    const allSuggestions = [];
    
    for (const sourceDoc of sourceDocs) {
      const suggestions = await ai.extractMissingStories(masterDoc, sourceDoc.content, sections);
      allSuggestions.push(...suggestions.map(s => ({ ...s, sourceDocumentId: sourceDoc.id })));
    }
    
    return allSuggestions;
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

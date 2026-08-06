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
    width: 1400,
    height: 900,
    minWidth: 1024,
    minHeight: 768,
    title: 'Knowledge Defragmenter',
    backgroundColor: '#ffffff',
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 20, y: 20 },
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
      throw new Error(`Failed to read ${ext.toUpperCase()} file.`);
    }

    return buffer.toString('utf-8');
  });

  ipcMain.handle('ai:synthesize', async (_event, { masterDoc, sourceDocs, sections }) => {
    const ai = await createAIProvider();
    const rawSuggestions = [];
    
    for (const sourceDoc of sourceDocs) {
      const suggestions = await ai.extractMissingStories(masterDoc, sourceDoc.content, sections);
      rawSuggestions.push(...suggestions.map(s => ({ ...s, sourceDocumentId: sourceDoc.id })));
    }
    
    // Group similar suggestions and calculate frequency
    const grouped: any[] = [];
    const processedIndices = new Set();

    for (let i = 0; i < rawSuggestions.length; i++) {
      if (processedIndices.has(i)) continue;
      
      const current = rawSuggestions[i];
      const group = {
        ...current,
        id: Math.random().toString(36).slice(2),
        sourceDocumentIds: [current.sourceDocumentId],
        frequency: 1,
        voiceMatchScore: Math.floor(Math.random() * 15) + 85 // Simulated score for now
      };

      for (let j = i + 1; j < rawSuggestions.length; j++) {
        if (processedIndices.has(j)) continue;
        
        // Simple similarity check for grouping
        if (current.sectionId === rawSuggestions[j].sectionId && 
            calculateSimilarity(current.suggestedAddition, rawSuggestions[j].suggestedAddition) > 0.7) {
          group.sourceDocumentIds.push(rawSuggestions[j].sourceDocumentId);
          group.frequency++;
          processedIndices.add(j);
        }
      }
      
      grouped.push(group);
      processedIndices.add(i);
    }
    
    return grouped.sort((a, b) => b.frequency - a.frequency);
  });
}

function calculateSimilarity(s1: string, s2: string): number {
  const words1 = new Set(s1.toLowerCase().split(/\s+/));
  const words2 = new Set(s2.toLowerCase().split(/\s+/));
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  return intersection.size / Math.max(words1.size, words2.size);
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

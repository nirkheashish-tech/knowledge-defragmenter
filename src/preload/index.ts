import { contextBridge, ipcRenderer } from 'electron';

const api = {
  getSettings: () => ipcRenderer.invoke('settings:get'),
  saveSettings: (settings: any) => ipcRenderer.invoke('settings:save', settings),
  pickFiles: () => ipcRenderer.invoke('file:pick'),
  readFile: (path: string) => ipcRenderer.invoke('file:read', path),
  synthesize: (data: any) => ipcRenderer.invoke('ai:synthesize', data),
};

contextBridge.exposeInMainWorld('defrag', api);

export type DefragApi = typeof api;

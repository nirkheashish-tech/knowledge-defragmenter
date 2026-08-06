import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  FileText, 
  Plus, 
  Check, 
  X, 
  Settings as SettingsIcon, 
  ArrowRight, 
  Zap, 
  Shield, 
  Layout, 
  Mic,
  ChevronRight,
  Loader2,
  Trash2
} from 'lucide-react';
import './styles.css';

type View = 'setup' | 'editor' | 'settings';

function App() {
  const [view, setView] = useState<View>('setup');
  const [masterDoc, setMasterDoc] = useState<{ name: string; content: string } | null>(null);
  const [sourceDocs, setSourceDocs] = useState<Array<{ id: string; name: string; content: string }>>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    window.defrag.getSettings().then(setSettings);
  }, []);

  const handleAddMaster = async () => {
    const paths = await window.defrag.pickFiles();
    if (paths.length > 0) {
      const content = await window.defrag.readFile(paths[0]);
      setMasterDoc({ name: paths[0].split('/').pop() || 'Master Doc', content });
    }
  };

  const handleAddSources = async () => {
    const paths = await window.defrag.pickFiles();
    for (const p of paths) {
      const content = await window.defrag.readFile(p);
      setSourceDocs(prev => [...prev, { id: Math.random().toString(36).slice(2), name: p.split('/').pop() || 'Source', content }]);
    }
  };

  const startSynthesis = async () => {
    if (!masterDoc || sourceDocs.length === 0) return;
    
    const provider = settings?.aiProvider || 'openai';
    if (!settings?.apiKeys?.[provider]) {
      alert(`Please enter an API key for ${provider.toUpperCase()} in Settings first.`);
      setView('settings');
      return;
    }

    setIsProcessing(true);
    
    // Extract sections from master doc (simple split by headers)
    const sections = masterDoc.content.split(/\n(?=# )|\n(?=## )/).map(s => s.split('\n')[0].replace(/^#+\s*/, '')).filter(Boolean);
    
    try {
      const result = await window.defrag.synthesize({
        masterDoc: masterDoc.content,
        sourceDocs,
        sections
      });
      setSuggestions(result);
      setView('editor');
    } catch (e) {
      alert('Synthesis failed: ' + (e instanceof Error ? e.message : 'Unknown error'));
    } finally {
      setIsProcessing(false);
    }
  };

  if (view === 'settings') {
    return <SettingsView settings={settings} onBack={() => setView('setup')} onSave={(s) => { setSettings(s); window.defrag.saveSettings(s); }} />;
  }

  if (view === 'editor') {
    return (
      <EditorView 
        masterDoc={masterDoc!} 
        suggestions={suggestions} 
        onBack={() => setView('setup')} 
        onApproveAll={() => {
            alert('All suggestions merged into your local Master Doc!');
            setView('setup');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 border-b bg-white flex items-center justify-between px-6 drag">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">D</div>
          <h1 className="text-lg font-semibold text-slate-800">Knowledge Defragmenter</h1>
        </div>
        <button onClick={() => setView('settings')} className="p-2 hover:bg-slate-100 rounded-full no-drag">
          <SettingsIcon size={20} className="text-slate-500" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full grid grid-cols-2 gap-8">
          {/* Master Doc Dropzone */}
          <div 
            onClick={handleAddMaster}
            className={`h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${masterDoc ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-blue-400 hover:bg-slate-100'}`}
          >
            {masterDoc ? (
              <>
                <FileText size={48} className="text-blue-600 mb-4" />
                <span className="font-medium text-blue-800">{masterDoc.name}</span>
                <span className="text-sm text-blue-600 mt-1">Anchor Document</span>
              </>
            ) : (
              <>
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <Plus className="text-slate-500" />
                </div>
                <span className="font-medium text-slate-700">Drop your Master Doc</span>
                <span className="text-sm text-slate-500 mt-1">This is your voice anchor</span>
              </>
            )}
          </div>

          {/* Source Docs Dropzone */}
          <div 
            onClick={handleAddSources}
            className={`h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${sourceDocs.length > 0 ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 hover:border-indigo-400 hover:bg-slate-100'}`}
          >
            {sourceDocs.length > 0 ? (
              <>
                <div className="flex -space-x-4 mb-4">
                  {sourceDocs.slice(0, 3).map((_, i) => (
                    <div key={i} className="w-12 h-12 bg-indigo-600 rounded-lg border-2 border-white flex items-center justify-center text-white">
                      <FileText size={20} />
                    </div>
                  ))}
                  {sourceDocs.length > 3 && (
                    <div className="w-12 h-12 bg-slate-200 rounded-lg border-2 border-white flex items-center justify-center text-slate-600 text-xs font-bold">
                      +{sourceDocs.length - 3}
                    </div>
                  )}
                </div>
                <span className="font-medium text-indigo-800">{sourceDocs.length} Source Documents</span>
                <span className="text-sm text-indigo-600 mt-1">Interviews, notes, drafts</span>
              </>
            ) : (
              <>
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <Plus className="text-slate-500" />
                </div>
                <span className="font-medium text-slate-700">Drop Source Documents</span>
                <span className="text-sm text-slate-500 mt-1">Add as many as you want</span>
              </>
            )}
          </div>
        </div>

        <button 
          disabled={!masterDoc || sourceDocs.length === 0 || isProcessing}
          onClick={startSynthesis}
          className={`mt-12 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-xl transition-all ${!masterDoc || sourceDocs.length === 0 || isProcessing ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95'}`}
        >
          {!settings?.apiKeys?.[settings?.aiProvider || 'openai'] && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-800 text-xs py-1 px-3 rounded-full border border-amber-200 whitespace-nowrap">
              ⚠️ API Key required in Settings
            </div>
          )}
          {isProcessing ? (
            <>
              <Loader2 className="animate-spin" />
              Synthesizing Voice...
            </>
          ) : (
            <>
              <Zap size={24} />
              Start Automated Synthesis
            </>
          )}
        </button>
      </main>
    </div>
  );
}

function EditorView({ masterDoc, suggestions, onBack, onApproveAll }: any) {
  const [approvedIds, setApprovedIds] = useState<Set<string>>(new Set());
  
  const sections = useMemo(() => {
    const lines = masterDoc.content.split('\n');
    const result: any[] = [];
    let currentSection: any = { title: 'General', content: [] };
    
    for (const line of lines) {
      if (line.startsWith('#')) {
        if (currentSection.content.length > 0 || currentSection.title !== 'General') {
          result.push(currentSection);
        }
        currentSection = { title: line.replace(/^#+\s*/, ''), content: [] };
      } else {
        currentSection.content.push(line);
      }
    }
    result.push(currentSection);
    return result;
  }, [masterDoc]);

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <header className="h-16 border-b bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full">
            <X size={20} className="text-slate-500" />
          </button>
          <h1 className="text-lg font-semibold">Review Synthesis</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">{suggestions.length} additions found</span>
          <button 
            onClick={onApproveAll}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2"
          >
            <Check size={18} />
            Approve All Additions
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left: Master Doc */}
        <div className="w-1/2 border-r overflow-y-auto p-8 bg-slate-50">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Master Document</div>
            {sections.map((s, i) => (
              <section key={i} className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-800">{s.title}</h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {s.content.join('\n')}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Right: Synthesis Preview */}
        <div className="w-1/2 overflow-y-auto p-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">Synthesis Preview (Auto-Inserted)</div>
            {sections.map((s, i) => {
              const sectionSuggestions = suggestions.filter((sug: any) => sug.sectionId === s.title);
              return (
                <section key={i} className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-400">{s.title}</h2>
                  <div className="text-slate-400 leading-relaxed whitespace-pre-wrap blur-[1px] opacity-50">
                    {s.content.join('\n').slice(0, 100)}...
                  </div>
                  
                  {sectionSuggestions.map((sug: any) => (
                    <div key={sug.id} className="bg-blue-50 border border-blue-100 rounded-xl p-6 space-y-4 relative group">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 text-blue-600">
                          <Plus size={16} />
                          <span className="text-xs font-bold uppercase tracking-wider">New Insight</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1 hover:bg-white rounded border text-slate-400 hover:text-red-500"><Trash2 size={14} /></button>
                        </div>
                      </div>
                      <p className="text-slate-800 font-medium leading-relaxed">
                        {sug.suggestedAddition}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[10px] text-slate-400 font-mono">Source: {sug.reason}</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white border rounded text-xs font-medium text-slate-600 hover:bg-slate-50">Edit</button>
                            <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-700">Approve</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {sectionSuggestions.length === 0 && (
                    <div className="py-4 text-slate-300 text-sm italic">No new additions for this section</div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsView({ settings, onBack, onSave }: any) {
  const [localSettings, setLocalSettings] = useState(settings);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 border-b bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full">
            <X size={20} className="text-slate-500" />
          </button>
          <h1 className="text-lg font-semibold text-slate-800">Settings</h1>
        </div>
        <button onClick={() => { onSave(localSettings); onBack(); }} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Save Changes
        </button>
      </header>

      <main className="max-w-2xl mx-auto w-full p-12 space-y-12">
        <section className="space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Intelligence</h3>
          <div className="grid gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700">AI Provider</span>
              <select 
                value={localSettings.aiProvider} 
                onChange={e => setLocalSettings({...localSettings, aiProvider: e.target.value})}
                className="bg-white border rounded-lg px-4 py-2"
              >
                <option value="openai">OpenAI</option>
                <option value="claude">Claude (Anthropic)</option>
                <option value="gemini">Gemini (Google)</option>
                <option value="deepseek">DeepSeek</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700">API Key</span>
              <input 
                type="password" 
                placeholder="Paste your key here"
                onChange={e => setLocalSettings({...localSettings, [`${localSettings.aiProvider}ApiKey`]: e.target.value})}
                className="bg-white border rounded-lg px-4 py-2" 
              />
            </label>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Synthesis Strategy</h3>
          <div className="grid gap-6">
            <div className="flex items-center justify-between p-4 bg-white border rounded-xl">
              <div>
                <div className="font-medium">Voice Mirroring</div>
                <div className="text-xs text-slate-500">How strictly should we follow the Master Doc tone?</div>
              </div>
              <select 
                value={localSettings.voiceMirroring}
                onChange={e => setLocalSettings({...localSettings, voiceMirroring: e.target.value})}
                className="bg-slate-50 border rounded px-3 py-1 text-sm"
              >
                <option value="strict">Strict</option>
                <option value="natural">Natural</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white border rounded-xl">
              <div>
                <div className="font-medium">Synthesis Depth</div>
                <div className="text-xs text-slate-500">Add only new stories or enhance existing ones?</div>
              </div>
              <select 
                value={localSettings.synthesisDepth}
                onChange={e => setLocalSettings({...localSettings, synthesisDepth: e.target.value})}
                className="bg-slate-50 border rounded px-3 py-1 text-sm"
              >
                <option value="unique">Unique Only</option>
                <option value="detailed">Detailed</option>
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

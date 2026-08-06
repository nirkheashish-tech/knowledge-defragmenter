import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  FileText, 
  Plus, 
  Check, 
  X, 
  Settings as SettingsIcon, 
  Zap, 
  Loader2,
  Trash2,
  AlertCircle,
  ChevronRight,
  User,
  History,
  Info,
  ExternalLink
} from 'lucide-react';
import './styles.css';

type View = 'setup' | 'editor';

function App() {
  const [view, setView] = useState<View>('setup');
  const [masterDoc, setMasterDoc] = useState<{ name: string; content: string } | null>(null);
  const [sourceDocs, setSourceDocs] = useState<Array<{ id: string; name: string; content: string }>>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [settings, setSettings] = useState<any>(null);
  const [showSettings, setShowSettings] = useState(false);

  const refreshSettings = async () => {
    const s = await window.defrag.getSettings();
    setSettings(s);
    return s;
  };

  useEffect(() => {
    refreshSettings();
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
      setShowSettings(true);
      return;
    }

    setIsProcessing(true);
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

  const provider = settings?.aiProvider || 'openai';
  const hasKey = settings?.apiKeys?.[provider];

  return (
    <div className="h-screen bg-[#f5f5f7] flex flex-col overflow-hidden text-[#1d1d1f]">
      {/* Refined Header */}
      <header className="h-16 border-b glass flex items-center justify-between px-6 drag z-50">
        <div className="flex items-center gap-3 header-mac-padding">
          <img src="./assets/icon.png" className="w-8 h-8 rounded-lg shadow-sm" alt="Logo" />
          <h1 className="text-[17px] font-semibold tracking-tight">Knowledge Defragmenter</h1>
        </div>
        <button onClick={() => setShowSettings(true)} className="p-2 hover:bg-black/5 rounded-full no-drag transition-colors">
          <SettingsIcon size={20} className="text-[#86868b]" />
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {view === 'setup' ? (
          <main className="h-full flex flex-col items-center justify-center p-12 animate-fade">
            <div className="max-w-5xl w-full grid grid-cols-2 gap-10">
              {/* Master Doc Dropzone */}
              <div 
                onClick={handleAddMaster}
                className={`group h-80 border-[1.5px] rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${masterDoc ? 'border-blue-500 bg-white shadow-lg' : 'border-slate-300 bg-white/50 hover:border-blue-400 hover:bg-white hover:shadow-md'}`}
              >
                {masterDoc ? (
                  <div className="flex flex-col items-center animate-in">
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                      <FileText size={40} className="text-blue-600" />
                    </div>
                    <span className="font-semibold text-lg">{masterDoc.name}</span>
                    <span className="text-sm text-slate-500 mt-2">Voice Anchor Document</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Plus className="text-slate-400" />
                    </div>
                    <span className="font-semibold text-lg">Drop your Master Doc</span>
                    <span className="text-sm text-slate-400 mt-2">This anchors your style & tone</span>
                  </div>
                )}
              </div>

              {/* Source Docs Dropzone */}
              <div 
                onClick={handleAddSources}
                className={`group h-80 border-[1.5px] rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${sourceDocs.length > 0 ? 'border-indigo-500 bg-white shadow-lg' : 'border-slate-300 bg-white/50 hover:border-indigo-400 hover:bg-white hover:shadow-md'}`}
              >
                {sourceDocs.length > 0 ? (
                  <div className="flex flex-col items-center animate-in">
                    <div className="flex -space-x-6 mb-6">
                      {sourceDocs.slice(0, 3).map((doc, i) => (
                        <div key={doc.id} className="w-20 h-20 bg-indigo-50 rounded-2xl border-4 border-white shadow-sm flex items-center justify-center text-indigo-600">
                          <FileText size={32} />
                        </div>
                      ))}
                      {sourceDocs.length > 3 && (
                        <div className="w-20 h-20 bg-slate-100 rounded-2xl border-4 border-white shadow-sm flex items-center justify-center text-slate-500 font-bold text-xl">
                          +{sourceDocs.length - 3}
                        </div>
                      )}
                    </div>
                    <span className="font-semibold text-lg">{sourceDocs.length} Source Documents</span>
                    <span className="text-sm text-slate-500 mt-2">Interviews, notes, and drafts</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Plus className="text-slate-400" />
                    </div>
                    <span className="font-semibold text-lg">Drop Source Documents</span>
                    <span className="text-sm text-slate-400 mt-2">Add as many files as you need</span>
                  </div>
                )}
              </div>
            </div>

            <div className="relative mt-16">
                {!hasKey && (
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-amber-50 text-amber-700 text-[11px] font-medium py-2 px-4 rounded-full border border-amber-200 flex items-center gap-2 shadow-sm animate-in">
                        <AlertCircle size={14} />
                        <span>API Key required in Settings</span>
                    </div>
                )}
                <button 
                disabled={!masterDoc || sourceDocs.length === 0 || isProcessing}
                onClick={startSynthesis}
                className={`px-10 py-4 rounded-full font-bold text-[17px] flex items-center gap-3 shadow-2xl transition-all ${!masterDoc || sourceDocs.length === 0 || isProcessing ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-[#0071e3] text-white hover:bg-[#0077ed] hover:scale-105 active:scale-95'}`}
                >
                {isProcessing ? (
                    <>
                    <Loader2 className="animate-spin" size={20} />
                    Synthesizing Knowledge...
                    </>
                ) : (
                    <>
                    <Zap size={20} />
                    Start Automated Synthesis
                    </>
                )}
                </button>
            </div>
          </main>
        ) : (
          <EditorView 
            masterDoc={masterDoc!} 
            sourceDocs={sourceDocs}
            suggestions={suggestions} 
            onBack={() => setView('setup')} 
          />
        )}

        {/* Settings Side Drawer */}
        {showSettings && (
          <div className="absolute inset-0 z-[100] animate-fade">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowSettings(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-[420px] bg-white shadow-2xl animate-in flex flex-col">
              <div className="p-6 border-b flex items-center justify-between">
                <h2 className="text-xl font-bold">Settings</h2>
                <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-8">
                <SettingsContent 
                  settings={settings} 
                  onSave={async (s: any) => {
                    await window.defrag.saveSettings(s);
                    await refreshSettings();
                    setShowSettings(false);
                  }} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EditorView({ masterDoc, sourceDocs, suggestions, onBack }: any) {
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
    <div className="h-full flex flex-col animate-fade">
      <div className="h-12 border-b bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-sm text-blue-600 font-medium hover:underline">← Back to Setup</button>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-xs text-slate-500 font-medium">{suggestions.length} Unique additions identified</div>
          <button className="px-4 py-1.5 bg-[#0071e3] text-white rounded-full text-sm font-semibold hover:bg-[#0077ed]">Approve All</button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Master Doc */}
        <div className="w-1/2 overflow-y-auto p-12 bg-white border-r">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              <div className="w-1 h-4 bg-blue-500 rounded-full" />
              Master Document (The Anchor)
            </div>
            {sections.map((s, i) => (
              <section key={i} className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">{s.title}</h2>
                <div className="text-[17px] text-slate-700 leading-[1.6] whitespace-pre-wrap">
                  {s.content.join('\n')}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Right Pane: Source Grid */}
        <div className="w-1/2 overflow-y-auto p-12 bg-[#f5f5f7]">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              <div className="w-1 h-4 bg-indigo-500 rounded-full" />
              Synthesis Grid (New Insights)
            </div>
            
            {sections.map((s, i) => {
              const sectionSuggestions = suggestions.filter((sug: any) => sug.sectionId === s.title);
              return (
                <div key={i} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-400">{s.title}</h3>
                  <div className="grid gap-6">
                    {sectionSuggestions.map((sug: any) => (
                      <div key={sug.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 animate-in suggestion-highlight">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {sug.frequency > 1 && (
                                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    Found in {sug.frequency} docs
                                </span>
                            )}
                            <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {sug.voiceMatchScore}% Voice Match
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-red-500"><Trash2 size={14} /></button>
                          </div>
                        </div>
                        
                        <p className="text-[15px] text-slate-800 leading-relaxed font-medium mb-6">
                          "{sug.suggestedAddition}"
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                          <div className="flex -space-x-2">
                            {sug.sourceDocumentIds.map((sid: string) => {
                                const doc = sourceDocs.find((d: any) => d.id === sid);
                                return (
                                    <div key={sid} title={doc?.name} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-500">
                                        {doc?.name.charAt(0)}
                                    </div>
                                );
                            })}
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold hover:bg-slate-200">Edit</button>
                            <button className="px-4 py-1.5 bg-[#0071e3] text-white rounded-full text-xs font-semibold hover:bg-[#0077ed]">Approve</button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {sectionSuggestions.length === 0 && (
                      <div className="h-20 flex items-center justify-center border border-dashed border-slate-300 rounded-2xl text-slate-400 text-sm italic">
                        No unique additions found for this section
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsContent({ settings, onSave }: any) {
  const [localSettings, setLocalSettings] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);

  const provider = localSettings?.aiProvider || 'openai';
  const hasKey = settings?.apiKeys?.[provider];

  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Intelligence</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">AI Provider</label>
            <select 
              value={localSettings?.aiProvider} 
              onChange={e => setLocalSettings({...localSettings, aiProvider: e.target.value})}
              className="w-full bg-slate-50 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="openai">OpenAI (GPT-4o)</option>
              <option value="claude">Claude 3.5 Sonnet</option>
              <option value="gemini">Google Gemini 1.5</option>
              <option value="deepseek">DeepSeek Chat</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">API Key</label>
            <input 
              type="password" 
              placeholder={hasKey ? "••••••••••••••••" : "Paste your API key here"}
              onChange={e => setLocalSettings({...localSettings, [`${localSettings.aiProvider}ApiKey`]: e.target.value})}
              className="w-full bg-slate-50 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" 
            />
            {hasKey && <p className="text-[10px] text-green-600 font-medium">✓ Key stored securely in system keychain</p>}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Synthesis Strategy</h3>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Voice Mirroring</span>
              <select 
                value={localSettings?.voiceMirroring}
                onChange={e => setLocalSettings({...localSettings, voiceMirroring: e.target.value})}
                className="bg-white border rounded-lg px-3 py-1 text-xs font-medium"
              >
                <option value="strict">Strict</option>
                <option value="natural">Natural</option>
              </select>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Strict mirroring ensures every addition uses only the vocabulary found in your Master Doc.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Synthesis Depth</span>
              <select 
                value={localSettings?.synthesisDepth}
                onChange={e => setLocalSettings({...localSettings, synthesisDepth: e.target.value})}
                className="bg-white border rounded-lg px-3 py-1 text-xs font-medium"
              >
                <option value="unique">Unique Only</option>
                <option value="detailed">Detailed</option>
              </select>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Unique Only ignores stories you've already covered. Detailed adds extra nuances to existing stories.
            </p>
          </div>
        </div>
      </section>

      <div className="pt-6">
        <button 
          disabled={isSaving}
          onClick={async () => { 
            setIsSaving(true);
            await onSave(localSettings); 
            setIsSaving(false);
          }} 
          className="w-full py-4 bg-[#0071e3] text-white rounded-xl font-bold hover:bg-[#0077ed] transition-all disabled:bg-slate-300"
        >
          {isSaving ? 'Saving...' : 'Apply Settings'}
        </button>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

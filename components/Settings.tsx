'use client';

import { useState, useEffect } from 'react';
import { X, Key, AlertCircle } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Settings({ isOpen, onClose }: SettingsProps) {
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load API key from localStorage on mount
    const storedKey = localStorage.getItem('helvetici_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem('helvetici_api_key', apiKey.trim());
    } else {
      localStorage.removeItem('helvetici_api_key');
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClear = () => {
    setApiKey('');
    localStorage.removeItem('helvetici_api_key');
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white border border-black/10 w-full max-w-md p-8 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Key size={20} className="text-black" />
            <h2 className="text-2xl font-light tracking-tight">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-light mb-3 text-black/60">
              Anthropic API Key (Optional)
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-ant-api03-..."
              className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors text-black"
            />
          </div>

          <div className="bg-black/5 border border-black/10 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle size={16} className="text-black mt-0.5 flex-shrink-0" />
              <p className="text-xs text-black/60 font-light leading-relaxed">
                Add your own Anthropic API key to use your quota. If left blank, a shared server key will be used (rate limited).
              </p>
            </div>
          </div>

          {saved && (
            <div className="text-sm text-black text-center font-light">
              Settings saved!
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={handleClear}
            className="flex-1 px-4 py-3 bg-white border border-black/10 hover:border-black/30 transition-colors text-sm"
          >
            Clear
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 bg-black text-white hover:bg-black/90 transition-colors text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

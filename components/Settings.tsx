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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl w-full max-w-md p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Key size={20} className="text-[var(--accent)]" />
            <h2 className="text-xl font-semibold">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[var(--bg-primary)] rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Anthropic API Key (Optional)
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-ant-api03-..."
              className="w-full bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>

          <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertCircle size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
              <p className="text-xs text-[var(--text-secondary)]">
                Add your own Anthropic API key to use your quota. If left blank, a shared server key will be used (rate limited).
              </p>
            </div>
          </div>

          {saved && (
            <div className="text-sm text-green-400 text-center">
              Settings saved!
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={handleClear}
            className="flex-1 px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors text-sm"
          >
            Clear
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

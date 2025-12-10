'use client';

import { useEffect, useState } from 'react';
import Canvas from '@/components/Canvas';
import Sidebar from '@/components/Sidebar';
import Settings from '@/components/Settings';
import { useStore } from '@/lib/store';
import { Play, Trash2, Home, Settings as SettingsIcon } from 'lucide-react';
import Link from 'next/link';

export default function EditorPage() {
  const { runFlow, isRunning, nodes, edges } = useStore();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Cmd/Ctrl + Enter to run flow
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        runFlow();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [runFlow]);

  const hasNodes = nodes.length > 0;

  return (
    <div className="flex flex-col h-screen relative overflow-hidden">
      {/* Toolbar */}
      <div className="h-14 bg-[var(--bg-surface)] border-b border-[var(--border)] flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Home size={18} />
            <h1 className="text-xl font-semibold">Helvetici</h1>
          </Link>
          <div className="text-xs text-[var(--text-secondary)]">
            {nodes.length} nodes · {edges.length} connections
          </div>
        </div>

        <div className="flex items-center gap-3">
          {hasNodes && (
            <div className="text-xs text-[var(--text-secondary)] hidden sm:block">
              Press <kbd className="px-2 py-1 bg-[var(--node-bg)] border border-[var(--border)] rounded text-xs">⌘ Enter</kbd> to run
            </div>
          )}

          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 hover:bg-[var(--bg-primary)] rounded-lg transition-colors"
            title="Settings"
          >
            <SettingsIcon size={18} />
          </button>

          <button
            onClick={runFlow}
            disabled={isRunning || !hasNodes}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Play size={16} className={isRunning ? 'animate-pulse' : ''} />
            {isRunning ? 'Running...' : 'Run Flow'}
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Ambient blur orbs */}
        <div className="blur-orb-green" style={{ top: '20%', right: '30%' }} />
        <div className="blur-orb-grey" style={{ bottom: '10%', left: '25%' }} />

        <Sidebar />
        <div className="flex-1 relative z-10">
          <Canvas />
          {!hasNodes && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center max-w-md">
                <h2 className="text-2xl font-bold mb-2">Start Building</h2>
                <p className="text-[var(--text-secondary)]">
                  Drag nodes from the sidebar onto the canvas, connect them, and run your AI workflow.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                  <div className="glass-panel rounded-lg p-4">
                    <div className="text-3xl font-bold text-[var(--accent)] mb-2">01</div>
                    <div className="text-[var(--text-secondary)]">Add Text Input</div>
                  </div>
                  <div className="glass-panel rounded-lg p-4">
                    <div className="text-3xl font-bold text-[var(--accent)] mb-2">02</div>
                    <div className="text-[var(--text-secondary)]">Add AI Generate</div>
                  </div>
                  <div className="glass-panel rounded-lg p-4">
                    <div className="text-3xl font-bold text-[var(--accent)] mb-2">03</div>
                    <div className="text-[var(--text-secondary)]">Add Preview</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Settings Modal */}
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}

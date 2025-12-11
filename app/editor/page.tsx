'use client';

import { useEffect, useState } from 'react';
import Canvas from '@/components/Canvas';
import Sidebar from '@/components/Sidebar';
import Settings from '@/components/Settings';
import WorkflowManager from '@/components/WorkflowManager';
import TemplatesModal from '@/components/TemplatesModal';
import UpgradeModal from '@/components/UpgradeModal';
import Onboarding from '@/components/Onboarding';
import { useStore } from '@/lib/store';
import { getUserPlan } from '@/lib/credits';
import { Play, Trash2, Home, Settings as SettingsIcon, Save, FolderOpen, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function EditorPage() {
  const { runFlow, isRunning, nodes, edges, currentWorkflowName } = useStore();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [workflowManagerOpen, setWorkflowManagerOpen] = useState(false);
  const [workflowManagerMode, setWorkflowManagerMode] = useState<'save' | 'load'>('save');
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [userPlan, setUserPlan] = useState(getUserPlan());
  const [forceUpdate, setForceUpdate] = useState(0);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Cmd/Ctrl + Enter to run flow
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        runFlow();
      }
      // Cmd/Ctrl + S to save
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        setWorkflowManagerMode('save');
        setWorkflowManagerOpen(true);
      }
      // Cmd/Ctrl + O to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'o') {
        e.preventDefault();
        setWorkflowManagerMode('load');
        setWorkflowManagerOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [runFlow]);

  const hasNodes = nodes.length > 0;

  // Update credits display after running
  useEffect(() => {
    const interval = setInterval(() => {
      setUserPlan(getUserPlan());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRunFlow = async () => {
    const plan = getUserPlan();
    if (plan.credits <= 0) {
      setIsUpgradeOpen(true);
      return;
    }
    await runFlow();
    setUserPlan(getUserPlan());
    setForceUpdate(prev => prev + 1);
  };

  return (
    <div className="flex flex-col h-screen relative overflow-hidden bg-[#F5F5F5]">
      {/* Top Bar */}
      <div className="h-14 bg-[#E0E0E0] border-b border-gray-300 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity text-gray-900">
            <h1 className="text-lg font-bold">helvetici</h1>
          </Link>
          <span className="text-sm text-gray-600">/</span>
          {currentWorkflowName ? (
            <div className="text-sm text-gray-700 font-medium">
              {currentWorkflowName}
            </div>
          ) : (
            <div className="text-sm text-gray-600">
              Untitled Workflow
            </div>
          )}

          {/* Credits Display */}
          <button
            onClick={() => setIsUpgradeOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded hover:border-gray-400 transition-colors ml-4"
            title="View Plans"
          >
            <Zap size={14} className={userPlan.credits <= 3 ? 'text-amber-500' : 'text-gray-700'} />
            <span className={`text-xs font-medium ${userPlan.credits <= 3 ? 'text-amber-500' : 'text-gray-900'}`}>
              {userPlan.credits} credits
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsTemplatesOpen(true)}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors"
            title="Browse Templates"
          >
            Templates
          </button>

          <button
            onClick={() => {
              setWorkflowManagerMode('load');
              setWorkflowManagerOpen(true);
            }}
            className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-700"
            title="Open Workflow (⌘O)"
          >
            <FolderOpen size={16} />
          </button>

          <button
            onClick={() => {
              setWorkflowManagerMode('save');
              setWorkflowManagerOpen(true);
            }}
            className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-700"
            title="Save Workflow (⌘S)"
          >
            <Save size={16} />
          </button>

          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-700"
            title="Settings"
          >
            <SettingsIcon size={16} />
          </button>

          <button
            onClick={handleRunFlow}
            disabled={isRunning || !hasNodes}
            className="flex items-center gap-2 px-4 py-2 bg-[#c2ff00] text-black rounded hover:bg-[#b0ed00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
          >
            <Play size={16} className={isRunning ? 'animate-pulse' : ''} />
            {isRunning ? 'Running...' : 'Run'}
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden relative bg-[#FAFAFA]">
        <Sidebar />
        <div className="flex-1 relative">
          <Canvas />
          {!hasNodes && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center max-w-md">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">Start Building</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Drag nodes from the sidebar onto the canvas, connect them, and run your AI workflow.
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-gray-400 mb-2">01</div>
                    <div className="text-gray-600 text-xs">Add Input</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-gray-400 mb-2">02</div>
                    <div className="text-gray-600 text-xs">Add AI Model</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-gray-400 mb-2">03</div>
                    <div className="text-gray-600 text-xs">Add Preview</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Settings Modal */}
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* Workflow Manager Modal */}
      <WorkflowManager
        isOpen={workflowManagerOpen}
        onClose={() => setWorkflowManagerOpen(false)}
        mode={workflowManagerMode}
      />

      {/* Templates Modal */}
      <TemplatesModal isOpen={isTemplatesOpen} onClose={() => setIsTemplatesOpen(false)} />

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        reason={userPlan.credits <= 0 ? 'no_credits' : undefined}
      />

      {/* Onboarding */}
      <Onboarding />
    </div>
  );
}

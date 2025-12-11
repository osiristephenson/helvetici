'use client';

import { useState } from 'react';
import { X, Save, FolderOpen, Trash2, Plus } from 'lucide-react';
import { useStore } from '@/lib/store';

interface WorkflowManagerProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'save' | 'load';
}

export default function WorkflowManager({ isOpen, onClose, mode }: WorkflowManagerProps) {
  const { saveWorkflow, loadWorkflow, getWorkflows, deleteWorkflow, newWorkflow, currentWorkflowName } = useStore();
  const [workflowName, setWorkflowName] = useState(currentWorkflowName || '');
  const workflows = getWorkflows();

  const handleSave = () => {
    if (workflowName.trim()) {
      saveWorkflow(workflowName.trim());
      onClose();
    }
  };

  const handleLoad = (id: string) => {
    loadWorkflow(id);
    onClose();
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Delete this workflow?')) {
      deleteWorkflow(id);
    }
  };

  const handleNew = () => {
    if (confirm('Start a new workflow? Unsaved changes will be lost.')) {
      newWorkflow();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl w-full max-w-md p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {mode === 'save' ? (
              <>
                <Save size={20} className="text-[var(--accent)]" />
                <h2 className="text-xl font-semibold">Save Workflow</h2>
              </>
            ) : (
              <>
                <FolderOpen size={20} className="text-[var(--accent)]" />
                <h2 className="text-xl font-semibold">Load Workflow</h2>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[var(--bg-primary)] rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {mode === 'save' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Workflow Name
              </label>
              <input
                type="text"
                value={workflowName}
                onChange={(e) => setWorkflowName(e.target.value)}
                placeholder="My awesome workflow"
                className="w-full bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              />
            </div>

            <button
              onClick={handleSave}
              disabled={!workflowName.trim()}
              className="w-full px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity text-sm"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={handleNew}
              className="w-full flex items-center gap-2 px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
            >
              <Plus size={16} className="text-[var(--accent)]" />
              <span className="text-sm">New Workflow</span>
            </button>

            {workflows.length === 0 ? (
              <div className="text-center py-8 text-[var(--text-secondary)] text-sm">
                No saved workflows yet
              </div>
            ) : (
              <div className="space-y-2 max-h-[400px] overflow-auto">
                {workflows.map((workflow: any) => (
                  <div
                    key={workflow.id}
                    onClick={() => handleLoad(workflow.id)}
                    className="flex items-center justify-between px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors cursor-pointer group"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium">{workflow.name}</div>
                      <div className="text-xs text-[var(--text-secondary)]">
                        {new Date(workflow.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleDelete(workflow.id, e)}
                      className="p-2 opacity-0 group-hover:opacity-100 hover:bg-[var(--bg-surface)] rounded transition-all"
                      title="Delete"
                    >
                      <Trash2 size={14} className="text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

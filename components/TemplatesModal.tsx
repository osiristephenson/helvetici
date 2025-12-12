'use client';

import { useState } from 'react';
import { X, Sparkles, Zap } from 'lucide-react';
import { useStore } from '@/lib/store';
import { TEMPLATES, Template } from '@/lib/templates';

interface TemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TemplatesModal({ isOpen, onClose }: TemplatesModalProps) {
  const { newWorkflow, addNode, onConnect, updateNodeData } = useStore();

  const handleLoadTemplate = (template: Template) => {
    // Close modal and redirect to editor
    onClose();

    // Navigate to editor - the TemplatePicker will handle template selection
    window.location.href = '/editor';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <Sparkles size={24} className="text-[var(--accent)]" />
            <h2 className="text-2xl font-semibold">Starter Templates</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--bg-primary)] rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Templates Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-180px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEMPLATES.map((template) => (
              <button
                key={template.id}
                onClick={() => handleLoadTemplate(template)}
                className="group bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all text-left"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {template.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

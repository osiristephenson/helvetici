'use client';

import { useState } from 'react';
import { X, Sparkles, Zap } from 'lucide-react';
import { useStore } from '@/lib/store';
import { templates, Template } from '@/lib/templates';

interface TemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TemplatesModal({ isOpen, onClose }: TemplatesModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { newWorkflow } = useStore();

  const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'saas', label: 'SaaS' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'ecommerce', label: 'E-commerce' },
  ];

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  const handleLoadTemplate = (template: Template) => {
    if (confirm('Load this template? Current workflow will be replaced.')) {
      newWorkflow();
      const { loadWorkflow } = useStore.getState();

      // Directly set nodes and edges
      useStore.setState({
        nodes: template.nodes,
        edges: template.edges,
        currentWorkflowName: template.name,
      });

      onClose();
    }
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

        {/* Categories */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-[var(--border)] overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-180px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleLoadTemplate(template)}
                className="group bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap size={24} className="text-white" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border)] rounded-full text-[var(--text-secondary)]">
                    {template.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {template.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {template.description}
                </p>
              </button>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12 text-[var(--text-secondary)]">
              No templates in this category yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

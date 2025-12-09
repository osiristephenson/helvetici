'use client';

import { Type, Sparkles, Eye } from 'lucide-react';

const nodeTypes = [
  { type: 'textInput', icon: Type, label: 'Text Input', color: 'text-blue-400' },
  { type: 'aiGenerate', icon: Sparkles, label: 'AI Generate', color: 'text-purple-400' },
  { type: 'preview', icon: Eye, label: 'Preview', color: 'text-green-400' },
];

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-64 bg-[var(--bg-surface)] border-r border-[var(--border)] p-4 flex flex-col gap-4">
      <div>
        <h2 className="text-sm font-semibold mb-3 text-[var(--text-secondary)] uppercase tracking-wider">
          Nodes
        </h2>
        <div className="space-y-2">
          {nodeTypes.map((node) => (
            <div
              key={node.type}
              draggable
              onDragStart={(e) => onDragStart(e, node.type)}
              className="flex items-center gap-3 p-3 bg-[var(--node-bg)] border border-[var(--border)] rounded-lg cursor-grab active:cursor-grabbing hover:border-[var(--accent)] transition-colors"
            >
              <node.icon size={18} className={node.color} />
              <span className="text-sm font-medium">{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-secondary)]">
          Drag nodes onto the canvas to build your AI workflow
        </p>
      </div>
    </div>
  );
}

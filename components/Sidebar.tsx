'use client';

import { Type, Sparkles, Eye } from 'lucide-react';

const nodeTypes = [
  { type: 'textInput', icon: Type, label: 'Text Input', color: 'text-blue-400' },
  { type: 'aiGenerate', icon: Sparkles, label: 'AI Generate', color: 'text-purple-400' },
  { type: 'preview', icon: Eye, label: 'Preview', color: 'text-green-400' },
];

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    console.log('Drag started with type:', nodeType);
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-64 bg-[var(--bg-surface)] border-r border-[var(--border)] p-4 flex flex-col gap-4 relative z-10">
      <div>
        <h2 className="text-xs font-bold mb-4 text-[var(--accent)] uppercase tracking-widest">
          Nodes
        </h2>
        <div className="space-y-2">
          {nodeTypes.map((node) => (
            <div
              key={node.type}
              draggable={true}
              onDragStart={(e) => onDragStart(e, node.type)}
              className="group flex items-center gap-3 p-3 bg-[var(--node-bg)] border border-[var(--border)] rounded-xl cursor-grab active:cursor-grabbing hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all duration-200"
            >
              <div className="p-2 rounded-lg bg-[var(--bg-primary)] group-hover:bg-[var(--accent)] group-hover:bg-opacity-10 transition-all">
                <node.icon size={16} className="text-[var(--accent)]" />
              </div>
              <span className="text-sm font-medium">{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          Drag nodes onto the canvas to build your AI workflow
        </p>
      </div>
    </div>
  );
}

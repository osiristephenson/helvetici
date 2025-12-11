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
    <div className="w-56 bg-[#ECECEC] border-r border-gray-300 p-4 flex flex-col gap-4 relative z-10">
      <div>
        <h2 className="text-xs font-bold mb-4 text-gray-900 uppercase tracking-wide">
          Nodes
        </h2>
        <div className="space-y-2">
          {nodeTypes.map((node) => (
            <div
              key={node.type}
              draggable={true}
              onDragStart={(e) => onDragStart(e, node.type)}
              className="group flex items-center gap-3 p-2 bg-white border border-gray-300 rounded cursor-grab active:cursor-grabbing hover:border-[#c2ff00] hover:bg-[#c2ff00]/10 transition-all"
            >
              <div className="p-1.5 rounded bg-gray-100 group-hover:bg-[#c2ff00]/20 transition-all">
                <node.icon size={14} className="text-gray-700 group-hover:text-gray-900" />
              </div>
              <span className="text-sm font-medium text-gray-900">{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-600 leading-relaxed">
          Drag nodes onto the canvas to build your workflow
        </p>
      </div>
    </div>
  );
}

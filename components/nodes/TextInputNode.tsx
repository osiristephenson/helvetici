'use client';

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { useStore } from '@/lib/store';
import { Type, X } from 'lucide-react';

interface TextInputNodeProps {
  id: string;
  data: {
    label?: string;
    value?: string;
  };
}

function TextInputNode({ id, data }: TextInputNodeProps) {
  const updateNodeData = useStore((state) => state.updateNodeData);
  const deleteNode = useStore((state) => state.deleteNode);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateNodeData(id, { value: e.target.value });
  };

  return (
    <div className="min-w-[300px] group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Type size={16} className="text-[var(--accent)]" />
          <span className="text-sm font-semibold">Text Input</span>
        </div>
        <button
          onClick={() => deleteNode(id)}
          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 rounded transition-all"
          title="Delete node"
        >
          <X size={14} className="text-red-400" />
        </button>
      </div>

      <textarea
        className="w-full h-32 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
        placeholder="Describe what you want to generate...&#10;&#10;Example: 'A blue button with rounded corners and white text that says Click Me'"
        value={data.value || ''}
        onChange={handleChange}
      />

      <div className="mt-2 text-xs text-[var(--text-secondary)]">
        {data.value?.length || 0} characters
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-[var(--accent)]"
      />
    </div>
  );
}

export default memo(TextInputNode);

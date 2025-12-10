'use client';

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Sparkles } from 'lucide-react';

interface AIGenerateNodeProps {
  id: string;
  data: {
    label?: string;
    isGenerating?: boolean;
  };
}

function AIGenerateNode({ id, data }: AIGenerateNodeProps) {
  return (
    <div className="min-w-[280px]">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-[var(--accent)]" />
        <span className="text-sm font-semibold">AI Generate</span>
      </div>

      <div className="space-y-3">
        <select className="w-full bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-2 text-sm focus:outline-none focus:border-[var(--accent)]">
          <option>Component</option>
          <option>Code</option>
          <option>Copy</option>
          <option>Image Description</option>
        </select>

        {data.isGenerating && (
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <span className="animate-spin">⚡</span>
            Generating...
          </div>
        )}
      </div>

      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
      />

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
      />
    </div>
  );
}

export default memo(AIGenerateNode);

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
    <div className="min-w-[280px] bg-white border border-gray-300 rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-[#c2ff00]/20 rounded">
          <Sparkles size={14} className="text-gray-900" />
        </div>
        <span className="text-sm font-semibold text-gray-900">AI Generate</span>
      </div>

      <div className="space-y-3">
        <select className="w-full bg-white border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#c2ff00] text-gray-900">
          <option>Component</option>
          <option>Code</option>
          <option>Copy</option>
          <option>Image Description</option>
        </select>

        {data.isGenerating && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="animate-spin">⚡</span>
            Generating...
          </div>
        )}
      </div>

      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: '12px',
          height: '12px',
          background: '#9CA3AF',
          border: '2px solid white',
          cursor: 'crosshair',
        }}
      />

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: '12px',
          height: '12px',
          background: '#9CA3AF',
          border: '2px solid white',
          cursor: 'crosshair',
        }}
      />
    </div>
  );
}

export default memo(AIGenerateNode);

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
    <div className="min-w-[280px] group bg-white border border-gray-300 rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gray-100 rounded">
            <Type size={14} className="text-gray-700" />
          </div>
          <span className="text-sm font-semibold text-gray-900">Text Input</span>
        </div>
        <button
          onClick={() => deleteNode(id)}
          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-50 rounded transition-all"
          title="Delete node"
        >
          <X size={14} className="text-red-500" />
        </button>
      </div>

      <textarea
        className="w-full h-24 bg-white border border-gray-300 rounded p-2 text-sm resize-none focus:outline-none focus:border-[#c2ff00] focus:ring-1 focus:ring-[#c2ff00] text-gray-900 placeholder:text-gray-400"
        placeholder="Describe what you want to generate..."
        value={data.value || ''}
        onChange={handleChange}
      />

      <div className="mt-2 text-xs text-gray-500">
        {data.value?.length || 0} characters
      </div>

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

export default memo(TextInputNode);

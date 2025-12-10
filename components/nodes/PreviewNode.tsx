'use client';

import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Eye, Code, Copy, Check } from 'lucide-react';

interface PreviewNodeProps {
  id: string;
  data: {
    label?: string;
    output?: string;
  };
}

function PreviewNode({ id, data }: PreviewNodeProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (data.output) {
      navigator.clipboard.writeText(data.output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-w-[400px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Eye size={16} className="text-[var(--accent)]" />
          <span className="text-sm font-semibold">Preview</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 text-xs rounded ${
              activeTab === 'preview'
                ? 'bg-[var(--accent)] text-white'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 text-xs rounded ${
              activeTab === 'code'
                ? 'bg-[var(--accent)] text-white'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            Code
          </button>
        </div>
      </div>

      <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg min-h-[300px] relative">
        {data.output ? (
          <>
            {activeTab === 'preview' ? (
              <div
                className="p-4"
                dangerouslySetInnerHTML={{ __html: data.output }}
              />
            ) : (
              <div className="relative">
                <pre className="p-4 text-xs overflow-auto max-h-[400px] text-[var(--text-secondary)]">
                  <code>{data.output}</code>
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-2 bg-[var(--node-bg)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition-colors"
                  title="Copy code"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-[300px] text-[var(--text-secondary)] text-sm">
            <div className="text-center">
              <Code size={32} className="mx-auto mb-2 opacity-50" />
              <p>No output yet</p>
              <p className="text-xs mt-1">Connect nodes and run the flow</p>
            </div>
          </div>
        )}
      </div>

      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: '16px',
          height: '16px',
          background: '#10b981',
          border: '3px solid #0a0a0b',
          boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
          cursor: 'crosshair',
        }}
      />
    </div>
  );
}

export default memo(PreviewNode);

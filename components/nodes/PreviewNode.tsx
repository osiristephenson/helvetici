'use client';

import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Eye, Code, Copy, Check, Download, FileCode } from 'lucide-react';

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
  const [showExportMenu, setShowExportMenu] = useState(false);

  const handleCopy = () => {
    if (data.output) {
      navigator.clipboard.writeText(data.output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadHTML = () => {
    if (!data.output) return;

    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Helvetici Export</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${data.output}

  <!-- Made with Helvetici - https://helvetici.com -->
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'helvetici-export.html';
    a.click();
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
  };

  const handleDownloadReact = () => {
    if (!data.output) return;

    // Convert HTML to JSX format (basic conversion)
    let jsx = data.output
      .replace(/class=/g, 'className=')
      .replace(/for=/g, 'htmlFor=')
      .replace(/<!--.*?-->/g, '');

    const reactComponent = `import React from 'react';

export default function HelveticiComponent() {
  return (
    <>
      ${jsx}
    </>
  );
}

// Made with Helvetici - https://helvetici.com`;

    const blob = new Blob([reactComponent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'HelveticiComponent.jsx';
    a.click();
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
  };

  // Create iframe content with Tailwind CSS
  const getIframeContent = () => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      margin: 0;
      padding: 16px;
      background: white;
      min-height: 100vh;
    }
  </style>
</head>
<body>
  ${data.output || ''}
</body>
</html>`;
  };

  return (
    <div className="min-w-[400px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Eye size={16} className="text-[var(--accent)]" />
          <span className="text-sm font-semibold">Preview</span>
        </div>

        <div className="flex items-center gap-2">
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

          {data.output && (
            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="p-2 hover:bg-[var(--bg-primary)] rounded transition-colors"
                title="Export"
              >
                <Download size={14} />
              </button>

              {showExportMenu && (
                <div className="absolute right-0 top-full mt-2 bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg shadow-xl z-50 min-w-[160px]">
                  <button
                    onClick={handleDownloadHTML}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[var(--bg-primary)] text-sm text-left"
                  >
                    <FileCode size={14} />
                    Export HTML
                  </button>
                  <button
                    onClick={handleDownloadReact}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[var(--bg-primary)] text-sm text-left"
                  >
                    <FileCode size={14} />
                    Export React
                  </button>
                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[var(--bg-primary)] text-sm text-left border-t border-[var(--border)]"
                  >
                    <Copy size={14} />
                    Copy Code
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg min-h-[300px] max-h-[500px] relative overflow-hidden">
        {data.output ? (
          <>
            {activeTab === 'preview' ? (
              <iframe
                srcDoc={getIframeContent()}
                className="w-full h-full min-h-[300px] max-h-[500px] bg-white rounded-lg"
                sandbox="allow-scripts"
                title="Preview"
              />
            ) : (
              <div className="relative h-full overflow-auto max-h-[500px]">
                <pre className="p-4 text-xs overflow-auto text-[var(--text-secondary)]">
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

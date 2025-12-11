'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Book, Layers, Network, Webhook, ChevronRight } from 'lucide-react';

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    subsections: ['Quick Start', 'Basic Concepts', 'Your First Workflow'],
  },
  {
    id: 'workflows',
    title: 'Workflows',
    icon: Layers,
    subsections: ['Creating Workflows', 'Saving & Loading', 'Sharing Workflows'],
  },
  {
    id: 'nodes',
    title: 'Nodes & Agents',
    icon: Network,
    subsections: ['Node Types', 'AI Models', 'Input/Output Nodes'],
  },
  {
    id: 'api',
    title: 'API & Webhooks',
    icon: Webhook,
    subsections: ['REST API', 'Webhooks', 'Authentication'],
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');

  return (
    <div className="bg-[#ECECEC] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f9f7f3]/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            helvetici
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/product" className="hover:text-gray-600 transition-colors">
              Product
            </Link>
            <Link href="/templates" className="hover:text-gray-600 transition-colors">
              Templates
            </Link>
            <Link href="/gallery" className="hover:text-gray-600 transition-colors">
              Gallery
            </Link>
            <a href="/#pricing" className="hover:text-gray-600 transition-colors">
              Pricing
            </a>
            <Link href="/docs" className="text-gray-900 font-medium">
              Docs
            </Link>
          </div>
          <Link
            href="/editor"
            className="px-6 py-2 bg-[#c2ff00] text-black text-sm font-medium rounded-full hover:bg-[#b0ed00] transition-colors"
          >
            Launch App
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-300 min-h-screen fixed left-0 overflow-y-auto p-6">
          <h2 className="text-lg font-bold mb-6 text-gray-900">Documentation</h2>
          <nav className="space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-3 w-full text-left text-sm font-medium transition-colors ${
                      isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-[#c2ff00]' : 'text-gray-400'} />
                    {section.title}
                  </button>
                  {isActive && (
                    <ul className="mt-3 ml-7 space-y-2">
                      {section.subsections.map((sub) => (
                        <li key={sub}>
                          <a
                            href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
                          >
                            <ChevronRight size={12} />
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="ml-64 flex-1 p-12">
          <div className="max-w-4xl">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">
                {sections.find(s => s.id === activeSection)?.title}
              </h1>

              {activeSection === 'getting-started' && (
                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Quick Start</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Welcome to Helvetici! This guide will help you build your first AI workflow in under 5 minutes.
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>Launch the editor from the homepage</li>
                      <li>Drag a "Text Input" node onto the canvas</li>
                      <li>Add an "AI Generate" node next to it</li>
                      <li>Connect the nodes by dragging from one handle to another</li>
                      <li>Add a "Preview" node to see the output</li>
                      <li>Click "Run Flow" to generate your first component</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Basic Concepts</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Helvetici is built around three core concepts:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold mb-2 text-gray-900">Nodes</h3>
                        <p className="text-sm text-gray-600">
                          Individual building blocks that perform specific actions. Nodes can be inputs, AI models, logic operators, or outputs.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold mb-2 text-gray-900">Connections</h3>
                        <p className="text-sm text-gray-600">
                          Lines that link nodes together, passing data from one node to the next. The output of one node becomes the input of another.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold mb-2 text-gray-900">Workflows</h3>
                        <p className="text-sm text-gray-600">
                          A complete graph of connected nodes that defines an AI-powered process. Workflows can be saved, shared, and exported.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Your First Workflow</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Let's build a simple workflow that generates a UI component from a text description.
                    </p>
                    <div className="bg-[#c2ff00]/10 border border-[#c2ff00]/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Example:</strong> Create a workflow that takes "A blue button with rounded corners" as input and outputs production-ready HTML.
                      </p>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'workflows' && (
                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Creating Workflows</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Workflows are created by connecting nodes on the canvas. Each workflow represents a unique AI process.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Use the sidebar to drag nodes onto the canvas, then connect them by clicking and dragging from output handles to input handles.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Saving & Loading</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Save your workflows locally using the Save button (⌘S). All workflows are stored in your browser's local storage.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      To load a saved workflow, click the Open button (⌘O) and select from your saved workflows.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Sharing Workflows</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Export your workflows as JSON files to share with teammates or back up to cloud storage. In the future, we'll add direct sharing links and team collaboration features.
                    </p>
                  </section>
                </div>
              )}

              {activeSection === 'nodes' && (
                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Node Types</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Helvetici supports three primary node types:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold mb-2 text-gray-900">Text Input</h3>
                        <p className="text-sm text-gray-600">
                          Accepts user input as text. Use this to describe what you want to generate or provide context to AI models.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold mb-2 text-gray-900">AI Generate</h3>
                        <p className="text-sm text-gray-600">
                          Processes input using Claude AI to generate components, code, or content. Configure the output type and model parameters.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold mb-2 text-gray-900">Preview</h3>
                        <p className="text-sm text-gray-600">
                          Displays the output of your workflow. Toggle between visual preview and raw code view. Export as HTML or React.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'api' && (
                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">REST API</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The Helvetici API allows you to run workflows programmatically from your applications.
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <code>
                        POST /api/workflows/run<br />
                        Authorization: Bearer YOUR_API_KEY<br />
                        Content-Type: application/json<br />
                        <br />
                        {JSON.stringify({ workflowId: 'abc123', input: 'A blue button' }, null, 2)}
                      </code>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Authentication</h2>
                    <p className="text-gray-700 leading-relaxed">
                      API access requires a valid API key. Generate keys from your account settings. Pro and Unlimited plans include API access.
                    </p>
                  </section>
                </div>
              )}
            </div>

            {/* Help Section */}
            <div className="bg-[#c2ff00]/20 rounded-xl p-6 border border-[#c2ff00]/30">
              <h3 className="font-semibold mb-2 text-gray-900">Need more help?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Join our community on GitHub or reach out to support.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/osiristephenson/helvetici"
                  className="text-sm text-gray-900 hover:text-gray-700 underline"
                >
                  GitHub
                </a>
                <a
                  href="mailto:hello@helvetici.com"
                  className="text-sm text-gray-900 hover:text-gray-700 underline"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

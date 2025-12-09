'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Code2, Workflow } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Ambient blur orbs */}
      <div className="blur-orb-green" style={{ top: '10%', left: '20%' }} />
      <div className="blur-orb-grey" style={{ bottom: '20%', right: '15%' }} />
      <div className="blur-orb-green" style={{ top: '60%', left: '70%', opacity: 0.5 }} />

      {/* Hero */}
      <div className="flex-1 flex items-center justify-center px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--node-bg)] border border-[var(--border)] rounded-full text-sm mb-8">
            <Sparkles size={16} className="text-[var(--accent)]" />
            Visual AI IDE for Designers
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Build AI Workflows
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Visually
            </span>
          </h1>

          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            No code, no prompts, no complexity. Just drag nodes, connect them, and watch Claude generate your designs in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/editor"
              className="flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-all text-lg font-semibold"
            >
              Start Building
              <ArrowRight size={20} />
            </Link>

            <a
              href="https://github.com/yourusername/helvetici"
              className="flex items-center gap-2 px-8 py-4 bg-[var(--node-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-all text-lg"
            >
              <Code2 size={20} />
              View on GitHub
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">
            <div className="glass-panel rounded-xl p-6 hover:border-[var(--accent)] transition-all">
              <Workflow size={32} className="text-[var(--accent)] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Node-Based</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Build complex AI workflows by connecting visual nodes. No coding required.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-6 hover:border-[var(--accent)] transition-all">
              <Zap size={32} className="text-[var(--accent)] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Claude Powered</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Powered by Anthropic's Claude for intelligent, context-aware generation.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-6 hover:border-[var(--accent)] transition-all">
              <Code2 size={32} className="text-[var(--accent)] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Export Ready</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Generate production-ready HTML, React, or SwiftUI code instantly.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="glass-panel rounded-xl p-6">
                <div className="text-5xl font-bold text-[var(--accent)] mb-3">01</div>
                <h3 className="text-lg font-semibold mb-2">Describe</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Add a Text Input node and describe what you want to generate.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6">
                <div className="text-5xl font-bold text-[var(--accent)] mb-3">02</div>
                <h3 className="text-lg font-semibold mb-2">Connect</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Connect it to an AI Generate node and then to a Preview node.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6">
                <div className="text-5xl font-bold text-[var(--accent)] mb-3">03</div>
                <h3 className="text-lg font-semibold mb-2">Generate</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Hit Run Flow and watch Claude create your design in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-[var(--text-secondary)]">
          <p>Built by designers, for designers. Powered by Claude.</p>
          <p className="mt-2">© 2024 Helvetici. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

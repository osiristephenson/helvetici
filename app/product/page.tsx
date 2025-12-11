'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Network, Lock } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="bg-[#f9f7f3] min-h-screen text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f9f7f3]/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            helvetici
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/product" className="text-gray-900 font-medium">
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
            <Link href="/docs" className="hover:text-gray-600 transition-colors">
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The visual AI IDE for designers
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Orchestrate powerful AI workflows through an intuitive canvas. No code required, no complexity—just pure creativity.
          </p>
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 bg-[#c2ff00] text-black py-3 px-8 rounded-full text-sm font-medium hover:bg-[#b0ed00] transition-colors"
          >
            Start Building
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Visual AI Canvas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c2ff00]/20 px-3 py-1 rounded-full text-xs font-medium mb-4">
                <Sparkles size={14} />
                Visual Canvas
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Build AI workflows visually
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Drag nodes onto a canvas, connect them with visual flows, and watch your AI workflow come to life. No need to write prompts or code—just design the logic you need.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c2ff00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Intuitive node system</h3>
                    <p className="text-sm text-gray-600">Connect inputs, AI models, and outputs with simple drag-and-drop.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c2ff00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-time preview</h3>
                    <p className="text-sm text-gray-600">See your components render instantly as you build.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c2ff00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Save & share</h3>
                    <p className="text-sm text-gray-600">Export workflows as HTML, React, or share with your team.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-gray-400">Canvas illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agents, not prompts Section */}
      <section className="py-20 bg-[#f9f7f3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 w-full h-96 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-gray-400">Agent flow illustration</span>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-xs font-medium mb-4 border border-gray-200">
                <Network size={14} />
                Agent Orchestration
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Agents, not prompts
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chain multiple AI models together. Pass outputs between agents. Create sophisticated workflows that would take hours to code.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <p className="text-sm">Process user input through multiple models</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <p className="text-sm">Chain outputs from one agent to the next</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <p className="text-sm">Export production-ready components</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-ready Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium mb-4">
            <Lock size={14} />
            Enterprise-Ready
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Built for teams and enterprise
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Helvetici scales from individual designers to large organizations with enterprise-grade security and governance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#c2ff00] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Lock size={20} className="text-black" />
              </div>
              <h3 className="font-semibold mb-2">BYOK</h3>
              <p className="text-sm text-gray-600">Bring your own API keys for full control</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#c2ff00] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Network size={20} className="text-black" />
              </div>
              <h3 className="font-semibold mb-2">Integrations</h3>
              <p className="text-sm text-gray-600">Connect to your existing tools and APIs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#c2ff00] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles size={20} className="text-black" />
              </div>
              <h3 className="font-semibold mb-2">Auditability</h3>
              <p className="text-sm text-gray-600">Track every workflow run and output</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#c2ff00] rounded-full mx-auto mb-4 flex items-center justify-center">
                <ArrowRight size={20} className="text-black" />
              </div>
              <h3 className="font-semibold mb-2">Export Anywhere</h3>
              <p className="text-sm text-gray-600">HTML, React, or custom integrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f9f7f3]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start creating?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join designers and teams building the future of AI-powered interfaces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/editor"
              className="inline-flex items-center gap-2 bg-[#c2ff00] text-black py-3 px-8 rounded-full text-sm font-medium hover:bg-[#b0ed00] transition-colors"
            >
              Launch App
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 bg-white text-black py-3 px-8 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#c2ff00] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-8">
            helvetici
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-medium mb-6">
            <Link href="/product" className="hover:underline">Product</Link>
            <Link href="/templates" className="hover:underline">Templates</Link>
            <Link href="/gallery" className="hover:underline">Gallery</Link>
            <a href="/#pricing" className="hover:underline">Pricing</a>
            <Link href="/docs" className="hover:underline">Docs</Link>
          </div>
          <p className="mt-6 text-xs text-black/70">
            © {new Date().getFullYear()} Helvetici. All rights reserved. Powered by Claude AI.
          </p>
        </div>
      </footer>
    </div>
  );
}

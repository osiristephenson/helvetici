'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Code2, Workflow, Check, Star, Users, TrendingUp, Boxes } from 'lucide-react';
import Hero3DSequence from '@/components/Hero3DSequence';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-emerald-900/20 pointer-events-none" />

      {/* Ambient blur orbs - more dramatic */}
      <div className="blur-orb-green animate-pulse" style={{ top: '10%', left: '10%', width: '600px', height: '600px' }} />
      <div className="blur-orb-grey" style={{ bottom: '10%', right: '10%', width: '500px', height: '500px' }} />
      <div className="blur-orb-green" style={{ top: '50%', left: '60%', opacity: 0.3, width: '400px', height: '400px' }} />

      {/* Navigation */}
      <nav className="relative z-20 border-b border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold">Helvetici</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/gallery" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/editor" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
                Pricing
              </Link>
              <Link
                href="/editor"
                className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-emerald-500/20 rounded-full text-sm mb-8 animate-fade-in">
              <Sparkles size={16} className="text-emerald-400" />
              <span className="text-emerald-400 font-medium">Powered by Claude AI</span>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Design Beautiful UI
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Without Writing Code
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed">
              The visual AI IDE for designers. Drag nodes, connect workflows, and generate production-ready components in seconds.
              <span className="text-white font-semibold"> No prompts. No complexity. Just results.</span>
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-emerald-400" />
                <span><span className="text-white font-semibold">10,000+</span> designers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-emerald-400" />
                <span><span className="text-white font-semibold">4.9/5</span> rating</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-400" />
                <span><span className="text-white font-semibold">50k+</span> components created</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/editor"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all text-lg font-semibold"
              >
                Start Building Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/gallery"
                className="flex items-center gap-2 px-8 py-4 bg-[var(--node-bg)] border border-[var(--border)] rounded-xl hover:border-emerald-500 transition-all text-lg"
              >
                <Boxes size={20} />
                View Examples
              </Link>
            </div>

            {/* Trust Badge */}
            <p className="text-xs text-[var(--text-secondary)]">
              Free forever • No credit card required • 10 generations included
            </p>
          </div>

          {/* Hero Visual - 3D Sequence */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="glass-panel rounded-2xl p-2 shadow-2xl">
              <Hero3DSequence />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
            <div className="group glass-panel rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Workflow size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visual Workflows</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Drag and drop nodes to build complex AI workflows. Connect inputs to AI generators to preview outputs. Simple, intuitive, powerful.
              </p>
            </div>

            <div className="group glass-panel rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Generation</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Powered by Claude AI. Generate beautiful, production-ready components in seconds. See results in real-time as AI creates.
              </p>
            </div>

            <div className="group glass-panel rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Export Anywhere</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Download as HTML, React, or copy the code. Every component is production-ready with Tailwind CSS. Ship faster.
              </p>
            </div>
          </div>

          {/* How it Works */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 font-medium mb-6">
                Simple 3-Step Process
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                From idea to production-ready code in under 60 seconds
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="glass-panel rounded-2xl p-8 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                      <Workflow size={32} className="text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Drag & Connect</h3>
                  <p className="text-[var(--text-secondary)]">
                    Add nodes to the canvas. Connect text inputs to AI generators to preview outputs. Build your workflow visually.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="glass-panel rounded-2xl p-8 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-2xl flex items-center justify-center">
                      <Sparkles size={32} className="text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Describe & Generate</h3>
                  <p className="text-[var(--text-secondary)]">
                    Type what you want to create. Hit "Run Flow" and watch Claude generate beautiful, styled components instantly.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="glass-panel rounded-2xl p-8 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                      <Code2 size={32} className="text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Export & Ship</h3>
                  <p className="text-[var(--text-secondary)]">
                    Love what you see? Export as HTML, React, or copy the code. Deploy to production immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Teaser */}
          <div className="mt-32 text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 font-medium mb-6">
              Simple, Transparent Pricing
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Start Free, Scale as You Grow</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              10 free generations to get started. Upgrade when you're ready for more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Free */}
              <div className="glass-panel rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-6">
                  $0<span className="text-lg text-[var(--text-secondary)] font-normal">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {['10 generations/month', 'All templates', 'Export to HTML/React', 'Community support'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/editor"
                  className="w-full block text-center px-6 py-3 bg-[var(--node-bg)] border border-[var(--border)] rounded-xl hover:border-emerald-500 transition-all font-semibold"
                >
                  Start Free
                </Link>
              </div>

              {/* Pro */}
              <div className="relative glass-panel rounded-2xl p-8 border-2 border-emerald-500/50 hover:border-emerald-500 transition-all">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-xs font-bold text-white">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-6">
                  $9<span className="text-lg text-[var(--text-secondary)] font-normal">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {['500 generations/month', 'Remove branding', 'Priority support', 'Advanced templates'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/editor"
                  className="w-full block text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all font-semibold"
                >
                  Get Pro
                </Link>
              </div>

              {/* Unlimited */}
              <div className="glass-panel rounded-2xl p-8 hover:border-purple-500/30 transition-all">
                <h3 className="text-2xl font-bold mb-2">Unlimited</h3>
                <div className="text-4xl font-bold mb-6">
                  $29<span className="text-lg text-[var(--text-secondary)] font-normal">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {['Unlimited generations', 'Everything in Pro', 'API access', 'Custom integrations'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/editor"
                  className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold"
                >
                  Go Unlimited
                </Link>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-32 mb-20">
            <div className="glass-panel rounded-3xl p-12 sm:p-16 text-center bg-gradient-to-br from-emerald-500/10 to-purple-500/10 border-emerald-500/20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
                Join thousands of designers creating beautiful UIs with AI. No credit card required.
              </p>
              <Link
                href="/editor"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all text-lg font-bold"
              >
                Start Building Free
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 border-t border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold">Helvetici</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-xs">
                The visual AI IDE for designers. Build beautiful UIs without writing code.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/osiristephenson/helvetici"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors"
                >
                  <Code2 size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/editor" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    Editor
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/editor" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/osiristephenson/helvetici" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/osiristephenson/helvetici" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://github.com/osiristephenson/helvetici" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@helvetici.com" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)]">
            <p>© 2024 Helvetici. Built by designers, for designers. Powered by Claude AI.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { HeroSplash } from '@/components/HeroSplash';
import { ParallaxSection } from '@/components/ParallaxSection';

const buildExamples = [
  { title: 'UI Components', desc: 'Buttons, cards, modals, forms' },
  { title: 'Landing Sections', desc: 'Hero, features, testimonials' },
  { title: 'Mobile Screens', desc: 'Login, onboarding, feeds' },
  { title: 'Dashboards', desc: 'Charts, tables, stats widgets' },
];

const timeline = [
  { num: '01', title: 'Pick a template', desc: 'Choose from UI components, landing sections, or start from scratch' },
  { num: '02', title: 'Describe it', desc: 'Tell Helvetici what you want in plain English' },
  { num: '03', title: 'Generate instantly', desc: 'Get production-ready HTML or React code in seconds' },
];

const whyPoints = [
  { title: 'No code required', desc: 'Designers can ship production UI without touching code' },
  { title: 'Real components', desc: 'Not screenshots or prototypes—actual HTML/React you can use' },
  { title: 'Ship faster', desc: 'Go from concept to deployed feature in minutes, not days' },
];

const galleryItems = [
  { title: 'Sonnet Studio Dashboard', meta: '✨ Generated from one paragraph', tag: 'Dashboard' },
  { title: 'Frost Landing Flow', meta: 'Claude + custom CTA micro-interactions', tag: 'Landing' },
  { title: 'Mobile Suite', meta: 'Login, paywall, feed in 30 seconds', tag: 'Mobile' },
  { title: 'Creator Templates', meta: 'Portfolio grids with AI copy assist', tag: 'Templates' },
];

export default function Home() {
  const navAnchors = [
    { label: 'Product', target: 'product' },
    { label: 'Templates', target: 'templates' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Pricing', target: 'pricing' },
  ];

  const scrollToSection = useCallback((target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            className="text-2xl font-bold text-white uppercase tracking-tight"
            onClick={() => scrollToSection('hero')}
          >
            helvetici
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navAnchors.map((item) => (
              <button
                key={item.target}
                className="text-white/85 hover:text-white transition-colors uppercase tracking-wide"
                onClick={() => scrollToSection(item.target)}
              >
                {item.label}
              </button>
            ))}
            <Link href="/docs" className="text-white/85 hover:text-white transition-colors uppercase tracking-wide">
              Docs
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/product"
              className="hidden md:flex items-center gap-1 text-white/80 text-xs uppercase tracking-wide"
            >
              <Play size={14} />
              Watch demo
            </Link>
            <Link
              href="/editor"
              className="px-6 py-2 bg-[#c2ff00] text-black text-sm font-semibold rounded-full hover:bg-[#b7ff00] transition-colors shadow-lg"
            >
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero/Splash Section */}
        <HeroSplash videoSrc="/media/helvetici-editor-loop.mp4" posterSrc="/media/helvetici-frame.jpg" />

        {/* Product story */}
        <ParallaxSection id="product" bg="#050505" accent="dark" speed={0.35}>
          <div className="text-center text-white space-y-10">
            <p className="text-sm uppercase tracking-[0.5em] text-white/60">Product</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">What you can build</h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              UI components, landing sections, mobile screens, dashboards. From simple buttons to complete page layouts.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {buildExamples.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-white/40 transition-colors"
                >
                  <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Templates */}
        <ParallaxSection id="templates" bg="#f9f7f3" accent="grid">
          <div className="text-center text-gray-900">
            <p className="text-xs tracking-[0.5em] uppercase text-gray-500 mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Describe it. Helvetici builds it.</h2>
            <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto">
              Three deterministic steps from idea to production-ready component.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {timeline.map((step) => (
                <div key={step.num}>
                  <div className="text-6xl font-black text-gray-200 mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Gallery */}
        <ParallaxSection id="gallery" bg="white" accent="noise">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">Gallery</p>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Helvetici in the wild</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Inspired by elodiefabbri.com—video, parallax, and layers showcase real outputs.
              </p>
            </div>
            <div className="relative overflow-x-auto pb-6">
              <div className="flex gap-6 min-w-full">
                {galleryItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="min-w-[260px] md:min-w-[320px] bg-black text-white rounded-3xl p-6 border border-white/10 relative overflow-hidden"
                    style={{ transform: `translateY(${(index % 2) * 12}px)` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-xs uppercase tracking-[0.3em] text-white/60">{item.tag}</span>
                      <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Why Helvetici */}
        <ParallaxSection bg="#f9f7f3" accent="grid">
          <div className="text-center">
            <p className="text-xs tracking-[0.5em] uppercase text-gray-500 mb-4">Why Helvetici</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">No engineers. Just real output.</h2>
            <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto">
              Designed with guardrails to keep every generation within production standards.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {whyPoints.map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-[#c2ff00] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Pricing */}
        <ParallaxSection id="pricing" bg="white" accent="noise">
          <div className="text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Start free. Upgrade when ready.</h2>
            <p className="text-xl text-gray-700 mb-12">Dry run flows forever, or unlock full power.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
                <div className="text-xs tracking-wider text-gray-400 uppercase mb-4">Free</div>
                <div className="text-5xl font-bold mb-2 text-gray-900">$0</div>
                <div className="text-sm text-gray-600 mb-6">Forever</div>
                <ul className="space-y-3 mb-8 text-sm text-gray-700 text-left">
                  <li>• 10 generations/month</li>
                  <li>• All templates</li>
                  <li>• Export HTML/React</li>
                  <li>• Community support</li>
                </ul>
                <Link
                  href="/editor"
                  className="block text-center px-6 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all text-sm font-medium"
                >
                  Start Free
                </Link>
              </div>

              <div className="bg-black text-white rounded-2xl p-8 shadow-xl transform md:scale-105 border-2 border-[#c2ff00]">
                <div className="text-xs tracking-wider text-[#c2ff00] uppercase mb-4">Pro</div>
                <div className="text-5xl font-bold mb-2">$9</div>
                <div className="text-sm text-gray-300 mb-6">Per month</div>
                <ul className="space-y-3 mb-8 text-sm text-left">
                  <li>• 500 generations/month</li>
                  <li>• Remove branding</li>
                  <li>• Priority support</li>
                  <li>• Advanced templates</li>
                </ul>
                <Link
                  href="/editor"
                  className="block text-center px-6 py-3 bg-[#c2ff00] text-black rounded-full hover:bg-[#b0ed00] transition-all text-sm font-medium"
                >
                  Get Pro
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
                <div className="text-xs tracking-wider text-gray-400 uppercase mb-4">Unlimited</div>
                <div className="text-5xl font-bold mb-2 text-gray-900">$29</div>
                <div className="text-sm text-gray-600 mb-6">Per month</div>
                <ul className="space-y-3 mb-8 text-sm text-gray-700 text-left">
                  <li>• Unlimited generations</li>
                  <li>• Everything in Pro</li>
                  <li>• API access</li>
                  <li>• Custom integrations</li>
                </ul>
                <Link
                  href="/editor"
                  className="block text-center px-6 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all text-sm font-medium"
                >
                  Go Unlimited
                </Link>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Final CTA */}
        <ParallaxSection bg="#050505" accent="dark" minHeight="70vh">
          <div className="text-center text-white space-y-6">
            <p className="text-xs tracking-[0.5em] uppercase text-white/50">Final call</p>
            <h2 className="text-5xl md:text-6xl font-bold">Ready to build?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join designers and teams shipping faster with AI-powered components.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/editor"
                className="inline-flex items-center gap-2 bg-[#c2ff00] text-black py-4 px-8 rounded-full text-lg font-bold hover:bg-[#b0ed00] transition-colors shadow-lg"
              >
                Start building
                <ArrowRight size={20} />
              </Link>
              <button
                className="px-6 py-3 rounded-full border border-white/30 text-sm uppercase tracking-wide text-white/80 hover:text-white hover:border-white transition-colors"
                onClick={() => scrollToSection('gallery')}
              >
                View showcase
              </button>
            </div>
          </div>
        </ParallaxSection>

        {/* Footer */}
        <footer className="bg-[#c2ff00] py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight mb-12">
              helvetici
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-medium mb-6">
              {navAnchors.map((item) => (
                <button key={item.target} className="hover:underline" onClick={() => scrollToSection(item.target)}>
                  {item.label}
                </button>
              ))}
              <Link href="/docs" className="hover:underline">Docs</Link>
              <a href="https://github.com/osiristephenson/helvetici" className="hover:underline">GitHub</a>
            </div>
            <p className="mt-6 text-xs text-black/70">
              © {new Date().getFullYear()} Helvetici. All rights reserved. Powered by Claude AI.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

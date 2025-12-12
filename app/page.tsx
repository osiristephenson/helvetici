'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroSplash } from '@/components/HeroSplash';
import { ParallaxSection } from '@/components/ParallaxSection';

export default function Home() {
  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            helvetici
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/product" className="text-white/90 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/templates" className="text-white/90 hover:text-white transition-colors">
              Templates
            </Link>
            <Link href="/gallery" className="text-white/90 hover:text-white transition-colors">
              Gallery
            </Link>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors">
              Pricing
            </a>
            <Link href="/docs" className="text-white/90 hover:text-white transition-colors">
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

      <main>
        {/* Hero/Splash Section */}
        <HeroSplash />

        {/* What you can build */}
        <ParallaxSection bg="#f9f7f3">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What you can build
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              UI components, landing sections, mobile screens, dashboards. From simple buttons to complete page layouts.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { title: 'UI Components', desc: 'Buttons, cards, modals, forms' },
                { title: 'Landing Sections', desc: 'Hero, features, testimonials' },
                { title: 'Mobile Screens', desc: 'Login, onboarding, feeds' },
                { title: 'Dashboards', desc: 'Charts, tables, stats widgets' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* How it works */}
        <ParallaxSection bg="white">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How it works
            </h2>
            <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto">
              Three simple steps from idea to production-ready component.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { num: '01', title: 'Pick a template', desc: 'Choose from UI components, landing sections, or start from scratch' },
                { num: '02', title: 'Describe it', desc: 'Tell Helvetici what you want in plain English' },
                { num: '03', title: 'Generate instantly', desc: 'Get production-ready HTML or React code in seconds' },
              ].map((step, i) => (
                <div key={i}>
                  <div className="text-6xl font-black text-gray-200 mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Why Helvetici */}
        <ParallaxSection bg="#f9f7f3">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Helvetici
            </h2>
            <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto">
              No engineers. No boilerplate. Just real output.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'No code required', desc: 'Designers can ship production UI without touching code' },
                { title: 'Real components', desc: 'Not screenshots or prototypes—actual HTML/React you can use' },
                { title: 'Ship faster', desc: 'Go from concept to deployed feature in minutes, not days' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
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
        <ParallaxSection bg="white">
          <div className="text-center" id="pricing">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Pricing
            </h2>
            <p className="text-xl text-gray-700 mb-12">Start free. Upgrade anytime.</p>
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
        <ParallaxSection bg="#f9f7f3">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Ready to build?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join designers and teams shipping faster with AI-powered components.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center gap-2 bg-[#c2ff00] text-black py-4 px-8 rounded-full text-lg font-bold hover:bg-[#b0ed00] transition-colors shadow-lg"
            >
              Start building
              <ArrowRight size={20} />
            </Link>
          </div>
        </ParallaxSection>

        {/* Footer */}
        <footer className="bg-[#c2ff00] py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight mb-12">
              helvetici
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-medium mb-6">
              <Link href="/product" className="hover:underline">Product</Link>
              <Link href="/templates" className="hover:underline">Templates</Link>
              <Link href="/gallery" className="hover:underline">Gallery</Link>
              <a href="#pricing" className="hover:underline">Pricing</a>
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

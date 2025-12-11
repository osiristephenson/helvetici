'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [persona, setPersona] = useState<'designers' | 'developers'>('designers');

  const benefits = {
    designers: [
      {
        title: 'Prototype AI workflows fast',
        description: 'Drag nodes to create intelligent interfaces without waiting on code.',
      },
      {
        title: 'Chain logic visually',
        description: 'Link agents, prompts and data sources on a canvas and see results instantly.',
      },
      {
        title: 'Share & iterate',
        description: 'Export workflows as demos or hand them off to developers seamlessly.',
      },
    ],
    developers: [
      {
        title: 'BYOK-friendly',
        description: 'Connect your own API keys and swap models or services with ease.',
      },
      {
        title: 'Integrate anywhere',
        description: 'Embed workflows into your app via SDK or export to serverless functions.',
      },
      {
        title: 'Collaborate in sync',
        description: 'Work alongside designers on the same canvas and refine logic together.',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f9f7f3] text-black overflow-x-hidden">
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
            <a href="#pricing" className="hover:text-gray-600 transition-colors">
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
            Join Beta
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-[#f9f7f3]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Design AI workflows without code
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            A visual canvas to orchestrate models, APIs and logic. From idea to prototype in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/editor"
              className="inline-flex items-center gap-2 bg-[#c2ff00] text-black py-3 px-6 rounded-full text-sm font-medium hover:bg-[#b0ed00] transition-colors"
            >
              Get early access
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/editor"
              className="inline-flex items-center gap-2 bg-white text-black py-3 px-6 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors border border-black/10"
            >
              See live demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-[#f9f7f3]" id="product">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A canvas for orchestrating intelligent agents
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Build complex AI behaviours, connect multiple models, and ship production‑ready workflows without touching code.
          </p>
        </div>
      </section>

      {/* Persona Benefits Section */}
      <section className="py-20 bg-white" id="personas">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-12 gap-4">
            <button
              onClick={() => setPersona('designers')}
              className={`px-6 py-3 rounded-full text-sm font-medium border-2 transition-all ${
                persona === 'designers'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black/20 hover:border-black/40'
              }`}
            >
              Designers
            </button>
            <button
              onClick={() => setPersona('developers')}
              className={`px-6 py-3 rounded-full text-sm font-medium border-2 transition-all ${
                persona === 'developers'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black/20 hover:border-black/40'
              }`}
            >
              Developers
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {benefits[persona].map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Screenshot placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use-case Categories */}
      <section className="py-20 bg-[#f9f7f3]" id="usecases">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:flex md:justify-between md:items-start mb-12">
            <h2 className="text-4xl font-bold mb-6 md:mb-0">
              A helvetici workflow for every need
            </h2>
            <p className="max-w-xl text-gray-700">
              Explore templates tailored for marketing, product personalisation, customer support, and operations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Marketing', desc: 'Content generation & campaigns' },
              { name: 'Support', desc: 'Customer service automation' },
              { name: 'Personalisation', desc: 'Product recommendations' },
              { name: 'Operations', desc: 'Workflow automation' },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-300">{idx + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-600">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Carousel */}
      <section className="py-20 bg-white" id="templates">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Template gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Colour palette from an image',
                description: 'Generate a colour system and matching UI components from any uploaded image.',
              },
              {
                title: 'Summarise + reply',
                description: 'Turn lengthy user messages into concise summaries and draft natural replies.',
              },
              {
                title: 'Personalised recommendations',
                description: 'Recommend products using embeddings and previous user actions.',
              },
            ].map((template, i) => (
              <div
                key={i}
                className="bg-[#f9f7f3] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{template.title}</h3>
                <p className="text-gray-700 mb-6">{template.description}</p>
                <Link
                  href="/editor"
                  className="inline-flex items-center gap-2 bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition-colors"
                >
                  Use template
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Stories */}
      <section className="py-20 bg-[#f9f7f3]" id="stories">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Stories from our community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((id) => (
              <Link
                key={id}
                href="/gallery"
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                  <span className="text-gray-400">Community story {id}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Featured workflow</p>
                    <p className="font-semibold">Story title goes here</p>
                  </div>
                  <span className="h-8 w-8 bg-[#c2ff00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="text-black" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-black text-white py-3 px-6 rounded-full text-sm hover:bg-gray-800 transition-colors"
            >
              View all stories
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team & Mission */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-5xl mx-auto px-4 md:flex md:items-center md:justify-between gap-12">
          <div className="mb-8 md:mb-0 flex-1">
            <h2 className="text-4xl font-bold mb-4">The team behind the tech</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We're a group of designers, engineers and dreamers building a future where AI workflows are tools for everyone—not just developers.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center gap-2 bg-black text-white py-3 px-6 rounded-full text-sm hover:bg-gray-800 transition-colors"
            >
              Learn more about us
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
            <span className="text-gray-400">Team photo</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#f9f7f3]" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-gray-700">Start free. Upgrade anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-xs tracking-wider text-gray-400 uppercase mb-4">Free</div>
              <div className="text-5xl font-bold mb-2">$0</div>
              <div className="text-sm text-gray-600 mb-6">Forever</div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li>• 10 generations/month</li>
                <li>• All templates</li>
                <li>• Export HTML/React</li>
                <li>• Community support</li>
              </ul>
              <Link
                href="/editor"
                className="block text-center px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all text-sm"
              >
                Start Free
              </Link>
            </div>

            <div className="bg-black text-white rounded-2xl p-8 shadow-xl transform md:scale-105">
              <div className="text-xs tracking-wider text-[#c2ff00] uppercase mb-4">Pro</div>
              <div className="text-5xl font-bold mb-2">$9</div>
              <div className="text-sm text-gray-300 mb-6">Per month</div>
              <ul className="space-y-3 mb-8 text-sm">
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

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-xs tracking-wider text-gray-400 uppercase mb-4">Unlimited</div>
              <div className="text-5xl font-bold mb-2">$29</div>
              <div className="text-sm text-gray-600 mb-6">Per month</div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li>• Unlimited generations</li>
                <li>• Everything in Pro</li>
                <li>• API access</li>
                <li>• Custom integrations</li>
              </ul>
              <Link
                href="/editor"
                className="block text-center px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all text-sm"
              >
                Go Unlimited
              </Link>
            </div>
          </div>
        </div>
      </section>

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
  );
}

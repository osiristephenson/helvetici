'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, MessageSquare, TrendingUp, Users, FileText } from 'lucide-react';
import { useState } from 'react';

const templates = [
  {
    id: 1,
    name: 'Personalized Marketing Campaign',
    description: 'Generate tailored marketing copy based on user segments and preferences.',
    tags: ['Marketing', 'Personalization', 'Content'],
    icon: TrendingUp,
  },
  {
    id: 2,
    name: 'Customer Support Triage',
    description: 'Automatically categorize and route support tickets based on urgency and topic.',
    tags: ['Support', 'Automation', 'AI'],
    icon: MessageSquare,
  },
  {
    id: 3,
    name: 'Internal Onboarding Assistant',
    description: 'Create interactive onboarding materials that adapt to employee roles.',
    tags: ['Operations', 'HR', 'Internal'],
    icon: Users,
  },
  {
    id: 4,
    name: 'Weekly Data-to-Insights Report',
    description: 'Transform raw analytics data into executive-ready insights and visualizations.',
    tags: ['Analytics', 'Reports', 'Operations'],
    icon: FileText,
  },
  {
    id: 5,
    name: 'Product Description Generator',
    description: 'Create compelling product descriptions optimized for SEO and conversions.',
    tags: ['E-commerce', 'Marketing', 'Content'],
    icon: Sparkles,
  },
  {
    id: 6,
    name: 'Email Newsletter Builder',
    description: 'Generate engaging newsletter content based on recent blog posts and updates.',
    tags: ['Marketing', 'Content', 'Email'],
    icon: FileText,
  },
  {
    id: 7,
    name: 'Social Media Content Calendar',
    description: 'Plan and generate weeks of social media posts tailored to your brand voice.',
    tags: ['Marketing', 'Social', 'Content'],
    icon: TrendingUp,
  },
  {
    id: 8,
    name: 'Feedback Analysis Dashboard',
    description: 'Analyze customer feedback and surface actionable insights automatically.',
    tags: ['Analytics', 'Support', 'AI'],
    icon: MessageSquare,
  },
];

const categories = ['All', 'Marketing', 'Support', 'Operations', 'E-commerce', 'Analytics'];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter(t => t.tags.includes(selectedCategory));

  return (
    <div className="bg-[#f9f7f3] min-h-screen text-gray-900">
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
            <Link href="/templates" className="text-gray-900 font-medium">
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
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Template Library
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pre-built workflows to kickstart your AI projects. Clone, customize, and ship in minutes.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="w-12 h-12 bg-[#c2ff00]/20 rounded-full flex items-center justify-center mb-4">
                    <Icon size={24} className="text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{template.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/editor"
                    className="inline-flex items-center gap-2 bg-[#c2ff00] text-black py-2 px-6 rounded-full text-sm font-medium hover:bg-[#b0ed00] transition-colors group-hover:gap-3"
                  >
                    Use this template
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't see what you need?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Build your own custom workflow from scratch in the visual editor.
          </p>
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 bg-[#c2ff00] text-black py-3 px-8 rounded-full text-sm font-medium hover:bg-[#b0ed00] transition-colors"
          >
            Start from Blank
            <ArrowRight size={16} />
          </Link>
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

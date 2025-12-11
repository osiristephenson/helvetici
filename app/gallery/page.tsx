'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles, ExternalLink } from 'lucide-react';

// This is a placeholder - in production, you'd fetch from a database
const galleryItems = [
  {
    id: 1,
    title: 'SaaS Landing Hero',
    author: 'Anonymous',
    preview: 'A beautiful gradient hero section with CTA buttons',
    category: 'SaaS',
  },
  {
    id: 2,
    title: 'Pricing Cards',
    author: 'Anonymous',
    preview: '3-tier pricing cards with feature comparison',
    category: 'Marketing',
  },
  {
    id: 3,
    title: 'Feature Grid',
    author: 'Anonymous',
    preview: 'Modern feature grid with gradient icons',
    category: 'Landing',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Gallery</h1>
              <p className="text-[var(--text-secondary)]">
                Explore beautiful components created with Helvetici
              </p>
            </div>
            <Link
              href="/editor"
              className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Sparkles size={18} />
              Create Your Own
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center py-20">
          <Sparkles size={48} className="mx-auto mb-4 text-[var(--accent)] opacity-50" />
          <h2 className="text-2xl font-bold mb-2">Gallery Coming Soon</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            We're working on a showcase of the best Helvetici creations.
            <br />
            Want to be featured? Create something amazing and share it with us!
          </p>
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Start Creating
          </Link>
        </div>
      </div>
    </div>
  );
}

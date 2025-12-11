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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors mb-8 font-light"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-light tracking-tight mb-4">Gallery</h1>
              <p className="text-xl text-black/60 font-light">
                Explore beautiful components created with Helvetici
              </p>
            </div>
            <Link
              href="/editor"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors"
            >
              <Sparkles size={18} />
              <span className="text-sm font-medium">Create Your Own</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-32">
        <div className="text-center">
          <Sparkles size={48} className="mx-auto mb-6 text-black/20" />
          <h2 className="text-3xl font-light tracking-tight mb-4">Gallery Coming Soon</h2>
          <p className="text-black/60 font-light leading-relaxed mb-12 max-w-xl mx-auto">
            We're working on a showcase of the best Helvetici creations.
            <br />
            Want to be featured? Create something amazing and share it with us!
          </p>
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors"
          >
            <span className="text-sm font-medium">Start Creating</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

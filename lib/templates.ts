import { Node, Edge } from '@xyflow/react';

export interface Template {
  id: string;
  name: string;
  description: string;
  category: 'landing' | 'marketing' | 'saas' | 'ecommerce';
  nodes: Node[];
  edges: Edge[];
}

export const templates: Template[] = [
  {
    id: 'saas-hero',
    name: 'SaaS Landing Hero',
    description: 'Modern hero section with gradient background, headline, and CTA',
    category: 'saas',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create a stunning SaaS landing page hero section with a gradient background from indigo to purple, bold headline "Ship Faster with AI", subtitle about boosting productivity, and a prominent CTA button',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'pricing-cards',
    name: 'Pricing Cards',
    description: '3-tier pricing cards with features and CTAs',
    category: 'saas',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create 3 beautiful pricing cards side by side: Starter ($9/mo), Pro ($29/mo - highlighted), Enterprise ($99/mo). Each card should have features list with checkmarks, different gradients, and a subscribe button. Make the Pro plan stand out with extra shadow and border.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'feature-grid',
    name: 'Feature Grid',
    description: '3x2 grid showcasing product features with icons',
    category: 'marketing',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create a 3-column grid of features: "Lightning Fast" with speed icon, "Secure" with lock icon, "24/7 Support" with chat icon, "Easy to Use" with star icon, "Scalable" with growth icon, "Affordable" with dollar icon. Each card should have a gradient icon background, title, and description.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'email-signup',
    name: 'Email Signup Form',
    description: 'Beautiful email capture form with validation',
    category: 'marketing',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create an email signup form with headline "Join 10,000+ subscribers", subtitle about weekly tips, email input field with placeholder, gradient submit button "Get Started Free", and small privacy text. Use purple gradient background.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'testimonials',
    name: 'Testimonial Section',
    description: 'Customer testimonials with avatars and ratings',
    category: 'landing',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create 3 testimonial cards with 5-star ratings, customer quotes, circular avatar placeholders (colored gradients), customer names, and job titles. Each card should have subtle shadow and border. Display them in a row.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'cta-banner',
    name: 'CTA Banner',
    description: 'Eye-catching call-to-action banner',
    category: 'marketing',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create a full-width CTA banner with gradient background (blue to purple), large headline "Ready to get started?", subtitle "Join thousands of happy customers", two buttons: "Start Free Trial" (white) and "View Demo" (outline). Add some visual interest with subtle patterns or shapes.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'stats-display',
    name: 'Stats Display',
    description: 'Impressive statistics to build credibility',
    category: 'landing',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create a stats section with 4 metrics in a row: "10M+ Users" with user icon, "$2B+ Revenue" with money icon, "150+ Countries" with globe icon, "99.9% Uptime" with checkmark icon. Each stat should have large numbers, labels, gradient icons, and subtle backgrounds.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'contact-form',
    name: 'Contact Form',
    description: 'Professional contact form with multiple fields',
    category: 'marketing',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create a contact form with headline "Get in Touch", fields for name, email, subject, message (textarea), gradient submit button "Send Message", and contact info sidebar with email, phone, address icons. Modern, clean design with proper spacing.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'faq-section',
    name: 'FAQ Section',
    description: 'Accordion-style frequently asked questions',
    category: 'landing',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create an FAQ section with headline "Frequently Asked Questions" and 5 questions in an accordion style: "How does it work?", "What\'s included?", "Can I cancel anytime?", "Do you offer refunds?", "How do I get started?". Each question should have a chevron icon and subtle hover effects.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
  {
    id: 'product-showcase',
    name: 'Product Showcase',
    description: 'Product display with image placeholder and details',
    category: 'ecommerce',
    nodes: [
      {
        id: 'text-1',
        type: 'textInput',
        position: { x: 100, y: 100 },
        data: {
          label: 'Prompt',
          value: 'Create a product showcase with large image placeholder (gradient rectangle), product name "Premium Headphones", 5-star rating, price "$299", feature bullets, "Add to Cart" button, and "Add to Wishlist" link. Modern ecommerce design with proper hierarchy.',
        },
      },
      {
        id: 'ai-1',
        type: 'aiGenerate',
        position: { x: 450, y: 100 },
        data: { label: 'AI Generate' },
      },
      {
        id: 'preview-1',
        type: 'preview',
        position: { x: 800, y: 100 },
        data: { label: 'Preview' },
      },
    ],
    edges: [
      { id: 'e1', source: 'text-1', target: 'ai-1' },
      { id: 'e2', source: 'ai-1', target: 'preview-1' },
    ],
  },
];

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(request: NextRequest) {
  try {
    const { prompt, context, outputType, userApiKey } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Use user's API key if provided, otherwise fall back to server key
    const apiKey = userApiKey || (process.env.ANTHROPIC_API_KEY || '').trim();

    if (!apiKey) {
      return NextResponse.json(
        { error: 'No API key provided. Please add your Anthropic API key in Settings.' },
        { status: 401 }
      );
    }

    const anthropic = new Anthropic({
      apiKey: apiKey.trim(),
    });

    const systemPrompt = `You are Helvetici, an elite AI design assistant. Generate stunning, production-ready HTML components using modern design principles.

DESIGN SYSTEM:
Colors:
- Primary: blue-600, indigo-600, violet-600
- Accent: purple-500, fuchsia-500, pink-500
- Neutral: slate-900, slate-700, slate-500, slate-300, slate-100
- Success: emerald-500 | Warning: amber-500 | Error: red-500

Typography:
- Headings: text-5xl/4xl/3xl/2xl/xl font-bold tracking-tight
- Body: text-base/sm font-normal text-slate-700
- Subtle: text-sm/xs text-slate-500

Spacing: p/m/gap-{2,4,6,8,12,16,24}
Shadows: shadow-sm/md/lg/xl/2xl
Borders: rounded-lg/xl/2xl/3xl border border-slate-200
Effects: backdrop-blur-sm, bg-opacity-90, hover states

COMPONENT PATTERNS:

Hero Section:
<div class="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-16 rounded-3xl shadow-2xl">
  <h1 class="text-6xl font-bold text-white mb-4 tracking-tight">Amazing Product</h1>
  <p class="text-xl text-white/90 mb-8 max-w-2xl">Beautiful description that sells your product</p>
  <button class="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all">Get Started</button>
</div>

Pricing Card:
<div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all">
  <h3 class="text-2xl font-bold text-slate-900 mb-2">Pro Plan</h3>
  <div class="text-5xl font-bold text-slate-900 mb-6">$29<span class="text-lg text-slate-500">/mo</span></div>
  <ul class="space-y-3 mb-8 text-slate-600">
    <li class="flex items-center gap-2"><svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Unlimited projects</li>
  </ul>
  <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg">Subscribe</button>
</div>

Feature Grid:
<div class="grid grid-cols-3 gap-6">
  <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
    <h3 class="text-xl font-bold text-slate-900 mb-2">Fast</h3>
    <p class="text-slate-600">Lightning quick performance</p>
  </div>
</div>

RULES:
- Make it BEAUTIFUL - use gradients, shadows, proper spacing
- Be CREATIVE - don't be boring, surprise the user
- PRODUCTION READY - looks like it's from a $10k website
- NO markdown fences, NO explanations
- Return ONLY raw HTML

${context ? `\nDesign Context:\n${context}` : ''}`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    let output = message.content[0].type === 'text' ? message.content[0].text : '';

    // Strip markdown code fences if present
    output = output.replace(/^```(?:html|xml|jsx?|tsx?)?\n?/gm, '');
    output = output.replace(/\n?```$/gm, '');
    output = output.trim();

    return NextResponse.json({
      output,
      type: outputType || 'component',
    });
  } catch (error: any) {
    console.error('Claude API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate content' },
      { status: 500 }
    );
  }
}

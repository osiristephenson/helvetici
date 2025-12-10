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

    const systemPrompt = `You are Helvetici, an AI design assistant. Generate beautiful, visually styled HTML components.

CRITICAL RULES:
- Output complete HTML with Tailwind CSS utility classes that render ACTUAL visual styles
- Use REAL gradients (bg-gradient-to-r from-blue-500 to-purple-600)
- Use REAL shadows (shadow-xl, shadow-2xl)
- Use REAL colors (bg-blue-500, text-white, border-purple-400)
- Use REAL typography (text-2xl font-bold, text-gray-600)
- Use REAL spacing (p-8, m-4, gap-6)
- Use REAL effects (rounded-2xl, backdrop-blur-lg, opacity-90)
- DO NOT just describe styles in text - APPLY them with Tailwind classes
- DO NOT wrap output in markdown code fences
- DO NOT include explanations
- Return ONLY the raw HTML that will render beautifully
- Wrap output in a single div

EXAMPLE:
Input: "gradient card"
Output: <div class="p-8 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-2xl"><h2 class="text-3xl font-bold text-white mb-2">Beautiful Card</h2><p class="text-white/80">This is a styled component.</p></div>

${context ? `Design Context:\n${context}` : ''}`;

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

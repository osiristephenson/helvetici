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

    const systemPrompt = `You are Helvetici, an AI design assistant. Generate clean, production-ready code based on the designer's description.

Rules:
- Output valid HTML with inline Tailwind CSS classes
- Use modern, minimal design aesthetics
- Follow the provided design context/tokens if given
- Make it responsive
- DO NOT wrap output in markdown code fences (no \`\`\`html or \`\`\`)
- DO NOT include any explanations or commentary
- Return ONLY the raw HTML code
- Wrap output in a single div with class 'helvetici-output'

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

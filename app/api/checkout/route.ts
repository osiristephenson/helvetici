import { NextRequest, NextResponse } from 'next/server';

// This is a placeholder. To enable Stripe:
// 1. npm install stripe
// 2. Add STRIPE_SECRET_KEY to .env.local
// 3. Create products and prices in Stripe Dashboard
// 4. Update PLANS in lib/credits.ts with real price IDs

export async function POST(request: NextRequest) {
  try {
    const { priceId, tier } = await request.json();

    // TODO: Implement Stripe checkout
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const session = await stripe.checkout.sessions.create({
    //   mode: 'subscription',
    //   payment_method_types: ['card'],
    //   line_items: [{ price: priceId, quantity: 1 }],
    //   success_url: `${process.env.NEXT_PUBLIC_URL}/editor?upgrade=success`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_URL}/editor?upgrade=cancelled`,
    //   metadata: { tier },
    // });
    // return NextResponse.json({ url: session.url });

    // Temporary: Return success for testing
    return NextResponse.json({
      url: '/editor?upgrade=demo',
      message: 'Stripe not configured yet. Add STRIPE_SECRET_KEY to enable payments.',
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

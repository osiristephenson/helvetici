'use client';

import { useState } from 'react';
import { X, Check, Zap, Sparkles, Crown } from 'lucide-react';
import { PLANS, getUserPlan } from '@/lib/credits';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  reason?: 'no_credits' | 'feature_locked';
}

export default function UpgradeModal({ isOpen, onClose, reason }: UpgradeModalProps) {
  const [loading, setLoading] = useState(false);
  const userPlan = getUserPlan();

  const handleUpgrade = async (tier: 'pro' | 'unlimited') => {
    setLoading(true);

    try {
      // Call Stripe checkout API
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: PLANS[tier].priceId,
          tier,
        }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Upgrade error:', error);
      alert('Failed to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-black/10 w-full max-w-5xl max-h-[90vh] overflow-auto shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-black/5 p-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-2">
              {reason === 'no_credits' ? 'Out of Credits' : 'Upgrade'}
            </h2>
            <p className="text-sm text-black/60 font-light">
              {reason === 'no_credits'
                ? `You've used all ${userPlan.maxCredits} credits this month. Upgrade for more!`
                : 'Choose a plan that works for you'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border-t border-black/10 pt-8">
            <div className="text-xs tracking-wider text-black/40 uppercase mb-4">Free</div>
            <div className="mb-6">
              <div className="text-5xl font-light mb-2">$0</div>
              <div className="text-sm text-black/60 font-light">Forever</div>
            </div>
            <ul className="space-y-3 mb-8">
              {PLANS.free.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/60 font-light">
                  <Check size={16} className="text-black mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              disabled={userPlan.tier === 'free'}
              className="w-full py-3 border border-black/10 text-black text-sm opacity-50 cursor-not-allowed"
            >
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-t border-black pt-8 relative">
            <div className="absolute -top-3 left-0 bg-black text-white px-3 py-1 text-xs tracking-wider">
              POPULAR
            </div>
            <div className="text-xs tracking-wider text-black uppercase mb-4">Pro</div>
            <div className="mb-6">
              <div className="text-5xl font-light mb-2">${PLANS.pro.price}</div>
              <div className="text-sm text-black/60 font-light">Per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              {PLANS.pro.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/60 font-light">
                  <Check size={16} className="text-black mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('pro')}
              disabled={loading || userPlan.tier !== 'free'}
              className="w-full py-3 bg-black text-white text-sm hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Loading...' : userPlan.tier === 'pro' ? 'Current Plan' : 'Get Pro'}
            </button>
          </div>

          {/* Unlimited Plan */}
          <div className="border-t border-black/10 pt-8">
            <div className="text-xs tracking-wider text-black/40 uppercase mb-4">Unlimited</div>
            <div className="mb-6">
              <div className="text-5xl font-light mb-2">${PLANS.unlimited.price}</div>
              <div className="text-sm text-black/60 font-light">Per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              {PLANS.unlimited.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/60 font-light">
                  <Check size={16} className="text-black mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('unlimited')}
              disabled={loading || userPlan.tier === 'unlimited'}
              className="w-full py-3 border border-black text-black text-sm hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Loading...' : userPlan.tier === 'unlimited' ? 'Current Plan' : 'Go Unlimited'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--bg-surface)] border-b border-[var(--border)] p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">
              {reason === 'no_credits' ? 'Out of Credits' : 'Upgrade to Pro'}
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              {reason === 'no_credits'
                ? `You've used all ${userPlan.maxCredits} credits this month. Upgrade for more!`
                : 'Unlock unlimited generations and premium features'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--bg-primary)] rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-slate-400" />
              <h3 className="text-xl font-bold">Free</h3>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold mb-1">$0</div>
              <div className="text-sm text-[var(--text-secondary)]">Forever free</div>
            </div>
            <ul className="space-y-3 mb-6">
              {PLANS.free.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              disabled={userPlan.tier === 'free'}
              className="w-full py-3 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl font-semibold opacity-50 cursor-not-allowed"
            >
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500 rounded-2xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} className="text-purple-500" />
              <h3 className="text-xl font-bold">Pro</h3>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold mb-1">${PLANS.pro.price}</div>
              <div className="text-sm text-[var(--text-secondary)]">per month</div>
            </div>
            <ul className="space-y-3 mb-6">
              {PLANS.pro.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('pro')}
              disabled={loading || userPlan.tier !== 'free'}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {loading ? 'Loading...' : userPlan.tier === 'pro' ? 'Current Plan' : 'Upgrade to Pro'}
            </button>
          </div>

          {/* Unlimited Plan */}
          <div className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Crown size={20} className="text-amber-500" />
              <h3 className="text-xl font-bold">Unlimited</h3>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold mb-1">${PLANS.unlimited.price}</div>
              <div className="text-sm text-[var(--text-secondary)]">per month</div>
            </div>
            <ul className="space-y-3 mb-6">
              {PLANS.unlimited.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('unlimited')}
              disabled={loading || userPlan.tier === 'unlimited'}
              className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {loading ? 'Loading...' : userPlan.tier === 'unlimited' ? 'Current Plan' : 'Upgrade to Unlimited'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

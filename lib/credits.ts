// Credits and subscription management

export interface UserPlan {
  tier: 'free' | 'pro' | 'unlimited';
  credits: number;
  maxCredits: number;
  subscriptionId?: string;
  subscriptionStatus?: 'active' | 'cancelled' | 'past_due';
}

export const PLANS = {
  free: {
    name: 'Free',
    credits: 10,
    price: 0,
    features: [
      '10 generations per month',
      'All templates',
      'Export to HTML/React',
      'Helvetici branding',
    ],
  },
  pro: {
    name: 'Pro',
    credits: 500,
    price: 9,
    priceId: 'price_pro_monthly', // Replace with actual Stripe price ID
    features: [
      '500 generations per month',
      'All templates',
      'Priority support',
      'Remove Helvetici branding',
      'Export to HTML/React',
    ],
  },
  unlimited: {
    name: 'Unlimited',
    credits: 999999,
    price: 29,
    priceId: 'price_unlimited_monthly', // Replace with actual Stripe price ID
    features: [
      'Unlimited generations',
      'All templates',
      'Priority support',
      'Remove Helvetici branding',
      'Export to HTML/React/SwiftUI',
      'Early access to new features',
    ],
  },
};

export function getUserPlan(): UserPlan {
  if (typeof window === 'undefined') {
    return {
      tier: 'free',
      credits: 10,
      maxCredits: 10,
    };
  }

  const stored = localStorage.getItem('helvetici_user_plan');
  if (stored) {
    return JSON.parse(stored);
  }

  // Default free plan
  const defaultPlan: UserPlan = {
    tier: 'free',
    credits: 10,
    maxCredits: 10,
  };

  localStorage.setItem('helvetici_user_plan', JSON.stringify(defaultPlan));
  return defaultPlan;
}

export function setUserPlan(plan: UserPlan) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('helvetici_user_plan', JSON.stringify(plan));
}

export function useCredit(): boolean {
  const plan = getUserPlan();

  if (plan.credits <= 0) {
    return false;
  }

  plan.credits -= 1;
  setUserPlan(plan);
  return true;
}

export function resetMonthlyCredits() {
  const plan = getUserPlan();
  plan.credits = plan.maxCredits;
  setUserPlan(plan);
}

export function upgradePlan(tier: 'pro' | 'unlimited', subscriptionId: string) {
  const planConfig = PLANS[tier];
  const newPlan: UserPlan = {
    tier,
    credits: planConfig.credits,
    maxCredits: planConfig.credits,
    subscriptionId,
    subscriptionStatus: 'active',
  };
  setUserPlan(newPlan);
}

export function cancelSubscription() {
  const plan = getUserPlan();
  plan.subscriptionStatus = 'cancelled';
  setUserPlan(plan);
}

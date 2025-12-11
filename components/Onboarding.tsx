'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles, Play } from 'lucide-react';

export default function Onboarding() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem('helvetici_onboarding_complete');
    if (!hasSeenOnboarding) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('helvetici_onboarding_complete', 'true');
    setIsOpen(false);
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleClose();
    }
  };

  const steps = [
    {
      title: 'Welcome to Helvetici',
      description: 'The visual AI IDE for designers. Build beautiful components without writing code.',
      icon: Sparkles,
    },
    {
      title: 'Drag & Connect Nodes',
      description: 'Drag nodes from the sidebar onto the canvas. Connect them to create AI workflows.',
      icon: ArrowRight,
    },
    {
      title: 'Run Your Flow',
      description: 'Click "Run Flow" or press ⌘+Enter to generate beautiful, production-ready components.',
      icon: Play,
    },
  ];

  if (!isOpen) return null;

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl max-w-md w-full p-8 shadow-2xl relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-[var(--bg-primary)] rounded-lg transition-colors"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{currentStep.title}</h2>
          <p className="text-[var(--text-secondary)]">{currentStep.description}</p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === step
                  ? 'w-8 bg-[var(--accent)]'
                  : 'w-2 bg-[var(--border)]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          {step < steps.length - 1 ? 'Next' : 'Get Started'}
        </button>

        <button
          onClick={handleClose}
          className="w-full mt-2 py-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
        >
          Skip
        </button>
      </div>
    </div>
  );
}

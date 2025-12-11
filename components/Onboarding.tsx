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
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-black/10 max-w-md w-full p-12 shadow-xl relative">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 hover:bg-black/5 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-black flex items-center justify-center mx-auto mb-6">
            <Icon size={24} className="text-white" />
          </div>
          <h2 className="text-3xl font-light tracking-tight mb-4">{currentStep.title}</h2>
          <p className="text-black/60 font-light leading-relaxed">{currentStep.description}</p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all ${
                i === step
                  ? 'w-8 bg-black'
                  : 'w-1 bg-black/20'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full py-3 bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors"
        >
          {step < steps.length - 1 ? 'Next' : 'Get Started'}
        </button>

        <button
          onClick={handleClose}
          className="w-full mt-3 py-2 text-sm text-black/60 hover:text-black transition-colors font-light"
        >
          Skip
        </button>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero3DSequence() {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Image sequence - add your 4 photos here
  const frames = [
    '/avatar-1.jpg',
    '/avatar-2.jpg',
    '/avatar-3.jpg',
    '/avatar-4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 250); // Change frame every 250ms (4 FPS for smooth rotation)

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="relative w-full max-w-[500px] h-[500px] mx-auto">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-teal-500/20 blur-3xl" />

      {/* Rotating image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-2xl shadow-[var(--accent)]/50">
          <Image
            src={frames[currentFrame]}
            alt="Founder"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Additional glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/30 to-transparent pointer-events-none" />
    </div>
  );
}

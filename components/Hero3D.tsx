'use client';

import { useEffect, useRef } from 'react';

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Simple 3D card rotation effect with image
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rotation = 0;
    const img = new Image();
    img.src = '/avatar-original.jpg'; // Your photo

    const animate = () => {
      if (!ctx) return;

      rotation += 0.005;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate 3D perspective
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = Math.abs(Math.cos(rotation));

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(scale, 1);
      ctx.translate(-centerX, -centerY);

      // Draw image with circular mask and glow
      if (img.complete) {
        const size = 400;
        const x = centerX - size / 2;
        const y = centerY - size / 2;

        // Add glow effect
        ctx.shadowColor = 'rgba(16, 185, 129, 0.5)';
        ctx.shadowBlur = 40;

        // Circular clip
        ctx.beginPath();
        ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(img, x, y, size, size);
      }

      ctx.restore();

      requestAnimationFrame(animate);
    };

    img.onload = () => animate();
    if (img.complete) animate();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 rounded-3xl" />

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="relative z-10"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)] to-transparent opacity-20 blur-3xl" />
    </div>
  );
}

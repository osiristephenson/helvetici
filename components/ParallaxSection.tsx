"use client";

import { useEffect, useRef, useState } from "react";

type ParallaxSectionProps = {
  id?: string;
  children: React.ReactNode;
  bg?: string;
  accent?: "grid" | "noise" | "dark";
  speed?: number;
  minHeight?: string | number;
};

/**
 * Lightweight parallax wrapper that offsets its accent layer independently
 * from the content to mimic the layered depth observed on elodiefabbri.com.
 */
export function ParallaxSection({
  id,
  children,
  bg = "white",
  accent = "grid",
  speed = 0.2,
  minHeight = "100vh",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handle = () => {
      const rect = el.getBoundingClientRect();
      const midPoint = rect.top + rect.height / 2;
      const distanceFromCenter = midPoint - window.innerHeight / 2;
      setOffset(distanceFromCenter / window.innerHeight);
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const accentTranslate = -offset * 80 * speed;
  const contentTranslate = offset * 40 * speed;

  return (
    <section
      id={id}
      ref={ref}
      className="relative flex items-center justify-center px-4 py-24"
      style={{ background: bg, minHeight }}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-40 ${
          accent === "noise"
            ? "parallax-noise"
            : accent === "dark"
              ? "parallax-dark"
              : "parallax-grid"
        }`}
        style={{ transform: `translateY(${accentTranslate}px)` }}
      />

      <div
        className="relative z-10 w-full max-w-5xl"
        style={{ transform: `translateY(${contentTranslate}px)` }}
      >
        {children}
      </div>
    </section>
  );
}

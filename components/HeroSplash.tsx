"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";

type HeroSplashProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export function HeroSplash({ videoSrc, posterSrc }: HeroSplashProps) {
  const router = useRouter();
  const resolvedVideo = useMemo(
    () => videoSrc ?? "/media/helvetici-editor-loop.mp4",
    [videoSrc]
  );

  return (
    <section style={styles.section} id="hero">
      {resolvedVideo ? (
        <>
          <div style={styles.gradientPlaceholder} />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            style={styles.video}
            onError={(event) => {
              if (event.currentTarget) {
                event.currentTarget.style.display = "none";
              }
            }}
          >
            <source src={resolvedVideo} type="video/mp4" />
          </video>
          <div style={styles.overlay} />
        </>
      ) : (
        // Placeholder gradient until video is ready
        <div style={styles.gradientPlaceholder} />
      )}
      
      <div style={styles.content}>
        <div style={styles.badge}>Visual AI IDE</div>
        <h1 style={styles.h1}>Build real UI. Faster.</h1>
        <p style={styles.p}>
          Describe what you want. Helvetici generates production-ready components with a cinematic editor inspired by Elodie Fabbri&apos;s layered feel.
        </p>
        <div style={styles.ctaRow}>
          <button
            style={styles.cta}
            className="hero-cta"
            onClick={() => router.push("/editor")}
          >
            Start building
          </button>
          <button
            style={styles.secondary}
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            See product ↓
          </button>
        </div>
      </div>

      <div className="hero-floating" />
      <div className="hero-floating" />
      <div className="hero-floating" />

      <div style={styles.scrollHint}>↓ Scroll</div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  gradientPlaceholder: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(1200px 600px at 50% 30%, rgba(255,255,255,0.12), rgba(0,0,0,0.65))",
  },
  content: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
    color: "white",
  },
  h1: {
    fontSize: "clamp(40px, 6vw, 64px)",
    fontWeight: 900,
    lineHeight: 1.05,
    marginBottom: 16,
  },
  p: {
    fontSize: 18,
    maxWidth: 640,
    opacity: 0.9,
    marginBottom: 28,
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    justifyContent: "center",
  },
  cta: {
    padding: "14px 28px",
    fontSize: 16,
    fontWeight: 800,
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background: "#c2ff00",
    color: "black",
  },
  secondary: {
    padding: "14px 24px",
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.4)",
    cursor: "pointer",
    background: "transparent",
    color: "white",
  },
  badge: {
    fontSize: 13,
    letterSpacing: 4,
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.75)",
    marginBottom: 14,
  },
  scrollHint: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    opacity: 0.75,
    zIndex: 2,
    color: "white",
  },
};

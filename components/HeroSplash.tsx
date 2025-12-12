"use client";

import { useRouter } from "next/navigation";

type HeroSplashProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export function HeroSplash({ videoSrc, posterSrc }: HeroSplashProps) {
  const router = useRouter();

  return (
    <section style={styles.section}>
      {videoSrc ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            style={styles.video}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div style={styles.overlay} />
        </>
      ) : (
        // Placeholder gradient until video is ready
        <div style={styles.gradientPlaceholder} />
      )}
      
      <div style={styles.content}>
        <h1 style={styles.h1}>Build real UI. Faster.</h1>
        <p style={styles.p}>
          Describe what you want. Helvetici generates production-ready components.
        </p>
        <button
          style={styles.cta}
          onClick={() => router.push("/editor")}
        >
          Start building
        </button>
      </div>
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
    fontSize: "clamp(40px, 6vw, 72px)",
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
  cta: {
    padding: "14px 20px",
    fontSize: 16,
    fontWeight: 800,
    borderRadius: 14,
    border: "none",
    cursor: "pointer",
    background: "#c2ff00",
    color: "black",
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

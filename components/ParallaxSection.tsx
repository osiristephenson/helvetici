"use client";

export function ParallaxSection({
  children,
  bg = "white",
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1000, width: "100%" }}>{children}</div>
    </section>
  );
}

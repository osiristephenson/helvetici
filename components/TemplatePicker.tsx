"use client";

import { TEMPLATES, type TemplateId } from "@/lib/templates";

export function TemplatePicker(props: { onPick: (id: TemplateId) => void }) {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "48px 20px" }}>
      <h1 style={{ fontSize: 44, fontWeight: 800, marginBottom: 12 }}>
        What do you want to generate?
      </h1>
      <p style={{ opacity: 0.8, marginBottom: 28 }}>
        Pick a starting point. We'll build the workflow for you.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => props.onPick(t.id)}
            style={{
              textAlign: "left",
              padding: 16,
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "white",
              cursor: "pointer",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{t.title}</div>
            <div style={{ fontSize: 13, opacity: 0.75 }}>{t.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

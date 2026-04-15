"use client";
const B = "var(--font-inter), sans-serif";
const D = "var(--font-space), sans-serif";

const items = [
  { label: "ChatGPT", sub: "OpenAI" },
  { label: "Gemini", sub: "Google" },
  { label: "Perplexity", sub: "AI Search" },
  { label: "Claude", sub: "Anthropic" },
  { label: "Mistral", sub: "EU" },
  { label: "Copilot", sub: "Microsoft" },
  { label: "Grok", sub: "xAI" },
  { label: "LLaMA", sub: "Meta" },
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ padding: "0 0 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#050505", overflow: "hidden", position: "relative" }}>
      {/* Fade edges */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(90deg, #050505, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(-90deg, #050505, transparent)", zIndex: 2, pointerEvents: "none" }} />

      <div style={{ display: "flex", gap: 0 }} className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 36px", borderRight: "1px solid rgba(255,255,255,0.04)", flexShrink: 0 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#555", fontFamily: D, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>{item.label}</span>
            <span style={{ fontSize: 10, color: "#2a2a2a", fontFamily: B }}>{item.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

function MockupDashboard() {
  return (
    <div style={{
      width: "100%", borderRadius: 16, overflow: "hidden",
      background: "#0a0a0a",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 60px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)",
    }}>
      {/* Title bar */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 8 }}>
        {[0,1,2].map(i => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: "#222" }} />)}
        <div style={{ marginLeft: 12, fontSize: 11, color: "#444", background: "#111", borderRadius: 6, padding: "3px 10px" }}>
          layers.so/dashboard
        </div>
      </div>

      {/* Sidebar + content */}
      <div style={{ display: "flex", minHeight: 320 }}>
        {/* Sidebar */}
        <div style={{ width: 180, borderRight: "1px solid rgba(255,255,255,0.05)", padding: "16px 12px", flexShrink: 0 }}>
          <div style={{ fontSize: 10, color: "#333", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>Clients</div>
          {["Acme Corp", "NovaSEO", "Agence Orbis", "Studio Flux"].map((c, i) => (
            <div key={c} style={{
              padding: "7px 10px", borderRadius: 7, marginBottom: 2,
              background: i === 0 ? "rgba(255,255,255,0.06)" : "transparent",
              fontSize: 12, color: i === 0 ? "#fff" : "#555",
              cursor: "default",
            }}>{c}</div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: 20 }}>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
            {[
              { label: "Score LLM Global", value: "73%", change: "+12%", up: true },
              { label: "Citations ChatGPT", value: "41", change: "+8", up: true },
              { label: "Score Perplexity", value: "68%", change: "-3%", up: false },
            ].map((s) => (
              <div key={s.label} style={{ background: "#111", borderRadius: 10, padding: "14px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 10, color: "#555", marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, fontFamily: DISPLAY, letterSpacing: "-0.03em", color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 10, marginTop: 4, color: s.up ? "#6ee7b7" : "#f87171", fontWeight: 600 }}>{s.change} vs mois dernier</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={{ background: "#111", borderRadius: 10, padding: 14, marginBottom: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 10 }}>Visibilité LLM — 30 jours</div>
            <svg width="100%" height="72" viewBox="0 0 400 72" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <path d="M0,58 C30,52 60,44 90,38 C120,32 150,30 180,22 C210,14 240,16 270,10 C300,4 330,6 360,4 C380,3 390,4 400,3"
                fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M0,58 C30,52 60,44 90,38 C120,32 150,30 180,22 C210,14 240,16 270,10 C300,4 330,6 360,4 C380,3 390,4 400,3 L400,72 L0,72Z"
                fill="url(#g1)" />
            </svg>
          </div>

          {/* LLM breakdown */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "#111", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: 10, color: "#555", marginBottom: 10 }}>Par LLM</div>
              {[{ n: "ChatGPT", v: 73 }, { n: "Gemini", v: 58 }, { n: "Perplexity", v: 68 }].map(l => (
                <div key={l.n} style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 11, color: "#888" }}>{l.n}</span>
                    <span style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>{l.v}%</span>
                  </div>
                  <div style={{ height: 3, background: "#1a1a1a", borderRadius: 2 }}>
                    <div style={{ height: 3, borderRadius: 2, width: `${l.v}%`, background: "rgba(255,255,255,0.35)" }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "#111", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: 10, color: "#555", marginBottom: 10 }}>Votre client vs concurrents</div>
              {[
                { n: "Votre client", v: 73, highlight: true },
                { n: "Concurrent A", v: 89, highlight: false },
                { n: "Concurrent B", v: 61, highlight: false },
              ].map(c => (
                <div key={c.n} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "5px 8px", borderRadius: 6, marginBottom: 4,
                  background: c.highlight ? "rgba(255,255,255,0.06)" : "transparent",
                  border: c.highlight ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                }}>
                  <span style={{ fontSize: 11, color: c.highlight ? "#fff" : "#555" }}>{c.n}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: c.highlight ? "#fff" : "#444", fontFamily: DISPLAY }}>{c.v}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "120px 24px 80px", overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      {/* Top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 900, height: 500, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 65%)",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, width: "100%", textAlign: "center" }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 99, fontSize: 12,
            border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)",
            color: "#666", fontFamily: BODY,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ee7b7", display: "inline-block" }} />
            Fondateurs ex-Google · Sales AI & ML Engineering
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: DISPLAY, fontWeight: 700, letterSpacing: "-0.04em",
            fontSize: "clamp(44px, 7vw, 84px)", lineHeight: 1.05,
            marginBottom: 24, color: "#fff",
          }}
        >
          ChatGPT cite vos concurrents.
          <br />
          <span style={{ color: "#333" }}>Pas vos clients.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: BODY, fontSize: 17, lineHeight: 1.7, color: "#666",
            maxWidth: 620, margin: "0 auto 40px",
          }}
        >
          Layers est la première plateforme GEO conçue{" "}
          <span style={{ color: "#aaa" }}>exclusivement pour les agences SEO</span>.
          Mesurez la visibilité LLM de chaque client, transformez-la en offre rentable,
          livrez des rapports white-label — sans recruter un seul expert GEO.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 64 }}
        >
          <button
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 32px", borderRadius: 12, fontSize: 15, fontWeight: 600,
              background: "#fff", color: "#000", border: "none", cursor: "pointer",
              fontFamily: DISPLAY, letterSpacing: "-0.01em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 8px 32px rgba(255,255,255,0.08)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.2), 0 12px 40px rgba(255,255,255,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.12), 0 8px 32px rgba(255,255,255,0.08)"; }}
          >
            Demander un accès beta
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p style={{ fontSize: 12, color: "#444", fontFamily: BODY }}>
            Réservé aux agences SEO · Accompagnement mensuel inclus · Sans engagement
          </p>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginBottom: 56, flexWrap: "wrap" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: "50%", marginLeft: i === 0 ? 0 : -10,
                  background: `hsl(0, 0%, ${18 + i * 8}%)`,
                  border: "2px solid #000",
                }} />
              ))}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: DISPLAY }}>14 agences SEO</div>
              <div style={{ fontSize: 11, color: "#555" }}>françaises en waitlist</div>
            </div>
          </div>

          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.07)" }} />

          <div style={{
            padding: "12px 18px", borderRadius: 10, fontSize: 12,
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            maxWidth: 340, textAlign: "left",
          }}>
            <p style={{ color: "#777", fontStyle: "italic", lineHeight: 1.5 }}>
              "Premier contrat GEO signé 3 semaines après l'onboarding."
            </p>
            <p style={{ color: "#444", fontSize: 11, marginTop: 6 }}>— Directeur SEO, Agence beta</p>
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
        >
          <MockupDashboard />
        </motion.div>
      </div>
    </section>
  );
}

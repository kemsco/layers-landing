"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

export default function Hero() {
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "140px 48px 100px", overflow: "hidden",
      background: "#080808",
    }}>
      {/* Diagonal corner beams — matches reference image */}
      <div style={{ position: "absolute", top: "-8%", left: "-4%", width: "52%", height: "65%", background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 52%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-8%", right: "-4%", width: "52%", height: "65%", background: "linear-gradient(315deg, rgba(255,255,255,0.07) 0%, transparent 52%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(0,0,0,0.55) 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, width: "100%", textAlign: "center" }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", fontSize: 11, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "#666", fontFamily: B, letterSpacing: "0.02em" }}>
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ee7b7", display: "inline-block" }} />
            Fondé par deux ex-Google · Construit avec des agences SEO françaises
          </div>
        </motion.div>

        {/* H1 — full width, no cramping */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            fontFamily: D, fontWeight: 700, letterSpacing: "-0.05em",
            fontSize: "clamp(56px, 9vw, 112px)",
            lineHeight: 1.02, marginBottom: 12,
          }}
        >
          <span style={{ display: "block", color: "#fff" }}>Lancez votre offre GEO</span>
          <span style={{ display: "block", color: "#fff" }}>en quelques minutes.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginBottom: 36 }}
        >
          <span style={{ fontFamily: D, fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.04em", color: "#555" }}>
            Sans recruter. Sans improviser.
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: B, fontSize: 18, lineHeight: 1.75, color: "#666", maxWidth: 700, margin: "0 auto 56px" }}>
          Layers mesure la visibilité de vos clients dans ChatGPT, Gemini et Perplexity — et génère les rapports sous votre nom, prêts à envoyer.{" "}
          <span style={{ color: "#999" }}>Pendant que vos concurrents improvisent, vous livrez.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 80, flexWrap: "wrap" }}>

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 16px 48px rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              position: "relative", overflow: "hidden",
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 36px", borderRadius: 0, fontSize: 15, fontWeight: 700,
              background: "#fff", color: "#000", border: "none", cursor: "pointer",
              fontFamily: D, letterSpacing: "-0.02em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 8px 32px rgba(255,255,255,0.07)",
            }}
          >
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)", transform: "skewX(-12deg)", pointerEvents: "none" }}
            />
            Demander une démo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ borderColor: "rgba(255,255,255,0.22)", color: "#bbb" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 28px", borderRadius: 0, fontSize: 14, fontWeight: 600,
              background: "transparent", color: "#555",
              border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer",
              fontFamily: B, transition: "border-color 0.2s, color 0.2s",
            }}
          >
            Voir un exemple de rapport
          </motion.button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 36, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex" }}>
              {[18, 26, 34, 42].map((g, i) => (
                <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", marginLeft: i === 0 ? 0 : -9, background: `hsl(0,0%,${g}%)`, border: "2px solid #080808" }} />
              ))}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: D, letterSpacing: "-0.02em" }}>14 agences SEO</div>
              <div style={{ fontSize: 11, color: "#555", fontFamily: B }}>françaises en waitlist</div>
            </div>
          </div>
          <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ fontSize: 12, color: "#555", fontFamily: B, display: "flex", alignItems: "center", gap: 7 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.2)" />
              <path d="M4 6l1.5 1.5 3-3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Opérationnel en moins d'une heure
          </div>
          <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ fontSize: 12, color: "#555", fontFamily: B, display: "flex", alignItems: "center", gap: 7 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.2)" />
              <path d="M4 6l1.5 1.5 3-3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sans engagement
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

export default function Hero() {
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "130px 24px 80px", overflow: "hidden",
      background: "#080808",
    }}>
      {/* ── Hero image effect : diagonal corner glows matching the reference ── */}
      {/* Top-left beam */}
      <div style={{
        position: "absolute", top: "-10%", left: "-5%",
        width: "55%", height: "70%",
        background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />
      {/* Bottom-right beam */}
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%",
        width: "55%", height: "70%",
        background: "linear-gradient(315deg, rgba(255,255,255,0.06) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />
      {/* Center soft vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)",
        pointerEvents: "none",
      }} />
      {/* Fine grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "72px 72px", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 860, width: "100%", textAlign: "center" }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, fontSize: 11, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "#555", fontFamily: B, letterSpacing: "0.02em", backdropFilter: "blur(8px)" }}>
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ee7b7", display: "inline-block" }} />
            Fondé par deux ex-Google · Construit avec des agences SEO françaises
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{ fontFamily: D, fontWeight: 700, letterSpacing: "-0.05em", fontSize: "clamp(46px, 7.5vw, 96px)", lineHeight: 1.03, marginBottom: 10 }}
        >
          <span style={{ display: "block", color: "#fff" }}>Lancez votre offre GEO</span>
          <span style={{ display: "block", color: "#fff" }}>en quelques minutes.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ marginBottom: 28 }}
        >
          <span style={{ fontFamily: D, fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: 600, letterSpacing: "-0.04em", color: "#2a2a2a" }}>
            Sans recruter. Sans improviser.
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
          style={{ fontFamily: B, fontSize: 17, lineHeight: 1.75, color: "#4a4a4a", maxWidth: 620, margin: "0 auto 48px" }}>
          Layers mesure la visibilité de vos clients dans ChatGPT, Gemini et Perplexity — et génère les rapports sous votre nom, prêts à envoyer.{" "}
          <span style={{ color: "#777" }}>Pendant que vos concurrents improvisent, vous livrez.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 72, flexWrap: "wrap" }}>

          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 16px 48px rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              position: "relative", overflow: "hidden",
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "15px 34px", borderRadius: 12, fontSize: 14, fontWeight: 700,
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

          {/* Secondary */}
          <motion.button
            whileHover={{ borderColor: "rgba(255,255,255,0.18)", color: "#ccc" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "15px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600,
              background: "transparent", color: "#4a4a4a",
              border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer",
              fontFamily: B, transition: "border-color 0.2s, color 0.2s",
            }}
          >
            Voir un exemple de rapport
          </motion.button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {[18, 26, 34, 42].map((g, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", marginLeft: i === 0 ? 0 : -8, background: `hsl(0,0%,${g}%)`, border: "2px solid #080808" }} />
              ))}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, fontFamily: D, letterSpacing: "-0.02em" }}>14 agences SEO</div>
              <div style={{ fontSize: 11, color: "#3a3a3a", fontFamily: B }}>françaises en waitlist</div>
            </div>
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.06)" }} />
          <div style={{ fontSize: 12, color: "#3a3a3a", fontFamily: B, display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.15)" />
              <path d="M4 6l1.5 1.5 3-3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Opérationnel en moins d'une heure
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.06)" }} />
          <div style={{ fontSize: 12, color: "#3a3a3a", fontFamily: B, display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.15)" />
              <path d="M4 6l1.5 1.5 3-3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sans engagement
          </div>
        </motion.div>
      </div>
    </section>
  );
}

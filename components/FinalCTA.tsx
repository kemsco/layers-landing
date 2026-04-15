"use client";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

export default function FinalCTA() {
  return (
    <section style={{ padding: "128px 24px 80px", background: "#000", position: "relative", overflow: "hidden" }}>
      {/* Bottom glow */}
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 400, pointerEvents: "none", background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.05) 0%, transparent 65%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Urgency badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, fontSize: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "#888", fontFamily: BODY }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", display: "inline-block", animation: "pulse 2s infinite" }} />
            Accès beta limité aux agences françaises — places en cours de remplissage
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(34px, 5.5vw, 68px)", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24 }}>
          Le virage GEO est en cours.
          <br /><span style={{ color: "#333" }}>Votre agence sera-t-elle prête ?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 17, color: "#555", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 48px", fontFamily: BODY }}>
          Layers accompagne les agences SEO qui veulent prendre ce virage sereinement — outil de précision, accompagnement expert, offre GEO prête à vendre dès la première semaine.
        </motion.p>

        {/* Value bullets */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 48, flexWrap: "wrap" }}>
          {["Visibilité LLM inégalée", "Offre GEO en 7 jours", "Rapports white-label automatiques"].map(v => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#666", fontFamily: BODY }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="rgba(255,255,255,0.12)" />
                <path d="M4.5 7l1.8 1.8 3.2-3.2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {v}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <button
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "18px 40px",
              borderRadius: 14, fontSize: 16, fontWeight: 700, fontFamily: DISPLAY,
              background: "#fff", color: "#000", border: "none", cursor: "pointer", letterSpacing: "-0.02em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 20px 60px rgba(255,255,255,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Demander un accès beta
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p style={{ fontSize: 12, color: "#3a3a3a", fontFamily: BODY }}>
            Fondateurs ex-Google · Accompagnement mensuel inclus · Sans engagement · Paiement sécurisé Stripe
          </p>
        </motion.div>
      </div>
    </section>
  );
}

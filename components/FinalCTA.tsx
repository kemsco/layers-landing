"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const badges = ["Visibilité LLM inégalée", "Offre GEO en 7 jours", "Rapports white-label auto"];

export default function FinalCTA() {
  return (
    <section style={{ padding: "140px 24px 80px", background: "#000", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* Radial glow from bottom center */}
      <div style={{ position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Urgency badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, fontSize: 11, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "#666", fontFamily: B, letterSpacing: "0.02em" }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }}
            />
            Accès beta limité · Places en cours de remplissage
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: D, fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 70px)", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24 }}>
          Le virage GEO est en cours.
          <br /><span style={{ color: "#2a2a2a" }}>Votre agence sera-t-elle prête ?</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 16, color: "#4a4a4a", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 48px", fontFamily: B }}>
          Layers accompagne les agences SEO qui veulent prendre ce virage sereinement — outil de précision, accompagnement expert, offre GEO prête à vendre dès J1.
        </motion.p>

        {/* Value bullets */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
          style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 52, flexWrap: "wrap" }}>
          {badges.map((v, i) => (
            <motion.div key={v}
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#5a5a5a", fontFamily: B }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="rgba(255,255,255,0.1)" />
                <path d="M4.5 7l1.8 1.8 3.2-3.2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {v}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA block */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 20px 60px rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              position: "relative", overflow: "hidden",
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "17px 40px", borderRadius: 14, fontSize: 15, fontWeight: 700,
              background: "#fff", color: "#000", border: "none", cursor: "pointer",
              fontFamily: D, letterSpacing: "-0.02em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 8px 40px rgba(255,255,255,0.1)",
            }}
          >
            {/* Shine */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)", transform: "skewX(-12deg)", pointerEvents: "none" }}
            />
            Demander un accès beta
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <p style={{ fontSize: 11, color: "#333", fontFamily: B, letterSpacing: "0.02em" }}>
            Fondateurs ex-Google · Accompagnement inclus · Sans engagement · Paiement sécurisé Stripe
          </p>
        </motion.div>
      </div>
    </section>
  );
}

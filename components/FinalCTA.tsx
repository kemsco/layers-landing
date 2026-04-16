"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

export default function FinalCTA() {
  return (
    <section style={{ padding: "140px 48px 80px", background: "#000", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
      <div style={{ position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", fontSize: 11, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "#555", fontFamily: B, letterSpacing: "0.02em" }}>
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
            Accès beta limité · Places en cours de remplissage
          </div>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: D, fontWeight: 700, fontSize: "clamp(38px, 6vw, 76px)", letterSpacing: "-0.04em", lineHeight: 1.04, marginBottom: 24 }}>
          Vos concurrents construisent
          <br /><span style={{ color: "#555" }}>leur offre GEO maintenant.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 17, color: "#666", lineHeight: 1.75, maxWidth: 600, margin: "0 auto 56px", fontFamily: B }}>
          Layers vous donne l'outil, les livrables et l'accompagnement pour être à la table — pas en retard sur elle.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 20px 60px rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              position: "relative", overflow: "hidden",
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "18px 44px", fontSize: 16, fontWeight: 700,
              background: "#fff", color: "#000", border: "none", cursor: "pointer",
              fontFamily: D, letterSpacing: "-0.02em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 8px 40px rgba(255,255,255,0.08)",
            }}
          >
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)", transform: "skewX(-12deg)", pointerEvents: "none" }}
            />
            Demander une démo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          <p style={{ fontSize: 12, color: "#333", fontFamily: B }}>
            Deux ex-Google · Un produit construit avec des agences SEO françaises · Opérationnel en moins d'une heure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

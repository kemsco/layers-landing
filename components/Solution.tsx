"use client";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

const pillars = [
  { icon: "◎", label: "Mesurez", title: "Visibilité LLM réelle", desc: "Trackez la présence sur ChatGPT, Gemini, Perplexity avec une simulation ICP complète : personas, localisation, objectifs. Pas un prompt générique.", stat: "3 LLMs", statSub: "trackés en simultané" },
  { icon: "◈", label: "Vendez", title: "Offre GEO en 7 jours", desc: "Portail partenaire prêt à l'emploi : éléments sales et marketing inclus. Zéro expertise interne requise, zéro délai de mise en marché.", stat: "< 7 jours", statSub: "pour lancer votre offre" },
  { icon: "◉", label: "Délivrez", title: "Rapports white-label auto", desc: "Dashboards aux couleurs de votre agence, expliqués par l'IA pour votre client. Zéro mise en forme. Votre branding, notre moteur.", stat: "0h", statSub: "de mise en forme" },
];

export default function Solution() {
  return (
    <section style={{ padding: "128px 24px", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "64px 64px" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", fontFamily: BODY }}>La Solution</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: DISPLAY, fontWeight: 700, textAlign: "center", fontSize: "clamp(30px, 4.5vw, 54px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
          Layers : l'outil GEO que seules
          <br /><span style={{ color: "#333" }}>les agences utilisent.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ textAlign: "center", fontSize: 16, color: "#555", maxWidth: 500, margin: "0 auto 72px", lineHeight: 1.7, fontFamily: BODY }}>
          Pas un outil généraliste adapté. Construit de zéro autour de vos problématiques — pricing, features, accompagnement.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {pillars.map((p, i) => (
            <motion.div key={p.label}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 26px", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.14)"); }}
              onMouseLeave={e => { (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)"); }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <span style={{ fontSize: 20, color: "#444" }}>{p.icon}</span>
                <span style={{ fontSize: 10, color: "#555", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: 99, fontFamily: BODY, letterSpacing: "0.05em", textTransform: "uppercase" }}>{p.label}</span>
              </div>
              <h3 style={{ fontFamily: DISPLAY, fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 12, color: "#fff" }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 24, fontFamily: BODY }}>{p.desc}</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 18 }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 26, fontWeight: 700, letterSpacing: "-0.04em", color: "#fff" }}>{p.stat}</div>
                <div style={{ fontSize: 11, color: "#444", marginTop: 2, fontFamily: BODY }}>{p.statSub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compat strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ marginTop: 48, textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "#333", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: BODY }}>Compatible avec</div>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {["ChatGPT", "Gemini", "Perplexity", "Looker Studio", "GA4"].map(t => (
              <span key={t} style={{ fontSize: 13, color: "#3a3a3a", fontFamily: BODY, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

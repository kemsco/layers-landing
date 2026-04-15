"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const pains = [
  { n: "01", title: "Aucun outil ne track la visibilité LLM fiablement", desc: "Les solutions existantes tournent des prompts génériques sans ICP, sans contexte, sans actionabilité réelle pour vos clients." },
  { n: "02", title: "Les audits GEO manuels engloutissent vos heures", desc: "Des journées entières pour des livrables peu convaincants. Vos équipes s'épuisent sur des tâches sans valeur différenciante." },
  { n: "03", title: "Impossible de vendre sans expertise interne", desc: "Recruter un expert GEO coûte 50–80k€/an. Résultat : vous regardez le marché bouger sans pouvoir positionner votre agence." },
  { n: "04", title: "Vos concurrents signent des contrats maintenant", desc: "Les agences GEO-ready avancent pendant que vous attendez. Chaque semaine sans offre GEO est une opportunité perdue." },
];

export default function Problem() {
  return (
    <section style={{ padding: "140px 24px", background: "#000", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* Large decorative text */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "clamp(120px, 22vw, 280px)", fontWeight: 900, fontFamily: D, color: "rgba(255,255,255,0.018)", letterSpacing: "-0.06em", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", lineHeight: 1 }}
      >
        PROBLEM
      </motion.div>

      <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: B }}>Le Problème</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 20 }}>
          Le SEO change à une vitesse inédite.
          <br /><span style={{ color: "#2a2a2a" }}>Vos outils, non.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 16, color: "#4a4a4a", maxWidth: 540, margin: "0 auto 80px", lineHeight: 1.75, fontFamily: B }}>
          Vos clients voient leur trafic baisser. Ils posent LA question :{" "}
          <em style={{ color: "#777" }}>"On apparaît sur ChatGPT ?"</em>{" "}
          Et vous n'avez pas encore de réponse structurée.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.04)", borderRadius: 1 }}>
          {pains.map((p, i) => (
            <motion.div key={p.n}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: "#000", padding: "44px 40px", position: "relative", overflow: "hidden" }}
            >
              {/* Decorative number */}
              <div style={{ position: "absolute", top: 16, right: 24, fontSize: 72, fontWeight: 900, fontFamily: D, color: "rgba(255,255,255,0.03)", lineHeight: 1, letterSpacing: "-0.05em", userSelect: "none" }}>{p.n}</div>
              <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                <span style={{ fontSize: 10, fontFamily: "monospace", color: "#2a2a2a", paddingTop: 4, flexShrink: 0, letterSpacing: "0.05em" }}>{p.n}</span>
                <div>
                  <h3 style={{ fontFamily: D, fontSize: 16, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.02em", lineHeight: 1.35, color: "#fff" }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75, fontFamily: B }}>{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ChatGPT mockup */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginTop: 32, padding: "26px 30px", borderRadius: 16, background: "#070707", border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
          <div style={{ fontSize: 10, color: "#2e2e2e", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: B }}>
            Simulation réelle · ChatGPT · <em style={{ color: "#3a3a3a", textTransform: "none" }}>"Quelle agence SEO recommandes-tu à Paris ?"</em>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#111", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#555", flexShrink: 0, fontFamily: D }}>AI</div>
            <p style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.75, fontFamily: B }}>
              "Pour le référencement SEO à Paris, je recommande notamment{" "}
              <span style={{ background: "rgba(255,255,255,0.06)", padding: "1px 8px", borderRadius: 4, color: "#aaa", fontWeight: 500 }}>Agence Concurrent A</span>,{" "}
              <span style={{ background: "rgba(255,255,255,0.06)", padding: "1px 8px", borderRadius: 4, color: "#aaa", fontWeight: 500 }}>Concurrent B</span> et{" "}
              <span style={{ background: "rgba(255,255,255,0.06)", padding: "1px 8px", borderRadius: 4, color: "#aaa", fontWeight: 500 }}>Concurrent C</span>.
              Ces agences sont reconnues pour leur expertise en SEO technique et en content marketing…"
              <span style={{ marginLeft: 10, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", padding: "2px 9px", borderRadius: 5, color: "#ef4444", fontSize: 11, fontWeight: 600, fontFamily: D }}>
                Votre client : absent
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

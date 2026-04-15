"use client";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

const pains = [
  { n: "01", title: "Aucun outil ne track la visibilité LLM fiablement", desc: "Les solutions existantes tournent des prompts génériques sans ICP, sans contexte, sans actionabilité. Vos clients méritent mieux." },
  { n: "02", title: "Les audits GEO manuels engloutissent vos heures", desc: "Des journées entières pour des livrables peu convaincants. Vos équipes s'épuisent sur des tâches sans valeur différenciante." },
  { n: "03", title: "Impossible de vendre sans expertise interne", desc: "Recruter un expert GEO coûte 50-80k€/an. Résultat : vous regardez le marché bouger sans pouvoir positionner votre agence." },
  { n: "04", title: "Vos concurrents signent des contrats maintenant", desc: "Les agences GEO-ready avancent pendant que vous attendez. Chaque semaine compte." },
];

export default function Problem() {
  return (
    <section style={{ padding: "128px 24px", position: "relative", background: "#000" }}>
      {/* Separator */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1, height: 80, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12))" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Label */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", fontFamily: BODY }}>
            Le Problème
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: DISPLAY, fontWeight: 700, textAlign: "center", fontSize: "clamp(30px, 4.5vw, 54px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
          Le SEO change à une vitesse inédite.
          <br /><span style={{ color: "#333" }}>Vos outils, non.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ textAlign: "center", fontSize: 16, color: "#555", maxWidth: 520, margin: "0 auto 72px", lineHeight: 1.7, fontFamily: BODY }}>
          Vos clients voient leur trafic baisser. Ils posent LA question :{" "}
          <em style={{ color: "#888" }}>"On apparaît sur ChatGPT ?"</em>{" "}
          Et vous n'avez pas encore de réponse structurée.
        </motion.p>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "rgba(255,255,255,0.06)" }}>
          {pains.map((p, i) => (
            <motion.div key={p.n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: "#000", padding: "40px 36px", display: "flex", gap: 20 }}>
              <span style={{ fontSize: 11, fontFamily: "monospace", color: "#2a2a2a", paddingTop: 3, flexShrink: 0 }}>{p.n}</span>
              <div>
                <h3 style={{ fontFamily: DISPLAY, fontSize: 15, fontWeight: 600, marginBottom: 10, letterSpacing: "-0.01em", color: "#fff" }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontFamily: BODY }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ChatGPT mockup */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: 40, padding: "24px 28px", borderRadius: 14, background: "#080808", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ fontSize: 10, color: "#383838", marginBottom: 14, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: BODY }}>
            Simulation · ChatGPT · "Quelle agence SEO recommandes-tu à Paris ?"
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#666", flexShrink: 0, fontFamily: DISPLAY, fontWeight: 700 }}>AI</div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, fontFamily: BODY }}>
              "Pour le SEO à Paris, je recommande{" "}
              <span style={{ background: "rgba(255,255,255,0.07)", padding: "2px 8px", borderRadius: 5, color: "#bbb", fontSize: 12 }}>Agence Concurrent A</span>,{" "}
              <span style={{ background: "rgba(255,255,255,0.07)", padding: "2px 8px", borderRadius: 5, color: "#bbb", fontSize: 12 }}>Concurrent B</span> et{" "}
              <span style={{ background: "rgba(255,255,255,0.07)", padding: "2px 8px", borderRadius: 5, color: "#bbb", fontSize: 12 }}>Concurrent C</span>.{" "}
              Ces agences sont reconnues pour leur expertise…"
              <span style={{ marginLeft: 10, background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", padding: "2px 8px", borderRadius: 5, color: "#f87171", fontSize: 11 }}>
                Votre client : absent
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

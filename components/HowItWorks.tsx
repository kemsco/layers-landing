"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const steps = [
  {
    n: "01",
    title: "Connectez vos clients",
    desc: "Ajoutez vos clients dans Layers, configurez les personas et les marchés cibles. Aucun développement requis — le portail partenaire est prêt à l'emploi dès votre accès.",
    detail: "Persona · Localisation · Secteur · Objectifs",
  },
  {
    n: "02",
    title: "Lancez les analyses",
    desc: "Layers simule de vraies conversations utilisateurs sur ChatGPT, Gemini et Perplexity. Les résultats tombent automatiquement — visibilité, verbatims, concurrents cités.",
    detail: "ChatGPT · Gemini · Perplexity",
  },
  {
    n: "03",
    title: "Livrez sous votre nom",
    desc: "Les rapports sortent brandés à vos couleurs, avec les recommandations prioritaires intégrées. Vous envoyez. Votre client reçoit. C'est tout.",
    detail: "White-label · Export 1 clic · Looker Studio",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "140px 24px", background: "#020202", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: B }}>Process</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          Opérationnel en moins
          <br /><span style={{ color: "#2a2a2a" }}>d'une heure.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 15, color: "#4a4a4a", marginBottom: 80, fontFamily: B, lineHeight: 1.75 }}>
          Trois étapes. Pas de développement. Pas de formation.
        </motion.p>

        <div style={{ position: "relative" }}>
          {/* Vertical connector line */}
          <div style={{ position: "absolute", left: 28, top: 40, bottom: 40, width: 1, background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))", zIndex: 0 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {steps.map((step, i) => (
              <motion.div key={step.n}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{ display: "flex", gap: 24, position: "relative" }}
              >
                {/* Step number circle */}
                <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: "#080808", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, position: "relative" }}>
                  <span style={{ fontFamily: D, fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{step.n}</span>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
                  style={{ flex: 1, background: "#080808", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 26px", marginBottom: 6, transition: "border-color 0.3s" }}
                >
                  <h3 style={{ fontFamily: D, fontSize: 17, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 12, color: "#fff" }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.75, fontFamily: B, marginBottom: 16 }}>{step.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {step.detail.split(" · ").map(tag => (
                      <span key={tag} style={{ fontSize: 11, color: "#3a3a3a", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "3px 10px", borderRadius: 99, fontFamily: B }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Time badge */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 24px", background: "#080808", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.2)" />
              <path d="M7 4v3.5l2 2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 13, color: "#555", fontFamily: B }}>
              Onboarding inclus · Premier rapport le jour même
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

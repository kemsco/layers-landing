"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const faqs = [
  {
    q: "Quelle est la différence avec un outil généraliste de tracking LLM ?",
    a: "Les outils généralistes envoient un prompt. Layers simule une conversation complète avec un persona réel, une localisation et un contexte d'achat — comme un vrai utilisateur face à un LLM. Le résultat est comparable dans le temps et livrable directement à vos clients finaux. Un export brut ne l'est pas.",
  },
  {
    q: "Peut-on délivrer l'offre sans expert GEO en interne ?",
    a: "Oui. C'est précisément pour ça que l'accompagnement mensuel est inclus dans le plan Agency. Vous n'avez pas à recruter ni à vous former seul. Layers est l'expert GEO externalisé de votre agence — vous vendez l'offre, nous vous aidons à la délivrer.",
  },
  {
    q: "Comment Layers s'intègre avec nos reportings existants (GA4, SEMrush, Looker Studio) ?",
    a: "Layers ne remplace pas ces outils — il comble l'angle mort qu'ils ont tous : la visibilité LLM. Le connecteur Looker Studio natif vous permet d'intégrer un module GEO dans vos reportings existants sans tout reconstruire.",
  },
  {
    q: "Le pricing est-il adapté aux agences qui gèrent beaucoup de clients ?",
    a: "Seats et projets illimités sur tous les plans. Vous allouez des crédits librement par client selon le niveau de service vendu — suivi approfondi pour les grands comptes, analyse light pour les autres. Le pricing suit votre modèle économique, pas l'inverse.",
  },
  {
    q: "En combien de temps l'offre est-elle opérationnelle ?",
    a: "L'onboarding prend moins d'une heure. Les premiers rapports clients peuvent être générés le jour même. Les sales assets pour pitcher l'offre sont disponibles dès votre accès au portail partenaire.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "140px 24px", background: "#020202", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: B }}>FAQ</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          Questions fréquentes.
          <br /><span style={{ color: "#2a2a2a" }}>Réponses directes.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 15, color: "#4a4a4a", marginBottom: 64, fontFamily: B, lineHeight: 1.75 }}>
          Tout ce que vous devez savoir avant de rejoindre la bêta.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <motion.div
                  animate={{ background: isOpen ? "#0d0d0d" : "#080808", borderColor: isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)" }}
                  style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden", cursor: "pointer" }}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 22px", gap: 16 }}>
                    <span style={{ fontFamily: D, fontSize: 14, fontWeight: 600, color: isOpen ? "#fff" : "#666", letterSpacing: "-0.02em", lineHeight: 1.4, transition: "color 0.2s", flex: 1 }}>
                      {faq.q}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}
                      style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M4.5 1v7M1 4.5h7" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }} style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 22px 22px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                          <p style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.8, fontFamily: B, marginTop: 18 }}>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#2e2e2e", fontFamily: B }}>
            Une question spécifique ?{" "}
            <span style={{ color: "#4a4a4a", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: 1, cursor: "pointer" }}>
              Contactez-nous directement
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

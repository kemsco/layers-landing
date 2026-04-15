"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const faqs = [
  { q: "En quoi Layers diffère des outils de tracking LLM existants ?", a: "Les outils existants (Peec AI, Otterly, Qwairy) lancent des prompts génériques sans ICP, sans contexte, sans simulation multi-tour. Layers simule de vraies conversations avec persona défini, localisation, objectifs et secteur — sur plusieurs échanges. Vous obtenez ce que l'IA pense réellement de la marque, pas un artefact de prompt." },
  { q: "Mon agence n'a aucune expertise GEO interne. Est-ce un problème ?", a: "C'est exactement le cas d'usage pour lequel Layers a été conçu. Le portail partenaire vous donne pitch, sales kit et marketing prêts à l'emploi. L'accompagnement mensuel vous permet de délivrer sans recruter. Vous pitchez une offre GEO dès cette semaine." },
  { q: "Mes clients verront-ils le nom Layers ?", a: "Non. Dashboards aux couleurs de votre agence, rapports exportables, données expliquées par l'IA. Votre branding, votre expertise, notre moteur. Vos clients ne savent pas que Layers existe." },
  { q: "Combien de clients puis-je gérer ?", a: "Seats et projets illimités sur toutes les offres. Que vous gériez 5 ou 50 clients, le prix ne change pas. Seuls les crédits d'analyse sont consommés — achetables à la carte selon votre volume." },
  { q: "Layers s'intègre-t-il à notre stack actuel ?", a: "Oui — Looker Studio, GA4, rapports automatiques par mail. Zéro friction d'adoption. Ça s'intègre dans ce que vous faites déjà, pas l'inverse." },
  { q: "Quand les accès beta ouvrent-ils ?", a: "Les accès sont distribués progressivement. 14 agences sont actuellement en waitlist. Les premières admises bénéficient d'un accompagnement direct de notre équipe dès onboarding." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "140px 24px", background: "#000", position: "relative" }}>
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
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <motion.div
                  animate={{
                    background: isOpen ? "#0d0d0d" : "#080808",
                    borderColor: isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                  }}
                  style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden", cursor: "pointer" }}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 22px", gap: 16 }}>
                    <span style={{ fontFamily: D, fontSize: 14, fontWeight: 600, color: isOpen ? "#fff" : "#777", letterSpacing: "-0.02em", lineHeight: 1.4, transition: "color 0.2s", flex: 1 }}>
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
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
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
          <p style={{ fontSize: 12, color: "#333", fontFamily: B }}>
            Une question spécifique ?{" "}
            <span style={{ color: "#555", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 1, cursor: "pointer" }}>
              Contactez-nous directement
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

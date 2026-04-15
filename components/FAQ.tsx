"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

const faqs = [
  { q: "Mon agence n'a aucune expertise GEO interne. Est-ce un problème ?", a: "C'est exactement le cas d'usage pour lequel Layers a été conçu. Le portail partenaire vous donne tous les éléments de pitch et de vente. L'accompagnement mensuel vous permet de délivrer sans recruter. Vous n'avez pas besoin d'être expert GEO avant de commencer." },
  { q: "En quoi Layers est différent de Peec AI, Otterly ou Qwairy ?", a: "Layers simule de vraies conversations avec contexte complet (persona, localisation, objectifs) sur plusieurs échanges — pas un prompt générique. Vous savez ce que l'IA pense réellement de la marque. L'outil est aussi le seul pensé exclusivement pour les agences, avec pricing, portail partenaire et accompagnement calibrés." },
  { q: "Mes clients verront-ils le nom Layers ou le mien ?", a: "Le vôtre. Dashboards dynamiques aux couleurs de votre agence, rapports prêts à envoyer, données expliquées par l'IA. Votre branding, votre expertise, notre moteur." },
  { q: "Puis-je gérer plusieurs clients sur un seul compte ?", a: "Seats et projets illimités sur toutes les offres. Que vous gériez 5 ou 50 clients, le prix ne change pas." },
  { q: "Que se passe-t-il si j'ai besoin de plus de crédits ?", a: "Achetez des crédits additionnels à la carte, sans upgrade forcé. Votre consommation s'adapte à votre activité, pas l'inverse." },
  { q: "Layers s'intègre-t-il avec nos outils ?", a: "Oui — Looker Studio, GA4, rapports automatiques par mail. Zéro friction d'adoption dans votre stack. Ça s'intègre dans ce que vous faites déjà." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "128px 24px", background: "#000" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", fontFamily: BODY }}>FAQ</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: DISPLAY, fontWeight: 700, textAlign: "center", fontSize: "clamp(30px, 4.5vw, 54px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 56 }}>
          Vos questions.
          <br /><span style={{ color: "#333" }}>Réponses directes.</span>
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left", borderRadius: 12, overflow: "hidden", cursor: "pointer", display: "block",
                  background: open === i ? "#0a0a0a" : "#080808",
                  border: `1px solid ${open === i ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"}`,
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px" }}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: open === i ? "#fff" : "#aaa", fontFamily: BODY, paddingRight: 24, lineHeight: 1.5, textAlign: "left" }}>{faq.q}</p>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M4 1v6M1 4h6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: "hidden" }}>
                      <div style={{ padding: "0 22px 18px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                        <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginTop: 14, fontFamily: BODY }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

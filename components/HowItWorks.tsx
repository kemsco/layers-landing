"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

const items = [
  { n: "01", title: "Simulation ICP réelle", sub: "Pas des prompts génériques", before: "Un prompt basique : \"Quelle est la meilleure agence SEO ?\" — réponse déconnectée de la réalité de vos clients.", after: "Conversations avec contexte complet : persona, localisation, objectifs. L'IA challengée sur plusieurs échanges révèle ce qu'elle pense vraiment.", benefit: "Vous livrez une vérité LLM — pas une approximation." },
  { n: "02", title: "White-label dynamique", sub: "Votre branding, notre moteur", before: "Rapports génériques que vous reformatez manuellement des heures avant d'envoyer à vos clients.", after: "Dashboards aux couleurs de votre agence, chaque métrique expliquée par l'IA. Export en un clic, prêt à envoyer.", benefit: "Des heures de mise en forme éliminées par client." },
  { n: "03", title: "Portail partenaire", sub: "Sales & marketing prêts", before: "Construire votre argumentaire GEO de zéro, sans savoir par où commencer face à un marché technique.", after: "Pitch, éléments sales et marketing prêts dès le J1. Votre offre est crédible et vendable immédiatement.", benefit: "Pitchez une offre GEO dès cette semaine." },
  { n: "04", title: "Expert GEO externalisé", sub: "Accompagnement mensuel inclus", before: "Recruter un expert GEO à 50-80k€/an, ou tâtonner seul sur un marché qui évolue chaque semaine.", after: "Slack dédié + 2h de call/mois inclus dans votre plan. Un expert dans votre équipe sans ligne de recrutement.", benefit: "L'expertise GEO sans le coût fixe." },
  { n: "05", title: "Zéro friction d'adoption", sub: "Intégration stack existante", before: "Un énième outil déconnecté de votre workflow, à réapprendre et faire adopter à vos équipes.", after: "Looker Studio, GA4, rapports auto par mail. Ça s'intègre dans ce que vous faites déjà, dès le premier jour.", benefit: "Adoption immédiate, ROI dès le premier client." },
];

export default function HowItWorks() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "128px 24px", background: "#000" }}>
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", fontFamily: BODY }}>Différenciateurs</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: DISPLAY, fontWeight: 700, textAlign: "center", fontSize: "clamp(30px, 4.5vw, 54px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
          Ce que Layers fait différemment.
          <br /><span style={{ color: "#333" }}>Et pourquoi ça compte.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 15, color: "#555", marginBottom: 56, fontFamily: BODY }}>
          Cliquez sur chaque point pour voir le avant / après.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item, i) => (
            <motion.div key={item.n}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left", background: open === i ? "#0c0c0c" : "#080808",
                  border: `1px solid ${open === i ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 14, overflow: "hidden", cursor: "pointer", display: "block",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <span style={{ fontSize: 11, fontFamily: "monospace", color: "#2a2a2a", flexShrink: 0 }}>{item.n}</span>
                    <div>
                      <div style={{ fontFamily: DISPLAY, fontSize: 15, fontWeight: 600, color: open === i ? "#fff" : "#aaa", letterSpacing: "-0.01em" }}>{item.title}</div>
                      <div style={{ fontSize: 12, color: "#444", marginTop: 2, fontFamily: BODY }}>{item.sub}</div>
                    </div>
                  </div>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px 24px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                          <div style={{ padding: "14px 16px", borderRadius: 10, background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.1)" }}>
                            <div style={{ fontSize: 10, color: "#f87171", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: BODY }}>Sans Layers</div>
                            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, fontFamily: BODY }}>{item.before}</p>
                          </div>
                          <div style={{ padding: "14px 16px", borderRadius: 10, background: "rgba(110,231,183,0.04)", border: "1px solid rgba(110,231,183,0.1)" }}>
                            <div style={{ fontSize: 10, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: BODY }}>Avec Layers</div>
                            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6, fontFamily: BODY }}>{item.after}</p>
                          </div>
                        </div>
                        <div style={{ fontSize: 13, color: "#888", fontFamily: BODY }}>
                          <span style={{ color: "#6ee7b7", marginRight: 6 }}>→</span>{item.benefit}
                        </div>
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

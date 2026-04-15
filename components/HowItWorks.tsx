"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const items = [
  { n: "01", title: "Simulation ICP réelle", before: "Un prompt basique sans contexte — réponse déconnectée de la réalité de vos clients.", after: "Conversations avec persona, localisation, objectifs sur plusieurs échanges. L'IA challengée révèle la vérité.", benefit: "Vous livrez une vérité LLM — pas une approximation." },
  { n: "02", title: "White-label dynamique", before: "Rapports génériques reformatés manuellement des heures avant envoi client.", after: "Dashboards aux couleurs de votre agence, métriques expliquées par l'IA. Export en 1 clic.", benefit: "Des heures de mise en forme éliminées par client." },
  { n: "03", title: "Portail partenaire", before: "Argumentaire GEO à construire de zéro sur un marché technique et inconnu.", after: "Pitch, sales et marketing prêts dès J1. Offre crédible et vendable immédiatement.", benefit: "Pitchez une offre GEO dès cette semaine." },
  { n: "04", title: "Expert GEO externalisé", before: "Recruter un expert à 50–80k€/an ou tâtonner seul sur un marché qui évolue chaque semaine.", after: "Slack dédié + 2h de call/mois inclus. Un expert dans votre équipe sans ligne de recrutement.", benefit: "L'expertise GEO sans le coût fixe." },
  { n: "05", title: "Zéro friction d'adoption", before: "Un outil déconnecté de votre workflow, à réapprendre et faire adopter à vos équipes.", after: "Looker Studio, GA4, rapports auto par mail. Intégration dans ce que vous faites déjà.", benefit: "Adoption immédiate, ROI dès le premier client." },
];

export default function HowItWorks() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: "140px 24px", background: "#020202", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: B }}>Différenciateurs</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          Ce que Layers fait différemment.
          <br /><span style={{ color: "#2a2a2a" }}>Et pourquoi ça compte.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 15, color: "#4a4a4a", marginBottom: 64, fontFamily: B }}>
          Cliquez pour voir le avant / après.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={item.n}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <motion.div
                  animate={{ background: isOpen ? "#0d0d0d" : "#080808", borderColor: isOpen ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)" }}
                  style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", cursor: "pointer" }}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                      <span style={{ fontSize: 10, fontFamily: "monospace", color: "#2a2a2a" }}>{item.n}</span>
                      <span style={{ fontFamily: D, fontSize: 15, fontWeight: 600, color: isOpen ? "#fff" : "#888", letterSpacing: "-0.02em", transition: "color 0.2s" }}>{item.title}</span>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}
                      style={{ width: 24, height: 24, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
                        <div style={{ padding: "0 24px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20, marginBottom: 16 }}>
                            <div style={{ padding: "16px 18px", borderRadius: 12, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}>
                              <div style={{ fontSize: 9, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 9, fontFamily: B, fontWeight: 600 }}>Sans Layers</div>
                              <p style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.7, fontFamily: B }}>{item.before}</p>
                            </div>
                            <div style={{ padding: "16px 18px", borderRadius: 12, background: "rgba(110,231,183,0.04)", border: "1px solid rgba(110,231,183,0.12)" }}>
                              <div style={{ fontSize: 9, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 9, fontFamily: B, fontWeight: 600 }}>Avec Layers</div>
                              <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7, fontFamily: B }}>{item.after}</p>
                            </div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6a6a6a", fontFamily: B }}>
                            <span style={{ color: "#6ee7b7", fontSize: 15 }}>→</span>
                            <span>{item.benefit}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

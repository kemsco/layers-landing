"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const plans = [
  {
    name: "Starter",
    tag: "Pour commencer",
    desc: "Pour les agences qui veulent gagner des pitchs en créant des rapports légers.",
    price: "Beta",
    note: "Accès limité",
    features: ["Jusqu'à X crédits / mois", "Accès portail partenaire", "Dashboard LLM clients", "Rapports automatiques", "Support email"],
    cta: "Commencer →",
    highlight: false,
  },
  {
    name: "Agency",
    tag: "Recommandé",
    desc: "Pour les agences qui font du GEO une ligne de service à part entière.",
    price: "Beta",
    note: "Accès prioritaire",
    features: ["Jusqu'à X crédits / mois", "Rapports white-label", "Seats & projets illimités", "Slack dédié + 2h call / mois", "Connecteur Looker Studio natif", "Sales assets inclus"],
    cta: "Demander une démo →",
    highlight: true,
  },
  {
    name: "Scale",
    tag: "Grands portefeuilles",
    desc: "Pour les agences qui gèrent un portefeuille large avec des niveaux de service différenciés.",
    price: "Sur devis",
    note: "Onboarding dédié",
    features: ["Crédits sur mesure", "Tout Agency inclus", "Accompagnement roadmap", "Onboarding équipe dédié", "SLA prioritaire"],
    cta: "Nous contacter →",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section style={{ padding: "140px 48px", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444", fontFamily: B }}>Tarifs</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          Un investissement.
          <br /><span style={{ color: "#555" }}>Pas un coût.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 15, color: "#666", maxWidth: 560, margin: "0 auto 72px", lineHeight: 1.75, fontFamily: B }}>
          Le GEO n'est pas une option pour les agences qui veulent rester compétitives. Seats et projets <span style={{ color: "#888" }}>illimités sur tous les plans</span>.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {plans.map((plan, i) => (
            <motion.div key={plan.name}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={plan.highlight ? {} : { y: -4, borderColor: "rgba(255,255,255,0.14)" }}
              style={{
                padding: "30px 28px", display: "flex", flexDirection: "column", position: "relative",
                background: plan.highlight ? "#fff" : "#080808",
                border: `1px solid ${plan.highlight ? "transparent" : "rgba(255,255,255,0.07)"}`,
                transition: "border-color 0.3s, transform 0.3s",
                overflow: "hidden",
              }}
            >
              {plan.highlight && (
                <>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #fff 0%, #f0f0f0 100%)" }} />
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    style={{ position: "absolute", top: 0, bottom: 0, width: "35%", background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.04), transparent)", transform: "skewX(-12deg)", pointerEvents: "none", zIndex: 1 }}
                  />
                </>
              )}

              <div style={{ position: "relative", zIndex: 2 }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -30, left: "50%", transform: "translateX(-50%)", background: "#000", color: "#fff", fontSize: 10, fontWeight: 700, padding: "5px 14px", fontFamily: D, whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
                    ✦ {plan.tag}
                  </div>
                )}

                <div style={{ marginBottom: 22 }}>
                  <div style={{ fontFamily: D, fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em", color: plan.highlight ? "#000" : "#fff", marginBottom: 4 }}>{plan.name}</div>
                  {!plan.highlight && <div style={{ fontSize: 11, color: "#444", fontFamily: B, marginBottom: 4 }}>{plan.tag}</div>}
                  <div style={{ fontSize: 12, color: plan.highlight ? "#666" : "#555", fontFamily: B, lineHeight: 1.6 }}>{plan.desc}</div>
                </div>

                <div style={{ borderTop: `1px solid ${plan.highlight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.06)"}`, borderBottom: `1px solid ${plan.highlight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.06)"}`, padding: "16px 0", marginBottom: 22 }}>
                  <div style={{ fontFamily: D, fontSize: 26, fontWeight: 700, letterSpacing: "-0.04em", color: plan.highlight ? "#000" : "#fff" }}>{plan.price}</div>
                  <div style={{ fontSize: 11, color: plan.highlight ? "#777" : "#444", fontFamily: B, marginTop: 2 }}>{plan.note}</div>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 1, flexShrink: 0 }}>
                        <circle cx="7" cy="7" r="6.5" stroke={plan.highlight ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.1)"} />
                        <path d="M4.5 7l1.8 1.8 3.2-3.2" stroke={plan.highlight ? "#000" : "rgba(255,255,255,0.5)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: 13, color: plan.highlight ? "#222" : "#666", fontFamily: B }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.button whileHover={{ opacity: 0.85 }} whileTap={{ scale: 0.97 }}
                  style={{ width: "100%", padding: "13px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: D, letterSpacing: "-0.01em", background: plan.highlight ? "#000" : "rgba(255,255,255,0.05)", color: plan.highlight ? "#fff" : "#555", border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.07)" }}>
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ marginTop: 36, display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
          {["Seats & projets illimités", "Crédits à la carte", "Sans engagement", "Accompagnement inclus", "Paiement sécurisé Stripe"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#333", fontFamily: B }}>
              <span style={{ color: "#444" }}>✓</span>{item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

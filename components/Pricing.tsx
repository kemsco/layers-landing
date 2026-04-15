"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const plans = [
  { name: "Starter", tag: "Pour débuter", desc: "Agences débutant en GEO", price: "Beta", note: "Places limitées", features: ["Dashboard LLM multi-clients", "Rapports automatiques", "Portail partenaire", "Seats illimités", "Projets illimités"], cta: "Démarrer", highlight: false },
  { name: "Growth", tag: "Le plus populaire", desc: "10–20 clients actifs", price: "Beta", note: "Places limitées", features: ["Tout Starter inclus", "White-label complet", "Crédits supplémentaires", "Slack dédié", "1h de call/mois"], cta: "Choisir Growth", highlight: true },
  { name: "Pro", tag: "Pour les leaders", desc: "20+ clients SEO-first", price: "Sur devis", note: "Onboarding dédié", features: ["Tout Growth inclus", "Accompagnement premium", "2h de call/mois", "Feature requests prioritaires", "Onboarding dédié"], cta: "Contacter l'équipe", highlight: false },
];

export default function Pricing() {
  return (
    <section style={{ padding: "140px 24px", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: B }}>Tarifs</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          Un investissement.
          <br /><span style={{ color: "#2a2a2a" }}>Pas un coût.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 16, color: "#4a4a4a", maxWidth: 480, margin: "0 auto 72px", lineHeight: 1.75, fontFamily: B }}>
          Chaque plan inclut <span style={{ color: "#888" }}>seats et projets illimités</span>. Crédits additionnels à la carte.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {plans.map((plan, i) => (
            <motion.div key={plan.name}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={plan.highlight ? {} : { y: -4, borderColor: "rgba(255,255,255,0.12)" }}
              style={{
                borderRadius: 20, padding: "30px 28px", display: "flex", flexDirection: "column", position: "relative",
                background: plan.highlight ? "#fff" : "#080808",
                border: `1px solid ${plan.highlight ? "transparent" : "rgba(255,255,255,0.07)"}`,
                transition: "border-color 0.3s",
                overflow: "hidden",
              }}
            >
              {/* Glow on popular */}
              {plan.highlight && (
                <>
                  <div style={{ position: "absolute", inset: 0, borderRadius: 20, background: "linear-gradient(135deg, #fff 0%, #f0f0f0 100%)" }} />
                  <motion.div
                    animate={{ x: ["−100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    style={{ position: "absolute", top: 0, bottom: 0, width: "35%", background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.04), transparent)", transform: "skewX(-12deg)", pointerEvents: "none", zIndex: 1 }}
                  />
                </>
              )}

              <div style={{ position: "relative", zIndex: 2 }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -30, left: "50%", transform: "translateX(-50%)", background: "#000", color: "#fff", fontSize: 10, fontWeight: 700, padding: "5px 14px", borderRadius: 99, fontFamily: D, whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
                    ✦ {plan.tag}
                  </div>
                )}

                <div style={{ marginBottom: 22 }}>
                  <div style={{ fontFamily: D, fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em", color: plan.highlight ? "#000" : "#fff", marginBottom: 4 }}>{plan.name}</div>
                  {!plan.highlight && <div style={{ fontSize: 11, color: "#3a3a3a", fontFamily: B, marginBottom: 2 }}>{plan.tag}</div>}
                  <div style={{ fontSize: 12, color: plan.highlight ? "#777" : "#3a3a3a", fontFamily: B }}>{plan.desc}</div>
                </div>

                <div style={{ borderTop: `1px solid ${plan.highlight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.06)"}`, borderBottom: `1px solid ${plan.highlight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.06)"}`, padding: "16px 0", marginBottom: 22 }}>
                  <div style={{ fontFamily: D, fontSize: 26, fontWeight: 700, letterSpacing: "-0.04em", color: plan.highlight ? "#000" : "#fff" }}>{plan.price}</div>
                  <div style={{ fontSize: 11, color: plan.highlight ? "#888" : "#3a3a3a", fontFamily: B, marginTop: 2 }}>{plan.note}</div>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 1, flexShrink: 0 }}>
                        <circle cx="7" cy="7" r="6.5" stroke={plan.highlight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.1)"} />
                        <path d="M4.5 7l1.8 1.8 3.2-3.2" stroke={plan.highlight ? "#000" : "rgba(255,255,255,0.45)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: 13, color: plan.highlight ? "#333" : "#5a5a5a", fontFamily: B }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.button whileHover={{ opacity: 0.85 }} whileTap={{ scale: 0.97 }}
                  style={{ width: "100%", padding: "13px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: D, letterSpacing: "-0.01em", background: plan.highlight ? "#000" : "rgba(255,255,255,0.05)", color: plan.highlight ? "#fff" : "#666", border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.07)" }}>
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ marginTop: 36, display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
          {["Seats & projets illimités", "Crédits à la carte", "Stripe sécurisé", "Accompagnement inclus", "Sans engagement"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#3a3a3a", fontFamily: B }}>
              <span style={{ color: "#4a4a4a" }}>✓</span>{item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

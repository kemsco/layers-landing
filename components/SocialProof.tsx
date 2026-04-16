"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const testimonials = [
  {
    quote: "Avant Layers, j'improvisais une réponse quand un client posait la question ChatGPT. Maintenant on envoie un rapport sous 24h. La différence de crédibilité est immédiate.",
    name: "Directeur SEO",
    role: "Agence 30 personnes",
    co: "Paris",
  },
  {
    quote: "J'avais besoin d'une offre GEO sans embaucher un expert. Layers nous a donné l'outil, les livrables et l'accompagnement. Premier client GEO signé trois semaines après l'onboarding.",
    name: "Fondateur",
    role: "Agence SEO indépendante",
    co: "Lyon",
  },
  {
    quote: "J'ai arrêté de copier-coller des prompts dans ChatGPT. Layers structure l'analyse, génère le rapport, et je me concentre sur ce que je sais faire : les recommandations.",
    name: "Consultant SEO Senior",
    role: "Agence 15 personnes",
    co: "Bordeaux",
  },
];

const team = [
  {
    initial: "C", name: "Clément", role: "Co-fondateur · Sales & Vision",
    bg: "Oracle → Samsung → Google Sales Specialist AI & Workspace",
    quote: "Je sais comment Google construit ses produits IA. Layers en est l'application directe pour les agences.",
  },
  {
    initial: "Y", name: "Yacine", role: "Co-fondateur · Engineering",
    bg: "Google ML Engineer",
    quote: "Le moteur de tracking repose sur du ML propriétaire — pas une API OpenAI en passthrough.",
  },
];

export default function SocialProof() {
  return (
    <section style={{ padding: "140px 48px", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444", fontFamily: B }}>Témoignages</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 72 }}>
          Ce que les agences
          <br /><span style={{ color: "#555" }}>partenaires disent.</span>
        </motion.h2>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}>
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.07)", padding: "26px 24px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                {[...Array(5)].map((_, j) => (
                  <motion.div key={j}
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 + j * 0.04 }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="rgba(255,255,255,0.6)">
                      <path d="M6 1l1.1 3.2H9.8L7.1 6.1l1 3.2L6 7.7 3.4 9.3l1-3.2L1.2 4.2h3.2z" />
                    </svg>
                  </motion.div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#777", lineHeight: 1.8, flex: 1, marginBottom: 20, fontFamily: B, fontStyle: "italic" }}>"{t.quote}"</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 600, fontFamily: D, letterSpacing: "-0.01em" }}>— {t.name}</div>
                <div style={{ fontSize: 11, color: "#444", marginTop: 2, fontFamily: B }}>{t.role} · {t.co}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notre équipe */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 20, paddingTop: 48 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444", fontFamily: B }}>Notre équipe</span>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {team.map((f, i) => (
            <motion.div key={f.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.07)", padding: "28px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#111", border: "1px solid rgba(255,255,255,0.09)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: D, fontWeight: 700, fontSize: 15, color: "#fff" }}>{f.initial}</div>
                <div>
                  <div style={{ fontFamily: D, fontSize: 15, fontWeight: 600, letterSpacing: "-0.02em" }}>{f.name}</div>
                  <div style={{ fontSize: 12, color: "#555", marginTop: 2, fontFamily: B }}>{f.role}</div>
                  <div style={{ fontSize: 11, color: "#333", marginTop: 2, fontFamily: B }}>{f.bg}</div>
                </div>
              </div>
              <blockquote style={{ fontSize: 13, color: "#555", lineHeight: 1.75, fontStyle: "italic", borderLeft: "2px solid rgba(255,255,255,0.07)", paddingLeft: 14, fontFamily: B }}>
                "{f.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

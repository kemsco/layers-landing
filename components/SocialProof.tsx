"use client";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

const testimonials = [
  { quote: "Layers nous a permis de lancer notre offre GEO en 3 semaines. Premier client signé 8 jours après l'onboarding. Le portail partenaire nous a économisé des semaines de travail.", name: "Sophie M.", role: "Directrice SEO · Agence Paris" },
  { quote: "Avant Layers, 2 jours par audit GEO. Maintenant 2 heures, avec un livrable bien plus professionnel. Mes clients adorent les dashboards white-label.", name: "Thomas R.", role: "Fondateur · Growth SEO Agency" },
  { quote: "Le seul outil qui simule vraiment des conversations ICP. La différence avec les autres est immédiate dès le premier audit.", name: "Marie-L.", role: "Head of SEO · Agence Organique" },
];

const founders = [
  { initial: "C", name: "Clément", role: "Co-fondateur · Sales & Vision", bg: "Oracle → Samsung → Google Sales Specialist AI", quote: "Je sais comment Google construit ses produits IA. Layers en est l'application directe pour les agences." },
  { initial: "Y", name: "Yacine", role: "Co-fondateur · Engineering", bg: "Google ML Engineer", quote: "Le moteur de tracking repose sur du ML propriétaire — pas une API OpenAI en passthrough." },
];

export default function SocialProof() {
  return (
    <section style={{ padding: "128px 24px", background: "#000" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#444", fontFamily: BODY }}>Crédibilité</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: DISPLAY, fontWeight: 700, textAlign: "center", fontSize: "clamp(30px, 4.5vw, 54px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 64 }}>
          Construit par des ex-Google.
          <br /><span style={{ color: "#333" }}>Validé par des agences SEO.</span>
        </motion.h2>

        {/* Founders */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          {founders.map((f, i) => (
            <motion.div key={f.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 26px" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#111", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: DISPLAY, fontWeight: 700, fontSize: 16 }}>{f.initial}</div>
                <div>
                  <div style={{ fontFamily: DISPLAY, fontSize: 15, fontWeight: 600 }}>{f.name}</div>
                  <div style={{ fontSize: 12, color: "#555", marginTop: 2, fontFamily: BODY }}>{f.role}</div>
                  <div style={{ fontSize: 11, color: "#333", marginTop: 2, fontFamily: BODY }}>{f.bg}</div>
                </div>
              </div>
              <blockquote style={{ fontSize: 13, color: "#666", lineHeight: 1.7, fontStyle: "italic", borderLeft: "2px solid rgba(255,255,255,0.07)", paddingLeft: 14, fontFamily: BODY }}>
                "{f.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "22px 22px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="11" height="11" viewBox="0 0 11 11" fill="#fff">
                    <path d="M5.5 1l1.1 3.2H9.8L7.1 6.1l1 3.2L5.5 7.7l-2.6 1.6 1-3.2L1.2 4.2h3.2z" />
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7, flex: 1, marginBottom: 16, fontFamily: BODY }}>"{t.quote}"</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 600, fontFamily: DISPLAY }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "#555", marginTop: 2, fontFamily: BODY }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
          {["Feedback-driven — features validées par l'usage", "ML propriétaire — pas d'API en passthrough", "Infrastructure GCP"].map(b => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#444", fontFamily: BODY }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="6.5" cy="6.5" r="6" stroke="rgba(255,255,255,0.12)" />
                <path d="M4 6.5l1.7 1.7 3-3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

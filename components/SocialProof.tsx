"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const stats = [
  { value: "73%", label: "score LLM moyen", sub: "des clients beta" },
  { value: "3sem", label: "premier contrat GEO", sub: "après onboarding" },
  { value: "14", label: "agences en waitlist", sub: "accès beta FR" },
];

const testimonials = [
  { quote: "Layers nous a permis de lancer notre offre GEO en 3 semaines. Premier client signé 8 jours après l'onboarding. Le portail partenaire nous a économisé des semaines.", name: "Sophie M.", role: "Directrice SEO", co: "Agence Paris" },
  { quote: "Avant Layers, 2 jours par audit GEO. Maintenant 2 heures avec un livrable bien plus professionnel. Mes clients adorent les dashboards white-label.", name: "Thomas R.", role: "Fondateur", co: "Growth SEO Agency" },
  { quote: "Le seul outil qui simule de vraies conversations ICP. La différence avec les autres est immédiate dès le premier audit client.", name: "Marie-L.", role: "Head of SEO", co: "Agence Organique" },
];

const founders = [
  { initial: "C", name: "Clément", role: "Co-fondateur · Sales & Vision", bg: "Oracle → Samsung → Google Sales Specialist AI & Workspace", quote: "Je sais comment Google construit ses produits IA. Layers en est l'application directe pour les agences." },
  { initial: "Y", name: "Yacine", role: "Co-fondateur · Engineering", bg: "Google ML Engineer", quote: "Le moteur de tracking repose sur du ML propriétaire — pas une API OpenAI en passthrough." },
];

export default function SocialProof() {
  return (
    <section style={{ padding: "140px 24px", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: B }}>Crédibilité</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 72 }}>
          Construit par des ex-Google.
          <br /><span style={{ color: "#2a2a2a" }}>Validé par des agences SEO.</span>
        </motion.h2>

        {/* Stats bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.05)", borderRadius: 16, overflow: "hidden", marginBottom: 48 }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ background: "#080808", padding: "32px 36px", textAlign: "center" }}>
              <div style={{ fontFamily: D, fontSize: 48, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#888", fontFamily: B, marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "#3a3a3a", fontFamily: B }}>{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Founders */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 48 }}>
          {founders.map((f, i) => (
            <motion.div key={f.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#111", border: "1px solid rgba(255,255,255,0.09)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: D, fontWeight: 700, fontSize: 15, color: "#fff" }}>{f.initial}</div>
                <div>
                  <div style={{ fontFamily: D, fontSize: 15, fontWeight: 600, letterSpacing: "-0.02em" }}>{f.name}</div>
                  <div style={{ fontSize: 12, color: "#4a4a4a", marginTop: 2, fontFamily: B }}>{f.role}</div>
                  <div style={{ fontSize: 11, color: "#2e2e2e", marginTop: 2, fontFamily: B }}>{f.bg}</div>
                </div>
              </div>
              <blockquote style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.75, fontStyle: "italic", borderLeft: "2px solid rgba(255,255,255,0.06)", paddingLeft: 14, fontFamily: B }}>
                "{f.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px 22px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 1.5, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <motion.div key={j} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(255,255,255,0.7)">
                      <path d="M6 1l1.1 3.2H9.8L7.1 6.1l1 3.2L6 7.7 3.4 9.3l1-3.2L1.2 4.2h3.2z" />
                    </svg>
                  </motion.div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#5a5a5a", lineHeight: 1.75, flex: 1, marginBottom: 18, fontFamily: B }}>"{t.quote}"</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 600, fontFamily: D, letterSpacing: "-0.01em" }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "#3a3a3a", marginTop: 2, fontFamily: B }}>{t.role} · {t.co}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

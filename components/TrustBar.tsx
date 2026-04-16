"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const agencies = [
  { name: "Agence Alpha", initials: "AA" },
  { name: "Growth Lab", initials: "GL" },
  { name: "OrgaSEO", initials: "OS" },
  { name: "Référence+", initials: "R+" },
  { name: "NovaSEO", initials: "NS" },
  { name: "DigitalRank", initials: "DR" },
];

export default function TrustBar() {
  return (
    <section style={{ padding: "40px 48px", background: "#050505", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", fontSize: 11, color: "#333", fontFamily: B, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Les agences qui ont déjà une longueur d'avance.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
          {agencies.map((a, i) => (
            <motion.div key={a.name}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ width: 20, height: 20, background: "#111", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: "#444", fontFamily: D }}>
                {a.initials}
              </div>
              <span style={{ fontSize: 12, color: "#333", fontFamily: B, fontWeight: 500 }}>{a.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const cols = [
  {
    title: "Produit",
    links: ["Fonctionnalités", "Tarifs", "Portail agence"],
  },
  {
    title: "Ressources",
    links: ["Blog", "Cas d'usage", "Documentation"],
  },
  {
    title: "Légal",
    links: ["Mentions légales", "Politique de confidentialité", "CGU"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "64px 24px 40px" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr) 1.2fr", gap: 40, marginBottom: 56, flexWrap: "wrap" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect width="9" height="9" rx="2" fill="white" />
                <rect x="11" width="9" height="9" rx="2" fill="white" opacity="0.5" />
                <rect y="11" width="9" height="9" rx="2" fill="white" opacity="0.5" />
                <rect x="11" y="11" width="9" height="9" rx="2" fill="white" />
              </svg>
              <span style={{ fontFamily: D, fontWeight: 700, fontSize: 15, letterSpacing: "-0.03em", color: "#fff" }}>Layers</span>
            </div>
            <p style={{ fontSize: 12, color: "#2a2a2a", fontFamily: B, lineHeight: 1.7, maxWidth: 200 }}>
              L'infrastructure GEO pour les agences SEO françaises.
            </p>
          </div>

          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 11, color: "#3a3a3a", fontFamily: D, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(link => (
                  <motion.a key={link} href="#" whileHover={{ color: "#888" }}
                    style={{ fontSize: 12, color: "#2a2a2a", textDecoration: "none", fontFamily: B, transition: "color 0.2s" }}>
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p style={{ fontSize: 11, color: "#3a3a3a", fontFamily: D, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Newsletter</p>
            <p style={{ fontSize: 12, color: "#2a2a2a", fontFamily: B, lineHeight: 1.6, marginBottom: 14 }}>
              Restez à jour sur le GEO et les LLMs.
            </p>
            <div style={{ display: "flex", gap: 6 }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Votre email"
                style={{
                  flex: 1, minWidth: 0, padding: "8px 12px", background: "#080808",
                  border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8,
                  fontSize: 12, color: "#fff", fontFamily: B, outline: "none",
                }}
              />
              <motion.button
                whileHover={{ background: "#e8e8e8" }} whileTap={{ scale: 0.96 }}
                style={{ padding: "8px 12px", background: "#fff", color: "#000", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: D, whiteSpace: "nowrap" }}>
                S'inscrire →
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 11, color: "#1e1e1e", fontFamily: B }}>© 2025 Layers. Tous droits réservés.</p>
          <p style={{ fontSize: 11, color: "#1e1e1e", fontFamily: B }}>Fondé par des ex-Google · Paris, France</p>
        </div>
      </div>
    </footer>
  );
}

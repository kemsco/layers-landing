"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const cols = [
  { title: "Produit", links: ["Fonctionnalités", "Tarifs", "Portail agence"] },
  { title: "Ressources", links: ["Blog", "Cas d'usage", "Documentation"] },
  { title: "Légal", links: ["Mentions légales", "Politique de confidentialité", "CGU"] },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr) 1.3fr", gap: 40, marginBottom: 56, flexWrap: "wrap" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Layers" style={{ height: 24, width: "auto", display: "block" }} />
            </div>
            <p style={{ fontSize: 12, color: "#333", fontFamily: B, lineHeight: 1.7, maxWidth: 200 }}>
              L'infrastructure GEO pour les agences SEO françaises.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 11, color: "#444", fontFamily: D, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(link => (
                  <motion.a key={link} href="#" whileHover={{ color: "#777" }}
                    style={{ fontSize: 12, color: "#2e2e2e", textDecoration: "none", fontFamily: B, transition: "color 0.2s" }}>
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p style={{ fontSize: 11, color: "#444", fontFamily: D, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Newsletter</p>
            <p style={{ fontSize: 12, color: "#2e2e2e", fontFamily: B, lineHeight: 1.6, marginBottom: 14 }}>
              Restez à jour sur le GEO et les LLMs.
            </p>
            <div style={{ display: "flex", gap: 0 }}>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Votre email"
                style={{ flex: 1, minWidth: 0, padding: "9px 12px", background: "#080808", border: "1px solid rgba(255,255,255,0.07)", borderRight: "none", fontSize: 12, color: "#fff", fontFamily: B, outline: "none" }}
              />
              <motion.button whileHover={{ background: "#e8e8e8" }} whileTap={{ scale: 0.97 }}
                style={{ padding: "9px 14px", background: "#fff", color: "#000", border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: D, whiteSpace: "nowrap" }}>
                S'inscrire →
              </motion.button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 11, color: "#1e1e1e", fontFamily: B }}>© 2025 Layers. Tous droits réservés.</p>
          <p style={{ fontSize: 11, color: "#1e1e1e", fontFamily: B }}>Fondé par des ex-Google · Paris, France</p>
        </div>
      </div>
    </footer>
  );
}

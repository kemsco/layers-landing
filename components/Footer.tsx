"use client";
import { motion } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

const links = ["Confidentialité", "CGU", "Contact"];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#000", position: "relative" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "36px 24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 22, height: 22, background: "#fff", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 10, background: "#000", borderRadius: 2 }} />
          </div>
          <span style={{ fontFamily: D, fontWeight: 700, fontSize: 14, color: "#fff", letterSpacing: "-0.02em" }}>Layers</span>
          <span style={{ fontSize: 10, color: "#2a2a2a", fontFamily: B, marginLeft: 4 }}>GEO Intelligence · Bêta</span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 20 }}>
          {links.map(l => (
            <motion.a key={l} href="#"
              whileHover={{ color: "#fff" }}
              style={{ fontSize: 12, color: "#333", textDecoration: "none", fontFamily: B, transition: "color 0.2s" }}
            >{l}</motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: 11, color: "#222", fontFamily: B }}>© 2025 Layers. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

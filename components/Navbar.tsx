"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 60], ["rgba(0,0,0,0)", "rgba(8,8,8,0.92)"]);
  const border = useTransform(scrollY, [0, 60], ["rgba(255,255,255,0)", "rgba(255,255,255,0.07)"]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 24px" }}
    >
      <motion.div style={{
        maxWidth: 1100, margin: "14px auto 0",
        height: 50, display: "flex", alignItems: "center", justifyContent: "space-between",
        borderRadius: 12, backgroundColor: bg,
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: "1px solid", borderColor: border,
        padding: "0 20px",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="9" height="9" rx="2" fill="white" />
            <rect x="11" width="9" height="9" rx="2" fill="white" opacity="0.5" />
            <rect y="11" width="9" height="9" rx="2" fill="white" opacity="0.5" />
            <rect x="11" y="11" width="9" height="9" rx="2" fill="white" />
          </svg>
          <span style={{ fontFamily: D, fontWeight: 700, fontSize: 15, letterSpacing: "-0.03em" }}>Layers</span>
        </div>

        <nav style={{ display: "flex", gap: 28 }}>
          {["Produit", "Cas d'usage", "Tarifs", "À propos"].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: "#555", textDecoration: "none", fontFamily: B, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}>{l}</a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          style={{
            fontSize: 13, fontWeight: 600, padding: "8px 18px",
            background: "#fff", color: "#000", border: "none",
            borderRadius: 8, cursor: "pointer", fontFamily: D, letterSpacing: "-0.01em",
          }}>
          Demander une démo →
        </motion.button>
      </motion.div>
    </motion.header>
  );
}

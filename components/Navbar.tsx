"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const D = "var(--font-space), sans-serif";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 60], ["rgba(0,0,0,0)", "rgba(6,6,6,0.95)"]);
  const border = useTransform(scrollY, [0, 60], ["rgba(255,255,255,0)", "rgba(255,255,255,0.07)"]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 32px" }}
    >
      <motion.div style={{
        maxWidth: 1200, margin: "14px auto 0",
        height: 52, display: "flex", alignItems: "center", justifyContent: "space-between",
        backgroundColor: bg,
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid", borderColor: border,
        padding: "0 0",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Layers" style={{ height: 26, width: "auto", display: "block" }} />
        </div>

        {/* Single CTA */}
        <motion.button
          whileHover={{ opacity: 0.88 }} whileTap={{ scale: 0.97 }}
          style={{
            fontSize: 13, fontWeight: 600, padding: "9px 20px",
            background: "#fff", color: "#000", border: "none",
            borderRadius: 0, cursor: "pointer", fontFamily: D, letterSpacing: "-0.01em",
          }}>
          Demander une démo →
        </motion.button>
      </motion.div>
    </motion.header>
  );
}

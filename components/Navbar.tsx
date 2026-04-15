"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const DISPLAY = "var(--font-space), sans-serif";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.85)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(20px)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
      }}
    >
      <motion.div
        style={{
          maxWidth: 1100,
          margin: "12px auto 0",
          padding: "0 20px",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 12,
          backgroundColor: bg,
          backdropFilter: blur,
          WebkitBackdropFilter: blur as unknown as string,
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 22, height: 22, background: "#fff", borderRadius: 4 }} />
          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: "-0.02em" }}>
            Layers
          </span>
        </div>

        {/* Links */}
        <nav style={{ display: "flex", gap: 28 }}>
          {["Solution", "Tarifs", "FAQ"].map((l) => (
            <a key={l} href="#" style={{ fontSize: 13, color: "#666", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#666")}
            >{l}</a>
          ))}
        </nav>

        {/* CTA */}
        <button
          style={{
            fontSize: 13, fontWeight: 600, padding: "8px 18px",
            background: "#fff", color: "#000", border: "none",
            borderRadius: 8, cursor: "pointer", transition: "opacity 0.2s",
            fontFamily: DISPLAY,
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Accès beta →
        </button>
      </motion.div>
    </motion.header>
  );
}

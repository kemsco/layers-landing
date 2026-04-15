"use client";
const DISPLAY = "var(--font-space), sans-serif";
const BODY = "var(--font-inter), sans-serif";

export default function Footer() {
  return (
    <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#000" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 20, height: 20, background: "#fff", borderRadius: 4 }} />
          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 14, color: "#fff" }}>Layers</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Confidentialité", "CGU", "Contact"].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: "#3a3a3a", textDecoration: "none", fontFamily: BODY,
              transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#3a3a3a")}
            >{l}</a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#2a2a2a", fontFamily: BODY }}>© 2025 Layers. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

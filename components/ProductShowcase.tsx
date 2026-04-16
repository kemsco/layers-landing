"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <motion.div ref={ref} style={{ y, willChange: "transform" }}>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          width: "100%", overflow: "hidden",
          background: "linear-gradient(145deg, #0d0d0d 0%, #080808 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 60px 120px rgba(0,0,0,0.8), 0 0 80px rgba(255,255,255,0.02)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />

        {/* Titlebar */}
        <div style={{ padding: "13px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 7 }}>
          {["#e55", "#eb5", "#5c5"].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.6 }} />)}
          <div style={{ marginLeft: 14, flex: 1, height: 20, background: "rgba(255,255,255,0.04)", maxWidth: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 10, color: "#444", fontFamily: B }}>app.layers.so/dashboard</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            {["Acme Corp", "NovaSEO"].map(c => (
              <div key={c} style={{ fontSize: 10, color: "#444", background: "rgba(255,255,255,0.04)", padding: "3px 9px", fontFamily: B }}>{c}</div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div style={{ width: 168, borderRight: "1px solid rgba(255,255,255,0.05)", padding: "16px 10px", flexShrink: 0 }}>
            <div style={{ fontSize: 9, color: "#2a2a2a", marginBottom: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: B, paddingLeft: 6 }}>Workspace</div>
            {[
              { label: "Dashboard", active: true },
              { label: "Clients", active: false },
              { label: "Rapports", active: false },
              { label: "Concurrents", active: false },
              { label: "Paramètres", active: false },
            ].map(item => (
              <div key={item.label} style={{ padding: "7px 10px", marginBottom: 2, background: item.active ? "rgba(255,255,255,0.07)" : "transparent", fontSize: 12, color: item.active ? "#fff" : "#444", fontFamily: D, fontWeight: item.active ? 500 : 400, display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.active ? "#fff" : "#2a2a2a" }} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div style={{ flex: 1, padding: 18, minWidth: 0 }}>
            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 14 }}>
              {[
                { l: "Score LLM Global", v: "73%", d: "+12%", up: true },
                { l: "Citations ChatGPT", v: "41", d: "+8", up: true },
                { l: "Score Perplexity", v: "68%", d: "-3%", up: false },
              ].map(s => (
                <div key={s.l} style={{ background: "#0f0f0f", padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: 9, color: "#555", marginBottom: 6, fontFamily: B, letterSpacing: "0.04em" }}>{s.l}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, fontFamily: D, letterSpacing: "-0.04em", color: "#fff" }}>{s.v}</div>
                  <div style={{ fontSize: 10, marginTop: 3, color: s.up ? "#6ee7b7" : "#f87171", fontWeight: 600, fontFamily: B }}>{s.d} ce mois</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div style={{ background: "#0f0f0f", padding: "14px 16px", marginBottom: 10, border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 10, color: "#555", fontFamily: B }}>Visibilité LLM — 30 jours</span>
                <span style={{ fontSize: 9, color: "#444", background: "rgba(255,255,255,0.04)", padding: "3px 8px", fontFamily: B }}>vs mois dernier ↑12%</span>
              </div>
              <svg width="100%" height="64" viewBox="0 0 380 64" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map(i => <line key={i} x1="0" y1={i * 21} x2="380" y2={i * 21} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />)}
                <motion.path
                  d="M0,52 C20,48 40,42 70,36 C100,30 120,28 150,20 C180,12 200,14 230,9 C260,4 290,6 320,4 C350,2 365,3 380,2"
                  fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                />
                <path d="M0,52 C20,48 40,42 70,36 C100,30 120,28 150,20 C180,12 200,14 230,9 C260,4 290,6 320,4 C350,2 365,3 380,2 L380,64 L0,64Z" fill="url(#cg)" />
                <motion.circle cx="380" cy="2" r="3" fill="white" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.3 }} />
              </svg>
            </div>

            {/* Bottom row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ background: "#0f0f0f", padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 9, color: "#555", marginBottom: 10, fontFamily: B }}>Par LLM</div>
                {[{ n: "ChatGPT", v: 73 }, { n: "Gemini", v: 58 }, { n: "Perplexity", v: 68 }].map(l => (
                  <div key={l.n} style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 10, color: "#777", fontFamily: B }}>{l.n}</span>
                      <span style={{ fontSize: 10, color: "#fff", fontWeight: 600, fontFamily: D }}>{l.v}%</span>
                    </div>
                    <div style={{ height: 3, background: "#1a1a1a" }}>
                      <motion.div
                        style={{ height: 3, background: "rgba(255,255,255,0.4)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#0f0f0f", padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 9, color: "#555", marginBottom: 10, fontFamily: B }}>vs Concurrents — ChatGPT</div>
                {[
                  { n: "Votre client", v: 73, h: true },
                  { n: "Concurrent A", v: 89, h: false },
                  { n: "Concurrent B", v: 61, h: false },
                ].map(c => (
                  <div key={c.n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 8px", marginBottom: 3, background: c.h ? "rgba(255,255,255,0.06)" : "transparent", border: c.h ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent" }}>
                    <span style={{ fontSize: 10, color: c.h ? "#fff" : "#555", fontFamily: B }}>{c.n}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c.h ? "#fff" : "#333", fontFamily: D }}>{c.v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section style={{ padding: "100px 48px", background: "#000", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444", fontFamily: B }}>Produit</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          Un seul outil.
          <br /><span style={{ color: "#555" }}>Tout ce dont votre agence a besoin.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 16, color: "#666", maxWidth: 540, margin: "0 auto 56px", lineHeight: 1.75, fontFamily: B }}>
          Dashboard multi-clients, tracking 3 LLMs en simultané, rapports white-label prêts à envoyer.
        </motion.p>

        <Dashboard />

        {/* Feature strip below dashboard */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", gap: 0, marginTop: 0, borderTop: "1px solid rgba(255,255,255,0.04)", flexWrap: "wrap" }}>
          {[
            { label: "ChatGPT", sub: "tracké" },
            { label: "Gemini", sub: "tracké" },
            { label: "Perplexity", sub: "tracké" },
            { label: "Looker Studio", sub: "connecté" },
            { label: "GA4", sub: "connecté" },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: "14px 28px", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none", textAlign: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#888", fontFamily: D, letterSpacing: "-0.01em" }}>{item.label}</div>
              <div style={{ fontSize: 10, color: "#333", marginTop: 2, fontFamily: B }}>{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

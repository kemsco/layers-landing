"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

/* 3D Tilt Card */
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function onMove(e: React.MouseEvent) {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000, ...style }}>
      <div style={{ position: "relative", ...style }}>
        {/* Dynamic spotlight */}
        <motion.div style={{
          position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", zIndex: 1, opacity: 0.08,
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.9) 0%, transparent 60%)`,
        }} />
        {children}
      </div>
    </motion.div>
  );
}

const pillars = [
  { icon: "◎", label: "Mesurez", title: "Visibilité LLM réelle", desc: "Simulations ICP complètes avec persona, localisation, objectifs. Pas un prompt générique — une vérité LLM exploitable.", stat: "3 LLMs", statSub: "trackés en simultané", large: true },
  { icon: "◈", label: "Vendez", title: "Offre GEO en 7 jours", desc: "Portail partenaire prêt : pitch, sales et marketing inclus. Zéro expertise requise.", stat: "7j", statSub: "pour lancer", large: false },
  { icon: "◉", label: "Délivrez", title: "Rapports white-label", desc: "Dashboards aux couleurs de votre agence, expliqués par l'IA. Zéro mise en forme.", stat: "0h", statSub: "de formatting", large: false },
];

export default function Solution() {
  return (
    <section style={{ padding: "140px 24px", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: B }}>La Solution</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          L'outil GEO pensé exclusivement
          <br /><span style={{ color: "#2a2a2a" }}>pour les agences SEO.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 16, color: "#4a4a4a", maxWidth: 500, margin: "0 auto 72px", lineHeight: 1.75, fontFamily: B }}>
          Pas un outil généraliste adapté. Construit de zéro autour de vos problématiques.
        </motion.p>

        {/* Bento grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gridTemplateRows: "auto auto", gap: 14 }}>
          {/* Large card */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ gridRow: "1 / 3" }}>
            <TiltCard style={{ height: "100%", background: "#080808", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "36px 34px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <span style={{ fontSize: 28, color: "#333" }}>◎</span>
                <span style={{ fontSize: 10, color: "#444", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "4px 12px", borderRadius: 99, fontFamily: B, letterSpacing: "0.08em", textTransform: "uppercase" }}>Mesurez</span>
              </div>
              <h3 style={{ fontFamily: D, fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.2 }}>Visibilité LLM réelle</h3>
              <p style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.8, marginBottom: 32, fontFamily: B }}>
                Simulations ICP complètes : persona, localisation, objectifs, secteur. L'IA challengée sur plusieurs échanges révèle exactement ce qu'elle pense de la marque de votre client — pas ce qu'un prompt basique suggère.
              </p>

              {/* Mini chart inside card */}
              <div style={{ background: "#0d0d0d", borderRadius: 12, padding: "16px", marginBottom: 28, border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 10, color: "#333", marginBottom: 10, fontFamily: B }}>Score LLM — Acme Corp vs marché</div>
                {[{ n: "ChatGPT", c: "#fff", v: 73 }, { n: "Gemini", c: "#aaa", v: 58 }, { n: "Perplexity", c: "#666", v: 68 }].map(l => (
                  <div key={l.n} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                    <span style={{ fontSize: 10, color: "#555", width: 72, flexShrink: 0, fontFamily: B }}>{l.n}</span>
                    <div style={{ flex: 1, height: 4, background: "#1a1a1a", borderRadius: 2 }}>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        style={{ height: 4, borderRadius: 2, background: l.c }} />
                    </div>
                    <span style={{ fontSize: 10, color: l.c, fontFamily: D, fontWeight: 700, width: 28, textAlign: "right" }}>{l.v}%</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, marginTop: "auto" }}>
                <div style={{ fontFamily: D, fontSize: 36, fontWeight: 700, letterSpacing: "-0.05em" }}>3 LLMs</div>
                <div style={{ fontSize: 12, color: "#444", marginTop: 3, fontFamily: B }}>trackés en simultané</div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Small cards */}
          {pillars.slice(1).map((p, i) => (
            <motion.div key={p.label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}>
              <TiltCard style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 20, color: "#333" }}>{p.icon}</span>
                  <span style={{ fontSize: 10, color: "#444", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: 99, fontFamily: B, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.label}</span>
                </div>
                <h3 style={{ fontFamily: D, fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 10, lineHeight: 1.25 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75, marginBottom: 22, fontFamily: B }}>{p.desc}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
                  <div style={{ fontFamily: D, fontSize: 30, fontWeight: 700, letterSpacing: "-0.05em" }}>{p.stat}</div>
                  <div style={{ fontSize: 11, color: "#444", marginTop: 2, fontFamily: B }}>{p.statSub}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Compat strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 10, color: "#2a2a2a", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: B }}>Compatible avec votre stack</span>
          <div style={{ display: "flex", gap: 36, justifyContent: "center", flexWrap: "wrap" }}>
            {["ChatGPT", "Gemini", "Perplexity", "Looker Studio", "GA4"].map(t => (
              <span key={t} style={{ fontSize: 13, color: "#2e2e2e", fontFamily: B, fontWeight: 500, letterSpacing: "-0.01em" }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

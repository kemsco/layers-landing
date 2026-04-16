"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
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
        <motion.div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.06,
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.9) 0%, transparent 60%)`,
        }} />
        {children}
      </div>
    </motion.div>
  );
}

const blocks = [
  {
    n: "01", icon: "◎", tag: "Livrables",
    title: "Rapports clients. Sans effort de production.",
    desc: "Chaque analyse sort brandée à vos couleurs, rédigée en langage client final, prête à envoyer. Ce qui prenait 5h se fait en 15 minutes.",
    stat: "–5h", statSub: "de production par rapport", large: true,
  },
  {
    n: "02", icon: "◈", tag: "Revenue",
    title: "Une nouvelle ligne de revenu. Dès le premier mois.",
    desc: "Layers inclut les sales assets pour pitcher l'offre GEO et les livrables pour la délivrer. Vous facturez avant d'avoir recruté.",
    stat: "J+7", statSub: "premier pitch possible", large: false,
  },
  {
    n: "03", icon: "◉", tag: "Scale",
    title: "Autant de clients que vous voulez.",
    desc: "Seats illimités, projets illimités, crédits alloués librement par client. 40 comptes en parallèle — sans coût proportionnel.",
    stat: "∞", statSub: "clients en simultané", large: false,
  },
  {
    n: "04", icon: "◇", tag: "Crédibilité",
    title: "Vous parlez de GEO avec data.",
    desc: "Chaque recommandation sourcée sur des études réelles et validée par des tests. Des insights défendables — pas du contenu généré à l'aveugle.",
    stat: "3 LLMs", statSub: "trackés en simultané", large: false,
  },
];

export default function Benefits() {
  const [main, ...rest] = blocks;

  return (
    <section style={{ padding: "140px 48px", background: "#000", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444", fontFamily: B }}>Bénéfices</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: D, fontWeight: 700, textAlign: "center", fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 16 }}>
          Ce que Layers change
          <br /><span style={{ color: "#555" }}>pour votre agence.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ textAlign: "center", fontSize: 16, color: "#666", maxWidth: 520, margin: "0 auto 72px", lineHeight: 1.75, fontFamily: B }}>
          Pas un outil de plus. Une infrastructure complète pour monétiser le GEO.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gridTemplateRows: "auto auto", gap: 12 }}>
          {/* Large card */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ gridRow: "1 / 3" }}>
            <TiltCard style={{ height: "100%", background: "#080808", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 0, padding: "36px 34px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <span style={{ fontSize: 28, color: "#444" }}>{main.icon}</span>
                <span style={{ fontSize: 10, color: "#555", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "4px 10px", fontFamily: B, letterSpacing: "0.08em", textTransform: "uppercase" }}>{main.tag}</span>
              </div>
              <h3 style={{ fontFamily: D, fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.2 }}>{main.title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 32, fontFamily: B }}>{main.desc}</p>

              <div style={{ background: "#0d0d0d", padding: "16px 18px", marginBottom: 24, border: "1px solid rgba(255,255,255,0.05)", flex: 1 }}>
                <div style={{ fontSize: 9, color: "#333", marginBottom: 14, fontFamily: B, textTransform: "uppercase", letterSpacing: "0.1em" }}>Aperçu rapport — Acme Corp</div>
                {[
                  { label: "Visibilité ChatGPT", val: 73, color: "#fff" },
                  { label: "Visibilité Gemini", val: 58, color: "#aaa" },
                  { label: "Visibilité Perplexity", val: 68, color: "#666" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
                    <span style={{ fontSize: 10, color: "#555", width: 110, flexShrink: 0, fontFamily: B }}>{item.label}</span>
                    <div style={{ flex: 1, height: 3, background: "#1a1a1a" }}>
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${item.val}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        style={{ height: 3, background: item.color }}
                      />
                    </div>
                    <span style={{ fontSize: 10, color: item.color, fontFamily: D, fontWeight: 700, width: 28, textAlign: "right" }}>{item.val}%</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: "10px 12px", background: "rgba(110,231,183,0.04)", border: "1px solid rgba(110,231,183,0.1)" }}>
                  <div style={{ fontSize: 9, color: "#6ee7b7", fontFamily: B, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>Recommandation prioritaire</div>
                  <p style={{ fontSize: 11, color: "#555", fontFamily: B, lineHeight: 1.6 }}>Renforcer les mentions marque sur les contenus long-form pour améliorer la citation Gemini de +12 pts.</p>
                </div>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22 }}>
                <div style={{ fontFamily: D, fontSize: 36, fontWeight: 700, letterSpacing: "-0.05em" }}>{main.stat}</div>
                <div style={{ fontSize: 12, color: "#555", marginTop: 3, fontFamily: B }}>{main.statSub}</div>
              </div>
            </TiltCard>
          </motion.div>

          {/* 3 small cards */}
          {rest.map((b, i) => (
            <motion.div key={b.n} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}>
              <TiltCard style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 0, padding: "26px 26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 18, color: "#444" }}>{b.icon}</span>
                  <span style={{ fontSize: 10, color: "#555", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "3px 10px", fontFamily: B, textTransform: "uppercase", letterSpacing: "0.08em" }}>{b.tag}</span>
                </div>
                <h3 style={{ fontFamily: D, fontSize: 16, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 10, lineHeight: 1.3 }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 20, fontFamily: B }}>{b.desc}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
                  <div style={{ fontFamily: D, fontSize: 28, fontWeight: 700, letterSpacing: "-0.05em" }}>{b.stat}</div>
                  <div style={{ fontSize: 11, color: "#555", marginTop: 2, fontFamily: B }}>{b.statSub}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

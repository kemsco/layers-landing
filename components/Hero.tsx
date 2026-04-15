"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const D = "var(--font-space), sans-serif";
const B = "var(--font-inter), sans-serif";

/* ── Magnetic button ── */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  function onMove(e: React.MouseEvent) {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.28);
    y.set((e.clientY - r.top - r.height / 2) * 0.28);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.button ref={ref} style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      >
      {children}
    </motion.button>
  );
}

/* ── Word blur reveal ── */
function BlurReveal({ text, delay = 0, style }: { text: string; delay?: number; style?: React.CSSProperties }) {
  return (
    <span style={style}>
      {text.split(" ").map((word, i) => (
        <motion.span key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.55, delay: delay + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >{word}</motion.span>
      ))}
    </span>
  );
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 35);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
}

/* ── Dashboard mockup ── */
function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  return (
    <motion.div ref={ref} style={{ y, scale, willChange: "transform" }}>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          width: "100%", borderRadius: 20, overflow: "hidden",
          background: "linear-gradient(145deg, #0d0d0d 0%, #080808 100%)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 60px 120px rgba(0,0,0,0.8), 0 0 80px rgba(255,255,255,0.02)",
          position: "relative",
        }}
      >
        {/* Inner glow top */}
        <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

        {/* Titlebar */}
        <div style={{ padding: "13px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 7 }}>
          {["#e55", "#eb5", "#5c5"].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.6 }} />)}
          <div style={{ marginLeft: 14, flex: 1, height: 20, background: "rgba(255,255,255,0.04)", borderRadius: 6, maxWidth: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 10, color: "#333", fontFamily: B }}>layers.so/dashboard</span>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            {["Acme Corp", "NovaSEO"].map(c => (
              <div key={c} style={{ fontSize: 10, color: "#444", background: "rgba(255,255,255,0.04)", padding: "3px 9px", borderRadius: 5, fontFamily: B }}>{c}</div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div style={{ width: 160, borderRight: "1px solid rgba(255,255,255,0.05)", padding: "16px 10px", flexShrink: 0 }}>
            <div style={{ fontSize: 9, color: "#2a2a2a", marginBottom: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: B, paddingLeft: 6 }}>Workspace</div>
            {[
              { label: "Dashboard", active: true },
              { label: "Clients", active: false },
              { label: "Rapports", active: false },
              { label: "Concurrents", active: false },
              { label: "Paramètres", active: false },
            ].map(item => (
              <div key={item.label} style={{ padding: "7px 10px", borderRadius: 7, marginBottom: 2, background: item.active ? "rgba(255,255,255,0.07)" : "transparent", fontSize: 12, color: item.active ? "#fff" : "#444", fontFamily: D, fontWeight: item.active ? 500 : 400, display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.active ? "#fff" : "#2a2a2a" }} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div style={{ flex: 1, padding: 18, minWidth: 0 }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 14 }}>
              {[
                { l: "Score LLM Global", v: "73%", d: "+12%", up: true },
                { l: "Citations ChatGPT", v: "41", d: "+8", up: true },
                { l: "Score Perplexity", v: "68%", d: "-3%", up: false },
              ].map(s => (
                <div key={s.l} style={{ background: "#0f0f0f", borderRadius: 10, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: 9, color: "#444", marginBottom: 6, fontFamily: B, letterSpacing: "0.04em" }}>{s.l}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, fontFamily: D, letterSpacing: "-0.04em", color: "#fff" }}>{s.v}</div>
                  <div style={{ fontSize: 10, marginTop: 3, color: s.up ? "#6ee7b7" : "#f87171", fontWeight: 600, fontFamily: B }}>{s.d} ce mois</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div style={{ background: "#0f0f0f", borderRadius: 10, padding: "14px 16px", marginBottom: 10, border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 10, color: "#444", fontFamily: B }}>Visibilité LLM — 30 jours</span>
                <span style={{ fontSize: 9, color: "#333", background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 5, fontFamily: B }}>vs mois dernier ↑12%</span>
              </div>
              <svg width="100%" height="64" viewBox="0 0 380 64" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0, 1, 2, 3].map(i => <line key={i} x1="0" y1={i * 21} x2="380" y2={i * 21} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />)}
                <motion.path
                  d="M0,52 C20,48 40,42 70,36 C100,30 120,28 150,20 C180,12 200,14 230,9 C260,4 290,6 320,4 C350,2 365,3 380,2"
                  fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                />
                <path d="M0,52 C20,48 40,42 70,36 C100,30 120,28 150,20 C180,12 200,14 230,9 C260,4 290,6 320,4 C350,2 365,3 380,2 L380,64 L0,64Z" fill="url(#cg)" />
                {/* Dot at end */}
                <motion.circle cx="380" cy="2" r="3" fill="white" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.2 }} />
              </svg>
            </div>

            {/* Bottom row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ background: "#0f0f0f", borderRadius: 10, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 9, color: "#444", marginBottom: 10, fontFamily: B }}>Par LLM</div>
                {[{ n: "ChatGPT", v: 73 }, { n: "Gemini", v: 58 }, { n: "Perplexity", v: 68 }].map(l => (
                  <div key={l.n} style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 10, color: "#777", fontFamily: B }}>{l.n}</span>
                      <span style={{ fontSize: 10, color: "#fff", fontWeight: 600, fontFamily: D }}>{l.v}%</span>
                    </div>
                    <div style={{ height: 3, background: "#1a1a1a", borderRadius: 2 }}>
                      <motion.div
                        style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.4)" }}
                        initial={{ width: 0 }}
                        animate={{ width: `${l.v}%` }}
                        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#0f0f0f", borderRadius: 10, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 9, color: "#444", marginBottom: 10, fontFamily: B }}>vs Concurrents — ChatGPT</div>
                {[
                  { n: "Votre client", v: 73, h: true },
                  { n: "Concurrent A", v: 89, h: false },
                  { n: "Concurrent B", v: 61, h: false },
                ].map(c => (
                  <div key={c.n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 8px", borderRadius: 6, marginBottom: 3, background: c.h ? "rgba(255,255,255,0.06)" : "transparent", border: c.h ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent" }}>
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

/* ── HERO ── */
export default function Hero() {
  const llms = ["ChatGPT", "Gemini", "Perplexity", "Claude"];
  const [llmIdx, setLlmIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setLlmIdx(i => (i + 1) % llms.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "130px 24px 80px", overflow: "hidden" }}>

      {/* Background layers */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: 1000, height: 600, background: "radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.065) 0%, transparent 60%)", pointerEvents: "none" }} />
      {/* Orbs */}
      <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "15%", left: "8%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: "20%", right: "6%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 920, width: "100%", textAlign: "center" }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, fontSize: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "#666", fontFamily: B, backdropFilter: "blur(8px)" }}>
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ee7b7", display: "inline-block" }} />
            Fondateurs ex-Google · Sales AI & ML Engineering
          </div>
        </motion.div>

        {/* H1 — word blur reveal */}
        <h1 style={{ fontFamily: D, fontWeight: 700, letterSpacing: "-0.05em", fontSize: "clamp(52px, 8vw, 102px)", lineHeight: 1.03, marginBottom: 18 }}>
          <BlurReveal text="ChatGPT cite vos concurrents." delay={0.1} style={{ display: "block", color: "#fff" }} />
          <BlurReveal text="Pas vos clients." delay={0.5} style={{ display: "block", color: "#282828" }} />
        </h1>

        {/* Cycling LLM indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28, height: 28 }}>
          <span style={{ fontSize: 12, color: "#333", fontFamily: B }}>Analysez vos clients sur</span>
          <div style={{ position: "relative", overflow: "hidden", height: 22, width: 120 }}>
            {llms.map((l, i) => (
              <motion.span key={l}
                animate={{ y: i === llmIdx ? 0 : -30, opacity: i === llmIdx ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ position: "absolute", left: 0, right: 0, textAlign: "center", fontSize: 13, fontWeight: 600, color: "#888", fontFamily: D, letterSpacing: "-0.02em" }}
              >{l}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
          style={{ fontFamily: B, fontSize: 17, lineHeight: 1.75, color: "#555", maxWidth: 580, margin: "0 auto 44px" }}>
          La première plateforme GEO{" "}
          <span style={{ color: "#aaa" }}>exclusivement pour les agences SEO</span>.
          Mesurez, vendez, délivrez — sans recruter un seul expert GEO.
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginBottom: 72 }}>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 16px 48px rgba(255,255,255,0.14)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              position: "relative", overflow: "hidden",
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 36px", borderRadius: 14, fontSize: 15, fontWeight: 700,
              background: "#fff", color: "#000", border: "none", cursor: "pointer",
              fontFamily: D, letterSpacing: "-0.02em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 8px 32px rgba(255,255,255,0.08)",
            }}
          >
            {/* Shine effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", transform: "skewX(-12deg)", pointerEvents: "none" }}
            />
            Demander un accès beta
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
          <p style={{ fontSize: 12, color: "#383838", fontFamily: B }}>
            Réservé aux agences SEO · Accompagnement inclus · Sans engagement
          </p>
        </motion.div>

        {/* Social proof */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, marginBottom: 64, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {[18, 26, 34, 42].map((g, i) => (
                <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", marginLeft: i === 0 ? 0 : -9, background: `hsl(0,0%,${g}%)`, border: "2px solid #000" }} />
              ))}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: D, letterSpacing: "-0.02em" }}>
                <Counter target={14} /> agences SEO
              </div>
              <div style={{ fontSize: 11, color: "#444", fontFamily: B }}>françaises en waitlist</div>
            </div>
          </div>
          <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.06)" }} />
          <div style={{ padding: "12px 18px", borderRadius: 10, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", maxWidth: 320, textAlign: "left" }}>
            <p style={{ color: "#666", fontStyle: "italic", lineHeight: 1.55, fontSize: 12, fontFamily: B }}>"Premier contrat GEO signé 3 semaines après l'onboarding."</p>
            <p style={{ color: "#333", fontSize: 11, marginTop: 5, fontFamily: B }}>— Directeur SEO, Agence beta</p>
          </div>
        </motion.div>

        {/* Dashboard */}
        <Dashboard />
      </div>
    </section>
  );
}

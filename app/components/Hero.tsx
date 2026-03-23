"use client";
import Image from "next/image";
import { Mail, Download, Github, Linkedin, Instagram } from "lucide-react";

const stats = [
  { value: "2+", label: "Años Estudiando" },
  { value: "10+", label: "Proyectos" },
  { value: "3+", label: "Tecnologías" },
];

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/jManuel0", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
];

export default function Hero() {
  return (
    <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">

        {/* Left */}
        <div>
          <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--accent)" }}>▶</span> Estudiante de Ingeniería de Software
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: "#fff" }}>
            Juan Manuel<br />Ordoñez Armero
          </h1>
          <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 16, marginBottom: 32 }}>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>
              Estudiante apasionado por el desarrollo de software, enfocado en crear soluciones innovadoras y eficientes. Comprometido con el aprendizaje continuo y la mejora constante.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            <a href="#contacto" style={{
              display: "flex", alignItems: "center", gap: 8, padding: "12px 24px",
              background: "var(--accent)", color: "#fff", borderRadius: 8, fontWeight: 600,
              fontSize: 14, textDecoration: "none", transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
              <Mail size={16} /> Contactar
            </a>
            <a href="#" style={{
              display: "flex", alignItems: "center", gap: 8, padding: "12px 24px",
              background: "var(--bg-card)", color: "#fff", borderRadius: 8, fontWeight: 600,
              fontSize: 14, textDecoration: "none", border: "1px solid var(--border)", transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
              <Download size={16} /> Ver CV
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                width: 40, height: 40, borderRadius: 8, background: "var(--bg-card)",
                border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
          <div style={{
            width: 280, height: 320, borderRadius: 16,
            border: "2px solid var(--accent)", overflow: "hidden",
            background: "var(--bg-card)", position: "relative",
          }}>
            <Image
              src="/portafolio1.jpg"
              alt="Juan Manuel Ordoñez Armero"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: 11, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <span style={{ color: "var(--text-muted)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 60, background: "var(--border)", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: 0, left: 0, width: "100%",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "scrollLine 1.8s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @keyframes scrollLine {
          0%   { height: 0%; top: 0%; opacity: 1; }
          50%  { height: 100%; top: 0%; opacity: 1; }
          100% { height: 0%; top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}

"use client";
import Image from "next/image";
import { BookOpen, GraduationCap, Code2, Monitor, Database } from "lucide-react";
import { Download } from "lucide-react";

const stats = [
  { icon: <BookOpen size={18} />, value: "2+", label: "Años de Estudio" },
  { icon: <GraduationCap size={18} />, value: "70%", label: "Promedio Académico" },
];

const areas = [
  { icon: <Code2 size={18} />, title: "Desarrollo Web", sub: "React, TypeScript, Node.js" },
  { icon: <Monitor size={18} />, title: "UI/UX", sub: "Tailwind, Responsive Design" },
  { icon: <Database size={18} />, title: "Bases de Datos", sub: "PostgreSQL" },
];

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: "96px 24px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">

        {/* Photo */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 320, height: 420, borderRadius: 16,
            border: "2px solid var(--accent)", overflow: "hidden",
            background: "var(--bg-card)", position: "relative", flexShrink: 0,
          }}>
            <Image
              src="/portafolio2.jpg"
              alt="Juan Manuel Ordoñez Armero"
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
            <span>•</span> Sobre Mí
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: 20 }}>
            Estudiante
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Soy estudiante de Ingeniería de Software con una gran pasión por la tecnología y el desarrollo web. Me especializo en crear aplicaciones modernas, eficientes y centradas en el usuario utilizando las últimas tecnologías del mercado.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.8, marginBottom: 32 }}>
            Actualmente me enfoco en el stack completo de desarrollo web, con especial interés en React, TypeScript y Node.js. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer académica y profesionalmente.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ color: "var(--accent)" }}>{s.icon}</div>
                <div>
                  <p style={{ fontSize: 22, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: 11, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Areas */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
            {areas.map((a) => (
              <div key={a.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ color: "var(--accent)" }}>{a.icon}</div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{a.title}</p>
                  <p style={{ fontSize: 11, color: "var(--text-secondary)" }}>{a.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px",
            background: "var(--accent)", color: "#fff", borderRadius: 8, fontWeight: 600,
            fontSize: 14, textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
            <Download size={16} /> Descargar CV
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}

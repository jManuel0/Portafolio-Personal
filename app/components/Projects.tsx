import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    year: "2025",
    type: "APLICACIÓN WEB",
    title: "Sistema Inteligente de Optimización del Tráfico",
    desc: "Sistema orientado a mejorar la movilidad urbana en Pasto mediante sensores y control automatizado de semáforos.",
    tech: ["IoT", "ESP32", "Sensores", "Monitoreo"],
    github: "https://github.com/jManuel0",
    demo: "#",
  },
  {
    year: "2026",
    type: "WEB DEVELOPMENT",
    title: "Portafolio Personal v2",
    desc: "Diseño y desarrollo de un sitio web profesional con Next.js y Tailwind CSS, enfoque moderno y responsive.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/jManuel0/Portafolio-Personal",
    demo: "#",
  },
  {
    year: "2025",
    type: "PROYECTO ACADÉMICO",
    title: "Dashboard Web Interactivo",
    desc: "Interfaz interactiva para la visualización de datos con énfasis en claridad de información y experiencia de usuario.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/jManuel0",
    demo: "#",
  },
  {
    year: "2026",
    type: "WEB DEVELOPMENT",
    title: "Portfolio Personal v1",
    desc: "Primera versión del portafolio personal desarrollada con HTML, CSS y JavaScript puro.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/jManuel0",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: "96px 24px", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span>•</span> Portafolio
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          Proyectos Destacados
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 56, maxWidth: 520 }}>
          Colección de proyectos académicos y personales que demuestran mis habilidades en desarrollo de software.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: 24, display: "flex", flexDirection: "column", gap: 16,
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}>

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                  <Code2 size={20} />
                </div>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.year}</span>
              </div>

              <div>
                <p style={{ fontSize: 10, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{p.type}</p>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, padding: "3px 10px", borderRadius: 20,
                    background: "rgba(59,130,246,0.1)", color: "var(--accent)",
                    border: "1px solid rgba(59,130,246,0.2)", fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 16, marginTop: "auto" }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-secondary)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  <Github size={14} /> GitHub
                </a>
                <a href={p.demo} style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-secondary)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

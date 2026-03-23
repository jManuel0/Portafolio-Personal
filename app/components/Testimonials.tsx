"use client";
import { useState } from "react";
import { Quote, Star, Send } from "lucide-react";

const testimonials = [
  {
    text: "Estudiante destacado con gran capacidad de aprendizaje y resolución de problemas. Su dedicación y entusiasmo por la programación son notables. Siempre entrega trabajos de alta calidad.",
    name: "Ing. Carlos Esteban Rosero",
    role: "Docente de Desarrollo Web",
    stars: 5,
  },
  {
    text: "Excelente colaborador en proyectos grupales. Su conocimiento en React y TypeScript ha sido fundamental para el éxito de nuestros trabajos académicos. Muy recomendado para trabajar en equipo.",
    name: "Andrés Felipe Muñoz",
    role: "Compañero de Equipo",
    stars: 5,
  },
  {
    text: "Juan Manuel desarrolló interfaces limpias y funcionales con gran profesionalismo y atención al detalle. A pesar de ser estudiante, su nivel técnico superó mis expectativas.",
    name: "Valentina Torres",
    role: "Compañera de Proyecto",
    stars: 5,
    active: true,
  },
];

export default function Testimonials() {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  return (
    <section id="testimonios" style={{ padding: "96px 24px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span>•</span> Testimonios
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          Qué Dicen de Mí
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 56 }}>
          Opiniones de profesores y compañeros sobre mi trabajo y dedicación.
        </p>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "var(--bg-card)", border: `1px solid ${t.active ? "var(--accent)" : "var(--border)"}`,
              borderRadius: 12, padding: 24, display: "flex", flexDirection: "column", gap: 16, position: "relative",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Quote size={28} style={{ color: "var(--accent)", opacity: 0.6 }} />
                <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 20, background: "rgba(59,130,246,0.1)", color: "var(--accent)", border: "1px solid rgba(59,130,246,0.2)", fontWeight: 600 }}>
                  EJEMPLO
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="var(--accent)" style={{ color: "var(--accent)" }} />
                ))}
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.name}</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 32, maxWidth: 600, margin: "0 auto" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Deja tu testimonio</h3>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 24 }}>
            ¿Trabajaste conmigo o tomaste alguna clase juntos? Me encantaría escuchar tu opinión.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>Nombre</label>
              <input placeholder="Tu nombre" style={{ width: "100%", padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>Cargo / Rol</label>
              <input placeholder="Ej. Docente, Compañero..." style={{ width: "100%", padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>Calificación</label>
            <div style={{ display: "flex", gap: 4 }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => setRating(n)} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}>
                  <Star size={22} fill={(hover || rating) >= n ? "var(--accent)" : "transparent"} style={{ color: "var(--accent)" }} />
                </button>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>Mensaje</label>
            <textarea placeholder="Escribe tu testimonio aquí..." rows={4} style={{ width: "100%", padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
          </div>
          <button style={{
            width: "100%", padding: "12px", background: "var(--accent)", color: "#fff",
            border: "none", borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
            <Send size={16} /> Enviar testimonio
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

import { Pencil, Code2, Monitor, Users, Headphones, Flag } from "lucide-react";

const services = [
  {
    icon: <Pencil size={28} />,
    title: "Diseño Creativo",
    desc: "Aprovechando elementos artísticos y principios estéticos para crear experiencias de usuario visualmente atractivas y cautivadoras.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Código Limpio",
    desc: "Escribiendo código bien estructurado, legible y mantenible, siguiendo las mejores prácticas de programación.",
  },
  {
    icon: <Monitor size={28} />,
    title: "Interfaz de Usuario",
    desc: "Creando diseños intuitivos y amigables que priorizan la usabilidad, accesibilidad y una experiencia de usuario fluida.",
  },
  {
    icon: <Users size={28} />,
    title: "Experiencia de Usuario",
    desc: "Comprendiendo los comportamientos, necesidades y preferencias del usuario para crear interfaces intuitivas, eficientes y agradables.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Soporte Rápido",
    desc: "Atendiendo y resolviendo problemas o consultas reportadas por los usuarios relacionadas con el sitio web o aplicación.",
  },
  {
    icon: <Flag size={28} />,
    title: "Branding",
    desc: "Creando experiencias de marca consistentes y cohesivas mediante el uso de logotipos, esquemas de color, tipografía y otros activos de marca.",
  },
];

export default function Services() {
  return (
    <section id="servicios" style={{ padding: "96px 24px", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span>•</span> Mis Servicios
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          Que puedo hacer
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 56, maxWidth: 520 }}>
          Tecnologías y herramientas que he aprendido y utilizado en mis proyectos académicos y personales.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="services-grid">
          {services.map((s) => (
            <div key={s.title} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: 28, transition: "border-color 0.2s, transform 0.2s", cursor: "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ color: "var(--accent)", marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

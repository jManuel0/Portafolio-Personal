import { GraduationCap } from "lucide-react";

const timeline = [
  {
    period: "2026 - Presente",
    title: "Estudiante de Ingeniería de Software",
    institution: "Universidad Cooperativa de Colombia Campus Pasto",
    desc: "Actualmente cursando el quinto semestre con enfoque en desarrollo web full-stack y arquitectura de software.",
    bullets: [
      "Promedio académico de 70% en materias de programación",
      "Participación en proyectos colaborativos de desarrollo",
      "Aprendizaje de tecnologías modernas como React y Node.js",
    ],
    active: true,
  },
  {
    period: "2025",
    title: "Estudiante de Ingeniería de Software",
    institution: "Universidad Cooperativa de Colombia Campus Pasto",
    desc: "Cursando el tercer y cuarto semestre con enfoque en desarrollo web full-stack y arquitectura de software.",
    bullets: [
      "Promedio académico de 70% en materias de programación",
      "Participación en proyectos colaborativos de desarrollo",
      "Aprendizaje de tecnologías modernas como React y Node.js",
    ],
    active: false,
  },
  {
    period: "2024",
    title: "Estudiante de Ingeniería de Software",
    institution: "Universidad Cooperativa de Colombia Campus Pasto",
    desc: "Cursando el primer y segundo semestre con enfoque en fundamentos de programación y desarrollo web.",
    bullets: [
      "Promedio académico de 70% en materias de programación",
      "Participación en proyectos colaborativos de desarrollo",
      "Aprendizaje de tecnologías modernas como React y Node.js",
    ],
    active: false,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" style={{ padding: "96px 24px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span>•</span> Trayectoria
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          Educación
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 56 }}>
          Mi camino de aprendizaje y crecimiento en el desarrollo de software.
        </p>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 2, background: "var(--border)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ position: "relative", display: "flex", gap: 32, alignItems: "flex-start" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: -32, top: 6,
                  width: 16, height: 16, borderRadius: "50%",
                  background: item.active ? "var(--accent)" : "var(--bg-card)",
                  border: "2px solid var(--accent)", flexShrink: 0,
                }} />

                {/* Period badge */}
                <div style={{ flexShrink: 0, minWidth: 140 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "4px 12px", borderRadius: 20,
                    background: item.active ? "rgba(59,130,246,0.15)" : "var(--bg-card)",
                    border: `1px solid ${item.active ? "var(--accent)" : "var(--border)"}`,
                    color: item.active ? "var(--accent)" : "var(--text-secondary)",
                    fontSize: 12, fontWeight: 600,
                  }}>
                    <GraduationCap size={12} /> {item.period}
                  </span>
                </div>

                {/* Card */}
                <div style={{
                  flex: 1, background: item.active ? "var(--bg-card-hover)" : "var(--bg-card)",
                  border: `1px solid ${item.active ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: 12, padding: 24,
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>{item.institution}</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {item.bullets.map((b) => (
                      <li key={b} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>•</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

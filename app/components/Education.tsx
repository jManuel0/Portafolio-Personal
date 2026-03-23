import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="educacion" style={{ padding: "96px 24px", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span>•</span> Educación
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          Formación Académica
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 48 }}>
          Mi trayectoria educativa que valida mis conocimientos técnicos.
        </p>

        {/* Education subsection */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <GraduationCap size={20} style={{ color: "var(--accent)" }} /> Educación
          </h3>
          <div style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: 12, padding: 24,
          }}>
            <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              2024 - PRESENTE
            </p>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
              Ingeniería de Software
            </h4>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12 }}>
              Universidad Cooperativa De Colombia Campus Pasto
            </p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
              Formación integral en desarrollo de software, arquitectura de sistemas y metodologías ágiles.
            </p>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: 20,
              background: "rgba(59,130,246,0.1)", color: "var(--accent)",
              border: "1px solid rgba(59,130,246,0.2)", fontSize: 12, fontWeight: 600,
            }}>
              Promedio 70%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

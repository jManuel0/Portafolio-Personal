import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const quickLinks = ["Inicio", "Sobre Mí", "Proyectos", "Experiencia", "Contacto"];
const quickHrefs = ["#inicio", "#sobre-mi", "#proyectos", "#experiencia", "#contacto"];
const services = ["Desarrollo Web", "React & TypeScript", "Diseño Responsive", "APIs REST", "Freelance"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, color: "#fff", fontFamily: "monospace" }}>
                {"</>"}
              </div>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20, maxWidth: 220 }}>
              Estudiante de Ingeniería de Software apasionado por crear soluciones innovadoras.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: <Github size={16} />, href: "https://github.com/jManuel0", label: "GitHub" },
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", label: "LinkedIn" },
                { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                  width: 36, height: 36, borderRadius: 8, background: "var(--bg-card)",
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

          {/* Quick links */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              Enlaces Rápidos
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((l, i) => (
                <li key={l}>
                  <a href={quickHrefs[i]} style={{ fontSize: 13, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              Servicios
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s) => (
                <li key={s}>
                  <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
              Contacto
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: <Mail size={14} />, text: "juanmaarmero30@gmail.com" },
                { icon: <Phone size={14} />, text: "+57 317 314 5521" },
                { icon: <MapPin size={14} />, text: "Pasto Nariño, Colombia" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            © 2026 Juan Manuel Ordoñez Armero. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacidad", "Términos", "Cookies"].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, ArrowRight } from "lucide-react";

const info = [
  { icon: <Mail size={22} />, label: "Email", value: "juanmaarmero30@gmail.com", href: "mailto:juanmaarmero30@gmail.com" },
  { icon: <Phone size={22} />, label: "Teléfono", value: "+57 317 314 5521", href: "tel:+573173145521" },
  { icon: <MapPin size={22} />, label: "Ubicación", value: "Pasto Nariño, Colombia", href: "#" },
];

const socials = [
  { icon: <Github size={18} />, label: "GitHub", handle: "@jManuel0", href: "https://github.com/jManuel0" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", handle: "@Juan Manuel Ordoñez Armero", href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337" },
  { icon: <Instagram size={18} />, label: "Instagram", handle: "@ordonezarmero_juan", href: "#" },
];

export default function Contact() {
  return (
    <section id="contacto" style={{ padding: "96px 24px", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span>•</span> Contacto
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          Trabajemos Juntos
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 48, maxWidth: 520 }}>
          ¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo puedo ayudarte.
        </p>

        {/* Info cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }} className="contact-info-grid">
          {info.map((item) => (
            <a key={item.label} href={item.href} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12,
              padding: 24, textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center",
              gap: 12, transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                {item.icon}
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{item.label}</p>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", textAlign: "center" }}>{item.value}</p>
            </a>
          ))}
        </div>

        {/* Form + Socials */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24 }} className="contact-bottom-grid">
          {/* Form */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 24 }}>Enviar Mensaje</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <input placeholder="Nombre" style={{ padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none" }} />
              <input placeholder="Apellido" style={{ padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none" }} />
            </div>
            <input placeholder="Email" style={{ width: "100%", padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none", marginBottom: 16, boxSizing: "border-box" }} />
            <input placeholder="Asunto" style={{ width: "100%", padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none", marginBottom: 16, boxSizing: "border-box" }} />
            <textarea placeholder="Tu Mensaje" rows={4} style={{ width: "100%", padding: "10px 14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 8, color: "#fff", fontSize: 14, outline: "none", resize: "vertical", marginBottom: 20, boxSizing: "border-box" }} />
            <button style={{
              padding: "12px 28px", background: "var(--accent)", color: "#fff", border: "none",
              borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
              <Send size={16} /> Enviar Mensaje
            </button>
          </div>

          {/* Socials */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Conéctate Conmigo</h3>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
                background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: 10,
                textDecoration: "none", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
                <div style={{ color: "var(--accent)" }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{s.label}</p>
                  <p style={{ fontSize: 11, color: "var(--text-secondary)" }}>{s.handle}</p>
                </div>
                <ArrowRight size={14} style={{ color: "var(--text-muted)" }} />
              </a>
            ))}
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              Siempre abierto a nuevas oportunidades y colaboraciones.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
          .contact-bottom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

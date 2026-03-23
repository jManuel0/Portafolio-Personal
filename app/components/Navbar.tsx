"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Inicio", "Sobre mí", "Proyectos", "Experiencia", "Contacto"];
const hrefs = ["#inicio", "#sobre-mi", "#proyectos", "#experiencia", "#contacto"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? "rgba(13,17,23,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 8,
            background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, color: "#fff", fontFamily: "monospace",
          }}>
            {"</>"}
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden-mobile">
          {links.map((l, i) => (
            <a key={l} href={hrefs[i]} style={{ color: "var(--text-secondary)", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
              {l}
            </a>
          ))}
          <a href="#contacto" style={{
            padding: "8px 20px", borderRadius: 6, background: "var(--accent)",
            color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
            Contrátame
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }} className="show-mobile">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map((l, i) => (
            <a key={l} href={hrefs[i]} onClick={() => setOpen(false)}
              style={{ color: "var(--text-secondary)", fontSize: 15, textDecoration: "none" }}>
              {l}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} style={{
            padding: "10px 20px", borderRadius: 6, background: "var(--accent)",
            color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none", textAlign: "center",
          }}>
            Contrátame
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

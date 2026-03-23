"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const links = ["Inicio", "Sobre mí", "Proyectos", "Experiencia", "Contacto"];
const sectionIds = ["inicio", "sobre-mi", "proyectos", "experiencia", "contacto"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = 0;
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = i;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Move the indicator under the active link
  useEffect(() => {
    const el = linkRefs.current[active];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);

  return (
    <nav style={{
      position: "fixed", top: 3, left: 0, right: 0, zIndex: 50,
      backgroundColor: scrolled ? "rgba(10,15,30,0.97)" : "rgba(10,15,30,0.6)",
      backdropFilter: "blur(14px)",
      borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      transition: "background-color 0.3s ease, border-color 0.3s ease",
      overflow: "hidden",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{
          width: 40, height: 40, borderRadius: 8, background: "var(--accent)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 13, color: "#fff", fontFamily: "monospace", flexShrink: 0,
        }}>
          {"</>"}
        </div>

        {/* Desktop links + sliding indicator */}
        <div style={{ position: "relative", display: "flex", gap: 8, alignItems: "center", height: 64 }} className="hidden-mobile">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${sectionIds[i]}`}
              ref={el => { linkRefs.current[i] = el; }}
              style={{
                padding: "8px 14px",
                color: active === i ? "#fff" : "var(--text-secondary)",
                fontSize: 14, fontWeight: active === i ? 600 : 500,
                textDecoration: "none", transition: "color 0.2s",
                position: "relative", zIndex: 1, display: "flex", alignItems: "center",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = active === i ? "#fff" : "var(--text-secondary)")}
            >
              {l}
            </a>
          ))}

          {/* Sliding underline — sits at the very bottom of the nav bar */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            height: 2,
            background: "var(--accent)",
            borderRadius: "2px 2px 0 0",
            transition: "left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1)",
            pointerEvents: "none",
          }} />

          <a href="#contacto" style={{
            marginLeft: 16, padding: "8px 20px", borderRadius: 6,
            background: "var(--accent)", color: "#fff",
            fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
            Contrátame
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }}
          className="show-mobile">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(10,15,30,0.98)", borderTop: "1px solid var(--border)",
          padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {links.map((l, i) => (
            <a key={l} href={`#${sectionIds[i]}`} onClick={() => setOpen(false)}
              style={{ color: active === i ? "var(--accent)" : "var(--text-secondary)", fontSize: 15, textDecoration: "none", fontWeight: active === i ? 600 : 400 }}>
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

"use client";
import { useEffect, useState } from "react";

const sections = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Detect active section
      const ids = ["inicio", "sobre-mi", "proyectos", "experiencia", "contacto"];
      let current = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && scrollTop >= el.offsetTop - 120) current = i;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 3, background: "rgba(255,255,255,0.08)",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
          transition: "width 0.1s linear",
          borderRadius: "0 2px 2px 0",
        }} />
      </div>

      {/* Section indicators */}
      <div style={{
        position: "fixed", top: 3, left: 0, right: 0, zIndex: 99,
        display: "flex", justifyContent: "center",
        pointerEvents: "none",
      }}>
        <div style={{ display: "flex", gap: 0 }}>
          {sections.map((s, i) => {
            const filled = i <= active;
            return (
              <a key={s.label} href={s.href} style={{
                pointerEvents: "all",
                padding: "6px 18px",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: filled ? "#3b82f6" : "rgba(255,255,255,0.25)",
                borderBottom: `2px solid ${filled ? "#3b82f6" : "transparent"}`,
                transition: "color 0.3s, border-color 0.3s",
                background: "transparent",
              }}>
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

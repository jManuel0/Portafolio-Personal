"use client";
import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: <Github size={20} />, href: "https://github.com/jManuel0", label: "GitHub" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", label: "LinkedIn" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
];

export default function SocialSidebar() {
  return (
    <div style={{
      position: "fixed",
      left: 24,
      bottom: 0,
      zIndex: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
    }} className="social-sidebar">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          style={{
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "color 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {s.icon}
        </a>
      ))}
      {/* Vertical line */}
      <div style={{
        width: 1,
        height: 80,
        background: "linear-gradient(to bottom, var(--accent), transparent)",
      }} />

      <style>{`
        @media (max-width: 768px) {
          .social-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  );
}

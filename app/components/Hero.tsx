"use client";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

const socials = [
  { href: "https://github.com/jManuel0", icon: <Github size={22} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", icon: <Linkedin size={22} />, label: "LinkedIn" },
];

export default function Hero() {
  const { lang } = useApp();
  const tr = t[lang].hero;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col px-4 sm:px-8 pt-24 pb-0 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>

      <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col">

        {/* Main content */}
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8">

          {/* Avatar */}
          <div className="flex items-center justify-center order-1 lg:order-2 w-full">
            <div className="rounded-full border-4 border-[#3B82F6] shadow-2xl shadow-[#3B82F6]/20 flex items-center justify-center flex-shrink-0"
              style={{ width: "min(260px, 70vw)", height: "min(260px, 70vw)", background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)" }}>
              <span className="font-bold select-none text-[#3B82F6]" style={{ fontSize: "min(90px, 24vw)", lineHeight: 1 }}>JO</span>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left w-full">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>{tr.tag}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Juan Manuel<br />Ordoñez Armero
              </h1>
            </div>
            <p className="text-sm sm:text-base leading-relaxed max-w-md border-l-2 border-[#3B82F6] pl-4 sm:pl-6 mx-auto lg:mx-0 text-left"
              style={{ color: "var(--text-secondary)" }}>
              {tr.bio}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <Button variant="primary" size="md" onClick={scrollToContact}>
                <Mail size={18} className="mr-2" /> {tr.contact}
              </Button>
              <Button variant="outline" size="md" onClick={() => window.open("/Cv - Estudiante de Software.pdf", "_blank")}>
                <Download size={18} className="mr-2" /> {tr.cv}
              </Button>
            </div>
            {/* Social icons — mobile only */}
            <div className="flex gap-5 lg:hidden justify-center pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="hover:text-[#3B82F6] transition-colors" style={{ color: "var(--text-secondary)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats — pinned to bottom with separator */}
        <div className="w-full grid grid-cols-3 gap-4 py-8 border-t text-center" style={{ borderColor: "var(--border)" }}>
          {[["2+", tr.years], ["10+", tr.projects], ["3+", tr.techs]].map(([val, label]) => (
            <div key={label}>
              <p className="text-2xl sm:text-4xl font-bold mb-1 text-[#3B82F6]">{val}</p>
              <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed social sidebar — desktop only */}
      <div className="fixed bottom-8 left-8 hidden lg:flex flex-col gap-6 z-40 items-center">
        <div className="w-px h-16 bg-[#3B82F6]/30" />
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
            className="hover:text-[#3B82F6] transition-colors hover:scale-110 transform" style={{ color: "var(--text-primary)" }}>
            {s.icon}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce">
        <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{tr.scroll}</p>
        <div className="w-px h-12 bg-[#3B82F6]/30" />
      </div>

    </section>
  );
}

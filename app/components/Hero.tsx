"use client";
import Image from "next/image";
import { Github, Linkedin, Instagram, Download, Mail } from "lucide-react";
import { Button } from "./ui/Button";

const socials = [
  { href: "https://github.com/jManuel0", icon: <Github size={22} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", icon: <Linkedin size={22} />, label: "LinkedIn" },
  { href: "https://www.instagram.com/ordonezarmero_juan", icon: <Instagram size={22} />, label: "Instagram" },
];

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-8 py-24 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-[#94A3B8] uppercase tracking-widest">▸ Estudiante de Ingeniería de Software</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none">
                Juan Manuel<br />Ordoñez Armero
              </h1>
            </div>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-md border-l-2 border-[#3B82F6] pl-4 sm:pl-6">
              Estudiante apasionado por el desarrollo de software, enfocado en crear soluciones innovadoras y eficientes. Comprometido con el aprendizaje continuo y la mejora constante.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button variant="primary" size="md" onClick={scrollToContact}>
                <Mail size={18} className="mr-2" /> Contactar
              </Button>
              <Button variant="outline" size="md">
                <Download size={18} className="mr-2" /> Ver CV
              </Button>
            </div>

            {/* Social icons — visible on mobile, hidden on lg (sidebar takes over) */}
            <div className="flex gap-5 lg:hidden pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 sm:pt-8 border-t border-[#3B82F6]/20">
              {[["2+", "Años Estudiando"], ["10+", "Proyectos"], ["3+", "Tecnologías"]].map(([val, label]) => (
                <div key={label}>
                  <p className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-[#3B82F6]">{val}</p>
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="border-4 border-[#3B82F6] rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] overflow-hidden shadow-2xl shadow-[#3B82F6]/20"
                style={{ position: "relative", width: "min(320px, 80vw)", height: "min(427px, 107vw)" }}>
                <Image src="/portafolio1.jpg" alt="Juan Manuel Ordoñez Armero" fill
                  style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 border-4 border-[#3B82F6]/30 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 sm:w-16 h-12 sm:h-16 bg-[#3B82F6]/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>

        {/* Fixed social sidebar — desktop only */}
        <div className="fixed bottom-8 left-8 hidden lg:flex flex-col gap-6 z-40 items-center">
          <div className="w-px h-16 bg-[#3B82F6]/30" />
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="text-[#F8FAFC] hover:text-[#3B82F6] transition-colors hover:scale-110 transform">
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce">
          <p className="text-xs text-[#94A3B8] uppercase tracking-wider">Scroll</p>
          <div className="w-px h-12 bg-[#3B82F6]/30" />
        </div>
      </div>
    </section>
  );
}

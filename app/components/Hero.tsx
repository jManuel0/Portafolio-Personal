"use client";
import Image from "next/image";
import { Github, Linkedin, Instagram, Download, Mail } from "lucide-react";
import { Button } from "./ui/Button";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-8 py-20 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-base text-[#94A3B8] uppercase tracking-widest">▸ Estudiante de Ingeniería de Software</p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none">
                Juan Manuel<br />Ordoñez Armero
              </h1>
            </div>
            <p className="text-base text-[#94A3B8] leading-relaxed max-w-md border-l-2 border-[#3B82F6] pl-6">
              Estudiante apasionado por el desarrollo de software, enfocado en crear soluciones innovadoras y eficientes. Comprometido con el aprendizaje continuo y la mejora constante.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" size="md" onClick={scrollToContact}>
                <Mail size={20} className="mr-2" /> Contactar
              </Button>
              <Button variant="outline" size="md">
                <Download size={20} className="mr-2" /> Ver CV
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#3B82F6]/20">
              {[["2+", "Años Estudiando"], ["10+", "Proyectos"], ["3+", "Tecnologías"]].map(([val, label]) => (
                <div key={label}>
                  <p className="text-4xl font-bold mb-2 text-[#3B82F6]">{val}</p>
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-full max-w-md aspect-[3/4] border-4 border-[#3B82F6] rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] overflow-hidden relative shadow-2xl shadow-[#3B82F6]/20">
                <Image src="/portafolio1.jpg" alt="Juan Manuel Ordoñez Armero" fill
                  className="object-cover object-top" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-[#3B82F6]/30 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#3B82F6]/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>

        {/* Fixed social sidebar */}
        <div className="fixed bottom-8 left-8 hidden lg:flex flex-col gap-6 z-40 items-center">
          <div className="w-px h-16 bg-[#3B82F6]/30" />
          {[
            { href: "https://github.com/jManuel0", icon: <Github size={24} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", icon: <Linkedin size={24} />, label: "LinkedIn" },
            { href: "https://www.instagram.com/ordonezarmero_juan", icon: <Instagram size={24} />, label: "Instagram" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="text-[#F8FAFC] hover:text-[#3B82F6] transition-colors hover:scale-110 transform">
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce">
          <p className="text-xs text-[#94A3B8] uppercase tracking-wider">Scroll</p>
          <div className="w-px h-12 bg-[#3B82F6]/30" />
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#3B82F6]/20">
      {/* Scroll progress bar */}
      <ScrollBar />
      <div className="px-4 sm:px-8 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}
            className="w-12 h-12 border-2 border-[#3B82F6] rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-all shadow-lg shadow-[#3B82F6]/20">
            <span className="text-xl font-bold text-[#F8FAFC]">&lt;/&gt;</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative group transition-colors ${isActive ? "text-[#3B82F6]" : "text-[#F8FAFC] hover:text-[#3B82F6]"}`}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#3B82F6] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button variant="primary" size="sm">Contrátame</Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#F8FAFC] hover:text-[#3B82F6] transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-[#3B82F6]/20 space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}
                className={`block text-sm uppercase tracking-widest transition-colors ${activeSection === link.href.substring(1) ? "text-[#3B82F6] font-bold" : "text-[#F8FAFC] hover:text-[#3B82F6]"}`}>
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" className="w-full mt-4">Contrátame</Button>
          </div>
        )}
      </div>
    </nav>
  );
}

function ScrollBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#3B82F6]/10 z-10">
      <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] transition-all duration-200 shadow-lg shadow-[#3B82F6]/50"
        style={{ width: `${progress}%` }} />
    </div>
  );
}

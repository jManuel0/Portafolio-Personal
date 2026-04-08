"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

export default function Navbar() {
  const { theme, toggleTheme, lang, setLang } = useApp();
  const tr = t[lang].nav;
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home",       label: tr.home },
    { href: "#about",      label: tr.about },
    { href: "#projects",   label: tr.projects },
    { href: "#experience", label: tr.experience },
    { href: "#contact",    label: tr.contact },
  ];

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const isLight = theme === "light";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)", backdropFilter: "blur(8px)" }}>
      <ScrollBar />
      <div className="px-4 sm:px-8 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}
            className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#3B82F6] rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-all shadow-lg shadow-[#3B82F6]/20">
            <span className="text-lg sm:text-xl font-bold" style={{ color: "var(--text-primary)" }}>&lt;/&gt;</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 lg:gap-12 text-sm uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative group transition-colors"
                  style={{ color: isActive ? "#3B82F6" : "var(--text-primary)" }}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#3B82F6] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language toggle */}
            <div className="flex items-center rounded-lg border overflow-hidden text-xs font-bold" style={{ borderColor: "var(--border)" }}>
              <button onClick={() => setLang("es")}
                className="px-3 py-2 transition-colors"
                style={{ backgroundColor: lang === "es" ? "#3B82F6" : "transparent", color: lang === "es" ? "#fff" : "var(--text-secondary)" }}>
                ES
              </button>
              <button onClick={() => setLang("en")}
                className="px-3 py-2 transition-colors"
                style={{ backgroundColor: lang === "en" ? "#3B82F6" : "transparent", color: lang === "en" ? "#fff" : "var(--text-secondary)" }}>
                EN
              </button>
            </div>

            {/* Theme toggle */}
            <button onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all hover:border-[#3B82F6]"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
              aria-label="Toggle theme">
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border flex items-center justify-center"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
              aria-label="Toggle theme">
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center transition-colors"
              style={{ color: "var(--text-primary)" }}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t space-y-3" style={{ borderColor: "var(--border)" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-sm uppercase tracking-widest py-1 transition-colors"
                style={{ color: activeSection === link.href.substring(1) ? "#3B82F6" : "var(--text-primary)" }}>
                {link.label}
              </a>
            ))}
            {/* Language in mobile menu */}
            <div className="flex gap-2 pt-2">
              {(["es", "en"] as const).map((l) => (
                <button key={l} onClick={() => { setLang(l); setIsOpen(false); }}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors"
                  style={{ backgroundColor: lang === l ? "#3B82F6" : "var(--bg-card)", color: lang === l ? "#fff" : "var(--text-secondary)", border: "1px solid var(--border)" }}>
                  {l}
                </button>
              ))}
            </div>
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
    <div className="absolute top-0 left-0 w-full h-[3px] z-10" style={{ backgroundColor: "var(--border)" }}>
      <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] transition-all duration-200 shadow-lg shadow-[#3B82F6]/50"
        style={{ width: `${progress}%` }} />
    </div>
  );
}

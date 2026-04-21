"use client";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

export default function Footer() {
  const { lang } = useApp();
  const tr = t[lang].footer;
  const nav = t[lang].nav;

  const socials = [
    { href: "https://github.com/jManuel0", icon: <Github size={22} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-aa58b1325", icon: <Linkedin size={22} />, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 border-2 border-[#3B82F6] rounded-lg flex items-center justify-center mb-5 mx-auto sm:mx-0">
              <span className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>&lt;/&gt;</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{tr.bio}</p>
            <div className="flex gap-4 justify-center sm:justify-start">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="hover:text-[#3B82F6] transition-colors" style={{ color: "var(--text-primary)" }}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-primary)" }}>{tr.quickLinks}</h4>
            <ul className="space-y-3">
              {[["#home", nav.home], ["#about", nav.about], ["#projects", nav.projects], ["#experience", nav.experience], ["#testimonials", nav.testimonials], ["#contact", nav.contact]].map(([href, label]) => (
                <li key={href}><a href={href} className="text-sm hover:text-[#3B82F6] transition-colors" style={{ color: "var(--text-secondary)" }}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-primary)" }}>{tr.services}</h4>
            <ul className="space-y-3">
              {["Desarrollo Web / Web Dev", "React & TypeScript", "Diseño Responsive", "APIs REST", "Freelance"].map((s) => (
                <li key={s}><span className="text-sm" style={{ color: "var(--text-secondary)" }}>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-primary)" }}>{tr.contactTitle}</h4>
            <ul className="space-y-4">
              {[
                { icon: <Mail size={16} className="flex-shrink-0 text-[#3B82F6]" />, text: "juanmaarmero30@gmail.com" },
                { icon: <Phone size={16} className="flex-shrink-0 text-[#3B82F6]" />, text: "+57 317 314 5521" },
                { icon: <MapPin size={16} className="flex-shrink-0 text-[#3B82F6]" />, text: "Pasto Nariño, Colombia" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 justify-center sm:justify-start">
                  {item.icon}
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t flex justify-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs sm:text-sm text-center" style={{ color: "var(--text-secondary)" }}>{tr.rights}</p>
        </div>
      </div>
    </footer>
  );
}

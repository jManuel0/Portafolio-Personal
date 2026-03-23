import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] border-t border-[#3B82F6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="w-12 h-12 border-2 border-[#3B82F6] rounded-lg flex items-center justify-center mb-6">
              <span className="text-[#F8FAFC] text-xl font-bold">&lt;/&gt;</span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Estudiante de Ingeniería de Software apasionado por crear soluciones innovadoras.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://github.com/jManuel0", icon: <Github size={24} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", icon: <Linkedin size={24} />, label: "LinkedIn" },
                { href: "https://www.instagram.com/ordonezarmero_juan", icon: <Instagram size={24} />, label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="text-[#F8FAFC] hover:text-[#3B82F6] transition-colors">{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#F8FAFC]">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[["#home","Inicio"],["#about","Sobre Mí"],["#projects","Proyectos"],["#experience","Experiencia"],["#contact","Contacto"]].map(([href, label]) => (
                <li key={href}><a href={href} className="text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#F8FAFC]">Servicios</h4>
            <ul className="space-y-3">
              {["Desarrollo Web","React & TypeScript","Diseño Responsive","APIs REST","Freelance"].map((s) => (
                <li key={s}><span className="text-sm text-[#94A3B8]">{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#F8FAFC]">Contacto</h4>
            <ul className="space-y-4">
              {[
                { icon: <Mail size={18} className="mt-0.5 flex-shrink-0 text-[#3B82F6]" />, text: "juanmaarmero30@gmail.com" },
                { icon: <Phone size={18} className="mt-0.5 flex-shrink-0 text-[#3B82F6]" />, text: "+57 317 314 5521" },
                { icon: <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#3B82F6]" />, text: "Pasto Nariño, Colombia" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  {item.icon}
                  <span className="text-sm text-[#94A3B8]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#3B82F6]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#94A3B8]">© 2026 Juan Manuel Ordoñez Armero. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-sm text-[#94A3B8]">
            {["Privacidad","Términos","Cookies"].map((l) => (
              <a key={l} href="#" className="hover:text-[#3B82F6] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

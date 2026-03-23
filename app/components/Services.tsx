import { SectionHeader } from "./ui/SectionHeader";

const services = [
  {
    icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>),
    title: "Diseño Creativo",
    description: "Aprovechando elementos artísticos y principios estéticos para crear experiencias de usuario visualmente atractivas y cautivadoras.",
  },
  {
    icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
    title: "Código Limpio",
    description: "Escribiendo código bien estructurado, legible y mantenible, siguiendo las mejores prácticas de programación.",
  },
  {
    icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2" /><line x1="8" y1="22" x2="16" y2="22" /><line x1="12" y1="18" x2="12" y2="22" /></svg>),
    title: "Interfaz de Usuario",
    description: "Creando diseños intuitivos y amigables que priorizan la usabilidad, accesibilidad y una experiencia de usuario fluida.",
  },
  {
    icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>),
    title: "Experiencia de Usuario",
    description: "Comprendiendo los comportamientos, necesidades y preferencias del usuario para crear interfaces intuitivas, eficientes y agradables.",
  },
  {
    icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>),
    title: "Soporte Rápido",
    description: "Atendiendo y resolviendo problemas o consultas reportadas por los usuarios relacionadas con el sitio web o aplicación.",
  },
  {
    icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>),
    title: "Branding",
    description: "Creando experiencias de marca consistentes y cohesivas mediante el uso de logotipos, esquemas de color, tipografía y otros activos de marca.",
  },
];

export default function Services() {
  return (
    <section id="skills" className="px-4 sm:px-8 py-24 sm:py-32 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Mis Servicios" title="Que puedo hacer"
          description="Tecnologías y herramientas que he aprendido y utilizado en mis proyectos académicos y personales." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.title}
              className="bg-[#1E293B] rounded-xl px-8 py-12 flex flex-col items-center text-center hover:bg-[#263348] transition-colors duration-200">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-base font-bold text-[#F8FAFC] mb-4">{service.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";
import { ExternalLink, Github } from "lucide-react";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

const projects = [
  { id: 1, titleEs: "Portfolio Personal v1", titleEn: "Personal Portfolio v1", category: "Web Development",
    descEs: "Mi primer portafolio personal, un trabajo académico donde combiné varias tecnologías. Lo más retador fue el diseño, pero fue un aprendizaje clave que me enseñó cómo estructurar y presentar mi trabajo.", 
    descEn: "My first personal portfolio, an academic project where I combined several technologies. The most challenging part was the design, but it was a key learning experience that taught me how to structure and present my work.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"], year: "2026",
    image: "/Portfolio Personal v1.png",
    github: "https://github.com/jManuel0/Portafolio-Personal.git", demo: "#" },
  { id: 2, titleEs: "Demo Mercado Libre", titleEn: "Mercado Libre Demo", category: "Proyecto en Clase / Class Project",
    descEs: "Demo de la landing page de Mercado Libre hecho en clase. Me ayudó a entender cómo funcionan los marketplaces web, las pasarelas de pago y la estructura de una tienda online real.",
    descEn: "Mercado Libre landing page demo built in class. It helped me understand how web marketplaces work, payment gateways and the structure of a real online store.",
    technologies: ["CSS", "JavaScript", "HTML", "Tailwind"], year: "2026",
    image: "/Demo Mercado Libre.png",
    github: "https://github.com/CarlosTaquez/MercadoLibre-ladingPage.git",
    demo: "https://mercado-libre-lading-page.vercel.app/" },
  { id: 3, titleEs: "RoadWarnings Nariño", titleEn: "RoadWarnings Nariño", category: "Aplicación Web / Web App",
    descEs: "Una de las apps más complicadas que he hecho. Integra mapas, rutas y datos geográficos de Nariño. Fue mi primera vez trabajando con mapas y Spring Boot, lo que lo hizo un reto bastante grande pero muy enriquecedor.",
    descEn: "One of the most complex apps I've built. It integrates maps, routes and geographic data from Nariño. It was my first time working with maps and Spring Boot, making it a big but very rewarding challenge.",
    technologies: ["SpringBoot", "PostgreSQL", "Tailwind"], year: "2025",
    image: "/RoadWarnings Nariño.png",
    github: "https://github.com/jManuel0/RoadWarningsNarino--Frontend.git",
    demo: "https://road-warnings-narino-frontend.vercel.app" },
  { id: 4, titleEs: "App de Voluntariado ONG", titleEn: "NGO Volunteering App", category: "Proyecto Clase / Class Project",
    descEs: "Proyecto final de clase, un sistema para que personas se registren y participen en trabajos de voluntariado social. Fue algo más simple pero lo saqué bien — permite gestionar voluntarios de forma ordenada.",
    descEn: "Class final project, a system for people to register and participate in social volunteer work. It was simpler but well executed — it allows managing volunteers in an organized way.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"], year: "2025",
    image: "/App Voluntariado ONG.png",
    github: "https://github.com/migueltovarb/ISWDISENO202502-2jManuel0", demo: "LOCAL" },
];

export default function Projects() {
  const { lang } = useApp();
  const tr = t[lang].projects;

  return (
    <section id="projects" className="px-4 sm:px-8 py-24 sm:py-32 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle={tr.subtitle} title={tr.title} description={tr.desc} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="rounded-xl border flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              {/* Project image */}
              <div className="w-full overflow-hidden bg-[#0F172A]" style={{ position: "relative", height: 180 }}>
                <Image src={project.image} alt={project.titleEs} fill
                  style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{project.category}</p>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{project.year}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {lang === "es" ? project.titleEs : project.titleEn}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
                  {lang === "es" ? project.descEs : project.descEn}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded text-[#3B82F6]">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all text-[#3B82F6]">
                    <Github size={16} /> GitHub
                  </a>
                  {project.demo !== "LOCAL" && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all text-[#3B82F6]">
                      Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

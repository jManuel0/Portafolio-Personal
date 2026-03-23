import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1, title: "RoadWarnings Nariño", category: "Aplicación Web",
    description: "Plataforma para gestión de tráfico en Nariño.",
    technologies: ["SpringBoot", "PostgreSQL", "Tailwind"], year: "2025",
    github: "https://github.com/jManuel0/RoadWarningsNarino--Frontend.git",
    demo: "https://road-warnings-narino-frontend.vercel.app",
  },
  {
    id: 2, title: "Demo Mercado Libre", category: "Proyecto en Clase",
    description: "Demo de la landing page de Mercado Libre.",
    technologies: ["CSS", "JavaScript", "HTML", "Tailwind"], year: "2026",
    github: "https://github.com/CarlosTaquez/MercadoLibre-ladingPage.git",
    demo: "https://mercado-libre-lading-page.vercel.app/",
  },
  {
    id: 3, title: "Aplicación de Voluntariado ONG", category: "Proyecto Clase",
    description: "Sistema de gestión de voluntariado para ONGs desarrollado con Spring Boot y MongoDB Atlas.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"], year: "2025",
    github: "https://github.com/migueltovarb/ISWDISENO202502-2jManuel0",
    demo: "LOCAL",
  },
  {
    id: 4, title: "Portfolio Personal v1", category: "Web Development",
    description: "Primera versión del portafolio personal.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"], year: "2026",
    github: "https://github.com/jManuel0/Portafolio-Personal.git",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8 py-24 sm:py-32 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Portafolio" title="Proyectos Destacados"
          description="Colección de proyectos académicos y personales que demuestran mis habilidades en desarrollo de software." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center border border-[#3B82F6]/30">
                  <span className="text-xl font-bold text-[#3B82F6]">&lt;/&gt;</span>
                </div>
                <span className="text-xs text-[#94A3B8]">{project.year}</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#94A3B8] mb-3">{project.category}</p>
              <h3 className="text-xl font-bold mb-4 text-[#F8FAFC]">{project.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded text-[#3B82F6]">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all text-[#3B82F6]">
                  <Github size={16} /> GitHub
                </a>
                {project.demo !== "LOCAL" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all text-[#3B82F6]">
                    Demo <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

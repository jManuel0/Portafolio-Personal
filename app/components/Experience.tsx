import { SectionHeader } from "./ui/SectionHeader";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2026 - Presente",
    position: "Estudiante de Ingeniería de Software",
    company: "Universidad Cooperativa De Colombia Campus Pasto",
    description: "Actualmente cursando el quinto semestre con enfoque en desarrollo web full-stack y arquitectura de software.",
    achievements: [
      "Promedio académico de 70% en materias de programación",
      "Participación en proyectos colaborativos de desarrollo",
      "Aprendizaje de tecnologías modernas como React y Node.js",
    ],
  },
  {
    year: "2025",
    position: "Estudiante de Ingeniería de Software",
    company: "Universidad Cooperativa De Colombia Campus Pasto",
    description: "Cursando el tercer y cuarto semestre con enfoque en desarrollo web full-stack y arquitectura de software.",
    achievements: [
      "Promedio académico de 70% en materias de programación",
      "Participación en proyectos colaborativos de desarrollo",
      "Aprendizaje de tecnologías modernas como React y Node.js",
    ],
  },
  {
    year: "2024",
    position: "Estudiante de Ingeniería de Software",
    company: "Universidad Cooperativa De Colombia Campus Pasto",
    description: "Cursando el primer y segundo semestre con enfoque en fundamentos de programación y desarrollo web.",
    achievements: [
      "Promedio académico de 70% en materias de programación",
      "Participación en proyectos colaborativos de desarrollo",
      "Aprendizaje de tecnologías modernas como React y Node.js",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-8 py-32 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle="Trayectoria" title="Educación"
          description="Mi camino de aprendizaje y crecimiento en el desarrollo de software." />
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#3B82F6]/30 hidden md:block" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-2 w-3 h-3 bg-[#3B82F6] rounded-full -translate-x-[5px] hidden md:block shadow-lg shadow-[#3B82F6]/50" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg px-4 py-2">
                      <GraduationCap size={16} className="text-[#3B82F6]" />
                      <span className="text-sm font-medium text-[#F8FAFC]">{exp.year}</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg p-8 hover:bg-[#334155] hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all">
                    <h3 className="text-2xl font-bold mb-2 text-[#F8FAFC]">{exp.position}</h3>
                    <p className="text-sm text-[#94A3B8] mb-4 uppercase tracking-wider">{exp.company}</p>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="text-sm text-[#94A3B8] flex items-start gap-3">
                          <span className="text-[#3B82F6] mt-1">▸</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

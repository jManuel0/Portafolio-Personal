"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { GraduationCap } from "lucide-react";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

const experiences = [
  { year: "2026 - Presente / Present",
    positionEs: "Estudiante de Ingeniería de Software", positionEn: "Software Engineering Student",
    company: "Universidad Cooperativa De Colombia Campus Pasto",
    descEs: "Actualmente cursando el quinto semestre con enfoque en desarrollo web full-stack y arquitectura de software.",
    descEn: "Currently in the fifth semester focused on full-stack web development and software architecture.",
    achievementsEs: ["Promedio académico de 70% en materias de programación", "Participación en proyectos colaborativos de desarrollo", "Aprendizaje de tecnologías modernas como React y Node.js"],
    achievementsEn: ["70% academic average in programming courses", "Participation in collaborative development projects", "Learning modern technologies like React and Node.js"],
  },
  { year: "2025",
    positionEs: "Estudiante de Ingeniería de Software", positionEn: "Software Engineering Student",
    company: "Universidad Cooperativa De Colombia Campus Pasto",
    descEs: "Cursando el tercer y cuarto semestre con enfoque en desarrollo web full-stack y arquitectura de software.",
    descEn: "Third and fourth semester focused on full-stack web development and software architecture.",
    achievementsEs: ["Promedio académico de 70% en materias de programación", "Participación en proyectos colaborativos de desarrollo", "Aprendizaje de tecnologías modernas como React y Node.js"],
    achievementsEn: ["70% academic average in programming courses", "Participation in collaborative development projects", "Learning modern technologies like React and Node.js"],
  },
  { year: "2024",
    positionEs: "Estudiante de Ingeniería de Software", positionEn: "Software Engineering Student",
    company: "Universidad Cooperativa De Colombia Campus Pasto",
    descEs: "Cursando el primer y segundo semestre con enfoque en fundamentos de programación y desarrollo web.",
    descEn: "First and second semester focused on programming fundamentals and web development.",
    achievementsEs: ["Promedio académico de 70% en materias de programación", "Participación en proyectos colaborativos de desarrollo", "Aprendizaje de tecnologías modernas como React y Node.js"],
    achievementsEn: ["70% academic average in programming courses", "Participation in collaborative development projects", "Learning modern technologies like React and Node.js"],
  },
];

export default function Experience() {
  const { lang } = useApp();
  const tr = t[lang].experience;

  return (
    <section id="experience" className="px-4 sm:px-8 py-24 sm:py-32 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader subtitle={tr.subtitle} title={tr.title} description={tr.desc} />
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: "var(--border)" }} />
          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-2 w-3 h-3 bg-[#3B82F6] rounded-full -translate-x-[5px] hidden md:block shadow-lg shadow-[#3B82F6]/50" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="md:col-span-1">
                    <div className="inline-flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 border"
                      style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                      <GraduationCap size={16} className="text-[#3B82F6]" />
                      <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--text-primary)" }}>{exp.year}</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 rounded-lg p-6 sm:p-8 border transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20"
                    style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      {lang === "es" ? exp.positionEs : exp.positionEn}
                    </h3>
                    <p className="text-xs sm:text-sm mb-4 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{exp.company}</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                      {lang === "es" ? exp.descEs : exp.descEn}
                    </p>
                    <ul className="space-y-2">
                      {(lang === "es" ? exp.achievementsEs : exp.achievementsEn).map((a, i) => (
                        <li key={i} className="text-sm flex items-start gap-3" style={{ color: "var(--text-secondary)" }}>
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

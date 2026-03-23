import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ingeniería de Software",
    institution: "Universidad Cooperativa De Colombia Campus Pasto",
    year: "2024 - Presente",
    description: "Formación integral en desarrollo de software, arquitectura de sistemas y metodologías ágiles.",
    achievements: ["Promedio: 70%"],
  },
];

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-8 py-24 sm:py-32 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Educación" title="Formación Académica"
          description="Mi trayectoria educativa que valida mis conocimientos técnicos." />
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#F8FAFC]">
            <GraduationCap size={28} className="text-[#3B82F6]" /> Educación
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <p className="text-xs text-[#94A3B8] mb-3 uppercase tracking-wider">{edu.year}</p>
                <h4 className="text-xl font-bold mb-2 text-[#F8FAFC]">{edu.degree}</h4>
                <p className="text-sm text-[#94A3B8] mb-4">{edu.institution}</p>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((a, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded text-[#3B82F6]">{a}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

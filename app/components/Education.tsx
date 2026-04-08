"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { GraduationCap } from "lucide-react";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

export default function Education() {
  const { lang } = useApp();
  const tr = t[lang].education;

  const education = [
    {
      degreeEs: "Ingeniería de Software", degreeEn: "Software Engineering",
      institution: "Universidad Cooperativa De Colombia Campus Pasto",
      year: "2024 - Presente / Present",
      descEs: "Formación integral en desarrollo de software, arquitectura de sistemas y metodologías ágiles.",
      descEn: "Comprehensive training in software development, systems architecture and agile methodologies.",
      achievements: [lang === "es" ? "Promedio: 70%" : "Average: 70%"],
    },
  ];

  return (
    <section id="education" className="px-4 sm:px-8 py-24 sm:py-32 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle={tr.subtitle} title={tr.title} description={tr.desc} />
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
            <GraduationCap size={28} className="text-[#3B82F6]" /> {tr.label}
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="rounded-xl p-6 sm:p-8 border transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-xs mb-3 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{edu.year}</p>
                <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {lang === "es" ? edu.degreeEs : edu.degreeEn}
                </h4>
                <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>{edu.institution}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {lang === "es" ? edu.descEs : edu.descEn}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((a, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded text-[#3B82F6]">{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

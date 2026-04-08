"use client";
import Image from "next/image";
import { Code, Database, Layout, BookOpen, GraduationCap, Download } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

export default function About() {
  const { lang } = useApp();
  const tr = t[lang].about;

  const skills = [
    { icon: Code, name: tr.skill1, description: "React, TypeScript, Node.js" },
    { icon: Layout, name: tr.skill2, description: "Tailwind, Responsive Design" },
    { icon: Database, name: tr.skill3, description: "PostgreSQL" },
  ];

  const stats = [
    { icon: BookOpen, value: "2+", label: tr.yearsLabel },
    { icon: GraduationCap, value: "70%", label: tr.avgLabel },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-8 py-24 sm:py-32 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Photo */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="border-4 border-[#3B82F6] rounded-lg overflow-hidden shadow-2xl shadow-[#3B82F6]/20"
                style={{ position: "relative", width: "min(340px, 80vw)", height: "min(340px, 80vw)", background: "linear-gradient(135deg, #1E3A8A, #0F172A)" }}>
                <Image src="/portafolio2.jpg" alt="Sobre mí" fill
                  style={{ objectFit: "cover", objectPosition: "center top" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-40" />
              </div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 border-4 border-[#3B82F6]/30 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 bg-[#3B82F6]/10 rounded-lg -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 flex flex-col justify-center text-center lg:text-left">
            <SectionHeader subtitle={tr.subtitle} title={tr.title} />
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{tr.p1}</p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{tr.p2}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-lg p-4 sm:p-6 flex items-center gap-3 sm:gap-4 border transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20"
                    style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <Icon size={28} className="flex-shrink-0 text-[#3B82F6]" />
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{stat.value}</p>
                      <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="rounded-lg p-4 sm:p-5 border transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20 group"
                    style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                    <Icon size={24} className="mb-2 sm:mb-3 text-[#3B82F6] group-hover:scale-110 transition-transform" />
                    <p className="font-bold mb-1 text-sm" style={{ color: "var(--text-primary)" }}>{skill.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{skill.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-center lg:justify-start">
              <Button variant="primary" size="md">
                <Download size={18} className="mr-2" /> {tr.downloadCv}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

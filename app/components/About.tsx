"use client";
import Image from "next/image";
import { Code, Database, Layout, BookOpen, GraduationCap } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { Download } from "lucide-react";

const skills = [
  { icon: Code, name: "Desarrollo Web", description: "React, TypeScript, Node.js" },
  { icon: Layout, name: "UI/UX", description: "Tailwind, Responsive Design" },
  { icon: Database, name: "Bases de Datos", description: "PostgreSQL" },
];

const stats = [
  { icon: BookOpen, value: "2+", label: "Años de Estudio" },
  { icon: GraduationCap, value: "70%", label: "Promedio Académico" },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-8 py-32 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Photo */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative">
              <div className="w-full max-w-md aspect-square border-4 border-[#3B82F6] rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] overflow-hidden group shadow-2xl shadow-[#3B82F6]/20" style={{ position: "relative" }}>
                <Image src="/portafolio2.jpg" alt="Sobre mí" fill
                  style={{ objectFit: "cover", objectPosition: "center top" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-40" />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#3B82F6]/30 rounded-lg -z-10" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#3B82F6]/10 rounded-lg -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <SectionHeader subtitle="Sobre Mí" title="Estudiante" />
            <div className="space-y-6">
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Soy estudiante de Ingeniería de Software con una gran pasión por la tecnología y el desarrollo web. Me especializo en crear aplicaciones modernas, eficientes y centradas en el usuario utilizando las últimas tecnologías del mercado. Actualmente me enfoco en el stack completo de desarrollo web, con especial interés en React, TypeScript y Node.js.
              </p>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Aparte de lo académico y laboral, me gustan mucho los deportes. Me considero una persona que puede destacar en cualquier deporte, me gusta viajar con amigos y pasar tiempo en familia.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg p-6 flex items-center gap-4 hover:bg-[#334155] hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all">
                    <Icon size={32} className="flex-shrink-0 text-[#3B82F6]" />
                    <div>
                      <p className="text-3xl font-bold mb-1 text-[#F8FAFC]">{stat.value}</p>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg p-5 hover:bg-[#334155] hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all group">
                    <Icon size={28} className="mb-3 text-[#3B82F6] group-hover:scale-110 transition-transform" />
                    <p className="font-bold mb-1 text-[#F8FAFC]">{skill.name}</p>
                    <p className="text-xs text-[#94A3B8]">{skill.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button variant="primary" size="md">
                <Download size={18} className="mr-2" /> Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

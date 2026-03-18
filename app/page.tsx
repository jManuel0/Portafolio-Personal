import { Github, Linkedin, Mail, ExternalLink, Code2, Wrench, Globe } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const skills = {
  languages: ["JavaScript", "Python"],
  technologies: ["React", "Next.js", "Node.js"],
  tools: ["Git", "GitHub", "Figma", "Visual Studio Code"],
};

const projects = [
  {
    title: "Sistema Inteligente de Optimización del Tráfico en Pasto",
    description:
      "Sistema orientado a mejorar la movilidad urbana mediante sensores y control automatizado de semáforos. Reduce la congestión vehicular y optimiza los tiempos de respuesta en situaciones críticas de tráfico.",
    tech: ["IoT", "ESP32", "Sensores", "Monitoreo en tiempo real"],
    icon: "🚦",
  },
  {
    title: "Portafolio Web Personal",
    description:
      "Diseño y desarrollo de un sitio web profesional para presentar proyectos, habilidades y experiencia en desarrollo de software, con enfoque moderno, accesible y completamente responsive.",
    tech: ["Next.js", "Tailwind CSS"],
    icon: "🌐",
  },
  {
    title: "Dashboard Web Interactivo",
    description:
      "Interfaz interactiva para la visualización de datos, con énfasis en la claridad de la información y una experiencia de usuario fluida e intuitiva.",
    tech: ["React", "JavaScript", "CSS"],
    icon: "📊",
  },
];

const testimonials = [
  {
    name: "Andrés Felipe Muñoz",
    role: "Compañero de equipo — Ingeniería de Software, UCC",
    text: "Juan Manuel es una persona muy comprometida y responsable. En cada proyecto académico que hemos compartido, siempre aporta soluciones bien pensadas y se asegura de que el equipo avance en la dirección correcta. Su dominio del frontend y su atención al detalle marcan una diferencia real.",
    initials: "AM",
  },
  {
    name: "Valentina Torres",
    role: "Compañera de proyecto — Ingeniería de Software, UCC",
    text: "Trabajar con Juan Manuel es una experiencia muy positiva. Tiene una capacidad notable para entender los requerimientos del proyecto y traducirlos en interfaces limpias y funcionales. Además, siempre está dispuesto a apoyar al equipo y compartir su conocimiento.",
    initials: "VT",
  },
  {
    name: "Ing. Carlos Esteban Rosero",
    role: "Docente de Desarrollo Web — Universidad Cooperativa de Colombia",
    text: "Juan Manuel demuestra un nivel de madurez técnica poco común en estudiantes de su semestre. Su trabajo con React y Next.js refleja no solo comprensión de las herramientas, sino también buenas prácticas de desarrollo. Es un estudiante proactivo, curioso y con gran potencial profesional.",
    initials: "CR",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-zinc-900 dark:text-white tracking-tight">
          JM<span className="text-indigo-500">.</span>
        </span>
        <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          {["Sobre mí", "Habilidades", "Proyectos", "Testimonios", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-indigo-500 transition-colors hidden sm:block"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="sobre-mí"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-zinc-950 dark:via-indigo-950/20 dark:to-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-indigo-500 font-mono text-sm mb-4 tracking-widest uppercase">
          Hola, soy
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
          Juan Manuel
          <br />
          <span className="text-indigo-500">Ordoñez Armero</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-6 font-medium">
          Estudiante de Ingeniería de Software · Desarrollador Frontend
        </p>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10">
          Me especializo en el desarrollo web frontend con tecnologías modernas como React y Next.js.
          Me apasiona construir interfaces atractivas, funcionales y centradas en el usuario,
          combinando diseño y código para crear experiencias digitales de calidad.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-colors"
          >
            Contáctame
          </a>
          <a
            href="#proyectos"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 hover:text-indigo-500 rounded-full font-medium transition-colors"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const categories = [
    { label: "Lenguajes", icon: <Code2 size={18} />, items: skills.languages },
    { label: "Tecnologías", icon: <Globe size={18} />, items: skills.technologies },
    { label: "Herramientas", icon: <Wrench size={18} />, items: skills.tools },
  ];

  return (
    <section id="habilidades" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Habilidades</SectionLabel>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
          Tecnologías que manejo
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex items-center gap-2 text-indigo-500 mb-4 font-semibold">
                {cat.icon}
                <span>{cat.label}</span>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-zinc-700 dark:text-zinc-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Proyectos</SectionLabel>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
          Lo que he construido
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-400 transition-colors group"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-indigo-500 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Experiencia</SectionLabel>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
          Formación y trayectoria
        </h2>
        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 space-y-8">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500" />
          <div>
            <p className="text-sm text-indigo-500 font-mono mb-1">2022 — Presente</p>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Estudiante de Ingeniería de Software
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
              Universidad Cooperativa de Colombia
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Participación activa en proyectos académicos enfocados en desarrollo web, sistemas
              inteligentes y soluciones tecnológicas aplicadas a problemas reales. A lo largo de la
              carrera he fortalecido competencias en diseño de software, programación orientada a
              objetos y desarrollo de interfaces modernas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Testimonios</SectionLabel>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
          Lo que dicen de mí
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-700">
                <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>Contacto</SectionLabel>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          Hablemos
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl">
          Estoy abierto a oportunidades de prácticas, colaboraciones en proyectos o simplemente
          conectar con otros desarrolladores. No dudes en escribirme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:juanmaarmero30@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-indigo-400 transition-colors group"
          >
            <Mail size={20} className="text-indigo-500" />
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Email</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                juanmaarmero30@gmail.com
              </p>
            </div>
            <ExternalLink size={14} className="ml-auto text-zinc-400" />
          </a>
          <a
            href="https://github.com/jManuel0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-indigo-400 transition-colors group"
          >
            <Github size={20} className="text-indigo-500" />
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">GitHub</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                github.com/jManuel0
              </p>
            </div>
            <ExternalLink size={14} className="ml-auto text-zinc-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-indigo-400 transition-colors group"
          >
            <Linkedin size={20} className="text-indigo-500" />
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">LinkedIn</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                Juan Manuel Ordoñez
              </p>
            </div>
            <ExternalLink size={14} className="ml-auto text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span>© 2025 Juan Manuel Ordoñez Armero</span>
        <span>Construido con Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-indigo-500 font-mono text-xs tracking-widest uppercase mb-2">{children}</p>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

"use client";
import { useState } from "react";
import { Github, Linkedin, Instagram, Send, Mail, Phone, MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="px-8 py-32 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Contacto" title="Trabajemos Juntos"
          description="¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo puedo ayudarte." align="center" />

        {/* Info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Mail size={28} className="text-[#3B82F6]" />, label: "Email", value: "juanmaarmero30@gmail.com", href: "mailto:juanmaarmero30@gmail.com" },
            { icon: <Phone size={28} className="text-[#3B82F6]" />, label: "Teléfono", value: "+57 317 314 5521", href: "tel:+573173145521" },
            { icon: <MapPin size={28} className="text-[#3B82F6]" />, label: "Ubicación", value: "Pasto Nariño, Colombia", href: "#" },
          ].map((item) => (
            <a key={item.label} href={item.href}
              className="bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg p-8 hover:bg-[#334155] hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all text-center no-underline">
              <div className="w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#3B82F6]/30">
                {item.icon}
              </div>
              <h3 className="font-bold mb-2 text-[#F8FAFC]">{item.label}</h3>
              <p className="text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors">{item.value}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-[#F8FAFC]">Enviar Mensaje</h3>
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-lg text-[#F8FAFC]">
                ✓ ¡Mensaje enviado exitosamente! Te responderé pronto.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                  placeholder="Nombre" required className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-6 py-4 outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8] text-[#F8FAFC]" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                  placeholder="Apellido" required className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-6 py-4 outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8] text-[#F8FAFC]" />
              </div>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email" required className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-6 py-4 outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8] text-[#F8FAFC]" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                placeholder="Asunto" required className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-6 py-4 outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8] text-[#F8FAFC]" />
              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder="Tu Mensaje" rows={6} required className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-6 py-4 outline-none resize-none focus:border-[#3B82F6] transition-colors placeholder:text-[#94A3B8] text-[#F8FAFC]" />
              <Button variant="primary" size="md" type="submit" disabled={isSubmitting}>
                <Send size={20} className="mr-2" />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>

          {/* Socials */}
          <div className="bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[#F8FAFC]">Conéctate Conmigo</h3>
              <div className="space-y-6">
                {[
                  { href: "https://github.com/jManuel0", icon: <Github size={24} className="text-[#3B82F6]" />, label: "GitHub", handle: "@jManuel0" },
                  { href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", icon: <Linkedin size={24} className="text-[#3B82F6]" />, label: "LinkedIn", handle: "@Juan Manuel Ordoñez Armero" },
                  { href: "https://www.instagram.com/ordonezarmero_juan", icon: <Instagram size={24} className="text-[#3B82F6]" />, label: "Instagram", handle: "@ordonezarmero_juan" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg hover:bg-[#334155] hover:border-[#3B82F6] transition-all">
                    {s.icon}
                    <div className="flex-1">
                      <p className="font-medium text-[#F8FAFC]">{s.label}</p>
                      <p className="text-xs text-[#94A3B8]">{s.handle}</p>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform text-[#3B82F6]">→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#3B82F6]/20">
              <p className="text-sm text-[#94A3B8] leading-relaxed">Siempre abierto a nuevas oportunidades y colaboraciones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

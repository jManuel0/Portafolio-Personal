"use client";
import { useState } from "react";
import { Github, Linkedin, Send, Mail, Phone, MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

export default function Contact() {
  const { lang } = useApp();
  const tr = t[lang].contact;

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

  const infoCards = [
    { icon: <Mail size={28} className="text-[#3B82F6]" />, label: tr.email, value: "juanmaarmero30@gmail.com", href: "mailto:juanmaarmero30@gmail.com" },
    { icon: <Phone size={28} className="text-[#3B82F6]" />, label: tr.phone, value: "+57 317 314 5521", href: "tel:+573173145521" },
    { icon: <MapPin size={28} className="text-[#3B82F6]" />, label: tr.location, value: "Pasto Nariño, Colombia", href: "#" },
  ];

  const socials = [
    { href: "https://github.com/jManuel0", icon: <Github size={24} className="text-[#3B82F6]" />, label: "GitHub", handle: "@jManuel0" },
    { href: "https://www.linkedin.com/in/juan-manuel-ordoñez-armero-781577337", icon: <Linkedin size={24} className="text-[#3B82F6]" />, label: "LinkedIn", handle: "@Juan Manuel Ordoñez Armero" },
  ];

  return (
    <section id="contact" className="px-4 sm:px-8 py-24 sm:py-32 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle={tr.subtitle} title={tr.title} description={tr.desc} align="center" />

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {infoCards.map((item) => (
            <a key={item.label} href={item.href}
              className="rounded-lg p-6 sm:p-8 border text-center no-underline transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-[#3B82F6]/30">
                {item.icon}
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>{item.label}</h3>
              <p className="text-sm hover:text-[#3B82F6] transition-colors" style={{ color: "var(--text-secondary)" }}>{item.value}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 rounded-lg p-6 sm:p-10 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8" style={{ color: "var(--text-primary)" }}>{tr.formTitle}</h3>
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-lg" style={{ color: "var(--text-primary)" }}>
                {tr.success}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                  placeholder={tr.firstName} required
                  className="w-full rounded-lg px-5 py-4 border focus:outline-none focus:border-[#3B82F6] transition-colors"
                  style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                  placeholder={tr.lastName} required
                  className="w-full rounded-lg px-5 py-4 border focus:outline-none focus:border-[#3B82F6] transition-colors"
                  style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
              </div>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder={tr.emailField} required
                className="w-full rounded-lg px-5 py-4 border focus:outline-none focus:border-[#3B82F6] transition-colors"
                style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                placeholder={tr.subject} required
                className="w-full rounded-lg px-5 py-4 border focus:outline-none focus:border-[#3B82F6] transition-colors"
                style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder={tr.messageField} rows={6} required
                className="w-full rounded-lg px-5 py-4 border focus:outline-none resize-none focus:border-[#3B82F6] transition-colors"
                style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
              <Button variant="primary" size="md" type="submit" disabled={isSubmitting}>
                <Send size={18} className="mr-2" />
                {isSubmitting ? tr.sending : tr.send}
              </Button>
            </form>
          </div>

          {/* Socials */}
          <div className="rounded-lg p-6 sm:p-8 border flex flex-col justify-between" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8" style={{ color: "var(--text-primary)" }}>{tr.connect}</h3>
              <div className="space-y-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-lg border transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20"
                    style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border)" }}>
                    {s.icon}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium" style={{ color: "var(--text-primary)" }}>{s.label}</p>
                      <p className="text-xs truncate" style={{ color: "var(--text-secondary)" }}>{s.handle}</p>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform text-[#3B82F6]">→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{tr.connectDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

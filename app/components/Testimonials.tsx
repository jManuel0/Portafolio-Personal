"use client";
import { useState, useEffect } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";
import { Quote, Send, Loader2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", position: "", content: "", rating: 5 });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => setTestimonials(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setForm({ name: "", position: "", content: "", rating: 5 });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Hubo un error al enviar. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="px-8 py-32 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Testimonios" title="Qué Dicen de Mí"
          description="Opiniones de profesores, compañeros y clientes sobre mi trabajo y dedicación." align="center" />

        {/* Testimonials grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 size={32} className="animate-spin text-[#3B82F6]" />
          </div>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-[#94A3B8] py-16">Aún no hay testimonios aprobados. ¡Sé el primero!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t) => (
              <Card key={t.id}>
                <div className="flex justify-between items-start mb-6">
                  <Quote size={32} className="text-[#3B82F6]/20" />
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-8 italic">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-[#3B82F6] text-lg">★</span>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#3B82F6]/20">
                  <p className="font-bold mb-1 text-[#F8FAFC]">{t.name}</p>
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{t.position}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1E293B] border border-[#3B82F6]/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">Deja tu testimonio</h3>
            <p className="text-sm text-[#94A3B8] mb-8">¿Trabajaste conmigo o tomaste alguna clase juntos? Me encantaría escuchar tu opinión.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-2">Nombre</label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre" required
                    className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-2">Cargo / Rol</label>
                  <input type="text" value={form.position} onChange={e => setForm({ ...form, position: e.target.value })}
                    placeholder="Ej: Docente, Compañero..."
                    className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-3">Calificación</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setForm({ ...form, rating: star })}
                      onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(0)}
                      className="text-2xl transition-transform hover:scale-110">
                      <span className={(hoveredStar || form.rating) >= star ? "text-[#3B82F6]" : "text-[#334155]"}>★</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-2">Mensaje</label>
                <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}
                  placeholder="Escribe tu testimonio aquí..." rows={4} required
                  className="w-full bg-[#0F172A] border border-[#3B82F6]/20 rounded-lg px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors resize-none" />
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                {submitted ? "¡Gracias por tu testimonio! 🎉" : submitting ? <Loader2 size={16} className="animate-spin" /> : <><Send size={16} /> Enviar testimonio</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { Quote, Send, Loader2 } from "lucide-react";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const { lang } = useApp();
  const tr = t[lang].testimonials;

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
        body: JSON.stringify({
          name: form.name.trim(),
          position: form.position.trim(),
          content: form.content.trim(),
          rating: form.rating,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setForm({ name: "", position: "", content: "", rating: 5 });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError(tr.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="px-4 sm:px-8 py-24 sm:py-32 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle={tr.subtitle} title={tr.title} description={tr.desc} align="center" />

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 size={32} className="animate-spin text-[#3B82F6]" />
          </div>
        ) : testimonials.length === 0 ? (
          <p className="text-center py-16" style={{ color: "var(--text-secondary)" }}>{tr.empty}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-xl p-6 border transition-all hover:shadow-lg hover:shadow-[#3B82F6]/20"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="mb-6"><Quote size={32} className="text-[#3B82F6]/20" /></div>
                <p className="text-sm leading-relaxed mb-8 italic" style={{ color: "var(--text-secondary)" }}>&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <span key={i} className="text-[#3B82F6] text-lg">★</span>)}
                </div>
                <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <p className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{t.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl p-6 sm:p-8 border w-full min-w-0" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{tr.formTitle}</h3>
            <p className="text-sm mb-6 sm:mb-8" style={{ color: "var(--text-secondary)" }}>{tr.formDesc}</p>
            <form onSubmit={handleSubmit} className="space-y-5 w-full min-w-0 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-w-0">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-secondary)" }}>{tr.name}</label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder={tr.name} required spellCheck autoCorrect="on"
                    className="w-full min-w-0 rounded-lg px-4 py-3 text-sm border focus:outline-none focus:border-[#3B82F6] transition-colors"
                    style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis" }} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-secondary)" }}>{tr.role}</label>
                  <input type="text" value={form.position} onChange={e => setForm({ ...form, position: e.target.value })}
                    placeholder={tr.rolePlaceholder} spellCheck autoCorrect="on"
                    className="w-full min-w-0 rounded-lg px-4 py-3 text-sm border focus:outline-none focus:border-[#3B82F6] transition-colors"
                    style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)", overflow: "hidden" }} />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider mb-3" style={{ color: "var(--text-secondary)" }}>{tr.rating}</label>
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
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-secondary)" }}>{tr.message}</label>
                <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}
                  placeholder={tr.messagePlaceholder} rows={4} required spellCheck autoCorrect="on"
                  className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  style={{ backgroundColor: "var(--input-bg)", borderColor: "var(--border)", color: "var(--text-primary)" }} />
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                {submitted ? tr.success : submitting ? <Loader2 size={16} className="animate-spin" /> : <><Send size={16} /> {tr.submit}</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

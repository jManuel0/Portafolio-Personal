"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { useApp } from "../context/AppContext";
import { t } from "../i18n/translations";

const icons = [
  <svg key="1" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  <svg key="2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="3" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2" /><line x1="8" y1="22" x2="16" y2="22" /><line x1="12" y1="18" x2="12" y2="22" /></svg>,
  <svg key="4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
  <svg key="5" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>,
  <svg key="6" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>,
];

export default function Services() {
  const { lang } = useApp();
  const tr = t[lang].services;

  return (
    <section id="skills" className="px-4 sm:px-8 py-24 sm:py-32 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle={tr.subtitle} title={tr.title} description={tr.desc} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tr.items.map((service, i) => (
            <div key={service.title}
              className="rounded-xl px-6 sm:px-8 py-10 sm:py-12 flex flex-col items-center text-center transition-colors duration-200"
              style={{ backgroundColor: "var(--bg-card)" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-card-hover)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--bg-card)")}>
              <div className="mb-6">{icons[i]}</div>
              <h3 className="text-base font-bold mb-4" style={{ color: "var(--text-primary)" }}>{service.title}</h3>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-secondary)" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

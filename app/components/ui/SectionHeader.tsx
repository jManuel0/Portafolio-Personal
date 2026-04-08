interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ subtitle, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}>
      {subtitle && (
        <p className="text-sm mb-3 sm:mb-4 uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>▸ {subtitle}</p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: "var(--text-primary)" }}>{title}</h2>
      {description && (
        <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>{description}</p>
      )}
    </div>
  );
}

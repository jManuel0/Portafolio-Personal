interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ subtitle, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}>
      {subtitle && (
        <p className="text-sm text-[#94A3B8] mb-4 uppercase tracking-widest">▸ {subtitle}</p>
      )}
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#F8FAFC]">{title}</h2>
      {description && (
        <p className="text-base text-[#94A3B8] leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  );
}

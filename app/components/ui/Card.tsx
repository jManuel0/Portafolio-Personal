interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-[#1E293B] border border-[#3B82F6]/20 rounded-lg p-8 hover:bg-[#334155] hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all ${className}`}>
      {children}
    </div>
  );
}

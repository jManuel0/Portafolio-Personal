"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#3B82F6] text-white rounded-lg flex items-center justify-center hover:bg-[#1E3A8A] transition-all duration-300 shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
      <ArrowUp size={20} />
    </button>
  );
}

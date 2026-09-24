import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "cream" | "sage-tint" | "dark";
}

export function Section({ children, id, className = "", background = "cream" }: SectionProps) {
  const bgClasses = {
    "cream": "bg-[var(--color-brand-cream)]",
    "sage-tint": "bg-[#F4F6F0]",
    "dark": "bg-[var(--color-brand-deep-green)]",
  };

  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 scroll-mt-24 ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}

import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "cream" | "sage-tint" | "dark";
}

export function Section({ children, id, className = "", background = "cream" }: SectionProps) {
  const bgClasses = {
    "cream": "bg-[#F8F7F4]",
    "sage-tint": "bg-[#FFFFFF]",
    "dark": "bg-[#F3F0EA]",
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

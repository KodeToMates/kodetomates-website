import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, heading, subtext, centered = false }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={`flex flex-col gap-3 mb-12 max-w-2xl ${centered ? "mx-auto text-center items-center" : "text-left items-start"}`}>
        {eyebrow && (
          <span className="text-[var(--color-brand-clay)] font-bold text-sm tracking-widest uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-deep-green)] tracking-tight">
          {heading}
        </h2>
        {subtext && (
          <p className="text-lg text-[var(--color-brand-deep-green)]/70 mt-2">
            {subtext}
          </p>
        )}
      </div>
    </Reveal>
  );
}

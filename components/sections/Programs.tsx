import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { PROGRAMS } from "../../lib/content";

export function Programs() {
  return (
    <Section id="programs" background="sage-tint">
      <Container>
        <SectionHeading 
          eyebrow="Our Curriculums" 
          heading={PROGRAMS.heading} 
          centered 
          subtext="Whether you're writing your first line of code or prepping for system design interviews, we have a path for you." 
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {PROGRAMS.items.map((program, i) => (
            <Reveal key={i} delay={i * 150} className="flex">
              <div className={`relative flex flex-col p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 w-full ${
                program.featured 
                  ? "bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-hover)] border-transparent text-white shadow-xl shadow-[var(--color-brand-primary)]/20" 
                  : "bg-[var(--color-brand-surface)] border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/40 text-[#17202A]"
              }`}>
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#17202A] border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-6">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    program.featured ? "bg-white/20 text-white" : "bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]"
                  }`}>
                    {program.level}
                  </span>
                  <span className={`text-sm font-semibold ${program.featured ? "text-white/80" : "text-[var(--color-brand-secondary-text)]"}`}>
                    • {program.duration}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${program.featured ? "text-white" : "text-[#17202A]"}`}>{program.title}</h3>
                
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {program.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={program.featured ? "text-white font-bold" : "text-[var(--color-brand-primary)] font-bold"}>✓</span>
                      <span className={program.featured ? "text-white/90" : "text-[var(--color-brand-secondary-text)]"}>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {program.tech.map((tech, idx) => (
                    <span key={idx} className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                      program.featured ? "bg-black/20 text-white" : "bg-[#17202A]/5 text-[var(--color-brand-secondary-text)]"
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a href="#" className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full transition-all ${
                  program.featured 
                    ? "bg-[#17202A] text-white hover:bg-[#17202A]/90 shadow-md" 
                    : "bg-[var(--color-brand-surface)] text-[#17202A] hover:bg-[var(--color-brand-primary)] hover:text-white border border-[var(--color-brand-border)] shadow-sm"
                }`}>
                  View syllabus &rarr;
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

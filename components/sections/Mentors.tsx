import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { MENTORS } from "../../lib/content";

export function Mentors() {
  return (
    <Section background="cream">
      <Container>
        <SectionHeading 
          eyebrow="Mentorship" 
          heading="Learn from the best" 
          subtext="Our mentors are industry veterans who have built products at scale."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((mentor, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-[var(--color-brand-surface)] rounded-3xl p-6 border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-hover)] text-white text-2xl font-bold flex items-center justify-center mb-4 shadow-md shadow-[var(--color-brand-primary)]/20">
                  {mentor.initials}
                </div>
                <h3 className="text-lg font-bold text-[#17202A]">{mentor.name}</h3>
                <p className="text-[var(--color-brand-secondary-text)] text-sm mb-2">{mentor.role}</p>
                <p className="text-[var(--color-brand-primary)] font-semibold text-sm mb-6">@ {mentor.company}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {mentor.skills.map((skill, idx) => (
                    <span key={idx} className="bg-[#17202A]/5 text-[var(--color-brand-secondary-text)] text-xs font-bold px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

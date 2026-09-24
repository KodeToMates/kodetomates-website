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
              <div className="bg-white rounded-3xl p-6 border border-[var(--color-brand-tan)]/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--color-brand-sage)] text-white text-2xl font-bold flex items-center justify-center mb-4 shadow-inner">
                  {mentor.initials}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-brand-deep-green)]">{mentor.name}</h3>
                <p className="text-[var(--color-brand-deep-green)]/70 text-sm mb-2">{mentor.role}</p>
                <p className="text-[var(--color-brand-clay)] font-semibold text-sm mb-6">@ {mentor.company}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {mentor.skills.map((skill, idx) => (
                    <span key={idx} className="bg-[var(--color-brand-light-sage)]/10 text-[var(--color-brand-sage)] text-xs font-bold px-2 py-1 rounded-md">
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

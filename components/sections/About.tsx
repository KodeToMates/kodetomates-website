import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ABOUT } from "../../lib/content";

export function About() {
  return (
    <Section id="about" background="sage-tint">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              eyebrow={ABOUT.eyebrow} 
              heading={ABOUT.heading} 
            />
            <div className="flex flex-col gap-6 text-lg text-[var(--color-brand-deep-green)]/80">
              {ABOUT.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <button className="mt-8 px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-bold bg-[var(--color-brand-sage)] text-white hover:bg-[var(--color-brand-deep-green)] transition-all shadow-md">
                Learn more about our mission &rarr;
              </button>
            </Reveal>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {ABOUT.features.map((feature, i) => (
              <Reveal key={i} delay={200 + i * 100} className="flex">
                <div className="flex flex-col bg-white p-6 lg:p-8 rounded-3xl border border-[var(--color-brand-tan)]/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 w-full">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--color-brand-light-sage)]/10 text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-brand-deep-green)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--color-brand-deep-green)]/70">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

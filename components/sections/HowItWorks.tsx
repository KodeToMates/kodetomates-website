import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { HOW_IT_WORKS } from "../../lib/content";

export function HowItWorks() {
  return (
    <Section background="cream">
      <Container>
        <SectionHeading 
          eyebrow="The Journey" 
          heading={HOW_IT_WORKS.heading} 
          centered 
        />
        
        <div className="mt-16 relative">
          {/* Horizontal line for md+, vertical for mobile */}
          <div className="absolute top-12 left-6 md:top-12 md:left-[10%] bottom-12 md:bottom-auto md:right-[10%] md:h-0.5 w-0.5 md:w-auto bg-[var(--color-brand-light-sage)]/20">
            {/* Animated draw line could go here with a scroll-based width hook, using simple CSS for now */}
            <div className="absolute top-0 left-0 h-full w-full bg-[var(--color-brand-sage)] origin-left md:animate-[draw_2s_ease-out_forwards]" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-8 md:text-center">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-brand-sage)] text-white font-bold text-xl flex items-center justify-center shadow-lg ring-4 ring-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-brand-deep-green)] mb-2">{step.title}</h3>
                    <p className="text-[var(--color-brand-deep-green)]/70">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

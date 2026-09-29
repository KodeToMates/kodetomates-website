import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { TESTIMONIALS } from "../../lib/content";

export function Testimonials() {
  return (
    <Section background="sage-tint">
      <Container>
        <SectionHeading 
          eyebrow="Wall of love" 
          heading="Don't just take our word for it" 
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={i} delay={i * 150} className="flex">
              <div className="bg-[var(--color-brand-surface)] rounded-3xl p-8 border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/40 shadow-sm flex flex-col h-full relative">
                <div className="text-[var(--color-brand-primary)] text-4xl font-serif absolute top-6 left-6 opacity-30">&quot;</div>
                
                <div className="flex gap-1 text-[var(--color-brand-primary)] mb-6 z-10">
                  {"★★★★★".split("").map((star, idx) => (
                    <span key={idx}>{star}</span>
                  ))}
                </div>
                
                <p className="text-[#17202A] text-lg mb-8 italic z-10 flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4 border-t border-[var(--color-brand-border)] pt-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center font-bold text-white shadow-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17202A] text-sm">{testimonial.name}</h4>
                    <p className="text-[var(--color-brand-secondary-text)] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

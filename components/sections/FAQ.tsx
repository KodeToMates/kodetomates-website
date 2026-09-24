"use client";

import React, { useState } from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { FAQ as FAQ_DATA } from "../../lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="sage-tint">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            eyebrow="Got questions?" 
            heading="Frequently asked questions" 
            centered
          />

          <div className="mt-12 flex flex-col gap-4">
            {FAQ_DATA.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className={`bg-white rounded-2xl border transition-colors ${isOpen ? "border-[var(--color-brand-sage)]" : "border-[var(--color-brand-tan)]/40"} overflow-hidden shadow-sm`}>
                    <button 
                      onClick={() => toggle(i)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-brand-sage)]"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-lg text-[var(--color-brand-deep-green)]">{item.question}</span>
                      <span className={`w-8 h-8 rounded-full bg-[var(--color-brand-light-sage)]/10 text-[var(--color-brand-sage)] flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div 
                      className="transition-all duration-300 ease-in-out" 
                      style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="px-6 pb-6 text-[var(--color-brand-deep-green)]/70">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

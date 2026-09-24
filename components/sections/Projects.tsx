import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { PROJECTS } from "../../lib/content";

export function Projects() {
  return (
    <Section id="projects" background="sage-tint">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading 
            eyebrow="Portfolio" 
            heading={PROJECTS.heading} 
            subtext="Real products shipped by our community."
          />
          <Reveal delay={200}>
            <button className="px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-bold bg-white text-[var(--color-brand-deep-green)] border border-[var(--color-brand-light-sage)]/30 hover:bg-[var(--color-brand-cream)] shadow-sm transition-all whitespace-nowrap">
              See all projects &rarr;
            </button>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.items.map((project, i) => (
            <Reveal key={i} delay={i * 150} className="flex">
              <div className="flex flex-col bg-white rounded-3xl border border-[var(--color-brand-tan)]/40 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 w-full">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-[var(--color-brand-light-sage)]/20 to-[var(--color-brand-tan)]/40 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-brand-sage)] opacity-50">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[var(--color-brand-deep-green)] mb-2">{project.title}</h3>
                  <p className="text-[var(--color-brand-deep-green)]/70 mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs font-bold px-2 py-1 rounded-md bg-[var(--color-brand-light-sage)]/10 text-[var(--color-brand-deep-green)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-[var(--color-brand-light-sage)]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {project.builders.map((_, idx) => (
                          <div key={idx} className="w-6 h-6 rounded-full bg-[var(--color-brand-sage)] border border-white" />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-[var(--color-brand-deep-green)]/70">
                        {project.builders.join(" & ")}
                      </span>
                    </div>
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

import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { COMMUNITY } from "../../lib/content";

export function Community() {
  return (
    <Section id="community" background="cream">
      <Container>
        <div className="bg-[var(--color-brand-deep-green)] rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl overflow-hidden relative">
          
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-sage)]/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-tan)]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-[var(--color-brand-cream)]">
              <Reveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                  {COMMUNITY.heading}
                </h2>
                <p className="text-lg text-[var(--color-brand-cream)]/80 max-w-xl mb-10">
                  {COMMUNITY.text}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-md transition-all">
                    Join Discord &rarr;
                  </button>
                  <button className="px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-sm transition-all">
                    Attend a demo day
                  </button>
                </div>
              </Reveal>
            </div>

            <div className="relative h-80 lg:h-full min-h-[320px] flex items-center justify-center">
              {COMMUNITY.chips.map((chip, i) => (
                <Reveal key={i} delay={i * 100} className="absolute" style={{
                  top: `${20 + (i * 15)}%`,
                  left: `${(i % 2 === 0 ? 10 : 50)}%`,
                }}>
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white font-medium shadow-lg animate-float-slow" style={{ animationDelay: `${i * 0.5}s` }}>
                    {chip}
                  </div>
                </Reveal>
              ))}

              <Reveal delay={500} className="absolute bottom-10 right-10">
                <div className="bg-[var(--color-brand-cream)] p-5 rounded-2xl shadow-2xl max-w-[240px] rotate-3 hover:rotate-0 transition-transform cursor-default">
                  <div className="text-[var(--color-brand-clay)] font-bold text-xs uppercase mb-1">Upcoming Event</div>
                  <div className="text-[var(--color-brand-deep-green)] font-bold mb-3">{COMMUNITY.event.title}</div>
                  <div className="flex items-center gap-2 text-[var(--color-brand-deep-green)]/70 text-sm mb-4">
                    <span>📅</span> {COMMUNITY.event.date}
                  </div>
                  <button className="w-full py-2 bg-[var(--color-brand-sage)] text-white rounded-lg font-bold text-sm hover:bg-[var(--color-brand-deep-green)] transition-colors">
                    RSVP
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

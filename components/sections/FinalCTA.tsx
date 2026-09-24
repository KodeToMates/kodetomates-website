import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <Section background="cream">
      <Container>
        <Reveal>
          <div className="relative w-full bg-gradient-to-br from-[var(--color-brand-sage)] to-[var(--color-brand-deep-green)] rounded-[3rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl">
            
            {/* Drifting Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-light-sage)]/20 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-brand-clay)]/20 rounded-full blur-[80px] pointer-events-none animate-float-slow" style={{ animationDelay: '-3s' }} />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Ready to build with your mates?
              </h2>
              <p className="text-xl text-[var(--color-brand-cream)]/90 mb-10">
                Join 500+ developers shipping real code, reviewing PRs, and landing jobs together.
              </p>
              
              <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-tan)] backdrop-blur-sm"
                />
                <button type="submit" className="px-8 py-4 rounded-full bg-white text-[var(--color-brand-deep-green)] font-bold hover:bg-[var(--color-brand-cream)] transition-all shadow-lg whitespace-nowrap">
                  Join the waitlist
                </button>
              </form>
              <p className="text-[var(--color-brand-cream)]/60 text-sm mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-tan)]"></span>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

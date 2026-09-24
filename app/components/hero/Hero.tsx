import React from 'react';
import Link from 'next/link';
import HeroNav from './HeroNav';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col min-h-[calc(100svh-60px)]">
      <HeroNav />
      
      <div className="relative z-10 w-full flex-grow flex flex-col justify-center pt-4 pb-12">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-8 px-5 lg:px-6 text-left">
            
            {/* Left Column: Copy & CTA */}
            <div className="relative z-20 flex flex-col w-full max-w-[600px] mx-auto lg:mx-0">
              
              <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 bg-white/70 backdrop-blur-md border border-[var(--color-brand-clay)]/30 rounded-full shadow-sm mb-5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-brand-kode-green)]/15">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-brand-kode-green)]"></span>
                </span>
                <span className="text-[0.68rem] font-bold tracking-[0.11em] uppercase text-[var(--color-brand-deep-forest)] font-mono">
                  A SMALL TEAM. BIG IDEAS. BUILT TOGETHER.
                </span>
              </div>

              <h1 className="text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-[var(--color-brand-deep-forest)] mb-5 max-w-[560px]">
                We build <br className="hidden lg:block" />
                <span className="text-[var(--color-brand-kode-green)] relative">digital experiences</span> <br className="hidden lg:block" />
                that solve <br className="hidden lg:block" />
                <span className="text-[var(--color-brand-clay)] relative">real problems
                  <svg className="absolute -left-[2%] -bottom-1 w-[104%] h-2.5 pointer-events-none overflow-visible" viewBox="0 0 240 18" preserveAspectRatio="none">
                    <path d="M4 11 Q65 3, 125 10 T236 7" className="stroke-[var(--color-brand-warm-sand)] stroke-[5px] fill-none stroke-linecap-round"/>
                  </svg>
                </span>.
              </h1>

              <p className="text-[1.05rem] lg:text-[1.125rem] leading-[1.6] text-[#556251] font-normal mb-8 max-w-[500px]">
                KodeToMates is a technology studio where we design, build, and experiment with modern web and AI-powered products — one meaningful project at a time.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <Link href="#projects" className="relative inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-br from-[var(--color-brand-deep-forest)] to-[#1e4437] text-[#FAF6EF] text-[0.95rem] font-semibold rounded-full border border-white/10 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg group">
                  <span className="relative z-10">Explore Our Work</span>
                  <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
                
                <Link href="#mates" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/80 backdrop-blur-md text-[var(--color-brand-deep-forest)] text-[0.95rem] font-semibold rounded-full border-[1.5px] border-[var(--color-brand-kode-green)]/30 shadow-sm transition-all hover:bg-white/95 hover:border-[var(--color-brand-kode-green)] hover:-translate-y-1 hover:shadow-md group">
                  <span>Meet the Mates</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Proof Row */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[var(--color-brand-deep-forest)]/10">
                <div className="flex items-center group">
                  <div className="w-8 h-8 rounded-full border-2 border-[var(--color-brand-bg)] -ml-2 first:ml-0 grid place-items-center text-[0.65rem] font-bold text-[#FAF6EF] bg-gradient-to-br from-[#17352B] to-[#33594A] z-[4] relative">KM</div>
                  <div className="w-8 h-8 rounded-full border-2 border-[var(--color-brand-bg)] -ml-2 first:ml-0 grid place-items-center text-[0.65rem] font-bold text-[#FAF6EF] bg-gradient-to-br from-[#55745F] to-[#7E9C88] z-[3] relative">AK</div>
                  <div className="w-8 h-8 rounded-full border-2 border-[var(--color-brand-bg)] -ml-2 first:ml-0 grid place-items-center text-[0.65rem] font-bold text-[#FAF6EF] bg-gradient-to-br from-[#B58A66] to-[#D8B88C] z-[2] relative">SR</div>
                  <div className="w-8 h-8 rounded-full border-2 border-[var(--color-brand-bg)] -ml-2 first:ml-0 grid place-items-center text-[0.65rem] font-bold text-[#FAF6EF] bg-gradient-to-br from-[#936848] to-[#B58A66] z-[1] relative">+24</div>
                </div>
                <div className="text-[0.85rem] text-[#556251] leading-[1.3]">
                  <div>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lime)] mr-1.5 align-middle"></span>
                    <strong className="text-[var(--color-brand-deep-forest)] font-bold">Shipping active cohorts</strong>
                  </div>
                  <span className="text-[0.75rem] opacity-85">Over 180+ verified production commits shipped</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <HeroVisual />

          </div>
        </div>
      </div>
    </section>
  );
}

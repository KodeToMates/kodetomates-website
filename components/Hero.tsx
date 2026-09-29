"use client";

import React from "react";
import { FlowButton } from "./ui/flow-button";

export function Hero() {
  return (
    <section className="relative w-full pt-4 pb-28 md:pt-6 md:pb-36 lg:pb-44 select-none">
      <div className="relative z-10 w-full max-w-[1315px] mx-auto px-6 md:px-10">
        <div className="max-w-[620px] lg:max-w-[700px] md:ml-5 lg:ml-10 xl:ml-12">
          {/* Useful Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 bg-white/70 backdrop-blur-md border border-[#17202A]/10 rounded-full shadow-[0_2px_8px_rgba(23,32,42,0.04)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-primary)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-primary)]" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#17202A]/90 font-mono">
              Creative Tech Studio &amp; Builder Ecosystem
            </span>
          </div>

          {/* Heading - KodeToMates text */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.08] font-extrabold text-[#17202A] tracking-tight mb-5">
            Build together.<br />
            Learn together.<br />
            <span className="text-[var(--color-brand-primary)]">Grow as mates.</span>
          </h1>

          {/* Paragraph - KodeToMates description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#212121] leading-relaxed max-w-xl mb-7">
            A community where developers pair up, ship real projects, and mentor each other—from your very first commit to landing your dream tech career.
          </p>

          {/* CTA - KodeToMates primary action */}
          <div className="flex items-center max-w-xl justify-center my-2 -translate-x-6 sm:-translate-x-10">
            <FlowButton
              size="lg"
              text="Start Building"
              href="/#join"
            />
          </div>

          {/* Supporting lines & feature highlights to enrich content and expand hero height */}
          <div className="mt-10 pt-7 border-t border-[#17202A]/10 max-w-xl">
            <p className="text-sm sm:text-base text-[#17202A]/80 font-normal leading-relaxed mb-6">
              Skip tutorial hell. We match you with peers to architect, code, and deploy live production software with guided feedback every step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-1">
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-brand-primary)] text-base leading-none mt-0.5">✦</span>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#17202A]">1:1 Pair Coding</h4>
                  <p className="text-xs text-[#8A929A] mt-0.5">Matched by skill level &amp; stack</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-brand-primary)] text-base leading-none mt-0.5">✦</span>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#17202A]">Active Sprints</h4>
                  <p className="text-xs text-[#8A929A] mt-0.5">Ship apps every 2–4 weeks</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-brand-primary)] text-base leading-none mt-0.5">✦</span>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#17202A]">Free &amp; Open</h4>
                  <p className="text-xs text-[#8A929A] mt-0.5">100% community-supported</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

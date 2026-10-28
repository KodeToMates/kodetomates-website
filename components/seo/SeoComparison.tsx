'use client'

import { Check, X } from 'lucide-react'

interface ComparisonRow {
  aspect: string
  traditional: string
  kodetomates: string
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    aspect: 'Implementation Level',
    traditional: 'Sends a PDF of recommendations for your busy developers to implement.',
    kodetomates: 'Full-stack engineers make pull requests directly to your Git repository.',
  },
  {
    aspect: 'Core Web Vitals & Speed',
    traditional: 'Installs bloat plugins or advises caching without touching source code.',
    kodetomates: 'Refactors asset pipelines, font streaming, and CSS for 100/100 Lighthouse.',
  },
  {
    aspect: 'Schema & Knowledge Graphs',
    traditional: 'Basic Yoast/RankMath meta tags without deeply nested entities.',
    kodetomates: 'Custom JSON-LD schema graphs connecting Brand, Services, FAQ, & Authors.',
  },
  {
    aspect: 'Content & Topic Modeling',
    traditional: 'Fluffy 500-word articles stuffed with repetitive exact-match keywords.',
    kodetomates: 'Comprehensive topical clusters engineered for high buying intent and AI Overviews.',
  },
  {
    aspect: 'Link Authority & PR',
    traditional: 'Low-quality guest post farms and spammy PBN directories.',
    kodetomates: 'Original industry data studies, developer tools, and tier-1 publication PR.',
  },
  {
    aspect: 'Success Metrics & Reporting',
    traditional: 'Vanity keyword positions and raw non-converting impressions.',
    kodetomates: 'Qualified pipeline, converted organic demo requests, and bottom-line revenue.',
  },
]

export function SeoComparison() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#12100E] text-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B] mb-3">
            AGENCY CHECKLISTS VS. CODEBASE ENGINEERING
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-white leading-tight mb-4">
            Why Traditional SEO Fails Modern Software Companies
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-[#A8A098] leading-relaxed">
            Google algorithms evaluate rendering efficiency, structured data integrity, and authentic user engagement signals. Here is why our engineering-first methodology consistently outranks traditional agencies.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-[28px] sm:rounded-[32px] bg-[#1A1715] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-white/[0.03] border-b border-white/[0.08] p-4 sm:p-6 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase">
            <div className="col-span-12 sm:col-span-4 text-[#8E867E]">Evaluation Criteria</div>
            <div className="hidden sm:block sm:col-span-4 text-white/50">Typical SEO Agency</div>
            <div className="hidden sm:block sm:col-span-4 text-[#FF914D] flex items-center gap-1.5">
              <span>KodeToMates Growth</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/[0.06]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 gap-3 sm:gap-6 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Column 1: Aspect Title */}
                <div className="col-span-12 sm:col-span-4 font-sans font-bold text-sm sm:text-[15px] text-white">
                  {row.aspect}
                </div>

                {/* Column 2: Traditional Agency */}
                <div className="col-span-12 sm:col-span-4 text-xs sm:text-sm font-sans text-white/60 leading-relaxed flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="sm:hidden font-semibold text-white/40 block text-[11px] uppercase mb-0.5">
                      Traditional Agency:
                    </span>
                    <span>{row.traditional}</span>
                  </div>
                </div>

                {/* Column 3: KodeToMates */}
                <div className="col-span-12 sm:col-span-4 text-xs sm:text-sm font-sans text-white/90 leading-relaxed flex items-start gap-2.5 bg-[#E4521B]/[0.06] sm:bg-transparent p-3 sm:p-0 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-[#E4521B]/20 border border-[#E4521B]/40 text-[#FF914D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="sm:hidden font-semibold text-[#FF914D] block text-[11px] uppercase mb-0.5">
                      KodeToMates:
                    </span>
                    <span className="text-[#F2ECE4] font-medium">{row.kodetomates}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeoComparison

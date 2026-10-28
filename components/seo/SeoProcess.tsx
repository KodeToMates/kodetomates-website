'use client'

import React from 'react'
import { Search, Code2, Layers, Award, BarChart3 } from 'lucide-react'

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Forensic Code & Crawl Audit',
    timeframe: 'Days 1 – 7',
    icon: Search,
    description:
      'We run deep algorithmic audits across your entire site structure, server logs, robots directives, and rendering pipeline to identify invisible ranking inhibitors.',
    deliverable: 'Complete Forensic Code & Technical SEO Roadmap',
  },
  {
    step: '02',
    title: 'Codebase Remediation & Speed',
    timeframe: 'Weeks 2 – 4',
    icon: Code2,
    description:
      'We open pull requests directly to fix crawl errors, implement JSON-LD schema graphs, optimize assets, and push Core Web Vitals to sub-second benchmarks.',
    deliverable: 'Production Git PRs with Verified 100/100 Lighthouse',
  },
  {
    step: '03',
    title: 'Topical Graph & Entity Hubs',
    timeframe: 'Month 2',
    icon: Layers,
    description:
      'We map high-intent keyword clusters and architect content hubs that demonstrate undeniable domain authority to Google and AI Overviews.',
    deliverable: 'High-Intent Content Engine & Semantic Knowledge Architecture',
  },
  {
    step: '04',
    title: 'Authority Building & Digital PR',
    timeframe: 'Month 3+',
    icon: Award,
    description:
      'We amplify your domain through verified technical whitepapers, data studies, developer publications, and legitimate contextual backlinks.',
    deliverable: 'Tier-1 Domain Authority & Trust Signals',
  },
  {
    step: '05',
    title: 'Search Telemetry & ARR Scaling',
    timeframe: 'Continuous',
    icon: BarChart3,
    description:
      'Real-time ranking tracking, conversion attribution modeling, and iterative updates to capture evolving search intent and new market opportunities.',
    deliverable: 'Monthly Board-Level Pipeline & Organic Revenue Reports',
  },
]

export function SeoProcess() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] text-[#161413]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14 sm:mb-18">
          <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B] mb-3">
            THE 5-PHASE SEARCH GROWTH ENGINE
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#161413] leading-tight mb-4">
            How We Take Your Domain from Overlooked to #1
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-[#6B645E] leading-relaxed">
            Predictable organic search rankings are never accidental. We apply a proven 5-phase engineering roadmap designed to build sustainable, compound search equity.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-6 rounded-[26px] bg-white border border-[#EAE5DE] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(228,82,27,0.1)] hover:border-[#E4521B]/40 transition-all duration-300"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans font-extrabold text-2xl sm:text-3xl text-[#E4521B]/80 tracking-tight">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] group-hover:bg-[#E4521B] text-[#6B645E] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#8E867E] mb-1">
                    {step.timeframe}
                  </div>

                  <h3 className="font-sans font-bold text-lg sm:text-[19px] tracking-[-0.02em] text-[#161413] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13.5px] text-[#6B645E] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Deliverable Pill */}
                <div className="pt-3 border-t border-[#F0EBE1] text-[11px] sm:text-xs font-sans text-[#E4521B] font-medium leading-snug">
                  <span className="text-[#8E867E] block text-[10px] uppercase font-semibold">
                    Key Deliverable:
                  </span>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SeoProcess

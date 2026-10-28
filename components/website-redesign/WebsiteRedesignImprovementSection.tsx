'use client'

import React from 'react'
import Link from 'next/link'
import Timeline, { JourneyItem } from '@/components/website-dev/Timeline'
import { BrandAccentLine, SlitHeading } from '@/components/ui'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const TOP_IMPROVEMENT_STEPS: JourneyItem[] = [
  {
    id: 'step-01-visual-design',
    step: '01',
    title: 'Visual design and brand consistency',
    content:
      'Refresh typography, colour, imagery, spacing, and page layouts.',
  },
  {
    id: 'step-03-content-structure',
    step: '03',
    title: 'Content structure',
    content:
      'Organise pages around visitor questions and business priorities.',
  },
  {
    id: 'step-05-performance-accessibility',
    step: '05',
    title: 'Performance and accessibility basics',
    content:
      'Identify issues with loading, readable content, contrast, keyboard use, and controls.',
  },
]

const BOTTOM_IMPROVEMENT_STEPS: JourneyItem[] = [
  {
    id: 'step-02-navigation-journeys',
    step: '02',
    title: 'Navigation and user journeys',
    content:
      'Make the paths to services, key information, and enquiries clearer.',
  },
  {
    id: 'step-04-responsive-layouts',
    step: '04',
    title: 'Responsive layouts',
    content:
      'Review how pages adapt to mobile, tablet, and desktop.',
  },
  {
    id: 'step-06-seo-migration',
    step: '06',
    title: 'SEO-aware migration',
    content:
      'Where applicable, plan URLs, redirects, metadata, and content retention to reduce avoidable disruption.',
  },
]

export function WebsiteRedesignImprovementSection() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full bg-[#0C0B0A] text-white selection:bg-primary-orange/30 selection:text-white rounded-t-[32px] rounded-b-[32px] sm:rounded-t-[48px] sm:rounded-b-[48px] lg:rounded-t-[56px] lg:rounded-b-[56px] border-t border-b border-white/10 shadow-2xl">
        {/* 1. Header Lead-in for the Pinned Horizontal Timeline Scroll */}
        <section className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 pt-10 sm:pt-12 lg:pt-14 pb-3 sm:pb-4 text-center">
          {/* Section Headline with Slit Reveal Animation */}
          <div className="max-w-3xl mx-auto">
            <SlitHeading
              id="what-we-can-improve-heading"
              align="center"
              lines={['What We Can Improve.']}
              slit={0}
              textColor="#FFFFFF"
              dotColor="#E4521B"
              className="text-[clamp(2.1rem,4.4vw,4rem)] leading-[1.08] tracking-[-0.03em]"
            />
          </div>

          {/* Signature Home Page Down Line with Dot */}
          <BrandAccentLine align="center" className="my-2.5" />

          {/* Scroll Instruction Cue */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest">
            <span>Scroll to Explore the 6 Focus Areas</span>
            <span className="animate-bounce text-primary-orange">↓</span>
          </div>
        </section>

        {/* 2. Pinned Horizontal GSAP Timeline (Same UI as Our Website Design Process) */}
        <Timeline
          title="What We Can Improve"
          periodLabel="01 to 06 · Targeted Upgrades & Enhancements"
          eyebrow="MODERNIZATION VECTORS · SYSTEMATIC IMPROVEMENT"
          textColor="#FFFFFF"
          mutedTextColor="#A1A1AA"
          activeColor="#E4521B"
          backgroundColor="#0C0B0A"
          imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
          imageAlt="KodeToMates website redesign and UX modernization in action"
          topJourneyData={TOP_IMPROVEMENT_STEPS}
          bottomJourneyData={BOTTOM_IMPROVEMENT_STEPS}
          duration={1.2}
          scrollDuration={1.2}
        />

        {/* 3. Bottom Transition & Conversion Card */}
        <section className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 pt-10 sm:pt-14 pb-16 sm:pb-20">
          <div className="rounded-[28px] bg-white/[0.04] border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.5)] hover:border-primary-orange/40 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-primary-orange text-xs font-sans font-bold uppercase tracking-[0.14em] mb-2.5">
                  <Sparkles size={13} className="text-primary-orange" />
                  <span>Systematic Redesign Methodology</span>
                </div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-[-0.02em] mb-2">
                  Ready to Modernize Your Digital Platform?
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] text-white/70 leading-relaxed">
                  From brand consistency and fluid mobile layouts to sub-second load times and zero-downtime SEO migrations, we systematically transform underperforming digital touchpoints into high-conversion assets.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary-orange hover:bg-white hover:text-heading-dark text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Start Your Redesign Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Before &amp; After</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WebsiteRedesignImprovementSection

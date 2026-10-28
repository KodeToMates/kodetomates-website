'use client'

import React from 'react'
import Link from 'next/link'
import Timeline, { JourneyItem } from './Timeline'
import { BrandAccentLine, SlitHeading } from '@/components/ui'
import { ArrowUpRight } from 'lucide-react'

const TOP_PROCESS_STEPS: JourneyItem[] = [
  {
    id: 'step-01-discover',
    step: '01',
    title: 'Discover',
    content:
      'Understand your business, audience, goals, content, required features, and practical constraints.',
  },
  {
    id: 'step-03-design',
    step: '03',
    title: 'Design',
    content:
      'Develop the visual direction and page layouts, then review and refine them against the agreed goals.',
  },
  {
    id: 'step-05-test',
    step: '05',
    title: 'Test and refine',
    content:
      'Review content, layouts, links, forms, responsiveness, accessibility basics, and agreed functionality.',
  },
]

const BOTTOM_PROCESS_STEPS: JourneyItem[] = [
  {
    id: 'step-02-plan',
    step: '02',
    title: 'Plan',
    content:
      'Define the site structure, key pages, navigation, and the main journeys visitors should be able to complete.',
  },
  {
    id: 'step-04-build',
    step: '04',
    title: 'Build',
    content:
      'If implementation is included, turn the approved design into responsive pages and working interactions.',
  },
  {
    id: 'step-06-handover',
    step: '06',
    title: 'Handover',
    content:
      'Deliver the agreed website and any relevant assets, access details, or guidance included in the project scope.',
  },
]

export function WebsiteDesignProcess() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full bg-[#0C0B0A] text-white selection:bg-primary-orange/30 selection:text-white rounded-t-[32px] rounded-b-[32px] sm:rounded-t-[48px] sm:rounded-b-[48px] lg:rounded-t-[56px] lg:rounded-b-[56px] border-t border-b border-white/10 shadow-2xl">
        {/* 1. Header Lead-in for the Pinned Horizontal Timeline Scroll */}
        <section className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 pt-10 sm:pt-12 lg:pt-14 pb-3 sm:pb-4 text-center">
          {/* Eyebrow Badge */}


          {/* Section Headline with Slit Reveal Animation */}
          <div className="max-w-3xl mx-auto">
            <SlitHeading
              id="design-process-heading"
              align="center"
              lines={['Our Website Design Process.']}
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
            <span>Scroll to Explore the 6 Phases</span>
            <span className="animate-bounce text-primary-orange">↓</span>
          </div>
        </section>

        {/* 2. Pinned Horizontal GSAP Timeline */}
        <Timeline
          title="Website Design Process"
          periodLabel="01 to 06 · Discovery to Handover"
          eyebrow="PHASES · METHODOLOGY"
          textColor="#FFFFFF"
          mutedTextColor="#A1A1AA"
          activeColor="#E4521B"
          backgroundColor="#0C0B0A"
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          imageAlt="KodeToMates creative team collaborating on website design"
          topJourneyData={TOP_PROCESS_STEPS}
          bottomJourneyData={BOTTOM_PROCESS_STEPS}
          duration={1.2}
        />

        {/* 3. Bottom Transition & Conversion Card */}
        <section className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 pt-10 sm:pt-14 pb-16 sm:pb-20">
          <div className="rounded-[28px] bg-white/[0.04] border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.5)] hover:border-primary-orange/40 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-primary-orange text-xs font-sans font-bold uppercase tracking-[0.14em] mb-2.5">

                  <span>Transparent Delivery Timeline</span>
                </div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-[-0.02em] mb-2">
                  Ready to Start Phase 01: Discovery?
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] text-white/70 leading-relaxed">
                  Let&apos;s map out your website requirements, target audience, and architecture. Book an initial kickoff call to discuss your roadmap.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary-orange hover:bg-white hover:text-heading-dark text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Begin Your Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Shipped Work</span>
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

export default WebsiteDesignProcess

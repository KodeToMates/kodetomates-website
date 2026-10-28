'use client'

import React from 'react'
import Link from 'next/link'
import {
  ScrollRevealContentA,
  ItemContent,
} from './ScrollRevealContent'
import { BrandAccentLine, SlitHeading } from '@/components/ui'
import { ArrowUpRight } from 'lucide-react'

const UI_UX_PILLARS: ItemContent[] = [
  {
    title: 'Clear Visual Hierarchy & Intuitive Navigation',
    description:
      'We use deliberate headings, purposeful spacing, and sharp contrast so visitors grasp what matters first. Related information is grouped logically with familiar labels, ensuring users move seamlessly through the experience without friction.',
    badge: 'Structure & Flow',
    tags: [
      'Visual Contrast Hierarchy',
      'Logical Content Grouping',
      'Familiar Navigation Labels',
      'Effortless Scanning Speed',
    ],
    image: {
      url: '/Image-v1/dev_page/Clear-Visual-Hierarchy.jpg',
      width: 1200,
      height: 900,
      alt: 'Clear visual hierarchy and intuitive website navigation architecture',
    },
  },
  {
    title: 'Consistent Components & Meaningful Interactions',
    description:
      'Buttons, forms, cards, menus, and dialogs remain unified across every page. Every interactive button, link, hover cue, and feedback state behaves predictably, eliminating user hesitation and reinforcing brand confidence.',
    badge: 'Components & States',
    tags: [
      'Unified Component Library',
      'Predictable Feedback States',
      'Accessible Form Validation',
      'Smooth Micro-Interactions',
    ],
    image: {
      url: '/Image-v1/dev_page/Consistent-Components.jpg',
      width: 1200,
      height: 900,
      alt: 'Consistent UI components and interactive design system',
    },
  },
  {
    title: 'Readable Content & Accessibility-Minded Design',
    description:
      'Clear language, sensible line lengths, and generous breathing room support effortless comprehension. Built from the ground up with strict keyboard navigation, visible focus indicators, WCAG color contrast, and descriptive labels.',
    badge: 'Accessibility & Craft',
    tags: [
      'WCAG AA Contrast Standards',
      'Full Keyboard Navigation',
      'Editorial Typography Rhythm',
      'Inclusive Focus Indicators',
    ],
    image: {
      url: '/Image-v1/dev_page/Readable-Content.jpg',
      width: 1200,
      height: 900,
      alt: 'Accessible and readable content design with editorial typography',
    },
  },
]

export function UiUxDesignScrollReveal() {
  return (
    <section
      id="ui-ux-design"
      className="relative w-full bg-white text-heading-dark border-t border-border-warm scroll-mt-24 pt-16 sm:pt-20 pb-16 sm:pb-20 selection:bg-primary-orange/20 selection:text-primary-orange"
      aria-labelledby="ui-ux-heading"
    >
      {/* 1. Section Header: Unclipped, beautifully spaced, and directly connected */}
      <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 text-center mb-8 sm:mb-12">
        {/* Eyebrow Badge */}


        {/* Main Section Headline with Slit Reveal Animation */}
        <div className="max-w-3xl mx-auto">
          <SlitHeading
            id="ui-ux-heading"
            align="center"
            lines={[`<span style="color: var(--color-primary-orange, #E4521B)">UI/UX Design That Makes</span> Sense.`]}
            slit={0}
            textColor="#161413"
            dotColor="#E4521B"
            className="text-[clamp(2.1rem,4.4vw,4rem)] leading-[1.08] tracking-[-0.03em]"
          />
        </div>

        {/* Signature Home Page Down Line with Dot */}
        <BrandAccentLine align="center" className="my-3" />

      </div>

      {/* 2. Interactive Scroll-Reveal 2-Column Presentation */}
      <ScrollRevealContentA items={UI_UX_PILLARS} />

      {/* 3. Bottom Conversion Action Prompt (Seamless with zero trailing gap) */}
      <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 mt-12 sm:mt-16">
        <div className="rounded-3xl bg-surface-sand border border-border-warm p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-primary-orange/30 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary-orange text-xs font-sans font-bold uppercase tracking-[0.14em] mb-2.5">

                <span>Human-Centric Interface Architecture</span>
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-heading-dark tracking-[-0.02em] mb-2">
                Ready for a Website Visitors Love to Use?
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] text-body-muted leading-relaxed">
                Whether creating a high-converting marketing landing page or a complex digital platform,
                we design clean interfaces that prioritize clarity, accessibility, and measurable conversion.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary-orange hover:bg-pill-black text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Discuss Your UI/UX Needs</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-surface-dim text-heading-dark border border-border-subtle font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Design Case Studies</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary-orange" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UiUxDesignScrollReveal

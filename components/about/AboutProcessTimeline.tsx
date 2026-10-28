'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { SlitHeading } from '@/components/ui'
import {
  Compass,
  Search,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  ChevronRight,
} from 'lucide-react'

interface ProcessStep {
  step: string
  title: string
  description: string
  badge: string
  image: string
  icon: React.ComponentType<{ className?: string }>
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We begin with conversations. We understand the business, its users, the challenges they face, and what success should look like.',
    badge: 'Discovery & Alignment',
    image: '/Image-v1/Home_page/Learn-together.jpg',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Explore',
    description:
      'We research possible approaches, share ideas, clarify requirements, and decide what is worth building first.',
    badge: 'Research & Feasibility',
    image: '/images/projects/community-sticky-notes.jpg',
    icon: Search,
  },
  {
    step: '03',
    title: 'Design',
    description:
      'We shape the experience through user flows, information architecture, interface design, and practical technical decisions.',
    badge: 'Architecture & UI/UX',
    image: '/images/services/website-dev.jpg',
    icon: Palette,
  },
  {
    step: '04',
    title: 'Build',
    description:
      'We develop in manageable steps, follow sound engineering practices, and share progress so everyone can understand how the solution is taking shape.',
    badge: 'Clean Implementation',
    image: '/Image-v1/Home_page/build-real-products.jpg',
    icon: Code2,
  },
  {
    step: '05',
    title: 'Test and learn',
    description:
      'We check functionality, usability, responsiveness, accessibility, and performance. We use feedback to identify what needs improvement.',
    badge: 'QA & Accessibility',
    image: '/images/projects/laptop-ai-desk.jpg',
    icon: CheckCircle2,
  },
  {
    step: '06',
    title: 'Deliver and improve',
    description:
      'We prepare the agreed solution for launch, document the work, and identify opportunities for future improvements and support.',
    badge: 'Launch & Evolution',
    image: '/Image-v1/Home_page/grow & lead.jpg',
    icon: Rocket,
  },
]

export function AboutProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()
  const targetRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollDistance, setScrollDistance] = useState(0)

  // Measure exact scroll overflow so Step 06 lands flush at the end before unpinning
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth
        const viewportWidth = window.innerWidth
        // Add comfort padding so the 6th card is well centered/visible
        const distance = Math.max(0, totalTrackWidth - viewportWidth + 96)
        setScrollDistance(distance)
      }
    }

    calculateDistance()
    window.addEventListener('resize', calculateDistance)
    return () => window.removeEventListener('resize', calculateDistance)
  }, [])

  // Scroll tracking across the pinned track
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  // Smooth transform mapping: glides horizontally across all 6 cards
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])
  const smoothX = useSpring(x, {
    stiffness: 85,
    damping: 26,
    mass: 0.8,
  })

  return (
    <section
      ref={targetRef}
      className="relative w-full bg-white border-t border-gray-100 overflow-clip selection:bg-[#E4521B]/20 selection:text-[#161413]"
    >
      {/* Soft Ambient Radial Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.05)_0%,transparent_70%)] blur-3xl -z-10"
      />

      {/* =========================================================================
          DESKTOP PINNED HORIZONTAL TIMELINE CANVAS (min-h-[300vh])
         ========================================================================= */}
      <div className="hidden lg:block relative min-h-[320vh]">
        {/* Sticky Stage pinned at viewport height */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 sm:py-12 overflow-hidden">
          
          {/* 1. Header Block */}
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
              <div className="max-w-2xl text-left">
                {/* Section Heading with Signature Slit Reveal */}
                <div className="mb-2 w-full">
                  <SlitHeading
                    id="process-timeline-heading"
                    align="left"
                    lines={['How we turn ideas <span style="color: var(--color-primary-orange)">into outcomes.</span>']}
                    showAccentLine={true}
                    slit={0.35}
                    dotColor="#E4521B"
                    textColor="#161413"
                    className="text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-[-0.03em]"
                  />
                </div>

                {/* Subtitle Takeaway */}
                <p className="font-sans text-[15px] sm:text-[16px] text-[#6B645E] leading-relaxed max-w-xl">
                  We aim to keep communication clear and progress visible throughout the process.
                </p>
              </div>

              {/* Right Side: Scroll Cue & Progress Bar */}
              <div className="flex flex-col items-start sm:items-end gap-2.5 pb-2 shrink-0 select-none">
                <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#161413] uppercase tracking-wider">
                  <span>Scroll horizontally</span>
                  <span className="text-[#E4521B] font-bold">→</span>
                </div>

                {/* Dynamic Progress Track */}
                <div className="w-44 h-1.5 bg-[#EAE4DC] rounded-full overflow-hidden">
                  <motion.div
                    style={{
                      scaleX: scrollYProgress,
                      transformOrigin: '0%',
                    }}
                    className="h-full bg-[#E4521B] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Pinned Horizontal Scrolling Track */}
          <div className="relative w-full flex-1 flex items-center overflow-visible my-auto">
            <motion.div
              ref={trackRef}
              style={{ x: shouldReduceMotion ? '0%' : smoothX }}
              className="flex items-stretch gap-6 sm:gap-8 px-6 sm:px-10 lg:px-14 shrink-0"
            >
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.step}
                    className="group relative w-[380px] sm:w-[420px] lg:w-[450px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-white border border-[#EAE4DC] shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_rgba(228,82,27,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
                  >
                    {/* Top Section: Photographic Visual with Badge & Ambient Contrast */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                      <Image
                        src={step.image}
                        alt={`${step.step} ${step.title}`}
                        fill
                        sizes="450px"
                        className="object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Top Step Number Pill */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/60 font-sans font-bold text-xs sm:text-[13px] text-[#161413] shadow-sm">
                          Stage {step.step}
                        </span>
                      </div>

                      {/* Top Right Icon Badge */}
                      <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-[#161413]/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                        <Icon className="w-4 h-4 text-[#FF914D]" />
                      </div>

                      {/* Bottom Category Badge inside Image */}
                      <div className="absolute bottom-3.5 left-4 z-10">
                        <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-white/90 drop-shadow-sm">
                          {step.badge}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Section: Narrative Content */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                      <div>
                        {/* Title Row */}
                        <div className="flex items-center gap-3 mb-2.5">
                          <h3 className="font-sans font-bold text-2xl sm:text-[26px] text-[#161413] tracking-[-0.02em] leading-snug group-hover:text-[#E4521B] transition-colors">
                            {step.step} — {step.title}
                          </h3>
                        </div>

                        {/* Description Body */}
                        <p className="font-sans text-[14px] sm:text-[15px] text-[#6B645E] leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Footer Progress Connector */}
                      <div className="pt-5 mt-5 border-t border-[#F0EBE1] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#E4521B] animate-pulse" />
                          <span className="font-sans font-semibold text-xs text-[#161413]">
                            Phase 0{idx + 1} of 06
                          </span>
                        </div>
                        <span className="font-sans font-semibold text-xs text-[#E4521B] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span>Verified Process</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* 3. Bottom Track Indicator Bar */}
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 shrink-0 pt-2">
            <div className="w-full flex items-center justify-between text-xs font-sans text-[#7A726B] border-t border-gray-100 pt-3">
              <span>01 Discover</span>
              <span>02 Explore</span>
              <span>03 Design</span>
              <span>04 Build</span>
              <span>05 Test and learn</span>
              <span>06 Deliver and improve</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET VERTICAL ACCORDION/STACK (< lg)
         ========================================================================= */}
      <div className="lg:hidden w-full px-5 sm:px-8 py-12 sm:py-16">
        {/* Mobile Header */}
        <div className="text-left mb-8">
          <SlitHeading
            id="mobile-process-heading"
            align="left"
            lines={['How we turn ideas <span style="color: var(--color-primary-orange)">into outcomes.</span>']}
            showAccentLine={true}
            slit={0}
            dotColor="#E4521B"
            textColor="#161413"
            className="text-2xl sm:text-3xl leading-tight tracking-[-0.03em] mb-2"
          />

          <p className="font-sans text-sm text-[#6B645E] leading-relaxed">
            We aim to keep communication clear and progress visible throughout the process.
          </p>
        </div>

        {/* Mobile Cards Stack */}
        <div className="flex flex-col gap-6">
          {PROCESS_STEPS.map((step) => {
            return (
              <div
                key={step.step}
                className="w-full rounded-2xl bg-white border border-[#EAE4DC] shadow-sm overflow-hidden flex flex-col text-left"
              >
                {/* Visual */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={step.image}
                    alt={`${step.step} ${step.title}`}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-white/95 font-sans font-bold text-xs text-[#161413] shadow-xs">
                    Stage {step.step}
                  </span>

                  <span className="absolute bottom-3 left-3.5 z-10 font-sans font-semibold text-[11px] uppercase tracking-wider text-white">
                    {step.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-sans font-bold text-xl text-[#161413] mb-2">
                    {step.step} — {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B645E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

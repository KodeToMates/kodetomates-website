'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from 'framer-motion'
import { SlitHeading } from '@/components/ui'
import {
  Compass,
  Code2,
  Users2,
  Target,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Layers,
} from 'lucide-react'

interface BeliefItem {
  number: string
  title: string
  headline: string
  description: string
  tag: string
  category: string
  image: string
  icon: React.ComponentType<{ className?: string }>
}

const BELIEFS: BeliefItem[] = [
  {
    number: '01',
    title: '01. Learn continuously',
    headline: 'Stay curious. Keep exploring.',
    description:
      'Technology never stands still, and neither should we. We explore new tools, strengthen our fundamentals, share knowledge, and learn from both successes and mistakes.',
    tag: 'Continuous Exploration · Shared Fundamentals',
    category: 'MINDSET',
    image: '/Image-v1/Home_page/Learn-together.jpg',
    icon: Compass,
  },
  {
    number: '02',
    title: '02. Build to understand',
    headline: 'Concepts into reality.',
    description:
      'Reading and experimenting are important, but building helps us connect the dots. We turn concepts into working projects, test our assumptions, and learn from the results.',
    tag: 'Working Projects · Tested Assumptions',
    category: 'CRAFT',
    image: '/Image-v1/Home_page/build-real-products.jpg',
    icon: Code2,
  },
  {
    number: '03',
    title: '03. Collaborate openly',
    headline: 'Better questions. Stronger solutions.',
    description:
      "Different perspectives lead to better questions and stronger solutions. We value sharing ideas, reviewing one another's work, communicating clearly, and helping each other improve.",
    tag: 'Shared Ideas · Peer Code Reviews',
    category: 'COMMUNITY',
    image: '/images/projects/community-sticky-notes.jpg',
    icon: Users2,
  },
  {
    number: '04',
    title: '04. Solve real problems',
    headline: 'Purpose over hype.',
    description:
      "We start by understanding the people and problems behind an idea. The aim isn't to use technology simply because it is new; it's to choose the right approach for a useful outcome.",
    tag: 'Human Needs · Purposeful Tech',
    category: 'PURPOSE',
    image: '/images/services/website-dev.jpg',
    icon: Target,
  },
  {
    number: '05',
    title: '05. Care about the details',
    headline: 'Enduring digital quality.',
    description:
      'Thoughtful interfaces, accessible experiences, maintainable code, performance, and reliability all matter. Quality comes from the decisions we make throughout a project, not just how it looks at launch.',
    tag: 'Accessible UX · Maintainable Code',
    category: 'ENGINEERING',
    image: '/images/hero-coding-creative.jpg',
    icon: Sparkles,
  },
  {
    number: '06',
    title: '06. Grow through feedback',
    headline: 'Listen. Iterate. Refine.',
    description:
      'A first version is a starting point. We listen, test, learn from real use, and refine our work to make it more useful over time.',
    tag: 'Live Testing · Continuous Evolution',
    category: 'EVOLUTION',
    image: '/Image-v1/Home_page/grow & lead.jpg',
    icon: TrendingUp,
  },
]

interface StackedCardProps {
  belief: BeliefItem
  idx: number
  total: number
  progress: MotionValue<number>
  shouldReduceMotion: boolean | null
}

function StackedBeliefCard({
  belief,
  idx,
  total,
  progress,
  shouldReduceMotion,
}: StackedCardProps) {
  const Icon = belief.icon
  const isAlt = idx % 2 === 1

  // Dedicated active scroll window for this card's stack transition
  const stepSize = 1 / (total - 1)
  const start = idx * stepSize
  const end = (idx + 1) * stepSize

  // Target scale when covered by the incoming card
  const targetScale = idx === total - 1 ? 1 : 1 - (total - 1 - idx) * 0.035

  // Scale down smoothly ONLY during this card's window, clamped outside
  const scale = useTransform(
    progress,
    [start, end],
    [1, targetScale],
    { clamp: true }
  )

  // Subtle dimming overlay so the card placed under physically feels in the background
  const dimOpacity = useTransform(
    progress,
    [start, end],
    [0, idx === total - 1 ? 0 : 0.16],
    { clamp: true }
  )

  // Stepping top offset centered around the viewport so all cards stay in full view
  const topOffset = `calc(-2.5vh + ${idx * 24}px)`

  return (
    <div className="h-[90vh] sm:h-screen w-full flex items-center justify-center sticky top-0 px-4 sm:px-6 pointer-events-none">
      <motion.div
        style={{
          transformOrigin: 'top center',
          scale: shouldReduceMotion ? 1 : scale,
          top: topOffset,
          zIndex: 10 + idx,
        }}
        className={`pointer-events-auto will-change-transform relative w-full max-w-[1360px] rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 lg:p-11 border shadow-[0_-14px_38px_rgba(0,0,0,0.07),0_20px_50px_rgba(0,0,0,0.08)] ${
          isAlt
            ? 'bg-[#FAF8F5] border-[#E8E2D9]'
            : 'bg-white border-[#EAE4DC]'
        }`}
      >
        {/* Soft shadow overlay when the card is placed under subsequent cards */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 0 : dimOpacity }}
          className="pointer-events-none absolute inset-0 bg-black/40 rounded-[28px] sm:rounded-[36px] z-20"
        />

        {/* Card Content Grid: Left Context & Right Photographic Visual */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT SIDE: Narrative Context */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* Header Row: Principle Badge & Category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 font-sans font-bold text-xs tracking-wider uppercase text-[#E4521B]">
                  Principle {belief.number}
                </span>
                <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#8C847C]">
                  {belief.category}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#161413] tracking-[-0.03em] leading-snug mb-2 sm:mb-3">
                {belief.title}
              </h3>

              {/* Subheadline Hook */}
              <p className="font-sans font-semibold text-base sm:text-lg text-[#E4521B] mb-3 sm:mb-4">
                {belief.headline}
              </p>

              {/* Body Narrative verbatim from user */}
              <p className="font-sans text-[15px] sm:text-[16.5px] text-[#6B645E] leading-relaxed max-w-xl">
                {belief.description}
              </p>
            </div>

            {/* Card Footer: Tag & Principle Step Indicator */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-8 border-t border-[#EAE4DC] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-sans font-semibold text-[#161413]">
                <CheckCircle2 className="w-4 h-4 text-[#E4521B] shrink-0" />
                <span>{belief.tag}</span>
              </div>
              <span className="font-sans font-semibold text-xs text-[#8C847C]">
                Stage {belief.number} of 06
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Photographic Visual */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EAE4DC] shadow-sm bg-neutral-100 group">
              <Image
                src={belief.image}
                alt={belief.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Top Right Floating Icon Badge */}
              <div className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-xl bg-[#161413]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                <Icon className="w-4 h-4 text-[#FF914D]" />
              </div>

              {/* Bottom Tag Badge */}
              <div className="absolute bottom-3.5 left-3.5 z-10 px-3 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/15 text-white font-sans font-semibold text-[11px] uppercase tracking-wider">
                KodeToMates Standard
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export function AboutBeliefsStackedCards() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // Track the continuous scroll across the entire stacking deck
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Physics-based spring smoothing: transforms mouse wheel ticks into liquid momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.15,
    restDelta: 0.0001,
  })

  const total = BELIEFS.length

  return (
    <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-20 bg-white border-t border-gray-100 overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#161413]">
      {/* Soft Ambient Radial Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.04)_0%,transparent_70%)] blur-3xl -z-10"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* ===================================================================
            SECTION HEADER
           =================================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-14 text-left border-b border-gray-100">
          <div className="max-w-2xl">
            <SlitHeading
              id="what-we-believe-in-heading"
              align="left"
              lines={['What we <span style="color: var(--color-primary-orange)">believe in.</span>']}
              showAccentLine={true}
              slit={0.35}
              dotColor="#E4521B"
              textColor="#161413"
              className="text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-[-0.03em] mb-2"
            />
            <p className="font-sans text-[15px] sm:text-[16.5px] text-[#6B645E] leading-relaxed max-w-xl">
              The core principles and mindset that guide how we learn, collaborate, and build solutions together.
            </p>
          </div>

          {/* Right Indicator: Deck Stack Cue & Progress Bar */}
          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 select-none">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#161413] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#E4521B]" />
              <span>01 to 06 Core Principles</span>
            </div>
            {/* Smooth Dynamic Progress Bar */}
            <div className="w-36 h-1.5 bg-[#EAE4DC] rounded-full overflow-hidden">
              <motion.div
                style={{
                  scaleX: smoothProgress,
                  transformOrigin: '0%',
                }}
                className="h-full bg-[#E4521B] rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ===================================================================
            FULL-WIDTH STACKED CARDS CONTAINER
            Each card has h-[90vh], pinning at sticky top-0.
            As you scroll down:
            - The above card scales down & dims slightly, sinking into the stack.
            - The incoming card slides directly over it, placing the above card
              UNDER the incoming card in true 3D physical deck fashion.
           =================================================================== */}
        <div ref={containerRef} className="relative w-full">
          {BELIEFS.map((belief, idx) => {
            return (
              <StackedBeliefCard
                key={belief.number}
                belief={belief}
                idx={idx}
                total={total}
                progress={smoothProgress}
                shouldReduceMotion={shouldReduceMotion}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

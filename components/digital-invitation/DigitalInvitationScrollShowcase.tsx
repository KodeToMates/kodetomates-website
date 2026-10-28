'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SlitHeading } from '@/components/ui'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import {
  MapPin,
  Music,
  Sparkles,
  ArrowRight,
  Send,
  Users,
  Clock,
  Palette,
  Share2,
  MessageCircle,
} from 'lucide-react'

interface HeadingItem {
  line1: string
  line2: string
}

const ROTATING_HEADINGS: HeadingItem[] = [
  {
    line1: 'Your Love Story,',
    line2: 'Beautifully Invited.',
  },
  {
    line1: 'Moments That Matter,',
    line2: 'Celebrated Together.',
  },
  {
    line1: 'Bespoke Invitations,',
    line2: 'Effortless RSVPs.',
  },
]

const SOCIAL_PROOF_AVATARS = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    alt: 'Guest 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    alt: 'Guest 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    alt: 'Guest 3',
  },
]

const HERO_TICKER_ITEMS = [
  'Your invitation website ready 2 – 3 business days',
  'Your invitation website ready 2 – 3 business days',
  'Your invitation website ready 2 – 3 business days',
  'Your invitation website ready 2 – 3 business days',
  'Your invitation website ready 2 – 3 business days',
  'Your invitation website ready 2 – 3 business days',
]

function TickerDiamondStar({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
    </svg>
  )
}

const INTERACTIVE_FEATURES = [
  {
    id: 'rsvp',
    icon: Users,
    badge: 'Real-Time Sync',
    title: 'One-Tap RSVP & Headcount',
    description:
      'Guests confirm attendance and dietary preferences in seconds. Live responses instantly sync to your personal dashboard and WhatsApp.',
    side: 'left' as const,
  },
  {
    id: 'navigation',
    icon: MapPin,
    badge: '1-Click Directions',
    title: 'Integrated Venue Navigation',
    description:
      'Direct navigation links for Google Maps, Apple Maps, Uber, and Ola so your guests arrive smoothly without confusion.',
    side: 'left' as const,
  },
  {
    id: 'delivery',
    icon: Send,
    badge: 'Zero Postal Delay',
    title: 'Instant WhatsApp & Web Delivery',
    description:
      'Deliver personalized invitations via WhatsApp, SMS, or QR code. No shipping delays, no printing waste, and 100% mobile-optimized.',
    side: 'right' as const,
  },
  {
    id: 'music',
    icon: Music,
    badge: 'Curated Atmosphere',
    title: 'Ceremony Audio & Itinerary',
    description:
      'Delicate background music (shehnai, sitar, or custom acoustics), day-by-day ceremony timelines, and dress code reminders.',
    side: 'right' as const,
  },
]

const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    day: 'Day 1',
    title: 'Tell us about your event',
    description:
      'Share the occasion, your inspiration and the theme you have in mind with us on WhatsApp.',
    icon: MessageCircle,
    tag: 'Step 1: Tell Us Your Story',
    highlight: 'Quick WhatsApp Consultation',
    details: [
      'Choose your color theme & inspiration',
      'Share event timings & venue details',
    ],
  },
  {
    number: '02',
    day: 'Day 1–2',
    title: 'We design around you',
    description:
      'We bring the colours, wording and visual details together and share a draft for your approval. Two free revisions are included.',
    icon: Palette,
    tag: 'Step 2: Custom Crafted Draft',
    highlight: '2 Free Revisions Included',
    details: [
      'Bespoke typography, music & navigation',
      'Live review preview on your phone',
    ],
  },
  {
    number: '03',
    day: 'Day 2–3',
    title: 'Share it with your guests',
    description:
      'Your invitation website opens beautifully on mobile, tablet and desktop, with a link you can share with everyone.',
    icon: Share2,
    tag: 'Step 3: Instant WhatsApp Delivery',
    highlight: 'Ready for All Guests',
    details: [
      'Shareable link with instant WhatsApp preview',
      'Live headcount & RSVP updates',
    ],
  },
]

export function DigitalInvitationScrollShowcase() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFeature, setActiveFeature] = useState<string>('rsvp')
  const [activeStage, setActiveStage] = useState<'hero' | 'detail' | 'steps'>('hero')
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)

  // Auto-advance hero heading every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_HEADINGS.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  // Track scroll through the combined 3-section showcase track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Synchronize stages & active step based on scroll progress
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest < 0.26) {
        setActiveStage('hero')
      } else if (latest < 0.60) {
        setActiveStage('detail')
      } else {
        setActiveStage('steps')
        if (latest < 0.74) {
          setActiveStepIndex(0)
        } else if (latest < 0.88) {
          setActiveStepIndex(1)
        } else {
          setActiveStepIndex(2)
        }
      }
    })
  }, [scrollYProgress])

  // =========================================================================
  // MOTION TRANSFORMS:
  // Phase 1 (Hero): Mockup on Right (x: 25%)
  // Phase 2 ('Every Detail'): Mockup Glides to Center (x: 0%)
  // Phase 3 ('Three simple steps'): Mockup Glides back to Right (x: 25%)
  // =========================================================================
  const desktopX = useTransform(
    scrollYProgress,
    [0, 0.22, 0.34, 0.58, 0.70, 1],
    ['25%', '25%', '0%', '0%', '25%', '25%']
  )
  const desktopY = useTransform(
    scrollYProgress,
    [0, 0.22, 0.34, 0.58, 0.70, 1],
    ['0px', '0px', '12px', '12px', '0px', '0px']
  )
  const desktopScale = useTransform(
    scrollYProgress,
    [0, 0.22, 0.34, 0.58, 0.70, 1],
    [1, 1, 0.94, 0.94, 1, 1]
  )

  // Section 1 (Hero) Content
  const heroContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.26],
    [1, 1, 0]
  )
  const heroContentY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.26],
    ['0px', '0px', '-35px']
  )

  // Section 1 (Hero) Bottom Marquee Ticker
  const heroTickerOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.24],
    [1, 1, 0]
  )
  const heroTickerY = useTransform(
    scrollYProgress,
    [0, 0.16, 0.24],
    ['0px', '0px', '40px']
  )

  // Section 2 ('Every Detail, Beautifully Handled.') Content
  const section2Opacity = useTransform(
    scrollYProgress,
    [0.26, 0.34, 0.54, 0.62],
    [0, 1, 1, 0]
  )
  const section2Y = useTransform(
    scrollYProgress,
    [0.26, 0.34, 0.54, 0.62],
    ['35px', '0px', '0px', '-35px']
  )

  // Section 3 ('Three simple steps. Ready in 2–3 business days.') Content
  const section3Opacity = useTransform(
    scrollYProgress,
    [0.62, 0.70, 1],
    [0, 1, 1]
  )
  const section3Y = useTransform(
    scrollYProgress,
    [0.62, 0.70, 1],
    ['35px', '0px', '0px']
  )

  const activeStepData = HOW_IT_WORKS_STEPS[activeStepIndex] || HOW_IT_WORKS_STEPS[0]
  const ActiveStepIcon = activeStepData.icon

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white selection:bg-[#E4521B]/20 selection:text-[#161413]"
    >
      {/* Soft Ambient Warm Glow in Background */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-12 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.06)_0%,rgba(255,145,77,0.03)_50%,transparent_75%)] blur-3xl -z-10"
      />

      {/* =========================================================================
          DESKTOP PERSISTENT 3-PHASE MOTION CANVAS (Pinned Across All 3 Sections)
         ========================================================================= */}
      <div className="hidden lg:block relative min-h-[290vh]">
        {/* Sticky Viewport Stage */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden relative">
          {/* Main 1400px Content Grid */}
          <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 h-full flex items-center">
            
            {/* -----------------------------------------------------------
                PHASE 1: HERO CONTENT (Left Column, Fades on Scroll)
               ----------------------------------------------------------- */}
            <motion.div
              style={{
                opacity: shouldReduceMotion ? 1 : heroContentOpacity,
                y: shouldReduceMotion ? 0 : heroContentY,
                pointerEvents: activeStage === 'hero' ? 'auto' : 'none',
              }}
              className="w-1/2 flex flex-col items-start text-left z-20 pr-6"
            >
              {/* Main Rotating Headline (Plus Jakarta Sans, 3s rotation in exactly 2 lines) */}
              <div className="w-full min-h-[145px] flex items-center mb-5 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.h1
                    key={currentIndex}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 18, filter: 'blur(6px)' }
                    }
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -16, filter: 'blur(6px)' }
                    }
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full text-[#161413] font-sans font-bold text-[clamp(2.15rem,3.4vw,3.75rem)] leading-[1.12] tracking-[-0.035em]"
                  >
                    <span className="block text-[#161413] whitespace-normal sm:whitespace-nowrap">
                      {ROTATING_HEADINGS[currentIndex].line1}
                    </span>
                    <span className="block text-[#161413] mt-0.5 sm:mt-1 whitespace-normal sm:whitespace-nowrap">
                      {ROTATING_HEADINGS[currentIndex].line2}
                    </span>
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Description Body Copy */}
              <p className="font-sans text-[16.5px] text-[#6B645E] leading-relaxed max-w-lg mb-9">
                Create stunning digital wedding invitations with RSVP, event details, and a personal touch your guests will remember.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mb-11">
                <Link
                  href="/contact"
                  className="btn-pill-coral inline-flex items-center justify-center px-8 py-3.5 rounded-full font-sans font-semibold text-[14.5px] shadow-[0_6px_24px_rgba(228,82,27,0.35)] transition-all cursor-pointer border-0"
                >
                  <span>Explore Invitations</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-sans font-semibold text-[14.5px] text-[#161413] bg-white/80 hover:bg-white border border-[#161413]/20 hover:border-[#161413] shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Create Your Invite</span>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3.5 select-none">
                <div className="flex -space-x-2.5 overflow-hidden py-0.5">
                  {SOCIAL_PROOF_AVATARS.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative w-9 h-9 rounded-full ring-2 ring-white overflow-hidden shrink-0 shadow-sm"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-px h-5 bg-[#DDD6CD]" aria-hidden />
                <span className="font-sans text-[13.5px] font-medium text-[#7A726B]">
                  Made for moments that matter
                </span>
              </div>
            </motion.div>


            {/* -----------------------------------------------------------
                PHASE 2: 'EVERY DETAIL, BEAUTIFULLY HANDLED.'
                (Feature Cards Frame Centered Docked Mockup)
               ----------------------------------------------------------- */}
            <motion.div
              style={{
                opacity: shouldReduceMotion ? 1 : section2Opacity,
                y: shouldReduceMotion ? 0 : section2Y,
                pointerEvents: activeStage === 'detail' ? 'auto' : 'none',
              }}
              className="absolute inset-0 flex flex-col justify-between py-10 z-20"
            >
              {/* Section 2 Header */}
              <div className="w-full text-center max-w-3xl mx-auto pt-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#E4521B]" />
                  <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B]">
                    Interactive Guest Experience
                  </span>
                </div>
                {/* Main Heading with Signature Home Page Slit Reveal Animation */}
                <SlitHeading
                  id="every-detail-heading"
                  align="center"
                  lines={['Every Detail, <span style="color: var(--color-primary-orange)">Beautifully Handled.</span>']}
                  showAccentLine={true}
                  slit={0}
                  dotColor="#E4521B"
                  textColor="#161413"
                  className="text-3xl sm:text-4xl lg:text-[40px] leading-tight tracking-[-0.03em] mb-2"
                />
                <p className="font-sans text-[15px] text-[#6B645E] max-w-xl mx-auto">
                  More than a digital invite — an effortless ceremony hub for your guests with real-time RSVPs, live venue navigation, and custom audio.
                </p>
              </div>

              {/* Section 2 Left & Right Feature Callout Cards (flanking the centered mockup) */}
              <div className="w-full grid grid-cols-12 gap-8 items-center px-4 my-auto">
                {/* Left 2 Callout Cards */}
                <div className="col-span-3 flex flex-col gap-4">
                  {INTERACTIVE_FEATURES.filter((f) => f.side === 'left').map(
                    (feature) => {
                      const Icon = feature.icon
                      const isSelected = activeFeature === feature.id
                      return (
                        <div
                          key={feature.id}
                          onClick={() => setActiveFeature(feature.id)}
                          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                            isSelected
                              ? 'bg-white shadow-[0_12px_32px_rgba(228,82,27,0.14)] border-[#E4521B]/50 translate-x-1.5 ring-1 ring-[#E4521B]/20'
                              : 'bg-white/80 backdrop-blur-md border-[#EADFCF]/70 hover:bg-white hover:border-[#E4521B]/30 hover:shadow-md'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'bg-[#E4521B] text-white shadow-sm'
                                  : 'bg-[#E4521B]/10 text-[#E4521B]'
                              }`}
                            >
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#E4521B]">
                              {feature.badge}
                            </span>
                          </div>
                          <h3 className="font-sans font-bold text-[15.5px] text-[#161413] tracking-[-0.02em] mb-1.5">
                            {feature.title}
                          </h3>
                          <p className="font-sans text-[12.5px] text-[#6B645E] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      )
                    }
                  )}
                </div>

                {/* Empty Middle 6 columns: Reserving focal space for the centered docked mockup */}
                <div className="col-span-6" />

                {/* Right 2 Callout Cards */}
                <div className="col-span-3 flex flex-col gap-4">
                  {INTERACTIVE_FEATURES.filter((f) => f.side === 'right').map(
                    (feature) => {
                      const Icon = feature.icon
                      const isSelected = activeFeature === feature.id
                      return (
                        <div
                          key={feature.id}
                          onClick={() => setActiveFeature(feature.id)}
                          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                            isSelected
                              ? 'bg-white shadow-[0_12px_32px_rgba(228,82,27,0.14)] border-[#E4521B]/50 -translate-x-1.5 ring-1 ring-[#E4521B]/20'
                              : 'bg-white/80 backdrop-blur-md border-[#EADFCF]/70 hover:bg-white hover:border-[#E4521B]/30 hover:shadow-md'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'bg-[#E4521B] text-white shadow-sm'
                                  : 'bg-[#E4521B]/10 text-[#E4521B]'
                              }`}
                            >
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#E4521B]">
                              {feature.badge}
                            </span>
                          </div>
                          <h3 className="font-sans font-bold text-[15.5px] text-[#161413] tracking-[-0.02em] mb-1.5">
                            {feature.title}
                          </h3>
                          <p className="font-sans text-[12.5px] text-[#6B645E] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>

              {/* Section 2 Footer CTA Bar */}
              <div className="w-full text-center pb-2">
                <Link
                  href="/contact"
                  className="btn-pill-coral inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans font-semibold text-sm shadow-[0_6px_24px_rgba(228,82,27,0.35)] transition-all cursor-pointer border-0"
                >
                  <span>Build Your Digital Invitation With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>


            {/* -----------------------------------------------------------
                PHASE 3: 'THREE SIMPLE STEPS. READY IN 2–3 BUSINESS DAYS.'
                (Left 3 Steps with Mockup Docked on Right side)
               ----------------------------------------------------------- */}
            <motion.div
              style={{
                opacity: shouldReduceMotion ? 1 : section3Opacity,
                y: shouldReduceMotion ? 0 : section3Y,
                pointerEvents: activeStage === 'steps' ? 'auto' : 'none',
              }}
              className="absolute inset-0 flex items-center z-20"
            >
              <div className="w-1/2 pr-8 flex flex-col justify-center">
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 mb-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#E4521B]" />
                    <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B]">
                      HOW IT WORKS
                    </span>
                  </div>
                  {/* Main Heading with Signature Home Page Slit Reveal Animation */}
                  <SlitHeading
                    id="how-it-works-heading"
                    align="left"
                    lines={['Three simple steps. <span style="color: var(--color-primary-orange)">Ready in 2–3 business days.</span>']}
                    showAccentLine={true}
                    slit={0}
                    dotColor="#E4521B"
                    textColor="#161413"
                    className="text-2xl sm:text-3xl xl:text-[34px] leading-tight tracking-[-0.03em] mb-2"
                  />
                </div>

                {/* 3 Steps Stack */}
                <div className="flex flex-col gap-3.5 relative">
                  {/* Vertical Timeline Track Line */}
                  <div
                    aria-hidden
                    className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#E4521B] via-[#E4521B]/40 to-[#E8E2D9] -z-1"
                  />

                  {HOW_IT_WORKS_STEPS.map((step, idx) => {
                    const isSelected = activeStepIndex === idx

                    return (
                      <div
                        key={step.number}
                        onClick={() => setActiveStepIndex(idx)}
                        className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                          isSelected
                            ? 'bg-white shadow-[0_12px_28px_rgba(228,82,27,0.12)] border-[#E4521B]/50 ring-1 ring-[#E4521B]/20 translate-x-1.5'
                            : 'bg-white/75 backdrop-blur-sm border-[#EADFCF]/75 hover:bg-white hover:border-[#E4521B]/30'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center font-sans font-bold text-sm transition-colors ${
                                isSelected
                                  ? 'bg-[#E4521B] text-white shadow-xs'
                                  : 'bg-white border border-[#E8E2D9] text-[#161413]'
                              }`}
                            >
                              {step.number}
                            </div>
                            <div>
                              <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#E4521B] block leading-tight">
                                {step.day}
                              </span>
                              <h3 className="font-sans font-bold text-[15px] text-[#161413] tracking-[-0.02em] leading-snug">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <span className="text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-gray-50 border border-[#E8E2D9] text-[#7A726B] shrink-0">
                            {step.highlight}
                          </span>
                        </div>

                        <p className="font-sans text-xs text-[#6B645E] leading-relaxed pl-12">
                          {step.description}
                        </p>
                      </div>
                    )
                  })}
                </div>

                {/* Step Action Link */}
                <div className="mt-5 pl-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#E4521B] hover:text-[#C73E0E] transition-colors"
                  >
                    <span>Need a custom ceremony timeframe? Contact our design team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Half: Reserving space for the persistent mockup sitting at x: 25% */}
              <div className="w-1/2" />
            </motion.div>


            {/* -----------------------------------------------------------
                THE SINGLE PERSISTENT MOCKUP OBJECT
                - Phase 1 (Hero): x: 25% (right side)
                - Phase 2 ('Every Detail'): x: 0% (glides to center dock)
                - Phase 3 ('Three simple steps'): x: 25% (glides to right side)
               ----------------------------------------------------------- */}
            <motion.div
              style={{
                x: shouldReduceMotion ? '0%' : desktopX,
                y: shouldReduceMotion ? 0 : desktopY,
                scale: shouldReduceMotion ? 1 : desktopScale,
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
            >
              <div className="relative w-full max-w-[580px] xl:max-w-[640px]">
                
                {/* Dynamic Step Status Pill shown when in Phase 3 */}
                {activeStage === 'steps' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 pointer-events-auto"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8E2D9] shadow-md">
                      <div className="w-4 h-4 rounded-full bg-[#E4521B] flex items-center justify-center text-white shrink-0">
                        <ActiveStepIcon className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span className="font-sans font-semibold text-xs text-[#161413]">
                        {activeStepData.tag}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Transparent Cutout Mockup Image with subtle 8s rotational sway */}
                <motion.div
                  animate={{
                    rotate: [0, 2.2, 0, -2.2, 0],
                    y: [0, -6, 0, -6, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ transformOrigin: 'center center' }}
                  className="relative w-full flex items-center justify-center select-none"
                >
                  <Image
                    src="/Image-v1/digi_invi/Indian Wedding Invitation Mockup-Photoroom.png"
                    alt="KodeToMates Digital Wedding Invitation Mockup"
                    width={1300}
                    height={1300}
                    className="w-full max-h-[56vh] xl:max-h-[62vh] object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.16)] drop-shadow-[0_48px_60px_rgba(0,0,0,0.14)] drop-shadow-[0_16px_30px_rgba(228,82,27,0.16)]"
                    priority
                  />
                </motion.div>

                {/* Ground Contact Shadows */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/25 blur-xl rounded-[100%]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-4 bg-black/35 blur-md rounded-[100%]"
                />
              </div>
            </motion.div>

          </div>

          {/* Desktop Hero Scrolling Marquee Ribbon (Visible during Phase 1 Hero, fades on scroll) */}
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : heroTickerOpacity,
              y: shouldReduceMotion ? 0 : heroTickerY,
              pointerEvents: activeStage === 'hero' ? 'auto' : 'none',
            }}
            className="absolute bottom-0 left-0 right-0 z-35 w-full overflow-hidden bg-[#161413] text-white py-5 sm:py-6 lg:py-6.5 border-y border-[#262320] select-none"
          >
            <div className="flex w-max">
              <motion.div
                animate={shouldReduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex shrink-0 items-center whitespace-nowrap"
              >
                {[...HERO_TICKER_ITEMS, ...HERO_TICKER_ITEMS].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="font-sans font-extrabold text-base sm:text-lg lg:text-xl tracking-[-0.01em] text-white uppercase">
                      {item}
                    </span>
                    <TickerDiamondStar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#E4521B] mx-7 sm:mx-10 shrink-0" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET VIEW (< lg): Fluid Vertical Stack of all 3 Sections
         ========================================================================= */}
      <div className="lg:hidden flex flex-col w-full pt-24 sm:pt-28 pb-10 px-5 sm:px-8 max-w-2xl mx-auto">
        {/* Mobile Section 1: Hero */}
        <div className="flex flex-col items-start text-left mb-10">
          <div className="w-full min-h-[110px] flex items-center mb-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
                className="w-full text-[#161413] font-sans font-bold text-3xl sm:text-4xl leading-[1.12] tracking-[-0.03em]"
              >
                <span className="block text-[#161413]">
                  {ROTATING_HEADINGS[currentIndex].line1}
                </span>
                <span className="block text-[#161413] mt-0.5">
                  {ROTATING_HEADINGS[currentIndex].line2}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#6B645E] leading-relaxed mb-6">
            Create stunning digital wedding invitations with RSVP, event details, and a personal touch your guests will remember.
          </p>

          <div className="flex flex-wrap items-center gap-3 w-full mb-8">
            <Link
              href="/contact"
              className="btn-pill-coral flex-1 text-center py-3 rounded-full font-sans font-semibold text-sm shadow-md"
            >
              Explore Invitations
            </Link>
            <Link
              href="/contact"
              className="flex-1 text-center py-3 rounded-full font-sans font-semibold text-sm text-[#161413] bg-white border border-[#161413]/20 shadow-xs"
            >
              Create Your Invite
            </Link>
          </div>
        </div>

        {/* Mobile Mockup */}
        <div className="relative w-full max-w-md mx-auto mb-14">
          <motion.div
            animate={{
              rotate: [0, 2.2, 0, -2.2, 0],
              y: [0, -4, 0, -4, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: 'center center' }}
            className="w-full"
          >
            <Image
              src="/Image-v1/digi_invi/Indian Wedding Invitation Mockup-Photoroom.png"
              alt="KodeToMates Digital Wedding Invitation Mockup"
              width={900}
              height={900}
              className="w-full h-auto object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.12)]"
              priority
            />
          </motion.div>
        </div>

        {/* Mobile Hero Scrolling Marquee Ribbon */}
        <div className="-mx-5 sm:-mx-8 w-[calc(100%+2.5rem)] sm:w-[calc(100%+4rem)] overflow-hidden bg-[#161413] text-white py-4 sm:py-5 border-y border-[#262320] mb-12 select-none">
          <div className="flex w-max">
            <motion.div
              animate={shouldReduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex shrink-0 items-center whitespace-nowrap"
            >
              {[...HERO_TICKER_ITEMS, ...HERO_TICKER_ITEMS].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="font-sans font-extrabold text-sm sm:text-base tracking-[-0.01em] text-white uppercase">
                    {item}
                  </span>
                  <TickerDiamondStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E4521B] mx-5 sm:mx-6 shrink-0" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Section 2: 'Every Detail, Beautifully Handled.' */}
        <div className="w-full pt-8 border-t border-gray-100 mb-14">
          <div className="text-center mb-6">
            <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B] block mb-1.5">
              Interactive Guest Experience
            </span>
            <SlitHeading
              align="center"
              lines={['Every Detail, <span style="color: var(--color-primary-orange)">Beautifully Handled.</span>']}
              showAccentLine={true}
              slit={0}
              dotColor="#E4521B"
              textColor="#161413"
              className="text-2xl leading-snug tracking-[-0.03em]"
            />
          </div>

          <div className="grid grid-cols-1 gap-3.5 mb-6">
            {INTERACTIVE_FEATURES.map((feature) => {
              const Icon = feature.icon
              const isSelected = activeFeature === feature.id
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 text-left cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#E4521B]/40 shadow-sm ring-1 ring-[#E4521B]/20'
                      : 'bg-white border-[#EADFCF]/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#E4521B] text-white'
                          : 'bg-[#E4521B]/10 text-[#E4521B]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-sans font-semibold text-[#161413]">
                      {feature.title}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#6B645E] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Section 3: 'Three simple steps. Ready in 2–3 business days.' */}
        <div className="w-full pt-8 border-t border-[#EAE4DC]">
          <div className="text-center mb-6">
            <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B] block mb-1.5">
              HOW IT WORKS
            </span>
            <SlitHeading
              align="center"
              lines={['Three simple steps. <span style="color: var(--color-primary-orange)">Ready in 2–3 business days.</span>']}
              showAccentLine={true}
              slit={0}
              dotColor="#E4521B"
              textColor="#161413"
              className="text-2xl leading-snug tracking-[-0.03em]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {HOW_IT_WORKS_STEPS.map((step) => {
              return (
                <div
                  key={step.number}
                  className="p-4 rounded-xl bg-white border border-[#EADFCF]/80 shadow-xs text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E4521B] text-white flex items-center justify-center font-sans font-bold text-xs shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#E4521B] block">
                        {step.day}
                      </span>
                      <span className="text-xs font-sans font-bold text-[#161413]">
                        {step.title}
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-[#6B645E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          <Link
            href="/contact"
            className="btn-pill-coral w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-sans font-semibold text-sm shadow-md"
          >
            <span>Start Your Invitation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

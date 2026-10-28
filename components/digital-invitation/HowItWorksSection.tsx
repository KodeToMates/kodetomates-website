'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Palette,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
} from 'lucide-react'

interface StepItem {
  number: string
  day: string
  title: string
  description: string
  icon: React.ElementType
  badge: string
  previewTag: string
  subFeatures: string[]
}

const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    day: 'Day 1',
    title: 'Tell us about your event',
    description:
      'Share the occasion, your inspiration and the theme you have in mind with us on WhatsApp.',
    icon: MessageCircle,
    badge: 'Quick Consultation',
    previewTag: 'Step 1: Share Your Inspiration',
    subFeatures: [
      'Choose your colour palette & celebration theme',
      'Share event schedules, muhurtham & venue details',
      'Quick response within a few hours on WhatsApp',
    ],
  },
  {
    number: '02',
    day: 'Day 1–2',
    title: 'We design around you',
    description:
      'We bring the colours, wording and visual details together and share a draft for your approval. Two free revisions are included.',
    icon: Palette,
    badge: 'Custom Crafting',
    previewTag: 'Step 2: Interactive Draft Review',
    subFeatures: [
      'Two free design revisions included',
      'Custom typography, audio & interactive map links',
      'Preview live on your own mobile phone',
    ],
  },
  {
    number: '03',
    day: 'Day 2–3',
    title: 'Share it with your guests',
    description:
      'Your invitation website opens beautifully on mobile, tablet and desktop, with a link you can share with everyone.',
    icon: Share2,
    badge: 'Ready to Celebrate',
    previewTag: 'Step 3: 1-Click WhatsApp Sharing',
    subFeatures: [
      'Shareable link with personalized WhatsApp preview',
      'Real-time RSVP responses sync directly to you',
      'Fast loading, 100% responsive on all screens',
    ],
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  // Track active step on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4
      stepRefs.current.forEach((el, index) => {
        if (!el) return
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveStep(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentStepData = HOW_IT_WORKS_STEPS[activeStep] || HOW_IT_WORKS_STEPS[0]
  const ActiveIcon = currentStepData.icon

  return (
    <section className="relative w-full py-20 sm:py-28 bg-white border-t border-gray-100 overflow-hidden">
      {/* Soft Ambient Radial Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/4 w-[750px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.06)_0%,rgba(255,145,77,0.03)_50%,transparent_70%)] blur-3xl -z-10"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="w-full max-w-3xl mb-12 sm:mb-16 text-left">
          {/* Eyebrow Badge (Plus Jakarta Sans, uppercase coral) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 mb-3.5">
            <Clock className="w-3.5 h-3.5 text-[#E4521B]" />
            <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B]">
              HOW IT WORKS
            </span>
          </div>

          {/* Main Heading in Plus Jakarta Sans */}
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#161413] tracking-[-0.03em] leading-tight mb-3">
            Three simple steps. Ready in 2–3 business days.
          </h2>

          <p className="font-sans text-[15.5px] sm:text-[17px] text-[#6B645E] leading-relaxed max-w-2xl">
            From initial thought to your guests RSVPing on their phones, getting a bespoke digital invitation is effortless and completely tailored to your vision.
          </p>
        </div>

        {/* 2-Column Layout: Left Steps + Right Sticky Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ===================================================================
              LEFT COLUMN: 3 Step Cards with Timeline Connector
             =================================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 relative">
            {/* Continuous Vertical Timeline Line on Desktop */}
            <div
              aria-hidden
              className="hidden sm:block absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#E4521B] via-[#E4521B]/40 to-[#E8E2D9] -z-1"
            />

            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[idx] = el
                  }}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-6 sm:p-8 rounded-[24px] border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white shadow-[0_16px_40px_rgba(228,82,27,0.12)] border-[#E4521B]/50 ring-1 ring-[#E4521B]/20 sm:translate-x-1.5'
                      : 'bg-white/70 backdrop-blur-sm border-[#EADFCF]/80 hover:bg-white hover:border-[#E4521B]/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    {/* Step Number & Day Indicator */}
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-sans font-bold text-lg transition-colors shadow-sm ${
                          isSelected
                            ? 'bg-[#E4521B] text-white'
                            : 'bg-white border border-[#E8E2D9] text-[#161413]'
                        }`}
                      >
                        {step.number}
                      </div>

                      <div className="flex flex-col">
                        <span className="font-sans font-semibold text-xs uppercase tracking-wider text-[#E4521B]">
                          {step.day}
                        </span>
                        <span className="font-sans font-bold text-lg sm:text-xl text-[#161413] tracking-[-0.02em]">
                          {step.title}
                        </span>
                      </div>
                    </div>

                    {/* Step Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E2D9] text-[#7A726B] font-sans text-xs font-medium self-start sm:self-auto">
                      <Icon className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>{step.badge}</span>
                    </div>
                  </div>

                  {/* Step Description */}
                  <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#6B645E] leading-relaxed mb-5 sm:pl-15.5">
                    {step.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 sm:pl-15.5 pt-3 border-t border-[#F2ECE4]">
                    {step.subFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isSelected ? 'text-[#E4521B]' : 'text-[#A89E96]'
                          }`}
                        />
                        <span className="font-sans text-xs sm:text-[13.5px] text-[#524B45]">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Action Button for Step 1 */}
                  {idx === 0 && (
                    <div className="sm:pl-15.5 mt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] font-sans font-semibold text-xs sm:text-[13px] transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Chat With Us on WhatsApp</span>
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* ===================================================================
              RIGHT COLUMN: Sticky Mockup Showcase (Scrolls & Syncs with Steps)
             =================================================================== */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28 flex flex-col items-center justify-center">
            
            {/* Dynamic Step Status Pill */}
            <div className="mb-4 w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#E8E2D9] shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E4521B] flex items-center justify-center text-white shrink-0">
                    <ActiveIcon className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="font-sans font-semibold text-xs sm:text-[13px] text-[#161413]">
                    {currentStepData.previewTag}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mockup Container with Floor Contact Shadow */}
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[520px] xl:max-w-[560px]">
              {/* Direct Transparent Cutout Mockup PNG with 8s rotation animation */}
              <motion.div
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                  y: [0, -5, 0, -5, 0],
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
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_28px_rgba(0,0,0,0.15)] drop-shadow-[0_40px_50px_rgba(0,0,0,0.12)] drop-shadow-[0_12px_24px_rgba(228,82,27,0.14)]"
                  priority
                />
              </motion.div>

              {/* Multi-Layer Contact Shadow on the Website Floor */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-7 bg-black/25 blur-xl rounded-[100%]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-3 bg-black/35 blur-md rounded-[100%]"
              />
            </div>

            {/* Bottom Guarantee Note */}
            <div className="mt-6 flex items-center gap-2 text-center text-[#7A726B] font-sans text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E4521B]" />
              <span>Full mobile & tablet optimization guaranteed with every invitation</span>
            </div>
          </div>

        </div>

        {/* Section Bottom CTA Bar */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-[#161413] tracking-[-0.02em] mb-1">
              Have an upcoming celebration in mind?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B645E]">
              Tell us your date and vision — we’ll have a custom invitation ready in 2–3 business days.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-pill-coral inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans font-semibold text-sm shadow-[0_6px_24px_rgba(228,82,27,0.35)] transition-all cursor-pointer border-0 shrink-0"
          >
            <span>Start Your Invitation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

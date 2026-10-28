'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { HeroSparks } from '@/components/home/HeroSparks'
import { SeoEnquiryForm } from './SeoEnquiryForm'
import { TrendingUp, Zap, ShieldCheck } from 'lucide-react'
import { SlitHeading, BrandAccentLine } from '@/components/ui'

interface SeoHeadingItem {
  lines: string[]
  subtext: string
  focusKeyword: string
}

const SEO_HEADINGS: SeoHeadingItem[] = [
  {
    lines: [
      'Rank #1 on Google.',
      'Capture High-Intent',
      'Search Traffic.',
    ],
    subtext:
      'We combine deep code-level technical audits, sub-second Core Web Vitals, and semantic entity graphs to catapult your brand to the top of Google.',
    focusKeyword: 'Organic Acquisition',
  },
  {
    lines: [
      'Engineering-Led SEO.',
      'Turn Organic Search',
      'Into Real Revenue.',
    ],
    subtext:
      'Say goodbye to shallow agency checklists. We optimize crawl budget, schema graphs, and internal PageRank architecture directly inside your codebase.',
    focusKeyword: 'Technical Precision',
  },
  {
    lines: [
      'Sub-Second Speed.',
      'Semantic Authority',
      'That Truly Wins.',
    ],
    subtext:
      'Google ranks websites that users love. We engineer sub-second LCP, zero CLS, and topical clusters that dominate competitive industry SERPs.',
    focusKeyword: 'Topical Authority',
  },
]

export function SeoHero() {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Smooth editorial headline auto-advance every 5.5s (matching home page)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SEO_HEADINGS.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0C0B0A] selection:bg-[#E4521B]/30 selection:text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16">
      {/* --- 1. FULL PHOTOGRAPHY BACKGROUND & SPARK EMBER SYSTEM --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Full-width Photography Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Image-v1/seo_page/seo-hero-bg.jpg"
            alt="SEO Strategy & Engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] lg:object-center filter brightness-[0.88] contrast-[1.04]"
          />
        </div>

        {/* Lighter, Reduced Full-Width Black Overlay */}
        <div className="absolute inset-0 bg-[#0C0B0A]/50 z-10" />

        {/* Soft text backing gradient on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/35 via-transparent to-transparent z-10" />

        {/* Softened Top & Bottom Edge Vignettes */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0C0B0A]/85 via-[#0C0B0A]/40 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0C0B0A]/70 via-[#0C0B0A]/25 to-transparent z-10" />

        {/* Floating Brand Sparks / Embers Particle Canvas */}
        <HeroSparks className="opacity-85 z-10" count={22} />
      </div>

      {/* --- 2. INNER 2-COLUMN HERO CONTAINER --- */}
      <div className="relative z-20 w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 h-full flex flex-col justify-between flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center my-auto py-6 sm:py-10">
          {/* ========================================================
              LEFT COLUMN: Editorial Animated Headlines & Proof Points
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Giant Editorial Headline with Home Slit Reveal Animation */}
            <div className="min-h-[170px] sm:min-h-[220px] lg:min-h-[250px] flex items-center relative overflow-hidden mb-2">
              <AnimatePresence mode="wait" initial={false}>
                <div key={currentIndex} className="w-full">
                  <SlitHeading
                    as="h1"
                    align="left"
                    lines={SEO_HEADINGS[currentIndex].lines.map((line, idx) => {
                      if (idx === SEO_HEADINGS[currentIndex].lines.length - 1) {
                        return `<span style="color: #FF914D">${line}</span>`
                      }
                      return line
                    })}
                    slit={0}
                    textColor="#FFFFFF"
                    dotColor="#E4521B"
                    className="w-full text-white text-[clamp(36px,5.2vw,78px)] leading-[1.08] tracking-[-0.035em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </AnimatePresence>
            </div>

            {/* Signature Brand Accent Line */}
            <BrandAccentLine align="left" theme="orange" className="mb-4" />

            {/* Dynamic Supporting Narrative Subtext */}
            <div className="min-h-[64px] sm:min-h-[72px] mb-6 sm:mb-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="font-sans text-[15px] sm:text-[17px] text-[#A69E96] leading-relaxed max-w-xl"
                >
                  {SEO_HEADINGS[currentIndex].subtext}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Tag Pills (+ Technical Audits, + Core Web Vitals, etc.) with Ambient Glow */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: [1, 0.35, 1],
                      y: 0,
                    }
              }
              transition={{
                y: { duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
                opacity: {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.6,
                },
              }}
              whileHover={{ opacity: 1 }}
              className="flex items-center flex-wrap gap-4 sm:gap-6 text-white/90 text-xs sm:text-[13.5px] font-sans font-medium mb-8 sm:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center gap-1.5 group cursor-default">
                <span className="text-[#E4521B] font-semibold text-sm">+</span>
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Technical Crawl Audits
                </span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-default">
                <span className="text-[#E4521B] font-semibold text-sm">+</span>
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Core Web Vitals 100/100
                </span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-default">
                <span className="text-[#E4521B] font-semibold text-sm">+</span>
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Semantic Topic Graphs
                </span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-default">
                <span className="text-[#E4521B] font-semibold text-sm">+</span>
                <span className="text-white/90 group-hover:text-white transition-colors">
                  High-Authority PR Backlinks
                </span>
              </div>
            </motion.div>

            {/* Proof Points & Performance Benchmark Cards Row */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg pt-4 border-t border-white/[0.10]"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#FF914D] mb-0.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#E4521B]" />
                  <span className="font-sans font-bold text-lg sm:text-2xl text-white tracking-tight">
                    +310%
                  </span>
                </div>
                <span className="font-sans text-[11.5px] sm:text-xs text-[#8E867E]">
                  Avg Organic Traffic Lift
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#FF914D] mb-0.5">
                  <Zap className="w-3.5 h-3.5 text-[#E4521B]" />
                  <span className="font-sans font-bold text-lg sm:text-2xl text-white tracking-tight">
                    &lt; 0.9s
                  </span>
                </div>
                <span className="font-sans text-[11.5px] sm:text-xs text-[#8E867E]">
                  Target LCP Speed
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#FF914D] mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E4521B]" />
                  <span className="font-sans font-bold text-lg sm:text-2xl text-white tracking-tight">
                    100%
                  </span>
                </div>
                <span className="font-sans text-[11.5px] sm:text-xs text-[#8E867E]">
                  Crawl &amp; Indexing Health
                </span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Wall-Mounted Floating SEO Enquiry Form
             ======================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SeoEnquiryForm />
          </div>
        </div>

      </div>
    </section>
  )
}

export default SeoHero

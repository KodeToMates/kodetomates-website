'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { SlitHeading } from '@/components/ui'
import { WHAT_WE_DO_HERO_METRICS, SERVICE_PILLARS } from '@/config/what-we-do'

export function WhatWeDoHero() {
  const shouldReduceMotion = useReducedMotion()

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const elem = document.getElementById(targetId)
    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 overflow-hidden bg-white text-[#161413]">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[350px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-orange-50/30 to-transparent" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        {/* Eyebrow & Editorial Headline */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E4521B]" />
            <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B]">
              WHAT WE DO &middot; FULL-SPECTRUM DIGITAL CRAFT
            </span>
          </motion.div>

          <SlitHeading
            as="h1"
            align="center"
            lines={[
              'Digital Experiences.',
              '<span style="color: var(--color-primary-orange)">Engineered To Scale.</span>',
            ]}
            showAccentLine={true}
            slit={0}
            textColor="#161413"
            dotColor="#E4521B"
            className="text-[clamp(32px,5.2vw,68px)] leading-[1.08] tracking-[-0.03em] font-sans font-bold mb-6"
          />

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="font-sans text-[15px] sm:text-[17px] text-[#6B645E] max-w-2xl leading-relaxed mb-8"
          >
            From custom full-stack web platforms and zero-downtime redesigns to technical SEO dominance and bespoke event invitations, we engineer technology that drives measurable impact.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-12 sm:mb-14"
          >
            <Link
              href="/contact"
              className="btn-pill-coral inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-sans font-semibold text-sm shadow-[0_4px_20px_rgba(228,82,27,0.3)] cursor-pointer transition-all border-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#pillars"
              onClick={(e) => handleScrollTo(e, 'pillars')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans font-medium text-sm text-[#161413] bg-[#FAF8F5] hover:bg-[#F2EFEA] border border-[#E8E2D9] hover:border-[#161413]/20 shadow-xs transition-all cursor-pointer"
            >
              <span>Explore The 4 Pillars</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#E4521B]" />
            </a>
          </motion.div>

          {/* Pillar Anchor Quick Switcher */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-2 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] shadow-xs mb-12 max-w-3xl"
          >
            {SERVICE_PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <a
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  onClick={(e) => handleScrollTo(e, pillar.id)}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-sans font-medium text-[#554E48] hover:text-[#161413] bg-transparent hover:bg-white border border-transparent hover:border-[#E8E2D9] transition-all cursor-pointer group shadow-none hover:shadow-xs"
                >
                  <div className="w-5 h-5 rounded-md bg-[#E4521B]/15 flex items-center justify-center shrink-0 group-hover:bg-[#E4521B] transition-colors">
                    <Icon className="w-3 h-3 text-[#E4521B] group-hover:text-white transition-colors" />
                  </div>
                  <span>{pillar.shortTitle}</span>
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* 4 Core Hero Metrics Strip */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-6 border-t border-[#E8E2D9]"
        >
          {WHAT_WE_DO_HERO_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] hover:border-[#E4521B]/40 transition-all group shadow-xs hover:shadow-md"
            >
              <div className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl tracking-[-0.03em] text-[#161413] group-hover:text-[#E4521B] transition-colors">
                {metric.value}
              </div>
              <div className="font-sans font-semibold text-xs sm:text-sm text-[#161413] mt-1">
                {metric.label}
              </div>
              <div className="font-sans text-[11px] sm:text-xs text-[#6B645E] mt-0.5">
                {metric.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Users, Compass, Rocket } from 'lucide-react'
import { HeroSparks } from '@/components/home/HeroSparks'

interface StoryPillar {
  icon: React.ComponentType<{ className?: string }>
  badge: string
  text: string
}

const STORY_PILLARS: StoryPillar[] = [
  {
    icon: Compass,
    badge: 'The Simple Idea',
    text: 'KodeToMates is a growing technology community built around a simple idea: learn together, build together, and create things that make a difference.',
  },
  {
    icon: Users,
    badge: 'Beyond Tutorials',
    text: 'We bring together developers and technology enthusiasts who want to go beyond tutorials, explore real-world problems, experiment with ideas, and turn what they learn into meaningful digital experiences.',
  },
  {
    icon: Rocket,
    badge: 'Collective Ownership',
    text: "Whether we're building a website, exploring a new technology, creating a product, or collaborating on a business idea, we believe the best results come from sharing knowledge, taking ownership, and growing together.",
  },
]

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0C0B0A] selection:bg-[#E4521B]/30 selection:text-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16">
      {/* =========================================================================
          1. FULL-WIDTH CINEMATIC BACKGROUND PHOTOGRAPHY & ATMOSPHERE (HOME PAGE STYLE)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Main Background Image: Team collaboration in modern tech studio */}
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/Image-v1/Home_page/team.jpg"
            alt="KodeToMates Community of Builders"
            fill
            sizes="100vw"
            priority
            className="object-cover object-[center_35%] filter brightness-[0.42] contrast-[1.12]"
          />
        </motion.div>

        {/* Cinematic Vignette Overlays matching Home Page Hero */}
        {/* Deep dark gradient backing on the text side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/95 via-[#0C0B0A]/80 via-[#0C0B0A]/40 to-[#0C0B0A]/60 z-10" />

        {/* Bottom vignette ensuring cards and actions pop cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/70 to-transparent z-10" />

        {/* Top veil behind fixed floating navbar */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0C0B0A]/80 to-transparent z-10" />

        {/* Ambient Warm Brand Coral Glow */}
        <div
          aria-hidden
          className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#E4521B]/12 blur-[140px] pointer-events-none z-10"
        />

        {/* Ambient Ember Particles from Home Page */}
        <HeroSparks className="opacity-75 z-10" count={16} />
      </div>

      {/* =========================================================================
          2. INNER CONTENT WRAPPER
         ========================================================================= */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-between">

        {/* --- TOP / MIDDLE: EDITORIAL HEADLINE & MISSION HOOK --- */}
        <div className="max-w-4xl pt-4 sm:pt-6 pb-8 sm:pb-12 text-left">



          {/* Main Headline (Plus Jakarta Sans, bold, tight tracking) */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-sans font-bold text-[clamp(2.35rem,4.8vw,5.5rem)] leading-[1.10] tracking-[-0.035em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] mb-6"
          >

            <span className="block mt-1 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#FF914D]">
              A shared passion for better technology.
            </span>
          </motion.h1>

          {/* Subheadline Mission Hook */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg sm:text-xl lg:text-[22px] font-medium text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          >
            We believe great things happen when curious minds come together.
          </motion.p>
        </div>

        {/* --- 3-PILLAR STORY CARDS DECK --- */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8"
        >
          {STORY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.badge}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[22px] bg-[#141210]/75 hover:bg-[#161413]/90 border border-white/10 hover:border-[#E4521B]/40 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300 text-left"
              >
                {/* Subtle top rim light accent */}
                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#E4521B]/50 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E4521B]/15 border border-[#E4521B]/25 flex items-center justify-center text-[#E4521B] group-hover:bg-[#E4521B] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#FF914D]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base sm:text-[17px] text-white tracking-[-0.01em] mb-2.5">
                    {pillar.badge}
                  </h3>

                  <p className="font-sans text-[13.5px] sm:text-[14px] text-white/75 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* --- BOTTOM ROW: LEFT TAGS & RIGHT DUAL CTA BUTTONS --- */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 border-t border-white/10"
        >
          {/* Bottom Left: Brand Tagline Pills (Home Page Style) */}
          <div className="flex items-center flex-wrap gap-5 sm:gap-8 text-white/90 text-xs sm:text-[14px] font-sans font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] select-none">
            <div className="flex items-center gap-1.5 group cursor-default">
              <span className="text-[#E4521B] font-semibold text-base sm:text-lg">+</span>
              <span className="text-white/90 group-hover:text-white transition-colors">Build Together</span>
            </div>
            <div className="flex items-center gap-1.5 group cursor-default">
              <span className="text-[#E4521B] font-semibold text-base sm:text-lg">+</span>
              <span className="text-white/90 group-hover:text-white transition-colors">Learn Together</span>
            </div>
            <div className="flex items-center gap-1.5 group cursor-default">
              <span className="text-[#E4521B] font-semibold text-base sm:text-lg">+</span>
              <span className="text-white/90 group-hover:text-white transition-colors">Share Knowledge</span>
            </div>
            <div className="flex items-center gap-1.5 group cursor-default">
              <span className="text-[#E4521B] font-semibold text-base sm:text-lg">+</span>
              <span className="text-white/90 group-hover:text-white transition-colors">Take Ownership</span>
            </div>
          </div>

          {/* Bottom Right: Dual CTA Buttons */}
          <div className="flex items-center flex-wrap gap-3.5 self-start lg:self-auto">
            {/* Primary CTA: Explore Our Work */}
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E4521B] hover:bg-[#CC420F] text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_24px_rgba(228,82,27,0.36)] hover:shadow-[0_12px_32px_rgba(228,82,27,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Secondary CTA: Collaborate With Us */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#141210] border border-white/20 hover:border-white font-sans font-semibold text-xs sm:text-[14px] backdrop-blur-sm transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Collaborate With Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

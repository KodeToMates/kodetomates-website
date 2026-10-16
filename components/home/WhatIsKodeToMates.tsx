'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, Code2, Users, TrendingUp, Sparkles } from 'lucide-react'

// 4-point sparkle star matching the exact reference ornament
function SparkleStar({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

const FEATURE_PILLARS = [
  {
    title: 'Learn',
    subtitle: 'New skills, real practice',
    icon: BookOpen,
    iconColor: 'text-[#3B82F6]',
    squircleBg: 'bg-[#EFF6FF]',
  },
  {
    title: 'Build',
    subtitle: 'Turn ideas into products',
    icon: Code2,
    iconColor: 'text-[#10B981]',
    squircleBg: 'bg-[#ECFDF5]',
  },
  {
    title: 'Collaborate',
    subtitle: 'Better together',
    icon: Users,
    iconColor: 'text-[#8B5CF6]',
    squircleBg: 'bg-[#F5F3FF]',
  },
  {
    title: 'Grow',
    subtitle: 'Skills, confidence, opportunities',
    icon: TrendingUp,
    iconColor: 'text-[#F97316]',
    squircleBg: 'bg-[#FFF7ED]',
  },
]

export function WhatIsKodeToMates() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section 
      id="about" 
      className="relative z-10 w-full pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-18 lg:pb-24 overflow-hidden bg-white border-y border-[#F3ECE4]/80 shadow-[0_2px_16px_rgba(0,0,0,0.015)] selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="what-is-kodetomates-heading"
    >
      {/* ========================================================
          BACKGROUND CORNER ORNAMENTS (EXACT REFERENCE PARITY)
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* TOP-LEFT: Exact Organic Fluid Sunset Wave Droplet Blob */}
        <div className="absolute top-0 left-0 w-[200px] sm:w-[260px] md:w-[300px] h-[160px] sm:h-[200px] md:h-[230px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 260 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="whatIsTopLeftFluidBlob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4A7A" />
                <stop offset="30%" stopColor="#FF6024" />
                <stop offset="70%" stopColor="#FF7A36" />
                <stop offset="100%" stopColor="#FFA665" />
              </linearGradient>
            </defs>
            <path
              d="M 0 0 L 220 0 C 190 20, 160 40, 130 60 C 80 90, 45 130, 20 170 C 8 188, 0 196, 0 200 Z"
              fill="url(#whatIsTopLeftFluidBlob)"
            />
          </svg>
        </div>
        {/* Sparkle star near top-left */}
        <div className="absolute top-8 sm:top-10 left-10 sm:left-14 text-[#E4521B]">
          <SparkleStar className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
        </div>

        {/* BOTTOM-LEFT: Soft Peach Wave Wash */}
        <div className="absolute bottom-0 left-0 w-[240px] sm:w-[320px] h-[160px] sm:h-[220px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 320 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="whatIsBottomLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8F4D" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#FED7AA" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 220 L 0 100 C 60 100, 140 140, 200 175 C 260 210, 290 215, 320 220 Z"
              fill="url(#whatIsBottomLeftGrad)"
            />
          </svg>
        </div>

        {/* BOTTOM-RIGHT: Luminous Sunset-Berry Gradient Wave + Sparkle Star */}
        <div className="absolute bottom-0 right-0 w-[260px] sm:w-[360px] h-[180px] sm:h-[240px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 360 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="whatIsBottomRightGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF4A7A" stopOpacity="0.8" />
                <stop offset="42%" stopColor="#FF7A3D" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 360 240 L 160 240 C 210 190, 270 160, 310 120 C 335 95, 350 60, 360 40 Z"
              fill="url(#whatIsBottomRightGrad)"
            />
          </svg>
          <div className="absolute bottom-8 sm:bottom-10 right-14 sm:right-20 text-[#E4521B]">
            <SparkleStar className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* ========================================================
            MAIN EDITORIAL GRID: 2 COLUMNS (Text & Icons Left, Visual Right)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Editorial Typography, Copy, Button, & Icons Below Button */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow: Dual-square icon + WHAT IS KodeToMates? */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 mb-3 select-none cursor-default"
            >
              <span className="flex items-center justify-center shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4.5 h-4.5 shrink-0"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.45" />
                  <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#E4521B" />
                </svg>
              </span>
              <span className="font-sans font-bold text-[12px] sm:text-[13px] tracking-[0.16em] text-[#C2410C] uppercase">
                WHAT IS KodeToMates?
              </span>
            </motion.div>

            {/* Main Headline: Line 1 Bold Charcoal, Line 2 Bold Sunset Berry Gradient (No Italic, matching all sections) */}
            <motion.h2
              id="what-is-kodetomates-heading"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.4rem,4.2vw,3.8rem)] font-bold text-[#111827] leading-[1.12] tracking-tight mb-2.5"
            >
              <div>More than learning.</div>
              <div className="mt-1">
                <span className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent">
                  More than building.
                </span>
              </div>
            </motion.h2>

            {/* Signature Decorative Down Line with Square Dot (━━━━ ▪) matching all sections */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2 my-3.5 sm:my-4 origin-left"
              aria-hidden="true"
            >
              <span className="w-12 sm:w-14 h-[3.5px] rounded-[1px] bg-gradient-to-r from-[#FF914D] to-[#AB003E]" />
              <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#AB003E]" />
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#554E48] font-normal max-w-xl mb-6 sm:mb-7"
            >
              We bring learning, building and collaboration into one environment so technology becomes something you practice, share and create — not something you only study.
            </motion.p>

            {/* CTA Button: Explore Our Community → */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mb-7 sm:mb-8"
            >
              <Link
                href="/community"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF662B] to-[#FF4D1A] text-white font-sans font-semibold text-[14.5px] shadow-[0_6px_22px_rgba(255,85,32,0.32)] hover:shadow-[0_8px_28px_rgba(255,85,32,0.45)] hover:-translate-y-0.5 transition-all duration-300 select-none"
              >
                <span>Explore Our Community</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* ========================================================
                4 FEATURE PILLARS DIRECTLY DOWN BELOW THE BUTTON
                (Matching exact reference image layout)
               ======================================================== */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: 0.26 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4 w-full pt-1"
            >
              {FEATURE_PILLARS.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="flex items-start sm:items-center gap-2.5 py-1">
                    {/* Icon Squircle */}
                    <span className={`w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-[10px] ${pillar.squircleBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${pillar.iconColor} stroke-[2.2]`} />
                    </span>

                    {/* Title & Subtitle */}
                    <div className="flex flex-col min-w-0">
                      <span className="font-sans font-bold text-[13px] sm:text-[13.5px] text-[#111827] leading-tight">
                        {pillar.title}
                      </span>
                      <span className="font-sans text-[10.5px] sm:text-[11px] text-[#78716C] leading-tight mt-0.5 truncate">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Trending Showcase with community-sticky-notes.jpg */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end w-full select-none mt-6 lg:mt-0"
          >
            {/* Ambient Warm Gradient Glow Behind Card */}
            <div 
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#FF7A3D]/25 via-[#FFA665]/20 to-[#FF4A7A]/20 rounded-[44px] blur-2xl opacity-75 pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Floating Trending Badge Top-Left */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute -top-3.5 left-4 sm:-top-5 sm:left-6 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/80 flex items-center gap-2.5 z-20 pointer-events-none select-none"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6]">
                <Sparkles className="w-4 h-4 text-[#FF7A3D]" />
              </span>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[12px] sm:text-[13px] text-[#111827] leading-tight">Learn & Build</span>
                <span className="font-sans text-[10px] sm:text-[10.5px] text-[#6B7280] leading-tight mt-0.5">Hands-on practice</span>
              </div>
            </motion.div>

            {/* Floating Trending Badge Bottom-Right */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute -bottom-3.5 right-4 sm:-bottom-5 sm:right-6 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_14px_34px_rgba(228,82,27,0.18)] border border-white/80 flex items-center gap-2.5 z-20 pointer-events-none select-none"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#FF662B] to-[#FF4D1A] flex items-center justify-center text-white shadow-sm shadow-[#FF5520]/40">
                <Code2 className="w-4 h-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[12px] sm:text-[13px] text-[#111827] leading-tight">Real Products</span>
                <span className="font-sans text-[10px] sm:text-[10.5px] text-[#E4521B] font-semibold leading-tight mt-0.5">Built by community</span>
              </div>
            </motion.div>

            {/* Master Showcase Frame with Gradient Border & Soft Squircle Curvature */}
            <div className="relative w-full max-w-[500px] p-2 sm:p-2.5 rounded-[30px] sm:rounded-[36px] bg-gradient-to-b from-white/90 via-white/50 to-white/20 backdrop-blur-md border border-white/80 shadow-[0_22px_55px_-12px_rgba(228,82,27,0.14)] overflow-hidden">
              <div className="relative w-full aspect-[16/11] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#FEF6EC]">
                <Image
                  src="/images/projects/community-sticky-notes.jpg"
                  alt="KodeToMates Community Sticky Notes Collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center pointer-events-none select-none transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Subtle Cinematic Vignette / Depth Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" 
                  aria-hidden="true" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

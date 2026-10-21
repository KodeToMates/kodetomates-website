'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface HeadingItem {
  lines: React.ReactNode[]
}

const HEADINGS: HeadingItem[] = [
  {
    lines: [
      'Next-Gen',
      'Tech Community for',
      'Growing Builders',
    ],
  },
  {
    lines: [
      'Build Real-World',
      'Projects. Shape',
      'the Future',
    ],
  },
  {
    lines: [
      'Learn Together',
      'Grow Together',
    ],
  },
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance heading slowly and smoothly every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HEADINGS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[100vh] flex flex-col justify-between overflow-hidden bg-[#0C0B0A] selection:bg-[#E4521B]/30 selection:text-white pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12">
      {/* --- 1. FULL-WIDTH BACKGROUND PHOTOGRAPHY & CINEMATIC ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Main Cinematic Image: Developer in kinetic motion blur with loft studio background */}
        <Image
          src="/images/hero-kinetic-cinematic.jpg"
          alt="KodeToMates Creative Tech Community"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] filter brightness-[0.72] contrast-[1.08] scale-[1.02]"
        />

        {/* Deep Vignette Overlays for 100% Crisp Headline Contrast (No borders, completely seamless) */}
        {/* Left-to-right dark gradient ensuring text side is deep charcoal/black */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A] via-[#0C0B0A]/85 to-transparent z-10 w-full sm:w-[85%] lg:w-[65%]" />

        {/* Bottom-to-top vignette ensuring tags and buttons are razor legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/55 to-transparent z-10" />

        {/* Top-to-bottom gentle dark veil behind the floating navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0B0A]/75 via-transparent to-transparent z-10" />

        {/* Subtle warm ambient highlight echoing the brand coral */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#E4521B]/10 blur-[130px] pointer-events-none z-10" />
      </div>

      {/* --- 2. INNER CONTENT WRAPPER (Full-width responsive alignment, no white outline) --- */}
      <div className="relative z-20 w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 h-full flex flex-col justify-between flex-1">

        {/* --- MIDDLE: GIANT EDITORIAL HEADLINE WITH ULTRA-SMOOTH SLOW FRAMER MOTION TRANSITIONS --- */}
        <div className="my-auto py-6 sm:py-8 max-w-[960px] min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] flex items-center relative overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.h1
              key={currentIndex}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 28, filter: 'blur(10px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -28, filter: 'blur(10px)' }
              }
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full text-white font-sans font-bold text-[clamp(40px,5.8vw,92px)] leading-[1.03] tracking-[-0.035em]"
            >
              {HEADINGS[currentIndex].lines.map((line, idx) => (
                <span key={idx} className="block text-white">
                  {line}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* --- BOTTOM ROW: LEFT TAGS & RIGHT DESCRIPTION + ACTIONS --- */}
        <div className="pt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">

          {/* Bottom Left: Tag Pills (+ Learn, + Build, + Collaborate) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center flex-wrap gap-6 sm:gap-10 text-white/70 text-xs sm:text-[14px] font-sans font-medium"
          >
            <div className="flex items-center gap-1.5 group cursor-default">
              <span className="text-[#E4521B] font-semibold text-sm">+</span>
              <span className="text-white/80 group-hover:text-white transition-colors">Learn</span>
            </div>
            <div className="flex items-center gap-1.5 group cursor-default">
              <span className="text-[#E4521B] font-semibold text-sm">+</span>
              <span className="text-white/80 group-hover:text-white transition-colors">Build</span>
            </div>
            <div className="flex items-center gap-1.5 group cursor-default">
              <span className="text-[#E4521B] font-semibold text-sm">+</span>
              <span className="text-white/80 group-hover:text-white transition-colors">Collaborate</span>
            </div>
          </motion.div>

          {/* Bottom Right: Description Copy + Dual Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:items-end text-left lg:text-right gap-4 sm:gap-5"
          >
            {/* Description Text */}
            <div className="text-white/75 text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-sans max-w-[360px]">
              <p className="font-semibold text-white/95">Open Source Software & Products</p>
              <p className="text-white/70">Full-Stack engineering & real-world projects for modern builders.</p>
            </div>

            {/* Action Buttons: Coral Primary ("View Projects ↗") & White Secondary ("Reach Out ↗") */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#E4521B] hover:bg-[#CC420F] text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.32)] hover:shadow-[0_12px_28px_rgba(228,82,27,0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#F2EFEA] text-[#141210] font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Reach Out</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

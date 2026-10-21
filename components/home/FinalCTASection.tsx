'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { JoinCTAButton } from '@/components/common/JoinCTAButton'

export function FinalCTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="join"
      className="relative z-10 w-full min-h-screen min-h-[100svh] py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center overflow-hidden bg-[#FEF5EB] selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="join-heading"
    >
      {/* ========================================================
          CENTERED HERO CONTENT (EXACT REFERENCE PARITY)
         ======================================================== */}
      <div className="relative w-full max-w-5xl mx-auto px-6 sm:px-8 text-center z-10 flex flex-col items-center my-auto">
        
        {/* --- MAIN HEADLINE CONTAINER WITH ATTACHED DOODLE & BURSTS --- */}
        <div className="relative inline-flex flex-col items-center max-w-full">

          {/* TOP DOODLE ANNOTATION: Let's Build Together' with curved hand-drawn arrows */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 select-none self-center"
          >
            {/* Left Arrow pointing up-right towards "Let's Build Together" */}
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              className="w-6 h-4 sm:w-7 sm:h-4.5 text-[#FA6F52] -translate-y-0.5"
              aria-hidden="true"
            >
              <path
                d="M 2 17 C 9 14, 18 10, 26 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M 20 4 L 27 5 L 25 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Hand-drawn style script text with ending quote */}
            <span 
              className="font-serif italic font-medium text-[16px] sm:text-[18px] md:text-[19px] text-[#FA6F52] tracking-wide rotate-[-3deg] inline-block px-1"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Let&apos;s Build Together&#39;
            </span>

            {/* Right Arrow curving up and arched down pointing towards the word "idea?" */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="w-6.5 h-6.5 sm:w-7 sm:h-7 text-[#FA6F52] translate-y-1.5"
              aria-hidden="true"
            >
              <path
                d="M 3 3 C 14 0, 22 6, 21 21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M 16 16 L 21 23 L 26 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          
          {/* Left Radiating Spark Burst Rays (positioned left of lines 1 & 2) */}
          <div 
            className="absolute -left-10 sm:-left-14 md:-left-16 top-[36%] -translate-y-1/2 pointer-events-none select-none hidden sm:block" 
            aria-hidden="true"
          >
            <svg width="34" height="42" viewBox="0 0 34 42" fill="none" className="w-7 sm:w-8 md:w-9 text-[#FA6F52]">
              {/* Upper ray: angled up-left */}
              <line x1="30" y1="21" x2="8" y2="6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
              {/* Middle ray: angled slightly up-left */}
              <line x1="32" y1="26" x2="4" y2="20" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
              {/* Lower ray: almost horizontal */}
              <line x1="30" y1="31" x2="6" y2="34" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Right Radiating Spark Burst Rays (positioned right of lines 2 & 3) */}
          <div 
            className="absolute -right-10 sm:-right-14 md:-right-16 top-[54%] -translate-y-1/2 pointer-events-none select-none hidden sm:block" 
            aria-hidden="true"
          >
            <svg width="34" height="42" viewBox="0 0 34 42" fill="none" className="w-7 sm:w-8 md:w-9 text-[#FA6F52]">
              {/* Upper ray: angled up-right */}
              <line x1="4" y1="21" x2="26" y2="6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
              {/* Middle ray: angled slightly up-right */}
              <line x1="2" y1="26" x2="30" y2="20" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
              {/* Lower ray: almost horizontal */}
              <line x1="4" y1="31" x2="28" y2="34" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* 3-Line Centered Serif Headline with strict no-wrap per line */}
          <motion.h2
            id="join-heading"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(1.9rem,4.4vw,3.75rem)] font-bold text-[#181513] leading-[1.12] tracking-tight text-center"
          >
            {/* Line 1: Have an idea? */}
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-3.5 whitespace-nowrap">
              <span>Have an</span>
              <span className="bg-gradient-to-r from-[#FF7A32] to-[#FF4E36] bg-clip-text text-transparent">
                idea?
              </span>
            </div>

            {/* Line 2: Have something to learn? */}
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-3.5 whitespace-nowrap mt-0.5 sm:mt-1">
              <span>Have something to</span>
              <span className="bg-gradient-to-r from-[#F04358] to-[#D52968] bg-clip-text text-transparent">
                learn?
              </span>
            </div>

            {/* Line 3: Have something to build? */}
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-3.5 whitespace-nowrap mt-0.5 sm:mt-1">
              <span>Have something to</span>
              <span className="bg-gradient-to-r from-[#B05FA4] via-[#985390] to-[#7D477C] bg-clip-text text-transparent">
                build?
              </span>
            </div>
          </motion.h2>
        </div>

        {/* --- SUBTITLE COPY --- */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[15px] sm:text-[17px] md:text-[18.5px] text-[#554E48] font-normal tracking-[-0.01em] mt-4 sm:mt-5 mb-8 sm:mb-9 max-w-xl text-center"
        >
          There is a place for you at KodeToMates.
        </motion.p>

        {/* --- REUSABLE CTA BUTTON --- */}
        <JoinCTAButton href="/join" label="Join to KodeToMates" />
      </div>
    </section>
  )
}

// Alias export for backward compatibility
export const JoinKodeToMatesSection = FinalCTASection


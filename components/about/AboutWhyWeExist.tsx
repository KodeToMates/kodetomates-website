'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { SlitHeading } from '@/components/ui'
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react'

export function AboutWhyWeExist() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100 overflow-hidden selection:bg-[#E4521B]/20 selection:text-[#161413]">
      {/* Soft Ambient Radial Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.04)_0%,transparent_70%)] blur-3xl -z-10"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* ===================================================================
            UPPER SPLIT: Left Context & Right Editorial Image
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* LEFT SIDE: Narrative Context */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Section Heading with Signature Slit Reveal */}
            <div className="w-full mb-2">
              <SlitHeading
                id="why-we-exist-heading"
                align="left"
                lines={['Why KodeToMates <span style="color: var(--color-primary-orange)">exists.</span>']}
                showAccentLine={true}
                slit={0.35}
                dotColor="#E4521B"
                textColor="#161413"
                className="text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-[-0.03em]"
              />
            </div>

            {/* Narrative Body Copy */}
            <div className="space-y-4 text-left max-w-2xl text-[#6B645E] font-sans text-[15px] sm:text-[16.5px] leading-relaxed mt-4">
              <p className="text-[#161413] font-semibold text-[16.5px] sm:text-[18px] leading-snug">
                Good ideas deserve more than a conversation. They deserve the opportunity to be explored, tested, and built.
              </p>

              <p>
                We see opportunities to make everyday experiences simpler, improve the way businesses work, and create digital products that solve real problems.
              </p>

              <p>
                But building something useful takes more than writing code. It takes understanding people, questioning assumptions, thoughtful design, collaboration, and a willingness to improve.
              </p>
            </div>

            {/* Highlight Takeaway Banner */}
            <div className="mt-7 w-full max-w-2xl p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#F0EBE1] flex items-center gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center shrink-0 text-[#E4521B]">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="font-sans font-bold text-base sm:text-[17px] text-[#161413] tracking-[-0.01em]">
                KodeToMates brings these elements together.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Editorial Image */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#EAE4DC] shadow-[0_16px_40px_rgba(0,0,0,0.08)] bg-neutral-100 group">
              <Image
                src="/images/contact-journey.jpg"
                alt="KodeToMates team collaborating on ideas and technology"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gentle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Glassmorphic Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E4521B] animate-pulse" />
                  <span className="font-sans font-bold text-xs sm:text-[13px] text-[#161413] tracking-tight">
                    Beyond Tutorials · Real Outcomes
                  </span>
                </div>
                <span className="font-sans font-semibold text-[11px] text-[#E4521B] uppercase tracking-wider">
                  Est. 2024
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ===================================================================
            BELOW: Vision and Mission Cards (2-Column Grid)
           =================================================================== */}
        <div className="mt-14 sm:mt-18 pt-10 sm:pt-14 border-t border-[#F0EBE1]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* 1. MISSION CARD */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 sm:p-9 rounded-[28px] bg-[#FAF8F5] hover:bg-white border border-[#EAE4DC] hover:border-[#E4521B]/40 shadow-xs hover:shadow-[0_16px_36px_rgba(228,82,27,0.08)] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Header Row: Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#E4521B]/10 text-[#E4521B] flex items-center justify-center transition-transform group-hover:scale-105">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#E4521B]">
                    Purpose & Direction
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-2xl sm:text-[28px] text-[#161413] tracking-[-0.02em] mb-3 group-hover:text-[#E4521B] transition-colors">
                  Our mission
                </h3>

                {/* Verbatim Description */}
                <p className="font-sans text-[15px] sm:text-[16px] text-[#6B645E] leading-relaxed">
                  To bring curious minds together to learn continuously, build meaningful digital solutions, and collaborate with businesses and communities to solve real-world problems.
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#EAE4DC]/80 flex items-center justify-between text-xs font-sans font-semibold text-[#161413]">
                <div className="flex items-center gap-1.5 text-[#E4521B]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Actionable Delivery</span>
                </div>
                <span className="text-[#8C847C]">Learn · Build · Solve</span>
              </div>
            </motion.div>

            {/* 2. VISION CARD */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 sm:p-9 rounded-[28px] bg-[#FAF8F5] hover:bg-white border border-[#EAE4DC] hover:border-[#E4521B]/40 shadow-xs hover:shadow-[0_16px_36px_rgba(228,82,27,0.08)] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Header Row: Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#E4521B]/10 text-[#E4521B] flex items-center justify-center transition-transform group-hover:scale-105">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#E4521B]">
                    Long-Term Horizon
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-2xl sm:text-[28px] text-[#161413] tracking-[-0.02em] mb-3 group-hover:text-[#E4521B] transition-colors">
                  Our vision
                </h3>

                {/* Verbatim Description */}
                <p className="font-sans text-[15px] sm:text-[16px] text-[#6B645E] leading-relaxed">
                  To grow into a collaborative technology community where learning turns into capability, ideas turn into products, and people grow by creating value together.
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#EAE4DC]/80 flex items-center justify-between text-xs font-sans font-semibold text-[#161413]">
                <div className="flex items-center gap-1.5 text-[#E4521B]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enduring Community</span>
                </div>
                <span className="text-[#8C847C]">Capability · Products · Value</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

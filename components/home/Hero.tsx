'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HeroVisual } from './HeroVisual'
import { HeroHeadline } from './HeroHeadline'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full overflow-x-clip overflow-y-visible pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-4 selection:bg-[#E4521B]/20 selection:text-[#E4521B]">
      {/* Full-width container: text vertically centered, stage pinned right */}
      <div className="relative w-full min-h-[82svh] lg:min-h-[86svh] flex flex-col justify-center overflow-visible">
        
        {/* --- LEFT COLUMN: TYPOGRAPHY & ACTIONS --- */}
        {/* Left edge at 5.2vw, max-width 50vw, text-align left, items-start */}
        <div className="relative z-20 ml-0 pl-[5.2vw] max-w-[50vw] text-left flex flex-col items-start justify-center pt-[105px] sm:pt-[115px] lg:pt-[125px] pb-4">
          
          {/* H1 Heading: Trending Animations (Kinetic Character Wave, Deblur, Shimmer & SVG Swoosh) */}
          <HeroHeadline />

          {/* Description copy matching reference design */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-[2.4vw] max-w-[43vw]"
          >
            <p className="font-sans text-[clamp(15px,1.14vw,19.5px)] leading-[1.62] text-[#554E48] font-normal tracking-[-0.01em]">
              KodeToMates is a collaborative technology community where people learn by doing, build real-world projects, share knowledge and grow together.
            </p>
          </motion.div>

          {/* Call-To-Action Buttons: Join (16.7vw x 3.6vw), Explore (15.6vw x 3.6vw), gap 1.3vw */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-[1.3vw]"
          >
            {/* Primary Sunset Berry Gradient Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/join"
                className="group relative inline-flex items-center justify-center gap-2.5 w-[clamp(185px,16.7vw,280px)] h-[clamp(44px,3.6vw,60px)] rounded-full bg-gradient-to-r from-[#FF914D] to-[#AB003E] text-white font-sans font-semibold text-[clamp(14px,1vw,16.5px)] shadow-[0_8px_20px_rgba(171,0,62,0.35)] hover:shadow-[0_12px_28px_rgba(171,0,62,0.48)] hover:brightness-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="relative z-10">Join KodeToMates</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Outline Explore Projects Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 w-[clamp(170px,15.6vw,260px)] h-[clamp(44px,3.6vw,60px)] rounded-full border border-[#FF914D]/50 bg-[#FFF6EA]/60 backdrop-blur-sm text-[#AB003E] font-sans font-semibold text-[clamp(14px,1vw,16.5px)] hover:border-[#AB003E] hover:bg-[#FFEAD0]/70 hover:shadow-[0_6px_16px_rgba(171,0,62,0.14)] transition-all duration-300"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* --- RIGHT COLUMN: LOCKED STAGE VISUAL (Desktop) --- */}
        <HeroVisual />

        {/* --- MOBILE VISUAL (Screens < 768px: positioned below text) --- */}
        <div className="md:hidden relative w-[92vw] aspect-[840/640] mx-auto my-8 overflow-visible">
          <div 
            className="w-full h-full relative"
            style={{ containerType: 'inline-size' } as React.CSSProperties}
          >
            <HeroVisual isMobile={true} />
          </div>
        </div>

      </div>
    </section>
  )
}

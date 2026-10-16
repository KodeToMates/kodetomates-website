'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export function HeroHeadline() {
  const shouldReduceMotion = useReducedMotion()
  const [morphWordIndex, setMorphWordIndex] = useState(0)

  // Rotating action verbs for the dynamic first word effect
  const morphWords = ['Build', 'Code', 'Ship', 'Scale', 'Create']

  useEffect(() => {
    const interval = setInterval(() => {
      setMorphWordIndex((prev) => (prev + 1) % morphWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [morphWords.length])

  return (
    <div className="relative overflow-visible mb-[1.8vw]">

      {/* --- H1 HEADLINE ELEMENT --- */}
      <h1 className="text-[clamp(38px,4.8vw,80px)] leading-[1.04] tracking-[-0.03em] select-none relative z-10">
        {/* LINE 1: Dynamic First Word (Build/Code/Ship/Scale/Create) + together (NO WAVE, NO DOT) */}
        <div className="relative flex items-baseline whitespace-nowrap overflow-visible">
          {/* Dynamic morphing slot for first word */}
          <div className="relative inline-flex overflow-hidden items-baseline py-1 -my-1 mr-[0.38em]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={morphWords[morphWordIndex]}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { y: 36, opacity: 0, filter: 'blur(5px)' }
                }
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -36, opacity: 0, filter: 'blur(5px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative inline-block font-[family-name:var(--font-jakarta)] font-extrabold text-[#161413] tracking-[-0.035em]"
              >
                {morphWords[morphWordIndex]}

                {/* Radiant spark marks on 'Build' */}
                {morphWords[morphWordIndex] === 'Build' && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-2.5 -right-3 w-3.5 h-3.5 text-[#FF7A3D] pointer-events-none overflow-visible"
                  >
                    <path d="M 3 13 L 1 6 M 9 13 L 13 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                )}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Word: together (NO WAVE UNDERLINE, NO DOT, WITH pb-4 to prevent 'g' clipping) */}
          <motion.div layout transition={{ type: 'spring', stiffness: 350, damping: 25 }} className="relative inline-block">
            <span className="relative inline-block font-[family-name:var(--font-playfair)] font-bold tracking-[-0.02em] bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(171,0,62,0.28)] pb-4 -mb-4 pt-1 -mt-1 overflow-visible">
              together
            </span>
          </motion.div>
        </div>

        {/* LINE 2: Learn together (WITH WAVE SWOOSH UNDERLINE, NO DOT) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-baseline whitespace-nowrap overflow-visible mt-[0.55vw]"
        >
          {/* Word: Learn (Geometric Bold Sans-Serif) */}
          <span className="font-[family-name:var(--font-jakarta)] font-extrabold text-[#161413] tracking-[-0.035em] mr-[0.38em]">
            Learn
          </span>

          {/* Word: together (WITH WAVE SWOOSH, NO DOT, WITH pb-4 to prevent 'g' clipping) */}
          <span className="relative inline-block">
            <span className="relative inline-block font-[family-name:var(--font-playfair)] font-bold tracking-[-0.02em] bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(171,0,62,0.28)] pb-4 -mb-4 pt-1 -mt-1 overflow-visible">
              together
            </span>

            {/* Hand-drawn Animated SVG Wave Swoosh Underline ONLY on the bottom line */}
            <svg
              viewBox="0 0 220 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-[0.24vw] left-0 w-full overflow-visible pointer-events-none drop-shadow-[0_2px_5px_rgba(171,0,62,0.25)]"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 3 12 C 45 4, 140 3, 215 11"
                stroke="url(#orange-swoosh-grad-line2)"
                strokeWidth="3.2"
                strokeLinecap="round"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  pathLength: { duration: 0.95, delay: 0.45, ease: [0.16, 1, 0.3, 1] },
                }}
              />
              <defs>
                <linearGradient id="orange-swoosh-grad-line2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF914D" />
                  <stop offset="100%" stopColor="#AB003E" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.div>
      </h1>
    </div>
  )
}

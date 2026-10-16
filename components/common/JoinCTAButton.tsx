'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'

export interface JoinCTAButtonProps {
  href?: string
  onClick?: () => void
  label?: string
  className?: string
  showDoodles?: boolean
  target?: string
  rel?: string
}

export function JoinCTAButton({
  href = '/join',
  onClick,
  label = 'Join to KodeToMates',
  className = '',
  showDoodles = false,
  target,
  rel,
}: JoinCTAButtonProps) {
  const shouldReduceMotion = useReducedMotion()

  const buttonContent = (
    <div
      className={`group relative inline-flex items-center justify-center select-none ${className}`}
    >
      {/* ========================================================
          HAND-DRAWN DOODLE ACCENTS AROUND THE BUTTON (EXACT PARITY)
         ======================================================== */}
      {showDoodles && (
        <>
          {/* Bottom-Left Hand-Drawn Accent Loop */}
          <svg
            className="absolute -left-8 sm:-left-10 -bottom-4 sm:-bottom-5 w-28 sm:w-32 h-20 sm:h-24 pointer-events-none select-none z-0 overflow-visible"
            viewBox="0 0 120 90"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 85 64 C 60 82, 25 80, 12 66 C 0 52, 6 36, 22 32 C 36 28, 50 38, 58 48"
              stroke="#FF6B26"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>

          {/* Top-Right Hand-Drawn Arch Loop + 3 Detached Floating Burst Dashes */}
          <svg
            className="absolute -right-7 sm:-right-9 -top-6 sm:-top-7 w-32 sm:w-36 h-24 sm:h-28 pointer-events-none select-none z-10 overflow-visible"
            viewBox="0 0 140 100"
            fill="none"
            aria-hidden="true"
          >
            {/* Elegant crescent arch over the top-right corner ending gracefully at the right midpoint */}
            <path
              d="M 25 26 C 45 6, 72 6, 90 22 C 100 32, 102 44, 99 56"
              stroke="#FF6B26"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Ray 1: Floating steep diagonal dash (~60°), detached from curve */}
            <line x1="98" y1="8" x2="106" y2="-6" stroke="#FF6B26" strokeWidth="3.2" strokeLinecap="round" />

            {/* Ray 2: Floating diagonal dash (~35°), detached from curve */}
            <line x1="112" y1="24" x2="128" y2="13" stroke="#FF6B26" strokeWidth="3.2" strokeLinecap="round" />

            {/* Ray 3: Floating almost horizontal dash (~5°), detached from curve */}
            <line x1="114" y1="46" x2="129" y2="45" stroke="#FF6B26" strokeWidth="3.2" strokeLinecap="round" />
          </svg>
        </>
      )}

      {/* ========================================================
          OUTER FROSTED GLASS CAPSULE (APPROX 330px × 76px ON DESKTOP)
         ======================================================== */}
      <div className="relative z-10 w-full sm:w-[330px] h-[70px] sm:h-[76px] p-2 sm:p-2.5 rounded-full bg-white/45 backdrop-blur-md border-[1.5px] border-white/85 shadow-[0_20px_45px_rgba(255,107,38,0.22),0_12px_28px_rgba(216,27,96,0.2),inset_0_1.5px_2px_rgba(255,255,255,0.95)] hover:shadow-[0_26px_55px_rgba(255,107,38,0.32),0_16px_36px_rgba(216,27,96,0.28),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:-translate-y-[2.5px] transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-[#FF6B26] focus-within:ring-offset-2">
        {/* INNER VIBRANT SUNSET-TO-MAGENTA PILL */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-r from-[#FF6B26] via-[#F8493A] to-[#D81B60] flex items-center justify-between px-6 sm:px-7 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),0_8px_20px_rgba(216,27,96,0.32)] overflow-hidden">
          {/* Subtle glossy top reflection shimmer on hover */}
          <span 
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" 
            aria-hidden="true" 
          />

          {/* White Semibold Label */}
          <span className="font-sans font-semibold text-white text-[16px] sm:text-[17.5px] tracking-wide whitespace-nowrap">
            {label}
          </span>

          {/* Circular Translucent Arrow Container with 6-8px glide on hover */}
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 border border-white/35 flex items-center justify-center text-white backdrop-blur-sm shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition-transform duration-300 ease-out group-hover:translate-x-[7px] group-focus-visible:translate-x-[7px] motion-reduce:transform-none">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )

  const entranceMotionProps: HTMLMotionProps<'div'> = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const },
  }

  if (href) {
    return (
      <motion.div {...entranceMotionProps}>
        <Link
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B26] focus-visible:ring-offset-2 rounded-full"
          aria-label={label}
        >
          {buttonContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div {...entranceMotionProps}>
      <button
        type="button"
        onClick={onClick}
        className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B26] focus-visible:ring-offset-2 rounded-full cursor-pointer"
        aria-label={label}
      >
        {buttonContent}
      </button>
    </motion.div>
  )
}

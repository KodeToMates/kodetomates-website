'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface UniqueLoaderProps {
  /** Variant of the loader UI */
  variant?: 'fullscreen' | 'card' | 'inline' | 'minimal'
  /** Optional custom title/heading */
  title?: string
  /** Optional custom loading message or array of rotating messages */
  messages?: string[]
  /** Show animated progress bar */
  showProgress?: boolean
  /** Simulated progress percentage (0-100) or undefined for indeterminate */
  progress?: number
  /** Additional CSS class names */
  className?: string
  /** Code tag label shown in terminal badge */
  tag?: string
}

const DEFAULT_MESSAGES = [
  'Harvesting organic pixels...',
  'Compiling fresh components...',
  'Brewing high-performance UI...',
  'Synthesizing community energy...',
  'Polishing interactive details...',
  'Serving hot code...'
]

/**
 * Unique KodeToMates Cyber-Tomato Emblem
 * Combines organic tomato curves, fresh green calyx, and radiant tech code runes
 */
export function TomatoEmblem({
  size = 72,
  pulse = true,
  className = ''
}: {
  size?: number
  pulse?: boolean
  className?: string
}) {
  return (
    <div
      className={cn('relative inline-flex items-center justify-center select-none', className)}
      style={{ width: size, height: size }}
      role="img"
      aria-label="KodeToMates Animated Tomato Emblem"
    >
      {/* Ambient background glow orb */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E4521B]/30 via-[#FF914D]/40 to-[#AB003E]/20 blur-xl animate-pulse"
        style={{ transform: 'scale(1.4)' }}
      />

      {/* Outer Orbital Ring with Glowing Tech Particles */}
      <div className="absolute inset-[-14%] rounded-full border border-dashed border-[#FF914D]/35 animate-spin-slow pointer-events-none" />

      {/* Floating Counter-Rotating Code Braces */}
      <div
        className="absolute inset-[-24%] pointer-events-none flex items-center justify-between text-[#E4521B]/60 font-mono text-[11px] font-bold"
        style={{ animation: 'spin-slow 16s linear infinite reverse' }}
      >
        <span className="bg-surface-paper/80 shadow-sm border border-[#E4521B]/20 rounded px-1 py-0.5 backdrop-blur-xs">
          &#123;
        </span>
        <span className="bg-surface-paper/80 shadow-sm border border-[#E4521B]/20 rounded px-1 py-0.5 backdrop-blur-xs">
          &#125;
        </span>
      </div>

      {/* Main Tomato SVG Graphic */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'relative z-10 w-full h-full drop-shadow-[0_8px_20px_rgba(228,82,27,0.32)] transition-transform duration-500',
          pulse && 'animate-float-slow'
        )}
      >
        <defs>
          {/* Rich multi-stop gradient for ripe tomato body */}
          <radialGradient
            id="tomato-body-grad"
            cx="38%"
            cy="36%"
            r="65%"
            fx="32%"
            fy="30%"
          >
            <stop offset="0%" stopColor="#FFA666" />
            <stop offset="28%" stopColor="#FF7A3D" />
            <stop offset="70%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#A71D31" />
          </radialGradient>

          {/* Leaf / Stem fresh green gradient */}
          <linearGradient id="calyx-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>

          {/* Glare specular highlight */}
          <linearGradient id="glare-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Code rune glow filter */}
          <filter id="rune-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#FFFFFF" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Stem / Calyx (Emerald Leaves on top of tomato) */}
        <g className="origin-top animate-pulse" style={{ animationDuration: '3s' }}>
          {/* Main vertical curved stem */}
          <path
            d="M 50 18 C 49 11, 46 8, 41 6 C 41 6, 47 7, 51 14 Z"
            fill="url(#calyx-grad)"
          />
          {/* Left star leaf */}
          <path
            d="M 50 17 C 42 16, 32 14, 25 18 C 30 20, 39 20, 48 21 Z"
            fill="url(#calyx-grad)"
          />
          {/* Right star leaf */}
          <path
            d="M 50 17 C 58 15, 68 13, 75 17 C 70 20, 61 20, 52 21 Z"
            fill="url(#calyx-grad)"
          />
          {/* Center-front star leaf tip */}
          <path
            d="M 47 18 C 49 22, 50 25, 51 27 C 52 25, 53 22, 53 18 Z"
            fill="url(#calyx-grad)"
          />
        </g>

        {/* Main Voluptuous Tomato Body */}
        <path
          d="M 50 22
             C 67 22, 88 32, 88 56
             C 88 77, 72 88, 50 88
             C 28 88, 12 77, 12 56
             C 12 32, 33 22, 50 22 Z"
          fill="url(#tomato-body-grad)"
        />

        {/* Tomato indentation crevice at the top */}
        <path
          d="M 44 22 C 48 24, 52 24, 56 22 C 54 26, 46 26, 44 22 Z"
          fill="#8E1424"
          opacity="0.6"
        />

        {/* Specular Light Reflection / Glossy Sheen */}
        <ellipse
          cx="33"
          cy="36"
          rx="12"
          ry="7"
          transform="rotate(-25 33 36)"
          fill="url(#glare-grad)"
          opacity="0.55"
        />
        <circle cx="25" cy="42" r="2.5" fill="#FFFFFF" opacity="0.4" />

        {/* Futuristic / Tech Code Rune at the Center of the Tomato: < / > */}
        <g filter="url(#rune-glow)">
          {/* Left Angle Bracket < */}
          <path
            d="M 42 50 L 36 55 L 42 60"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Code Slash / */}
          <line
            x1="47"
            y1="62"
            x2="53"
            y2="48"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Right Angle Bracket > */}
          <path
            d="M 58 50 L 64 55 L 58 60"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Small bottom ambient shadow rim */}
        <path
          d="M 28 80 C 40 85, 60 85, 72 80 C 65 86, 35 86, 28 80 Z"
          fill="#520712"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}

/**
 * Master UniqueLoader Component
 */
export function UniqueLoader({
  variant = 'fullscreen',
  title = 'KodeToMates',
  messages = DEFAULT_MESSAGES,
  showProgress = true,
  progress,
  className,
  tag = 'SYSTEM:IDLE_COMPILE'
}: UniqueLoaderProps) {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0)
  const [internalProgress, setInternalProgress] = useState(12)

  // Cycle through funny and creative loading messages
  useEffect(() => {
    if (messages.length <= 1) return
    const interval = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % messages.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [messages.length])

  // Simulated fluid progress if no explicit progress is passed
  useEffect(() => {
    if (progress !== undefined) return
    const timer = setInterval(() => {
      setInternalProgress((old) => {
        if (old >= 92) return 92
        const inc = Math.floor(Math.random() * 8) + 4
        return Math.min(old + inc, 92)
      })
    }, 450)
    return () => clearInterval(timer)
  }, [progress])

  const effectiveProgress = progress !== undefined ? progress : internalProgress

  // Minimal variant: compact inline pill for buttons or tiny blocks
  if (variant === 'minimal') {
    return (
      <div
        className={cn('inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-paper/90 border border-brand-terracotta/20 shadow-xs backdrop-blur-md', className)}
        role="status"
        aria-live="polite"
      >
        <TomatoEmblem size={22} pulse={false} />
        <span className="text-xs font-mono font-medium text-[#1A1614] tracking-tight">
          {messages[activeMessageIndex] || 'Loading...'}
        </span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4521B] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E4521B]" />
        </span>
      </div>
    )
  }

  // Inline variant: suited for dynamic section placeholders or content blocks
  if (variant === 'inline') {
    return (
      <div
        className={cn(
          'w-full py-12 px-6 flex flex-col items-center justify-center text-center',
          className
        )}
        role="status"
        aria-live="polite"
      >
        <div className="relative mb-5">
          <TomatoEmblem size={56} />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4521B]/8 border border-[#E4521B]/15 text-[#E4521B] text-[11px] font-mono tracking-wider font-semibold uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B] animate-pulse" />
          {tag}
        </div>

        <div className="h-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeMessageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-sans font-medium text-[#5A5654]"
            >
              {messages[activeMessageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {showProgress && (
          <div className="w-48 h-1.5 bg-[#E4521B]/10 rounded-full overflow-hidden mt-4 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#AB003E] rounded-full"
              initial={{ width: '15%' }}
              animate={{ width: `${effectiveProgress}%` }}
              transition={{ ease: 'easeInOut', duration: 0.4 }}
            />
          </div>
        )}
      </div>
    )
  }

  // Card variant: suited for async modals, card replacements, or tabs
  if (variant === 'card') {
    return (
      <div
        className={cn(
          'w-full max-w-md mx-auto p-8 rounded-3xl bg-surface-paper/90 backdrop-blur-xl border border-white/80 shadow-[0_16px_40px_rgba(228,82,27,0.08)] flex flex-col items-center text-center relative overflow-hidden',
          className
        )}
        role="status"
        aria-live="polite"
      >
        {/* Subtle ambient gradient mesh in background */}
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#FF914D]/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-[#AB003E]/10 blur-2xl pointer-events-none" />

        <TomatoEmblem size={68} className="mb-4" />

        <h3 className="font-playfair font-bold text-2xl text-[#1A1614] tracking-[-0.02em] mb-1">
          {title}
        </h3>

        <div className="h-6 flex items-center justify-center overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeMessageIndex}
              initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
              transition={{ duration: 0.32 }}
              className="text-xs font-mono text-[#5A5654]"
            >
              {messages[activeMessageIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {showProgress && (
          <div className="w-full">
            <div className="w-full h-2 bg-[#E4521B]/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#AB003E] rounded-full relative"
                animate={{ width: `${effectiveProgress}%` }}
                transition={{ ease: 'easeOut', duration: 0.35 }}
              >
                {/* Glare sheen animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </motion.div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-[#8C847E] mt-2">
              <span>status: ripening</span>
              <span>{Math.round(effectiveProgress)}%</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Fullscreen variant: Used by app/loading.tsx and primary page switches
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-[linear-gradient(135deg,#FEF3E5_0%,#FDE6D0_50%,#F9E0C8_100%)] px-6 selection:bg-[#E4521B]/20',
        className
      )}
      role="status"
      aria-live="polite"
    >
      {/* Dynamic ambient atmospheric lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF914D]/25 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#AB003E]/15 blur-[130px] pointer-events-none animate-float-delayed" />
      <div className="absolute inset-0 bg-[radial-gradient(#E4521B_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />

      {/* Main Glassmorphic Hero Loading Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md p-8 md:p-10 rounded-[2.5rem] bg-surface-paper/85 backdrop-blur-2xl border border-white/80 shadow-[0_24px_70px_rgba(228,82,27,0.14)] flex flex-col items-center text-center"
      >
        {/* Top Cyber Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-dim/80 border border-brand-terracotta/20 text-[#E4521B] text-[11px] font-mono font-semibold tracking-wider uppercase mb-7 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4521B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E4521B]" />
          </span>
          {tag}
        </div>

        {/* Centerpiece Tomato Emblem */}
        <div className="relative mb-6">
          <TomatoEmblem size={96} />
        </div>

        {/* Brand Headline */}
        <h2 className="font-playfair font-extrabold text-[clamp(26px,3vw,34px)] tracking-[-0.03em] text-[#1A1614] mb-1">
          Kode<span className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent">To</span>Mates
        </h2>

        {/* Rotating Wit & Intelligence Message */}
        <div className="h-7 w-full flex items-center justify-center overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeMessageIndex}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-sans font-medium text-[#5A5654] px-4"
            >
              {messages[activeMessageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Liquid Gradient Progress Ribbon */}
        {showProgress && (
          <div className="w-full max-w-xs">
            <div className="w-full h-2.5 bg-[#E4521B]/12 rounded-full overflow-hidden p-0.5 border border-[#E4521B]/15 relative">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#AB003E] relative overflow-hidden shadow-[0_0_12px_rgba(228,82,27,0.5)]"
                animate={{ width: `${effectiveProgress}%` }}
                transition={{ ease: 'easeOut', duration: 0.4 }}
              >
                {/* Luminous glare streak moving continuously */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  style={{ animation: 'shimmer-sweep 1.8s infinite linear' }}
                />
              </motion.div>
            </div>

            {/* Bottom Metadata bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#7D7670] mt-3 px-1">
              <span className="flex items-center gap-1.5">
                <span className="text-[#E4521B] font-bold">&gt;</span> loading chunk
              </span>
              <span className="font-semibold text-[#1A1614] tabular-nums">
                {Math.round(effectiveProgress)}%
              </span>
            </div>
          </div>
        )}

        {/* Subtle decorative quote */}
        <p className="mt-7 text-[11px] font-caveat text-[#8C847E] tracking-wide">
          Crafting delightful digital experiences together.
        </p>
      </motion.div>
    </div>
  )
}

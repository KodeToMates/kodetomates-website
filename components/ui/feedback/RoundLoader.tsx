'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TomatoEmblem } from './UniqueLoader'
import { GooeyLoader } from './GooeyLoader'
import { cn } from '@/lib/utils'

export interface RoundLoaderProps {
  /** Diameter of the round loader in pixels (default: 168) */
  size?: number
  /** Progress 0 to 100. If undefined, runs in continuous indeterminate spin */
  progress?: number
  /** Visual variant inside circular core: 'gooey' (liquid merging blobs) or 'tomato' (cyber emblem) */
  variant?: 'gooey' | 'tomato'
  /** Color of the gooey blobs or progress accents (default: #E4521B) */
  color?: string
  /** Whether to show numeric percentage underneath (default: true) */
  showPercentage?: boolean
  /** Optional short label (default: "ripening...") */
  label?: string
  /** Additional CSS class names */
  className?: string
}

/**
 * Pure Round Loading UI for KodeToMates
 * Circular SVG progress track, glowing orbital ring, and organic gooey blobs core.
 */
export function RoundLoader({
  size = 168,
  progress,
  variant = 'gooey',
  color = '#E4521B',
  showPercentage = true,
  label,
  className,
}: RoundLoaderProps) {
  const strokeWidth = Math.max(3.5, size * 0.028)
  const radius = (size - strokeWidth * 2) / 2
  const circumference = 2 * Math.PI * radius
  const isIndeterminate = progress === undefined

  const strokeDashoffset = isIndeterminate
    ? circumference * 0.25
    : circumference - ((progress || 0) / 100) * circumference

  const innerDiscSize = Math.round(size * 0.68)
  const blobSize = Math.round(size * 0.13)
  const emblemSize = Math.round(size * 0.44)

  return (
    <div
      className={cn(
        'relative inline-flex flex-col items-center justify-center select-none',
        className
      )}
      style={{ width: size, minHeight: size }}
      role="progressbar"
      aria-label={label || 'Loading'}
      aria-valuenow={progress !== undefined ? Math.round(progress) : undefined}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* 1. Ambient Circular Backdrop Glow */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF914D]/35 via-[#E4521B]/30 to-[#AB003E]/20 blur-2xl pointer-events-none"
        style={{ transform: 'scale(1.2)' }}
      />

      {/* 2. Outer Rotating Dashed Decorative Orbit */}
      <div
        className="absolute inset-[-8%] rounded-full border border-dashed border-[#FF914D]/35 animate-spin-slow pointer-events-none"
      />

      {/* 3. Main SVG Progress Ring */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={cn(
          'relative z-10 -rotate-90 origin-center drop-shadow-[0_4px_16px_rgba(228,82,27,0.32)]',
          isIndeterminate && 'animate-spin'
        )}
        style={{
          animationDuration: isIndeterminate ? '1.4s' : undefined,
        }}
      >
        <defs>
          {/* Vibrant brand orange -> coral -> crimson liquid gradient */}
          <linearGradient id="round-loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA666" />
            <stop offset="40%" stopColor="#FF7A3D" />
            <stop offset="75%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#AB003E" />
          </linearGradient>

          {/* Glowing neon aura filter */}
          <filter id="round-stroke-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Passive Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E4521B"
          strokeOpacity="0.12"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Dynamic Glowing Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#round-loader-grad)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          filter="url(#round-stroke-glow)"
          style={{
            transition: isIndeterminate ? 'none' : 'stroke-dashoffset 0.18s ease-out',
          }}
        />
      </svg>

      {/* 4. Central Circular Glassmorphic Disc with Gooey Blobs */}
      <div
        className="absolute z-20 rounded-full bg-surface-paper/90 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(228,82,27,0.16)] flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ width: innerDiscSize, height: innerDiscSize }}
      >
        {variant === 'gooey' ? (
          <GooeyLoader size={blobSize} color={color} duration={1.3} />
        ) : (
          <TomatoEmblem size={emblemSize} pulse={true} />
        )}
      </div>

      {/* 5. Minimal Circular / Pill Readout Below */}
      {(showPercentage || label) && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-[#E4521B]/20 shadow-xs text-center"
        >
          {showPercentage && progress !== undefined && (
            <span className="font-mono text-xs font-bold text-[#1A1614] tabular-nums">
              {Math.round(progress)}%
            </span>
          )}
          {label && (
            <span className="font-mono text-[10.5px] font-medium text-[#7D7670] uppercase tracking-wider">
              {label}
            </span>
          )}
        </motion.div>
      )}
    </div>
  )
}

export default RoundLoader

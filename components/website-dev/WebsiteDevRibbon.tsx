'use client'

import React from 'react'
import { InfiniteRibbon, BrandEmblem } from '@/components/ui'

export interface WebsiteDevRibbonProps {
  className?: string
  duration?: number
}

const RIBBON_PHRASES = [
  'STATIC & DYNAMIC WEBSITES',
  'NEXT.JS 16 APP ROUTER',
  'SUB-SECOND EDGE LATENCY',
  'TAILORED HEADLESS CMS',
  '3D WEBGL & INTERACTIVE CANVAS',
  'REACTIVE TELEMETRY & APIS',
  'WCAG AA ACCESSIBILITY',
  'TURBOPACK COMPILED',
  'TYPESCRIPT STRICT',
  'TAILWIND CSS V4',
  'EDGE APIs & SERVER ACTIONS',
  'MICRO-FRONTENDS',
  'ZERO RUNTIME OVERHEAD',
  'ENTERPRISE POSTGRESQL',
  'HIGH-CONVERSION UX',
  'BULLETPROOF SECURITY & SCALING',
  'ENDURING DIGITAL CRAFT',
]

export function WebsiteDevRibbon({
  className = '',
  duration = 110,
}: WebsiteDevRibbonProps) {
  return (
    <section
      aria-label="Website Development Architecture & Tech Infinite Ribbon"
      className={`relative w-full bg-dark-bg overflow-hidden py-6 sm:py-8 select-none ${className}`}
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[160px] bg-primary-orange/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Left & Right Edge Vignette Fades for Seamless Infinite Loop Appearance */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 lg:w-56 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 lg:w-56 bg-gradient-to-l from-dark-bg via-dark-bg/90 to-transparent z-20" />

      {/* Seamless Floating Cards Ribbon */}
      <div className="relative z-10 w-full">
        <InfiniteRibbon
          duration={duration}
          repeat={1}
          pauseOnHover={true}
          className="py-3 bg-transparent border-none shadow-none"
        >
          <div className="flex items-center gap-7 sm:gap-9 pr-7 sm:pr-9">
            {RIBBON_PHRASES.map((phrase, idx) => (
              <div
                key={`${phrase}-${idx}`}
                className="inline-flex items-center gap-3.5 select-none group cursor-default"
              >
                <BrandEmblem size={20} />
                <span className="font-sans font-extrabold text-[16px] sm:text-[19px] md:text-[22px] tracking-[-0.01em] uppercase text-white group-hover:text-primary-orange transition-colors whitespace-nowrap drop-shadow-sm">
                  {phrase}
                </span>
                <span className="text-primary-orange font-mono text-xs sm:text-sm opacity-80 ml-1">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </InfiniteRibbon>
      </div>
    </section>
  )
}

export default WebsiteDevRibbon

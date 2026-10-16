'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function FloatingBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      {/* 1. 3% Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply z-20 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* 2. Soft atmospheric breathing glow behind the right visual */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.05, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-[8%] right-[-5%] w-[58vw] h-[58vw] max-w-[950px] max-h-[950px] rounded-full bg-gradient-to-br from-[#FF9234]/25 via-[#F79A62]/15 to-transparent blur-[120px]"
      />
    </div>
  )
}

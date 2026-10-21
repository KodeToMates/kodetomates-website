'use client'

import React from 'react'
import { Ticker } from '@/components/common/ticker'

export interface HeroTickerProps {
  phrases?: string[]
  className?: string
  duration?: number
  pauseOnHover?: boolean
}

export const DEFAULT_HERO_TICKER_PHRASES = [
  'FULL-STACK ARCHITECTURE',
  'PRODUCTION-GRADE CODE',
  'AUTONOMOUS AI AGENTS',
  'COMMUNITY CODE REVIEWS',
  'MODERN DEVTOOLS & CLOUD',
  'SHIP REAL SOFTWARE',
  'ZERO TUTORIAL PURGATORY',
  'COLLABORATIVE SPRINTS',
  'DEPLOY TO PRODUCTION',
  'ACTIVE GITHUB REPOSITORIES',
]

export function HeroTicker({
  phrases = DEFAULT_HERO_TICKER_PHRASES,
  className = '',
  duration = 38,
  pauseOnHover = true,
}: HeroTickerProps) {
  return (
    <Ticker
      phrases={phrases}
      variant="hero"
      duration={duration}
      pauseOnHover={pauseOnHover}
      className={className}
      ariaLabel="KodeToMates Ecosystem Highlights Ticker"
    />
  )
}

export default HeroTicker

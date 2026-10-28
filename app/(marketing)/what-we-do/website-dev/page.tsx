import React from 'react'
import type { Metadata } from 'next'
import {
  PerspectiveTunnelHero,
  WhatWeDesignStoryScroll,
  UiUxDesignScrollReveal,
  ModernDesignPurpose,
  CleanImplementation,
  WebsiteDesignProcess,
  WebsiteDevFAQ,
} from '@/components/website-dev'
import { HeroTicker } from '@/components/home/HeroTicker'

const WEBSITE_DEV_TICKER_PHRASES = [
  'STATIC & DYNAMIC ARCHITECTURE',
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

export const metadata: Metadata = {
  title: 'Website Development | KodeToMates',
  description:
    'Custom high-performance web applications, interactive 3D WebGL experiences, and scalable modern web architecture built by KodeToMates.',
}

export default function WebsiteDevPage() {
  return (
    <main className="relative w-full min-h-screen bg-dark-bg overflow-x-clip selection:bg-primary-orange/30 selection:text-white">
      {/* 1. 3D Perspective Tunnel Hero Section */}
      <PerspectiveTunnelHero
        titleLine1="WEBSITE"
        titleLine2="DEVELOPMENT."
        description="We build ultra-fast, visually stunning web applications with modern Next.js architecture, interactive 3D graphics, and bulletproof engineering designed to scale."
        ctaPrimary={{
          label: 'Build a Project With Us',
          href: '/contact',
        }}
        ctaSecondary={{
          label: 'Explore Our Stack',
          href: '/projects',
        }}
      />

      {/* 2. What We Design — Story Scroll (Static vs Dynamic Architecture: Concludes with 'The Right Website For The Way You Work.') */}
      <WhatWeDesignStoryScroll />

      {/* Engineering & Ecosystem Ticker Bar (Brand Dark Style) */}
      <HeroTicker
        phrases={WEBSITE_DEV_TICKER_PHRASES}
        theme="dark"
      />

      {/* 3. UI/UX Design That Makes Sense — Pinned Scroll Reveal */}
      <UiUxDesignScrollReveal />

      {/* 4. Modern Design, Used with Purpose — Interactive Principles & Live Demonstrations */}
      <ModernDesignPurpose />

      {/* 5. Clean, Maintainable Implementation — Architecture & Engineering Workstation */}
      <CleanImplementation />

      {/* 7. Our Website Design Process — Horizontal Pinned Timeline Scroll */}
      <WebsiteDesignProcess />

      {/* 8. Frequently Asked Questions — Home Page FAQ Component with Centralized JSON Data */}
      <WebsiteDevFAQ />
    </main>
  )
}

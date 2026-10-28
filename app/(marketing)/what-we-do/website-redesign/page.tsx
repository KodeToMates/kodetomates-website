import React from 'react'
import type { Metadata } from 'next'
import {
  WebsiteRedesignHero,
  WebsiteRedesignLogoCloud,
  WebsiteRedesignWhySection,
  WebsiteRedesignSignalsSection,
  WebsiteRedesignImprovementSection,
  WebsiteRedesignFAQ,
  WebsiteRedesignFinalCTA,
} from '@/components/website-redesign'

export const metadata: Metadata = {
  title: 'Website Redesign & Modernization | KodeToMates',
  description:
    'Revamp slow, outdated websites into modern Next.js 15 digital experiences with bespoke UI/UX, sub-second Core Web Vitals, and conversion-engineered flows.',
}

export default function WebsiteRedesignPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0C0B0A] overflow-x-clip selection:bg-[#E4521B]/30 selection:text-white">
      {/* 1. 3D Perspective Image Stream Corridor Hero Section */}
      <WebsiteRedesignHero />

      {/* 2. Brand Authority & Client Proof: Logo Cloud */}
      <WebsiteRedesignLogoCloud />

      {/* 3. Why Redesign: Your Website Has Changed (Pinned Stacked Cards Section) */}
      <WebsiteRedesignWhySection />

      {/* 4. When a Redesign May Help: Interactive Signals (Static Websites Card UI Style) */}
      <WebsiteRedesignSignalsSection />

      {/* 5. What We Can Improve: Pinned Horizontal GSAP Timeline */}
      <WebsiteRedesignImprovementSection />

      {/* 6. Frequently Asked Questions — Centralized JSON & Accordion */}
      <WebsiteRedesignFAQ />

      {/* 7. Final Call to Action — Brand Cinematic Card */}
      <WebsiteRedesignFinalCTA />
    </main>
  )
}

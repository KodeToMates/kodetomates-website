import React from 'react'
import type { Metadata } from 'next'
import {
  WhatWeDoHero,
  PillarsShowcase,
  CapabilitiesMatrix,
  DeliveryProcessTimeline,
  ServiceDecisionGuide,
  WhatWeDoFAQ,
  WhatWeDoCTA,
} from '@/components/what-we-do'
import { HeroTicker } from '@/components/home/HeroTicker'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { WHAT_WE_DO_TICKER_PHRASES } from '@/config/what-we-do'

export const metadata: Metadata = {
  title: 'What We Do | Full-Spectrum Digital Engineering & UI/UX | KodeToMates',
  description:
    'From custom Next.js website development and zero-downtime redesigns to technical SEO dominance and bespoke digital invitations, explore how KodeToMates builds high-impact digital experiences.',
}

export default function WhatWeDoPage() {
  return (
    <main className="relative w-full min-h-screen bg-white text-[#161413] overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#161413]">
      {/* 1. Master Editorial Hero with Live Metrics & Quick Switcher */}
      <WhatWeDoHero />

      {/* 2. Capabilities & Architecture Marquee Ticker */}
      <HeroTicker
        phrases={WHAT_WE_DO_TICKER_PHRASES}
        theme="light"
      />

      {/* 3. The 4 Core Service Pillars (Alternating Showcases) */}
      <PillarsShowcase />

      {/* 4. Cross-Disciplinary Capabilities Matrix */}
      <CapabilitiesMatrix />

      {/* 5. How We Deliver: 5-Stage Delivery Process Timeline */}
      <DeliveryProcessTimeline />

      {/* 6. Service Decision Guide ("Where Should You Begin?") */}
      <ServiceDecisionGuide />

      {/* 7. Client Proof & Testimonials */}
      <TestimonialsSection
        id="testimonials"
        eyebrow="CLIENT IMPACT & VOICES"
        headingLines={[
          'Trusted by Builders.',
          '<span style="color: var(--color-primary-orange)">Validated by Growth.</span>',
        ]}
        description="See what founders, engineering leaders, and families say about working with KodeToMates across our design, engineering, and digital event disciplines."
        theme="light"
        wrapperBg="bg-white"
      />

      {/* 8. Frequently Asked Questions */}
      <WhatWeDoFAQ />

      {/* 9. Final High-Impact Cinematic Call to Action */}
      <WhatWeDoCTA />
    </main>
  )
}

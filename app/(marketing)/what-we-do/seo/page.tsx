import React from 'react'
import type { Metadata } from 'next'
import {
  SeoHero,
  SeoWhatIsSeo,
  SeoScrollVelocity,
  SeoWhatIsIncluded,
  SeoDeliverablesTimeline,
  SeoTestimonials,
  SeoFinalCTA,
  SeoFAQ,
} from '@/components/seo'

export const metadata: Metadata = {
  title: 'Search Engine Optimization (SEO) | KodeToMates',
  description:
    'Engineering-first technical SEO, sub-second Core Web Vitals optimization, semantic topical authority, and high-intent keyword strategies to dominate Google search.',
}

export default function SEOPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0C0B0A] overflow-x-clip selection:bg-[#E4521B]/30 selection:text-white">
      {/* 1. Hero Section with Animated Left Editorial & Right Wall-Mounted Floating Enquiry Form */}
      <SeoHero />

      {/* 2. What is SEO — Left Context, Right Image, Pure White Background */}
      <SeoWhatIsSeo />

      {/* 3. Interactive Scroll Velocity Showcase */}
      <SeoScrollVelocity />

      {/* 3. What SEO Can Include - Full Brand Orange Feature Carousel */}
      <SeoWhatIsIncluded />

      {/* 4. What SEO Can Include - Structured Deliverables Timeline */}
      <SeoDeliverablesTimeline />

      {/* 5. Client Testimonials - Home Page Testimonials UI with SEO Props */}
      <SeoTestimonials />

      {/* 6. Call to Action - Common CTA UI with SEO Props */}
      <SeoFinalCTA />

      {/* 7. Frequently Asked Questions - Common FAQ UI */}
      <SeoFAQ />
    </main>
  )
}

'use client'

import React from 'react'
import { FeatureCarousel } from '@/components/ui/feature-carousel'

export function SeoWhatIsIncluded() {
  return (
    <div className="w-full bg-white">
      <section
        id="what-seo-can-include"
        className="relative w-full bg-primary-orange text-white rounded-t-[32px] rounded-b-[32px] sm:rounded-t-[48px] sm:rounded-b-[48px] lg:rounded-t-[56px] lg:rounded-b-[56px] border-t border-b border-white/20 scroll-mt-24 selection:bg-white/30 selection:text-white overflow-hidden shadow-2xl"
        aria-labelledby="seo-deliverables-heading"
      >
        {/* Full-width Feature Carousel fitting the website page with full brand orange background */}
        <FeatureCarousel />
      </section>
    </div>
  )
}

export default SeoWhatIsIncluded

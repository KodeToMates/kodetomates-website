'use client'

import React from 'react'
import { CTASection, type CTASectionProps } from '@/components/common/cta'

export function WebsiteRedesignFinalCTA(props: Partial<CTASectionProps> = {}) {
  return (
    <CTASection
      id="redesign-final-cta"
      eyebrow="FINAL CTA"
      lines={[
        'Your next website does not',
        'need to start from zero.',
      ]}
      headlineClassName="text-[clamp(26px,3.2vw,44px)] sm:text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.12] tracking-[-0.03em] mb-2"
      subtitle="Let’s identify what to keep, what to improve, and what to rethink."
      backgroundImage="/Image-v1/dev_page/company-profiles.jpg"
      backgroundImageAlt="KodeToMates Modern Website Redesign & Modernization Platform"
      primaryButton={{
        label: 'Plan My Redesign',
        href: '/contact',
      }}
      secondaryButton={{
        label: 'Explore Before & After',
        href: '/projects',
      }}
      showAccentLine={true}
      slit={0}
      textColor="#FFFFFF"
      dotColor="#E4521B"
      sectionBgColor="bg-white"
      containerMaxWidth="max-w-[1280px]"
      {...props}
    />
  )
}

export default WebsiteRedesignFinalCTA

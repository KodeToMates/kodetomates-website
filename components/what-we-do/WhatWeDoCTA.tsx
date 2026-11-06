'use client'

import React from 'react'
import { CTASection } from '@/components/common/cta'

export function WhatWeDoCTA() {
  return (
    <CTASection
      id="cta"
      eyebrow="START YOUR PROJECT"
      lines={[
        'Ready to Build Something',
        '<span style="color: var(--color-primary-orange)">Exceptional Together?</span>',
      ]}
      subtitle="Whether launching a modern flagship platform, modernizing an outdated legacy site, or dominating search rankings, our engineering team is ready to turn your vision into measurable reality."
      primaryButton={{
        label: 'Schedule a Consultation',
        href: '/contact',
        icon: true,
      }}
      secondaryButton={{
        label: 'Explore Our Projects',
        href: '/projects',
        icon: false,
      }}
      backgroundImage="/Image-v1/Home_page/website-develop.jpg"
      backgroundImageAlt="KodeToMates Modern Engineering"
      showAccentLine={true}
      slit={0}
      textColor="#FFFFFF"
      dotColor="#E4521B"
      sectionBgColor="bg-white"
      containerMaxWidth="max-w-[1360px]"
    />
  )
}

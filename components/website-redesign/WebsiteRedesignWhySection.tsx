'use client'

import React from 'react'
import { StackedCardsSection, StackedCardItem } from '@/components/common/stacked-cards'

const REDESIGN_WHY_CARDS: StackedCardItem[] = [
  {
    id: 'rethink-experience',
    number: '01',
    pill: 'User Experience',
    title: 'Rethink the Experience',
    headline: 'Make information easier to find with intuitive navigation',
    description:
      'Remove cluttered menus, broken flows, and legacy layout bloat. We rethink the end-to-end journey so potential customers discover your offerings and take action effortlessly.',
    image: '/Image-v1/dev_page/Clear-Visual-Hierarchy.jpg',
    tags: ['Information Architecture', 'User Journey Mapping', 'Friction Reduction', 'Clear Hierarchy'],
    stat: 'Friction-Free',
    accentColor: '#E4521B',
  },
  {
    id: 'reflect-brand',
    number: '02',
    pill: 'Brand Evolution',
    title: 'Reflect Who You Are Today',
    headline: 'A modern aesthetic that mirrors your growth & authority',
    description:
      'As a business expands, legacy websites stop reflecting current quality, scale, or service tiers. We modernize your visual language to command instant credibility and client trust.',
    image: '/Image-v1/dev_page/company-profiles.jpg',
    tags: ['Design System Craft', 'Visual Polish', 'Brand Alignment', 'Typography Standards'],
    stat: 'Brand Authority',
    accentColor: '#059669',
  },
  {
    id: 'sub-second-speed',
    number: '03',
    pill: 'Performance Engineering',
    title: 'Sub-Second Speed & Craft',
    headline: 'Modern Next.js architecture built to convert visitors',
    description:
      'Outdated themes and bulky plugins penalize search rankings and bounce rates. We re-engineer the foundation on Next.js 15 and Tailwind CSS for instant edge rendering.',
    image: '/Image-v1/dev_page/landing-website.jpg',
    tags: ['Sub-Second LCP', 'Next.js 15 App Router', 'Zero Plugin Bloat', 'Edge Optimized'],
    stat: 'Sub-Second Edge',
    accentColor: '#7C3AED',
  },
  {
    id: 'support-goals',
    number: '04',
    pill: 'Purposeful Modernization',
    title: 'Support Your Current Goals',
    headline: 'Changes driven by real business outcomes, not just novelty',
    description:
      'We do not change things simply for the sake of it. Every layout refinement, call-to-action, and interactive touchpoint directly champions your immediate revenue and growth goals.',
    image: '/Image-v1/dev_page/business-website.jpg',
    tags: ['Conversion Lift', 'Pipeline Expansion', 'Zero-Downtime Migration', 'Measurable ROI'],
    stat: 'Measurable ROI',
    accentColor: '#D97706',
  },
]

export function WebsiteRedesignWhySection() {
  return (
    <StackedCardsSection
      sectionId="why-redesign"
      contentAlign="center"
      eyebrow="WHY REDESIGN?"
      titleLine1="Your website has changed"
      titleLine2='<span className="text-[var(--color-primary-orange)]">Your website should too</span>'
      descriptionParagraphs={[
        'As a business grows, an older website can stop reflecting its services, brand, or customers.',
        'A redesign gives you the opportunity to rethink the experience, make information easier to find, and create a site that better supports your current goals—without changing things just for the sake of it.',
      ]}
      cards={REDESIGN_WHY_CARDS}
      ctaButton={{
        label: 'Start Your Redesign',
        href: '/contact',
      }}
    />
  )
}

export default WebsiteRedesignWhySection

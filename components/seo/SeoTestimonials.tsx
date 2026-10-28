'use client'

import React from 'react'
import {
  TestimonialsSection,
  type TestimonialsSectionProps,
} from '@/components/home/TestimonialsSection'
import type { Review } from '@/components/home/TestimonialSlider'

export const SEO_TESTIMONIALS: Review[] = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'VP of Growth & Acquisition',
    affiliation: 'HyperScale SaaS',
    quote:
      'KodeToMates reconstructed our programmatic topic clusters and fixed deep Core Web Vitals issues. Organic demo bookings surged 142% within 90 days.',
    imageSrc:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'David Vance',
    role: 'Founder & CEO',
    affiliation: 'Nordic Direct E-Commerce',
    quote:
      'Unlike traditional agencies that send PDF checklists, their engineers pushed actual PRs into our Next.js repository. First-page rankings for our primary commercial queries jumped from 8 to 86.',
    imageSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Amara Nwosu',
    role: 'Head of Digital Marketing',
    affiliation: 'FinTech Core Platforms',
    quote:
      'Their crawl budget audit uncovered indexing bottlenecks our internal team struggled with for months. Non-brand organic search impressions quadrupled in Search Console.',
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Kieran Gallagher',
    role: 'Director of Engineering',
    affiliation: 'Apex Media Group',
    quote:
      'Our Lighthouse mobile performance score jumped from 41 to 97 without sacrificing our ad telemetry. Sub-second INP and LCP gave our editorial team a decisive competitive edge on Google Discover.',
    imageSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Rachel Torres',
    role: 'Chief Marketing Officer',
    affiliation: 'Vanguard Health Tech',
    quote:
      'The structured JSON-LD entity graph and semantic authority work positioned our platform as the top cited source across Google AI Overviews. Truly engineering-first SEO craft.',
    imageSrc:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&h=120&fit=crop&crop=face',
  },
]

export function SeoTestimonials(props: Partial<TestimonialsSectionProps>) {
  return (
    <TestimonialsSection
      id="seo-testimonials"
      eyebrow="CLIENT VOICES"
      headingLines={[
        'What our search partners <span style="color: #FFE3D4">have to say.</span>',
      ]}
      description="Real rankings, measurable organic revenue. Hear from founders and engineering leaders whose search visibility scaled with KodeToMates."
      reviews={SEO_TESTIMONIALS}
      theme="orange"
      wrapperBg="bg-white"
      {...props}
    />
  )
}

export default SeoTestimonials

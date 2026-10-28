'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { TestimonialSlider, Review } from './TestimonialSlider'
import { SlitHeading, BrandAccentLine } from '@/components/ui'

import { cn } from '@/lib/utils'

export type { Review } from './TestimonialSlider'

// Testimonial data — community members & collaborators
export const TESTIMONIALS: Review[] = [
  {
    id: 1,
    name: 'Ashley Chen',
    role: 'Full-Stack Developer',
    affiliation: 'KodeToMates Community',
    quote:
      'KodeToMates completely changed how I approach software. Building alongside real engineers, shipping real code - it\'s nothing like following tutorials alone.',
    imageSrc:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    role: 'Backend Engineer',
    affiliation: 'Open Source Contributor',
    quote:
      'The pair-coding sessions and PR reviews taught me more in 3 months than a year of self-study. The community genuinely cares about quality and growth.',
    imageSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'AI/ML Engineer',
    affiliation: 'Sprint Participant',
    quote:
      'The sprint hackathons are incredible. Real deadlines, real teams, real shipping. My GitHub profile went from empty to proof-of-work that got me hired.',
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Daniel Okafor',
    role: 'DevOps & Cloud Engineer',
    affiliation: 'Community Mentor',
    quote:
      'Being a mentor here pushed me to articulate what I know and learn what I don\'t. The multiplayer approach to engineering is exactly what the industry needs.',
    imageSrc:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=120&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Sarah Kim',
    role: 'Frontend Engineer',
    affiliation: 'KodeToMates Alumni',
    quote:
      'This is the design-engineering bridge I\'ve been looking for. Building pixel-perfect UIs with real backend integration, reviewed by peers who actually care.',
    imageSrc:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&crop=face',
    thumbnailSrc:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&crop=face',
  },
]

export interface TestimonialsSectionProps {
  /** Optional HTML ID for the section, defaults to 'testimonials' */
  id?: string
  /** Eyebrow badge text, defaults to 'COMMUNITY VOICES'. Set to empty string to hide. */
  eyebrow?: string
  /** Main headline lines for SlitHeading */
  headingLines?: string[]
  /** Paragraph description below headline */
  description?: string
  /** Array of reviews to render in the slider */
  reviews?: Review[]
  /** Slider auto-play interval in ms (default 7000) */
  autoPlayInterval?: number
  /** Slider visual theme ('orange' | 'light') */
  theme?: 'orange' | 'light'
  /** Outer container background class, defaults to 'bg-white' */
  wrapperBg?: string
  /** Additional custom class names for the outer container */
  className?: string
  /** Whether to show the white brand accent line, defaults to true */
  showAccentLine?: boolean
}

export function TestimonialsSection({
  id = 'testimonials',
  eyebrow = 'COMMUNITY VOICES',
  headingLines = [
    'What our builders <span style="color: #FFE3D4">have to say.</span>',
  ],
  description = 'Real engineers, real experiences. Hear from community members who went from tutorials to production-grade builders.',
  reviews = TESTIMONIALS,
  autoPlayInterval = 7000,
  theme = 'orange',
  wrapperBg = 'bg-white',
  className,
  showAccentLine = true,
}: TestimonialsSectionProps = {}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={cn('w-full', wrapperBg, className)}>
      <section
        id={id}
        className="relative w-full bg-primary-orange text-white rounded-t-[32px] rounded-b-[32px] sm:rounded-t-[48px] sm:rounded-b-[48px] lg:rounded-t-[56px] lg:rounded-b-[56px] border-t border-b border-white/20 scroll-mt-24 py-12 sm:py-16 lg:py-20 selection:bg-white/30 selection:text-white overflow-hidden shadow-2xl"
        aria-labelledby={`${id}-heading`}
      >
        {/* Subtle Ambient Radial Highlight on Orange */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,255,255,0.18),transparent)] pointer-events-none" />

        <div className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 z-10">
          {/* Section Header */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 sm:mb-8"
          >
            {/* Eyebrow Pill */}
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-xs mb-3.5 select-none shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="font-sans font-bold text-[11px] sm:text-[12px] tracking-[0.16em] text-white uppercase">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Main Headline with Slit Reveal Animation */}
            {headingLines && headingLines.length > 0 && (
              <div className="max-w-3xl mx-auto">
                <SlitHeading
                  id={`${id}-heading`}
                  lines={headingLines}
                  align="center"
                  slit={0}
                  textColor="#FFFFFF"
                  dotColor="#FFE3D4"
                  className="text-[clamp(26px,2.8vw,48px)] xl:text-[clamp(32px,3.1vw,52px)] mb-1 leading-[1.12] tracking-[-0.03em]"
                />
              </div>
            )}

            {/* White Signature Brand Accent Line with Center Dot */}
            {showAccentLine && (
              <BrandAccentLine align="center" theme="white" className="my-3.5" />
            )}

            {description && (
              <p className="max-w-2xl mx-auto font-sans text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#FFF0E6] font-normal mt-4">
                {description}
              </p>
            )}
          </motion.div>

          {/* Testimonial Slider */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <TestimonialSlider
              reviews={reviews}
              autoPlayInterval={autoPlayInterval}
              theme={theme}
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsSection

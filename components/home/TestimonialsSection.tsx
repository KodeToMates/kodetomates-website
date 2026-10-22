'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { TestimonialSlider, Review } from '@/components/ui/testimonial-slider'
import { SlitHeading } from '@/components/ui/SlitHeading'

// Testimonial data — community members & collaborators
const TESTIMONIALS: Review[] = [
  {
    id: 1,
    name: 'Ashley Chen',
    role: 'Full-Stack Developer',
    affiliation: 'KodeToMates Community',
    quote:
      'KodeToMates completely changed how I approach software. Building alongside real engineers, shipping real code — it\'s nothing like following tutorials alone.',
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

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="testimonials"
      className="relative w-full bg-white selection:bg-[#E4521B]/20 selection:text-[#E4521B] py-20 sm:py-28 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EDE8DF] to-transparent" />

      <div className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <SlitHeading
            id="testimonials-heading"
            eyebrow="COMMUNITY VOICES"
            lines={[
              'What our builders <span style="color: var(--color-primary-orange)">have to say.</span>',
            ]}
            align="center"
            showAccentLine={true}
            slit={0}
            className="text-[clamp(26px,2.8vw,48px)] xl:text-[clamp(32px,3.1vw,52px)] mb-3"
          />

          <p className="max-w-2xl mx-auto font-sans text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#554E48] font-normal mt-4">
            Real engineers, real experiences. Hear from community members who went from
            tutorials to production-grade builders.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <TestimonialSlider
            reviews={TESTIMONIALS}
            autoPlayInterval={7000}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection

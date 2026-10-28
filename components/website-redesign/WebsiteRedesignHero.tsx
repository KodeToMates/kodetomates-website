'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ImageStreamHero, StreamImage } from '@/components/ui/image-stream-hero'
import { BrandAccentLine } from '@/components/ui'
import { HeroSparks } from '@/components/home/HeroSparks'

// High-fidelity web redesign showcase imagery
const REDESIGN_CORRIDOR_IMAGES: StreamImage[] = [
  {
    src: '/Image-v1/dev_page/landing-website.jpg',
    alt: 'High-Converting SaaS Landing Page Redesign',
  },
  {
    src: '/Image-v1/dev_page/custom-dashboard.jpg',
    alt: 'Modern Enterprise Analytics Dashboard Architecture',
  },
  {
    src: '/Image-v1/dev_page/company-profiles.jpg',
    alt: 'Corporate Brand Experience & Responsive Redesign',
  },
  {
    src: '/Image-v1/dev_page/Interactive-Web-Portals.jpg',
    alt: 'Interactive Customer Portal & Web Application',
  },
  {
    src: '/Image-v1/dev_page/business-website.jpg',
    alt: 'B2B Business Website Revamp & Growth Architecture',
  },
  {
    src: '/Image-v1/dev_page/Consistent-Components.jpg',
    alt: 'Design System & Component Library Modernization',
  },
  {
    src: '/Image-v1/dev_page/Clear-Visual-Hierarchy.jpg',
    alt: 'Conversion-Engineered Visual Hierarchy & UX',
  },
  {
    src: '/Image-v1/dev_page/booking.jpg',
    alt: 'Frictionless Booking Engine & Seamless Checkout',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    alt: 'Real-Time Data Visualization & Performance Platform',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    alt: 'SEO Optimized & Sub-Second LCP Web Platform',
  },
  {
    src: '/Image-v1/dev_page/content-publication.jpg',
    alt: 'High-Traffic Editorial & Content Publishing Rebuild',
  },
  {
    src: '/Image-v1/dev_page/service_and_pricing.jpg',
    alt: 'High-Conversion Pricing & Service Comparison Layout',
  },
]

interface RedesignHeadlineItem {
  line1: string
  line2: string
  subtext: string
}

const REDESIGN_HEADLINES: RedesignHeadlineItem[] = [
  {
    line1: 'A New Look.',
    line2: 'A Better Experience.',
    subtext:
      'We transform outdated, sluggish websites into lightning-fast Next.js digital platforms engineered with bespoke UI/UX, sub-second Core Web Vitals, and modern software craft.',
  },
  {
    line1: 'Built For Speed.',
    line2: 'Engineered To Convert.',
    subtext:
      'Say goodbye to legacy bloat. We re-engineer your front-end architecture to deliver sub-second edge latency and intuitive user journeys that multiply engagement.',
  },
  {
    line1: 'Legacy Out.',
    line2: 'Modern Stack In.',
    subtext:
      'Zero-downtime migration from monolithic CMS platforms to bleeding-edge Next.js 15, Tailwind CSS, and strict TypeScript precision.',
  },
]

export function WebsiteRedesignHero() {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Smooth editorial headline auto-advance every 5.5s (matching home page)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REDESIGN_HEADLINES.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [])

  const current = REDESIGN_HEADLINES[currentIndex]

  return (
    <section className="relative w-full overflow-hidden bg-[#0C0B0A] text-white pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-6 selection:bg-[#E4521B]/30 selection:text-white">
      {/* --- Ambient Background Glows & Sparks --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Warm Amber/Terracotta Radial Bloom */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] rounded-full bg-[#E4521B]/12 blur-[140px]" />

        {/* Secondary Deep Crimson Backdrop Accent */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-[#AB003E]/10 blur-[130px]" />

        {/* Ambient Top Vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0C0B0A] via-[#0C0B0A]/70 to-transparent z-10" />

        {/* Hero Particles / Sparks */}
        <HeroSparks className="opacity-70 z-10" count={18} />
      </div>

      {/* --- 3D Perspective Corridor Container --- */}
      <ImageStreamHero
        images={REDESIGN_CORRIDOR_IMAGES}
        cards={10}
        speed={18}
        axis={54}
        className="relative z-10 w-full min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] flex items-center justify-center"
      >
        {/* Dark Radial Mask to Guarantee Readability over Moving Cards */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(12,11,10,0.88)_0%,rgba(12,11,10,0.65)_45%,rgba(12,11,10,0.15)_70%,transparent_100%)]"
        />

        {/* Bottom Vignette to Blend Seamlessly with Page Content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/80 to-transparent z-10"
        />

        {/* --- Foreground Editorial Content --- */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center flex flex-col items-center">
          
          {/* Main Headline with Home Page Hero Font Style & Blur-Lift Transitions */}
          <div className="w-full max-w-4xl min-h-[120px] sm:min-h-[150px] lg:min-h-[175px] flex items-center justify-center relative overflow-visible">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={currentIndex}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 22, filter: 'blur(8px)' }
                }
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20, filter: 'blur(8px)' }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full text-center text-white font-sans font-bold text-[clamp(40px,5.8vw,88px)] leading-[1.12] tracking-[-0.03em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] select-none"
              >
                <span className="block text-white">
                  {current.line1}
                </span>
                <span className="block text-white mt-1 sm:mt-2">
                  {current.line2}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Brand Signature Accent Line */}
          <BrandAccentLine align="center" theme="orange" className="my-5 sm:my-6" />

          {/* Subtitle Body Copy with Smooth Dynamic Fade */}
          <div className="min-h-[56px] sm:min-h-[64px] mb-8 sm:mb-10 flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="font-sans text-[15px] sm:text-base md:text-lg text-[#A8A29E] max-w-2xl mx-auto leading-relaxed text-balance"
              >
                {current.subtext}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Interactive Feature Tag Pills with Home Hero Breathing Opacity */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : {
                    opacity: [1, 0.45, 1],
                    y: 0,
                  }
            }
            transition={{
              y: { duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
              opacity: {
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6,
              },
            }}
            className="flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-white/90 text-xs sm:text-[13.5px] font-sans font-medium mb-8 sm:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            {['+ Modern UI/UX', '+ Sub-Second Speed', '+ Next.js 15', '+ Zero Tech Debt'].map(
              (tag, idx) => (
                <div key={idx} className="flex items-center gap-1.5 group cursor-default">
                  <span className="text-[#E4521B] font-semibold">{tag.slice(0, 1)}</span>
                  <span className="text-[#D6D3D1] group-hover:text-white transition-colors">
                    {tag.slice(2)}
                  </span>
                </div>
              ),
            )}
          </motion.div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E4521B] to-[#FF914D] hover:from-[#FF914D] hover:to-[#E4521B] text-white font-sans font-semibold text-sm sm:text-base shadow-[0_10px_30px_rgba(228,82,27,0.35)] hover:shadow-[0_14px_35px_rgba(228,82,27,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Your Redesign</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/90 hover:text-white border border-white/15 hover:border-white/30 font-sans font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Before & After</span>
            </Link>
          </div>

        </div>
      </ImageStreamHero>
    </section>
  )
}

export default WebsiteRedesignHero

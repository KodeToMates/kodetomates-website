'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SlitHeading } from '@/components/ui/SlitHeading'

export interface CTAButtonConfig {
  label: string
  href: string
  icon?: React.ReactNode | boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

export interface CTASectionProps {
  /** HTML id attribute for anchor links */
  id?: string
  /** Eyebrow text above the main headline */
  eyebrow?: string
  /** Lines of text to display in the SlitHeading */
  lines?: string[]
  /** Custom classes for the SlitHeading element */
  headlineClassName?: string
  /** Subtitle/description text below the headline */
  subtitle?: string
  /** Background photographic image path */
  backgroundImage?: string
  /** Alt attribute for the background image */
  backgroundImageAlt?: string
  /** Primary action button configuration */
  primaryButton?: CTAButtonConfig
  /** Secondary action button configuration */
  secondaryButton?: CTAButtonConfig
  /** Whether to show the coral accent line under the headline */
  showAccentLine?: boolean
  /** Slit cut-off depth for letter animation */
  slit?: number
  /** Text color of headline (default #FFFFFF) */
  textColor?: string
  /** Accent punctuation color (default #E4521B) */
  dotColor?: string
  /** Section background color outside the card (default 'bg-white') */
  sectionBgColor?: string
  /** Max width class for the card container (default 'max-w-[1280px]') */
  containerMaxWidth?: string
  /** Additional classes for the outer <section> */
  className?: string
  /** Additional classes for the inner card <div> */
  cardClassName?: string
}

export function CTASection({
  id = 'join',
  eyebrow = 'JOIN THE ECOSYSTEM',
  lines = [
    'Have an idea?',
    'Have something to learn?',
    'Have something to build?',
  ],
  headlineClassName = 'text-[clamp(20px,2.2vw,32px)] sm:text-[clamp(22px,2.4vw,36px)] leading-[1.16] tracking-[-0.03em] mb-2',
  subtitle = 'There is a place for you at KodeToMates. Break beyond passive tutorials, collaborate on live repositories, and build verifiable proof of work together.',
  backgroundImage = '/images/hero-kinetic-cinematic.jpg',
  backgroundImageAlt = 'KodeToMates Creative Tech Community',
  primaryButton = {
    label: 'Join to KodeToMates',
    href: '/join',
  },
  secondaryButton = {
    label: 'Explore Projects',
    href: '/projects',
  },
  showAccentLine = true,
  slit = 0,
  textColor = '#FFFFFF',
  dotColor = '#E4521B',
  sectionBgColor = 'bg-white',
  containerMaxWidth = 'max-w-[1280px]',
  className = '',
  cardClassName = '',
}: CTASectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id={id}
      className={`relative z-10 w-full ${sectionBgColor} py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 selection:bg-[#E4521B]/30 selection:text-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {/* --- CENTERED CARD CONTAINER --- */}
      <div className={`relative w-full ${containerMaxWidth} mx-auto`}>
        <div
          className={`relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden bg-[#0C0B0A] border border-[#302A25] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 ${cardClassName}`}
        >
          {/* Subtle top rim light accent */}
          <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-20" />

          {/* --- 1. CARD CINEMATIC BACKGROUND PHOTOGRAPHY --- */}
          {backgroundImage && (
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
              <Image
                src={backgroundImage}
                alt={backgroundImageAlt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[center_35%] filter brightness-[0.34] contrast-[1.12] scale-[1.02]"
              />

              {/* Cinematic Vignette Overlays for Maximum Contrast & Atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0C0B0A]/90 via-[#0C0B0A]/70 to-[#0C0B0A]/90 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/85 via-transparent to-[#0C0B0A]/85 z-10" />

              {/* Ambient warm brand coral glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[320px] bg-[#E4521B]/15 rounded-full blur-[130px] pointer-events-none z-10" />
            </div>
          )}

          {/* --- 2. INNER CONTENT WRAPPER --- */}
          <div className="relative w-full max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
            {/* --- MAIN HEADLINE WITH SLIT REVEAL & CORAL PUNCTUATION --- */}
            <SlitHeading
              id={`${id}-heading`}
              align="center"
              eyebrow={eyebrow}
              lines={lines}
              showAccentLine={showAccentLine}
              slit={slit}
              textColor={textColor}
              dotColor={dotColor}
              className={headlineClassName}
            />

            {/* --- SUBTITLE COPY --- */}
            {subtitle && (
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-[15px] sm:text-[16.5px] leading-relaxed text-[#D6CFC9] font-normal tracking-[-0.01em] mt-3 sm:mt-4 mb-8 sm:mb-9 max-w-xl text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              >
                {subtitle}
              </motion.p>
            )}

            {/* --- DYNAMIC ACTION BUTTONS --- */}
            {(primaryButton || secondaryButton) && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 select-none"
              >
                {/* Primary CTA Button */}
                {primaryButton && (
                  <Link
                    href={primaryButton.href}
                    onClick={primaryButton.onClick}
                    className={`group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#E4521B] hover:bg-[#CC420F] text-white font-sans font-semibold text-[14.5px] sm:text-[15px] shadow-[0_8px_24px_rgba(228,82,27,0.35)] hover:shadow-[0_12px_28px_rgba(228,82,27,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer ${primaryButton.className ?? ''}`}
                  >
                    <span>{primaryButton.label}</span>
                    {primaryButton.icon === undefined || primaryButton.icon === true ? (
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    ) : (
                      primaryButton.icon
                    )}
                  </Link>
                )}

                {/* Secondary Link */}
                {secondaryButton && (
                  <Link
                    href={secondaryButton.href}
                    onClick={secondaryButton.onClick}
                    className={`group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-sans font-semibold text-[14.5px] sm:text-[15px] text-[#141210] bg-white hover:bg-[#FAF7F2] shadow-sm hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer ${secondaryButton.className ?? ''}`}
                  >
                    <span>{secondaryButton.label}</span>
                    {secondaryButton.icon === undefined || secondaryButton.icon === true ? (
                      <ArrowUpRight className="w-4 h-4 text-[#141210] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    ) : (
                      secondaryButton.icon
                    )}
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

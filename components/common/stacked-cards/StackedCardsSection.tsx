'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  MotionValue,
  MotionStyle,
} from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SlitHeading } from '@/components/ui/SlitHeading'

export interface StackedCardItem {
  id: string
  number: string
  pill?: string
  title: string
  headline: string
  description: string
  image: string
  tags?: string[]
  stat?: string
  accentColor?: string
  accentBg?: string
  accentBorder?: string
  link?: string
}

export interface StackedCtaButton {
  label: string
  href: string
  secondary?: {
    label: string
    href: string
  }
}

export interface StackedCardsSectionProps {
  sectionId: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  titleLine2Color?: string
  titleLine2ClassName?: string
  descriptionParagraphs: string[]
  cards: StackedCardItem[]
  ctaButton?: StackedCtaButton
  slit?: number
}

export function StackedCardsSection({
  sectionId,
  eyebrow,
  titleLine1,
  titleLine2,
  titleLine2Color,
  titleLine2ClassName,
  descriptionParagraphs,
  cards,
  ctaButton,
  slit = 0,
}: StackedCardsSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  // Track pinned scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const isThree = cards.length === 3

  // Active card tracker based on scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isThree) {
      if (latest < 0.35) {
        setActiveCard(0)
      } else if (latest < 0.72) {
        setActiveCard(1)
      } else {
        setActiveCard(2)
      }
    } else {
      if (latest < 0.25) {
        setActiveCard(0)
      } else if (latest < 0.52) {
        setActiveCard(1)
      } else if (latest < 0.78) {
        setActiveCard(2)
      } else {
        setActiveCard(3)
      }
    }
  })

  // Clickable indicator: smoothly jump to a specific card's scroll position
  const scrollToCard = (index: number) => {
    if (!sectionRef.current) return
    const sectionTop = sectionRef.current.offsetTop
    const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight
    const targets = isThree ? [0.1, 0.52, 0.9] : [0.08, 0.38, 0.65, 0.92]
    const targetY = sectionTop + (targets[index] ?? 0) * scrollableDistance
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  // Section height scales with card count (3 cards: 260vh, 4 cards: 320vh)
  const sectionHeightClass = isThree ? 'h-[260vh]' : 'h-[320vh]'

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={`relative w-full bg-white selection:bg-[#E4521B]/20 selection:text-[#E4521B] ${sectionHeightClass}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      {/* Pinned Viewport Container (stays sticky on screen while user scrolls through all cards) */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-white z-10">
        <div className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 h-full flex flex-col justify-center">
          {/* Main 2-Column Balanced Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full">
            {/* ========================================================
                LEFT COLUMN: Sticky Editorial Heading, Copy, & Navigation
               ======================================================== */}
            <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
              {/* Main Headline with Letter-by-Letter Slit Reveal & Coral Dots */}
              {(() => {
                const formatTitle = (line: string, color?: string, className?: string) => {
                  if (line.includes('<span')) {
                    if (/[.?!](<\/span>)?$/i.test(line)) return line
                    return line.replace(/(<\/span>)?$/i, (m) => `.${m}`)
                  }
                  if (color || className) {
                    return {
                      text: line.endsWith('.') ? line : `${line}.`,
                      color,
                      className,
                    }
                  }
                  return line.endsWith('.') ? line : `${line}.`
                }

                return (
                  <SlitHeading
                    id={`${sectionId}-heading`}
                    eyebrow={eyebrow}
                    lines={[
                      formatTitle(titleLine1),
                      formatTitle(titleLine2, titleLine2Color, titleLine2ClassName),
                    ]}
                    showAccentLine={true}
                    slit={slit}
                    className="text-[clamp(26px,2.8vw,48px)] xl:text-[clamp(32px,3.1vw,52px)] mb-3"
                  />
                )
              })()}

              {/* Description Paragraphs: Rich Mission & Practical Context */}
              <div className="space-y-3 font-sans text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#554E48] font-normal max-w-xl mb-6">
                {descriptionParagraphs.map((para, idx) => (
                  <p key={idx} className={idx > 0 ? 'text-[#665F58] text-[13.5px] sm:text-[14.5px]' : ''}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Pillar Switcher Navigation (Interactive Pills that update with scroll) */}
              <div className="flex flex-wrap items-center gap-2 mb-6 select-none">
                {cards.map((pillar, idx) => {
                  const isActive = activeCard === idx
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => scrollToCard(idx)}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-semibold transition-all duration-300 focus:outline-none flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#141210] text-white shadow-md shadow-black/10 scale-105'
                          : 'bg-[#F5F2EB] text-[#554E48] hover:bg-[#EBE6DC] hover:text-[#111827]'
                      }`}
                    >
                      <span className={`text-[10px] font-mono ${isActive ? 'text-[#E4521B]' : 'text-[#888]'}`}>
                        {pillar.number}
                      </span>
                      <span>{pillar.title.split(' ')[0]}</span>
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Bottom CTA Action Button(s) */}
              {ctaButton && (
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 select-none pt-1">
                  <Link
                    href={ctaButton.href}
                    className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#E4521B] hover:bg-[#141210] text-white font-sans font-semibold text-[14px] shadow-[0_8px_20px_rgba(228,82,27,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer"
                  >
                    <span>{ctaButton.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {ctaButton.secondary && (
                    <Link
                      href={ctaButton.secondary.href}
                      className="group inline-flex items-center gap-1.5 font-sans font-semibold text-[14.5px] text-[#A0350B] hover:text-[#E4521B] underline underline-offset-4 decoration-[#E4521B]/40 hover:decoration-[#E4521B] transition-colors duration-200 cursor-pointer"
                    >
                      <span>{ctaButton.secondary.label}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* ========================================================
                RIGHT COLUMN: Stack of Cards (Tight Gap with Left Context)
               ======================================================== */}
            <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-start py-4 sm:py-6">
              {/* Stack Stage: Fixed frame holding all layered cards */}
              <div className="relative w-full max-w-[520px] xl:max-w-[560px] h-[520px] sm:h-[560px] lg:h-[580px]">
                {cards.map((card, idx) => (
                  <StackedCardRender
                    key={card.id}
                    card={card}
                    index={idx}
                    totalCards={cards.length}
                    scrollYProgress={scrollYProgress}
                    activeCard={activeCard}
                    shouldReduceMotion={Boolean(shouldReduceMotion)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Render dispatcher: switches between 3-card and 4-card motion implementations
 */
function StackedCardRender({
  card,
  index,
  totalCards,
  scrollYProgress,
  activeCard,
  shouldReduceMotion,
}: {
  card: StackedCardItem
  index: number
  totalCards: number
  scrollYProgress: MotionValue<number>
  activeCard: number
  shouldReduceMotion: boolean
}) {
  if (totalCards === 3) {
    return (
      <StackedCard3
        card={card}
        index={index}
        scrollYProgress={scrollYProgress}
        activeCard={activeCard}
        shouldReduceMotion={shouldReduceMotion}
      />
    )
  }

  return (
    <StackedCard4
      card={card}
      index={index}
      scrollYProgress={scrollYProgress}
      activeCard={activeCard}
      shouldReduceMotion={shouldReduceMotion}
    />
  )
}

/**
 * 3-Card Stack Motion Transforms
 */
function StackedCard3({
  card,
  index,
  scrollYProgress,
  activeCard,
  shouldReduceMotion,
}: {
  card: StackedCardItem
  index: number
  totalCards?: number
  scrollYProgress: MotionValue<number>
  activeCard: number
  shouldReduceMotion: boolean
}) {
  // Card 0: exits at 0.24 - 0.42
  const x0 = useTransform(scrollYProgress, [0, 0.24, 0.42, 1], ['0%', '0%', '115%', '115%'])
  const rotate0 = useTransform(scrollYProgress, [0, 0.24, 0.42, 1], [0, 0, 7, 7])
  const opacity0 = useTransform(scrollYProgress, [0, 0.24, 0.39, 0.43, 1], [1, 1, 0.2, 0, 0])

  // Card 1: scales at 0.24-0.42, exits at 0.60-0.78
  const x1 = useTransform(scrollYProgress, [0, 0.6, 0.78, 1], ['0%', '0%', '115%', '115%'])
  const rotate1 = useTransform(scrollYProgress, [0, 0.6, 0.78, 1], [0, 0, 7, 7])
  const scale1 = useTransform(scrollYProgress, [0, 0.24, 0.42, 1], [0.94, 0.94, 1, 1])
  const y1 = useTransform(scrollYProgress, [0, 0.24, 0.42, 1], [18, 18, 0, 0])
  const opacity1 = useTransform(scrollYProgress, [0, 0.24, 0.42, 0.6, 0.74, 0.78, 1], [0.85, 0.85, 1, 1, 0.2, 0, 0])

  // Card 2: scales at 0.60-0.78, stays anchored
  const scale2 = useTransform(scrollYProgress, [0, 0.24, 0.42, 0.6, 0.78, 1], [0.88, 0.88, 0.94, 0.94, 1, 1])
  const y2 = useTransform(scrollYProgress, [0, 0.24, 0.42, 0.6, 0.78, 1], [36, 36, 18, 18, 0, 0])
  const opacity2 = useTransform(scrollYProgress, [0, 0.24, 0.6, 0.78, 1], [0.65, 0.65, 0.85, 1, 1])

  let style = {}
  let zIndex = 10

  if (index === 0) {
    style = shouldReduceMotion ? {} : { x: x0, rotate: rotate0, opacity: opacity0 }
    zIndex = 30
  } else if (index === 1) {
    style = shouldReduceMotion ? {} : { x: x1, rotate: rotate1, scale: scale1, y: y1, opacity: opacity1 }
    zIndex = 20
  } else {
    style = shouldReduceMotion ? {} : { scale: scale2, y: y2, opacity: opacity2 }
    zIndex = 10
  }

  return (
    <CardFrame
      card={card}
      index={index}
      style={style}
      zIndex={zIndex}
      isActive={activeCard === index}
    />
  )
}

/**
 * 4-Card Stack Motion Transforms (Original WhatIsKodeToMates parity)
 */
function StackedCard4({
  card,
  index,
  scrollYProgress,
  activeCard,
  shouldReduceMotion,
}: {
  card: StackedCardItem
  index: number
  scrollYProgress: MotionValue<number>
  activeCard: number
  shouldReduceMotion: boolean
}) {
  // Card 0
  const x0 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], ['0%', '0%', '115%', '115%'])
  const rotate0 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], [0, 0, 7, 7])
  const opacity0 = useTransform(scrollYProgress, [0, 0.18, 0.3, 0.33, 1], [1, 1, 0.2, 0, 0])

  // Card 1
  const x1 = useTransform(scrollYProgress, [0, 0.46, 0.6, 1], ['0%', '0%', '115%', '115%'])
  const rotate1 = useTransform(scrollYProgress, [0, 0.46, 0.6, 1], [0, 0, 7, 7])
  const scale1 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], [0.94, 0.94, 1, 1])
  const y1 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], [18, 18, 0, 0])
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.32, 0.46, 0.58, 0.61, 1], [0.85, 0.85, 1, 1, 0.2, 0, 0])

  // Card 2
  const x2 = useTransform(scrollYProgress, [0, 0.72, 0.86, 1], ['0%', '0%', '115%', '115%'])
  const rotate2 = useTransform(scrollYProgress, [0, 0.72, 0.86, 1], [0, 0, 7, 7])
  const scale2 = useTransform(scrollYProgress, [0, 0.18, 0.32, 0.46, 0.6, 1], [0.88, 0.88, 0.94, 0.94, 1, 1])
  const y2 = useTransform(scrollYProgress, [0, 0.18, 0.32, 0.46, 0.6, 1], [36, 36, 18, 18, 0, 0])
  const opacity2 = useTransform(scrollYProgress, [0, 0.46, 0.6, 0.72, 0.84, 0.87, 1], [0.7, 0.7, 1, 1, 0.2, 0, 0])

  // Card 3
  const scale3 = useTransform(scrollYProgress, [0, 0.46, 0.6, 0.72, 0.86, 1], [0.84, 0.84, 0.9, 0.9, 1, 1])
  const y3 = useTransform(scrollYProgress, [0, 0.46, 0.6, 0.72, 0.86, 1], [50, 50, 32, 32, 0, 0])
  const opacity3 = useTransform(scrollYProgress, [0, 0.46, 0.72, 0.86, 1], [0.55, 0.55, 0.8, 1, 1])

  let style = {}
  let zIndex = 10

  if (index === 0) {
    style = shouldReduceMotion ? {} : { x: x0, rotate: rotate0, opacity: opacity0 }
    zIndex = 40
  } else if (index === 1) {
    style = shouldReduceMotion ? {} : { x: x1, rotate: rotate1, scale: scale1, y: y1, opacity: opacity1 }
    zIndex = 30
  } else if (index === 2) {
    style = shouldReduceMotion ? {} : { x: x2, rotate: rotate2, scale: scale2, y: y2, opacity: opacity2 }
    zIndex = 20
  } else {
    style = shouldReduceMotion ? {} : { scale: scale3, y: y3, opacity: opacity3 }
    zIndex = 10
  }

  return (
    <CardFrame
      card={card}
      index={index}
      style={style}
      zIndex={zIndex}
      isActive={activeCard === index}
    />
  )
}

/**
 * Universal Visual Card Container
 */
function CardFrame({
  card,
  index,
  style,
  zIndex,
  isActive,
}: {
  card: StackedCardItem
  index: number
  style: MotionStyle
  zIndex: number
  isActive: boolean
}) {
  return (
    <motion.div
      style={{
        ...style,
        zIndex,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      className="absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[32px] bg-white border border-[#E8E4DC] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group select-none origin-bottom-left will-change-transform"
      data-index={index}
    >
      {/* Top Section: High-Res Photo with Badges */}
      <div className="relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[24px] overflow-hidden mb-4 sm:mb-5 bg-[#FAF7F2] shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 580px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index < 2}
        />

        {/* Top Gradient Overlay for Badge Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none" />

        {/* Floating Stat Badge (Top Right) */}
        {card.stat && (
          <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-sans font-medium">
            {card.stat}
          </div>
        )}

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
          <h3 className="font-sans font-bold text-2xl sm:text-[28px] leading-[1.04] tracking-[-0.035em] drop-shadow-md">
            {card.title}
            <span className="text-[#E4521B]">.</span>
          </h3>
        </div>
      </div>

      {/* Middle Section: Headline & Description */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="font-sans font-bold text-[15px] sm:text-[17px] text-[#111827] leading-snug tracking-[-0.025em] mb-2">
            {card.headline}
          </p>
          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-[#554E48] line-clamp-3">
            {card.description}
          </p>
        </div>

        {/* Bottom Feature Tags */}
        {card.tags && card.tags.length > 0 && (
          <div className="pt-3 border-t border-[#F2EEE6] mt-3">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8F5EE] border border-[#EFEAE0] text-[11px] sm:text-xs font-sans font-medium text-[#4A4540]"
                >
                  <CheckCircle2
                    className="w-3 h-3 shrink-0"
                    style={{ color: card.accentColor || '#E4521B' }}
                  />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default StackedCardsSection

'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, Code2, Users, TrendingUp, CheckCircle2, GitPullRequest, MessageSquareCode, BadgeCheck } from 'lucide-react'

const PILLAR_CARDS = [
  {
    id: 'learn',
    number: '01',
    pill: 'Learn by Doing',
    title: 'Learn Together',
    headline: 'Master modern engineering with live practice & mentorship',
    description:
      'Break out of tutorial purgatory. Dive into curated learning paths, live pair-coding sessions, and open workshops covering full-stack web development, AI automation, and system design.',
    image: '/images/pillars/learn.jpg',
    tags: ['Hands-on Labs', 'System Architecture', 'Live Workshops', 'Peer Mentoring'],
    stat: '100% Practical',
    icon: BookOpen,
    accentColor: '#E4521B',
    accentBg: 'bg-[#FFF2EB]',
    accentBorder: 'border-[#FFD7C2]',
  },
  {
    id: 'build',
    number: '02',
    pill: 'Real-World Software',
    title: 'Build Real Products',
    headline: 'Turn your ideas into deployed, production code',
    description:
      'Theory without execution is wasted. Team up with fellow engineers to architect, code, test, and ship production-ready applications, open-source repositories, and client-grade solutions.',
    image: '/images/pillars/build.jpg',
    tags: ['Full-Stack Apps', 'Open Source Repos', 'CI/CD Pipelines', 'Production MVPs'],
    stat: 'Shipped Code',
    icon: Code2,
    accentColor: '#059669',
    accentBg: 'bg-[#ECFDF5]',
    accentBorder: 'border-[#A7F3D0]',
  },
  {
    id: 'collaborate',
    number: '03',
    pill: 'Team Engineering',
    title: 'Collaborate as a Team',
    headline: 'Work the way modern high-performing tech teams work',
    description:
      'Software engineering is a multiplayer sport. Experience Git workflows, pull request reviews, Agile sprints, and cross-functional team dynamics alongside frontend, backend, and design peers.',
    image: '/images/pillars/collaborate.jpg',
    tags: ['Git & PR Reviews', 'Agile Sprints', 'Pair Programming', 'Community Hub'],
    stat: 'Multiplayer Dev',
    icon: Users,
    accentColor: '#7C3AED',
    accentBg: 'bg-[#F5F3FF]',
    accentBorder: 'border-[#DDD6FE]',
  },
  {
    id: 'grow',
    number: '04',
    pill: 'Proof of Work',
    title: 'Grow & Lead',
    headline: 'Build a verifiable portfolio, unlock career opportunities',
    description:
      'Prove your skills with real contributions. Turn community projects into proof-of-work case studies, land high-impact tech roles, launch startups, or step up as an engineering mentor.',
    image: '/images/pillars/grow.jpg',
    tags: ['Career Growth', 'Portfolio Proof', 'Tech Leadership', 'Referral Network'],
    stat: 'Career Impact',
    icon: TrendingUp,
    accentColor: '#D97706',
    accentBg: 'bg-[#FFFBEB]',
    accentBorder: 'border-[#FDE68A]',
  },
]

export function WhatIsKodeToMates() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  // Pinned scroll progress: tracks scroll from when section top hits viewport to bottom
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // --- CARD 0 (Learn) Transforms: starts on top, slides right between 0.18 and 0.32 ---
  const x0 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], ['0%', '0%', '115%', '115%'])
  const rotate0 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], [0, 0, 7, 7])
  const opacity0 = useTransform(scrollYProgress, [0, 0.18, 0.30, 0.33, 1], [1, 1, 0.2, 0, 0])

  // --- CARD 1 (Build) Transforms: sits behind Card 0, scales up at 0.18-0.32, exits right at 0.46-0.60 ---
  const x1 = useTransform(scrollYProgress, [0, 0.46, 0.60, 1], ['0%', '0%', '115%', '115%'])
  const rotate1 = useTransform(scrollYProgress, [0, 0.46, 0.60, 1], [0, 0, 7, 7])
  const scale1 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], [0.94, 0.94, 1, 1])
  const y1 = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], [18, 18, 0, 0])
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.32, 0.46, 0.58, 0.61, 1], [0.85, 0.85, 1, 1, 0.2, 0, 0])

  // --- CARD 2 (Collaborate) Transforms: sits behind Card 1, scales up at 0.46-0.60, exits right at 0.72-0.86 ---
  const x2 = useTransform(scrollYProgress, [0, 0.72, 0.86, 1], ['0%', '0%', '115%', '115%'])
  const rotate2 = useTransform(scrollYProgress, [0, 0.72, 0.86, 1], [0, 0, 7, 7])
  const scale2 = useTransform(scrollYProgress, [0, 0.18, 0.32, 0.46, 0.60, 1], [0.88, 0.88, 0.94, 0.94, 1, 1])
  const y2 = useTransform(scrollYProgress, [0, 0.18, 0.32, 0.46, 0.60, 1], [36, 36, 18, 18, 0, 0])
  const opacity2 = useTransform(scrollYProgress, [0, 0.46, 0.60, 0.72, 0.84, 0.87, 1], [0.7, 0.7, 1, 1, 0.2, 0, 0])

  // --- CARD 3 (Grow) Transforms: sits behind Card 2, scales up at 0.72-0.86, stays anchored as final card ---
  const scale3 = useTransform(scrollYProgress, [0, 0.46, 0.60, 0.72, 0.86, 1], [0.84, 0.84, 0.90, 0.90, 1, 1])
  const y3 = useTransform(scrollYProgress, [0, 0.46, 0.60, 0.72, 0.86, 1], [50, 50, 32, 32, 0, 0])
  const opacity3 = useTransform(scrollYProgress, [0, 0.46, 0.72, 0.86, 1], [0.55, 0.55, 0.8, 1, 1])

  // Keep track of active card index for left-side indicator
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.25) {
      setActiveCard(0)
    } else if (latest < 0.52) {
      setActiveCard(1)
    } else if (latest < 0.78) {
      setActiveCard(2)
    } else {
      setActiveCard(3)
    }
  })

  // Clickable indicator: smoothly jump to a specific card's scroll position
  const scrollToCard = (index: number) => {
    if (!sectionRef.current) return
    const sectionTop = sectionRef.current.offsetTop
    const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight
    const targets = [0.08, 0.38, 0.65, 0.92]
    const targetY = sectionTop + targets[index] * scrollableDistance
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  // Pre-bundle styles for each card with explicit zIndex
  const cardMotionStyles = [
    {
      style: shouldReduceMotion ? {} : { x: x0, rotate: rotate0, opacity: opacity0 },
      zIndex: 40,
      pointerEvents: activeCard === 0 ? ('auto' as const) : ('none' as const),
    },
    {
      style: shouldReduceMotion ? {} : { x: x1, rotate: rotate1, scale: scale1, y: y1, opacity: opacity1 },
      zIndex: 30,
      pointerEvents: activeCard === 1 ? ('auto' as const) : ('none' as const),
    },
    {
      style: shouldReduceMotion ? {} : { x: x2, rotate: rotate2, scale: scale2, y: y2, opacity: opacity2 },
      zIndex: 20,
      pointerEvents: activeCard === 2 ? ('auto' as const) : ('none' as const),
    },
    {
      style: shouldReduceMotion ? {} : { scale: scale3, y: y3, opacity: opacity3 },
      zIndex: 10,
      pointerEvents: activeCard === 3 ? ('auto' as const) : ('none' as const),
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-white selection:bg-[#E4521B]/20 selection:text-[#E4521B] h-[320vh]"
      aria-labelledby="what-is-kodetomates-heading"
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

              {/* Eyebrow: Brand Dual Square + Category Tag */}
              <div className="inline-flex items-center gap-2.5 mb-3.5 select-none">
                <span className="flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4.5 h-4.5 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.45" />
                    <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#E4521B" />
                  </svg>
                </span>
                <span className="font-sans font-bold text-[12px] sm:text-[13px] tracking-[0.16em] text-[#E4521B] uppercase">
                  WHAT IS KodeToMates?
                </span>
              </div>

              {/* Main Headline (Strictly 2 lines in UI) */}
              <h2
                id="what-is-kodetomates-heading"
                className="font-sans font-bold text-[clamp(26px,2.8vw,48px)] xl:text-[clamp(32px,3.1vw,52px)] leading-[1.08] tracking-[-0.035em] text-[#111827] mb-4"
              >
                <span className="block whitespace-nowrap">
                  More than learning<span className="text-[#E4521B]">.</span>
                </span>
                <span className="block whitespace-nowrap text-[#111827]/90 mt-1 sm:mt-1.5">
                  More than building<span className="text-[#E4521B]">.</span>
                </span>
              </h2>

              {/* Signature Accent Line */}
              <div className="flex items-center gap-2 my-2.5 origin-left" aria-hidden="true">
                <span className="w-12 h-[3.5px] rounded-full bg-[#E4521B]" />
                <span className="w-2 h-[3.5px] rounded-full bg-[#E4521B]/40" />
              </div>

              {/* Description Paragraphs: Rich Mission & Practical Context */}
              <div className="space-y-3 font-sans text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#554E48] font-normal max-w-xl mb-6">
                <p>
                  KodeToMates is an open ecosystem designed for developers, builders, and creative technologists who want to break beyond passive tutorials. We bridge the critical gap between understanding syntax and shipping production-grade software.
                </p>
                <p className="text-[#665F58] text-[13.5px] sm:text-[14.5px]">
                  Here, learning is active, multiplayer, and driven by execution. Members collaborate on real GitHub repositories, participate in pair-coding sprints, exchange candid peer code reviews, and build verifiable public proof-of-work that unlocks high-impact engineering careers.
                </p>
              </div>

              {/* 4 Core Community Highlights with Official Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg mb-6 select-none">
                {/* 1. Real GitHub Repositories & PRs */}
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-sans font-medium text-[#292524] bg-[#FAF8F5] border border-[#EFEAE0] hover:border-[#E4521B]/40 px-3 py-2 rounded-xl transition-colors">
                  <span className="w-5 h-5 rounded-lg bg-[#FFF2EB] flex items-center justify-center shrink-0">
                    <GitPullRequest className="w-3.5 h-3.5 text-[#E4521B]" />
                  </span>
                  <span>Real GitHub Repositories & PRs</span>
                </div>

                {/* 2. Live Pair Coding & Sprints */}
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-sans font-medium text-[#292524] bg-[#FAF8F5] border border-[#EFEAE0] hover:border-[#059669]/40 px-3 py-2 rounded-xl transition-colors">
                  <span className="w-5 h-5 rounded-lg bg-[#ECFDF5] flex items-center justify-center shrink-0">
                    <Code2 className="w-3.5 h-3.5 text-[#059669]" />
                  </span>
                  <span>Live Pair Coding & Sprints</span>
                </div>

                {/* 3. Senior Peer Code Reviews */}
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-sans font-medium text-[#292524] bg-[#FAF8F5] border border-[#EFEAE0] hover:border-[#7C3AED]/40 px-3 py-2 rounded-xl transition-colors">
                  <span className="w-5 h-5 rounded-lg bg-[#F5F3FF] flex items-center justify-center shrink-0">
                    <MessageSquareCode className="w-3.5 h-3.5 text-[#7C3AED]" />
                  </span>
                  <span>Senior Peer Code Reviews</span>
                </div>

                {/* 4. Verifiable Career Proof-of-Work */}
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-sans font-medium text-[#292524] bg-[#FAF8F5] border border-[#EFEAE0] hover:border-[#D97706]/40 px-3 py-2 rounded-xl transition-colors">
                  <span className="w-5 h-5 rounded-lg bg-[#FFFBEB] flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#D97706]" />
                  </span>
                  <span>Verifiable Career Proof-of-Work</span>
                </div>
              </div>

              {/* Pillar Switcher Navigation (Interactive Pills that update with scroll) */}
              <div className="flex flex-wrap items-center gap-2 mb-6 select-none">
                {PILLAR_CARDS.map((pillar, idx) => {
                  const isActive = activeCard === idx
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => scrollToCard(idx)}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-semibold transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${isActive
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

              {/* Scroll Progress Bar & Counter */}
              <div className="w-full max-w-[280px] mb-6">
                <div className="flex items-center justify-between text-xs font-mono font-medium text-[#78716C] mb-2">
                  <span className="text-[#E4521B] font-bold">
                    CARD {PILLAR_CARDS[activeCard].number} / 04
                  </span>
                  <span className="text-[11px] text-[#A8A29E]">Scroll to explore →</span>
                </div>
                <div className="w-full h-1.5 bg-[#F0EBE3] rounded-full overflow-hidden">
                  <motion.div
                    style={{ width: progressWidth }}
                    className="h-full bg-gradient-to-r from-[#E4521B] to-[#FF7A3D] rounded-full transition-all"
                  />
                </div>
              </div>

              {/* CTA Action Button */}
              <Link
                href="/community"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#E4521B] hover:bg-[#141210] text-white font-sans font-semibold text-[14px] shadow-[0_8px_20px_rgba(228,82,27,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 select-none"
              >
                <span>Explore Our Community</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* ========================================================
                RIGHT COLUMN: Stack of Cards (Tight Gap with Left Context)
               ======================================================== */}
            <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-start py-4 sm:py-6">

              {/* Stack Stage: Fixed frame holding all layered cards */}
              <div className="relative w-full max-w-[520px] xl:max-w-[560px] h-[520px] sm:h-[560px] lg:h-[580px]">
                {PILLAR_CARDS.map((card, idx) => {
                  const motionConfig = cardMotionStyles[idx]

                  return (
                    <motion.div
                      key={card.id}
                      style={{
                        ...motionConfig.style,
                        zIndex: motionConfig.zIndex,
                        pointerEvents: motionConfig.pointerEvents,
                      }}
                      className="absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[32px] bg-white border border-[#E8E4DC] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group select-none origin-bottom-left will-change-transform"
                      data-index={idx}
                    >
                      {/* Top Section: High-Res Photo with Badges */}
                      <div className="relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[24px] overflow-hidden mb-4 sm:mb-5 bg-[#FAF7F2] shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 580px"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          priority={idx < 2}
                        />

                        {/* Top Gradient Overlay for Badge Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none" />

                        {/* Floating Pillar Tag Badge (Top Left) */}

                        {/* Floating Stat Badge (Top Right) */}
                        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-sans font-medium">
                          {card.stat}
                        </div>

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
                        <div className="pt-3 border-t border-[#F2EEE6] mt-3">
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {card.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8F5EE] border border-[#EFEAE0] text-[11px] sm:text-xs font-sans font-medium text-[#4A4540]"
                              >
                                <CheckCircle2
                                  className="w-3 h-3 shrink-0"
                                  style={{ color: card.accentColor }}
                                />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  )
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

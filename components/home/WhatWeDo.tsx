'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Search,
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { SlitHeading } from '@/components/ui/SlitHeading'

interface ServiceItem {
  id: string
  number: string
  shortTitle: string
  category: string
  pill: string
  title: string
  headline: string
  descriptionPrimary: string
  descriptionSecondary: string
  tags: string[]
  stat: string
  image: string
  href: string
  btnLabel: string
  icon: React.ElementType
}

const SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01',
    shortTitle: 'Web Development',
    category: 'WEBSITE DEVELOPMENT',
    pill: 'Custom Architecture',
    title: 'Websites That Work for You',
    headline: 'High-performance, bespoke web platforms engineered for business scale',
    descriptionPrimary:
      'Your website is the digital front door to your business. We engineer lightning-fast, secure, and fully responsive web applications using modern tech stacks like Next.js, React, and TypeScript. From custom landing pages to complex corporate portals, we build experiences that load in milliseconds and convert casual visitors into high-value clients.',
    descriptionSecondary:
      'Every line of code is structured for peak Core Web Vitals, accessible UI/UX, seamless mobile interactions, and effortless content scalability as your company grows.',
    tags: [
      'Next.js & React Architecture',
      'Mobile-First Responsive UI',
      'Sub-Second Page Load Speed',
      'Production API Integrations',
    ],
    stat: '99+ PageSpeed Score',
    image: '/images/services/website-dev-mockup.jpg',
    href: '/what-we-do/website-dev',
    btnLabel: 'Explore Website Development',
    icon: Code2,
  },
  {
    id: 'seo-digital-growth',
    number: '02',
    shortTitle: 'SEO & Growth',
    category: 'SEO & DIGITAL GROWTH',
    pill: 'Organic Visibility',
    title: 'Be Found First Online',
    headline: 'Data-backed search optimization that consistently ranks your brand',
    descriptionPrimary:
      'Building a beautiful website is only half the battle—your target audience needs to discover it. Our search engine optimization blends technical site architecture audits, high-intent keyword strategies, structured schema markup, and speed optimizations to dominate competitive search rankings.',
    descriptionSecondary:
      'We do not rely on guesswork or vanity metrics. We focus on search intent, sustainable organic traffic pipelines, and measurable conversions that continuously grow your inbound customer pipeline.',
    tags: [
      'Technical SEO Audits',
      'High-Intent Keyword Strategy',
      'Competitor Gap Analysis',
      'Schema & Core Web Vitals',
    ],
    stat: 'Top 10 Google Rankings',
    image: '/images/services/seo-mockup.jpg',
    href: '/what-we-do/seo',
    btnLabel: 'Explore SEO & Digital Growth',
    icon: Search,
  },
  {
    id: 'website-redesign',
    number: '03',
    shortTitle: 'Website Redesign',
    category: 'WEBSITE REDESIGN',
    pill: 'UI/UX Transformation',
    title: 'Modern Look. Better Results.',
    headline: 'Transform outdated, slow sites into sleek, modern digital experiences',
    descriptionPrimary:
      'Is your current website feeling slow, clunky, or failing to represent the true quality of your work? We conduct end-to-end design overhauls that retain your hard-earned SEO equity while completely revamping your user experience, typography, animations, and conversion funnels.',
    descriptionSecondary:
      'We migrate legacy codebases into bleeding-edge modern frameworks, eliminating technical debt and delivering an editorial, premium design aesthetic that positions your brand as an industry leader.',
    tags: [
      'Editorial UI/UX Redesign',
      'Zero-Downtime Migration',
      'Conversion Rate Optimization',
      'Modern Interactive Micro-animations',
    ],
    stat: '3x Better Conversion Lift',
    image: '/images/services/website-redesign-mockup.jpg',
    href: '/what-we-do/website-redesign',
    btnLabel: 'Explore Website Redesign',
    icon: Sparkles,
  },
  {
    id: 'digital-invitations',
    number: '04',
    shortTitle: 'Digital Invitations',
    category: 'DIGITAL INVITATIONS',
    pill: 'Interactive RSVP',
    title: 'Beautiful Invites. Made Simple.',
    headline: 'Curated, interactive digital event experiences that captivate your guests',
    descriptionPrimary:
      'Say goodbye to static PDF cards and postal delays. We design breathtaking, interactive digital invitations for weddings, corporate galas, product launches, and private gatherings that set the tone before the event even begins.',
    descriptionSecondary:
      'Featuring real-time RSVP tracking, calendar integration, Google Maps directions, gift registries, dynamic countdown timers, and custom photo galleries—all optimized for flawless presentation on every smartphone.',
    tags: [
      'Real-Time RSVP & Guest List',
      'Google Maps & Calendar Sync',
      'Curated Audio & Visuals',
      'Instant WhatsApp & SMS Share',
    ],
    stat: '100% Mobile Optimized',
    image: '/images/services/digital-invitation-mockup.jpg',
    href: '/what-we-do/digital-invitation',
    btnLabel: 'Explore Digital Invitations',
    icon: Mail,
  },
]

export function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion()
  const [activePillar, setActivePillar] = useState<string>(SERVICES[0].id)

  // Track the active section on scroll to illuminate the corresponding filter pill
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

    const observers: IntersectionObserver[] = []
    SERVICES.forEach((service) => {
      const el = document.getElementById(service.id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActivePillar(service.id)
            }
          })
        },
        { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  // Smooth scroll handler with Lenis support & fallback
  const handlePillarClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (!target) return

    setActivePillar(id)

    // Check for global Lenis instance
    const lenisInstance =
      typeof window !== 'undefined'
        ? (window as unknown as { lenis?: { scrollTo: (target: HTMLElement | string, options?: object) => void } }).lenis
        : null

    if (lenisInstance) {
      lenisInstance.scrollTo(target, { offset: -80, duration: 1.0 })
    } else {
      const navOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }

    try {
      window.history.pushState(null, '', `#${id}`)
    } catch {
      // ignore
    }
  }

  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden scroll-mt-24 bg-[#12111A] rounded-t-2xl rounded-b-2xl sm:rounded-t-3xl sm:rounded-b-3xl text-white selection:bg-[#E4521B]/30 selection:text-white"
      aria-labelledby="what-we-do-heading"
    >
      <div className="relative max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 z-10">

        {/* Section Header: Centered Position with Reduced Margin */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-6">

          {/* Main Headline with Slit Reveal & Coral Dots */}
          <SlitHeading
            id="what-we-do-heading"
            align="center"
            eyebrow="WHAT WE DO"
            lines={[`Digital Experiences. <span style="color: var(--color-primary-orange)">That Drive Real Growth.</span>`]}
            showAccentLine={true}
            slit={0}
            textColor="#FFFFFF"
            dotColor="#E4521B"
            className="text-[clamp(22px,2.6vw,44px)] xl:text-[clamp(26px,2.7vw,48px)] leading-[1.14] tracking-[-0.03em] mb-2"
          />

        </div>

        {/* Pillar Switcher Navigation: Smooth scroll pills with active indicator */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-7 select-none"
        >
          {SERVICES.map((pillar) => {
            const isActive = activePillar === pillar.id

            return (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                onClick={(e) => handlePillarClick(e, pillar.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-semibold transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md shadow-xs group focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-[#E4521B] text-white border border-[#E4521B] shadow-md shadow-[#E4521B]/35 scale-105'
                    : 'bg-white/[0.08] hover:bg-white/[0.15] text-[#E0DCED] hover:text-white border border-white/10 hover:border-white/25'
                }`}
              >
                <span
                  className={`text-[10px] font-mono transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#FF914D] group-hover:text-[#FFA366]'
                  }`}
                >
                  {pillar.number}
                </span>
                <span>{pillar.shortTitle}</span>
              </a>
            )
          })}
        </motion.div>

        {/* 4 Category Showcases: Left image with reveal animation, right context entering from left */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {SERVICES.map((service, idx) => {
            const isImageLeft = idx % 2 === 0
            const imageInitialX = shouldReduceMotion ? 0 : isImageLeft ? -80 : 80
            const imageClipInitial = shouldReduceMotion
              ? 'inset(0% 0% 0% 0% round 20px)'
              : isImageLeft
              ? 'inset(0% 100% 0% 0% round 20px)'
              : 'inset(0% 0% 0% 100% round 20px)'
            const imageWipeTarget = isImageLeft ? '102%' : '-102%'
            const contextInitialX = shouldReduceMotion ? 0 : isImageLeft ? 80 : -80

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-20 pb-4 sm:pb-5 lg:pb-6 border-b border-white/[0.08] last:border-b-0 last:pb-0 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

                  {/* ========================================================
                      IMAGE COLUMN (Alternates: Left on 1st/3rd, Right on 2nd/4th)
                     ======================================================== */}
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: imageInitialX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.85,
                      delay: 0.28,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`lg:col-span-6 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'} order-1 relative w-full`}
                  >
                    {/* Clip-Path Reveal Container */}
                    <motion.div
                      initial={{ clipPath: imageClipInitial }}
                      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{
                        duration: 0.85,
                        delay: 0.28,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#1B1926] border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.5)] group"
                    >
                      {/* Counter-scale image parallax during reveal */}
                      <motion.div
                        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.15 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{
                          duration: 0.85,
                          delay: 0.28,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          priority={idx === 0}
                        />
                      </motion.div>

                      {/* Warm Coral Reveal Sweep Wipe */}
                      {!shouldReduceMotion && (
                        <motion.div
                          initial={{ x: '0%' }}
                          whileInView={{ x: imageWipeTarget }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{
                            duration: 0.8,
                            delay: 0.28,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute inset-0 bg-[#E4521B]/35 z-20 pointer-events-none"
                        />
                      )}

                      {/* Gradient overlay for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                      {/* Floating Pill Tag (Top Left) */}
                      <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10 px-2.5 py-1 rounded-full bg-[#12111A]/90 backdrop-blur-md text-white text-[10.5px] font-sans font-bold uppercase tracking-wider border border-white/15 shadow-sm flex items-center gap-1.5">
                        <service.icon className="w-3.5 h-3.5 text-[#FF914D]" />
                        <span>{service.pill}</span>
                      </div>

                      {/* Floating Stat Badge (Top Right) */}
                      <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10.5px] sm:text-xs font-sans font-medium flex items-center gap-1.5 border border-white/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />
                        <span>{service.stat}</span>
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 z-10 text-white">
                        <h3 className="font-sans font-bold text-lg sm:text-xl leading-tight drop-shadow-md">
                          {service.title}
                          <span className="text-[#FF914D]">.</span>
                        </h3>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* ========================================================
                      CONTEXT COLUMN (Alternates: Right on 1st/3rd, Left on 2nd/4th - Enters FIRST)
                     ======================================================== */}
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: contextInitialX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.75,
                      delay: 0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`lg:col-span-6 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} order-2 flex flex-col items-start text-left`}
                  >
                    {/* Number & Category Eyebrow */}
                    <div className="inline-flex items-center gap-2 mb-2 select-none">
                      <span className="font-mono text-xs font-bold text-[#FF914D] px-2.5 py-0.5 rounded-md bg-[#E4521B]/20 border border-[#E4521B]/40">
                        {service.number}
                      </span>
                      <span className="font-sans font-bold text-xs tracking-[0.14em] uppercase text-[#C6C0D4]">
                        {service.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-sans font-bold text-[22px] sm:text-[25px] lg:text-[28px] text-white leading-[1.2] tracking-[-0.03em] mb-2.5">
                      {service.headline}
                    </h3>

                    {/* Expanded Context Descriptions */}
                    <div className="space-y-2 font-sans text-[14px] sm:text-[14.5px] leading-[1.62] text-[#D8D4E2] font-normal mb-4">
                      <p>{service.descriptionPrimary}</p>
                      <p className="text-[#A29CAE] text-[13px] sm:text-[13.5px]">
                        {service.descriptionSecondary}
                      </p>
                    </div>

                    {/* Deliverables / Capabilities Badges */}
                    <div className="pt-3 border-t border-white/[0.08] w-full mb-5">
                      <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C4BFCF] mb-2">
                        Key Deliverables & Capabilities:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.07] backdrop-blur-md border border-white/10 text-[11px] sm:text-[11.5px] font-sans font-medium text-[#F0EDF8] shadow-xs"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#FF914D]" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Action Button */}
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#E4521B] hover:bg-white text-white hover:text-[#12111A] font-sans font-semibold text-[13.5px] shadow-[0_6px_18px_rgba(228,82,27,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 select-none"
                    >
                      <span>{service.btnLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                  </motion.div>

                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

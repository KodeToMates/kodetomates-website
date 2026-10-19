'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Search,
  Sparkles,
  Mail,
  ArrowRight,
  Palette,
  Zap,
  Smartphone,
  Target,
  SlidersHorizontal,
  TrendingUp,
  Gauge,
  MousePointerClick,
  CalendarCheck,
  MapPin,
} from 'lucide-react'

interface ServiceFeature {
  label: string
  icon: React.ElementType
}

interface ServiceCard {
  id: string
  category: string
  categoryColor: string
  titleLine1: string
  titleLine2: string
  description: string
  features: ServiceFeature[]
  href: string
  image: string
  cardBg: string
  cardBorder: string
  cardShadowHover: string
  badgeBg: string
  badgeIcon: React.ElementType
  btnBg: string
  hoverText: string
  pillBg: string
  pillText: string
  pillBorder: string
  pillHoverBg: string
  iconColor: string
}

const SERVICES: ServiceCard[] = [
  {
    id: 'website-development',
    category: 'WEBSITE DEVELOPMENT',
    categoryColor: 'text-[#AB003E]',
    titleLine1: 'Websites That',
    titleLine2: 'Work for You',
    description: 'Fast, responsive and SEO-friendly websites built to turn visitors into loyal customers.',
    features: [
      { label: 'Custom Design', icon: Palette },
      { label: 'Fast & Secure', icon: Zap },
      { label: 'Mobile Friendly', icon: Smartphone },
    ],
    href: '/what-we-do/website-dev',
    image: '/images/services/website-dev-mockup.jpg',
    cardBg: 'bg-[#FFF9F5]',
    cardBorder: 'border-[#FFE3D1]',
    cardShadowHover: 'hover:shadow-[0_16px_36px_rgba(171,0,62,0.14)]',
    badgeBg: 'bg-gradient-to-br from-[#FF914D] to-[#AB003E]',
    badgeIcon: Code2,
    btnBg: 'bg-gradient-to-r from-[#FF914D] to-[#AB003E]',
    hoverText: 'group-hover:text-[#AB003E]',
    pillBg: 'bg-[#FFF0E5]',
    pillText: 'text-[#9A3412]',
    pillBorder: 'border-[#FED7AA]',
    pillHoverBg: 'hover:bg-[#FFE6D5] hover:border-[#FDBA74]',
    iconColor: 'text-[#AB003E]',
  },
  {
    id: 'seo-digital-growth',
    category: 'SEO & DIGITAL GROWTH',
    categoryColor: 'text-[#7C3AED]',
    titleLine1: 'Be Found',
    titleLine2: 'Get More Customers',
    description: 'Data-driven SEO strategies that improve your visibility and attract the right audience.',
    features: [
      { label: 'Keyword Strategy', icon: Target },
      { label: 'On-Page SEO', icon: SlidersHorizontal },
      { label: 'Growth Tracking', icon: TrendingUp },
    ],
    href: '/what-we-do/seo',
    image: '/images/services/seo-mockup.jpg',
    cardBg: 'bg-[#F8F7FF]',
    cardBorder: 'border-[#E9E5FF]',
    cardShadowHover: 'hover:shadow-[0_16px_36px_rgba(124,58,237,0.12)]',
    badgeBg: 'bg-[#8B5CF6]',
    badgeIcon: Search,
    btnBg: 'bg-[#7C3AED]',
    hoverText: 'group-hover:text-[#7C3AED]',
    pillBg: 'bg-[#EDE9FE]',
    pillText: 'text-[#5B21B6]',
    pillBorder: 'border-[#DDD6FE]',
    pillHoverBg: 'hover:bg-[#E0D9FF] hover:border-[#C4B5FD]',
    iconColor: 'text-[#7C3AED]',
  },
  {
    id: 'website-redesign',
    category: 'WEBSITE REDESIGN',
    categoryColor: 'text-[#BE123C]',
    titleLine1: 'Modern Look.',
    titleLine2: 'Better Results.',
    description: 'Transform outdated websites into clean, modern and high-performing digital experiences.',
    features: [
      { label: 'UI/UX Design', icon: Sparkles },
      { label: 'Better Performance', icon: Gauge },
      { label: 'Conversion Focus', icon: MousePointerClick },
    ],
    href: '/what-we-do/website-redesign',
    image: '/images/services/website-redesign-mockup.jpg',
    cardBg: 'bg-[#FFF5F8]',
    cardBorder: 'border-[#FFE4ED]',
    cardShadowHover: 'hover:shadow-[0_16px_36px_rgba(219,39,119,0.12)]',
    badgeBg: 'bg-[#E11D48]',
    badgeIcon: Sparkles,
    btnBg: 'bg-[#BE123C]',
    hoverText: 'group-hover:text-[#BE123C]',
    pillBg: 'bg-[#FFE4E6]',
    pillText: 'text-[#9F1239]',
    pillBorder: 'border-[#FECDD3]',
    pillHoverBg: 'hover:bg-[#FFD9DF] hover:border-[#FDA4AF]',
    iconColor: 'text-[#BE123C]',
  },
  {
    id: 'digital-invitations',
    category: 'DIGITAL INVITATIONS',
    categoryColor: 'text-[#059669]',
    titleLine1: 'Beautiful Invites.',
    titleLine2: 'Made Simple.',
    description: 'Memorable digital invites with seamless RSVP and event details – all in one place.',
    features: [
      { label: 'RSVP Integration', icon: CalendarCheck },
      { label: 'Custom Themes', icon: Palette },
      { label: 'Event Details', icon: MapPin },
    ],
    href: '/what-we-do/digital-invitation',
    image: '/images/services/digital-invitation-mockup.jpg',
    cardBg: 'bg-[#F2FCF7]',
    cardBorder: 'border-[#DCFCE7]',
    cardShadowHover: 'hover:shadow-[0_16px_36px_rgba(5,150,105,0.12)]',
    badgeBg: 'bg-[#059669]',
    badgeIcon: Mail,
    btnBg: 'bg-[#059669]',
    hoverText: 'group-hover:text-[#059669]',
    pillBg: 'bg-[#DCFCE7]',
    pillText: 'text-[#065F46]',
    pillBorder: 'border-[#BBF7D0]',
    pillHoverBg: 'hover:bg-[#CEF7DC] hover:border-[#86EFAC]',
    iconColor: 'text-[#059669]',
  },
]

export function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 overflow-hidden scroll-mt-28 bg-[#FEF5EB] selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="what-we-do-heading"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10">
        
        {/* Section Header */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div className="max-w-2xl">
            {/* Consistent Brand Eyebrow Title with Layered Dual-Square Icon */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 select-none cursor-default"
            >
              {/* Layered Dual-Square Icon matching Brand Style */}
              <span className="flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {/* Top-left lighter offset square */}
                  <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.45" />
                  {/* Bottom-right solid berry square */}
                  <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#AB003E" />
                </svg>
              </span>

              {/* Subtitle Text in Prominent Font */}
              <span className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[22px] bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent tracking-[-0.01em]">
                What We Do
              </span>
            </motion.div>

            {/* Main Heading: Sunset Berry on "That Drive Real Growth" */}
            <motion.h2
              id="what-we-do-heading"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-[clamp(2.3rem,4.2vw,3.75rem)] font-bold text-[#111827] tracking-tight leading-[1.12] mb-3 sm:mb-4"
            >
              <div>Digital Experiences</div>
              <div className="mt-1">
                <span className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent">
                  That Drive Real Growth
                </span>
              </div>
            </motion.h2>

            {/* Signature Decorative Down Line with Square Dot (━━━━ ▪) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex items-center gap-2 mb-4 sm:mb-5 origin-left"
              aria-hidden="true"
            >
              <span className="w-12 sm:w-14 h-[3.5px] rounded-[1px] bg-gradient-to-r from-[#FF914D] to-[#AB003E]" />
              <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#AB003E]" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-[15.5px] sm:text-[17px] text-[#4B5563] leading-relaxed max-w-xl"
            >
              We create modern digital solutions that help your brand stand out, get found, and grow online.
            </motion.p>
          </div>

          {/* Right Cursive Hand-drawn Annotation & Swoop Arrow */}
          <div className="hidden md:flex flex-col items-center mr-6 lg:mr-12 mb-2 select-none pointer-events-none">
            <span className="font-caveat text-[clamp(26px,2.4vw,34px)] font-bold bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent leading-[1.1] text-center -rotate-6 drop-shadow-xs">
              Build<br />
              Grow<br />
              Together
            </span>

            {/* Curved Arrow pointing down towards the cards with Sunset Berry gradient */}
            <div className="relative w-16 h-12 mt-1">
              <svg
                viewBox="0 0 60 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="arrowSunsetBerryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF914D" />
                    <stop offset="100%" stopColor="#AB003E" />
                  </linearGradient>
                </defs>
                {/* Hand-drawn curving arrow path */}
                <path
                  d="M18 4 C 36 6, 44 20, 26 38"
                  stroke="url(#arrowSunsetBerryGrad)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                {/* Arrowhead */}
                <path
                  d="M 22 34 L 26 39 L 32 37"
                  stroke="url(#arrowSunsetBerryGrad)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Little 4-point sparkle star */}
                <path
                  d="M 50 14 Q 50 18 54 18 Q 50 18 50 22 Q 50 18 46 18 Q 50 18 50 14 Z"
                  fill="url(#arrowSunsetBerryGrad)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6.5">
          {SERVICES.map((service, idx) => {
            const BadgeIcon = service.badgeIcon

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex flex-col justify-between rounded-[26px] ${service.cardBg} border ${service.cardBorder} p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${service.cardShadowHover} hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}
              >
                <div className="flex flex-col">
                  {/* Top Image Container with Circular Icon Badge */}
                  <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden mb-5 bg-black/5 shadow-inner">
                    <Image
                      src={service.image}
                      alt={`${service.titleLine1} ${service.titleLine2}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top-Right Circle Icon Badge */}
                    <div className={`absolute top-3 right-3 w-8 h-8 rounded-full ${service.badgeBg} text-white flex items-center justify-center shadow-md`}>
                      <BadgeIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Main Category Tag (Enhanced & Bold) */}
                  <p className={`text-[11.5px] font-sans font-bold tracking-wider uppercase mb-1.5 ${service.categoryColor}`}>
                    {service.category}
                  </p>

                  {/* Enhanced Card Title - Uniform Bold Typography */}
                  <h3 className="font-playfair text-[clamp(1.22rem,1.35vw,1.48rem)] font-bold text-[#111827] leading-[1.25] mb-2.5">
                    <div>{service.titleLine1}</div>
                    <div>{service.titleLine2}</div>
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13px] text-[#4B5563] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Continuous Realistic Feature Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                    {service.features.map((feature) => {
                      const FeatIcon = feature.icon
                      return (
                        <span
                          key={feature.label}
                          className={`group/badge inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11.5px] sm:text-[12px] font-semibold tracking-tight border ${service.pillBg} ${service.pillText} ${service.pillBorder} ${service.pillHoverBg} shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 select-none`}
                        >
                          <FeatIcon className={`w-3.5 h-3.5 ${service.iconColor} stroke-[2.3] shrink-0 group-hover/badge:scale-115 transition-transform duration-200`} />
                          <span>{feature.label}</span>
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Card Action Link */}
                <Link
                  href={service.href}
                  aria-label={`${service.titleLine1} ${service.titleLine2} - ${service.description}`}
                  className="pt-3.5 border-t border-black/5 flex items-center gap-2.5 mt-auto group/btn select-none"
                >
                  <span className={`w-7 h-7 rounded-full ${service.btnBg} text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <span className={`text-[13px] font-semibold text-[#111827] ${service.hoverText} transition-colors`}>
                    Explore service
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

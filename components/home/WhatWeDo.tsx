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

  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 overflow-hidden scroll-mt-28 bg-white selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="what-we-do-heading"
    >
      <div className="relative max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 z-10">

        {/* Section Header: Centered Position */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">

          {/* Main Headline with Slit Reveal & Coral Dots */}
          <SlitHeading
            id="what-we-do-heading"
            align="center"
            eyebrow="WHAT WE DO"
            lines={[`Digital Experiences. <span style="color: var(--color-primary-orange)">That Drive Real Growth.</span>`]}
            showAccentLine={true}
            slit={0}
            className="text-[clamp(22px,2.6vw,44px)] xl:text-[clamp(26px,2.7vw,48px)] leading-[1.14] tracking-[-0.03em] mb-3"
          />

        </div>

        {/* Pillar Switcher Navigation: Centered */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12 select-none"
        >
          {SERVICES.map((pillar) => (
            <a
              key={pillar.id}
              href={`#${pillar.id}`}
              className="px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-semibold transition-all duration-300 flex items-center gap-1.5 bg-[#F5F2EB] text-[#554E48] hover:bg-[#141210] hover:text-white group focus:outline-none"
            >
              <span className="text-[10px] font-mono text-[#E4521B] group-hover:text-[#FF914D]">
                {pillar.number}
              </span>
              <span>{pillar.shortTitle}</span>
            </a>
          ))}
        </motion.div>

        {/* 4 Category Showcases: Alternating Left Image / Right Image Swap */}
        <div className="space-y-8 sm:space-y-12">
          {SERVICES.map((service, idx) => {
            const isSwapped = idx % 2 === 1

            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-[28px] sm:rounded-[32px] bg-white border border-[#E8E4DC] p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

                  {/* ========================================================
                      IMAGE COLUMN (Swaps: Left on Card 1 & 3, Right on Card 2 & 4)
                     ======================================================== */}
                  <div
                    className={`lg:col-span-6 relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#FAF7F2] border border-[#EFEAE0] shadow-sm group ${isSwapped ? 'lg:order-2' : 'lg:order-1'
                      }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={idx === 0}
                    />

                    {/* Gradient overlay for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                    {/* Floating Pill Tag (Top Left) */}
                    <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#111827] text-[11px] font-sans font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      <service.icon className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>{service.pill}</span>
                    </div>

                    {/* Floating Stat Badge (Top Right) */}
                    <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] sm:text-xs font-sans font-medium flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B]" />
                      <span>{service.stat}</span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                      <h3 className="font-sans font-bold text-xl sm:text-2xl leading-tight drop-shadow-md">
                        {service.title}
                        <span className="text-[#E4521B]">.</span>
                      </h3>
                    </div>
                  </div>

                  {/* ========================================================
                      CONTEXT COLUMN (Swaps: Right on Card 1 & 3, Left on Card 2 & 4)
                     ======================================================== */}
                  <div
                    className={`lg:col-span-6 flex flex-col items-start text-left ${isSwapped ? 'lg:order-1' : 'lg:order-2'
                      }`}
                  >

                    {/* Number & Category Eyebrow */}
                    <div className="inline-flex items-center gap-2 mb-2.5 select-none">
                      <span className="font-mono text-xs font-bold text-[#E4521B] px-2.5 py-0.5 rounded-md bg-[#FFF0E5] border border-[#FED7AA]">
                        {service.number}
                      </span>
                      <span className="font-sans font-bold text-xs tracking-[0.14em] uppercase text-[#736B63]">
                        {service.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-sans font-bold text-[22px] sm:text-[26px] lg:text-[28px] text-[#111827] leading-[1.2] tracking-[-0.03em] mb-3.5">
                      {service.headline}
                    </h3>

                    {/* Expanded Context Descriptions */}
                    <div className="space-y-3 font-sans text-[14.5px] sm:text-[15px] leading-[1.68] text-[#554E48] font-normal mb-5">
                      <p>{service.descriptionPrimary}</p>
                      <p className="text-[#665F58] text-[13.5px] sm:text-[14.5px]">
                        {service.descriptionSecondary}
                      </p>
                    </div>

                    {/* Deliverables / Capabilities Badges (Matching WhatIsKodeToMates) */}
                    <div className="pt-3.5 border-t border-[#F2EEE6] w-full mb-6">
                      <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8A8178] mb-2.5">
                        Key Deliverables & Capabilities:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F5EE] border border-[#EFEAE0] text-[11.5px] sm:text-xs font-sans font-medium text-[#4A4540]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#E4521B]" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Action Button: Styled like 'Explore Our Community' */}
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#E4521B] hover:bg-[#141210] text-white font-sans font-semibold text-[14px] shadow-[0_8px_20px_rgba(228,82,27,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 select-none"
                    >
                      <span>{service.btnLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                  </div>

                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

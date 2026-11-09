'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import DishOrbitCarousel, { type Dish } from '@/components/ui/dish-orbit-carousel'
import { SERVICE_PILLARS } from '@/config/what-we-do'

// Map KodeToMates' 4 service pillars into the Orbit Carousel items
const ORBIT_PILLARS: Dish[] = [
  {
    title: 'BESPOKE',
    subtitle: 'WEBSITE DEV',
    image: '/Image-v1/Home_page/website-develop.jpg',
    alt: 'Bespoke Website Development Showcase',
    eyebrow: 'PILLAR 01 · BESPOKE ENGINEERING',
    label: 'Website Dev',
    rating: 4.9,
    chef: 'Next.js 16 & React',
    kitchen: 'High-Performance Platforms',
    description:
      'Lightning-fast, accessible web platforms engineered with Next.js App Router for sub-second TTFB, edge caching, and maximum business conversions.',
    likes: 142,
    ingredients: [
      'Next.js 16 App Router',
      'TypeScript Strict',
      'Tailwind CSS v4',
      'Headless CMS',
      'Sub-second TTFB',
    ],
    accent: '#E4521B',
    imageClassName: 'rounded-2xl object-cover',
    href: '/what-we-do/website-dev',
  },
  {
    title: 'EDITORIAL',
    subtitle: 'WEB REDESIGN',
    image: '/Image-v1/Home_page/website-redesign.jpg',
    alt: 'Website Redesign and UI/UX Modernization',
    eyebrow: 'PILLAR 02 · MODERNIZATION',
    label: 'Web Redesign',
    rating: 5.0,
    chef: 'Zero-Downtime Migration',
    kitchen: 'UI/UX Overhauls & CRO',
    description:
      'Transform outdated, clunky websites into sleek editorial digital experiences while preserving 100% of hard-earned Google search rankings.',
    likes: 98,
    ingredients: [
      'Editorial UI/UX',
      'Zero-Downtime Cutover',
      'Conversion Rate Lift',
      'Micro-animations',
      'SEO Equity Retention',
    ],
    accent: '#FF914D',
    imageClassName: 'rounded-2xl object-cover',
    href: '/what-we-do/website-redesign',
  },
  {
    title: 'TECHNICAL',
    subtitle: 'SEO & GROWTH',
    image: '/Image-v1/Home_page/seo.jpg',
    alt: 'Technical SEO and Organic Growth',
    eyebrow: 'PILLAR 03 · SEARCH DOMINANCE',
    label: 'SEO & Growth',
    rating: 4.9,
    chef: 'Data-Backed Growth',
    kitchen: 'Search Engine Dominance',
    description:
      'Technical site audits, high-intent keyword blueprints, schema markup, and speed tuning to reliably position your brand in Google Top 10.',
    likes: 116,
    ingredients: [
      'Technical SEO Audits',
      'Keyword Strategy',
      'Rich Schema Markup',
      'Core Web Vitals',
      'Organic Lead Pipeline',
    ],
    accent: '#D9381E',
    imageClassName: 'rounded-2xl object-cover',
    href: '/what-we-do/seo',
  },
  {
    title: 'INTERACTIVE',
    subtitle: 'DIGI INVITES',
    image: '/Image-v1/digi_invi/Indian Wedding Invitation Mockup-Photoroom.png',
    alt: 'Interactive Digital Invitations and Event Microsites',
    eyebrow: 'PILLAR 04 · EVENT EXPERIENCES',
    label: 'Digital Invites',
    rating: 5.0,
    chef: 'Event Microsites',
    kitchen: 'Real-Time RSVP & Guest List',
    description:
      'Breathtaking digital invitations for weddings, corporate galas, and celebrations with instant WhatsApp sharing, GPS navigation, and RSVPs.',
    likes: 215,
    ingredients: [
      'Real-Time RSVPs',
      'Google Maps Sync',
      'Countdown Timers',
      'WhatsApp Sharing',
      '2–3 Days Delivery',
    ],
    accent: '#AB003E',
    imageClassName: 'object-contain',
    href: '/what-we-do/digital-invitation',
  },
]

export function WhatWeDoHero() {
  const router = useRouter()

  return (
    <section suppressHydrationWarning className="relative w-full pt-24 sm:pt-28 lg:pt-32 pb-0 overflow-hidden bg-white text-[#161413]">
      {/* Background Ambient Radial Glow */}
      <div suppressHydrationWarning className="absolute inset-0 pointer-events-none">
        <div suppressHydrationWarning className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[450px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.07)_0%,transparent_70%)] blur-3xl" />
        <div suppressHydrationWarning className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-orange-50/20 to-transparent" />
      </div>

      {/* Orbit Hero Stage (Centerpiece) */}
      <div suppressHydrationWarning className="relative w-full z-10">
        <DishOrbitCarousel
          dishes={ORBIT_PILLARS}
          height="440px"
          scrollPerDishPx={0}
          loop={true}
          autoPlay={true}
          autoPlayInterval={5000}
          fontSrc={null}
          headingLevel="h1"
          playLabel="Blueprint"
          orderLabel="Explore Pillar"
          overviewTabLabel="Overview"
          detailTabLabel="Core Stack"
          showTopNav={false}
          onOrder={(dish) => {
            if (dish.href) {
              router.push(dish.href)
            }
          }}
          onPlay={(_, idx) => {
            const pillar = SERVICE_PILLARS[idx]
            if (pillar) {
              const elem = document.getElementById(pillar.id)
              if (elem) {
                const topOffset = elem.getBoundingClientRect().top + window.scrollY - 90
                window.scrollTo({ top: topOffset, behavior: 'smooth' })
              }
            }
          }}
          className="w-full bg-white"
        />
      </div>
    </section>
  )
}

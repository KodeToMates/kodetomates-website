'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { TeamLanyardRail, type LanyardMember } from '@/components/ui/team-lanyard-rail'

const CLIENT_WEBSITES: LanyardMember[] = [
  {
    id: 'datalive-intelligence',
    name: 'DataLive Intelligence',
    role: 'Enterprise BI & Automation',
    team: 'Live Client · Production',
    tone: 1, // Signature #E4521B Coral / Terracotta
    image: '/images/clients/datalive-intelligence.png',
    imageFit: 'contain',
    bio: 'Enterprise BI dashboards, real-time SQL data pipelines, and digital RPA automation built for modern mid-market business intelligence.',
    tags: ['Next.js 15', 'Power BI', 'Live Production'],
    links: [
      { label: 'Visit Website', href: 'https://dd-front-end.vercel.app/' },
      { label: 'Status: Live', href: 'https://dd-front-end.vercel.app/' },
    ],
  },
  {
    id: 'next-is-you',
    name: 'Next Is You',
    role: 'Your Next Breakthrough',
    team: 'Future Client · Co-Founder',
    tone: 2, // Brand #FF914D Sunset Orange
    image: '/images/clients/next-is-you.svg',
    imageFit: 'contain',
    bio: 'Have an ambitious web platform, AI agent workflow, or high-converting product to build? Partner with KodeToMates to bring it to life.',
    tags: ['Custom Web Apps', 'Autonomous Agents', "Let's Build"],
    links: [
      { label: 'Start Project', href: '/contact' },
      { label: 'Book Strategy Call', href: '/contact' },
    ],
  },
]

export function OurClientsWebsites() {
  return (
    <section
      id="our-clients-websites"
      aria-label="Our Clients' Websites"
      className="relative z-10 w-full py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24 bg-[#12111A] text-white selection:bg-[#E4521B]/30 selection:text-white"
    >
      {/* Dynamic ambient lights matching WhatWeDo aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#E4521B]/20 via-[#FF914D]/8 to-transparent blur-3xl rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 w-[600px] h-[320px] bg-[#E4521B]/12 blur-3xl rounded-full"
      />

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 z-10">
        {/* Section Header adhering strictly to AGENTS.md Typography rules */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10">


          <h2 className="font-sans font-bold tracking-[-0.03em] text-white text-3xl sm:text-4xl md:text-5xl leading-[1.12]">
            Our Clients&apos;{' '}
            <span className="text-[#E4521B]">Websites</span>
          </h2>

          <p className="mt-3 font-sans text-sm sm:text-base md:text-lg text-[#E0DCED] leading-relaxed max-w-2xl mx-auto">
            Real software built for real businesses. Drag the badges along the rail, pull down to feel the spring tension, or click to flip the pass and visit the live website.
          </p>
        </div>

        {/* Big Size Interactive Physics Lanyard Rail */}
        <div className="relative w-full">
          <TeamLanyardRail
            items={CLIENT_WEBSITES}
            cardWidth={215}
            autoplay={true}
            interval={3600}
            caption="Pull down on a lanyard to test spring tension, or click to flip and reveal the live site link."
            labels={{
              flip: 'Click or press Enter to flip badge',
              back: 'Click again or press Esc to turn back',
              show: 'Show',
            }}
            action={
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href="https://dd-front-end.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-[#12111A] transition-all"
                >
                  <span>Explore DataLive Website</span>
                  <ExternalLink className="size-3.5" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E4521B] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#E4521B]/35 hover:bg-[#CC420F] hover:-translate-y-0.5 transition-all"
                >
                  <span>Next is You · Build with Us</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default OurClientsWebsites

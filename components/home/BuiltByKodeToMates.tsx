'use client'

import React from 'react'
import Link from 'next/link'
import { LazyImage } from '@/components/ui/LazyImage'
import { motion, useReducedMotion } from 'framer-motion'

import { ArrowRight } from 'lucide-react'

// 4-point sparkle star matching the exact reference image ornament
function SparkleStar({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface ProjectCardItem {
  id: string
  title: string
  description: string
  image: string
  link: string
}

const PROJECTS_DATA: ProjectCardItem[] = [
  {
    id: 'developer-tools',
    title: 'Developer Tools',
    description:
      "We're exploring tools that make development faster, simpler and more collaborative — from better workflows to smarter utilities.",
    image: '/images/projects/laptop-ai-desk.jpg',
    link: '/projects',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description:
      "We're researching how AI and automation can remove friction, save time and help people focus on what really matters — creating, learning and growing.",
    image: '/images/projects/ai-automation-desk.jpg',
    link: '/projects',
  },
  {
    id: 'community-projects',
    title: 'Community Projects',
    description:
      "We're open to ideas, partnerships and collaborations. If you have a project idea, a problem to solve, or just want to build something together — let's talk.",
    image: '/images/projects/community-sticky-notes.jpg',
    link: '/projects',
  },
]

export function BuiltByKodeToMates() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="built-by-kodetomates"
      className="relative z-10 w-full min-h-screen min-h-[100svh] flex flex-col justify-center py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-28 bg-white border-y border-[#F3ECE4]/80 shadow-[0_2px_16px_rgba(0,0,0,0.015)] selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="built-by-kodetomates-heading"
    >
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-auto">
        {/* ========================================================
            SECTION HEADER: Exact Typography, Spacing & Buttons
           ======================================================== */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow: Layered Dual-Square Icon + Uppercase Label */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 mb-3.5 sm:mb-4 select-none"
          >
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
            <span className="font-sans font-bold text-[12px] sm:text-[13px] tracking-[0.16em] text-[#C2410C] uppercase">
              OUR JOURNEY STARTS HERE
            </span>
          </motion.div>

          {/* Main Headline: Line 1 Bold Charcoal, Line 2 Bold Sunset Berry Gradient (No Italic, matching What We Do) */}
          <motion.h2
            id="built-by-kodetomates-heading"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,4.5vw,4.1rem)] font-bold text-[#111827] leading-[1.12] tracking-tight mb-3"
          >
            <div>Real ideas. Real problems.</div>
            <div className="mt-1">
              <span className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent">
                Real products.
              </span>
            </div>
          </motion.h2>

          {/* Decorative Dash Line with Dot (━━━━ ▪) matching What We Do */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-2 my-3 sm:my-3.5 origin-left"
            aria-hidden="true"
          >
            <span className="w-12 sm:w-14 h-[3.5px] rounded-[1px] bg-gradient-to-r from-[#FF914D] to-[#AB003E]" />
            <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#AB003E]" />
          </motion.div>

          {/* Description Paragraph + Right-Aligned Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 pt-1"
          >
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.68] text-[#554E48] font-normal max-w-xl">
              We&apos;re at the beginning of our journey. Explore the ideas we&apos;re researching, the tools we&apos;re experimenting with, and the products we hope to build together.
            </p>

            {/* Header Action Buttons Aligned on the Right */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 shrink-0">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#FF7033] to-[#E44B16] text-white font-sans font-semibold text-[14.5px] shadow-[0_6px_20px_rgba(228,75,22,0.3)] hover:shadow-[0_8px_26px_rgba(228,75,22,0.45)] hover:-translate-y-0.5 transition-all duration-300 select-none"
              >
                <span>Build with us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 font-sans font-semibold text-[14.5px] text-[#A0350B] hover:text-[#E4521B] underline underline-offset-4 decoration-[#E4521B]/40 hover:decoration-[#E4521B] transition-colors duration-200 select-none"
              >
                <span>Share an idea</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            3 PROJECT CARDS GRID (EXACT REFERENCE PARITY)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {PROJECTS_DATA.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="group flex flex-col justify-between rounded-[26px] sm:rounded-[28px] bg-[#FCFAF8] border border-[#EFE5DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(228,82,27,0.08)] hover:border-[#E8DACD] transition-all duration-300 p-5 sm:p-6"
            >
              <div>
                {/* Top Visual Container with Pre-rendered High-Res Mockup */}
                <div className="relative w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#FAF6F1]">
                  <LazyImage
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    priority={idx === 0}
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#111827] mt-5 mb-2.5 tracking-tight group-hover:text-[#E4521B] transition-colors duration-200">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans text-[13.5px] sm:text-[14px] leading-[1.62] text-[#615852] font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Card Footer Action: [ → ] Learn more */}
              <div className="pt-6 sm:pt-7">
                <Link
                  href={card.link}
                  className="group/link inline-flex items-center gap-2.5 text-[#554E48] hover:text-[#E4521B] transition-colors select-none"
                >
                  <span className="w-6 h-6 rounded-full border border-black/15 group-hover/link:border-[#E4521B] group-hover/link:bg-[#E4521B] group-hover/link:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </span>
                  <span className="font-sans text-[13.5px] font-medium">
                    Learn more
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SlitHeading } from '@/components/ui'
import { SERVICE_PILLARS } from '@/config/what-we-do'

export function PillarsShowcase() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="pillars"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-white text-[#161413] overflow-hidden scroll-mt-20"
      aria-label="Core Service Pillars"
    >
      <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 backdrop-blur-md mb-4">
            <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B]">
              CORE PILLARS
            </span>
          </div>

          <SlitHeading
            id="pillars-heading"
            align="center"
            lines={[
              'Four Pillars.',
              '<span style="color: var(--color-primary-orange)">One Unified Standard of Craft.</span>',
            ]}
            showAccentLine={true}
            slit={0}
            textColor="#161413"
            dotColor="#E4521B"
            className="text-[clamp(26px,3.8vw,52px)] leading-[1.12] tracking-[-0.03em] font-sans font-bold mb-4"
          />

          <p className="font-sans text-[15px] sm:text-[16px] text-[#6B645E] max-w-2xl leading-relaxed">
            Each discipline is engineered to operate either as an autonomous, high-impact engagement or harmoniously as part of an end-to-end digital transformation.
          </p>
        </div>

        {/* 4 Pillars Alternating Cards */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const isImageLeft = idx % 2 === 0
            const Icon = pillar.icon
            const imageInitialX = shouldReduceMotion ? 0 : isImageLeft ? -30 : 30
            const contextInitialX = shouldReduceMotion ? 0 : isImageLeft ? 30 : -30

            return (
              <article
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-28 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] hover:border-[#E4521B]/35 transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.04)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* IMAGE COLUMN */}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: imageInitialX }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-6 ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    } order-1 relative w-full`}
                  >
                    <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] group shadow-md">
                      <Image
                        src={pillar.image}
                        alt={`${pillar.title} showcase`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                      {/* Stat Pill Badge */}
                      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-4 p-3 sm:px-4 sm:py-3 rounded-xl bg-white/95 backdrop-blur-xl border border-[#E8E2D9] shadow-lg flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#E4521B] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-sans font-bold text-sm sm:text-base text-[#161413] tracking-tight">
                            {pillar.stat}
                          </div>
                          <div className="font-sans text-[11px] text-[#6B645E]">
                            {pillar.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CONTEXT COLUMN */}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: contextInitialX }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-6 ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    } order-2 flex flex-col justify-center`}
                  >
                    {/* Eyebrow Number & Badge */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="font-mono text-xs font-semibold text-[#E4521B] px-2.5 py-1 rounded-md bg-[#E4521B]/10 border border-[#E4521B]/20">
                        {pillar.number}
                      </span>
                      <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B]">
                        {pillar.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-[-0.03em] text-[#161413] mb-4">
                      {pillar.title}
                    </h2>

                    <p className="font-sans text-[14px] sm:text-[15px] text-[#554E48] leading-relaxed mb-4">
                      {pillar.descriptionPrimary}
                    </p>

                    <p className="font-sans text-[13px] sm:text-[14px] text-[#6B645E] leading-relaxed mb-6">
                      {pillar.descriptionSecondary}
                    </p>

                    {/* Key Tags / Features */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {pillar.tags.map((tag, tIdx) => (
                        <div
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E2D9] text-xs font-sans text-[#554E48] shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E4521B] shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={pillar.href}
                        className="btn-pill-coral inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(228,82,27,0.3)] cursor-pointer transition-all border-0"
                      >
                        <span>{pillar.btnLabel}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full font-sans font-medium text-xs sm:text-sm text-[#161413] bg-white hover:bg-[#F2EFEA] border border-[#E8E2D9] transition-colors shadow-2xs"
                      >
                        <span>Enquire About This</span>
                      </Link>
                    </div>
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

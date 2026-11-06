'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Layers } from 'lucide-react'
import { SlitHeading } from '@/components/ui'
import { CAPABILITIES_MATRIX } from '@/config/what-we-do'

export function CapabilitiesMatrix() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white text-[#161413] overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 backdrop-blur-md mb-4">
            <Layers className="w-3.5 h-3.5 text-[#E4521B]" />
            <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B]">
              CAPABILITIES MATRIX
            </span>
          </div>

          <SlitHeading
            align="center"
            lines={[
              'Engineered for Performance.',
              '<span style="color: var(--color-primary-orange)">Designed for Distinction.</span>',
            ]}
            showAccentLine={true}
            slit={0}
            textColor="#161413"
            dotColor="#E4521B"
            className="text-[clamp(24px,3.5vw,48px)] leading-[1.12] tracking-[-0.03em] font-sans font-bold mb-4"
          />

          <p className="font-sans text-[15px] sm:text-[16px] text-[#6B645E] max-w-2xl leading-relaxed">
            A granular breakdown of our cross-disciplinary competencies spanning enterprise web engineering, design systems, search dominance, and event technologies.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES_MATRIX.map((item, idx) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] hover:border-[#E4521B]/40 hover:shadow-[0_16px_36px_rgba(228,82,27,0.08)] transition-all duration-300"
              >
                <div>
                  {/* Header Row: Icon + Metric Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#161413] group-hover:bg-[#E4521B] group-hover:border-[#E4521B] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 text-[#E4521B] group-hover:text-white transition-colors" />
                    </div>

                    <div className="text-right">
                      <span className="font-sans font-bold text-sm text-[#E4521B]">
                        {item.metric}
                      </span>
                      <span className="block font-sans text-[10px] text-[#6B645E] uppercase tracking-wider">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Category Eyebrow */}
                  <span className="block font-sans font-semibold text-[11px] uppercase tracking-wider text-[#E4521B] mb-1.5">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-xl text-[#161413] tracking-[-0.02em] mb-3 group-hover:text-[#E4521B] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13.5px] text-[#6B645E] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-sans text-[#554E48]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E4521B]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#E8E2D9]">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#161413] group-hover:text-[#E4521B] transition-colors"
                  >
                    <span>Explore Discipline</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

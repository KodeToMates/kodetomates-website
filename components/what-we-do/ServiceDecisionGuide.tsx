'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, HelpCircle } from 'lucide-react'
import { SlitHeading } from '@/components/ui'
import { SERVICE_DECISION_ITEMS } from '@/config/what-we-do'

export function ServiceDecisionGuide() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white text-[#161413] overflow-hidden">
      <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 backdrop-blur-md mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#E4521B]" />
            <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B]">
              SERVICE SELECTOR
            </span>
          </div>

          <SlitHeading
            align="center"
            lines={[
              'Where Should You Begin?',
              '<span style="color: var(--color-primary-orange)">Match Your Exact Objective.</span>',
            ]}
            showAccentLine={true}
            slit={0}
            textColor="#161413"
            dotColor="#E4521B"
            className="text-[clamp(24px,3.5vw,48px)] leading-[1.12] tracking-[-0.03em] font-sans font-bold mb-4"
          />

          <p className="font-sans text-[15px] sm:text-[16px] text-[#6B645E] max-w-2xl leading-relaxed">
            Not sure whether you need a full re-platform, design overhaul, or targeted SEO sprint? Select the scenario that best describes your situation.
          </p>
        </div>

        {/* 4 Decision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_DECISION_ITEMS.map((item, idx) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative flex flex-col justify-between p-7 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] hover:border-[#E4521B]/40 hover:shadow-[0_16px_36px_rgba(228,82,27,0.08)] transition-all duration-300 group"
              >
                <div>
                  {/* Badge */}
                  <span className="inline-block font-sans font-semibold text-[10.5px] uppercase tracking-wider text-[#E4521B] px-2.5 py-1 rounded-md bg-[#E4521B]/10 border border-[#E4521B]/20 mb-4">
                    {item.badge}
                  </span>

                  {/* Question */}
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#161413] tracking-[-0.02em] mb-4 leading-snug">
                    &ldquo;{item.question}&rdquo;
                  </h3>

                  {/* Recommendation Tag */}
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8E2D9] mb-4 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-[#E4521B] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-[#6B645E] uppercase tracking-wider">
                        Recommended Service
                      </span>
                      <span className="block font-sans font-bold text-xs sm:text-sm text-[#161413]">
                        {item.recommendation}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[12.5px] text-[#6B645E] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.href}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-sans font-semibold text-xs text-white bg-[#141210] hover:bg-[#E4521B] transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Clock, GitCommit } from 'lucide-react'
import { SlitHeading } from '@/components/ui'
import { DELIVERY_PROCESS_STEPS } from '@/config/what-we-do'

export function DeliveryProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-white text-[#161413] overflow-hidden">
      <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 backdrop-blur-md mb-4">
            <GitCommit className="w-3.5 h-3.5 text-[#E4521B]" />
            <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B]">
              HOW WE DELIVER
            </span>
          </div>

          <SlitHeading
            align="center"
            lines={[
              'Structured Execution.',
              '<span style="color: var(--color-primary-orange)">Predictable Excellence.</span>',
            ]}
            showAccentLine={true}
            slit={0}
            textColor="#161413"
            dotColor="#E4521B"
            className="text-[clamp(24px,3.5vw,48px)] leading-[1.12] tracking-[-0.03em] font-sans font-bold mb-4"
          />

          <p className="font-sans text-[15px] sm:text-[16px] text-[#6B645E] max-w-2xl leading-relaxed">
            From initial technical reconnaissance to final zero-downtime cutover and iterative rank scaling, our delivery methodology removes friction and ensures measurable ROI.
          </p>
        </div>

        {/* Process Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {DELIVERY_PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] hover:border-[#E4521B]/40 hover:shadow-[0_12px_28px_rgba(228,82,27,0.06)] transition-all duration-300 group"
            >
              <div>
                {/* Step Badge & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-base font-bold text-[#E4521B] px-3 py-1 rounded-lg bg-[#E4521B]/10 border border-[#E4521B]/20">
                    {step.step}
                  </span>

                  <div className="inline-flex items-center gap-1 text-[11px] font-sans text-[#6B645E]">
                    <Clock className="w-3 h-3 text-[#E4521B]" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Phase Eyebrow */}
                <span className="block font-sans font-semibold text-[10px] uppercase tracking-wider text-[#E4521B] mb-2">
                  {step.phase}
                </span>

                {/* Title */}
                <h3 className="font-sans font-bold text-base sm:text-lg text-[#161413] tracking-[-0.02em] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[12.5px] text-[#6B645E] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-[#E8E2D9] space-y-1.5">
                <span className="block font-sans font-semibold text-[10px] uppercase tracking-wider text-[#6B645E] mb-2">
                  Deliverables
                </span>
                {step.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-1.5 text-[11.5px] font-sans text-[#554E48]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#E4521B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

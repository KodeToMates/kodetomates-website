'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Search,
  Cpu,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'
import { SlitHeading, BrandAccentLine } from '@/components/ui'

export function SeoWhatIsSeo() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="what-is-seo"
      className="relative w-full bg-white text-[#161413] py-20 sm:py-28 lg:py-32 selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="what-is-seo-heading"
    >
      {/* Ambient warm gradient background accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FF914D]/[0.05] via-[#E4521B]/[0.03] to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E4521B]/[0.04] to-transparent blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-start">
          {/* ========================================================
              LEFT COLUMN: CONTEXT & EDITORIAL CONTENT (SCROLLABLE)
             ======================================================== */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0EB] border border-[#F5D8C7] mb-5 w-fit select-none shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E4521B] animate-pulse" />
              <span className="font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B]">
                WHAT IS SEO
              </span>
            </div>

            {/* Main Headline with Home Slit Reveal Animation */}
            <SlitHeading
              id="what-is-seo-heading"
              align="left"
              lines={[
                'Helping the right people',
                '<span style="color: var(--color-primary-orange, #E4521B)">find your website</span> when it matters most.',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(28px,3.2vw,46px)] leading-[1.12] tracking-[-0.03em] mb-2"
            />

            {/* Signature Brand Accent Line */}
            <BrandAccentLine align="left" className="my-4" />

            {/* Lead Context Paragraph */}
            <p className="font-sans text-[16px] sm:text-[17.5px] leading-relaxed text-[#332E2A] font-medium mb-4">
              Search Engine Optimisation (SEO) is the craft of making your website more accessible, understandable, and valuable to both search engines and the visitors using them.
            </p>

            {/* Supporting Context Paragraph */}
            <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#6B645E] mb-6">
              Rather than relying on short-lived gimmicks or paid ads that disappear when budgets stop, sound SEO focuses on genuine digital foundations: fast mobile rendering, clear technical indexing, and high-intent content that answers what prospective clients are actively searching for.
            </p>

            {/* 3 Core Pillars */}
            <div className="space-y-3.5 pt-2 mb-8">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE8DF] transition-all duration-300 hover:border-[#E4521B]/40 hover:shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E2D8] text-[#E4521B] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[15.5px] text-[#161413] mb-1">
                      Technical Health &amp; Core Web Vitals
                    </h3>
                    <p className="font-sans text-xs sm:text-[13.5px] text-[#6B645E] leading-relaxed">
                      Ensuring Googlebot crawls and indexes your pages without blockers, with sub-second page performance across mobile and desktop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE8DF] transition-all duration-300 hover:border-[#E4521B]/40 hover:shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E2D8] text-[#E4521B] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[15.5px] text-[#161413] mb-1">
                      Search Intent &amp; Content Architecture
                    </h3>
                    <p className="font-sans text-xs sm:text-[13.5px] text-[#6B645E] leading-relaxed">
                      Structuring pages to match the exact commercial and informational queries your ideal audience searches for every day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE8DF] transition-all duration-300 hover:border-[#E4521B]/40 hover:shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E2D8] text-[#E4521B] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[15.5px] text-[#161413] mb-1">
                      Compound Authority &amp; Long-Term Growth
                    </h3>
                    <p className="font-sans text-xs sm:text-[13.5px] text-[#6B645E] leading-relaxed">
                      Building durable organic rankings that continue generating qualified inquiries month after month without recurring ad spend.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Principles Checklist */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE8DF] mb-8">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#8E867E] mb-3">
                Key Principles of Sound SEO
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px] font-sans text-[#403B36]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clean, semantic code structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Structured JSON-LD schema</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sub-second mobile performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clear, user-focused answers</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-4">
              <a
                href="#what-seo-includes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161413] hover:bg-[#E4521B] text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore What SEO Includes</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: LARGE STICKY CLEAN IMAGE (NO BADGES)
             ======================================================== */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 xl:top-32 w-full">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              {/* Ambient Backlight Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E4521B]/15 via-[#FF914D]/15 to-transparent rounded-[44px] blur-2xl -z-10 pointer-events-none" />

              {/* Large Pristine Image Container — NO BADGES, MAXIMUM SIZE */}
              <div className="relative w-full h-[480px] sm:h-[580px] lg:h-[640px] xl:h-[700px] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-neutral-200/90 bg-[#FAF8F5] shadow-[0_25px_65px_-15px_rgba(0,0,0,0.14)] group">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=85"
                  alt="Search Engine Optimization Analytics and Architecture Telemetry"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeoWhatIsSeo

'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { SlitHeading } from '@/components/ui'
import { Code2 } from 'lucide-react'

export function AboutCulture() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100 overflow-hidden selection:bg-[#E4521B]/20 selection:text-[#161413]">
      {/* Soft Ambient Radial Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.05)_0%,transparent_70%)] blur-3xl -z-10"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* ===================================================================
              LEFT SIDE: Context & Narrative
             =================================================================== */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow Badge (Home Page Style) */}


            {/* Main Heading with Signature Home Page Slit Reveal Animation */}
            <div className="mb-6 w-full">
              <SlitHeading
                id="about-culture-heading"
                align="left"
                lines={['More than code. <span style="color: var(--color-primary-orange)">A culture of building.</span>']}
                showAccentLine={true}
                slit={0.35}
                dotColor="#E4521B"
                textColor="#161413"
                className="text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-[-0.03em]"
              />
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-left max-w-2xl text-[#6B645E] font-sans text-[15px] sm:text-[16.5px] leading-relaxed">
              {/* Paragraph 1 */}
              <p>
                Technology keeps evolving. There is always something new to learn, a better way to solve a problem, or an idea worth exploring.
              </p>

              {/* Paragraph 2 */}
              <p>
                We created KodeToMates as a space where learning meets practice — where developers can exchange ideas, strengthen their skills, collaborate on projects, and understand what it takes to turn an idea into something people can actually use.
              </p>

              {/* Paragraph 3 */}
              <p>
                We don&apos;t see learning and building as separate activities. Every project is an opportunity to ask better questions, experiment thoughtfully, improve our craft, and create something valuable.
              </p>
            </div>

            {/* Paragraph 4: Takeaway Highlight Card */}
            <div className="mt-7 w-full max-w-2xl p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFF5F0] via-[#FAF8F5] to-white border border-[#F2E8DC] border-l-4 border-l-[#E4521B] shadow-xs">
              <p className="font-sans text-[15.5px] sm:text-[16.5px] font-semibold text-[#161413] leading-relaxed">
                Our goal is to grow as builders while helping businesses and communities make better use of technology.
              </p>
            </div>
          </motion.div>

          {/* ===================================================================
              RIGHT SIDE: Single Editorial Image Showcase
             =================================================================== */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Ambient Coral Glow Behind Frame */}
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#E4521B]/15 blur-3xl rounded-full -z-10 pointer-events-none"
            />

            {/* Image Container Card */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#EAE4DC] shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white group">
              <Image
                src="/Image-v1/Home_page/build-real-products.jpg"
                alt="KodeToMates Culture of Building and Engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Glassmorphic Badge in Corner */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center gap-3.5 select-none">
                <div className="w-10 h-10 rounded-xl bg-[#E4521B] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-sans font-bold text-sm text-[#161413] leading-tight">
                    Where Learning Meets Practice
                  </div>
                  <div className="font-sans text-xs text-[#6B645E] mt-0.5">
                    Turning ideas into software people actually use
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

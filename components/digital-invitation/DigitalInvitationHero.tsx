'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface HeadingItem {
  line1: string
  line2: string
}

const ROTATING_HEADINGS: HeadingItem[] = [
  {
    line1: 'Your Love Story,',
    line2: 'Beautifully Invited.',
  },
  {
    line1: 'Moments That Matter,',
    line2: 'Celebrated Together.',
  },
  {
    line1: 'Bespoke Invitations,',
    line2: 'Effortless RSVPs.',
  },
]

const SOCIAL_PROOF_AVATARS = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    alt: 'Guest 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    alt: 'Guest 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    alt: 'Guest 3',
  },
]

export function DigitalInvitationHero() {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance heading smoothly every 3 seconds matching user request
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_HEADINGS.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden bg-white">
      {/* Soft Ambient Warm Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.07)_0%,rgba(255,145,77,0.04)_45%,transparent_75%)] blur-3xl -z-10"
      />

      <div className="container mx-auto px-5 sm:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Copy (Strictly Plus Jakarta Sans)
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">

            {/* Main Headline (Home Page Hero font style & 3-second blur-lift rotation in exactly two lines) */}
            <div className="w-full min-h-[120px] sm:min-h-[145px] lg:min-h-[165px] flex items-center mb-5 sm:mb-6 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={currentIndex}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 18, filter: 'blur(6px)' }
                  }
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -16, filter: 'blur(6px)' }
                  }
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full text-[#161413] font-sans font-bold text-[clamp(2.15rem,3.4vw,3.75rem)] leading-[1.12] tracking-[-0.035em]"
                >
                  <span className="block text-[#161413] whitespace-normal sm:whitespace-nowrap">
                    {ROTATING_HEADINGS[currentIndex].line1}
                  </span>
                  <span className="block text-[#161413] mt-0.5 sm:mt-1 whitespace-normal sm:whitespace-nowrap">
                    {ROTATING_HEADINGS[currentIndex].line2}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-[17px] text-[#6B645E] leading-relaxed max-w-lg mb-8 sm:mb-10 text-balance"
            >
              Create stunning digital wedding invitations with RSVP, event details, and a personal touch your guests will remember.
            </motion.p>

            {/* Two Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 sm:mb-11"
            >
              {/* Primary Coral Button */}
              <Link
                href="/contact"
                className="btn-pill-coral inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full font-sans font-semibold text-sm sm:text-[15px] shadow-[0_6px_24px_rgba(228,82,27,0.35)] transition-all cursor-pointer border-0"
              >
                <span>Explore Invitations</span>
              </Link>

              {/* Secondary Clean Outlined Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full font-sans font-semibold text-sm sm:text-[15px] text-[#161413] bg-white/80 hover:bg-white border border-[#161413]/20 hover:border-[#161413] shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Create Your Invite</span>
              </Link>
            </motion.div>

            {/* Social Proof Row with Stacked Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 select-none"
            >
              {/* Overlapping Avatar Stack */}
              <div className="flex -space-x-2.5 overflow-hidden py-0.5">
                {SOCIAL_PROOF_AVATARS.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden shrink-0 shadow-sm"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Vertical divider */}
              <div className="w-px h-5 bg-[#DDD6CD]" aria-hidden />

              {/* Tagline */}
              <span className="font-sans text-xs sm:text-[13.5px] font-medium text-[#7A726B]">
                Made for moments that matter
              </span>
            </motion.div>
          </div>


          {/* ========================================================
              RIGHT COLUMN: High-Fidelity Showcase (Plain Website Floor)
             ======================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[680px] sm:max-w-[760px] lg:max-w-[820px] xl:max-w-[900px] lg:-mr-6 xl:-mr-12"
            >


              {/* Direct Transparent Cutout Mockup with Smooth 8s Rotation Animation */}
              <motion.div
                animate={{
                  rotate: [0, 2.4, 0, -2.4, 0],
                  y: [0, -7, 0, -7, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: 'center center' }}
                className="relative w-full flex items-center justify-center select-none"
              >
                <Image
                  src="/Image-v1/digi_invi/Indian Wedding Invitation Mockup-Photoroom.png"
                  alt="KodeToMates Digital Wedding Invitation Mockup"
                  width={1400}
                  height={1400}
                  className="w-full h-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.16)] drop-shadow-[0_48px_60px_rgba(0,0,0,0.14)] drop-shadow-[0_16px_30px_rgba(228,82,27,0.16)] transform hover:scale-[1.015] transition-transform duration-500"
                  priority
                />
              </motion.div>

              {/* Realistic Ground Contact Shadows */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 w-[85%] h-7 sm:h-10 bg-black/25 blur-xl rounded-[100%]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-3 sm:h-5 bg-black/35 blur-md rounded-[100%]"
              />

              {/* Soft Ambient Warm Glow on the Floor */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-32 bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.16)_0%,rgba(0,0,0,0.05)_40%,transparent_75%)] blur-2xl -z-10"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

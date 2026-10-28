'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SlitHeading } from '@/components/ui'
import {
  Smartphone,
  Laptop,
  Check,
  MapPin,
  Music,
  Share2,
  ArrowRight,
  Zap,
} from 'lucide-react'

export function EveryScreenShowcaseSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-16 bg-white border-t border-gray-100 overflow-hidden">
      {/* Soft Ambient Radial Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.06)_0%,rgba(255,145,77,0.03)_50%,transparent_75%)] blur-3xl -z-10"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ===================================================================
              LEFT COLUMN: Context
             =================================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            {/* Eyebrow Badge (Plus Jakarta Sans, uppercase coral) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 mb-3.5">
              <Smartphone className="w-3.5 h-3.5 text-[#E4521B]" />
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B]">
                ONE LINK · EVERY SCREEN
              </span>
            </div>

            {/* Main Section Heading with Signature Home Page Slit Reveal Animation */}
            <SlitHeading
              id="every-screen-heading"
              align="left"
              lines={['Looks beautiful on <span style="color: var(--color-primary-orange)">every screen.</span>']}
              showAccentLine={true}
              slit={0.35}
              dotColor="#E4521B"
              textColor="#161413"
              className="text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-[-0.03em] mb-4"
            />

            {/* Description Body Copy */}
            <p className="font-sans text-[15.5px] sm:text-[17px] text-[#6B645E] leading-relaxed mb-8 max-w-xl">
              Your guests won’t download an app or pinch-to-zoom into clunky PDFs. One clean web link opens instantly with buttery-smooth animations, whether they’re on an iPhone, Android, iPad, or desktop browser.
            </p>

            {/* 3 Core Responsiveness Pillars */}
            <div className="space-y-4 mb-9 max-w-xl">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#E8E2D9]/70 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center text-[#E4521B] shrink-0 mt-0.5">
                  <Smartphone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-[#161413] mb-1">
                    Mobile-First Perfection
                  </h3>
                  <p className="font-sans text-xs text-[#6B645E] leading-relaxed">
                    Designed specifically for WhatsApp sharing. One tap takes guests directly into the invite with frictionless 1-tap RSVPs and navigation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#E8E2D9]/70 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center text-[#E4521B] shrink-0 mt-0.5">
                  <Laptop className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-[#161413] mb-1">
                    Majestic Laptop & Tablet Experience
                  </h3>
                  <p className="font-sans text-xs text-[#6B645E] leading-relaxed">
                    Expands into a high-resolution cinematic showcase with full ceremony timelines, couple photo galleries, and background music.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#E8E2D9]/70 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center text-[#E4521B] shrink-0 mt-0.5">
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-[#161413] mb-1">
                    Fast Loading Under 1.2s
                  </h3>
                  <p className="font-sans text-xs text-[#6B645E] leading-relaxed">
                    Ultra-optimized code ensures instant opening even on spotty cellular reception during wedding travels.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="btn-pill-coral inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans font-semibold text-sm shadow-[0_6px_24px_rgba(228,82,27,0.35)] transition-all cursor-pointer border-0"
              >
                <span>Create Multi-Screen Invite</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-sans font-semibold text-sm text-[#161413] bg-white hover:bg-gray-50 border border-[#161413]/20 hover:border-[#161413] transition-all cursor-pointer shadow-xs"
              >
                <span>Preview Sample on Phone</span>
              </Link>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: Layered Multi-Device Animated Showcase (Laptop, Tablet, Mobile)
             =================================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] xl:min-h-[580px] w-full">
            {/* Ambient Shadow Ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-12 bottom-6 h-12 bg-black/15 blur-2xl rounded-[100%]"
            />

            {/* -----------------------------------------------------------------
                DEVICE 1: LAPTOP VIEW (Center-Rear Stage)
               ----------------------------------------------------------------- */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full max-w-[440px] sm:max-w-[500px] xl:max-w-[560px] z-10 transition-all duration-500"
            >
              {/* Laptop Bezel & Screen */}
              <div className="rounded-t-2xl bg-[#1D1B1A] p-2.5 sm:p-3 pb-0 shadow-[0_24px_50px_rgba(0,0,0,0.22)] border border-[#3D3733]">
                {/* Laptop Camera Notch */}
                <div className="flex items-center justify-center mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#111010] border border-[#333]" />
                </div>

                {/* Laptop Display Content */}
                <div className="aspect-[16/10] bg-white rounded-t-lg overflow-hidden flex flex-col border border-[#E8E2D9]">
                  {/* Miniature Browser Bar */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F8F7F4] border-b border-[#EAE4DC] shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 max-w-[200px] mx-auto bg-white rounded-full px-2.5 py-0.5 text-[9px] font-sans text-[#7A726B] text-center border border-[#E0D8CE] truncate">
                      kodetomates.com/invitation/arjun-diya
                    </div>
                  </div>

                  {/* Inside Laptop Content Preview */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-sans font-bold text-[11px] sm:text-xs text-[#E4521B] tracking-wider uppercase">
                          The Wedding Celebration
                        </span>
                        <span className="text-[10px] font-sans font-semibold text-[#161413] bg-white px-2 py-0.5 rounded-full border border-[#E8E2D9]">
                          Nov 28, 2026
                        </span>
                      </div>
                      <h4 className="font-sans font-bold text-base sm:text-lg text-[#161413] tracking-tight leading-tight mb-1">
                        Arjun & Diya
                      </h4>
                      <p className="font-sans text-[10px] sm:text-[11px] text-[#6B645E]">
                        Grand Palace Hall, Chennai • 9:30 AM Muhurtham
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E8E2D9]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#E4521B] flex items-center justify-center text-white">
                          <Music className="w-2.5 h-2.5" />
                        </div>
                        <span className="font-sans text-[9.5px] font-medium text-[#161413]">
                          Playing Shehnai Beats
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#E4521B] text-white font-sans text-[9.5px] font-semibold">
                          RSVP Confirmed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base & Hinge */}
              <div className="h-3.5 bg-gradient-to-b from-[#C4BDB7] to-[#A8A19B] rounded-b-xl shadow-lg relative flex justify-center">
                <div className="w-16 h-1.5 bg-[#8C857F] rounded-b-md" />
              </div>
            </motion.div>

            {/* -----------------------------------------------------------------
                DEVICE 2: TABLET VIEW (Overlapping Left-Front)
               ----------------------------------------------------------------- */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-3 sm:-left-6 bottom-4 sm:bottom-6 w-[200px] sm:w-[250px] xl:w-[270px] z-20 transition-all duration-500"
            >
              <div className="rounded-[22px] bg-[#1D1B1A] p-2 sm:p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.25)] border border-[#3D3733]">
                <div className="aspect-[3/4] bg-white rounded-[14px] p-3.5 flex flex-col justify-between border border-[#E8E2D9] overflow-hidden">
                  <div>
                    <div className="w-6 h-6 rounded-lg bg-[#E4521B]/10 flex items-center justify-center text-[#E4521B] mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans font-bold text-[10px] text-[#E4521B] uppercase tracking-wider block mb-0.5">
                      Venue Details
                    </span>
                    <h5 className="font-sans font-bold text-xs text-[#161413] leading-snug mb-1">
                      Grand Palace Hall
                    </h5>
                    <p className="font-sans text-[9px] text-[#6B645E] leading-relaxed">
                      1-Tap GPS directions synced with Google Maps & Apple Maps.
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-between">
                    <span className="font-sans text-[8.5px] font-semibold text-[#161413]">
                      Open in Uber / Ola
                    </span>
                    <Share2 className="w-3 h-3 text-[#E4521B]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* -----------------------------------------------------------------
                DEVICE 3: MOBILE SMARTPHONE VIEW (Crisp Foreground Right)
               ----------------------------------------------------------------- */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [1, -1, 1],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-2 sm:right-2 bottom-0 sm:-bottom-4 w-[160px] sm:w-[190px] xl:w-[210px] z-30 transition-all duration-500"
            >
              <div className="rounded-[34px] bg-[#1D1B1A] p-2 sm:p-2.5 shadow-[0_24px_50px_rgba(0,0,0,0.3)] border-2 border-[#3D3733]">
                {/* Dynamic Island Screen Area */}
                <div className="aspect-[9/19] bg-white rounded-[26px] p-3 flex flex-col justify-between border border-[#E8E2D9] overflow-hidden relative">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#111] rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f]" />
                  </div>

                  {/* Mobile Screen Header */}
                  <div className="pt-4 text-center">
                    <span className="text-[8.5px] font-sans font-semibold text-[#E4521B] uppercase tracking-wider block">
                      Digital Invitation
                    </span>
                    <h5 className="font-sans font-bold text-xs text-[#161413] leading-snug">
                      Arjun & Diya
                    </h5>
                  </div>

                  {/* Mobile RSVP Card */}
                  <div className="space-y-1.5 my-auto">
                    <div className="p-2 rounded-xl bg-white border border-[#E8E2D9] text-center shadow-xs">
                      <span className="text-[7.5px] font-sans text-[#7A726B] block">
                        Will you attend?
                      </span>
                      <span className="text-[9px] font-sans font-bold text-[#161413]">
                        184 Guests Attending
                      </span>
                    </div>
                  </div>

                  {/* Sticky Mobile RSVP Action Button */}
                  <div className="w-full">
                    <div className="w-full py-1.5 rounded-full bg-[#E4521B] text-white text-center font-sans font-semibold text-[9px] shadow-sm flex items-center justify-center gap-1">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                      <span>1-Tap RSVP</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

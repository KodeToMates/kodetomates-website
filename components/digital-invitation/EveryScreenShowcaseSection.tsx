'use client'

import React, { useState } from 'react'
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
  Volume2,
  VolumeX,
  Sparkles,
  Heart,
  Navigation,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function EveryScreenShowcaseSection() {
  // Interactive Multi-Device Digital Invitation States
  const [mobileRsvp, setMobileRsvp] = useState<'confirmed' | 'declined'>('confirmed')
  const [mobileGuestCount, setMobileGuestCount] = useState<number>(184)
  const [isMobileMuted, setIsMobileMuted] = useState<boolean>(false)

  const [tabletTab, setTabletTab] = useState<'venue' | 'schedule'>('venue')
  const [directionsStatus, setDirectionsStatus] = useState<string>('Open in Google Maps')

  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(true)
  const [laptopView, setLaptopView] = useState<'invite' | 'schedule'>('invite')

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
                    Majestic Laptop &amp; Tablet Experience
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
              className="w-full max-w-[440px] sm:max-w-[500px] xl:max-w-[560px] z-10 transition-all duration-500 select-none"
            >
              {/* Laptop Bezel & Screen */}
              <div className="rounded-t-2xl bg-[#1D1B1A] p-2.5 sm:p-3 pb-0 shadow-[0_24px_50px_rgba(0,0,0,0.25)] border border-[#3D3733]">
                {/* Laptop Camera Notch */}
                <div className="flex items-center justify-center mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#111010] border border-[#333]" />
                </div>

                {/* Laptop Display Content */}
                <div className="aspect-[16/10] bg-[#FAF8F5] rounded-t-lg overflow-hidden flex flex-col border border-[#E8E2D9]">
                  {/* Miniature Browser Bar */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#161413] text-white border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 max-w-[220px] mx-auto bg-white/10 rounded-full px-2.5 py-0.5 text-[9px] font-mono text-white/80 text-center truncate border border-white/10">
                      🔒 kodetomates.com/invitation/arjun-diya
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-sans text-[#E4521B] font-bold">
                      <Sparkles className="w-2.5 h-2.5 text-[#E4521B]" />
                      <span className="hidden sm:inline">LIVE</span>
                    </div>
                  </div>

                  {/* Inside Laptop Content: Brand Orange Digital Invitation Hero */}
                  <div className="flex-1 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFF5F0] via-white to-[#FAF8F5] p-3 sm:p-4">
                    {/* Top Decorative Banner in Brand Orange */}
                    <div className="rounded-xl bg-gradient-to-r from-[#E4521B] via-[#FF7A30] to-[#C9380B] text-white p-2.5 sm:p-3 shadow-md relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-sans font-semibold tracking-wider uppercase text-white/90 mb-1">
                        <span className="flex items-center gap-1">
                          <Heart className="w-2.5 h-2.5 fill-white text-white" />
                          <span>The Wedding Celebration</span>
                        </span>
                        <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                          Nov 28, 2026
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-sans font-extrabold text-sm sm:text-lg tracking-tight leading-tight text-white drop-shadow-xs">
                            Arjun &amp; Diya
                          </h4>
                          <p className="font-sans text-[8.5px] sm:text-[10px] text-white/90 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-2.5 h-2.5 shrink-0" />
                            <span>Grand Palace Hall, Chennai • 09:30 AM Muhurtham</span>
                          </p>
                        </div>
                        {/* Interactive View Toggle */}
                        <div className="flex items-center gap-1 bg-black/20 p-0.5 rounded-lg text-[8px] font-sans">
                          <button
                            type="button"
                            onClick={() => setLaptopView('invite')}
                            className={cn(
                              'px-2 py-0.5 rounded transition-all cursor-pointer',
                              laptopView === 'invite' ? 'bg-white text-[#E4521B] font-bold shadow-2xs' : 'text-white/80 hover:text-white'
                            )}
                          >
                            Invite
                          </button>
                          <button
                            type="button"
                            onClick={() => setLaptopView('schedule')}
                            className={cn(
                              'px-2 py-0.5 rounded transition-all cursor-pointer',
                              laptopView === 'schedule' ? 'bg-white text-[#E4521B] font-bold shadow-2xs' : 'text-white/80 hover:text-white'
                            )}
                          >
                            Timeline
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Middle Content: Live Countdown or Schedule */}
                    {laptopView === 'invite' ? (
                      <div className="grid grid-cols-4 gap-1.5 my-auto py-1">
                        {[
                          { val: '124', label: 'Days' },
                          { val: '14', label: 'Hours' },
                          { val: '28', label: 'Mins' },
                          { val: '45', label: 'Secs' },
                        ].map((c, i) => (
                          <div key={i} className="p-1 sm:p-1.5 rounded-lg bg-white border border-[#E4521B]/20 text-center shadow-2xs">
                            <span className="font-mono font-bold text-xs sm:text-sm text-[#E4521B] block leading-none">
                              {c.val}
                            </span>
                            <span className="font-sans text-[7.5px] sm:text-[8.5px] text-[#7A726B] uppercase tracking-wider block mt-0.5">
                              {c.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-1.5 my-auto py-1 text-[8px] font-sans">
                        <div className="p-1 rounded-lg bg-white border border-[#E4521B]/20 text-center">
                          <span className="font-bold text-[#E4521B] block">09:30 AM</span>
                          <span className="text-[#161413]">Muhurtham</span>
                        </div>
                        <div className="p-1 rounded-lg bg-white border border-[#E4521B]/20 text-center">
                          <span className="font-bold text-[#E4521B] block">12:30 PM</span>
                          <span className="text-[#161413]">Grand Feast</span>
                        </div>
                        <div className="p-1 rounded-lg bg-white border border-[#E4521B]/20 text-center">
                          <span className="font-bold text-[#E4521B] block">06:30 PM</span>
                          <span className="text-[#161413]">Reception</span>
                        </div>
                      </div>
                    )}

                    {/* Bottom Interactive Music & RSVP Bar */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#E8E2D9]">
                      <button
                        type="button"
                        onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white hover:bg-orange-50 border border-[#E4521B]/30 transition-all cursor-pointer group"
                        title="Click to toggle music"
                      >
                        <div className={cn(
                          'w-4 h-4 rounded-full flex items-center justify-center text-white transition-colors',
                          isMusicPlaying ? 'bg-[#E4521B]' : 'bg-[#7A726B]'
                        )}>
                          <Music className="w-2 h-2" />
                        </div>
                        <div className="flex items-center gap-0.5 h-2">
                          <span className={cn('w-0.5 bg-[#E4521B] rounded-full', isMusicPlaying ? 'h-2 animate-pulse' : 'h-1')} />
                          <span className={cn('w-0.5 bg-[#E4521B] rounded-full', isMusicPlaying ? 'h-3 animate-pulse delay-75' : 'h-1')} />
                          <span className={cn('w-0.5 bg-[#E4521B] rounded-full', isMusicPlaying ? 'h-2 animate-pulse delay-150' : 'h-1')} />
                        </div>
                        <span className="font-sans text-[8.5px] sm:text-[9.5px] font-semibold text-[#161413]">
                          {isMusicPlaying ? 'Shehnai Fusion' : 'Music Paused'}
                        </span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-full bg-[#E4521B] text-white font-sans text-[8.5px] sm:text-[9.5px] font-bold shadow-xs flex items-center gap-1">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                          <span>184 Guests Attending</span>
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
              className="absolute -left-3 sm:-left-6 bottom-4 sm:bottom-6 w-[200px] sm:w-[250px] xl:w-[270px] z-20 transition-all duration-500 select-none"
            >
              <div className="rounded-[22px] bg-[#1D1B1A] p-2 sm:p-2.5 shadow-[0_22px_48px_rgba(0,0,0,0.3)] border border-[#3D3733]">
                <div className="aspect-[3/4] bg-[#FAF8F5] rounded-[14px] p-3 sm:p-3.5 flex flex-col justify-between border border-[#E8E2D9] overflow-hidden">
                  {/* Tablet Header in Brand Orange */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-lg bg-[#E4521B] flex items-center justify-center text-white shadow-2xs">
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-sans font-bold text-[9px] sm:text-[10px] text-[#E4521B] uppercase tracking-wider block">
                            Event Guide
                          </span>
                        </div>
                      </div>
                      {/* Interactive Tab Switcher */}
                      <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#E8E2D9] text-[8px] font-sans">
                        <button
                          type="button"
                          onClick={() => setTabletTab('venue')}
                          className={cn(
                            'px-1.5 py-0.5 rounded transition-all cursor-pointer font-semibold',
                            tabletTab === 'venue' ? 'bg-[#E4521B] text-white shadow-2xs' : 'text-[#7A726B] hover:text-[#161413]'
                          )}
                        >
                          Venue
                        </button>
                        <button
                          type="button"
                          onClick={() => setTabletTab('schedule')}
                          className={cn(
                            'px-1.5 py-0.5 rounded transition-all cursor-pointer font-semibold',
                            tabletTab === 'schedule' ? 'bg-[#E4521B] text-white shadow-2xs' : 'text-[#7A726B] hover:text-[#161413]'
                          )}
                        >
                          Schedule
                        </button>
                      </div>
                    </div>

                    {tabletTab === 'venue' ? (
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#E4521B]/30 shadow-xs mt-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-sans font-bold text-xs text-[#161413] leading-snug">
                            Grand Palace Hall
                          </h5>
                          <span className="text-[8px] font-mono text-[#059669] bg-[#059669]/10 px-1.5 py-0.2 rounded font-bold">
                            Live GPS
                          </span>
                        </div>
                        <p className="font-sans text-[8.5px] sm:text-[9.5px] text-[#6B645E] leading-relaxed mb-2">
                          Anna Salai, Chennai • 2.4 km from Central • Valet parking available.
                        </p>
                        <div className="w-full py-1.5 px-2 rounded-lg bg-gradient-to-r from-[#E4521B] to-[#FF914D] text-white font-sans text-[8.5px] font-bold flex items-center justify-between shadow-2xs">
                          <span className="flex items-center gap-1">
                            <Navigation className="w-2.5 h-2.5" />
                            <span>8 Mins Drive Time</span>
                          </span>
                          <span className="bg-white/20 px-1.5 py-0.5 rounded text-[7.5px]">Open Maps</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1.5 p-1 rounded-xl bg-white border border-[#E4521B]/20 shadow-xs mt-1 text-[8.5px] font-sans">
                        <div className="flex items-center justify-between p-1 rounded bg-[#FAF8F5]">
                          <span className="font-bold text-[#E4521B]">09:30 AM</span>
                          <span className="font-semibold text-[#161413]">Muhurtham Kanyadaan</span>
                        </div>
                        <div className="flex items-center justify-between p-1 rounded bg-[#FAF8F5]">
                          <span className="font-bold text-[#E4521B]">12:30 PM</span>
                          <span className="font-semibold text-[#161413]">Traditional South Feast</span>
                        </div>
                        <div className="flex items-center justify-between p-1 rounded bg-[#FAF8F5]">
                          <span className="font-bold text-[#E4521B]">06:30 PM</span>
                          <span className="font-semibold text-[#161413]">Musical Gala &amp; Dinner</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Interactive 1-Click Action */}
                  <button
                    type="button"
                    onClick={() => {
                      setDirectionsStatus('Directions Loaded! ✓')
                      setTimeout(() => setDirectionsStatus('Open in Google Maps'), 1500)
                    }}
                    className="p-2 rounded-xl bg-white hover:bg-orange-50 border border-[#E4521B]/30 flex items-center justify-between transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <span className="font-sans text-[8.5px] sm:text-[9px] font-bold text-[#161413]">
                      {directionsStatus}
                    </span>
                    <Share2 className="w-3 h-3 text-[#E4521B]" />
                  </button>
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
              className="absolute -right-2 sm:right-2 bottom-0 sm:-bottom-4 w-[160px] sm:w-[190px] xl:w-[210px] z-30 transition-all duration-500 select-none"
            >
              <div className="rounded-[34px] bg-[#1D1B1A] p-2 sm:p-2.5 shadow-[0_26px_55px_rgba(0,0,0,0.35)] border-2 border-[#3D3733]">
                {/* Dynamic Island Screen Area */}
                <div className="aspect-[9/19] bg-[#FAF8F5] rounded-[26px] p-2.5 sm:p-3 flex flex-col justify-between border border-[#E8E2D9] overflow-hidden relative">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#111] rounded-full flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f]" />
                  </div>

                  {/* Mobile Screen Header in Rich Brand Orange */}
                  <div className="pt-3.5 text-center">
                    <div className="rounded-xl bg-gradient-to-r from-[#E4521B] via-[#FF7A30] to-[#C9380B] text-white p-2 shadow-xs relative overflow-hidden">
                      <div className="flex items-center justify-between text-[7.5px] font-sans font-semibold uppercase tracking-wider text-white/90">
                        <span>Digital Invite</span>
                        <button
                          type="button"
                          onClick={() => setIsMobileMuted(!isMobileMuted)}
                          className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
                        >
                          {isMobileMuted ? <VolumeX className="w-2 h-2" /> : <Volume2 className="w-2 h-2" />}
                        </button>
                      </div>
                      <h5 className="font-sans font-bold text-xs sm:text-sm text-white leading-tight mt-0.5">
                        Arjun &amp; Diya
                      </h5>
                      <span className="text-[7.5px] font-sans text-white/80 block mt-0.5">
                        Nov 28, 2026 • Chennai
                      </span>
                    </div>
                  </div>

                  {/* Interactive Mobile RSVP Card */}
                  <div className="my-auto py-1 space-y-1.5">
                    <div className="p-2 rounded-xl bg-white border border-[#E4521B]/30 text-center shadow-xs">
                      <span className="text-[7.5px] font-sans text-[#7A726B] block">
                        Will you attend?
                      </span>
                      <span className="text-[9.5px] font-sans font-extrabold text-[#E4521B] block">
                        {mobileGuestCount} Guests Attending
                      </span>

                      {/* Interactive Attending vs Regret Choice */}
                      <div className="grid grid-cols-2 gap-1 mt-1.5 text-[8px] font-sans font-bold">
                        <button
                          type="button"
                          onClick={() => {
                            if (mobileRsvp !== 'confirmed') {
                              setMobileRsvp('confirmed')
                              setMobileGuestCount((prev) => prev + 1)
                            }
                          }}
                          className={cn(
                            'py-1 rounded-md transition-all cursor-pointer flex items-center justify-center gap-0.5',
                            mobileRsvp === 'confirmed'
                              ? 'bg-[#E4521B] text-white shadow-2xs font-bold'
                              : 'bg-gray-100 text-[#7A726B] hover:bg-gray-200'
                          )}
                        >
                          <Check className="w-2 h-2 stroke-[3]" />
                          <span>Yes</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (mobileRsvp === 'confirmed') {
                              setMobileRsvp('declined')
                              setMobileGuestCount((prev) => Math.max(0, prev - 1))
                            }
                          }}
                          className={cn(
                            'py-1 rounded-md transition-all cursor-pointer flex items-center justify-center gap-0.5',
                            mobileRsvp === 'declined'
                              ? 'bg-[#161413] text-white shadow-2xs font-bold'
                              : 'bg-gray-100 text-[#7A726B] hover:bg-gray-200'
                          )}
                        >
                          <span>Regret</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Sticky RSVP Action Button */}
                  <div className="w-full">
                    <button
                      type="button"
                      onClick={() => {
                        if (mobileRsvp !== 'confirmed') {
                          setMobileRsvp('confirmed')
                          setMobileGuestCount((prev) => prev + 1)
                        } else {
                          setMobileRsvp('declined')
                          setMobileGuestCount((prev) => Math.max(0, prev - 1))
                        }
                      }}
                      className={cn(
                        'w-full py-1.5 sm:py-2 rounded-full text-center font-sans font-bold text-[8.5px] sm:text-[9.5px] transition-all cursor-pointer flex items-center justify-center gap-1 shadow-md active:scale-95',
                        mobileRsvp === 'confirmed'
                          ? 'bg-gradient-to-r from-[#E4521B] to-[#FF914D] text-white shadow-[#E4521B]/30'
                          : 'bg-[#161413] text-white'
                      )}
                    >
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                      <span>{mobileRsvp === 'confirmed' ? '✓ RSVP Confirmed!' : 'Tap to RSVP'}</span>
                    </button>
                    <span className="font-sans text-[7px] text-[#7A726B] text-center block mt-1">
                      {mobileRsvp === 'confirmed' ? 'Pass #KT-829 Active' : 'Instant WhatsApp confirmation'}
                    </span>
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


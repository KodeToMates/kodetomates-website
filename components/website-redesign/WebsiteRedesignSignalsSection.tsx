'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FlowArt, FlowSection } from '@/components/website-dev/StoryScroll'
import { ArchitecturalIndexBar } from '@/components/website-dev/ArchitecturalIndexBar'
import { BrandAccentLine, SlitHeading } from '@/components/ui'
import {
  Palette,
  ShieldCheck,
  Navigation,
  MousePointerClick,
  Smartphone,
  Zap,
  FileText,
  Target,
  TrendingUp,
  Layers,
  ArrowUpRight,
} from 'lucide-react'

export function WebsiteRedesignSignalsSection() {
  return (
    <section
      id="when-redesign-helps"
      className="relative w-full bg-[#0C0B0A] text-white selection:bg-[#E4521B]/30 selection:text-white"
    >
      {/* FlowArt Interactive Story Scroll with Pinned GSAP Rotating Cards */}
      <FlowArt aria-label="When a Redesign May Help">

        {/* ========================================================
            CARD 1: THE DESIGN FEELS DATED (PURE WHITE BRAND STYLE)
           ======================================================== */}
        <FlowSection
          aria-label="01 The Design Feels Dated"
          className="bg-white text-[#161413] border-t border-[#E5E0D8] shadow-sm selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="01"
            total="05"
            title="Visual Style"
            subtitle="When Design Feels Dated"
            theme="light"
            className="pt-2 sm:pt-4"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="signal-dated-heading"
              align="left"
              lines={[
                'The Design Feels Dated.',
                '<span style="color: var(--color-primary-orange, #E4521B)">Visual Style No Longer Matches Your Quality.</span>',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Home Page Down Line with Dot */}
            <BrandAccentLine align="left" className="my-3.5" />

            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-[#554E48] leading-[1.68] font-normal">
              First impressions form in milliseconds. Outdated fonts, boxy styling, and legacy visual
              tokens quietly erode client trust before your value proposition is ever read. A modern
              redesign elevates your brand into an authoritative, forward-thinking industry leader.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-[#E5E0D8] w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Left Text Details + Right Showcase Image */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 6 Cols: Key Symptoms & Solution */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#E4521B]">
                Key Symptoms & Impact
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F9F7F3] border border-[#E5E0D8] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#E4521B]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-[#161413] tracking-[-0.01em]">
                      Tired Color & Typography Systems
                    </h4>
                    <p className="font-sans text-[13px] text-[#736B63] leading-relaxed mt-0.5">
                      Visual styles and formatting that look stuck in previous eras, falling behind modern design standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F9F7F3] border border-[#E5E0D8] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#E4521B]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-[#161413] tracking-[-0.01em]">
                      Credibility & Trust Discount
                    </h4>
                    <p className="font-sans text-[13px] text-[#736B63] leading-relaxed mt-0.5">
                      Prospects compare your website with competitors and hesitate when your digital presence appears neglected.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161413] hover:bg-[#E4521B] text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm"
                >
                  <span>Modernize Your Visual Style</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: Big Image Showcase */}
            <div className="lg:col-span-6 min-w-0">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-xl group">
                <Image
                  src="/Image-v1/dev_page/landing-website.jpg"
                  alt="Modern Visual Redesign Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md font-sans font-semibold text-[10px] tracking-wider uppercase bg-black/75 backdrop-blur-md text-white border border-white/20">
                    Visual Transformation
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                  <span className="font-sans font-bold text-sm sm:text-base drop-shadow-sm">
                    Bespoke UI/UX Design System
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#E4521B] font-semibold text-white">
                    +160% Conversion Lift
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            CARD 2: VISITORS STRUGGLE TO NAVIGATE (BRAND ORANGE)
           ======================================================== */}
        <FlowSection
          aria-label="02 Visitors Struggle to Navigate"
          className="bg-[#E4521B] text-white border-t border-white/20 shadow-2xl selection:bg-white/25 selection:text-white"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="02"
            total="05"
            title="UX Architecture"
            subtitle="Frictionless Navigation"
            theme="orange"
            className="pt-2 sm:pt-4"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="signal-navigation-heading"
              align="left"
              lines={[
                'Struggle to Navigate.',
                '<span style="color: #FFE3D4">Important Pages & Services Are Lost in Clutter.</span>',
              ]}
              slit={0}
              textColor="#FFFFFF"
              dotColor="#FFFFFF"
              className="text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.06] tracking-[-0.03em]"
            />

            <BrandAccentLine align="left" theme="white" className="my-3.5" />

            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-white/90 leading-[1.68] font-normal">
              When prospective buyers cannot locate pricing, case studies, or contact channels within
              seconds, they bounce. We re-engineer information architecture into clean, natural user
              journeys that convert casual browsers into booked meetings.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-white/20 w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Left Text Details + Right Showcase Image */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 6 Cols */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#FFE3D4]">
                Core Friction Points
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0C0B0A]/35 backdrop-blur-md border border-white/15 hover:border-white/35 transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      Buried Critical Pages & Contacts
                    </h4>
                    <p className="font-sans text-[13px] text-white/80 leading-relaxed mt-0.5">
                      Complex multi-level menus and disorganized navigation bars cause users to lose their orientation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0C0B0A]/35 backdrop-blur-md border border-white/15 hover:border-white/35 transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white">
                    <MousePointerClick className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      High Friction & Drop-Off Rates
                    </h4>
                    <p className="font-sans text-[13px] text-white/80 leading-relaxed mt-0.5">
                      Lack of contextual in-page linking forces visitors to guess where to find related case studies and solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#161413] text-[#E4521B] hover:text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md"
                >
                  <span>Rebuild Your User Journey</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols */}
            <div className="lg:col-span-6 min-w-0">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <Image
                  src="/Image-v1/dev_page/Clear-Visual-Hierarchy.jpg"
                  alt="Clear Visual Hierarchy and Navigation Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md font-sans font-semibold text-[10px] tracking-wider uppercase bg-black/75 backdrop-blur-md text-white border border-white/20">
                    Frictionless UX
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                  <span className="font-sans font-bold text-sm sm:text-base drop-shadow-sm">
                    Structured Information Architecture
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/20 font-semibold text-[#FFE3D4]">
                    4x Faster Navigation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            CARD 3: MOBILE EXPERIENCE NEEDS WORK (OBSIDIAN DARK)
           ======================================================== */}
        <FlowSection
          aria-label="03 Mobile Experience Needs Work"
          className="bg-[#0C0B0A] text-white border-t border-white/10 shadow-2xl selection:bg-[#E4521B]/30 selection:text-white"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="03"
            total="05"
            title="Mobile Responsiveness"
            subtitle="Thumb-Native Fluidity"
            theme="dark"
            className="pt-2 sm:pt-4"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="signal-mobile-heading"
              align="left"
              lines={[
                'Mobile Needs Work.',
                '<span style="color: var(--color-primary-orange, #E4521B)">Layouts, Menus & Text Awkward on Small Screens.</span>',
              ]}
              slit={0}
              textColor="#FFFFFF"
              dotColor="#E4521B"
              className="text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.06] tracking-[-0.03em]"
            />

            <BrandAccentLine align="left" theme="orange" className="my-3.5" />

            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-[#A8A29E] leading-[1.68] font-normal">
              More than 65% of all client traffic arrives on smartphones. Awkward responsive shifts,
              cramped touch targets, and slow-loading mobile assets kill conversion rates. We engineer
              mobile-first interfaces that feel as fast and refined as native iOS and Android apps.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-white/10 w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Left Text Details + Right Showcase Image */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 6 Cols */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#E4521B]">
                Mobile Bottlenecks
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E4521B]/40 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/15 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      Clumsy Touch Targets & Forms
                    </h4>
                    <p className="font-sans text-[13px] text-[#A8A29E] leading-relaxed mt-0.5">
                      Input fields that zoom unpredictably, buttons too close together, and clunky mobile menu overlays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E4521B]/40 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/15 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      Slow Mobile Core Web Vitals
                    </h4>
                    <p className="font-sans text-[13px] text-[#A8A29E] leading-relaxed mt-0.5">
                      Excessive JavaScript payloads and uncompressed imagery causing high mobile bounce rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#E4521B] to-[#FF914D] hover:from-[#FF914D] hover:to-[#E4521B] text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-[#E4521B]/20"
                >
                  <span>Build Mobile-First Next.js</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols */}
            <div className="lg:col-span-6 min-w-0">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <Image
                  src="/Image-v1/dev_page/custom-dashboard.jpg"
                  alt="Fluid Responsive Architecture Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md font-sans font-semibold text-[10px] tracking-wider uppercase bg-black/75 backdrop-blur-md text-white border border-white/20">
                    Fluid Engineering
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                  <span className="font-sans font-bold text-sm sm:text-base drop-shadow-sm">
                    Sub-Second Mobile Response
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#E4521B] font-semibold text-white">
                    100% Touch-Optimized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            CARD 4: CONTENT HAS BECOME UNCLEAR (WARM SAND AESTHETIC)
           ======================================================== */}
        <FlowSection
          aria-label="04 Content Has Become Unclear"
          className="bg-[#F9F7F3] text-[#161413] border-t border-[#E5E0D8] shadow-sm selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="04"
            total="05"
            title="Content Hierarchy"
            subtitle="Clarity & Structure"
            theme="light"
            className="pt-2 sm:pt-4"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="signal-content-heading"
              align="left"
              lines={[
                'Content Has Become Unclear.',
                '<span style="color: var(--color-primary-orange, #E4521B)">Site Has Grown Over Time and Needs Better Structure.</span>',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.06] tracking-[-0.03em]"
            />

            <BrandAccentLine align="left" className="my-3.5" />

            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-[#554E48] leading-[1.68] font-normal">
              Years of incremental updates, disjointed announcements, and one-off pages leave websites
              confusing and bloated. We audit your messaging and organize it into clean, modular landing
              pages where your core offer is immediate and unambiguous.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-[#E5E0D8] w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Left Text Details + Right Showcase Image */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 6 Cols */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#E4521B]">
                Content Symptoms
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E5E0D8] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#E4521B]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-[#161413] tracking-[-0.01em]">
                      Redundant Pages & Mixed Messages
                    </h4>
                    <p className="font-sans text-[13px] text-[#736B63] leading-relaxed mt-0.5">
                      Conflicting descriptions across sub-pages that dilute brand identity and confuse buying decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E5E0D8] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#E4521B]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-[#161413] tracking-[-0.01em]">
                      Diluted Call-to-Action Focus
                    </h4>
                    <p className="font-sans text-[13px] text-[#736B63] leading-relaxed mt-0.5">
                      Too many competing buttons and unstructured copy that reduce conversion efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161413] hover:bg-[#E4521B] text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm"
                >
                  <span>Streamline Your Content</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols */}
            <div className="lg:col-span-6 min-w-0">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-xl group">
                <Image
                  src="/Image-v1/dev_page/content-publication.jpg"
                  alt="Clear Content Architecture Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md font-sans font-semibold text-[10px] tracking-wider uppercase bg-black/75 backdrop-blur-md text-white border border-white/20">
                    Content Hierarchy
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                  <span className="font-sans font-bold text-sm sm:text-base drop-shadow-sm">
                    Structured Editorial Layouts
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#E4521B] font-semibold text-white">
                    Clear Value Proposition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            CARD 5: THE BUSINESS HAS EVOLVED (PURE WHITE BRAND STYLE)
           ======================================================== */}
        <FlowSection
          aria-label="05 The Business Has Evolved"
          className="bg-white text-[#161413] border-t border-[#E5E0D8] shadow-sm selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="05"
            total="05"
            title="Strategic Evolution"
            subtitle="Matching Current Scale"
            theme="light"
            className="pt-2 sm:pt-4"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="signal-evolved-heading"
              align="left"
              lines={[
                'The Business Has Evolved.',
                '<span style="color: var(--color-primary-orange, #E4521B)">New Services, Audiences & Goals Reflected in Your Site.</span>',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.06] tracking-[-0.03em]"
            />

            <BrandAccentLine align="left" className="my-3.5" />

            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-[#554E48] leading-[1.68] font-normal">
              Your business is more mature, capable, and ambitious than when your website was originally
              launched. Your digital platform should showcase that authority with enterprise Next.js
              performance, bespoke UI/UX, and zero technical debt.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-[#E5E0D8] w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Left Text Details + Right Showcase Image */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 6 Cols */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#E4521B]">
                Strategic Growth Drivers
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F9F7F3] border border-[#E5E0D8] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#E4521B]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-[#161413] tracking-[-0.01em]">
                      Repositioning for High-Value Clients
                    </h4>
                    <p className="font-sans text-[13px] text-[#736B63] leading-relaxed mt-0.5">
                      Aligning your aesthetic and case studies with the larger client contracts you now pursue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F9F7F3] border border-[#E5E0D8] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#E4521B]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E4521B]/10 flex items-center justify-center shrink-0 text-[#E4521B]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-[#161413] tracking-[-0.01em]">
                      Promoting Expanded Services & Tech
                    </h4>
                    <p className="font-sans text-[13px] text-[#736B63] leading-relaxed mt-0.5">
                      Showcasing your full modern capabilities rather than legacy offerings that no longer represent your core.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161413] hover:bg-[#E4521B] text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm"
                >
                  <span>Start Your Redesign Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols */}
            <div className="lg:col-span-6 min-w-0">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-xl group">
                <Image
                  src="/Image-v1/dev_page/company-profiles.jpg"
                  alt="Enterprise Brand Scale Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md font-sans font-semibold text-[10px] tracking-wider uppercase bg-black/75 backdrop-blur-md text-white border border-white/20">
                    Platform Modernization
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                  <span className="font-sans font-bold text-sm sm:text-base drop-shadow-sm">
                    Built for Enterprise Scale
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#E4521B] font-semibold text-white">
                    Next.js 15 & Zero Tech Debt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

      </FlowArt>
    </section>
  )
}

export default WebsiteRedesignSignalsSection

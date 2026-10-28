'use client'

import React from 'react'
import Link from 'next/link'
import { FlowArt, FlowSection } from './StoryScroll'
import { ArchitecturalIndexBar } from './ArchitecturalIndexBar'
import { BrandAccentLine, SlitHeading } from '@/components/ui'
import {
  Zap,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
} from 'lucide-react'
import {
  ExampleCardsCarousel,
  STATIC_EXAMPLES,
  DYNAMIC_EXAMPLES,
} from './ExampleCardsCarousel'

export function WhatWeDesignStoryScroll() {
  return (
    <section
      id="what-we-design"
      className="relative w-full bg-dark-bg text-white selection:bg-primary-orange/30 selection:text-white"
    >
      {/* FlowArt Interactive GSAP Story Scroll */}
      <FlowArt aria-label="What We Design — Static & Dynamic Websites">

        {/* ========================================================
            SLIDE 1: STATIC WEBSITES (PURE WHITE HOME PAGE AESTHETIC)
           ======================================================== */}
        <FlowSection
          aria-label="01 Static Websites"
          className="bg-white text-heading-dark border-t border-border-warm shadow-sm selection:bg-primary-orange/20 selection:text-primary-orange"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="01"
            total="03"
            title="Static Architecture"
            subtitle="Fast & Maintenance-Free"
            theme="light"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="static-websites-heading"
              align="left"
              lines={[
                'Static Websites.',
                '<span style="color: var(--color-primary-orange, #E4521B)">Focused. Fast. Straightforward.</span>',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Home Page Down Line with Dot (━━━━ ▪) */}
            <BrandAccentLine align="left" className="my-3.5" />

            {/* Description Copy */}
            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-body-dark leading-[1.68] font-normal">
              Best for businesses, portfolios, landing pages, service information, and websites where
              content does not need to change frequently. Static websites offer an ultra-focused, lightning-fast,
              and straightforward experience when designed and implemented with craft.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-border-warm w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Pillars & Real-World Examples */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-1">
            {/* Left 4 Cols: Key Advantages */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-primary-orange">
                Core Advantages
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-surface-sand border border-border-warm shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-primary-orange/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/10 flex items-center justify-center shrink-0 text-primary-orange">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-heading-dark tracking-[-0.01em]">Sub-Second Page Loads</h4>
                    <p className="font-sans text-[13px] text-body-muted leading-relaxed mt-0.5">
                      Pre-rendered HTML deployed directly to edge caches for instant global delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-surface-sand border border-border-warm shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-primary-orange/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/10 flex items-center justify-center shrink-0 text-primary-orange">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-heading-dark tracking-[-0.01em]">Zero Database Attack Surface</h4>
                    <p className="font-sans text-[13px] text-body-muted leading-relaxed mt-0.5">
                      Immune to database exploits with near-zero ongoing server maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Real-World Use Case Examples (Shows 3 Cards & Smart Auto-Scroll) */}
            <div className="lg:col-span-8 min-w-0">
              <ExampleCardsCarousel
                items={STATIC_EXAMPLES}
                theme="light"
                title="Ideal Implementation Examples"
              />
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            SLIDE 2: DYNAMIC WEBSITES (SOLID SIGNATURE BRAND ORANGE)
           ======================================================== */}
        <FlowSection
          aria-label="02 Dynamic Websites"
          className="bg-primary-orange text-white border-t border-white/20 shadow-2xl selection:bg-white/25 selection:text-white"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="02"
            total="03"
            title="Dynamic Architecture"
            subtitle="Interactive & Data-Driven"
            theme="orange"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="dynamic-websites-heading"
              align="left"
              lines={[
                'Dynamic Websites.',
                '<span style="color: #FFE3D4">Engaging. Powerful. Interactive.</span>',
              ]}
              slit={0}
              textColor="#FFFFFF"
              dotColor="#FFE3D4"
              className="text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Down Line (White on Orange Background) */}
            <BrandAccentLine align="left" theme="white" className="my-3.5" />

            {/* Description Copy */}
            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-white/95 leading-[1.68] font-normal drop-shadow-sm">
              For projects where content or functionality needs to change through user interaction, data, or an administrative workflow.
              Depending on the requirements, dynamic websites may include forms, search, user accounts, dashboards, content management,
              database integration, or other bespoke interactive features.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-white/20 w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Dynamic Capabilities & Real-World Examples */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-1">
            {/* Left 4 Cols: Dynamic Capabilities */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#FFE3D4]">
                Integrated Capabilities
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#0C0B0A] border border-white/10 hover:border-white/25 hover:bg-[#141210] shadow-2xl transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-primary-sunset flex items-center justify-center shrink-0 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">Full-Stack Data Flow</h4>
                    <p className="font-sans text-[13px] text-white/75 leading-relaxed mt-0.5">
                      Custom APIs, database connectors, and state management tailored to your exact workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#0C0B0A] border border-white/10 hover:border-white/25 hover:bg-[#141210] shadow-2xl transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-primary-sunset flex items-center justify-center shrink-0 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">CMS & Admin Management</h4>
                    <p className="font-sans text-[13px] text-white/75 leading-relaxed mt-0.5">
                      Publish updates effortlessly with tailored administrative interfaces and user roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Real-World Use Case Examples (Shows 3 Cards & Smart Auto-Scroll) */}
            <div className="lg:col-span-8 min-w-0">
              <ExampleCardsCarousel
                items={DYNAMIC_EXAMPLES}
                theme="orange"
                title="Ideal Implementation Examples"
              />
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            SLIDE 3: SELECTION & SCOPE DECISION NOTE (PURE WHITE BRAND AESTHETIC)
           ======================================================== */}
        <FlowSection
          aria-label="03 What We Design Scope and Selection"
          className="bg-white text-heading-dark border-t border-border-warm shadow-sm selection:bg-primary-orange/20 selection:text-primary-orange"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="03"
            total="03"
            title="Architecture Scope"
            subtitle="Tailored Requirements & Stack"
            theme="light"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="architecture-scope-heading"
              align="left"
              lines={[
                'The Right Website For',
                '<span style="color: var(--color-primary-orange, #E4521B)">The Way You Work.</span>',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Home Page Down Line with Dot (━━━━ ▪) */}
            <BrandAccentLine align="left" className="my-3.5" />

            {/* Description Copy */}
            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-body-dark leading-[1.68] font-normal">
              Every business has different needs. We help define the right type of website based on your content, audience,
              and required functionality - engineering solutions that deliver maximum ROI with zero unnecessary complexity.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-border-warm w-full max-w-[1380px] mx-auto" />

          {/* Bottom Callout Card: Scope Confirmation Note */}
          <div className="w-full max-w-[1380px] mx-auto pt-1">
            <div className="rounded-3xl bg-surface-sand border border-border-warm p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-primary-orange/30 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-primary-orange text-xs font-sans font-bold uppercase tracking-[0.14em] mb-2.5">
                    {/* <Sparkles className="w-4 h-4 text-sunset-orange" /> */}
                    <span>Project Scope & Strategy</span>
                  </div>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-heading-dark tracking-[-0.02em] mb-2">
                    Note on Technology Choices
                  </h3>
                  <p className="font-sans text-[14.5px] sm:text-[15.5px] text-body-muted leading-relaxed">
                    Final features and technology choices depend on the project scope and confirmed requirements.
                    Whether static or dynamic, we architect clean codebases with verifiable performance and enduring craftsmanship.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary-orange hover:bg-pill-black text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Define Your Requirements</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-surface-dim text-heading-dark border border-border-subtle font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Explore Completed Sites</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary-orange" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>

      </FlowArt>
    </section>
  )
}

export default WhatWeDesignStoryScroll

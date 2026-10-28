'use client'

import React from 'react'
import { FlowArt, FlowSection } from '@/components/website-dev/StoryScroll'
import { ArchitecturalIndexBar } from '@/components/website-dev/ArchitecturalIndexBar'
import { BrandAccentLine, SlitHeading } from '@/components/ui'
import {
  ExampleCardsCarousel,
  ExampleCardItem,
} from '@/components/website-dev/ExampleCardsCarousel'
import {
  Globe2,
  Target,
  Sparkles,
  MousePointerClick,
  Sliders,
  Cpu,
  Building2,
  Zap,
  FileCode2,
  Radio,
  Layers,
  CheckCircle2,
  BookOpen,
} from 'lucide-react'

// 1. Digital experiences Cards
const DIGITAL_EXPERIENCE_CARDS: ExampleCardItem[] = [
  {
    title: 'Modern Web Applications',
    desc: 'High-speed Next.js web platforms with sub-second page loads and seamless responsiveness.',
    category: 'Web Apps',
    tag: 'Modern Web',
    icon: Globe2,
    image: '/images/services/website-dev.jpg',
  },
  {
    title: 'Brand Showcase & Presence',
    desc: 'Bespoke digital experiences crafted to express brand identity and communicate value clearly.',
    category: 'Showcase',
    tag: 'Brand Experience',
    icon: Sparkles,
    image: '/images/services/website-redesign.jpg',
  },
  {
    title: 'Digital Event Invitations',
    desc: 'Interactive invitation websites with guest management, WhatsApp sharing, and RSVP tracking.',
    category: 'Experiences',
    tag: 'Interactive Link',
    icon: MousePointerClick,
    image: '/images/services/digital-invitation.jpg',
  },
]

// 2. Products that solve problems Cards
const PRODUCT_PROBLEM_CARDS: ExampleCardItem[] = [
  {
    title: 'Internal Operations Dashboards',
    desc: 'Custom admin interfaces and operational tools built around specific team workflows.',
    category: 'Tools',
    tag: 'Productivity',
    icon: Building2,
    image: '/images/projects/developer-tools.png',
  },
  {
    title: 'Automated Business Workflows',
    desc: 'Connecting APIs, data sources, and communications to eliminate repetitive manual work.',
    category: 'Automation',
    tag: 'Efficiency',
    icon: Zap,
    image: '/images/projects/ai-automation-desk.jpg',
  },
  {
    title: 'Community Collaboration Hubs',
    desc: 'Practical platforms that enable builders and enthusiasts to connect and share progress.',
    category: 'Software',
    tag: 'Community',
    icon: Target,
    image: '/images/projects/community-projects.png',
  },
]

// 3. Experiments and learning Cards
const EXPERIMENT_LEARNING_CARDS: ExampleCardItem[] = [
  {
    title: '3D WebGL & Creative Canvas',
    desc: 'Exploring fluid interactive shaders, particle systems, and kinetic web animations.',
    category: 'Canvas',
    tag: 'Interactive 3D',
    icon: Sparkles,
    image: '/images/hero-coding-creative.jpg',
  },
  {
    title: 'AI Workflow Prototypes',
    desc: 'Spiking autonomous agent loops, prompt orchestration, and intelligent tool integrations.',
    category: 'Exploration',
    tag: 'AI Labs',
    icon: Cpu,
    image: '/images/projects/ai-automation.png',
  },
  {
    title: 'Collaborative Code Spikes',
    desc: 'Hands-on weekend experiments where builders test modern frameworks and architectural patterns.',
    category: 'Prototypes',
    tag: 'Weekend Spikes',
    icon: Layers,
    image: '/Image-v1/Home_page/build-real-products.jpg',
  },
]

// 4. Shared knowledge Cards
const SHARED_KNOWLEDGE_CARDS: ExampleCardItem[] = [
  {
    title: 'Architecture Blueprints',
    desc: 'Step-by-step documentation on component architecture, state management, and edge deployments.',
    category: 'Docs',
    tag: 'Playbooks',
    icon: FileCode2,
    image: '/images/projects/community-sticky-notes.jpg',
  },
  {
    title: 'Design System Guidelines',
    desc: 'Accessible color scales, typography rules, and interactive patterns codified for consistency.',
    category: 'Guidelines',
    tag: 'Design System',
    icon: BookOpen,
    image: '/Image-v1/Home_page/Learn-together.jpg',
  },
  {
    title: 'Project Retrospectives',
    desc: 'Transparent post-mortems capturing lessons learned to make future project iterations stronger.',
    category: 'Retrospectives',
    tag: 'Lessons Learned',
    icon: CheckCircle2,
    image: '/Image-v1/Home_page/grow & lead.jpg',
  },
]

export function AboutWhatWeAreBuilding() {
  return (
    <section
      id="what-were-building"
      className="relative w-full bg-dark-bg text-white selection:bg-primary-orange/30 selection:text-white"
    >
      {/* FlowArt Interactive GSAP Story Scroll */}
      <FlowArt aria-label="What we're building — Digital experiences, Products, Experiments & Knowledge">

        {/* ========================================================
            SLIDE 1: DIGITAL EXPERIENCES (PURE WHITE HOME PAGE AESTHETIC)
           ======================================================== */}
        <FlowSection
          aria-label="01 Digital experiences"
          className="bg-white text-heading-dark border-t border-border-warm shadow-sm selection:bg-primary-orange/20 selection:text-primary-orange"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="01"
            total="04"
            title="What We're Building"
            subtitle="Digital Experiences"
            theme="light"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="building-digital-experiences-heading"
              align="left"
              lines={[
                'Digital experiences.',
                '<span style="color: var(--color-primary-orange, #E4521B)">Communicating clearly. Serving users.</span>',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Home Page Down Line with Dot */}
            <BrandAccentLine align="left" className="my-3.5" />

            {/* Description Copy verbatim from user */}
            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-body-dark leading-[1.68] font-normal">
              Websites and web applications designed to communicate clearly, serve users, and support business goals.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-border-warm w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Core Advantages & Real-World Examples */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-1">
            {/* Left 4 Cols: Focus Points */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-primary-orange">
                Core Focus
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-surface-sand border border-border-warm shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-primary-orange/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/10 flex items-center justify-center shrink-0 text-primary-orange">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-heading-dark tracking-[-0.01em]">
                      Clear Communication
                    </h4>
                    <p className="font-sans text-[13px] text-body-muted leading-relaxed mt-0.5">
                      Intuitive layouts and purposeful typography designed to convey message and value immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-surface-sand border border-border-warm shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-primary-orange/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/10 flex items-center justify-center shrink-0 text-primary-orange">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-heading-dark tracking-[-0.01em]">
                      Business Alignment
                    </h4>
                    <p className="font-sans text-[13px] text-body-muted leading-relaxed mt-0.5">
                      Fast edge loading, accessibility standards, and journeys that measurably support commercial goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Real-World Use Case Examples */}
            <div className="lg:col-span-8 min-w-0">
              <ExampleCardsCarousel
                items={DIGITAL_EXPERIENCE_CARDS}
                theme="light"
                title="Example Experiences"
              />
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            SLIDE 2: PRODUCTS THAT SOLVE PROBLEMS (SOLID BRAND ORANGE)
           ======================================================== */}
        <FlowSection
          aria-label="02 Products that solve problems"
          className="bg-primary-orange text-white border-t border-white/20 shadow-2xl selection:bg-white/25 selection:text-white"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="02"
            total="04"
            title="What We're Building"
            subtitle="Products That Solve Problems"
            theme="orange"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="building-products-heading"
              align="left"
              lines={[
                'Products that solve problems.',
                '<span style="color: #FFE3D4">Guided by real needs.</span>',
              ]}
              slit={0}
              textColor="#FFFFFF"
              dotColor="#FFE3D4"
              className="text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Down Line (White on Orange Background) */}
            <BrandAccentLine align="left" theme="white" className="my-3.5" />

            {/* Description Copy verbatim from user */}
            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-white/95 leading-[1.68] font-normal drop-shadow-sm">
              Ideas shaped into practical tools and applications, guided by real needs rather than technology for its own sake.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-white/20 w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Pillars & Real-World Examples */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-1">
            {/* Left 4 Cols: Practical Priorities */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-[#FFE3D4]">
                Product Priorities
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#0C0B0A] border border-white/10 hover:border-white/25 hover:bg-[#141210] shadow-2xl transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-primary-sunset flex items-center justify-center shrink-0 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      Practical Utility First
                    </h4>
                    <p className="font-sans text-[13px] text-white/75 leading-relaxed mt-0.5">
                      Targeted solutions that simplify operational bottlenecks without unnecessary architectural complexity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#0C0B0A] border border-white/10 hover:border-white/25 hover:bg-[#141210] shadow-2xl transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-primary-sunset flex items-center justify-center shrink-0 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      Human-Centered Engineering
                    </h4>
                    <p className="font-sans text-[13px] text-white/75 leading-relaxed mt-0.5">
                      Built for real daily users who value speed, straightforward controls, and reliable functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Real-World Use Case Examples */}
            <div className="lg:col-span-8 min-w-0">
              <ExampleCardsCarousel
                items={PRODUCT_PROBLEM_CARDS}
                theme="orange"
                title="Practical Tools & Platforms"
              />
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            SLIDE 3: EXPERIMENTS AND LEARNING (OBSIDIAN DARK AESTHETIC)
           ======================================================== */}
        <FlowSection
          aria-label="03 Experiments and learning"
          className="bg-dark-bg text-white border-t border-white/10 shadow-2xl selection:bg-primary-orange/30 selection:text-white"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="03"
            total="04"
            title="What We're Building"
            subtitle="Experiments & Learning"
            theme="dark"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="building-experiments-heading"
              align="left"
              lines={[
                'Experiments and learning.',
                '<span style="color: var(--color-primary-orange, #E4521B)">Discovering better ways to build.</span>',
              ]}
              slit={0}
              textColor="#FFFFFF"
              dotColor="#E4521B"
              className="text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Down Line (White theme) */}
            <BrandAccentLine align="left" theme="white" className="my-3.5" />

            {/* Description Copy verbatim from user */}
            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-white/80 leading-[1.68] font-normal drop-shadow-sm">
              Small prototypes, technical explorations, and collaborative projects that help us discover better ways to build.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-white/10 w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Exploration Points & Real-World Examples */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-1">
            {/* Left 4 Cols: Technical Discovery */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-primary-orange">
                Exploration R&D
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#161412] border border-white/12 hover:border-primary-orange/40 hover:bg-[#1D1A17] shadow-2xl transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/15 text-primary-orange flex items-center justify-center shrink-0 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                    <FileCode2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      Rapid Prototyping
                    </h4>
                    <p className="font-sans text-[13px] text-white/70 leading-relaxed mt-0.5">
                      Testing fresh concepts with fast iterations and minimal spikes to evaluate viability early.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#161412] border border-white/12 hover:border-primary-orange/40 hover:bg-[#1D1A17] shadow-2xl transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/15 text-primary-orange flex items-center justify-center shrink-0 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-white tracking-[-0.01em]">
                      Frontier Exploration
                    </h4>
                    <p className="font-sans text-[13px] text-white/70 leading-relaxed mt-0.5">
                      Hands-on experimentation with WebGL graphics, AI agents, edge runtimes, and reactive frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Real-World Use Case Examples */}
            <div className="lg:col-span-8 min-w-0">
              <ExampleCardsCarousel
                items={EXPERIMENT_LEARNING_CARDS}
                theme="dark"
                title="Prototypes & Explorations"
              />
            </div>
          </div>
        </FlowSection>

        {/* ========================================================
            SLIDE 4: SHARED KNOWLEDGE (PURE WHITE HOME PAGE AESTHETIC)
           ======================================================== */}
        <FlowSection
          aria-label="04 Shared knowledge"
          className="bg-white text-heading-dark border-t border-border-warm shadow-sm selection:bg-primary-orange/20 selection:text-primary-orange"
        >
          {/* Top Architecture Index Bar */}
          <ArchitecturalIndexBar
            index="04"
            total="04"
            title="What We're Building"
            subtitle="Shared Knowledge"
            theme="light"
          />

          {/* Center Main Headline & Description */}
          <div className="w-full max-w-[1380px] mx-auto">
            <SlitHeading
              id="building-shared-knowledge-heading"
              align="left"
              lines={[
                'Shared knowledge.',
                '<span style="color: var(--color-primary-orange, #E4521B)">Notes, documentation & lessons.</span>',
              ]}
              slit={0}
              textColor="#161413"
              dotColor="#E4521B"
              className="text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.06] tracking-[-0.03em]"
            />

            {/* Signature Home Page Down Line with Dot */}
            <BrandAccentLine align="left" className="my-3.5" />

            {/* Description Copy verbatim from user */}
            <p className="mt-2 max-w-3xl font-sans text-[15px] sm:text-[16px] md:text-[17px] text-body-dark leading-[1.68] font-normal">
              Notes, documentation, workflows, and lessons learned that help us understand our work and make future projects better.
            </p>
          </div>

          <hr className="my-2 border-none border-t border-border-warm w-full max-w-[1380px] mx-auto" />

          {/* Bottom Grid: Pillars & Real-World Examples */}
          <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-1">
            {/* Left 4 Cols: Living Knowledge */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.14em] text-primary-orange">
                Living Knowledge
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-surface-sand border border-border-warm shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-primary-orange/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/10 flex items-center justify-center shrink-0 text-primary-orange">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-heading-dark tracking-[-0.01em]">
                      Documented Workflows
                    </h4>
                    <p className="font-sans text-[13px] text-body-muted leading-relaxed mt-0.5">
                      Codifying repeatable engineering patterns, code standards, and setup playbooks for the whole team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-surface-sand border border-border-warm shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-primary-orange/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-orange/10 flex items-center justify-center shrink-0 text-primary-orange">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[14.5px] text-heading-dark tracking-[-0.01em]">
                      Compounding Craft
                    </h4>
                    <p className="font-sans text-[13px] text-body-muted leading-relaxed mt-0.5">
                      Capturing post-launch insights and technical retrospectives so every subsequent build is sharper.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Cols: Real-World Use Case Examples */}
            <div className="lg:col-span-8 min-w-0">
              <ExampleCardsCarousel
                items={SHARED_KNOWLEDGE_CARDS}
                theme="light"
                title="Knowledge Artifacts"
              />
            </div>
          </div>
        </FlowSection>

      </FlowArt>
    </section>
  )
}

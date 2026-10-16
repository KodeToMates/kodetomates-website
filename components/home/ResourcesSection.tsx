'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Clock, Layers, Cpu, Terminal, Compass } from 'lucide-react'

interface ResourceItem {
  id: string
  title: string
  tag: string
  type: string
  readingTime: string
  description: string
  topics: string[]
  href: string
  accentGlow: string
  readsCount: string
  Icon: React.ComponentType<{ className?: string }>
}

const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'engineering-crdt',
    title: 'Distributed State Sync & CRDTs for Real-Time Apps',
    tag: 'ENGINEERING NOTE',
    type: 'Architecture',
    readingTime: '8 min read',
    description: 'How to design conflict-free replicated data types and optimistic peer-to-peer sync for multi-tenant collaborative tools.',
    topics: ['CRDTs', 'WebSockets', 'Rust', 'Real-time'],
    href: '/resources',
    accentGlow: 'radial-gradient(circle, rgba(255,166,105,0.45) 0%, rgba(228,82,27,0.15) 50%, transparent 75%)',
    readsCount: '3.4k reads',
    Icon: Terminal,
  },
  {
    id: 'nextjs-blueprint',
    title: 'Zero to Production: Next.js 15 & Server Actions',
    tag: 'PRACTICAL GUIDE',
    type: 'Full-Stack',
    readingTime: '12 min read',
    description: 'Production patterns for server action validations, granular cache tagging, partial prerendering, and edge middleware.',
    topics: ['Next.js 15', 'React 19', 'Server Actions', 'Caching'],
    href: '/resources',
    accentGlow: 'radial-gradient(circle, rgba(255,150,82,0.45) 0%, rgba(216,70,16,0.15) 50%, transparent 75%)',
    readsCount: '5.1k reads',
    Icon: Layers,
  },
  {
    id: 'agentic-ai-eval',
    title: 'Building Reliable Agentic Workflows with LLM Telemetry',
    tag: 'AI & SYSTEMS',
    type: 'AI Research',
    readingTime: '15 min read',
    description: 'Step-by-step setup for structuring multi-agent loops, tool execution safety guards, and latency evaluation pipelines.',
    topics: ['Python', 'LangChain', 'FastAPI', 'Evaluation'],
    href: '/resources',
    accentGlow: 'radial-gradient(circle, rgba(255,166,105,0.45) 0%, rgba(228,82,27,0.15) 50%, transparent 75%)',
    readsCount: '4.2k reads',
    Icon: Cpu,
  },
  {
    id: 'motion-engineering',
    title: '60fps Micro-Interactions & Accessible Motion Design',
    tag: 'DESIGN ENGINEERING',
    type: 'Frontend',
    readingTime: '6 min read',
    description: 'Framer Motion layout physics, GPU-accelerated compositing transforms, and WCAG-compliant reduced-motion architectures.',
    topics: ['Framer Motion', 'Tailwind', 'A11y', 'WebGL'],
    href: '/resources',
    accentGlow: 'radial-gradient(circle, rgba(255,140,70,0.45) 0%, rgba(184,56,10,0.15) 50%, transparent 75%)',
    readsCount: '2.8k reads',
    Icon: Compass,
  },
]

// 4-point sparkle star matching brand ornament
function SparkleStar({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

const RESOURCE_TABS = ['All Resources', 'Engineering Notes', 'Practical Guides', 'AI & Systems']

export function ResourcesSection() {
  const shouldReduceMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState('All Resources')

  const filteredResources = RESOURCES_DATA.filter((res) => {
    if (activeTab === 'All Resources') return true
    if (activeTab === 'Engineering Notes') return res.tag.includes('ENGINEERING')
    if (activeTab === 'Practical Guides') return res.tag.includes('GUIDE')
    if (activeTab === 'AI & Systems') return res.tag.includes('AI')
    return true
  })

  return (
    <section
      id="resources"
      className="relative z-10 w-full pt-14 sm:pt-18 md:pt-20 pb-18 sm:pb-22 md:pb-30 overflow-hidden bg-white border-y border-[#F3ECE4]/80 shadow-[0_2px_16px_rgba(0,0,0,0.015)] selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="resources-heading"
    >
      {/* ========================================================
          BACKGROUND CORNER ORNAMENTS & ARCHITECTURAL ACCENTS
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* TOP-LEFT: Architectural Fluid Wave + Downward Drafting Contour Arcs + Sparkle Star */}
        <div className="absolute top-0 left-0 w-[240px] sm:w-[320px] md:w-[380px] h-[180px] sm:h-[230px] md:h-[270px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 380 270"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="resTopLeftBlobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF7A36" stopOpacity="0.4" />
                <stop offset="45%" stopColor="#FFA665" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Outer soft wave */}
            <path
              d="M 0 0 L 220 0 C 200 65, 175 125, 120 170 C 70 210, 35 240, 0 270 Z"
              fill="url(#resTopLeftBlobGrad)"
            />
            {/* Architectural downward sweeping contour drafting lines */}
            <path
              d="M 0 110 C 90 110, 175 155, 235 205 C 275 240, 305 255, 340 270"
              stroke="#E4521B"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeLinecap="round"
            />
            <path
              d="M 0 160 C 65 160, 130 195, 185 235 C 220 255, 245 265, 270 270"
              stroke="#E4521B"
              strokeWidth="1.2"
              strokeOpacity="0.28"
              strokeLinecap="round"
            />
          </svg>
          {/* Floating Sparkle Star beside the drafting lines */}
          <div className="absolute top-8 sm:top-10 left-12 sm:left-16 text-[#E4521B]">
            <SparkleStar className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
        </div>

        {/* BOTTOM-RIGHT: Luminous Sunset-Berry Wave + Inner Ripple Contour + Sparkle Star */}
        <div className="absolute bottom-0 right-0 w-[260px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[250px] md:h-[290px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 420 290"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="resBottomRightGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF4A7A" stopOpacity="0.45" />
                <stop offset="42%" stopColor="#FF7A3D" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 420 290 L 170 290 C 230 220, 310 180, 360 130 C 390 100, 410 60, 420 30 Z"
              fill="url(#resBottomRightGrad)"
            />
            {/* Concentric ripple stroke */}
            <path
              d="M 420 250 C 350 250, 270 200, 210 145 C 175 110, 150 70, 130 0"
              stroke="#E4521B"
              strokeWidth="1.4"
              strokeOpacity="0.35"
              strokeLinecap="round"
            />
          </svg>
          {/* Sparkle star floating above bottom-right wave */}
          <div className="absolute bottom-8 sm:bottom-10 right-14 sm:right-20 text-[#E4521B]">
            <SparkleStar className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Ambient Radial Peach Glows */}
        <div 
          className="absolute right-[-6%] top-1/3 w-[650px] h-[550px] rounded-full blur-[110px] opacity-35"
          style={{
            background: 'radial-gradient(ellipse at center, #FDC7A2 0%, #FDE4D0 45%, rgba(254,236,220,0) 75%)',
          }}
        />
        <div 
          className="absolute left-[-6%] bottom-1/4 w-[600px] h-[500px] rounded-full blur-[100px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #FDD5B7 0%, rgba(254,240,226,0) 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================
            HEADER: Signature Subtitle, Editorial Heading & CTA
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl text-left">
            
            {/* Signature Subtitle with Layered Dual-Square Icon */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 select-none cursor-default"
            >
              <span className="flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {/* Top-left lighter offset square */}
                  <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.45" />
                  {/* Bottom-right solid berry square */}
                  <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#AB003E" />
                </svg>
              </span>

              <span className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[22px] bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent tracking-[-0.01em]">
                Resources
              </span>
            </motion.div>

            {/* Headline: Editorial Elegance */}
            <motion.h2
              id="resources-heading"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.4rem,4.2vw,3.8rem)] font-bold text-[#161413] leading-[1.14] tracking-[-0.02em] mb-3 sm:mb-4"
            >
              <div>Practical knowledge</div>
              <div className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent mt-1">
                for people who build.
              </div>
            </motion.h2>

            {/* Signature Decorative Down Line with Square Dot (━━━━ ▪) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex items-center gap-2 mb-4 sm:mb-5 origin-left"
              aria-hidden="true"
            >
              <span className="w-12 sm:w-14 h-[3.5px] rounded-[1px] bg-gradient-to-r from-[#FF914D] to-[#AB003E]" />
              <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#AB003E]" />
            </motion.div>

            {/* Copy Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[15px] sm:text-[16.5px] leading-[1.68] text-[#554E48] font-normal tracking-[-0.01em] max-w-xl"
            >
              Curated blueprints, battle-tested engineering notes and production walkthroughs written by developers who build every day.
            </motion.p>
          </div>

          {/* Primary CTA Button */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex items-start md:items-end justify-end shrink-0"
          >
            <Link
              href="/resources"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E4521B] via-[#D84610] to-[#E4521B] text-white font-sans font-semibold text-[15px] shadow-[0_8px_24px_rgba(228,82,27,0.32),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_32px_rgba(228,82,27,0.48),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 select-none"
            >
              <span>Explore Resources</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#E4521B]">
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ========================================================
            CATEGORY FILTER TABS
           ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10"
        >
          {RESOURCE_TABS.map((tab) => {
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-full font-sans text-[13px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? 'text-white bg-[#E4521B] shadow-[0_6px_18px_rgba(228,82,27,0.28)]'
                    : 'text-[#655D57] bg-white/80 border border-[#F2DECE] hover:border-[#E4521B]/40 hover:bg-[#FFF7EE]'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </motion.div>

        {/* ========================================================
            TRENDING RESOURCE CARDS GRID
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch">
          {filteredResources.map((resource, idx) => {
            const { Icon } = resource

            return (
              <motion.article
                key={resource.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -7 }}
                className="group relative flex flex-col justify-between rounded-[32px] bg-gradient-to-b from-white via-[#FFFDFB] to-[#FFF7EE]/90 border border-white/90 ring-1 ring-[#F2DECE]/85 shadow-[0_14px_36px_rgba(224,93,58,0.06),inset_0_1px_1px_rgba(255,255,255,1)] hover:ring-[#E4521B]/40 hover:shadow-[0_24px_55px_rgba(224,93,58,0.18),0_6px_18px_rgba(0,0,0,0.04)] transition-all duration-400 p-6 sm:p-7 overflow-hidden"
              >
                {/* Dynamic Spotlight Flare on Hover */}
                <div 
                  className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: resource.accentGlow }}
                  aria-hidden="true"
                />

                <div className="flex flex-col">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#FFF3EB] border border-[#FAD4BE] flex items-center justify-center text-[#E4521B]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8A7D74] select-none">
                        {resource.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#8C7E74]">
                      <Clock className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>{resource.readingTime}</span>
                    </div>
                  </div>

                  {/* Resource Title */}
                  <h3 className="font-serif text-[clamp(1.35rem,1.5vw,1.75rem)] font-bold text-[#161413] tracking-[-0.01em] mb-2.5 group-hover:text-[#E4521B] transition-colors leading-[1.25]">
                    {resource.title}
                  </h3>

                  {/* Resource Description */}
                  <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#635B54] font-normal mb-5">
                    {resource.description}
                  </p>

                  {/* Topic Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {resource.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center text-[11px] sm:text-[11.5px] font-medium px-2.5 py-0.5 rounded-full bg-[#FFF5EC] text-[#8C2C07] border border-[#FAD6C0] select-none"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-4 border-t border-[#F2DECE]/80 flex items-center justify-between mt-auto select-none">
                  <span className="font-mono text-[12.5px] font-bold text-[#8A7D74]">
                    {resource.readsCount}
                  </span>

                  <Link
                    href={resource.href}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#F0D5C2] text-[#161413] text-[12.5px] font-semibold shadow-[0_2px_6px_rgba(228,82,27,0.06)] hover:bg-[#E4521B] hover:text-white hover:border-[#E4521B] hover:shadow-[0_4px_14px_rgba(228,82,27,0.32)] transition-all duration-300"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

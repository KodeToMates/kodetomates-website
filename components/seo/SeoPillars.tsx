'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Gauge,
  Network,
  CheckCircle2,
  Code2,
  ArrowRight,
  Award,
} from 'lucide-react'

interface Pillar {
  id: string
  title: string
  eyebrow: string
  shortDesc: string
  icon: React.ElementType
  deliverables: string[]
  codeSnippet: string
  metricLabel: string
  metricValue: string
  badgeText: string
}

const PILLARS: Pillar[] = [
  {
    id: 'technical',
    title: 'Code-Level Technical Architecture',
    eyebrow: 'DEEP CRAWLABILITY',
    shortDesc:
      'We fix underlying code bottlenecks that block search engines from crawling, parsing, and indexing your highest-converting pages.',
    icon: Cpu,
    deliverables: [
      'Server-side rendering (SSR) & dynamic pre-rendering audits',
      'Crawl budget allocation & infinite crawl loop elimination',
      'Canonicalization, hreflang, & pagination logic verification',
      'Log file analysis to detect Googlebot frequency and dead-ends',
    ],
    codeSnippet: `// Next.js 16 Metadata & Dynamic Robots Optimization
export async function generateMetadata({ params }): Promise<Metadata> {
  const page = await fetchPageData(params.slug)
  return {
    title: \`\${page.metaTitle} | KodeToMates\`,
    description: page.metaDescription,
    alternates: { canonical: \`https://domain.com/\${page.slug}\` },
    robots: { index: true, follow: true, googleBot: { 'max-snippet': -1 } }
  }
}`,
    metricLabel: 'Indexing Health Score',
    metricValue: '99.8%',
    badgeText: 'Crawled in < 180ms',
  },
  {
    id: 'vitals',
    title: 'Sub-Second Core Web Vitals & Speed',
    eyebrow: 'REAL USER PERFORMANCE',
    shortDesc:
      'Page speed directly influences Google rankings and bounce rates. We refactor assets, CSS, and scripts to achieve perfect 100/100 Lighthouse scores.',
    icon: Gauge,
    deliverables: [
      'Largest Contentful Paint (LCP) compressed under 1.0 second',
      'Interaction to Next Paint (INP) engineered under 80 milliseconds',
      'Cumulative Layout Shift (CLS) locked to absolute 0.000',
      'Edge font streaming and modern AVIF/WebP image pipeline',
    ],
    codeSnippet: `// Zero-Layout Shift & Next-Gen Edge Image Pipeline
<Image
  src="/assets/visual.webp"
  alt="Target Keyword Context"
  width={1200}
  height={630}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover transition-opacity duration-300"
/>`,
    metricLabel: 'Lighthouse Performance',
    metricValue: '100/100',
    badgeText: 'LCP < 0.9s',
  },
  {
    id: 'semantic',
    title: 'Semantic Topic Graphs & JSON-LD',
    eyebrow: 'TOPICAL AUTHORITY',
    shortDesc:
      'Modern Google algorithms use knowledge graphs. We model your content with dense schema markup, entities, and interconnected topic clusters.',
    icon: Network,
    deliverables: [
      'Comprehensive Schema.org JSON-LD graph generation (Organization, FAQ, Breadcrumbs)',
      'Topical cluster architecture establishing domain subject mastery',
      'Search intent mapping capturing informational, commercial, and transactional queries',
      'Optimization for Google AI Overviews & Zero-Click Search Snippets',
    ],
    codeSnippet: `// JSON-LD Structured Entity Graph
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "name": "KodeToMates", "url": "https://kodetomates.com" },
    { "@type": "Service", "serviceType": "Technical SEO Audits & Growth" },
    { "@type": "WebPage", "breadcrumb": "Home > What We Do > SEO" }
  ]
}`,
    metricLabel: 'Rich Snippet Win Rate',
    metricValue: '84%',
    badgeText: 'AI Overviews Ready',
  },
  {
    id: 'authority',
    title: 'High-Trust Authority & Digital PR',
    eyebrow: 'OFF-PAGE DOMINANCE',
    shortDesc:
      'Rankings require undeniable domain authority. We secure editorial backlinks from legitimate industry publications and verified developer ecosystems.',
    icon: Award,
    deliverables: [
      'Data-driven research reports and technical whitepapers that attract organic links',
      'High-tier editorial press mentions and industry publication placements',
      'Unlinked brand mention reclaiming and toxic link disavowals',
      'Continuous PageRank distribution through internal linking models',
    ],
    codeSnippet: `// Algorithmic Internal PageRank Flow Model
export function calculateInternalEquity(pages, linkGraph) {
  return linkGraph.map(node => ({
    targetUrl: node.url,
    tier: node.depth <= 2 ? 'Priority A' : 'Supporting Hub',
    internalWeight: node.inboundLinks * 1.45
  }))
}`,
    metricLabel: 'Avg Domain Rating Gain',
    metricValue: '+28 DR',
    badgeText: 'Tier-1 Editorial PR',
  },
]

export function SeoPillars() {
  const [activePillarId, setActivePillarId] = useState(PILLARS[0].id)
  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0]

  return (
    <section id="seo-pillars" className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] text-[#161413]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B] mb-3">
            THE 4 PILLARS OF SEARCH DOMINANCE
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#161413] leading-tight mb-4">
            Search Engine Optimization Engineered from the Code Up
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-[#6B645E] leading-relaxed">
            Most SEO agencies write blog posts and hope for the best. We approach SEO like high-performance systems engineering: optimizing code crawlability, user experience telemetry, and semantic data structures.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            const isActive = pillar.id === activePillarId

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#E4521B] shadow-[0_8px_24px_rgba(228,82,27,0.12)] ring-1 ring-[#E4521B]'
                    : 'bg-white/60 hover:bg-white border-[#EAE5DE] text-[#6B645E] hover:text-[#161413]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-[#E4521B] text-white' : 'bg-[#F2ECE4] text-[#6B645E]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B]">
                    {pillar.eyebrow}
                  </div>
                  <div className="font-sans font-bold text-xs sm:text-sm text-[#161413] truncate">
                    {pillar.title}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Pillar Detailed Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-[#EAE5DE] shadow-[0_20px_50px_rgba(0,0,0,0.04)] items-stretch"
          >
            {/* Left Column: Narrative & Deliverables */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/20 text-[#E4521B] font-sans font-semibold text-xs tracking-wider uppercase mb-3">
                  <span>{activePillar.eyebrow}</span>
                  <span>•</span>
                  <span>{activePillar.badgeText}</span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-[-0.02em] text-[#161413] mb-3">
                  {activePillar.title}
                </h3>

                <p className="font-sans text-[15px] sm:text-base text-[#6B645E] leading-relaxed mb-6">
                  {activePillar.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-6">
                  <span className="font-sans font-semibold text-xs uppercase tracking-wider text-[#161413]">
                    What We Implement &amp; Deliver:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePillar.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#F0EBE1] text-xs sm:text-[13px] font-sans text-[#4A4541] leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E4521B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metric Card */}
              <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                <div>
                  <span className="font-sans text-xs text-[#8E867E] block">
                    {activePillar.metricLabel}
                  </span>
                  <span className="font-sans font-bold text-2xl sm:text-3xl text-[#E4521B] tracking-tight">
                    {activePillar.metricValue}
                  </span>
                </div>

                <a
                  href="#top"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161413] hover:bg-[#E4521B] text-white font-sans font-semibold text-xs sm:text-[13px] transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span>Request Audit For This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Code & Architecture Terminal Window */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#0F0E0D] text-white p-5 border border-white/10 shadow-xl overflow-hidden font-mono">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs text-white/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#A09890]">
                  <Code2 className="w-3 h-3 text-[#E4521B]" />
                  <span>seo-telemetry.tsx</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="text-[11.5px] sm:text-xs leading-relaxed text-[#D6CECA] overflow-x-auto my-auto py-2">
                <pre className="whitespace-pre-wrap font-mono">
                  <code>{activePillar.codeSnippet}</code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Crawl Test: PASSED</span>
                </span>
                <span className="text-[#FF914D]">Next.js 16 Compatible</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SeoPillars

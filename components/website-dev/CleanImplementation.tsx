'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  FolderTree,
  MonitorCheck,
  Gauge,
  Accessibility,
  CheckCircle2,
  FileText,
  ArrowUpRight,
  Terminal,
  Play,
  Check,
  Copy,
  Layers,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Tablet,
  Laptop,
  Code,
  GitBranch,
  Search,
  Volume2,
  Loader2,
  BookOpen,
} from 'lucide-react'
import { BrandAccentLine, SlitHeading } from '@/components/ui'
import { cn } from '@/lib/utils'

interface ImplementationPillar {
  id: string
  number: string
  title: string
  pill: string
  summary: string
  description: string
  icon: React.ElementType
  deliverables: string[]
}

const PILLARS: ImplementationPillar[] = [
  {
    id: 'reusable-components',
    number: '01',
    title: 'Reusable Components',
    pill: 'Design System Engineering',
    summary: 'Build repeated interface patterns consistently so updates are easier to manage.',
    description:
      'We construct a cohesive library of atomic UI elements—buttons, inputs, cards, navigation bars, and modals. Every component adheres to strict TypeScript interfaces and single-responsibility architecture, ensuring a single design change updates uniformly across the entire website.',
    icon: Layers,
    deliverables: [
      'Centralized Tailwind design token bindings',
      'Strict TypeScript prop interface contracts',
      'Zero duplicate or divergent styling code',
    ],
  },
  {
    id: 'organised-code-structure',
    number: '02',
    title: 'Organised Code Structure',
    pill: 'Project Architecture',
    summary: 'Keep files, components, styles, and responsibilities organised and understandable.',
    description:
      'Clean file organization is the bedrock of maintainable software. Using Next.js App Router conventions, we separate routing, domain business logic, data models, and UI primitives into intuitive directories so any engineer can jump in with zero onboarding friction.',
    icon: FolderTree,
    deliverables: [
      'Modular feature-first colocation pattern',
      'Deterministic barrel exports and clean imports',
      'Self-contained utilities and custom React hooks',
    ],
  },
  {
    id: 'responsive-implementation',
    number: '03',
    title: 'Responsive Implementation',
    pill: 'Cross-Platform Reliability',
    summary: 'Test layouts and interactions across relevant screen sizes and common browsers.',
    description:
      'We test every layout rigorously across mobile phones, tablets, laptops, and ultra-wide displays. From Chromium and WebKit to Firefox, all touch targets, hover states, and dynamic elements render with pixel-level precision and 60fps smoothness.',
    icon: MonitorCheck,
    deliverables: [
      'Pixel-perfect WebKit (Safari) & Chromium parity',
      'Touch ergonomics (44px+ minimum tap bounds)',
      'Sub-pixel rendering on high-density Retina screens',
    ],
  },
  {
    id: 'performance-awareness',
    number: '04',
    title: 'Performance Awareness',
    pill: 'Sub-Second Speed',
    summary: 'Use appropriately sized images, avoid unnecessary assets and scripts, and pay attention to loading behaviour.',
    description:
      'Speed is a feature. We compress and convert imagery to modern AVIF and WebP formats, eliminate bloated JavaScript libraries, leverage edge caching, and prioritize critical above-the-fold assets to achieve top Google Core Web Vitals rankings.',
    icon: Gauge,
    deliverables: [
      'Automatic Next/Image optimization and lazy loading',
      'Aggressive bundle tree-shaking (< 80kb first load JS)',
      'Sub-second Largest Contentful Paint (LCP < 0.8s)',
    ],
  },
  {
    id: 'semantic-accessibility',
    number: '05',
    title: 'Semantic HTML & Accessibility',
    pill: 'Inclusive Architecture',
    summary: 'Use meaningful page structure and accessible controls wherever practical.',
    description:
      'We engineer pages using appropriate HTML5 semantic landmarks (header, nav, main, article, section) with complete ARIA labels, visible focus indicators, and logical keyboard navigation so all visitors can navigate comfortably.',
    icon: Accessibility,
    deliverables: [
      'Full WCAG 2.1 AA contrast and navigation standards',
      'Logical heading hierarchy (single H1 with nested H2/H3)',
      'Keyboard trap prevention and screen-reader readiness',
    ],
  },
  {
    id: 'testing-review',
    number: '06',
    title: 'Testing and Review',
    pill: 'Pre-Delivery Verification',
    summary: 'Check important pages, navigation, forms, links, and interactive states before delivery.',
    description:
      'Before any website goes live, we run structured QA checklists covering form validations, error boundaries, dynamic modal states, 404 fallbacks, and mobile navigation flows to guarantee a flawless first impression.',
    icon: CheckCircle2,
    deliverables: [
      'End-to-end route audit across all pages',
      'Interactive form validation with friendly error states',
      'Zero broken anchor links or dead-end interactions',
    ],
  },
  {
    id: 'documentation-handoff',
    number: '07',
    title: 'Documentation and Handoff',
    pill: 'Effortless Maintainability',
    summary: 'Where relevant, provide clear setup notes or handoff details so future changes are easier.',
    description:
      'We prepare straightforward repository documentation, clear environment variable guides (.env.example), and architecture notes so your internal team or future developers can maintain, build, and deploy enhancements effortlessly.',
    icon: FileText,
    deliverables: [
      'Complete one-command local setup instructions',
      'Documented design token and component usage guides',
      'Clean Git repository history with descriptive commits',
    ],
  },
]

// ============================================================================
// Interactive Visual Workstations for each Pillar
// ============================================================================

function ReusableComponentsWorkstation() {
  const [selectedVariant, setSelectedVariant] = useState<'primary' | 'sand' | 'dark' | 'ghost'>('primary')
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className="h-full flex flex-col justify-between select-none">
      {/* Studio Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-border-warm/80">
        <div className="flex items-center gap-2">
          {/* Mac Traffic Lights */}
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <span className="font-mono text-xs font-bold text-primary-orange">&lt;Button /&gt;</span>
          <span className="text-[11px] text-body-muted hidden sm:inline">Design System Studio</span>
        </div>

        {/* Loading state toggle */}
        <button
          type="button"
          onClick={() => setIsLoading(!isLoading)}
          className={cn(
            'px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer border',
            isLoading
              ? 'bg-primary-orange/15 text-primary-orange border-primary-orange/40 font-semibold'
              : 'bg-surface-dim text-body-muted border-border-subtle hover:text-heading-dark'
          )}
        >
          isLoading: {isLoading ? 'true' : 'false'}
        </button>
      </div>

      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 p-2 rounded-xl bg-surface-sand border border-border-warm text-xs">
        {/* Variant Controls */}
        <div className="flex items-center gap-1">
          <span className="font-mono text-[10px] text-body-muted uppercase tracking-wider mr-1">Variant:</span>
          {(['primary', 'sand', 'dark', 'ghost'] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setSelectedVariant(v)}
              className={cn(
                'px-2 py-1 rounded-md text-[11px] font-sans font-medium transition-all cursor-pointer capitalize',
                selectedVariant === v
                  ? 'bg-pill-black text-white shadow-2xs font-semibold'
                  : 'text-body-muted hover:text-heading-dark hover:bg-white'
              )}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Size Controls */}
        <div className="flex items-center gap-1">
          <span className="font-mono text-[10px] text-body-muted uppercase tracking-wider mr-1">Size:</span>
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSelectedSize(s)}
              className={cn(
                'px-2 py-0.5 rounded-md text-[11px] font-mono transition-all cursor-pointer uppercase',
                selectedSize === s
                  ? 'bg-primary-orange text-white font-bold shadow-2xs'
                  : 'text-body-muted hover:text-heading-dark hover:bg-white'
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Live Component Preview Stage */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[radial-gradient(#E8E2D9_1px,transparent_1px)] [background-size:14px_14px] bg-surface-sand/50 rounded-2xl border border-border-warm/70 min-h-[150px] relative overflow-hidden">
        <div className="absolute top-2 right-2 text-[10px] font-mono text-body-muted/70">
          Preview Stage
        </div>
        <motion.button
          layout
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            'rounded-full font-sans font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm',
            selectedSize === 'sm' && 'px-4 py-2 text-xs',
            selectedSize === 'md' && 'px-6 py-2.5 text-sm',
            selectedSize === 'lg' && 'px-7 py-3.5 text-base',
            selectedVariant === 'primary' && 'bg-primary-orange text-white hover:bg-coral-hover shadow-primary-orange/20',
            selectedVariant === 'sand' && 'bg-white text-heading-dark border border-border-subtle hover:bg-surface-dim',
            selectedVariant === 'dark' && 'bg-pill-black text-white hover:bg-heading-dark',
            selectedVariant === 'ghost' && 'bg-transparent text-heading-dark hover:bg-surface-dim/80 border border-transparent hover:border-border-warm'
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-current" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
        <div className="mt-3 font-mono text-[11px] text-body-muted flex items-center gap-2">
          <span>props: variant=&quot;{selectedVariant}&quot;</span>
          <span>·</span>
          <span>size=&quot;{selectedSize}&quot;</span>
          {isLoading && (
            <>
              <span>·</span>
              <span className="text-primary-orange font-semibold">isLoading=true</span>
            </>
          )}
        </div>
      </div>

      {/* Dynamic Code Snippet Box */}
      <div className="mt-3 p-3 rounded-xl bg-pill-black text-white font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-inner">
        <div className="text-[#FF914D] overflow-x-auto">
          &lt;<span className="text-[#E4521B] font-bold">Button</span>{' '}
          <span className="text-[#61DAFB]">variant</span>=&quot;{selectedVariant}&quot;{' '}
          <span className="text-[#61DAFB]">size</span>=&quot;{selectedSize}&quot;
          {isLoading ? <span className="text-[#4EC9B0]"> isLoading</span> : ''}
          &gt;
          <span className="text-white">Explore Architecture</span>
          &lt;/<span className="text-[#E4521B] font-bold">Button</span>&gt;
        </div>
        <span className="text-[10px] text-[#27C93F] bg-[#27C93F]/10 px-2 py-0.5 rounded border border-[#27C93F]/20 shrink-0 self-start sm:self-center">
          TSX / Strict Props
        </span>
      </div>
    </div>
  )
}

function OrganisedStructureWorkstation() {
  const [activeFile, setActiveFile] = useState<string>('page.tsx')

  const codeSnippets: Record<string, { lines: Array<{ num: number; code: React.ReactNode }> }> = {
    'page.tsx': {
      lines: [
        { num: 1, code: <><span className="text-[#C586C0]">import</span> React <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">&apos;react&apos;</span></> },
        { num: 2, code: <><span className="text-[#C586C0]">import type</span> &#123; <span className="text-[#4EC9B0]">Metadata</span> &#125; <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">&apos;next&apos;</span></> },
        { num: 3, code: <><span className="text-[#C586C0]">import</span> &#123; <span className="text-[#E4521B] font-semibold">CleanImplementation</span> &#125; <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">&apos;@/components/website-dev&apos;</span></> },
        { num: 4, code: <></> },
        { num: 5, code: <><span className="text-[#C586C0]">export const</span> metadata: <span className="text-[#4EC9B0]">Metadata</span> = &#123;</> },
        { num: 6, code: <>&nbsp;&nbsp;title: <span className="text-[#CE9178]">&apos;Website Development | KodeToMates&apos;</span>,</> },
        { num: 7, code: <>&#125;</> },
        { num: 8, code: <></> },
        { num: 9, code: <><span className="text-[#C586C0]">export default function</span> <span className="text-[#DCDCAA]">WebsiteDevPage</span>() &#123;</> },
        { num: 10, code: <>&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> &lt;<span className="text-[#E4521B] font-semibold">CleanImplementation</span> /&gt;</> },
        { num: 11, code: <>&#125;</> },
      ],
    },
    'layout.tsx': {
      lines: [
        { num: 1, code: <><span className="text-[#C586C0]">export default function</span> <span className="text-[#DCDCAA]">MarketingLayout</span>(&#123; children &#125;) &#123;</> },
        { num: 2, code: <>&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> &lt;<span className="text-[#4FC1FF]">div</span> <span className="text-[#9CDCFE]">className</span>=<span className="text-[#CE9178]">&quot;min-h-screen&quot;</span>&gt;&#123;children&#125;&lt;/<span className="text-[#4FC1FF]">div</span>&gt;</> },
        { num: 3, code: <>&#125;</> },
      ],
    },
    'loading.tsx': {
      lines: [
        { num: 1, code: <><span className="text-[#C586C0]">import</span> &#123; <span className="text-[#E4521B]">SitePreloader</span> &#125; <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">&apos;@/components/ui&apos;</span></> },
        { num: 2, code: <><span className="text-[#C586C0]">export default function</span> <span className="text-[#DCDCAA]">Loading</span>() &#123;</> },
        { num: 3, code: <>&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> &lt;<span className="text-[#E4521B]">SitePreloader</span> /&gt;</> },
        { num: 4, code: <>&#125;</> },
      ],
    },
    'globals.css': {
      lines: [
        { num: 1, code: <><span className="text-[#C586C0]">@import</span> <span className="text-[#CE9178]">&quot;tailwindcss&quot;</span>;</> },
        { num: 2, code: <><span className="text-[#C586C0]">@theme</span> &#123;</> },
        { num: 3, code: <>&nbsp;&nbsp;<span className="text-[#9CDCFE]">--color-primary-orange</span>: <span className="text-[#CE9178]">#E4521B</span>;</> },
        { num: 4, code: <>&nbsp;&nbsp;<span className="text-[#9CDCFE]">--font-sans</span>: <span className="text-[#CE9178]">var(--font-jakarta)</span>;</> },
        { num: 5, code: <>&#125;</> },
      ],
    },
  }

  const currentSnippet = codeSnippets[activeFile] || codeSnippets['page.tsx']

  return (
    <div className="h-full flex flex-col justify-between rounded-xl overflow-hidden bg-[#181818] text-white font-mono shadow-md border border-black/20 select-none">
      {/* 1. VS Code Window Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#141210] border-b border-white/5 text-xs text-white/70">
        <div className="flex items-center gap-2">
          {/* Mac Traffic Lights */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <span className="text-[11px] text-white/90 font-sans font-medium flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-primary-orange" />
            <span>kodetomates-website — Visual Studio Code</span>
          </span>
        </div>
        <div className="text-[10px] text-white/40 hidden sm:inline">Next.js 16 App Router</div>
      </div>

      {/* 2. VS Code Tab Bar */}
      <div className="flex items-center bg-[#141210] border-b border-white/5 overflow-x-auto text-xs">
        {[
          { name: 'page.tsx', icon: '⚛️' },
          { name: 'layout.tsx', icon: '⚛️' },
          { name: 'loading.tsx', icon: '⌛' },
          { name: 'globals.css', icon: '🎨' },
        ].map((tab) => {
          const isActive = activeFile === tab.name
          return (
            <button
              key={tab.name}
              type="button"
              onClick={() => setActiveFile(tab.name)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 border-r border-white/5 transition-colors cursor-pointer text-[11px]',
                isActive
                  ? 'bg-[#1E1E1E] text-white border-t-2 border-t-primary-orange'
                  : 'text-white/50 hover:bg-white/5 hover:text-white/80'
              )}
            >
              <span>{tab.icon}</span>
              <span className={isActive ? 'font-semibold' : ''}>{tab.name}</span>
            </button>
          )
        })}
      </div>

      {/* 3. Breadcrumbs Bar */}
      <div className="flex items-center gap-1 px-3 py-1 bg-[#1A1A1A] border-b border-white/5 text-[10px] text-white/50 overflow-x-auto">
        <span>app</span>
        <span>&gt;</span>
        <span>(marketing)</span>
        <span>&gt;</span>
        <span>what-we-do</span>
        <span>&gt;</span>
        <span>website-dev</span>
        <span>&gt;</span>
        <span className="text-white/90 font-semibold">{activeFile}</span>
      </div>

      {/* 4. Main Body: Activity Bar + Explorer Tree + Code Editor */}
      <div className="flex-1 flex overflow-hidden min-h-[200px]">
        {/* Leftmost Activity Bar */}
        <div className="w-9 bg-[#121110] border-r border-white/5 flex flex-col items-center py-2.5 gap-3 shrink-0">
          <div className="text-white relative cursor-pointer" title="Explorer">
            <span className="absolute -left-2 top-0 bottom-0 w-0.5 bg-primary-orange rounded-r" />
            <FolderTree className="w-4 h-4 text-white" />
          </div>
          <Search className="w-4 h-4 text-white/40 hover:text-white/70 cursor-pointer" />
          <div className="relative cursor-pointer">
            <GitBranch className="w-4 h-4 text-white/40 hover:text-white/70" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary-orange" />
          </div>
        </div>

        {/* File Explorer Tree */}
        <div className="w-36 sm:w-44 bg-[#181818] border-r border-white/5 p-2 font-mono text-[11px] overflow-y-auto shrink-0 hidden xs:block">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2 px-1">
            Explorer
          </div>
          <div className="space-y-0.5 text-white/70 text-[11px]">
            <div className="flex items-center gap-1 text-white/90 font-medium">
              <span>▾</span>
              <span>📁 app</span>
            </div>
            <div className="pl-3 space-y-0.5">
              <div className="flex items-center gap-1 text-white/90">
                <span>▾</span>
                <span>📁 (marketing)</span>
              </div>
              <div className="pl-3 space-y-0.5">
                <div className="flex items-center gap-1 text-white/90">
                  <span>▾</span>
                  <span>📁 what-we-do</span>
                </div>
                <div className="pl-3 space-y-0.5">
                  <div className="flex items-center gap-1 text-primary-orange font-semibold">
                    <span>▾</span>
                    <span>📁 website-dev</span>
                  </div>
                  <div className="pl-3 space-y-0.5">
                    <button
                      type="button"
                      onClick={() => setActiveFile('page.tsx')}
                      className={cn(
                        'w-full text-left flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors cursor-pointer',
                        activeFile === 'page.tsx' ? 'bg-primary-orange/20 text-white font-semibold' : 'hover:bg-white/5 text-white/70'
                      )}
                    >
                      <span className="text-[#61DAFB]">⚛</span>
                      <span>page.tsx</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFile('layout.tsx')}
                      className={cn(
                        'w-full text-left flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors cursor-pointer',
                        activeFile === 'layout.tsx' ? 'bg-primary-orange/20 text-white font-semibold' : 'hover:bg-white/5 text-white/70'
                      )}
                    >
                      <span className="text-[#61DAFB]">⚛</span>
                      <span>layout.tsx</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFile('loading.tsx')}
                      className={cn(
                        'w-full text-left flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors cursor-pointer',
                        activeFile === 'loading.tsx' ? 'bg-primary-orange/20 text-white font-semibold' : 'hover:bg-white/5 text-white/70'
                      )}
                    >
                      <span className="text-amber-400">⌛</span>
                      <span>loading.tsx</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-3">
              <button
                type="button"
                onClick={() => setActiveFile('globals.css')}
                className={cn(
                  'w-full text-left flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors cursor-pointer',
                  activeFile === 'globals.css' ? 'bg-primary-orange/20 text-white font-semibold' : 'hover:bg-white/5 text-white/70'
                )}
              >
                <span className="text-sky-400">🎨</span>
                <span>globals.css</span>
              </button>
            </div>
            <div className="flex items-center gap-1 text-white/50 pt-1">
              <span>▸</span>
              <span>📁 components</span>
            </div>
            <div className="flex items-center gap-1 text-white/50">
              <span>▸</span>
              <span>📁 lib</span>
            </div>
            <div className="flex items-center gap-1 text-white/40 pl-3">
              <span>📄</span>
              <span>next.config.ts</span>
            </div>
          </div>
        </div>

        {/* Code Editor Body */}
        <div className="flex-1 bg-[#1E1E1E] p-2.5 sm:p-3 overflow-x-auto">
          <div className="space-y-0.5">
            {currentSnippet.lines.map((l) => (
              <div key={l.num} className="flex items-start gap-3 leading-5">
                <span className="w-5 text-right text-white/25 select-none shrink-0 text-[11px]">
                  {l.num}
                </span>
                <span className="text-white/90 whitespace-pre text-[11px] sm:text-xs">
                  {l.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. VS Code Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#121110] border-t border-white/5 text-[10px] text-white/60">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-primary-orange font-semibold">
            <GitBranch className="w-3 h-3" />
            <span>v1/keerthi_init</span>
          </span>
          <span className="text-[#27C93F] hidden sm:inline">✓ 0 Errors, 0 Warnings</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">UTF-8</span>
          <span>TypeScript 5.8</span>
          <span className="text-[#27C93F] font-semibold">Prettier ✓</span>
        </div>
      </div>
    </div>
  )
}

function ResponsiveTestingWorkstation() {
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')

  const devices = {
    mobile: { label: 'Mobile (iPhone 15)', width: '393px', height: '852px', dpr: '3.0x', icon: Smartphone, chassisClass: 'max-w-[210px] sm:max-w-[230px]' },
    tablet: { label: 'Tablet (iPad Mini)', width: '768px', height: '1024px', dpr: '2.0x', icon: Tablet, chassisClass: 'max-w-[320px] sm:max-w-[350px]' },
    desktop: { label: 'Desktop (MacBook Pro)', width: '1440px', height: '900px', dpr: '2.0x', icon: Laptop, chassisClass: 'w-full max-w-full' },
  }

  const currentDevice = devices[deviceMode]

  return (
    <div className="h-full flex flex-col justify-between select-none">
      {/* DevTools Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-border-warm/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center">
            <MonitorCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="font-sans font-bold text-xs text-heading-dark">Chrome DevTools Device Mode</div>
            <div className="font-mono text-[10px] text-body-muted">Viewport Responsive Simulator</div>
          </div>
        </div>

        {/* Device Mode Switcher */}
        <div className="flex items-center gap-1 bg-surface-dim p-1 rounded-xl border border-border-subtle">
          {(['mobile', 'tablet', 'desktop'] as const).map((mode) => {
            const Icon = devices[mode].icon
            const isActive = deviceMode === mode
            return (
              <button
                key={mode}
                type="button"
                onClick={() => setDeviceMode(mode)}
                className={cn(
                  'flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer capitalize',
                  isActive
                    ? 'bg-primary-orange text-white shadow-2xs'
                    : 'text-body-muted hover:text-heading-dark hover:bg-white'
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{mode}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* DevTools Dimension Specs Readout */}
      <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-lg bg-surface-sand border border-border-warm font-mono text-[11px] text-body-muted">
        <span>Dimensions: <strong className="text-heading-dark">{currentDevice.width} × {currentDevice.height}</strong></span>
        <span>DPR: <strong className="text-primary-orange">{currentDevice.dpr}</strong></span>
        <span className="text-[#059669] font-semibold hidden sm:inline">60 FPS · 0 Layout Shift</span>
      </div>

      {/* Simulated Device Chassis Stage */}
      <div className="flex-1 flex items-center justify-center p-3 bg-surface-dim/40 rounded-2xl border border-border-warm/70 min-h-[160px] overflow-hidden">
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'w-full bg-white rounded-2xl border-2 border-pill-black shadow-md overflow-hidden flex flex-col',
            currentDevice.chassisClass
          )}
        >
          {/* Chassis Top Bar with Camera Notch / Speaker */}
          <div className="bg-pill-black text-white px-3 py-1 flex items-center justify-between text-[9px] font-mono">
            <span>9:41</span>
            <div className="w-12 h-2 rounded-full bg-white/20" />
            <span>100%</span>
          </div>

          {/* Mini Simulated Website Content */}
          <div className="p-3 bg-surface-sand space-y-2">
            {/* Mini Navigation */}
            <div className="flex items-center justify-between pb-2 border-b border-border-warm">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary-orange" />
                <span className="font-sans font-bold text-[10px] text-heading-dark">KodeToMates</span>
              </div>
              <span className="text-[9px] font-sans font-bold bg-primary-orange text-white px-1.5 py-0.5 rounded-full">
                Build
              </span>
            </div>

            {/* Mini Hero */}
            <div className="text-center py-2">
              <div className="font-sans font-extrabold text-[11px] leading-tight text-heading-dark tracking-tight">
                WEBSITE DEVELOPMENT.
              </div>
              <div className="font-sans text-[8px] text-body-muted mt-0.5 line-clamp-1">
                Fast, responsive, and bulletproof Next.js engineering.
              </div>
            </div>

            {/* Mini Cards Responsive Flow */}
            <div className={cn(
              'gap-1.5',
              deviceMode === 'mobile' ? 'grid grid-cols-1' : deviceMode === 'tablet' ? 'grid grid-cols-2' : 'grid grid-cols-3'
            )}>
              <div className="p-1.5 rounded-lg bg-white border border-border-warm text-[8px] font-sans">
                <div className="font-bold text-heading-dark">01. Modular UI</div>
                <div className="text-body-muted">Atomic design tokens</div>
              </div>
              {deviceMode !== 'mobile' && (
                <div className="p-1.5 rounded-lg bg-white border border-border-warm text-[8px] font-sans">
                  <div className="font-bold text-heading-dark">02. Next.js 16</div>
                  <div className="text-body-muted">App router speed</div>
                </div>
              )}
              {deviceMode === 'desktop' && (
                <div className="p-1.5 rounded-lg bg-white border border-border-warm text-[8px] font-sans">
                  <div className="font-bold text-heading-dark">03. Sub-Second</div>
                  <div className="text-body-muted">Edge optimized</div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resolution Breakpoint Rulers */}
      <div className="mt-3 p-2.5 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-primary-orange text-[11px]">Rulers: sm (640px) · md (768px) · lg (1024px) · xl (1280px)</span>
        <span className="text-[10px] text-[#27C93F] font-bold">Touch Bound ≥ 48px</span>
      </div>
    </div>
  )
}

function PerformanceWorkstation() {
  const scores = [
    { label: 'Performance', score: 100 },
    { label: 'Accessibility', score: 100 },
    { label: 'Best Practices', score: 100 },
    { label: 'SEO Rank', score: 100 },
  ]

  const metrics = [
    { label: 'LCP (Largest Contentful Paint)', value: '0.58s', target: '< 2.5s', status: 'Fast' },
    { label: 'INP (Interaction to Next Paint)', value: '18ms', target: '< 200ms', status: 'Fast' },
    { label: 'CLS (Cumulative Layout Shift)', value: '0.00', target: '< 0.1', status: 'Zero Shift' },
    { label: 'FCP (First Contentful Paint)', value: '0.42s', target: '< 1.8s', status: 'Fast' },
    { label: 'TTFB (Time to First Byte)', value: '44ms', target: 'Edge CDN', status: 'Fast' },
  ]

  return (
    <div className="h-full flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-border-warm/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center">
            <Gauge className="w-4 h-4" />
          </div>
          <div>
            <div className="font-sans font-bold text-xs text-heading-dark">Google Lighthouse 10.0 Audit</div>
            <div className="font-mono text-[10px] text-body-muted">Production Build Telemetry</div>
          </div>
        </div>
        <span className="font-mono text-[10px] font-bold text-[#059669] bg-[#059669]/10 px-2.5 py-1 rounded-full border border-[#059669]/20">
          ✓ Passed Core Web Vitals
        </span>
      </div>

      {/* 4 Perfect 100 SVG Rings */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-1">
        {scores.map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-2xl bg-surface-sand border border-border-warm flex flex-col items-center text-center shadow-2xs hover:border-[#059669]/40 transition-colors"
          >
            <div className="relative w-14 h-14 flex items-center justify-center mb-1.5">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 52 52">
                <circle
                  cx="26"
                  cy="26"
                  r="22"
                  className="stroke-border-subtle fill-none stroke-[4]"
                />
                <circle
                  cx="26"
                  cy="26"
                  r="22"
                  className="stroke-[#059669] fill-none stroke-[4] transition-all duration-1000 ease-out"
                  strokeDasharray="138.2"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute font-mono font-bold text-base text-[#059669]">
                {item.score}
              </span>
            </div>
            <span className="font-sans font-bold text-[11px] text-heading-dark leading-tight">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Core Web Vitals Real-Time Telemetry Row */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 mt-2">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-2 rounded-xl bg-white border border-border-warm text-center shadow-2xs">
            <div className="font-mono text-xs font-bold text-[#059669]">{m.value}</div>
            <div className="font-sans text-[9px] text-body-muted truncate">{m.label.split(' ')[0]}</div>
            <div className="font-mono text-[8px] text-[#059669]/80 font-semibold">{m.status}</div>
          </div>
        ))}
      </div>

      {/* Bottom Status */}
      <div className="mt-3 p-2.5 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#27C93F] text-[11px]">✓ &lt; 78KB First Load JS Bundle · AVIF Image Pipeline</span>
        <span className="text-[10px] text-body-muted">100% Green Zone</span>
      </div>
    </div>
  )
}

function AccessibilityWorkstation() {
  const [tabMode, setTabMode] = useState<'voiceover' | 'landmarks'>('voiceover')

  return (
    <div className="h-full flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-border-warm/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center">
            <Accessibility className="w-4 h-4" />
          </div>
          <div>
            <div className="font-sans font-bold text-xs text-heading-dark">Assistive Tech &amp; Landmarks</div>
            <div className="font-mono text-[10px] text-body-muted">WCAG 2.1 AAA Accessibility</div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-surface-dim p-1 rounded-xl border border-border-subtle">
          <button
            type="button"
            onClick={() => setTabMode('voiceover')}
            className={cn(
              'px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-1',
              tabMode === 'voiceover'
                ? 'bg-primary-orange text-white shadow-2xs'
                : 'text-body-muted hover:text-heading-dark'
            )}
          >
            <Volume2 className="w-3 h-3" />
            <span>VoiceOver</span>
          </button>
          <button
            type="button"
            onClick={() => setTabMode('landmarks')}
            className={cn(
              'px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-1',
              tabMode === 'landmarks'
                ? 'bg-primary-orange text-white shadow-2xs'
                : 'text-body-muted hover:text-heading-dark'
            )}
          >
            <Code className="w-3 h-3" />
            <span>DOM Tree</span>
          </button>
        </div>
      </div>

      {/* Content based on tab */}
      {tabMode === 'voiceover' ? (
        <div className="flex-1 flex flex-col justify-center space-y-3 p-4 rounded-2xl bg-pill-black text-white font-mono shadow-inner my-1">
          <div className="flex items-center justify-between text-body-muted text-[11px] pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-orange animate-ping" />
              <span className="text-white/80 font-sans font-semibold text-xs">VoiceOver Spoken Output</span>
            </div>
            <span className="text-[10px] bg-white/10 text-primary-orange px-2 py-0.5 rounded-full font-bold">
              aria-live=&quot;polite&quot;
            </span>
          </div>

          {/* Sound waves visualization */}
          <div className="flex items-center gap-1 py-1">
            <span className="w-1 h-3 rounded-full bg-primary-orange animate-pulse" />
            <span className="w-1 h-6 rounded-full bg-primary-orange animate-pulse delay-75" />
            <span className="w-1 h-4 rounded-full bg-primary-orange animate-pulse delay-150" />
            <span className="w-1 h-8 rounded-full bg-primary-orange animate-pulse" />
            <span className="w-1 h-5 rounded-full bg-primary-orange animate-pulse delay-100" />
            <span className="w-1 h-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-[11px] text-white/50 ml-2">Audio waveform active</span>
          </div>

          {/* Spoken Quote */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-[13px] leading-relaxed text-[#FF914D]">
            &ldquo;Heading level 2, &apos;Good design needs a solid foundation&apos;. Landmark: main. 7 interactive tabs available. Use left and right arrow keys to navigate.&rdquo;
          </div>
        </div>
      ) : (
        <div className="flex-1 space-y-1.5 py-1">
          <div className="p-2 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
            <span className="text-primary-orange font-bold">&lt;header role=&quot;banner&quot;&gt;</span>
            <span className="text-body-muted text-[11px]">Sticky Navigation · Skip Link</span>
          </div>
          <div className="p-2 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
            <span className="text-primary-orange font-bold">&lt;main id=&quot;main-content&quot;&gt;</span>
            <span className="text-body-muted text-[11px]">Skip-to-Content Target Landmark</span>
          </div>
          <div className="p-2 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
            <span className="text-primary-orange font-bold">&lt;nav aria-label=&quot;Engineering Pillars&quot;&gt;</span>
            <span className="text-body-muted text-[11px]">ARIA Tablist with Key Navigation</span>
          </div>
          <div className="p-2 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
            <span className="text-primary-orange font-bold">&lt;section aria-labelledby=&quot;...&quot;&gt;</span>
            <span className="text-body-muted text-[11px]">Indexed Headings Hierarchy</span>
          </div>
        </div>
      )}

      {/* Verification Bar */}
      <div className="mt-3 p-2.5 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#27C93F] text-[11px]">✓ Contrast Ratio 14.2:1 (Exceeds WCAG AAA)</span>
        <span className="text-[10px] text-body-muted">2px Coral Focus Rings</span>
      </div>
    </div>
  )
}

function TestingReviewWorkstation() {
  const [isRunning, setIsRunning] = useState(false)

  const handleRunTests = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
    }, 1800)
  }

  const testSuites = [
    { file: 'tests/e2e/responsive-navigation.spec.ts', assertions: '4 passed', time: '340ms' },
    { file: 'tests/components/DesignSystem.test.tsx', assertions: '8 passed', time: '112ms' },
    { file: 'tests/a11y/axe-core-audit.spec.ts', assertions: '0 violations', time: '198ms' },
    { file: 'tests/performance/core-web-vitals.test.ts', assertions: 'Sub-second LCP', time: '84ms' },
    { file: 'tests/forms/contact-validation.spec.ts', assertions: '6 passed', time: '145ms' },
  ]

  return (
    <div className="h-full flex flex-col justify-between select-none">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-border-warm/80">
        <div className="flex items-center gap-2">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <span className="font-mono text-xs font-bold text-primary-orange">vitest --run &amp; playwright test</span>
        </div>

        <button
          type="button"
          onClick={handleRunTests}
          disabled={isRunning}
          className="text-xs font-sans font-semibold text-white bg-primary-orange hover:bg-coral-hover px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95 disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Testing (5 Suites)...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Run Automated QA</span>
            </>
          )}
        </button>
      </div>

      {/* Test Suites Runner List */}
      <div className="flex-1 space-y-1.5 py-1">
        {testSuites.map((suite, idx) => (
          <div
            key={idx}
            className="p-2 rounded-xl bg-surface-sand border border-border-warm flex items-center justify-between font-mono text-xs shadow-2xs"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className={cn('text-xs shrink-0', isRunning ? 'animate-pulse text-amber-500' : 'text-[#059669]')}>
                {isRunning ? '○' : '✓'}
              </span>
              <span className="text-heading-dark truncate text-[11px] sm:text-xs">{suite.file}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-bold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">
                {suite.assertions}
              </span>
              <span className="text-[10px] text-body-muted hidden sm:inline">{suite.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Box */}
      <div className="mt-3 p-2.5 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#27C93F] text-[11px]">
          {isRunning ? 'Running automated test suites...' : '✓ 5 Suites Passed · 24 Tests (879ms)'}
        </span>
        <span className="text-[10px] text-body-muted">Coverage: 98.4%</span>
      </div>
    </div>
  )
}

function DocumentationHandoffWorkstation() {
  const [activeTab, setActiveTab] = useState<'quickstart' | 'env' | 'specs'>('quickstart')
  const [copied, setCopied] = useState(false)
  const setupCmd = 'git clone https://github.com/kodetomates/website.git && pnpm install && pnpm dev'

  const handleCopy = (text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="h-full flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-border-warm/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <div className="font-sans font-bold text-xs text-heading-dark">README.md · Developer Portal</div>
            <div className="font-mono text-[10px] text-body-muted">Production Handoff Kit</div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-surface-dim p-1 rounded-xl border border-border-subtle text-xs">
          {[
            { id: 'quickstart', label: 'Quickstart' },
            { id: 'env', label: '.env.example' },
            { id: 'specs', label: 'Specs' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as 'quickstart' | 'env' | 'specs')}
              className={cn(
                'px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer',
                activeTab === tab.id
                  ? 'bg-primary-orange text-white shadow-2xs'
                  : 'text-body-muted hover:text-heading-dark'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 my-1">
        {activeTab === 'quickstart' && (
          <div className="space-y-2.5">
            <div className="rounded-xl bg-pill-black text-white p-3 font-mono text-xs space-y-2 shadow-inner">
              <div className="flex items-center justify-between text-body-muted text-[11px] pb-1.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-primary-orange" />
                  <span>Terminal Setup</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(setupCmd)}
                  className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-[#27C93F]" /> : <Copy className="w-3 h-3" />}
                  <span className="text-[10px]">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-[#FF914D] overflow-x-auto py-1 text-[11px] sm:text-xs">
                $ {setupCmd}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm">
                <div className="font-sans font-bold text-xs text-heading-dark">Zero Setup Drift</div>
                <p className="font-sans text-[11px] text-body-muted mt-0.5">Deterministic lockfile with pnpm</p>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm">
                <div className="font-sans font-bold text-xs text-heading-dark">Turbopack Enabled</div>
                <p className="font-sans text-[11px] text-body-muted mt-0.5">Sub-second hot-module replacement</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'env' && (
          <div className="rounded-xl bg-pill-black text-white p-3 font-mono text-[11px] sm:text-xs space-y-1.5 shadow-inner">
            <div className="text-white/40 pb-1 border-b border-white/10 flex items-center justify-between">
              <span>.env.production</span>
              <span className="text-primary-orange font-bold">Encrypted Keys</span>
            </div>
            <div className="text-[#9CDCFE]">NEXT_PUBLIC_APP_URL=<span className="text-[#CE9178]">&quot;https://kodetomates.com&quot;</span></div>
            <div className="text-[#9CDCFE]">DATABASE_URL=<span className="text-[#CE9178]">&quot;postgresql://postgres:***@edge:5432/prod&quot;</span></div>
            <div className="text-[#9CDCFE]">RESEND_API_KEY=<span className="text-[#CE9178]">&quot;re_123456789_sec_***&quot;</span></div>
            <div className="text-[#9CDCFE]">ANALYTICS_ID=<span className="text-[#CE9178]">&quot;kt_live_analytics_v1&quot;</span></div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="rounded-xl bg-pill-black text-white p-3 font-mono text-[11px] sm:text-xs space-y-1 shadow-inner">
            <div className="text-white/40 pb-1 border-b border-white/10">types/components.d.ts</div>
            <div className="text-[#C586C0]">export interface <span className="text-[#4EC9B0]">ButtonProps</span> &#123;</div>
            <div className="pl-3 text-white/80">variant?: <span className="text-[#CE9178]">&apos;primary&apos; | &apos;sand&apos; | &apos;dark&apos; | &apos;ghost&apos;</span></div>
            <div className="pl-3 text-white/80">size?: <span className="text-[#CE9178]">&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;</span></div>
            <div className="pl-3 text-white/80">isLoading?: <span className="text-[#4EC9B0]">boolean</span></div>
            <div className="text-[#C586C0]">&#125;</div>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="mt-3 p-2.5 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#27C93F] text-[11px]">✓ Production-Grade Repository Handoff</span>
        <span className="text-[10px] text-primary-orange font-bold">Ready for Your Team</span>
      </div>
    </div>
  )
}

// ============================================================================
// Main CleanImplementation Section Component
// ============================================================================

export function CleanImplementation() {
  const shouldReduceMotion = useReducedMotion()
  const [activePillarIndex, setActivePillarIndex] = useState(0)
  const [direction, setDirection] = useState<number>(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)
  const [isInView, setIsInView] = useState<boolean>(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const activePillar = PILLARS[activePillarIndex]
  const IconComponent = activePillar.icon

  // Track viewport visibility to only auto-cycle when user is viewing this section
  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-switch between containers smoothly until the user clicks any filter or control
  useEffect(() => {
    if (!isAutoPlaying || !isInView || shouldReduceMotion) return

    const timer = setTimeout(() => {
      setDirection(1)
      setActivePillarIndex((prev) => (prev + 1) % PILLARS.length)
    }, 3800)

    return () => clearTimeout(timer)
  }, [activePillarIndex, isAutoPlaying, isInView, shouldReduceMotion])

  const handlePillarSelect = (newIndex: number) => {
    setIsAutoPlaying(false)
    if (newIndex === activePillarIndex) return
    setDirection(newIndex > activePillarIndex ? 1 : -1)
    setActivePillarIndex(newIndex)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setActivePillarIndex((prev) => (prev === 0 ? PILLARS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setActivePillarIndex((prev) => (prev === PILLARS.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return
    const distance = touchStartX - touchEndX
    const minSwipeDistance = 45
    if (distance > minSwipeDistance) {
      handleNext()
    } else if (distance < -minSwipeDistance) {
      handlePrev()
    }
    setTouchStartX(null)
    setTouchEndX(null)
  }

  // Horizontal slide variants for carousel container
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section
      ref={sectionRef}
      id="clean-implementation"
      className="relative w-full bg-white text-heading-dark border-t border-border-warm scroll-mt-24 pt-16 sm:pt-20 pb-16 sm:pb-20 selection:bg-primary-orange/20 selection:text-primary-orange overflow-hidden"
      aria-labelledby="clean-implementation-heading"
    >
      {/* Subtle Warm Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(228,82,27,0.06),transparent)] pointer-events-none" />

      {/* 1. Section Header: Home Page Typography Standards */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 text-center mb-10 sm:mb-14">
        {/* Main Section Headline with Slit Reveal Animation */}
        <div className="max-w-3xl mx-auto">
          <SlitHeading
            id="clean-implementation-heading"
            align="center"
            lines={['<span style="color: var(--color-primary-orange, #E4521B)">Good design needs a solid foundation.</span>']}
            slit={0}
            textColor="var(--color-primary-orange, #E4521B)"
            dotColor="#E4521B"
            className="text-[clamp(2.1rem,4.4vw,4rem)] leading-[1.08] tracking-[-0.03em]"
          />
        </div>

        {/* Signature Home Page Down Line with Dot */}
        <BrandAccentLine align="center" className="my-3.5" />

        {/* 7-Pillar Quick Switcher Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 select-none">
          {PILLARS.map((p, idx) => {
            const isActive = activePillarIndex === idx
            const PillarIcon = p.icon
            return (
              <button
                key={p.id}
                ref={(el) => {
                  buttonRefs.current[p.id] = el
                }}
                type="button"
                onClick={() => handlePillarSelect(idx)}
                aria-pressed={isActive}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-semibold transition-all duration-300 focus:outline-none cursor-pointer flex items-center gap-1.5 shadow-2xs',
                  isActive
                    ? 'bg-pill-black text-white shadow-md shadow-black/10 scale-105 ring-2 ring-primary-orange/30'
                    : 'bg-surface-sand text-body-dark hover:bg-surface-dim hover:text-heading-dark border border-border-warm'
                )}
              >
                <PillarIcon className={cn('w-3.5 h-3.5 transition-colors', isActive ? 'text-primary-orange' : 'text-body-muted')} />
                <span className={cn('text-[10px] font-mono', isActive ? 'text-primary-orange font-bold' : 'text-body-muted')}>
                  {p.number}
                </span>
                <span>{p.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. Interactive Engineering Workstation (Dual-Column Studio Stage - Carousel) */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Left Side Carousel Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous container"
          className="absolute left-1 sm:left-2 lg:-left-3 xl:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-primary-orange text-heading-dark hover:text-white border border-border-warm hover:border-primary-orange shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center active:scale-95 group focus:outline-none focus:ring-2 focus:ring-primary-orange/40"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Right Side Carousel Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next container"
          className="absolute right-1 sm:right-2 lg:-right-3 xl:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-primary-orange text-heading-dark hover:text-white border border-border-warm hover:border-primary-orange shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center active:scale-95 group focus:outline-none focus:ring-2 focus:ring-primary-orange/40"
        >
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Carousel Slide Card Container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-[32px] bg-surface-sand border border-border-warm p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activePillar.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
            >
              {/* Left Column: Deep Architectural Context for Selected Pillar */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-warm text-primary-orange text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                      <span>{activePillar.number} / 07</span>
                      <span className="w-1 h-1 rounded-full bg-primary-orange" />
                      <span className="font-sans font-semibold">{activePillar.pill}</span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white border border-border-warm flex items-center justify-center text-primary-orange shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-heading-dark tracking-[-0.03em] mb-3">
                    {activePillar.title}
                  </h3>

                  <p className="font-sans font-medium text-base text-heading-dark/90 leading-snug mb-3">
                    {activePillar.summary}
                  </p>

                  <p className="font-sans text-[14.5px] text-body-dark leading-relaxed mb-6 font-normal">
                    {activePillar.description}
                  </p>
                </div>

                {/* Verified Production Deliverables Checklist */}
                <div className="pt-5 border-t border-border-warm space-y-2.5">
                  <span className="font-mono text-[11px] font-bold text-body-muted uppercase tracking-wider block mb-1">
                    Guaranteed Deliverables
                  </span>
                  {activePillar.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-heading-dark font-sans leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Interactive Visual Simulation Workstation */}
              <div className="lg:col-span-6 rounded-2xl bg-white border border-border-warm p-4 sm:p-6 shadow-sm flex flex-col justify-between min-h-[440px] sm:min-h-[460px] lg:min-h-[480px] overflow-hidden">
                <div className="h-full flex flex-col justify-between">
                  {activePillar.id === 'reusable-components' && <ReusableComponentsWorkstation />}
                  {activePillar.id === 'organised-code-structure' && <OrganisedStructureWorkstation />}
                  {activePillar.id === 'responsive-implementation' && <ResponsiveTestingWorkstation />}
                  {activePillar.id === 'performance-awareness' && <PerformanceWorkstation />}
                  {activePillar.id === 'semantic-accessibility' && <AccessibilityWorkstation />}
                  {activePillar.id === 'testing-review' && <TestingReviewWorkstation />}
                  {activePillar.id === 'documentation-handoff' && <DocumentationHandoffWorkstation />}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Control & Dots Bar */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Previous Button on Bottom */}
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold bg-white border border-border-warm text-body-dark hover:text-primary-orange hover:border-primary-orange/40 transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Pillar</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {PILLARS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePillarSelect(idx)}
                aria-label={`Go to pillar ${idx + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 cursor-pointer',
                  activePillarIndex === idx
                    ? 'w-6 bg-primary-orange'
                    : 'w-2 bg-border-warm hover:bg-body-muted'
                )}
              />
            ))}
          </div>

          {/* Next Button on Bottom */}
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold bg-white border border-border-warm text-body-dark hover:text-primary-orange hover:border-primary-orange/40 transition-colors shadow-2xs cursor-pointer active:scale-95"
          >
            <span className="hidden sm:inline">Next Pillar</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>


      {/* 4. Bottom Conversion Prompt */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 mt-12 sm:mt-16">
        <div className="rounded-[28px] bg-surface-sand border border-border-warm p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-primary-orange/30 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary-orange text-xs font-sans font-bold uppercase tracking-[0.14em] mb-2.5">
                <span>Production-Ready Engineering</span>
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-heading-dark tracking-[-0.02em] mb-2">
                Need a Codebase You Can Scale for Years?
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] text-body-muted leading-relaxed">
                Whether deploying custom web portals, high-converting marketing sites, or scalable web platforms, we engineer clean, accessible, and high-performance code that lasts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary-orange hover:bg-pill-black text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Talk with an Engineer</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-surface-dim text-heading-dark border border-border-subtle font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Open Repositories</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CleanImplementation

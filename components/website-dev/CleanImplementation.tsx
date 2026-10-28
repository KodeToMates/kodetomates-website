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
  const [selectedVariant, setSelectedVariant] = useState<'primary' | 'sand' | 'dark'>('primary')

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Component Config Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-border-warm/80">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs font-bold text-primary-orange">&lt;Button /&gt;</span>
          <span className="text-xs text-body-muted">Interactive Component Sandbox</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-surface-dim p-1 rounded-lg border border-border-subtle">
            <button
              onClick={() => setSelectedVariant('primary')}
              className={cn(
                'px-2.5 py-1 rounded text-xs font-sans font-semibold transition-all cursor-pointer',
                selectedVariant === 'primary' ? 'bg-primary-orange text-white shadow-2xs' : 'text-body-muted'
              )}
            >
              Primary
            </button>
            <button
              onClick={() => setSelectedVariant('sand')}
              className={cn(
                'px-2.5 py-1 rounded text-xs font-sans font-semibold transition-all cursor-pointer',
                selectedVariant === 'sand' ? 'bg-surface-sand text-heading-dark shadow-2xs' : 'text-body-muted'
              )}
            >
              Sand
            </button>
            <button
              onClick={() => setSelectedVariant('dark')}
              className={cn(
                'px-2.5 py-1 rounded text-xs font-sans font-semibold transition-all cursor-pointer',
                selectedVariant === 'dark' ? 'bg-pill-black text-white shadow-2xs' : 'text-body-muted'
              )}
            >
              Dark
            </button>
          </div>
        </div>
      </div>

      {/* Live Component Stage */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-surface-sand/70 rounded-2xl border border-border-warm/70 min-h-[160px]">
        <motion.button
          layout
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            'px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm',
            selectedVariant === 'primary' && 'bg-primary-orange text-white hover:bg-coral-hover shadow-primary-orange/20',
            selectedVariant === 'sand' && 'bg-white text-heading-dark border border-border-subtle hover:bg-surface-dim',
            selectedVariant === 'dark' && 'bg-pill-black text-white hover:bg-heading-dark'
          )}
        >
          <span>Explore Architecture</span>
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
        <span className="mt-3 font-mono text-[11px] text-body-muted">
          variant=&quot;{selectedVariant}&quot; · size=&quot;default&quot; · rounded=&quot;full&quot;
        </span>
      </div>

      {/* Code Snippet Box */}
      <div className="mt-4 p-3 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#FF914D]">
          &lt;Button <span className="text-[#61DAFB]">variant</span>=&quot;{selectedVariant}&quot;&gt;
          <span className="text-white">Explore Architecture</span>
          &lt;/Button&gt;
        </span>
        <span className="text-[10px] text-body-muted bg-white/10 px-2 py-0.5 rounded">
          TSX / Typed
        </span>
      </div>
    </div>
  )
}

function OrganisedStructureWorkstation() {
  const [activeFolder, setActiveFolder] = useState<string>('components')

  const folders = [
    { id: 'app', path: 'app/(marketing)', desc: 'Next.js App Router pages, metadata, and nested layouts' },
    { id: 'components', path: 'components/ui', desc: 'Atomic design tokens, loaders, and shared UI primitives' },
    { id: 'lib', path: 'lib/constants.ts', desc: 'Centralized design tokens, brand colors, and shared utilities' },
    { id: 'hooks', path: 'hooks/use-media.ts', desc: 'Custom viewport hooks and reduced-motion detectors' },
  ]

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-warm/80">
        <span className="font-mono text-xs font-bold text-primary-orange">Architecture Directory Tree</span>
        <span className="text-xs text-body-muted">Next.js 16 App Router Structure</span>
      </div>

      <div className="flex-1 space-y-2 py-1">
        {folders.map((f) => {
          const isActive = activeFolder === f.id
          return (
            <div
              key={f.id}
              onClick={() => setActiveFolder(f.id)}
              className={cn(
                'p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none',
                isActive
                  ? 'bg-surface-sand border-primary-orange/40 shadow-2xs'
                  : 'bg-white border-border-warm hover:border-border-subtle'
              )}
            >
              <div
                className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5',
                  isActive ? 'bg-primary-orange text-white' : 'bg-surface-dim text-body-muted'
                )}
              >
                <FolderTree className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-heading-dark truncate">
                    {f.path}
                  </span>
                  {isActive && (
                    <span className="text-[10px] font-sans font-bold text-primary-orange bg-primary-orange/10 px-2 py-0.5 rounded-full">
                      Selected
                    </span>
                  )}
                </div>
                <p className="font-sans text-[12px] text-body-muted mt-0.5 truncate">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-3 p-3 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#27C93F]">✓ Single Responsibility Pattern Verified</span>
        <span className="text-[10px] text-body-muted">Zero Circular Dependencies</span>
      </div>
    </div>
  )
}

function ResponsiveTestingWorkstation() {
  const browsers = [
    { name: 'Google Chrome', engine: 'Blink Engine', status: '60 FPS · 100% Passed' },
    { name: 'Apple Safari', engine: 'WebKit iOS/macOS', status: '60 FPS · 100% Passed' },
    { name: 'Mozilla Firefox', engine: 'Gecko Engine', status: '60 FPS · 100% Passed' },
    { name: 'Mobile Handsets', engine: 'Android / iPhone', status: 'Touch Bounds Verified' },
  ]

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-warm/80">
        <span className="font-mono text-xs font-bold text-primary-orange">Cross-Engine Verification</span>
        <span className="text-xs text-body-muted">Multi-Device Test Matrix</span>
      </div>

      <div className="flex-1 space-y-2 py-1">
        {browsers.map((b, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-surface-sand/80 border border-border-warm flex items-center justify-between gap-3 shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-border-warm flex items-center justify-center text-primary-orange">
                <MonitorCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-sans font-bold text-xs text-heading-dark">{b.name}</div>
                <div className="font-mono text-[11px] text-body-muted">{b.engine}</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#059669] bg-[#059669]/10 px-2.5 py-1 rounded-full border border-[#059669]/20">
              <Check className="w-3 h-3" />
              <span>{b.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 p-3 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-primary-orange">Breakpoints: 375px · 768px · 1024px · 1440px</span>
        <span className="text-[10px] text-body-muted">No Horizontal Scroll</span>
      </div>
    </div>
  )
}

function PerformanceWorkstation() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-warm/80">
        <span className="font-mono text-xs font-bold text-primary-orange">Google Lighthouse Audit</span>
        <span className="text-xs text-body-muted">Production Build Metrics</span>
      </div>

      {/* 4 Perfect 100 Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-auto py-2">
        {[
          { label: 'Performance', score: '100' },
          { label: 'Accessibility', score: '100' },
          { label: 'Best Practices', score: '100' },
          { label: 'SEO Rank', score: '100' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-2xl bg-surface-sand border border-border-warm flex flex-col items-center text-center shadow-2xs"
          >
            <div className="w-12 h-12 rounded-full border-2 border-[#059669] bg-[#059669]/10 flex items-center justify-center text-[#059669] font-mono font-bold text-lg mb-1.5">
              {item.score}
            </div>
            <span className="font-sans font-bold text-xs text-heading-dark">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Core Web Vitals Row */}
      <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-border-warm/80">
        <div className="p-2.5 rounded-xl bg-white border border-border-warm text-center">
          <div className="font-mono text-xs font-bold text-primary-orange">0.58s</div>
          <div className="font-sans text-[10px] text-body-muted uppercase tracking-wider">LCP Speed</div>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-border-warm text-center">
          <div className="font-mono text-xs font-bold text-[#059669]">22ms</div>
          <div className="font-sans text-[10px] text-body-muted uppercase tracking-wider">INP Latency</div>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-border-warm text-center">
          <div className="font-mono text-xs font-bold text-[#059669]">0.00</div>
          <div className="font-sans text-[10px] text-body-muted uppercase tracking-wider">CLS Shift</div>
        </div>
      </div>
    </div>
  )
}

function AccessibilityWorkstation() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-warm/80">
        <span className="font-mono text-xs font-bold text-primary-orange">Semantic DOM Landmarks</span>
        <span className="text-xs text-body-muted">WCAG 2.1 AA Architecture</span>
      </div>

      <div className="space-y-2 py-1">
        <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
          <span className="text-primary-orange font-bold">&lt;header role=&quot;banner&quot;&gt;</span>
          <span className="text-body-muted text-[11px]">Sticky Glass Navigation</span>
        </div>
        <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
          <span className="text-primary-orange font-bold">&lt;main id=&quot;main-content&quot;&gt;</span>
          <span className="text-body-muted text-[11px]">Skip-to-Content Target</span>
        </div>
        <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
          <span className="text-primary-orange font-bold">&lt;section aria-labelledby=&quot;...&quot;&gt;</span>
          <span className="text-body-muted text-[11px]">Indexed Headings Hierarchy</span>
        </div>
        <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm font-mono text-xs flex items-center justify-between">
          <span className="text-primary-orange font-bold">&lt;button aria-expanded=&quot;true&quot;&gt;</span>
          <span className="text-body-muted text-[11px]">Screen-Reader Focus Traps</span>
        </div>
      </div>

      <div className="mt-3 p-3 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#27C93F]">✓ Keyboard Tab, Enter, Esc Verified</span>
        <span className="text-[10px] text-body-muted">Visible Focus Rings (2px)</span>
      </div>
    </div>
  )
}

function TestingReviewWorkstation() {
  const [testsRan, setTestsRan] = useState(false)

  const handleRunTests = () => {
    setTestsRan(true)
    setTimeout(() => setTestsRan(false), 2400)
  }

  const testItems = [
    'Route Navigation & Deep Links',
    'Interactive Form Input Validation',
    'Zero Broken Assets or Dead Anchors',
    'Modal Focus Traps & ESC Keys',
    'Viewport Layout Shift Tolerances',
  ]

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-warm/80">
        <span className="font-mono text-xs font-bold text-primary-orange">Pre-Delivery Test Suite</span>
        <button
          onClick={handleRunTests}
          className="text-xs font-sans font-semibold text-primary-orange hover:text-coral-hover bg-primary-orange/10 px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <Play className={cn('w-3 h-3', testsRan && 'animate-spin')} />
          <span>{testsRan ? 'Testing...' : 'Run Automated QA'}</span>
        </button>
      </div>

      <div className="space-y-1.5 py-1">
        {testItems.map((item, idx) => (
          <div
            key={idx}
            className="p-2 rounded-lg bg-surface-sand border border-border-warm flex items-center justify-between font-mono text-xs"
          >
            <span className="text-heading-dark">{item}</span>
            <span className="inline-flex items-center gap-1 text-[#059669] font-bold text-[11px]">
              <Check className="w-3 h-3" />
              <span>PASSED</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 p-3 rounded-xl bg-pill-black text-white font-mono text-xs flex items-center justify-between">
        <span className="text-[#059669]">✓ All 5 Production Test Suites Passed</span>
        <span className="text-[10px] text-body-muted">100% Clean Build</span>
      </div>
    </div>
  )
}

function DocumentationHandoffWorkstation() {
  const [copied, setCopied] = useState(false)
  const setupCmd = 'git clone <repo> && npm install && npm run dev'

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(setupCmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-warm/80">
        <span className="font-mono text-xs font-bold text-primary-orange">Handoff & Quickstart Kit</span>
        <span className="text-xs text-body-muted">Zero-Friction Onboarding</span>
      </div>

      {/* Terminal Code Box with Copy */}
      <div className="rounded-xl bg-pill-black text-white p-3.5 font-mono text-xs space-y-2 shadow-sm">
        <div className="flex items-center justify-between text-body-muted text-[11px] pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-primary-orange" />
            <span>Terminal Quickstart</span>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3 h-3 text-[#27C93F]" /> : <Copy className="w-3 h-3" />}
            <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <div className="text-[#FF914D] overflow-x-auto py-1">
          $ {setupCmd}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm">
          <div className="font-sans font-bold text-xs text-heading-dark">.env.example Guide</div>
          <p className="font-sans text-[11px] text-body-muted mt-0.5">Documented API keys & variables</p>
        </div>
        <div className="p-2.5 rounded-xl bg-surface-sand border border-border-warm">
          <div className="font-sans font-bold text-xs text-heading-dark">Component Specs</div>
          <p className="font-sans text-[11px] text-body-muted mt-0.5">Props documentation & tokens</p>
        </div>
      </div>

      <div className="mt-3 p-3 rounded-xl bg-surface-dim border border-border-warm text-heading-dark font-sans text-xs flex items-center justify-between">
        <span className="font-semibold">Future-Proof Codebase</span>
        <span className="text-primary-orange font-bold text-[11px]">Ready for Your Team</span>
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
              <div className="lg:col-span-6 rounded-2xl bg-white border border-border-warm p-5 sm:p-6 shadow-sm flex flex-col justify-between min-h-[380px]">
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

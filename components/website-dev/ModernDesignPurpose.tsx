'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Smartphone,
  Tablet,
  Monitor,
  MonitorSmartphone,
  Type,
  LayoutGrid,
  Activity,
  Layers,
  Palette,
  ArrowUpRight,
  ChevronDown,
  Play,
  Sliders,
  Check,
  Copy,
  Command,
  ShieldCheck,
} from 'lucide-react'
import { BrandEmblem, BrandAccentLine, SlitHeading } from '@/components/ui'
import { cn } from '@/lib/utils'

// ============================================================================
// Interactive Card 1: Responsive Layouts (Interactive Fluid Viewport Simulator)
// ============================================================================
function ResponsiveLayoutsCard() {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  // Auto-play viewport transitions
  useEffect(() => {
    if (!isAutoPlaying) return
    const order: ('desktop' | 'tablet' | 'mobile')[] = ['desktop', 'tablet', 'mobile']
    const interval = setInterval(() => {
      setViewport((current) => {
        const nextIndex = (order.indexOf(current) + 1) % order.length
        return order[nextIndex]
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const viewportConfig = {
    desktop: {
      width: 'w-full',
      badge: '1280px · Desktop 12-Column',
      cols: 'grid-cols-3',
      cardsCount: 3,
    },
    tablet: {
      width: 'w-[75%]',
      badge: '768px · Tablet 6-Column',
      cols: 'grid-cols-2',
      cardsCount: 2,
    },
    mobile: {
      width: 'w-[48%] sm:w-[42%]',
      badge: '375px · Mobile Fluid Stack',
      cols: 'grid-cols-1',
      cardsCount: 2,
    },
  }

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-mono font-bold tracking-wider uppercase">
            <span>01</span>
            <span className="w-1 h-1 rounded-full bg-primary-orange" />
            <span className="font-sans font-semibold">Adaptive Architecture</span>
          </div>

          <div className="flex items-center gap-1 bg-surface-dim p-1 rounded-xl border border-border-warm">
            <button
              onClick={() => {
                setIsAutoPlaying(false)
                setViewport('desktop')
              }}
              className={cn(
                'px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer',
                viewport === 'desktop'
                  ? 'bg-white text-heading-dark shadow-xs'
                  : 'text-body-muted hover:text-heading-dark'
              )}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => {
                setIsAutoPlaying(false)
                setViewport('tablet')
              }}
              className={cn(
                'px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer',
                viewport === 'tablet'
                  ? 'bg-white text-heading-dark shadow-xs'
                  : 'text-body-muted hover:text-heading-dark'
              )}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => {
                setIsAutoPlaying(false)
                setViewport('mobile')
              }}
              className={cn(
                'px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer',
                viewport === 'mobile'
                  ? 'bg-white text-heading-dark shadow-xs'
                  : 'text-body-muted hover:text-heading-dark'
              )}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              title={isAutoPlaying ? 'Pause Auto Animation' : 'Auto Play Viewports'}
              className={cn(
                'p-1.5 rounded-lg text-xs transition-colors cursor-pointer',
                isAutoPlaying
                  ? 'bg-primary-orange text-white'
                  : 'text-body-muted hover:text-heading-dark'
              )}
            >
              <Play className={cn('w-3 h-3', isAutoPlaying && 'animate-spin')} />
            </button>
          </div>
        </div>

        <h3 className="font-sans font-bold text-2xl sm:text-[26px] text-heading-dark tracking-[-0.03em] mb-2">
          Responsive Layouts
        </h3>
        <p className="font-sans text-[14.5px] text-body-dark leading-relaxed max-w-xl mb-5">
          Layouts that adapt to different screen sizes instead of treating mobile as an afterthought.
          Fluid type scales and proportional margins preserve optical balance on every device.
        </p>
      </div>

      {/* Interactive Canvas: Realistic Live Fluid Interface Frame */}
      <div className="relative w-full rounded-2xl bg-surface-dim/80 border border-border-warm p-3 sm:p-4 overflow-hidden min-h-[220px] flex flex-col justify-between">
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border-subtle/80 mb-3 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>
          <span className="font-mono text-[11px] font-semibold text-primary-orange bg-white px-2.5 py-0.5 rounded-full border border-border-warm shadow-2xs">
            {viewportConfig[viewport].badge}
          </span>
          <div className="w-10" />
        </div>

        {/* Dynamic Fluid Canvas Box */}
        <div className="w-full flex-1 flex items-center justify-center py-2">
          <motion.div
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'mx-auto rounded-xl bg-white border border-border-subtle p-3.5 shadow-sm transition-all duration-300',
              viewportConfig[viewport].width
            )}
          >
            {/* Mini Nav Header */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border-warm/60">
              <div className="flex items-center gap-1.5">
                <BrandEmblem size={12} />
                <span className="font-sans font-bold text-[11px] text-heading-dark">KodeToMates</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-6 bg-surface-dim rounded-full" />
                <span className="h-1.5 w-6 bg-surface-dim rounded-full" />
                <span className="h-3.5 px-1.5 rounded-full bg-primary-orange text-white text-[8px] font-bold flex items-center">
                  Live
                </span>
              </div>
            </div>

            {/* Mini Grid Items Reflowing */}
            <div className={cn('grid gap-2', viewportConfig[viewport].cols)}>
              <div className="p-2.5 rounded-lg bg-surface-sand border border-border-warm flex flex-col justify-between">
                <div className="w-4 h-4 rounded-md bg-primary-orange/20 flex items-center justify-center mb-1.5">
                  <div className="w-2 h-2 rounded-xs bg-primary-orange" />
                </div>
                <div className="h-2 w-14 bg-heading-dark/80 rounded-sm mb-1" />
                <div className="h-1.5 w-full bg-body-muted/30 rounded-xs" />
              </div>

              <div className="p-2.5 rounded-lg bg-surface-sand border border-border-warm flex flex-col justify-between">
                <div className="w-4 h-4 rounded-md bg-sunset-orange/20 flex items-center justify-center mb-1.5">
                  <div className="w-2 h-2 rounded-xs bg-sunset-orange" />
                </div>
                <div className="h-2 w-16 bg-heading-dark/80 rounded-sm mb-1" />
                <div className="h-1.5 w-full bg-body-muted/30 rounded-xs" />
              </div>

              {viewport === 'desktop' && (
                <div className="p-2.5 rounded-lg bg-surface-sand border border-border-warm flex flex-col justify-between">
                  <div className="w-4 h-4 rounded-md bg-primary-orange/20 flex items-center justify-center mb-1.5">
                    <div className="w-2 h-2 rounded-xs bg-primary-orange" />
                  </div>
                  <div className="h-2 w-12 bg-heading-dark/80 rounded-sm mb-1" />
                  <div className="h-1.5 w-full bg-body-muted/30 rounded-xs" />
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Feature Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border-subtle/80 text-[11px] font-mono text-body-muted">
          <span className="text-primary-orange font-bold">✓ Zero CLS (&lt;0.02)</span>
          <span>·</span>
          <span>Mobile-First Touch Ergonomics</span>
          <span>·</span>
          <span>Fluid Clamp Tokens</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Interactive Card 2: Thoughtful Typography (Type Hierarchy & Contrast Lab)
// ============================================================================
function ThoughtfulTypographyCard() {
  const [scaleMode, setScaleMode] = useState<'editorial' | 'compact'>('editorial')

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-mono font-bold tracking-wider uppercase">
            <span>02</span>
            <span className="w-1 h-1 rounded-full bg-primary-orange" />
            <span className="font-sans font-semibold">Editorial Rhythm</span>
          </div>

          <button
            onClick={() => setScaleMode(scaleMode === 'editorial' ? 'compact' : 'editorial')}
            className="text-xs font-sans font-semibold text-primary-orange hover:text-coral-hover bg-white px-2.5 py-1 rounded-lg border border-border-warm shadow-2xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Sliders className="w-3 h-3" />
            <span>{scaleMode === 'editorial' ? 'Tight Tracking' : 'Default Tracking'}</span>
          </button>
        </div>

        <h3 className="font-sans font-bold text-2xl sm:text-[26px] text-heading-dark tracking-[-0.03em] mb-2">
          Thoughtful Typography
        </h3>
        <p className="font-sans text-[14.5px] text-body-dark leading-relaxed mb-5">
          Type scales and font pairings that create clear hierarchy without making the page feel crowded.
        </p>
      </div>

      {/* Typographic Specimen Stage */}
      <div className="rounded-2xl bg-surface-dim/80 border border-border-warm p-4 flex flex-col justify-between min-h-[220px]">
        {/* Specimen Box */}
        <div className="rounded-xl bg-white border border-border-subtle p-4 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold text-primary-orange uppercase tracking-wider">
              Plus Jakarta Sans · Display H1
            </span>
            <span className="font-mono text-[10px] text-body-muted">48px / -0.03em</span>
          </div>
          <div
            className={cn(
              'font-sans font-bold text-heading-dark leading-[1.08] transition-all duration-300',
              scaleMode === 'editorial' ? 'text-2xl tracking-[-0.03em]' : 'text-xl tracking-normal'
            )}
          >
            Design that inspires clarity.
          </div>

          <div className="pt-2 border-t border-border-warm/60">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[10px] font-bold text-heading-dark uppercase tracking-wider">
                Body Prose
              </span>
              <span className="font-mono text-[10px] text-body-muted">15px / 160% line-height</span>
            </div>
            <p className="font-sans text-xs text-body-dark leading-relaxed">
              Carefully calibrated line lengths support effortless scanning and comprehension.
            </p>
          </div>
        </div>

        {/* Contrast Verification Badge */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-border-subtle/80">
          <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-heading-dark">
            <ShieldCheck className="w-4 h-4 text-primary-orange" />
            <span>WCAG AAA Compliant</span>
          </div>
          <span className="font-mono text-xs font-bold text-primary-orange bg-white px-2 py-0.5 rounded-md border border-border-warm shadow-2xs">
            14.8:1 Contrast
          </span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Interactive Card 3: Clean Spacing and Grids (Blueprint 8pt Matrix)
// ============================================================================
function CleanSpacingGridsCard() {
  const [gridVisible, setGridVisible] = useState(true)

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-mono font-bold tracking-wider uppercase">
            <span>03</span>
            <span className="w-1 h-1 rounded-full bg-primary-orange" />
            <span className="font-sans font-semibold">Grid Precision</span>
          </div>

          <button
            onClick={() => setGridVisible(!gridVisible)}
            className="text-xs font-sans font-semibold text-heading-dark hover:text-primary-orange bg-white px-2.5 py-1 rounded-lg border border-border-warm shadow-2xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-primary-orange" />
            <span>{gridVisible ? 'Hide 8pt Grid' : 'Show 8pt Grid'}</span>
          </button>
        </div>

        <h3 className="font-sans font-bold text-2xl sm:text-[26px] text-heading-dark tracking-[-0.03em] mb-2">
          Clean Spacing and Grids
        </h3>
        <p className="font-sans text-[14.5px] text-body-dark leading-relaxed mb-5">
          Consistent spacing and alignment to make pages feel organised and easier to scan.
        </p>
      </div>

      {/* Blueprint Grid Canvas */}
      <div className="relative rounded-2xl bg-surface-dim/80 border border-border-warm p-4 min-h-[220px] flex flex-col justify-between overflow-hidden">
        {/* Animated Grid Overlay */}
        {gridVisible && (
          <div className="absolute inset-0 pointer-events-none grid grid-cols-6 gap-3 p-4 opacity-25">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-full border-x border-dashed border-primary-orange" />
            ))}
          </div>
        )}

        {/* Blueprint Layout Modules with Dimension Labels */}
        <div className="relative z-10 grid grid-cols-2 gap-3 flex-1 items-center">
          <div className="rounded-xl bg-white border border-border-subtle p-3.5 shadow-2xs flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-primary-orange">Gutter: 24px</span>
              <span className="font-mono text-[9px] text-body-muted">8pt × 3</span>
            </div>
            <div className="my-2 h-2.5 w-3/4 bg-heading-dark/80 rounded-sm" />
            <div className="h-1.5 w-full bg-surface-dim rounded-xs" />
          </div>

          <div className="rounded-xl bg-white border border-border-subtle p-3.5 shadow-2xs flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-primary-orange">Padding: 32px</span>
              <span className="font-mono text-[9px] text-body-muted">8pt × 4</span>
            </div>
            <div className="my-2 h-2.5 w-1/2 bg-primary-orange rounded-sm" />
            <div className="h-1.5 w-full bg-surface-dim rounded-xs" />
          </div>
        </div>

        {/* Cadence Specs Bar */}
        <div className="relative z-10 flex items-center justify-between pt-3 mt-3 border-t border-border-subtle/80 text-[11px] font-mono text-body-muted">
          <span>Cadence: 4pt / 8pt</span>
          <span>Alignment: Optical Center</span>
          <span className="text-primary-orange font-bold">12-Col Matrix</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Interactive Card 4: Purposeful Motion (Kinetic Physics & Curve Canvas)
// ============================================================================
function PurposefulMotionCard() {
  const [motionTriggered, setMotionTriggered] = useState(false)
  const [reducedMode, setReducedMode] = useState(false)

  const handleTestClick = () => {
    setMotionTriggered(true)
    setTimeout(() => setMotionTriggered(false), 700)
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-mono font-bold tracking-wider uppercase">
            <span>04</span>
            <span className="w-1 h-1 rounded-full bg-primary-orange" />
            <span className="font-sans font-semibold">Motion with Intent</span>
          </div>

          <button
            onClick={() => setReducedMode(!reducedMode)}
            className={cn(
              'px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5',
              reducedMode
                ? 'bg-pill-black text-white shadow-xs'
                : 'bg-white text-heading-dark border border-border-warm hover:text-primary-orange shadow-2xs'
            )}
          >
            <span>{reducedMode ? 'Reduced Motion: ON' : 'Reduced Motion: OFF'}</span>
          </button>
        </div>

        <h3 className="font-sans font-bold text-2xl sm:text-[26px] text-heading-dark tracking-[-0.03em] mb-2">
          Purposeful Motion
        </h3>
        <p className="font-sans text-[14.5px] text-body-dark leading-relaxed mb-5">
          Subtle transitions or animations when they help explain a change or provide feedback, with reduced-motion preferences considered.
        </p>
      </div>

      {/* Kinetic Physics Stage */}
      <div className="rounded-2xl bg-surface-dim/80 border border-border-warm p-4 min-h-[220px] flex flex-col justify-between">
        {/* Motion Visualizer Canvas */}
        <div className="rounded-xl bg-white border border-border-subtle p-4 shadow-2xs flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-body-muted mb-1.5">
              <span className="font-bold text-primary-orange">Spring Curve</span>
              <span>[0.16, 1, 0.3, 1]</span>
            </div>
            {/* Animated SVG Curve */}
            <svg viewBox="0 0 200 40" fill="none" className="w-full h-10 overflow-visible">
              <path
                d="M 0 35 C 40 35, 30 5, 200 5"
                stroke="#F0EBE1"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 0 35 C 40 35, 30 5, 200 5"
                stroke="#E4521B"
                strokeWidth="3"
                strokeDasharray="200"
                strokeDashoffset={motionTriggered ? 0 : 200}
                className="transition-all duration-600 ease-out"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Interactive Trigger Button with spring feedback */}
          <motion.button
            onClick={handleTestClick}
            whileTap={reducedMode ? {} : { scale: 0.94 }}
            animate={
              motionTriggered && !reducedMode
                ? { scale: [1, 1.06, 1], rotate: [0, -1, 1, 0] }
                : { scale: 1 }
            }
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 px-4 py-2.5 rounded-full bg-primary-orange hover:bg-coral-hover text-white font-sans font-semibold text-xs shadow-md shadow-primary-orange/25 cursor-pointer flex items-center gap-2 select-none"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Test Feedback Feel</span>
          </motion.button>
        </div>

        {/* Footer specs */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-border-subtle/80 text-[11px] font-mono text-body-muted">
          <span>Max Duration: &lt;200ms</span>
          <span>Easing: Organic Spring</span>
          <span className="text-primary-orange font-bold">prefers-reduced-motion</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Interactive Card 5: Useful Visual Elements (Progressive Disclosure Kit)
// ============================================================================
function UsefulVisualElementsCard() {
  const [accordionOpen, setAccordionOpen] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'actions'>('overview')

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-mono font-bold tracking-wider uppercase">
            <span>05</span>
            <span className="w-1 h-1 rounded-full bg-primary-orange" />
            <span className="font-sans font-semibold">Functional Components</span>
          </div>

          <span className="font-mono text-xs font-semibold text-body-muted">
            Progressive Disclosure
          </span>
        </div>

        <h3 className="font-sans font-bold text-2xl sm:text-[26px] text-heading-dark tracking-[-0.03em] mb-2">
          Useful Visual Elements
        </h3>
        <p className="font-sans text-[14.5px] text-body-dark leading-relaxed mb-5">
          Cards, accordions, tabs, menus, and other components only where they make information easier to explore.
        </p>
      </div>

      {/* Component Sandbox Canvas */}
      <div className="rounded-2xl bg-surface-dim/80 border border-border-warm p-4 min-h-[220px] flex flex-col justify-between">
        {/* Interactive Functional Accordion */}
        <div
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="rounded-xl bg-white border border-border-subtle p-3.5 shadow-2xs cursor-pointer hover:border-primary-orange/30 transition-all select-none"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-orange" />
              <span className="font-sans font-bold text-xs sm:text-[13px] text-heading-dark">
                Why avoid ornamental UI clutter?
              </span>
            </div>
            <ChevronDown
              className={cn(
                'w-4 h-4 text-primary-orange transition-transform duration-300',
                accordionOpen ? 'rotate-180' : ''
              )}
            />
          </div>

          <AnimatePresence>
            {accordionOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="pt-2 font-sans text-xs text-body-muted leading-relaxed">
                  Every card, tab, or dialog must justify its existence by simplifying visitor comprehension or speeding up conversion.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tab & Shortcut Pills */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-border-subtle/80">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('overview')}
              className={cn(
                'px-2.5 py-1 rounded-md text-[11px] font-sans font-semibold transition-colors cursor-pointer',
                activeTab === 'overview'
                  ? 'bg-primary-orange text-white'
                  : 'bg-white text-body-dark hover:bg-surface-sand'
              )}
            >
              Essential Info
            </button>
            <button
              onClick={() => setActiveTab('actions')}
              className={cn(
                'px-2.5 py-1 rounded-md text-[11px] font-sans font-semibold transition-colors cursor-pointer',
                activeTab === 'actions'
                  ? 'bg-primary-orange text-white'
                  : 'bg-white text-body-dark hover:bg-surface-sand'
              )}
            >
              Deep Specs
            </button>
          </div>

          <div className="inline-flex items-center gap-1 font-mono text-[10px] text-body-muted bg-white px-2 py-0.5 rounded border border-border-warm shadow-2xs">
            <Command className="w-2.5 h-2.5" />
            <span>K · Focus First</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Interactive Card 6: Brand-Consistent Details (Identity Token Lab)
// ============================================================================
function BrandConsistentDetailsCard() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null)

  const tokens = [
    { label: 'Primary Accent', hex: '#E4521B', bg: 'bg-[#E4521B]', text: 'text-white' },
    { label: 'Deep Carbon', hex: '#161413', bg: 'bg-[#161413]', text: 'text-white' },
    { label: 'Warm Sand', hex: '#FAF8F5', bg: 'bg-[#FAF8F5]', text: 'text-heading-dark' },
    { label: 'Border Warm', hex: '#F0EBE1', bg: 'bg-[#F0EBE1]', text: 'text-heading-dark' },
  ]

  const handleCopy = (hex: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(hex)
      setCopiedHex(hex)
      setTimeout(() => setCopiedHex(null), 1500)
    }
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-mono font-bold tracking-wider uppercase">
            <span>06</span>
            <span className="w-1 h-1 rounded-full bg-primary-orange" />
            <span className="font-sans font-semibold">Authentic Identity</span>
          </div>

          <div className="inline-flex items-center gap-1.5 font-sans font-bold text-xs text-primary-orange">
            <BrandEmblem size={13} />
            <span>KodeToMates Standard</span>
          </div>
        </div>

        <h3 className="font-sans font-bold text-2xl sm:text-[26px] text-heading-dark tracking-[-0.03em] mb-2">
          Brand-Consistent Details
        </h3>
        <p className="font-sans text-[14.5px] text-body-dark leading-relaxed mb-5">
          Colours, imagery, icons, and small interface details chosen to fit the business rather than copied from a passing trend.
        </p>
      </div>

      {/* Brand Token Swatches Stage */}
      <div className="rounded-2xl bg-surface-dim/80 border border-border-warm p-4 min-h-[220px] flex flex-col justify-between">
        {/* Interactive Token Swatches */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {tokens.map((token) => {
            const isCopied = copiedHex === token.hex

            return (
              <div
                key={token.hex}
                onClick={() => handleCopy(token.hex)}
                className={cn(
                  'h-20 rounded-xl p-2.5 flex flex-col justify-between border border-border-subtle cursor-pointer transition-all duration-200 hover:scale-[1.04] active:scale-[0.97] shadow-2xs select-none',
                  token.bg
                )}
                title={`Click to copy ${token.hex}`}
              >
                <span className={cn('text-[10px] font-bold uppercase tracking-wider', token.text)}>
                  {token.label}
                </span>
                <div className={cn('flex items-center justify-between text-[10px] font-mono', token.text)}>
                  <span>{token.hex}</span>
                  {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-60" />}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Guarantee */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-border-subtle/80 text-[11px] font-mono text-body-muted">
          <span>Enduring Palette</span>
          <span>Emblem Dual-Square</span>
          <span className="text-primary-orange font-bold">Zero Fleeting Fads</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Principle Configuration for Dynamic Filtering
// ============================================================================
interface DesignPrincipleItem {
  id: string
  label: string
  number: string
  defaultSpan: string
  component: React.ComponentType
}

const DESIGN_PRINCIPLES: DesignPrincipleItem[] = [
  {
    id: 'adaptive-architecture',
    label: 'Adaptive Architecture',
    number: '01',
    defaultSpan: 'lg:col-span-7',
    component: ResponsiveLayoutsCard,
  },
  {
    id: 'editorial-rhythm',
    label: 'Editorial Rhythm',
    number: '02',
    defaultSpan: 'lg:col-span-5',
    component: ThoughtfulTypographyCard,
  },
  {
    id: 'grid-precision',
    label: 'Grid Precision',
    number: '03',
    defaultSpan: 'lg:col-span-5',
    component: CleanSpacingGridsCard,
  },
  {
    id: 'motion-with-intent',
    label: 'Motion with Intent',
    number: '04',
    defaultSpan: 'lg:col-span-7',
    component: PurposefulMotionCard,
  },
  {
    id: 'functional-components',
    label: 'Functional Components',
    number: '05',
    defaultSpan: 'lg:col-span-6',
    component: UsefulVisualElementsCard,
  },
  {
    id: 'authentic-identity',
    label: 'Authentic Identity',
    number: '06',
    defaultSpan: 'lg:col-span-6',
    component: BrandConsistentDetailsCard,
  },
]

interface DesignFilterItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const FILTER_ITEMS: DesignFilterItem[] = [
  { id: 'adaptive-architecture', label: 'Adaptive Architecture', icon: MonitorSmartphone },
  { id: 'editorial-rhythm', label: 'Editorial Rhythm', icon: Type },
  { id: 'grid-precision', label: 'Grid Precision', icon: LayoutGrid },
  { id: 'motion-with-intent', label: 'Motion with Intent', icon: Activity },
  { id: 'functional-components', label: 'Functional Components', icon: Layers },
  { id: 'authentic-identity', label: 'Authentic Identity', icon: Palette },
]

// ============================================================================
// Main ModernDesignPurpose Section
// ============================================================================
export function ModernDesignPurpose() {
  const shouldReduceMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState<string>('adaptive-architecture')
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)
  const [isInView, setIsInView] = useState<boolean>(false)
  const sectionRef = useRef<HTMLElement>(null)
  const filterScrollRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

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

  // Auto-switch filter on a smooth cadence until the user clicks any filter
  useEffect(() => {
    if (!isAutoPlaying || !isInView || shouldReduceMotion) return

    const filterIds = FILTER_ITEMS.map((item) => item.id)

    const timer = setTimeout(() => {
      setActiveFilter((current) => {
        const currentIndex = filterIds.indexOf(current)
        const nextIndex = (currentIndex + 1) % filterIds.length
        return filterIds[nextIndex]
      })
    }, 3800)

    return () => clearTimeout(timer)
  }, [activeFilter, isAutoPlaying, isInView, shouldReduceMotion])

  // Keep active pill centered in horizontal container on mobile only when actively viewing
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return
    const container = filterScrollRef.current
    const el = buttonRefs.current[activeFilter]
    if (container && el && container.scrollWidth > container.clientWidth) {
      const scrollLeft = el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [activeFilter, isAutoPlaying, isInView])

  // Stop automation as soon as user clicks ANY filter
  const handleFilterClick = (filterId: string) => {
    setIsAutoPlaying(false)
    setActiveFilter(filterId)
  }

  const filteredPrinciples = DESIGN_PRINCIPLES.filter((p) => p.id === activeFilter)

  return (
    <div className="w-full bg-white">
      <section
        ref={sectionRef}
        id="modern-design-purpose"
        className="relative w-full bg-primary-orange text-white rounded-t-[32px] rounded-b-[32px] sm:rounded-t-[48px] sm:rounded-b-[48px] lg:rounded-t-[56px] lg:rounded-b-[56px] border-t border-b border-white/20 scroll-mt-24 pt-16 sm:pt-20 pb-16 sm:pb-20 selection:bg-white/30 selection:text-white overflow-hidden shadow-2xl"
        aria-labelledby="modern-design-heading"
      >
        {/* Subtle Ambient Radial Highlight on Orange */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,255,255,0.18),transparent)] pointer-events-none" />

        {/* 1. Section Header: Single Clean Headline Matching User Edit */}
        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 text-center mb-10 sm:mb-14">
          {/* Eyebrow Badge */}


          {/* Main Section Headline with Slit Reveal Animation */}
          <div className="max-w-3xl mx-auto">
            <SlitHeading
              id="modern-design-heading"
              align="center"
              lines={[`<span style="color: #FFE3D4">Modern</span> Design, Used with <span style="color: #FFE3D4">Purpose.</span>`]}
              slit={0}
              textColor="#FFFFFF"
              dotColor="#FFE3D4"
              className="text-[clamp(2.1rem,4.4vw,4rem)] leading-[1.08] tracking-[-0.03em]"
            />
          </div>

          {/* Signature Home Page Down Line with Dot (White Theme on Orange Background) */}
          <BrandAccentLine align="center" theme="white" className="my-3.5" />

          {/* Filter Menu — Single Row with Smooth Scrolling */}
          <div className="mt-7 sm:mt-9 w-full flex justify-center">
            <div ref={filterScrollRef} className="max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth px-2 py-1">
              <div
                role="tablist"
                aria-label="Filter modern design principles"
                className="inline-flex flex-nowrap items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white border border-white/40 shadow-xl whitespace-nowrap"
              >
                {FILTER_ITEMS.map((item) => {
                  const isActive = activeFilter === item.id
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      ref={(el) => {
                        buttonRefs.current[item.id] = el
                      }}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleFilterClick(item.id)}
                      className={cn(
                        'group shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full font-sans text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap',
                        isActive
                          ? 'bg-primary-orange text-white shadow-md shadow-primary-orange/30 scale-[1.02]'
                          : 'bg-transparent text-body-dark hover:text-heading-dark hover:bg-surface-dim'
                      )}
                    >
                      <Icon
                        className={cn(
                          'w-3.5 h-3.5 shrink-0 transition-colors',
                          isActive
                            ? 'text-white'
                            : 'text-body-muted group-hover:text-primary-orange'
                        )}
                      />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Focused Interactive Principle Card */}
        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-4xl mx-auto w-full">
            <AnimatePresence mode="wait">
              {filteredPrinciples.map((principle) => {
                const CardComponent = principle.component

                return (
                  <motion.div
                    key={principle.id}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-[28px] bg-white text-heading-dark border border-white/30 p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition-all duration-300"
                  >
                    <CardComponent />
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {/* Sub-bar: Principle Progress Counter & Auto-tour Status */}
            <div className="mt-4 flex items-center justify-between py-3 px-5 sm:px-6 rounded-2xl bg-white text-heading-dark border border-white/30 shadow-md text-xs font-sans">
              <div className="flex items-center gap-2 text-body-muted font-mono text-[11px]">
                <span className={cn('w-2 h-2 rounded-full', isAutoPlaying ? 'bg-primary-orange animate-pulse' : 'bg-body-muted')} />
                <span>
                  {isAutoPlaying
                    ? 'Auto-tour active · Click any filter to pause'
                    : 'Principle locked · Click any tab to explore'}
                </span>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[11px] text-body-muted font-semibold">
                <span className="text-primary-orange font-bold">
                  0{FILTER_ITEMS.findIndex((item) => item.id === activeFilter) + 1}
                </span>
                <span>/</span>
                <span>0{FILTER_ITEMS.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Action Prompt */}
        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 mt-12 sm:mt-16">
          <div className="rounded-[28px] bg-white text-heading-dark border border-white/30 p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.12)] hover:border-white/50 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-primary-orange text-xs font-sans font-bold uppercase tracking-[0.14em] mb-2.5">

                  <span>Intentional Engineering Standards</span>
                </div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-heading-dark tracking-[-0.02em] mb-2">
                  Design That Converts Without Gimmicks.
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] text-body-muted leading-relaxed">
                  We craft interfaces where every button, animation, and spacing token serves a measurable purpose: lower bounce rates, higher readability, and effortless user conversion.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary-orange hover:bg-sunset-orange text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Build with Purpose</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-surface-sand hover:bg-surface-dim text-heading-dark border border-border-subtle font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>See Case Studies</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary-orange" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModernDesignPurpose

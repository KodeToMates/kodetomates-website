'use client'

import React, { useState, useEffect, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TomatoEmblem } from '@/components/ui/UniqueLoader'
import { cn } from '@/lib/utils'

export interface LazySectionProps {
  children: ReactNode
  /** Minimum height while loading to prevent layout shifts */
  minHeight?: string | number
  /** Distance from viewport to trigger loading (default: 200px) */
  rootMargin?: string
  /** Custom fallback skeleton title/label */
  title?: string
  /** Custom category tag */
  tag?: string
  /** Number of skeleton cards to render if using default skeleton */
  skeletonCards?: number
  /** Custom fallback component if specified */
  customFallback?: ReactNode
  /** Extra class names */
  className?: string
  /** Disable lazy loading and render immediately */
  immediate?: boolean
}

/**
 * Unique KodeToMates Section Skeleton with warm terracotta shimmer
 */
export function UniqueSectionSkeleton({
  title = 'KodeToMates Section',
  tag = 'LOADING_SECTION',
  skeletonCards = 3,
  minHeight = '420px',
  className
}: {
  title?: string
  tag?: string
  skeletonCards?: number
  minHeight?: string | number
  className?: string
}) {
  return (
    <div
      className={cn(
        'w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center justify-center relative overflow-hidden',
        className
      )}
      style={{ minHeight }}
      role="status"
      aria-label={`Loading ${title}`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#FF914D]/10 blur-3xl pointer-events-none" />

      {/* Centerpiece Tomato Emblem Badge */}
      <div className="flex flex-col items-center mb-10 z-10">
        <TomatoEmblem size={52} />

        {/* Status Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-4 rounded-full bg-[#E4521B]/8 border border-[#E4521B]/15 text-[#E4521B] text-[11px] font-mono tracking-wider font-semibold uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B] animate-ping" />
          {tag}
        </div>

        {/* Section Title Placeholder */}
        <div className="mt-3 flex flex-col items-center gap-2">
          <div className="h-6 w-48 md:w-64 bg-surface-dim/80 rounded-lg relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E4521B]/15 to-transparent"
              style={{ animation: 'shimmer-sweep 2s infinite linear' }}
            />
          </div>
          <div className="h-3.5 w-32 md:w-40 bg-surface-dim/60 rounded-md relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E4521B]/10 to-transparent"
              style={{ animation: 'shimmer-sweep 2s infinite linear', animationDelay: '0.2s' }}
            />
          </div>
        </div>
      </div>

      {/* Grid of Skeleton Cards with Shimmer */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 z-10 max-w-5xl">
        {Array.from({ length: skeletonCards }).map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl bg-surface-paper/70 backdrop-blur-md border border-[#E4521B]/10 shadow-[0_8px_30px_rgba(228,82,27,0.04)] flex flex-col gap-4 relative overflow-hidden"
          >
            {/* Shimmer overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none"
              style={{
                animation: 'shimmer-sweep 2.2s infinite linear',
                animationDelay: `${i * 0.25}s`
              }}
            />

            {/* Skeleton icon */}
            <div className="w-12 h-12 rounded-2xl bg-surface-dim/90 relative overflow-hidden" />

            {/* Skeleton lines */}
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-surface-dim/90 rounded-md" />
              <div className="h-3 w-full bg-surface-dim/60 rounded-md" />
              <div className="h-3 w-5/6 bg-surface-dim/60 rounded-md" />
            </div>

            {/* Skeleton pill */}
            <div className="mt-2 h-6 w-20 bg-surface-dim/70 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * LazySection Wrapper
 * Defers rendering children until near viewport or simulated async completion,
 * displaying a bespoke branded skeleton loader with smooth spring entrance.
 */
export function LazySection({
  children,
  minHeight = '380px',
  rootMargin = '250px',
  title,
  tag,
  skeletonCards = 3,
  customFallback,
  className,
  immediate = false
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(immediate)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (immediate || isVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold: 0.01
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [immediate, isVisible, rootMargin])

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <AnimatePresence mode="wait">
        {!isVisible ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="w-full"
          >
            {customFallback || (
              <UniqueSectionSkeleton
                title={title}
                tag={tag}
                skeletonCards={skeletonCards}
                minHeight={minHeight}
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

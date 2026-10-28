'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ')
}

export interface FlowSectionProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  'aria-label'?: string
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    className={cx('relative min-h-screen w-full overflow-hidden', className)}
  >
    <div
      data-flow-inner
      className={cx(
        'flow-art-container relative flex min-h-screen w-full flex-col justify-between gap-6 px-6 sm:px-10 lg:px-16 pt-[clamp(3.5rem,7vw,5rem)] pb-12 sm:pb-16',
        'will-change-transform',
      )}
      style={{ transformOrigin: 'bottom left', ...style }}
    >
      {children}
    </div>
  </section>
)

export interface FlowArtProps {
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

const childCount = (children: React.ReactNode) => React.Children.count(children)

export const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return

      // Connect with Lenis smooth scrolling if present
      const lenisInstance = typeof window !== 'undefined' ? (window as unknown as { lenis?: { on: (event: string, callback: () => void) => void } }).lenis : undefined
      const onLenisScroll = () => ScrollTrigger.update()
      if (lenisInstance?.on) {
        lenisInstance.on('scroll', onLenisScroll)
      }

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-flow-section]'),
      )
      if (sections.length === 0) return

      const triggers: ScrollTrigger[] = []

      sections.forEach((section, i) => {
        gsap.set(section, { zIndex: i + 1 })

        const inner = section.querySelector<HTMLElement>('.flow-art-container')
        if (!inner) return

        if (i > 0) {
          gsap.set(inner, { rotation: 24, transformOrigin: 'bottom left' })
          const tween = gsap.to(inner, {
            rotation: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top 20%',
              scrub: true,
            },
          })
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
        }

        if (i < sections.length - 1) {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: 'bottom bottom',
              end: 'bottom top',
              pin: true,
              pinSpacing: false,
            }),
          )
        }
      })

      ScrollTrigger.refresh()

      return () => {
        triggers.forEach((t) => t.kill())
      }
    },
    { scope: containerRef, dependencies: [childCount(children), reducedMotion] },
  )

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      aria-label={ariaLabel}
      className={cx('relative w-full overflow-x-hidden', className)}
    >
      {children}
    </div>
  )
}

export const StoryScroll = FlowArt
export default FlowArt

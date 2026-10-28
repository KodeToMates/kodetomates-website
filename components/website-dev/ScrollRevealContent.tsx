"use client"

import React, { useRef, useState, useEffect, useMemo } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const centralColumnStyle = "w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12"
export const pageYPadding = "py-4 md:py-6 lg:py-8"
const defaultTitleClass = "text-lg md:text-xl lg:text-[22px] font-sans font-bold tracking-[-0.02em] text-heading-dark"
const defaultDescriptionClass = "text-sm md:text-[14.5px] font-sans font-normal text-body-dark max-w-[500px] leading-[160%]"

export interface ItemContent {
  title: string
  description: string
  tags?: string[]
  badge?: string
  image: {
    url: string
    width: number
    height: number
    alt: string
  }
}

export interface ScrollRevealContentProps extends React.ComponentProps<"div"> {
  contentA?: ItemContent
  contentB?: ItemContent
  contentC?: ItemContent
  items?: ItemContent[]
  headerNode?: React.ReactNode
  titleClass?: string
  descriptionClass?: string
}

export type ScrollRevealContentAProps = ScrollRevealContentProps

export const ScrollRevealContent = ({
  contentA,
  contentB,
  contentC,
  items: itemsProp,
  headerNode,
  titleClass = defaultTitleClass,
  descriptionClass = defaultDescriptionClass,
  className,
  ...props
}: ScrollRevealContentProps) => {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const items: ItemContent[] = useMemo(() => {
    if (itemsProp && itemsProp.length > 0) return itemsProp
    const fallback: ItemContent[] = []
    if (contentA) fallback.push(contentA)
    if (contentB) fallback.push(contentB)
    if (contentC) fallback.push(contentC)
    return fallback
  }, [itemsProp, contentA, contentB, contentC])

  // Track active step via IntersectionObserver with fallback for 100% responsiveness
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return

    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index)
            }
          })
        },
        {
          rootMargin: "-25% 0px -40% 0px",
          threshold: 0.15,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [items.length])

  // Clickable step navigation: smoothly scroll directly to that step
  const handleStepClick = (index: number) => {
    setActiveStep(index)
    const target = stepRefs.current[index]
    if (!target) return

    const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: object) => void } }).lenis
    if (lenis?.scrollTo) {
      lenis.scrollTo(target, { offset: -120, duration: 0.9 })
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div
      className={cn(
        "relative w-full bg-white selection:bg-primary-orange/20 selection:text-primary-orange",
        className
      )}
      {...props}
    >
      <div className={centralColumnStyle}>
        {headerNode && <div className="mb-8">{headerNode}</div>}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start w-full">
          {/* Left Column: The 3 Interactive Step Points */}
          <div className="lg:col-span-6 w-full flex flex-col gap-6 sm:gap-8">
            {items.map((item, index) => {
              const number = String(index + 1).padStart(2, "0")
              const isActive = index === activeStep
              const isPast = index < activeStep

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  onClick={() => handleStepClick(index)}
                  className={cn(
                    "flex flex-col w-full transition-all duration-300 select-none cursor-pointer p-4 sm:p-5 rounded-3xl border",
                    isActive
                      ? "bg-surface-sand border-primary-orange/30 shadow-[0_4px_24px_rgba(228,82,27,0.06)] opacity-100"
                      : isPast
                      ? "bg-white border-border-warm/70 opacity-75 hover:opacity-100 hover:border-border-warm"
                      : "bg-white border-border-warm/50 opacity-50 hover:opacity-85 hover:border-border-warm"
                  )}
                >
                  {/* Step Header: Number + Pill Badge */}
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={cn(
                        "font-mono font-bold text-lg sm:text-xl transition-colors duration-300",
                        isActive ? "text-primary-orange" : "text-heading-dark/40"
                      )}
                    >
                      {number}
                    </span>
                    {item.badge && (
                      <span
                        className={cn(
                          "px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider transition-colors duration-300",
                          isActive
                            ? "bg-primary-orange/10 text-primary-orange border border-primary-orange/25"
                            : "bg-surface-dim text-body-muted border border-border-subtle"
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Step Progress Line & Text Content */}
                  <div className="flex relative items-start gap-4 sm:gap-5">
                    {/* Vertical Progress Indicator Bar */}
                    <div className="w-[18px] flex items-center justify-center shrink-0 self-stretch relative py-1">
                      <div className="h-full w-[2px] bg-border-warm absolute top-0 left-1/2 -translate-x-1/2 rounded-full" />
                      <div
                        className={cn(
                          "w-[2.5px] rounded-full transition-all duration-500 ease-out shadow-xs",
                          isActive
                            ? "h-full bg-primary-orange shadow-primary-orange/40"
                            : isPast
                            ? "h-full bg-primary-orange/60"
                            : "h-0 bg-transparent"
                        )}
                      />
                    </div>

                    {/* Text Details & Capabilities */}
                    <div className="flex-1 flex flex-col gap-1.5">
                      <h3
                        className={cn(
                          titleClass,
                          "transition-colors duration-300",
                          isActive ? "text-heading-dark" : "text-heading-dark/70"
                        )}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={cn(
                          descriptionClass,
                          "transition-colors duration-300",
                          isActive ? "text-body-dark" : "text-body-muted/70"
                        )}
                      >
                        {item.description}
                      </p>

                      {/* Feature Pills */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={cn(
                                "px-2.5 py-1 rounded-md text-[11.5px] font-sans font-medium transition-all duration-300",
                                isActive
                                  ? "bg-white text-heading-dark border border-border-warm shadow-2xs"
                                  : "bg-surface-dim/60 text-body-muted/70 border border-border-subtle/50"
                              )}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Mobile Inline Image Preview */}
                      <div className="lg:hidden mt-3 relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border-warm">
                        <Image
                          fill
                          sizes="100vw"
                          src={item.image.url}
                          alt={item.image.alt}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Sticky Mockup Showcase Card */}
          <div className="hidden lg:flex flex-col items-center lg:col-span-6 sticky top-28 xl:top-32 h-[420px] xl:h-[480px]">
            <div className="relative w-full max-w-[560px] h-full rounded-3xl overflow-hidden border border-border-warm bg-surface-sand shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-all duration-500 ease-out",
                    index === activeStep
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  )}
                >
                  <Image
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    src={item.image.url}
                    alt={item.image.alt}
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* Bottom Live UX Preview Badge */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent flex items-center justify-between z-20">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
                      <span className="font-mono text-xs text-white/95 uppercase tracking-wider font-semibold">
                        {item.badge || `Principle ${String(index + 1).padStart(2, "0")}`}
                      </span>
                    </div>
                    <span className="text-[11px] font-sans font-medium text-white/80">
                      Live UX Architecture
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ScrollRevealContentA = ScrollRevealContent
export default ScrollRevealContent

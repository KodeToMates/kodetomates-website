"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

// Ensure plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger)
}

export interface TextBlockAnimationProps {
  children: React.ReactNode
  animateOnScroll?: boolean
  delay?: number
  blockColor?: string
  stagger?: number
  duration?: number
  className?: string
}

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#E4521B",
  stagger = 0.08,
  duration = 0.55,
  className,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      // 1. Setup SplitText
      let split: SplitText | null = null
      try {
        split = new SplitText(containerRef.current, {
          type: "lines",
          linesClass: "block-line-parent",
        })
      } catch (err) {
        // Fallback gracefully if SplitText cannot parse
        console.warn("SplitText initialization notice:", err)
        return
      }

      const lines = split.lines
      const blocks: HTMLDivElement[] = []

      // 2. Wrap lines and inject the block revealer
      lines.forEach((line) => {
        const wrapper = document.createElement("div")
        wrapper.style.position = "relative"
        wrapper.style.display = "block"
        wrapper.style.overflow = "hidden"

        const block = document.createElement("div")
        block.style.position = "absolute"
        block.style.top = "0"
        block.style.left = "0"
        block.style.width = "100%"
        block.style.height = "100%"
        block.style.backgroundColor = blockColor
        block.style.zIndex = "2"
        block.style.transform = "scaleX(0)"
        block.style.transformOrigin = "left center"

        line.parentNode?.insertBefore(wrapper, line)
        wrapper.appendChild(line)
        wrapper.appendChild(block)

        gsap.set(line, { opacity: 0 })
        blocks.push(block)
      })

      // 3. Create the Master Timeline
      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            }
          : undefined,
        delay,
      })

      // 4. Build Animation Sequence
      tl.to(blocks, {
        scaleX: 1,
        duration,
        stagger,
        transformOrigin: "left center",
      })
        .set(
          lines,
          {
            opacity: 1,
            stagger,
          },
          `<${duration / 2}`
        )
        .to(
          blocks,
          {
            scaleX: 0,
            duration,
            stagger,
            transformOrigin: "right center",
          },
          `<${duration * 0.4}`
        )

      return () => {
        split?.revert()
      }
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  )

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {children}
    </div>
  )
}
export { TextBlockAnimation }


"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useScroll,
  MotionValue,
} from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { BrandAccentLine, SlitHeading } from "@/components/ui"

export interface TunnelItem {
  src: string
  title: string
  category?: string
}

export const DEFAULT_WEBSITE_DEV_CARDS: TunnelItem[] = [
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    title: "Next.js Full-Stack",
    category: "Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    title: "WebGL & 3D Canvas",
    category: "Creative Tech",
  },
  {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    title: "Design Systems",
    category: "UI / UX",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    title: "High-Performance SEO",
    category: "Optimization",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    title: "Real-Time Telemetry",
    category: "Data & Systems",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    title: "Micro-Frontends",
    category: "Scalability",
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    title: "Cloud & Edge Deployment",
    category: "DevOps",
  },
  {
    src: "https://images.unsplash.com/photo-1581291518655-9523c932deda?auto=format&fit=crop&w=900&q=80",
    title: "Fluid Micro-Interactions",
    category: "Motion & Polish",
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    title: "Sub-Second Latency",
    category: "Edge Routing",
  },
]

interface TunnelCardData {
  item: TunnelItem
  angleCos: number
  angleSin: number
  radiusFactorX: number
  radiusFactorY: number
  rotationZ: number
  index: number
}

function computeTunnelCards(items: TunnelItem[]): TunnelCardData[] {
  return items.map((item, i) => {
    const goldenAngle = i * 137.5 * (Math.PI / 180)
    const radiusFactorX = 0.28 + (i % 3) * 0.08
    const radiusFactorY = 0.26 + (i % 2) * 0.09

    return {
      item,
      angleCos: Math.cos(goldenAngle),
      angleSin: Math.sin(goldenAngle),
      radiusFactorX,
      radiusFactorY,
      rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
      index: i,
    }
  })
}

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 }

interface StageDimensions {
  width: number
  height: number
  isMobile: boolean
}

function useCameraParallax(enabled: boolean) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, SPRING_CONFIG)
  const y = useSpring(rawY, SPRING_CONFIG)

  useEffect(() => {
    if (!enabled) return
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2)
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [enabled, rawX, rawY])

  return { x, y }
}

interface TunnelCardProps {
  card: TunnelCardData
  progress: MotionValue<number>
  pointer: { x: MotionValue<number>; y: MotionValue<number> }
  total: number
  stage: StageDimensions
}

function TunnelCard({ card, progress, pointer, total, stage }: TunnelCardProps) {
  const staggerSpan = 0.55
  const start = (card.index / total) * (1 - staggerSpan)
  const end = start + staggerSpan

  const localProgress = useTransform(progress, [start, end], [0, 1])

  const farZ = stage.isMobile ? -1300 : -1800
  const nearZ = stage.isMobile ? 380 : 560
  const z = useTransform(localProgress, [0, 1], [farZ, nearZ])

  const opacity = useTransform(localProgress, [0, 0.16, 0.82, 0.98], [0, 1, 1, 0])

  const cardWidth = stage.isMobile
    ? Math.max(140, Math.min(190, stage.width * 0.42))
    : Math.max(200, Math.min(290, stage.width * 0.19))

  const baseX = card.angleCos * (stage.width * card.radiusFactorX)
  const baseY = card.angleSin * (stage.height * card.radiusFactorY)
  const panStrength = stage.isMobile ? 22 : 48

  const transform = useTransform(
    [z, pointer.x, pointer.y],
    ([currZ, px, py]: number[]) => {
      const offsetX = baseX - px * panStrength
      const offsetY = baseY - py * panStrength
      return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`
    }
  )

  return (
    <motion.div
      style={{
        width: cardWidth,
        transform,
        opacity,
        zIndex: card.index + 1,
      }}
      className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform select-none cursor-pointer"
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-pill-black shadow-[0_20px_50px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-all duration-500 hover:ring-primary-orange hover:shadow-[0_20px_45px_rgba(228,82,27,0.35)]">
        {/* Card Thumbnail Image */}
        <img
          src={card.item.src}
          alt={card.item.title}
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Ambient Dark Gradient & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
          {card.item.category && (
            <span className="font-sans font-semibold text-[10px] sm:text-[11px] tracking-wider uppercase text-primary-orange mb-1">
              {card.item.category}
            </span>
          )}
          <span className="font-sans font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-sunset-orange transition-colors line-clamp-1 drop-shadow-md">
            {card.item.title}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export interface PerspectiveTunnelHeroProps {
  titleLine1?: string
  titleLine2?: string
  description?: string
  items?: TunnelItem[]
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  bgImage?: string
}

export function PerspectiveTunnelHero({
  titleLine1 = "WEBSITE",
  titleLine2 = "DEVELOPMENT.",
  description = "Custom, ultra-fast web applications, interactive 3D experiences, and modern software architectures engineered to convert and scale.",
  items = DEFAULT_WEBSITE_DEV_CARDS,
  ctaPrimary = { label: "Build a Project With Us", href: "/contact" },
  ctaSecondary = { label: "Explore Stack", href: "/projects" },
  bgImage = "/Image-v1/dev_page/dev-hero-main.jpg",
}: PerspectiveTunnelHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const [stage, setStage] = useState<StageDimensions>({
    width: 1440,
    height: 900,
    isMobile: false,
  })

  useEffect(() => {
    const updateDimensions = () => {
      setStage({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Pinned scroll runway: tracks natural window/Lenis scroll progress from 0 to 1
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Responsive spring interpolation for a silky smooth 3D camera travel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.0001,
  })

  const pointer = useCameraParallax(!reduce)

  const titleScale = useTransform(smoothProgress, [0, 0.45, 1], [1, 1.05, 1.18])
  const titleOpacity = useTransform(smoothProgress, [0, 0.22, 0.72, 0.95], [1, 1, 0.18, 0])
  const promptOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0])
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.08])

  const tunnelCards = computeTunnelCards(items)

  // Interactive scroll prompt click
  const handleScrollPromptClick = () => {
    if (typeof window !== "undefined") {
      const win = window as unknown as {
        lenis?: { scrollTo: (target: number | HTMLElement, opts?: object) => void }
      }
      const targetY = window.innerHeight * 0.9
      if (win.lenis?.scrollTo) {
        win.lenis.scrollTo(targetY, { duration: 1.2 })
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" })
      }
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[240vh] bg-dark-bg text-white select-none"
      aria-label="Website Development 3D Showcase"
    >
      {/* Sticky Viewport Stage (Stays pinned in viewport while user smoothly scrolls through corridor) */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pt-20 sm:pt-24"
        style={{
          perspective: stage.isMobile ? "900px" : "1250px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* --- FULL-BLEED HERO BACKGROUND PHOTOGRAPHY & OVERLAYS --- */}
        <motion.div
          style={{ scale: bgScale }}
          className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        >
          {/* Main Hero Background Photography */}
          <Image
            src={bgImage}
            alt="Website Development Engineering Workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.62] contrast-[1.15]"
          />

          {/* Neutral Dark Contrast Overlays & Vignettes */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/85 via-transparent to-dark-bg/90" />

          {/* Background Architectural Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_50%,transparent_100%)] opacity-[0.05]" />

          {/* Ambient Top & Bottom Vignettes */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-dark-bg via-dark-bg/60 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent z-10" />
        </motion.div>

        {/* --- CENTRAL ANCHOR TYPOGRAPHY (MANDATORY PLUS JAKARTA SANS) --- */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="pointer-events-none z-10 flex flex-col items-center text-center px-6 max-w-3xl"
        >
          {/* Editorial Headline with Slit Reveal Animation */}
          <SlitHeading
            as="h1"
            align="center"
            lines={[
              titleLine1,
              `<span style="color: var(--color-primary-orange, #E4521B)">${titleLine2}</span>`,
            ]}
            slit={0}
            textColor="#FFFFFF"
            dotColor="#E4521B"
            className="w-full text-[clamp(44px,7.5vw,94px)] leading-[1.02] tracking-[-0.035em] drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)]"
          />

          {/* Signature Home Page Down Line with Dot (━━━━ ▪) */}
          <BrandAccentLine align="center" className="my-4" />

          {/* Body Description */}
          <p className="mt-2 max-w-[50ch] font-sans text-[15px] sm:text-[17px] md:text-[18px] text-white/85 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {description}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3.5 pt-6 sm:pt-7">
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary-orange hover:bg-pill-black text-white font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 shadow-[0_8px_24px_rgba(228,82,27,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{ctaPrimary.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-sans font-semibold text-xs sm:text-[14px] transition-all duration-300 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{ctaSecondary.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary-orange" />
              </Link>
            )}
          </div>
        </motion.div>

        {/* --- SCROLL PROMPT --- */}
        <motion.button
          type="button"
          onClick={handleScrollPromptClick}
          style={{ opacity: promptOpacity }}
          className="pointer-events-auto cursor-pointer absolute bottom-8 z-20 flex flex-col items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.25em] text-[#A69B92] hover:text-white transition-colors"
          aria-label="Scroll down into 3D corridor"
        >
          <span className="flex items-center gap-1.5 text-white/80">
            <span>Scroll to Explore Corridor</span>
            <ChevronDown className="w-3.5 h-3.5 text-primary-orange animate-bounce" />
          </span>
          <div className="h-6 w-px bg-gradient-to-b from-primary-orange to-transparent" />
        </motion.button>

        {/* --- 3D Z-SPACE CORRIDOR PLANE --- */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {tunnelCards.map((card, i) => (
            <TunnelCard
              key={i}
              card={card}
              progress={smoothProgress}
              pointer={pointer}
              total={tunnelCards.length}
              stage={stage}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerspectiveTunnelHero

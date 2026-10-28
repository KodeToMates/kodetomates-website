'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Pause,
  Play,
  Zap,
  MousePointerClick,
  Target,
  Building2,
  CheckCircle2,
  Search,
  KeyRound,
  Newspaper,
  CalendarClock,
  Activity,
  Filter,
  Radio,
} from 'lucide-react'

export interface ExampleCardItem {
  title: string
  desc: string
  category: string
  tag: string
  icon: React.ComponentType<{ className?: string }>
  image: string
}

export interface ExampleCardsCarouselProps {
  items: ExampleCardItem[]
  theme?: 'light' | 'orange' | 'dark'
  title?: string
}

export function ExampleCardsCarousel({
  items,
  theme = 'light',
  title = 'Ideal Implementation Examples',
}: ExampleCardsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftPos, setScrollLeftPos] = useState(0)

  // Smart Auto-scroll & Hover Pause states
  const [isHovered, setIsHovered] = useState(false)
  const [isManualPaused, setIsManualPaused] = useState(false)
  const [isTouchInteracting, setIsTouchInteracting] = useState(false)

  const isLight = theme === 'light'
  const isDark = theme === 'dark'

  // Bounds checker for arrow buttons
  const checkScrollBounds = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const tolerance = 6
    setCanScrollLeft(el.scrollLeft > tolerance)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScrollBounds()
    el.addEventListener('scroll', checkScrollBounds, { passive: true })
    window.addEventListener('resize', checkScrollBounds)
    return () => {
      el.removeEventListener('scroll', checkScrollBounds)
      window.removeEventListener('resize', checkScrollBounds)
    }
  }, [checkScrollBounds])

  // Scroll step (single card width)
  const scrollByStep = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardEl = el.querySelector<HTMLElement>('[data-carousel-card]')
    const cardWidth = cardEl ? cardEl.offsetWidth + 12 : 280

    if (direction === 'right') {
      const tolerance = 12
      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance
      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    } else {
      el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  // Automatic Smart-Pause Auto-Scroll Effect
  useEffect(() => {
    // If user hovers, drags, touches, or manually paused: SMART PAUSE
    if (isHovered || isDragging || isManualPaused || isTouchInteracting) return

    const timer = setInterval(() => {
      const el = scrollRef.current
      if (!el) return

      const cardEl = el.querySelector<HTMLElement>('[data-carousel-card]')
      const cardWidth = cardEl ? cardEl.offsetWidth + 12 : 280
      const tolerance = 12
      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance

      if (isAtEnd) {
        // Loop back smoothly to the beginning
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }, 3400) // 3.4 seconds interval for comfortable viewing

    return () => clearInterval(timer)
  }, [isHovered, isDragging, isManualPaused, isTouchInteracting])

  // Mouse Drag to Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    setIsDragging(true)
    setStartX(e.pageX - el.offsetLeft)
    setScrollLeftPos(el.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const el = scrollRef.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX) * 1.3
    el.scrollLeft = scrollLeftPos - walk
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile smart pause
  const handleTouchStart = () => {
    setIsTouchInteracting(true)
  }

  const handleTouchEnd = () => {
    // Resume auto-scroll after 2 seconds grace period
    setTimeout(() => {
      setIsTouchInteracting(false)
    }, 2000)
  }

  const isPausedState = isHovered || isDragging || isManualPaused || isTouchInteracting

  return (
    <div
      className="w-full flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Row: Category Title, Smart Auto-Scroll Indicator & Interactive Navigation Arrows */}
      <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`font-sans font-bold text-xs uppercase tracking-[0.14em] ${
              isLight ? 'text-primary-orange' : isDark ? 'text-primary-sunset' : 'text-[#FFE3D4]'
            }`}
          >
            {title}
          </span>

          {/* Smart Auto-Scroll Status Badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-sans text-[11px] font-semibold transition-all duration-300 ${
              isLight
                ? 'bg-surface-sand border border-border-warm text-body-muted'
                : isDark
                ? 'bg-[#161412] text-white/90 border border-white/15 shadow-sm'
                : 'bg-[#0C0B0A] text-white/90 border border-white/15 shadow-sm'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                isPausedState ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'
              }`}
            />
            <span className="hidden xs:inline">
              {isManualPaused
                ? 'Paused'
                : isHovered
                  ? 'Smart Paused'
                  : isDragging
                    ? 'Dragging'
                    : 'Auto-scrolling'}
            </span>
            <span className="xs:hidden">
              {isPausedState ? 'Paused' : 'Auto'}
            </span>
          </div>
        </div>

        {/* Interactive Controls: Play/Pause Toggle & Arrow Buttons */}
        <div className="flex items-center gap-1.5">
          {/* Play / Pause Toggle Button */}
          <button
            type="button"
            onClick={() => setIsManualPaused((prev) => !prev)}
            aria-label={isManualPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            title={isManualPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ${
              isLight
                ? 'bg-surface-sand hover:bg-white text-heading-dark hover:text-primary-orange border border-border-warm hover:border-primary-orange/50 shadow-xs'
                : isDark
                ? 'bg-[#161412] hover:bg-[#1E1B18] text-white hover:text-primary-sunset border border-white/15 hover:border-white/30 shadow-md'
                : 'bg-[#0C0B0A] hover:bg-[#141210] text-white hover:text-primary-sunset border border-white/15 hover:border-white/30 shadow-md'
            }`}
          >
            {isManualPaused ? (
              <Play className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Pause className="w-3.5 h-3.5 fill-current" />
            )}
          </button>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollByStep('left')}
            disabled={!canScrollLeft}
            aria-label="Previous example card"
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed active:scale-95 ${
              isLight
                ? 'bg-surface-sand hover:bg-white text-heading-dark hover:text-primary-orange border border-border-warm hover:border-primary-orange/50 shadow-xs'
                : isDark
                ? 'bg-[#161412] hover:bg-[#1E1B18] text-white hover:text-primary-sunset border border-white/15 hover:border-white/30 shadow-md'
                : 'bg-[#0C0B0A] hover:bg-[#141210] text-white hover:text-primary-sunset border border-white/15 hover:border-white/30 shadow-md'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollByStep('right')}
            aria-label="Next example card"
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ${
              isLight
                ? 'bg-surface-sand hover:bg-white text-heading-dark hover:text-primary-orange border border-border-warm hover:border-primary-orange/50 shadow-xs'
                : isDark
                ? 'bg-[#161412] hover:bg-[#1E1B18] text-white hover:text-primary-sunset border border-white/15 hover:border-white/30 shadow-md'
                : 'bg-[#0C0B0A] hover:bg-[#141210] text-white hover:text-primary-sunset border border-white/15 hover:border-white/30 shadow-md'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Draggable & Swipeable Carousel Scroll Track (Exactly 3 cards visible on lg screens) */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`w-full overflow-x-auto flex gap-3 py-1 select-none scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {items.map((item, idx) => {
          const ItemIcon = item.icon
          return (
            <div
              key={idx}
              data-carousel-card
              className={`snap-start shrink-0 w-[270px] sm:w-[280px] md:w-[260px] lg:w-[calc((100%-24px)/3)] rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                isLight
                  ? 'bg-surface-sand hover:bg-white border border-border-warm hover:border-primary-orange/45 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(228,82,27,0.12)]'
                  : isDark
                  ? 'bg-[#161412] hover:bg-[#1E1B18] border border-white/15 hover:border-primary-orange/50 shadow-2xl hover:shadow-[0_12px_32px_rgba(228,82,27,0.2)]'
                  : 'bg-[#0C0B0A] hover:bg-[#141210] border border-white/10 hover:border-white/25 shadow-2xl hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]'
              }`}
            >
              {/* Thumbnail Image with Category Badge Overlay */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-2.5 shrink-0 bg-black/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Category Pill Tag */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="px-2 py-0.5 rounded-md font-sans font-semibold text-[9.5px] sm:text-[10px] tracking-wider uppercase bg-black/75 backdrop-blur-md text-white border border-white/15 shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content: Title & Description */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4
                    className={`font-sans font-bold text-[14px] sm:text-[14.5px] tracking-[-0.01em] line-clamp-1 mb-1 transition-colors ${isLight
                      ? 'text-heading-dark group-hover:text-primary-orange'
                      : 'text-white group-hover:text-primary-sunset'
                      }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`font-sans text-[11.5px] sm:text-[12px] leading-relaxed line-clamp-2 ${isLight ? 'text-body-muted' : 'text-white/75'
                      }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Feature Tag with Contextual Lucide Icon */}
                <div
                  className={`pt-2 mt-2 border-t flex items-center justify-between ${
                    isLight ? 'border-border-warm/70' : 'border-white/10'
                  }`}
                >
                  <span
                    className={`font-sans font-semibold text-[10.5px] uppercase tracking-wider flex items-center gap-1.5 ${
                      isLight ? 'text-primary-orange' : isDark ? 'text-primary-sunset' : 'text-[#FFE3D4]'
                    }`}
                  >
                    <ItemIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.tag}</span>
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isLight
                        ? 'bg-primary-orange/10 text-primary-orange'
                        : isDark
                        ? 'bg-white/10 text-white group-hover:bg-primary-orange group-hover:text-white'
                        : 'bg-white/10 text-white group-hover:bg-primary-orange group-hover:text-white'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const STATIC_EXAMPLES: ExampleCardItem[] = [
  {
    title: 'Business Websites',
    category: 'Corporate & Consulting',
    desc: 'Credible, modern online presence for consultancies and service firms.',
    tag: 'Instant Edge Cache',
    icon: Zap,
    image: '/Image-v1/dev_page/business-website.jpg',
  },
  {
    title: 'Personal Portfolios',
    category: 'Creative Leaders',
    desc: 'Curated showcases for developers, designers, and creative specialists.',
    tag: 'Micro-Interactions',
    icon: MousePointerClick,
    image: '/Image-v1/dev_page/personal-website.jpg',
  },
  {
    title: 'Campaign Landing Pages',
    category: 'Conversion Funnels',
    desc: 'High-converting standalone funnels with laser-targeted CTAs.',
    tag: 'A/B Test Ready',
    icon: Target,
    image: '/Image-v1/dev_page/landing-website.jpg',
  },
  {
    title: 'Company Profiles',
    category: 'Brand Architecture',
    desc: 'Corporate overviews, team rosters, and investor presentations.',
    tag: 'Brand Alignment',
    icon: Building2,
    image: '/Image-v1/dev_page/company-profiles.jpg',
  },
  {
    title: 'Service & Pricing Pages',
    category: 'Offerings & Tiers',
    desc: 'Clear product specifications and transparent offering breakdowns.',
    tag: 'Zero Friction',
    icon: CheckCircle2,
    image: '/Image-v1/dev_page/service_and_pricing.jpg',
  },
  {
    title: 'Documentation & Guides',
    category: 'Technical Knowledge',
    desc: 'Lightweight static technical roadmaps and product docs.',
    tag: 'Fast Search',
    icon: Search,
    image: '/Image-v1/dev_page/Documentation-Guides.jpg',
  },
]

export const DYNAMIC_EXAMPLES: ExampleCardItem[] = [
  {
    title: 'Interactive Web Portals',
    category: 'Auth & Workflows',
    desc: 'Secure client logins, role-based workflows, and digital document hubs.',
    tag: 'Role-Based Access',
    icon: KeyRound,
    image: '/Image-v1/dev_page/Interactive-Web-Portals.jpg',
  },
  {
    title: 'Content Publications',
    category: 'Media & Editorial',
    desc: 'Newsrooms, multi-author editorial blogs, and video/audio libraries.',
    tag: 'Headless CMS',
    icon: Newspaper,
    image: '/Image-v1/dev_page/content-publication.jpg',
  },
  {
    title: 'Booking & Scheduling',
    category: 'Calendar & Payments',
    desc: 'Live availability calendars, payment integrations, and RSVP engines.',
    tag: 'Real-Time Sync',
    icon: CalendarClock,
    image: '/Image-v1/dev_page/booking.jpg',
  },
  {
    title: 'Custom Dashboards',
    category: 'Telemetry & Charts',
    desc: 'Real-time metrics, interactive telemetry, data charts, and reporting.',
    tag: 'Live Telemetry',
    icon: Activity,
    image: '/Image-v1/dev_page/custom-dashboard.jpg',
  },
  {
    title: 'Regularly Updated Platforms',
    category: 'Catalogs & Feeds',
    desc: 'Listings, directories, catalog searches, and community boards.',
    tag: 'Faceted Search',
    icon: Filter,
    image: '/Image-v1/dev_page/Regularly-Updated-Platforms.jpg',
  },
  {
    title: 'Community & Member Apps',
    category: 'Social Channels',
    desc: 'Discussion channels, profiles, badge systems, and live feeds.',
    tag: 'Real-Time WebSockets',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
]

export default ExampleCardsCarousel

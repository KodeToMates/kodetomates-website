"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Cpu,
  FileText,
  Compass,
  Smartphone,
  MapPin,
  BarChart3,
  LucideIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SlitHeading, BrandAccentLine } from "@/components/ui";

export interface FeatureItem {
  id: string;
  label: string;
  icon: LucideIcon;
  image: string;
  description: string;
}

// SEO Features matching the exact deliverables
export const DEFAULT_SEO_FEATURES: FeatureItem[] = [
  {
    id: "technical-review",
    label: "Technical SEO review",
    icon: Cpu,
    image: "/Image-v1/seo_page/technical-seo.jpg",
    description:
      "Review indexing and crawlability signals, site structure, broken links, redirects, and technical issues within the agreed scope.",
  },
  {
    id: "on-page",
    label: "On-page optimisation",
    icon: FileText,
    image: "/Image-v1/seo_page/on-page-optimization.jpg",
    description:
      "Improve page titles, meta descriptions, headings, internal links, and content organisation where appropriate.",
  },
  {
    id: "search-intent",
    label: "Search intent & content",
    icon: Compass,
    image: "/Image-v1/seo_page/search-intent-content.jpg",
    description:
      "Understand what visitors are looking for and help shape useful pages that answer their questions clearly.",
  },
  {
    id: "mobile-performance",
    label: "Mobile & performance basics",
    icon: Smartphone,
    image: "/Image-v1/seo_page/mobile-perfomance.jpg",
    description:
      "Identify usability and performance issues that may affect visitors and the overall site experience.",
  },
  {
    id: "local-seo",
    label: "Local SEO foundations",
    icon: MapPin,
    image: "/Image-v1/seo_page/local-seo.jpg",
    description:
      "Where relevant, help ensure business details and location information are consistent and easy for local customers to find.",
  },
  {
    id: "measurement",
    label: "Measurement & refinement",
    icon: BarChart3,
    image: "/Image-v1/seo_page/measurement.jpg",
    description:
      "Use available analytics and search performance data to review progress and prioritise the next improvements.",
  },
];

const AUTO_PLAY_INTERVAL = 4500;

export interface FeatureCarouselProps {
  features?: FeatureItem[];
  className?: string;
  brandColor?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

const cardVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : dir < 0 ? -60 : 0,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32, mass: 0.8 },
      opacity: { duration: 0.32, ease: "easeOut" },
      scale: { duration: 0.32, ease: "easeOut" },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : dir < 0 ? 60 : 0,
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32, mass: 0.8 },
      opacity: { duration: 0.22, ease: "easeIn" },
      scale: { duration: 0.22, ease: "easeIn" },
    },
  }),
};

export function FeatureCarousel({
  features = DEFAULT_SEO_FEATURES,
  className,
  brandColor = "#E4521B", // Signature KodeToMates Brand Orange
  eyebrow = "DELIVERABLES & EXECUTION SCOPE",
  title = "What SEO can include",
  description = "From code-level indexing signals and on-page optimization to search intent and continuous refinement, explore our comprehensive search framework.",
}: FeatureCarouselProps) {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all deliverable images into memory to guarantee instant, flicker-free rendering
  useEffect(() => {
    if (typeof window === "undefined") return;
    features.forEach((feature) => {
      if (feature.image) {
        const img = new Image();
        img.src = feature.image;
      }
    });
  }, [features]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevIndex]) => {
        const nextIndex =
          (prevIndex + newDirection + features.length) % features.length;
        return [nextIndex, newDirection];
      });
    },
    [features.length]
  );

  const handleChipClick = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    const dir = targetIndex > currentIndex ? 1 : -1;
    setPage([targetIndex, dir]);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [paginate, isPaused]);

  const currentFeature = features[currentIndex] || features[0];

  return (
    <div
      className={cn(
        "w-full flex flex-col lg:flex-row min-h-[640px] xl:min-h-[720px] bg-primary-orange text-white",
        className
      )}
      style={{ backgroundColor: brandColor }}
    >
      {/* =========================================================================
          Left Column: Brand Orange (#E4521B) Content Area
          ========================================================================= */}
      <div className="w-full lg:w-[46%] xl:w-[42%] min-h-[460px] lg:min-h-full relative z-30 flex flex-col justify-between overflow-hidden px-6 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 select-none">
        {/* Subtle Ambient Radial Highlight on Orange */}
        <div className="absolute top-0 left-0 w-full h-[320px] bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(255,255,255,0.22),transparent)] pointer-events-none" />

        {/* 1. Header Area: Eyebrow + Title + Subtitle */}
        <div className="relative z-20 mb-6 sm:mb-8">
          <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-white/90 mb-2 inline-block">
            {eyebrow}
          </span>
          <SlitHeading
            id="what-seo-can-include-heading"
            align="left"
            lines={[title]}
            slit={0}
            textColor="#FFFFFF"
            dotColor="#FFE3D4"
            className="text-[clamp(28px,3.2vw,46px)] leading-[1.12] tracking-[-0.03em] mb-2 text-white"
          />
          <BrandAccentLine align="left" theme="white" className="my-3.5" />
          <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* 2. Interactive Deliverable Chips */}
        <div className="relative z-20 flex flex-wrap lg:flex-col gap-2.5 sm:gap-3 my-4 sm:my-6 lg:my-auto py-2">
          {features.map((feature, index) => {
            const isActive = index === currentIndex;
            const Icon = feature.icon;

            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => handleChipClick(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={cn(
                  "relative flex items-center gap-3.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-left transition-all duration-200 group cursor-pointer select-none border w-auto lg:w-full lg:max-w-[340px]",
                  isActive
                    ? "border-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] scale-[1.02]"
                    : "bg-white/12 border-white/25 hover:border-white/60 hover:bg-white/20 text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-seo-chip"
                    className="absolute inset-0 bg-white rounded-full z-0"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}

                <div
                  className={cn(
                    "relative z-10 flex items-center justify-center transition-colors duration-200",
                    isActive ? "text-primary-orange" : "text-white"
                  )}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </div>

                <span
                  className={cn(
                    "relative z-10 font-sans font-semibold text-xs sm:text-[13.5px] tracking-tight whitespace-nowrap transition-colors duration-200",
                    isActive ? "text-primary-orange font-bold" : "text-white/95"
                  )}
                >
                  {feature.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Footer: Auto-tour Status Indicator */}
        <div className="relative z-20 mt-6 sm:mt-8 flex items-center justify-between pt-4 border-t border-white/20 text-xs font-sans text-white/90">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span
              className={cn(
                "w-2 h-2 rounded-full",
                isPaused
                  ? "bg-white/60"
                  : "bg-white animate-pulse shadow-[0_0_8px_#ffffff]"
              )}
            />
            <span>
              {isPaused
                ? "Deliverable locked · Click any tab"
                : "Auto-tour active · Hover to pause"}
            </span>
          </div>

          <div className="font-mono text-[11px] font-semibold text-white">
            0{currentIndex + 1} / 0{features.length}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Right Column: Brand Orange (#E4521B) 3D Card Showcase — Fluid & Smooth
          ========================================================================= */}
      <div
        className="flex-1 min-h-[500px] lg:min-h-full relative flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Ambient Radial Highlight on Orange */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,255,255,0.16),transparent)] pointer-events-none" />

        {/* 3D Stacked Card Perspective Deck */}
        <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">
          {/* Background 3D Stack Layer 1 (Left tilted card peek) */}
          <div
            className="absolute inset-0 rounded-[2rem] sm:rounded-[2.4rem] border-4 sm:border-[5px] border-white/20 bg-[#1E1712] shadow-[0_16px_40px_rgba(0,0,0,0.35)] -translate-x-6 sm:-translate-x-8 -rotate-[3.5deg] scale-[0.88] opacity-60 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gradient-to-tr from-black/85 via-[#2A160D]/75 to-[#E4521B]/20" />
          </div>

          {/* Background 3D Stack Layer 2 (Right tilted card peek) */}
          <div
            className="absolute inset-0 rounded-[2rem] sm:rounded-[2.4rem] border-4 sm:border-[5px] border-white/20 bg-[#1E1712] shadow-[0_16px_40px_rgba(0,0,0,0.35)] translate-x-6 sm:translate-x-8 rotate-[3.5deg] scale-[0.88] opacity-60 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gradient-to-tl from-black/85 via-[#2A160D]/75 to-[#E4521B]/20" />
          </div>

          {/* Active Foreground Card with Direction-Aware Silky Smooth Transitions */}
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={currentFeature.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipePower = Math.abs(offset.x) * velocity.x;
                if (swipePower < -10000 || offset.x < -60) {
                  paginate(1);
                } else if (swipePower > 10000 || offset.x > 60) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden border-4 sm:border-[5px] border-white/35 bg-[#1A1816] shadow-[0_24px_60px_rgba(0,0,0,0.45)] z-20 origin-center will-change-transform cursor-grab active:cursor-grabbing"
            >
              {/* Deliverable Image — High Performance & Preloaded, No CSS Filter Jank */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentFeature.image}
                alt={currentFeature.label}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover select-none pointer-events-none"
              />

              {/* Top Live Deliverable Badge */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 select-none">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                <span className="text-white/90 text-[11px] font-sans font-semibold uppercase tracking-wider">
                  SEO Deliverable 0{currentIndex + 1}
                </span>
              </div>

              {/* Bottom Gradient Card Overlay with Title and Description */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 pt-24 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col justify-end pointer-events-none select-none">
                <div className="bg-white/20 backdrop-blur-md text-white px-3 sm:px-3.5 py-1 rounded-full text-[11.5px] font-sans font-bold uppercase tracking-wider w-fit shadow-md mb-2.5 border border-white/30">
                  {currentFeature.label}
                </div>
                <p className="text-white font-sans font-medium text-xs sm:text-sm leading-relaxed drop-shadow-md">
                  {currentFeature.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Dots & Arrow Controls */}
        <div className="mt-7 sm:mt-8 flex items-center gap-3.5 z-20 select-none">
          <button
            type="button"
            onClick={() => {
              setIsPaused(true);
              paginate(-1);
            }}
            aria-label="Previous deliverable"
            className="p-1.5 sm:p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer border border-white/20"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {features.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleChipClick(idx)}
                aria-label={`Go to ${item.label}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  idx === currentIndex
                    ? "w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setIsPaused(true);
              paginate(1);
            }}
            aria-label="Next deliverable"
            className="p-1.5 sm:p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer border border-white/20"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;

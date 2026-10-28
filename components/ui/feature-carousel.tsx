"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  FileText,
  Compass,
  Smartphone,
  MapPin,
  BarChart3,
  LucideIcon,
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
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    description:
      "Review indexing and crawlability signals, site structure, broken links, redirects, and technical issues within the agreed scope.",
  },
  {
    id: "on-page",
    label: "On-page optimisation",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    description:
      "Improve page titles, meta descriptions, headings, internal links, and content organisation where appropriate.",
  },
  {
    id: "search-intent",
    label: "Search intent & content",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200",
    description:
      "Understand what visitors are looking for and help shape useful pages that answer their questions clearly.",
  },
  {
    id: "mobile-performance",
    label: "Mobile & performance basics",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description:
      "Identify usability and performance issues that may affect visitors and the overall site experience.",
  },
  {
    id: "local-seo",
    label: "Local SEO foundations",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1524813686514-a57563d77d61?q=80&w=1200",
    description:
      "Where relevant, help ensure business details and location information are consistent and easy for local customers to find.",
  },
  {
    id: "measurement",
    label: "Measurement & refinement",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200",
    description:
      "Use available analytics and search performance data to review progress and prioritise the next improvements.",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 62;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export interface FeatureCarouselProps {
  features?: FeatureItem[];
  className?: string;
  brandColor?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FeatureCarousel({
  features = DEFAULT_SEO_FEATURES,
  className,
  brandColor = "#E4521B", // Signature KodeToMates Brand Orange
  eyebrow = "DELIVERABLES & EXECUTION SCOPE",
  title = "What SEO can include",
  description = "From code-level indexing signals and on-page optimization to search intent and continuous refinement, explore our comprehensive search framework.",
}: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % features.length) + features.length) % features.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused, features.length]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = features.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

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
        <div className="relative z-20 mb-8 sm:mb-10">
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

        {/* 2. Interactive Deliverable Chips (Vertical Smooth Carousel) */}
        <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-start z-20 overflow-hidden my-auto">
          {/* Subtle Top & Bottom Gradient Veils matching brand orange */}
          <div
            className="absolute inset-x-0 top-0 h-16 pointer-events-none z-30"
            style={{
              background: `linear-gradient(to bottom, ${brandColor}, rgba(228,82,27,0.85) 60%, transparent)`,
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-30"
            style={{
              background: `linear-gradient(to top, ${brandColor}, rgba(228,82,27,0.85) 60%, transparent)`,
            }}
          />

          {features.map((feature, index) => {
            const isActive = index === currentIndex;
            const distance = index - currentIndex;
            const wrappedDistance = wrap(
              -(features.length / 2),
              features.length / 2,
              distance
            );

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                style={{
                  height: ITEM_HEIGHT,
                  width: "fit-content",
                }}
                animate={{
                  y: wrappedDistance * ITEM_HEIGHT,
                  opacity: 1 - Math.abs(wrappedDistance) * 0.32,
                  scale: isActive ? 1 : 0.94,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 22,
                  mass: 1,
                }}
                className="absolute flex items-center justify-start left-0"
              >
                <button
                  type="button"
                  onClick={() => handleChipClick(index)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className={cn(
                    "relative flex items-center gap-3.5 px-5 sm:px-6 py-3 rounded-full transition-all duration-300 text-left group border cursor-pointer select-none",
                    isActive
                      ? "bg-white text-primary-orange border-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] z-10 scale-[1.02]"
                      : "bg-white/15 text-white border-white/30 hover:border-white/70 hover:bg-white/25"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center transition-colors duration-300",
                      isActive ? "text-primary-orange" : "text-white"
                    )}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  </div>

                  <span className="font-sans font-semibold text-xs sm:text-[13.5px] tracking-tight whitespace-nowrap">
                    {feature.label}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Footer: Auto-tour Status Indicator (Matching Modern Design Purpose) */}
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
                : "Auto-tour active · Hover or click to pause"}
            </span>
          </div>

          <div className="font-mono text-[11px] font-semibold text-white">
            0{currentIndex + 1} / 0{features.length}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Right Column: Brand Orange (#E4521B) 3D Card Showcase — Full Width Fit
          ========================================================================= */}
      <div className="flex-1 min-h-[500px] lg:min-h-full relative flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/20">
        {/* Subtle Ambient Radial Highlight on Orange */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,255,255,0.16),transparent)] pointer-events-none" />

        {/* 3D Stacked Card Perspective Deck */}
        <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">
          {features.map((feature, index) => {
            const status = getCardStatus(index);
            const isActive = status === "active";
            const isPrev = status === "prev";
            const isNext = status === "next";

            return (
              <motion.div
                key={feature.id}
                initial={false}
                animate={{
                  x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                  scale: isActive ? 1 : isPrev || isNext ? 0.86 : 0.72,
                  opacity: isActive ? 1 : isPrev || isNext ? 0.45 : 0,
                  rotate: isPrev ? -3 : isNext ? 3 : 0,
                  zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  mass: 0.8,
                }}
                className="absolute inset-0 rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden border-4 sm:border-[5px] border-white/30 bg-[#1A1816] shadow-[0_24px_60px_rgba(0,0,0,0.4)] origin-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.label}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    isActive
                      ? "grayscale-0 blur-0 scale-100"
                      : "grayscale blur-[2px] brightness-75 scale-105"
                  )}
                />

                {/* Top Live Deliverable Badge */}
                <div
                  className={cn(
                    "absolute top-5 left-5 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                  <span className="text-white/90 text-[11px] font-sans font-semibold uppercase tracking-wider">
                    SEO Deliverable 0{index + 1}
                  </span>
                </div>

                {/* Bottom Gradient Card Overlay with Title and Description */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-x-0 bottom-0 p-6 sm:p-8 pt-28 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end pointer-events-none"
                    >
                      <div className="bg-white/20 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-[11.5px] font-sans font-bold uppercase tracking-wider w-fit shadow-md mb-2.5 border border-white/30">
                        {feature.label}
                      </div>
                      <p className="text-white font-sans font-medium text-sm sm:text-[15px] leading-relaxed drop-shadow-md">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots on Orange */}
        <div className="mt-8 flex items-center gap-2 z-20">
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
      </div>
    </div>
  );
}

export default FeatureCarousel;

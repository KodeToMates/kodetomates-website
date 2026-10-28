"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  description: string;
  date: string;
  image: string;
  tag?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full space-y-12 sm:space-y-16 lg:space-y-24", className)}
    >
      {items.map((item, index) => {
        // Alternating logic:
        // Row 1 (index 0): Left Image, Right Content
        // Row 2 (index 1): Left Content, Right Image
        // Row 3 (index 2): Left Image, Right Content
        // Row 4 (index 3): Left Content, Right Image
        // Row 5 (index 4): Left Image, Right Content
        const isImageLeft = index % 2 === 0;

        return (
          <TimelineItemRow
            key={index}
            item={item}
            index={index}
            totalItems={items.length}
            isImageLeft={isImageLeft}
          />
        );
      })}
    </div>
  );
}

interface TimelineItemRowProps {
  item: TimelineItem;
  index: number;
  totalItems: number;
  isImageLeft: boolean;
}

function TimelineItemRow({
  item,
  index,
  totalItems,
  isImageLeft,
}: TimelineItemRowProps) {
  // Content block
  const contentBlock = (
    <div className="space-y-4 md:space-y-5">
      {/* Milestone Phase / Date Tag + Animated Node */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center shrink-0">
          {/* Outer Pulse Ring */}
          <span className="absolute w-5 h-5 rounded-full bg-primary-orange/20 animate-ping opacity-60" />
          {/* Center Core Node */}
          <span className="relative w-3.5 h-3.5 rounded-full bg-primary-orange shadow-[0_0_10px_rgba(228,82,27,0.7)] border-2 border-white" />
        </div>

        <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider text-primary-orange">
          {item.date}
        </span>
      </div>

      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-sans font-bold tracking-[-0.02em] text-foreground group-hover:text-primary-orange transition-colors duration-300 leading-tight">
        {item.title}
      </h3>

      {/* Detailed Scope Description */}
      <p className="text-sm sm:text-base lg:text-[16.5px] text-muted-foreground leading-relaxed font-sans max-w-xl">
        {item.description}
      </p>

      {/* Step Pill */}
      <div className="pt-1">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[12px] font-mono font-medium text-body-dark bg-neutral-100">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-orange" />
          Stage 0{index + 1} of 0{totalItems}
        </span>
      </div>
    </div>
  );

  // Image block
  const imageBlock = (
    <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-[0_12px_36px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)] transition-all duration-500">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Subtle Dark Gradient Footnote */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-3.5 left-3.5 px-2.5 py-0.5 rounded-md bg-black/65 backdrop-blur-md text-[10.5px] font-mono text-white/95 border border-white/20 uppercase tracking-wider">
        Phase 0{index + 1} • {item.title}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-center group"
    >
      {/* Left Column on Desktop */}
      <div className={cn(isImageLeft ? "md:order-1" : "md:order-1 order-2")}>
        {isImageLeft ? imageBlock : contentBlock}
      </div>

      {/* Right Column on Desktop */}
      <div className={cn(isImageLeft ? "md:order-2" : "md:order-2 order-1")}>
        {isImageLeft ? contentBlock : imageBlock}
      </div>
    </motion.div>
  );
}

export default Timeline;

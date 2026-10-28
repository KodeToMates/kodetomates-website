"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useCallback,
} from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ImgHTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
}

export type CardItem = {
  src: string;
  title: string;
  category?: string;
  description?: string;
  content?: React.ReactNode;
  url?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
  autoplay = false,
  autoplaySpeed = 0.6,
}: CarouselProps & { autoplay?: boolean; autoplaySpeed?: number }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Duplicate items for infinite seamless scroll
  const loopedItems = [
    ...items,
    ...items.map((item, idx) =>
      React.cloneElement(item, {
        key: (item.key || `item-${idx}`) + "-dup",
      })
    ),
  ];

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll, checkScrollability]);

  // Autoplay loop when not hovered or dragged
  useEffect(() => {
    if (!autoplay || isHovered || isDragging) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += autoplaySpeed;
        const scrollWidth = carouselRef.current.scrollWidth;

        // Reset scroll position halfway for infinite loop
        if (carouselRef.current.scrollLeft >= scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }

        checkScrollability();
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoplay, autoplaySpeed, isHovered, isDragging, checkScrollability]);

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 290 : 380;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 290 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 270 : 340;
      const gap = 20;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Modern Mouse Pointer Drag Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Primary click only
    setIsDragging(true);
    setHasMoved(false);
    setDragStartX(e.clientX);
    if (carouselRef.current) {
      setDragStartScrollLeft(carouselRef.current.scrollLeft);
      // Capture pointer so dragging continues even if cursor leaves bounds
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 4) {
      setHasMoved(true);
    }
    carouselRef.current.scrollLeft = dragStartScrollLeft - deltaX;
    checkScrollability();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div
        className="relative w-full overflow-visible select-none group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Side Floating Arrow Button */}
        <button
          type="button"
          aria-label="Scroll Carousel Left"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={cn(
            "absolute left-2 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-[#E8E2D9] text-[#161413] hover:text-[#E4521B] hover:border-[#E4521B]/40 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(228,82,27,0.2)] hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-90 hover:opacity-100",
            !canScrollLeft && "opacity-40 cursor-not-allowed hover:scale-100 hover:text-[#161413] hover:border-[#E8E2D9]"
          )}
        >
          <ChevronLeft className="h-6 w-6 stroke-[2.2]" />
        </button>

        {/* Right Side Floating Arrow Button */}
        <button
          type="button"
          aria-label="Scroll Carousel Right"
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={cn(
            "absolute right-2 sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-[#E8E2D9] text-[#161413] hover:text-[#E4521B] hover:border-[#E4521B]/40 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(228,82,27,0.2)] hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-90 hover:opacity-100",
            !canScrollRight && "opacity-40 cursor-not-allowed hover:scale-100 hover:text-[#161413] hover:border-[#E8E2D9]"
          )}
        >
          <ChevronRight className="h-6 w-6 stroke-[2.2]" />
        </button>

        {/* Full-Width Scroll / Drag Viewport */}
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
          }}
          className={cn(
            "flex w-full overflow-x-scroll overscroll-x-contain py-4 md:py-6 [scrollbar-width:none] touch-pan-x cursor-grab",
            isDragging && "cursor-grabbing select-none"
          )}
        >
          {/* Subtle Left Edge Gradient Fade */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent"
          />

          {/* Subtle Right Edge Gradient Fade */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent"
          />

          {/* Card Items Row across full width */}
          <div className="flex flex-row justify-start gap-5 md:gap-6 px-6 sm:px-12 lg:px-16 shrink-0">
            {loopedItems.map((item, index) => (
              <motion.div
                key={"card-" + index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * (index % items.length),
                  ease: "easeOut",
                }}
                className="shrink-0 rounded-3xl"
              >
                {React.cloneElement(item, {
                  hasMoved,
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  onClick,
  hasMoved = false,
}: {
  card: CardItem;
  index?: number;
  layout?: boolean;
  onClick?: () => void;
  hasMoved?: boolean;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className="group relative z-10 flex h-[350px] w-[265px] sm:h-[420px] sm:w-[320px] md:h-[445px] md:w-[335px] flex-col items-start justify-end overflow-hidden rounded-[26px] bg-[#161413] border border-[#E8E2D9]/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(228,82,27,0.18)] hover:border-[#E4521B]/40 transition-all duration-300 cursor-pointer select-none"
    >
      {/* Background Image with Smooth Hover Zoom */}
      <img
        src={card.src}
        alt={card.title}
        draggable={false}
        className="pointer-events-none absolute inset-0 z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
        loading="lazy"
      />

      {/* Deep Gradient Overlay to Guarantee Crisp Title Readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-4/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent select-none" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-black/15 group-hover:bg-transparent transition-colors duration-300 select-none" />

      {/* Inside Card Content: Category Pill, Bold Title, and Subtitle */}
      <div className="relative z-30 p-6 sm:p-7 w-full flex flex-col items-start text-left select-none pointer-events-none">
        {card.category && (
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[#FF914D] font-sans text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-xs">
            {card.category}
          </span>
        )}

        <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-[-0.02em] leading-snug drop-shadow-sm group-hover:text-[#FF914D] transition-colors duration-200">
          {card.title}
        </h3>

        {card.description && (
          <p className="font-sans text-xs sm:text-[13px] text-white/80 mt-1.5 line-clamp-2 leading-relaxed">
            {card.description}
          </p>
        )}
      </div>
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      draggable={false}
      alt={alt ? alt : "Celebration invitation preview"}
      {...rest}
    />
  );
};

export default Carousel;

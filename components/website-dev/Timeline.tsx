// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Next.js SSR-safe layout effect to prevent server warnings
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Inline stand-in for @gsap/react's useGSAP. Mirrors its default
   `revertOnUpdate: false`: one gsap.context lives for the component's
   lifetime, the callback is re-added when dependencies change, and the
   context is reverted only on unmount. A callback may return its own
   cleanup, which runs before the next re-add and on unmount. */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
  }, deps);
}

export type JourneyItem = {
  id: string;
  year?: string;
  month?: string;
  step?: string;
  title?: string;
  content: string;
};

type SplitTextInstance = InstanceType<typeof SplitText>;

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  eyebrow?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  topJourneyData?: JourneyItem[];
  bottomJourneyData?: JourneyItem[];
  /** Reveal animation duration, in seconds. */
  duration?: number;
  /** Fallback reveal duration when `duration` is omitted, in seconds. */
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

// Default 6-Step Website Design Process Data
const DEFAULT_TOP_JOURNEY: JourneyItem[] = [
  {
    id: "step-01-discover",
    step: "01",
    title: "Discover",
    content: "Understand your business, audience, goals, content, required features, and practical constraints.",
  },
  {
    id: "step-03-design",
    step: "03",
    title: "Design",
    content: "Develop the visual direction and page layouts, then review and refine them against the agreed goals.",
  },
  {
    id: "step-05-test",
    step: "05",
    title: "Test and refine",
    content: "Review content, layouts, links, forms, responsiveness, accessibility basics, and agreed functionality.",
  },
];

const DEFAULT_BOTTOM_JOURNEY: JourneyItem[] = [
  {
    id: "step-02-plan",
    step: "02",
    title: "Plan",
    content: "Define the site structure, key pages, navigation, and the main journeys visitors should be able to complete.",
  },
  {
    id: "step-04-build",
    step: "04",
    title: "Build",
    content: "If implementation is included, turn the approved design into responsive pages and working interactions.",
  },
  {
    id: "step-06-handover",
    step: "06",
    title: "Handover",
    content: "Deliver the agreed website and any relevant assets, access details, or guidance included in the project scope.",
  },
];

export function Timeline({
  title = "Our Website Design Process",
  periodLabel = "01 to 06 · Discovery to Delivery",
  eyebrow = "7. OUR WEBSITE DESIGN PROCESS",
  textColor = "#FFFFFF",
  mutedTextColor = "#A1A1AA",
  activeColor = "#E4521B",
  backgroundColor = "#0C0B0A",
  imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Creative web development and design team in studio",
  topJourneyData = DEFAULT_TOP_JOURNEY,
  bottomJourneyData = DEFAULT_BOTTOM_JOURNEY,
  duration,
  scrollDuration = 1.2,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  const allJourneyItems: JourneyItem[] = [
    ...topJourneyData,
    ...bottomJourneyData,
  ].sort((a, b) => {
    const numA = parseInt(a.step || a.year || "0", 10);
    const numB = parseInt(b.step || b.year || "0", 10);
    return numA - numB;
  });

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const isMobile = window.innerWidth < 600;
      const slidePercent = isMobile ? -62 : -68;
      const lineWidth = isMobile ? "70%" : "98%";
      const lineStart = isMobile ? "top 30%" : "top 25%";
      const slideEnd = isMobile ? "85% 50%" : "92% bottom";
      const lineEnd = isMobile ? "82% 50%" : "92% bottom";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: slideEnd,
          scrub: true,
        },
        defaults: {
          ease: "none",
        },
      });

      tl.fromTo(
        wholeSliderRef.current,
        { xPercent: 0 },
        { xPercent: slidePercent }
      );

      if (reducedMotion) {
        gsap.set(".journey-line", { width: lineWidth });
        return;
      }

      gsap.to(".journey-line", {
        width: lineWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: lineStart,
          end: lineEnd,
          scrub: true,
        },
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef }
  );

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const items = allJourneyItems;

      if (reducedMotion) {
        items.forEach((item) => {
          gsap.set(`.jl-${item.id}`, { scaleY: 1 });
          gsap.set(`.jd-${item.id}`, { scale: 1 });
          gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: "transform" });
          gsap.set(`.description-${item.id}`, {
            opacity: 1,
            clearProps: "transform",
          });
        });
        return;
      }

      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, {
          scaleY: 0,
          transformOrigin: "bottom bottom",
        });
        gsap.set(`.jd-${item.id}`, { scale: 0 });
        gsap.set(`.title-${item.id}`, { opacity: 1 });
        gsap.set(`.description-${item.id}`, { opacity: 1 });
      });

      const titleSplits: Partial<Record<string, SplitTextInstance>> = {};
      const descriptionSplits: Partial<Record<string, SplitTextInstance>> = {};

      items.forEach((item) => {
        const titleEl = section.querySelector(`.title-${item.id}`);
        const descEl = section.querySelector(`.description-${item.id}`);

        if (titleEl && typeof SplitText !== "undefined") {
          try {
            titleSplits[item.id] = new SplitText(titleEl, {
              type: "chars, words, lines",
              mask: "lines",
            });
          } catch {
            // fallback
          }
        }

        if (descEl && typeof SplitText !== "undefined") {
          try {
            descriptionSplits[item.id] = new SplitText(descEl, {
              type: "chars, words, lines",
              mask: "lines",
            });
          } catch {
            // fallback
          }
        }
      });

      const createItemTimeline = (
        item: JourneyItem,
        startPos: number,
        endPos: number
      ) => {
        const lineSelector = `.jl-${item.id}`;
        const dotSelector = `.jd-${item.id}`;
        const titleLines = titleSplits[item.id]?.lines || [`.title-${item.id}`];
        const descriptionLines =
          descriptionSplits[item.id]?.lines || [`.description-${item.id}`];

        const isTop = topJourneyData.some((topItem) => topItem.id === item.id);

        if (!isTop) {
          gsap.set(lineSelector, { transformOrigin: "top top" });
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `${startPos}% 30%`,
            end: `${endPos}% 50%`,
            scrub: true,
          },
        });

        timeline
          .to(lineSelector, {
            scaleY: 1,
            duration: normalizedDuration * 0.4,
          })
          .to(
            dotSelector,
            {
              scale: 1,
              duration: normalizedDuration * 0.4,
            },
            "<"
          )
          .fromTo(
            titleLines,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              delay: -0.6 * normalizedDuration,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: "power2.out",
            }
          )
          .fromTo(
            descriptionLines,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: "power2.out",
            },
            "<"
          );

        return timeline;
      };

      // Calibrated positions for up to 6 or 7 items
      const isMobile = window.innerWidth < 600;
      const totalCount = items.length;

      items.forEach((item, index) => {
        let startPos: number;
        let endPos: number;

        if (isMobile) {
          startPos = Math.round(18 + (index / totalCount) * 60);
          endPos = startPos + 12;
        } else {
          startPos = Math.round(6 + (index / totalCount) * 66);
          endPos = startPos + 20;
        }

        createItemTimeline(item, startPos, endPos);
      });

      // Force ScrollTrigger to refresh positions after all timelines and DOM elements are registered
      ScrollTrigger.refresh();

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        Object.values(titleSplits).forEach((split) => split?.revert?.());
        Object.values(descriptionSplits).forEach((split) => split?.revert?.());
        window.removeEventListener("resize", handleResize);
      };
    },
    { dependencies: [normalizedDuration, reducedMotion], scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="process-timeline"
      className="h-[220vw] max-[600px]:h-[440vh] w-full relative selection:bg-[#E4521B]/30 selection:text-white"
      style={sectionStyle}
    >
      <div className="h-screen w-full sticky top-0 flex flex-col justify-center overflow-hidden">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[32vw] w-[260vw] items-center gap-[4vw] sm:gap-[5vw] px-[4vw] sm:px-[5vw] max-[600px]:h-[80vh] max-[600px]:w-[850vw] max-[600px]:px-[6vw]"
        >
          {/* Leading Media Card */}
          <div className="h-full w-[28vw] shrink-0 overflow-hidden rounded-[1.2vw] border border-white/10 shadow-2xl max-[600px]:h-[65vw] max-[600px]:w-[82vw] max-[600px]:rounded-[4vw] bg-[#141210]">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover filter contrast-[1.05]"
            />
          </div>

          {/* Timeline Milestones Canvas */}
          <div className="relative h-full w-full font-sans">
            {/* Center Timeline Track with glowing activeColor */}
            <div className="w-full absolute left-0 top-[49%] -translate-y-[50%] flex items-center h-fit pointer-events-none z-10">
              <div
                className="h-[.7vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.7vw] rounded-full shadow-[0_0_12px_rgba(228,82,27,0.6)]"
                style={activeStyle}
              />
              <div
                className="h-[2px] w-[0%] rounded-full journey-line shadow-[0_0_8px_rgba(228,82,27,0.5)]"
                style={activeStyle}
              />
              <div
                className="h-[.7vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.7vw] rounded-full shadow-[0_0_12px_rgba(228,82,27,0.6)]"
                style={activeStyle}
              />
            </div>

            {/* Top Half of Track (Steps 01, 03, 05) */}
            <div className="flex h-1/2 w-full items-center justify-start gap-[1vw]">
              {/* Title Header Block */}
              <div className="h-full w-[22%] pt-[1vw] max-[600px]:h-fit max-[600px]:pt-[4vw] shrink-0">
                {eyebrow && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E4521B] text-[0.8vw] max-[600px]:text-[3vw] font-mono font-bold tracking-wider uppercase mb-2">
                    <span>{eyebrow}</span>
                  </div>
                )}
                <h2 className="w-[85%] font-sans font-bold text-[2.6vw] leading-[1.05] tracking-[-0.03em] max-[600px]:text-[8vw] text-white">
                  {title}
                </h2>
              </div>

              {/* Top Milestones Array */}
              <div className="w-full flex h-full gap-x-[14vw] max-[600px]:gap-x-[36vw]">
                {topJourneyData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[28vw] px-[2.5vw] max-[600px]:flex max-[600px]:w-[68vw] max-[600px]:flex-col max-[600px]:px-[6vw] shrink-0"
                  >
                    {/* Stem & Dot */}
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full pointer-events-none">
                      <div
                        className={`size-[.9vw] max-[600px]:size-[2.4vw] -translate-x-[50%] relative aspect-square rounded-full jd-${item.id} shadow-[0_0_10px_rgba(228,82,27,0.8)]`}
                        style={activeStyle}
                      />
                      <div
                        className={`h-[94%] w-[2px] origin-bottom rounded-full jl-${item.id}`}
                        style={activeStyle}
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-[-1vw] space-y-[0.8vw] max-[600px]:mt-[-2vw]">
                      <div className="inline-block font-mono font-bold text-[#E4521B] text-[1.1vw] max-[600px]:text-[3.6vw]">
                        {item.step || item.year} —
                      </div>
                      <h4
                        className={`title-${item.id} font-sans font-bold text-[2vw] tracking-[-0.02em] leading-none max-[600px]:text-[6vw] text-white`}
                      >
                        {item.title || `${item.year} ${item.month}`}
                      </h4>
                      <p
                        className={`description-${item.id} w-[92%] font-sans text-[1.1vw] leading-[1.4] max-[600px]:w-[95%] max-[600px]:text-[4.2vw] font-normal`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Half of Track (Steps 02, 04, 06) */}
            <div className="h-1/2 flex items-center justify-start w-full">
              {/* Period Label Block */}
              <div className="w-[22%] pt-[2vw] max-[600px]:pt-[5vw] h-full shrink-0">
                <p
                  className="font-mono text-[1.1vw] tracking-wider uppercase leading-none max-[600px]:text-[3.5vw]"
                  style={mutedTextStyle}
                >
                  {periodLabel}
                </p>
              </div>

              {/* Bottom Milestones Array */}
              <div className="w-full flex h-full gap-x-[18vw] ml-[7vw] max-[600px]:gap-x-[36vw] max-[600px]:ml-[8vw]">
                {bottomJourneyData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[28vw] px-[2.5vw] max-[600px]:w-[68vw] max-[600px]:px-[6vw] shrink-0"
                  >
                    {/* Stem & Dot */}
                    <div className="w-full absolute left-0 bottom-[-1%] h-full pointer-events-none">
                      <div
                        className={`h-[94%] origin-top w-[2px] rounded-full max-[600px]:h-full jl-${item.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`size-[.9vw] max-[600px]:size-[2.4vw] -translate-x-[50%] relative w-auto aspect-square rounded-full jd-${item.id} shadow-[0_0_10px_rgba(228,82,27,0.8)]`}
                        style={activeStyle}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex h-full w-full flex-col justify-end space-y-[0.8vw] pb-[1vw]">
                      <div className="inline-block font-mono font-bold text-[#E4521B] text-[1.1vw] max-[600px]:text-[3.6vw]">
                        {item.step || item.year} —
                      </div>
                      <h4
                        className={`title-${item.id} font-sans font-bold text-[2vw] tracking-[-0.02em] leading-none max-[600px]:text-[6vw] text-white`}
                      >
                        {item.title || `${item.year} ${item.month}`}
                      </h4>
                      <p
                        className={`description-${item.id} w-[92%] font-sans text-[1.1vw] leading-[1.4] max-[600px]:w-[95%] max-[600px]:text-[4.2vw] font-normal`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

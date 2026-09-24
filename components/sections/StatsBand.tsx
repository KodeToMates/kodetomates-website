"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "../ui/Container";
import { STATS } from "../../lib/content";

function Counter({ endValue, label, suffix }: { endValue: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasStarted = false;

    // Fast finish for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(endValue);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        hasStarted = true;
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / endValue));
        const safeStepTime = stepTime < 10 ? 10 : stepTime;
        
        const timer = setInterval(() => {
          start += endValue > 100 ? 5 : endValue > 10 ? 1 : 0.1;
          if (start >= endValue) {
            setCount(endValue);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, safeStepTime);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [endValue]);

  const displayValue = endValue % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-4">
      <div className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-deep-green)] tracking-tight">
        {displayValue}{suffix}
      </div>
      <div className="text-sm md:text-base text-[var(--color-brand-deep-green)]/70 font-medium mt-1">
        {label}
      </div>
    </div>
  );
}

export function StatsBand() {
  return (
    <div className="w-full bg-[var(--color-brand-cream)] border-b border-[#EBE3D6] py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-[#EBE3D6]">
          {STATS.map((stat, idx) => (
            <Counter key={idx} endValue={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </Container>
    </div>
  );
}

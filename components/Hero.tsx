"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mounted) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center pt-24">
      {/* Drifting Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-brand-light-sage)]/20 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-brand-tan)]/30 blur-[100px] animate-float-slow" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-start">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md pl-2 pr-4 py-1.5 rounded-full border border-[var(--color-brand-light-sage)]/30 shadow-sm">
                <span className="bg-[var(--color-brand-clay)] text-white text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">New</span>
                <span className="text-sm font-semibold text-[var(--color-brand-deep-green)]">Cohort 03 opens this month</span>
              </div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-extrabold text-[var(--color-brand-deep-green)] tracking-tight animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
              Build together.<br />
              Learn together.<br />
              <span className="relative inline-block mt-2 text-[var(--color-brand-sage)]">
                Grow as mates
                <svg className="absolute -bottom-1 left-0 w-full overflow-visible pointer-events-none" viewBox="0 0 280 16" fill="none">
                  <path 
                    d="M5 12C70 4 150 2 275 10" 
                    className="stroke-[var(--color-brand-tan)] stroke-[6px] fill-none animate-draw-underline" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-5 text-lg text-[var(--color-brand-deep-green)]/80 max-w-xl animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
              A community where developers pair up, ship real projects, and mentor each other—from your very first commit to landing your dream tech career.
            </p>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-3 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <button className="inline-flex items-center gap-2 bg-[var(--color-brand-sage)] hover:bg-[var(--color-brand-deep-green)] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap">
                Start building &rarr;
              </button>
              <button className="inline-flex items-center gap-2 bg-white hover:bg-[var(--color-brand-cream)] text-[var(--color-brand-deep-green)] font-bold px-7 py-3.5 rounded-full border border-[var(--color-brand-light-sage)]/30 shadow-sm transition-all whitespace-nowrap">
                Explore programs
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-[var(--color-brand-tan)] border-2 border-[var(--color-brand-cream)] shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/9.x/notionists/svg?seed=${i}&backgroundColor=FEFBF7`} alt={`Avatar ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-light-sage)] border-2 border-[var(--color-brand-cream)] shadow-sm flex items-center justify-center text-xs font-bold text-white">
                  +490
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-[var(--color-brand-clay)]">
                  {"★★★★★".split("").map((star, i) => <span key={i} className="text-sm">{star}</span>)}
                  <span className="text-[var(--color-brand-deep-green)] font-bold ml-1.5 text-sm">4.9/5</span>
                </div>
                <span className="text-sm font-medium text-[var(--color-brand-deep-green)]/70">500+ mates building in public</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Visual */}
          <div className="relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
            
            {/* Dashed Rings - Rotating Container */}
            <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-dashed border-[var(--color-brand-light-sage)]/30 animate-spin-slow">
              {/* Top Tech Chip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white px-3 py-1.5 rounded-full shadow-md border border-[var(--color-brand-light-sage)]/20 font-bold text-xs text-[var(--color-brand-deep-green)] flex items-center gap-1.5 counter-spin">
                  <span className="text-[#61DAFB]">⚛</span> React
                </div>
              </div>
              {/* Bottom Tech Chip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white px-3 py-1.5 rounded-full shadow-md border border-[var(--color-brand-light-sage)]/20 font-bold text-xs text-[var(--color-brand-deep-green)] flex items-center gap-1.5 counter-spin">
                  <span className="text-[var(--color-brand-deep-green)]">▲</span> Next.js
                </div>
              </div>
              {/* Left Tech Chip */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 -translate-x-1/2">
                <div className="bg-white px-3 py-1.5 rounded-full shadow-md border border-[var(--color-brand-light-sage)]/20 font-bold text-xs text-[var(--color-brand-deep-green)] flex items-center gap-1.5 counter-spin">
                  <span className="bg-[#3178C6] text-white px-1 rounded text-[10px]">TS</span> TypeScript
                </div>
              </div>
              {/* Right Tech Chip */}
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2">
                <div className="bg-[var(--color-brand-deep-green)] px-3 py-1.5 rounded-full shadow-md border border-[var(--color-brand-light-sage)]/20 font-bold text-xs text-white flex items-center gap-1.5 counter-spin whitespace-nowrap">
                  <span className="text-[var(--color-brand-tan)]">♥</span> Live Pairing
                </div>
              </div>
            </div>

            {/* Inner Ring */}
            <div className="absolute w-[60%] h-[60%] rounded-full border border-[var(--color-brand-tan)]/40 pointer-events-none" />

            {/* Central Floating Logo Card */}
            <div 
              className="relative z-10 w-[60%] aspect-[4/3] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-10px_rgba(47,61,43,0.15)] border border-[var(--color-brand-light-sage)]/30 p-2 flex flex-col items-center justify-between cursor-default transition-transform duration-200 ease-out"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${-mousePos.y * 20}deg) scale3d(1.02, 1.02, 1.02)`,
              }}
            >
              <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden mb-3 p-8">
                <Image 
                  src="/logo-mark.png" 
                  alt="KodeToMates ribbon mark" 
                  width={420}
                  height={229}
                  priority
                  className="w-[80%] h-auto"
                />
              </div>
              <div className="bg-[var(--color-brand-cream)] w-full rounded-lg px-5 py-3 flex items-center justify-between border border-[var(--color-brand-light-sage)]/20 shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-brand-sage)] animate-pulse" />
                  <span className="text-[10px] font-bold text-[var(--color-brand-deep-green)]/70 uppercase tracking-wider">Session Live</span>
                </div>
                <span className="text-[10px] font-bold text-[var(--color-brand-clay)]">14 Pairs Coding</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

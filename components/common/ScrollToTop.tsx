'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      
      // Update visibility threshold (show when scrolled down > 280px)
      if (scrollY > 280) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Calculate percentage scrolled (0 to 1)
      if (docHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollY / docHeight))
        setScrollProgress(progress)
      }
    }

    // Passive listener for 60fps scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Circular progress math (radius = 20, circumference = 2 * PI * 20 ≈ 125.66)
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - scrollProgress * circumference

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-300 ease-out gpu-accelerated ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(228,82,27,0.2),0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(228,82,27,0.38),0_4px_12px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B] focus-visible:ring-offset-2 border border-white/80 select-none"
      >
        {/* SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5 overflow-visible"
          viewBox="0 0 48 48"
        >
          <defs>
            <linearGradient id="scrollToTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A32" />
              <stop offset="100%" stopColor="#E4521B" />
            </linearGradient>
          </defs>

          {/* Background circle track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="rgba(228, 82, 27, 0.15)"
            strokeWidth="2.5"
          />

          {/* Dynamic Progress Indicator Border */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="url(#scrollToTopGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>

        {/* Inner Arrow Icon with micro-interaction */}
        <div className="relative z-10 text-[#E4521B] transition-transform duration-300 group-hover:-translate-y-0.5">
          <ArrowUp className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.4]" />
        </div>

        {/* Ambient subtle orange glow behind button */}
        <span
          className="absolute inset-0 rounded-full bg-[#E4521B]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10 pointer-events-none"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

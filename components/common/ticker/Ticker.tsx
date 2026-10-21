'use client'

import React, { useState } from 'react'

export interface TickerProps {
  /** Array of text phrases or items to display in the marquee */
  phrases?: string[]
  /** Animation speed in seconds (default: 36) */
  duration?: number
  /** Direction of movement (default: 'left') */
  direction?: 'left' | 'right'
  /** Pause animation when hovered or focused (default: true) */
  pauseOnHover?: boolean
  /** Show play/pause toggle button (default: false) */
  showToggle?: boolean
  /** Edge gradient fade masking (default: true) */
  mask?: boolean
  /** Visual preset styling: 'hero' | 'faq' | 'banner' | 'clean' */
  variant?: 'hero' | 'faq' | 'banner' | 'clean'
  /** Accessible label for the region */
  ariaLabel?: string
  /** Additional container classes */
  className?: string
  /** Additional track classes */
  trackClassName?: string
  /** Additional item classes */
  itemClassName?: string
  /** Custom separator element between items (defaults to signature coral dot) */
  separator?: React.ReactNode
  /** Custom text color override (defaults to brand coral #E4521B) */
  textColor?: string
  /** Custom background color override */
  bgColor?: string
}

export const DEFAULT_TICKER_PHRASES = [
  'LEARN TOGETHER',
  'BUILD REAL PRODUCTS',
  'COLLABORATE AS A TEAM',
  'GROW & LEAD',
  '100% PRACTICAL',
  'OPEN SOURCE REPOSITORIES',
  'VERIFIABLE PROOF OF WORK',
]

export function Ticker({
  phrases = DEFAULT_TICKER_PHRASES,
  duration = 36,
  direction = 'left',
  pauseOnHover = true,
  showToggle = false,
  mask = true,
  variant = 'hero',
  ariaLabel = 'Highlights Ticker',
  className = '',
  trackClassName = '',
  itemClassName = '',
  separator,
  textColor,
  bgColor,
}: TickerProps) {
  const [isPaused, setIsPaused] = useState(false)

  // Variant-based styling presets
  const variantStyles = {
    hero: 'w-full bg-[#FAF7F2] border-y border-[#EDE8DF] py-3',
    faq: 'w-full bg-transparent border-y border-[#F0EBE1] py-2.5 my-4 sm:my-6',
    banner: 'w-full bg-[#141210] border-y border-white/10 py-3 text-white',
    clean: 'w-full bg-transparent py-2',
  }[variant]

  const animDirection = direction === 'right' ? 'kt-ticker-slide-right' : 'kt-ticker-slide-left'

  return (
    <div
      className={`relative z-20 select-none overflow-hidden group ${variantStyles} ${bgColor || ''} ${className}`}
      role="region"
      aria-label={ariaLabel}
      data-paused={isPaused ? 'true' : 'false'}
    >
      <style>{`
        .kt-ticker-container[data-paused="true"] .kt-ticker-track {
          animation-play-state: paused !important;
        }

        .kt-ticker-track {
          display: inline-flex;
          will-change: transform;
        }

        .kt-ticker-track-hover:hover,
        .kt-ticker-track-hover:focus-within {
          animation-play-state: paused;
        }

        .kt-ticker-run {
          display: inline-flex;
          flex: none;
          align-items: center;
        }

        .kt-ticker-item {
          display: inline-flex;
          align-items: center;
          padding: 0 1rem;
          font-family: var(--font-jakarta), var(--font-sans), sans-serif;
          font-size: clamp(12px, 1.15vw, 13.5px);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .kt-ticker-dot {
          display: inline-block;
          width: 0.38em;
          height: 0.38em;
          border-radius: 50%;
          margin-left: 1.8rem;
          vertical-align: middle;
          opacity: 0.9;
        }

        @keyframes kt-ticker-slide-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes kt-ticker-slide-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kt-ticker-track {
            animation: none !important;
          }
        }
      `}</style>

      {/* Screen Reader Announcement */}
      <p className="sr-only">{phrases.join('. ')}</p>

      <div className="flex items-center w-full gap-3 kt-ticker-container" data-paused={isPaused ? 'true' : 'false'}>
        {/* Full-width masked marquee track */}
        <div
          className="flex-1 min-w-0 overflow-hidden"
          style={
            mask
              ? {
                  WebkitMaskImage:
                    'linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)',
                  maskImage:
                    'linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)',
                }
              : undefined
          }
          aria-hidden="true"
        >
          <div
            className={`kt-ticker-track ${pauseOnHover ? 'kt-ticker-track-hover' : ''} ${trackClassName}`}
            style={{
              animation: `${animDirection} ${duration}s linear infinite`,
            }}
          >
            {[0, 1].map((copyIndex) => (
              <div className="kt-ticker-run" key={copyIndex}>
                {[...phrases, ...phrases].map((phrase, idx) => (
                  <span
                    className={`kt-ticker-item ${itemClassName}`}
                    style={{ color: textColor || '#E4521B' }}
                    key={idx}
                  >
                    {phrase}
                    {separator ? (
                      separator
                    ) : (
                      <span
                        className="kt-ticker-dot"
                        style={{ backgroundColor: textColor || '#E4521B' }}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Optional Play/Pause Toggle Button */}
        {showToggle && (
          <button
            type="button"
            className="flex-none grid place-items-center w-8 h-8 rounded-full bg-[#FAF7F2] text-[#E4521B] hover:bg-[#E4521B] hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#E4521B] focus-visible:outline-offset-2 cursor-pointer mr-2 shrink-0 border border-[#EDE8DF]"
            aria-label={isPaused ? 'Play the moving ticker' : 'Pause the moving ticker'}
            aria-pressed={isPaused}
            onClick={() => setIsPaused((prev) => !prev)}
          >
            {isPaused ? (
              <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                <path d="M3.5 2v10l8.5-5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                <path d="M3 2h3v10H3zM8 2h3v10H8z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default Ticker

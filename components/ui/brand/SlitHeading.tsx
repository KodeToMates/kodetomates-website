'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'

export type SlitLineItem =
  | string
  | {
      text: string
      color?: string
      className?: string
    }

export interface SlitHeadingProps {
  /** Lines of text to display. If string with \n is passed, it is split automatically. */
  text?: string
  lines?: SlitLineItem[]
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span'
  id?: string
  align?: 'left' | 'center' | 'right'
  /** Slit depth (0 = rises fully into view at rest; > 0 e.g. 0.35 = slit baseline that lifts on hover) */
  slit?: number
  className?: string
  dotColor?: string
  textColor?: string
  eyebrow?: string
  showAccentLine?: boolean
}

interface ParsedSegment {
  text: string
  color?: string
  className?: string
}

interface ParsedLine {
  rawText: string
  segments: ParsedSegment[]
}

function parseSlitLine(item: SlitLineItem): ParsedLine {
  if (typeof item === 'object' && item !== null) {
    return {
      rawText: item.text,
      segments: [
        {
          text: item.text,
          color: item.color,
          className: item.className,
        },
      ],
    }
  }

  const raw = String(item).trim()
  const segments: ParsedSegment[] = []
  const spanRegex = /<span\b([^>]*)>([\s\S]*?)<\/span>/gi

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = spanRegex.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      const textBefore = raw.substring(lastIndex, match.index)
      if (textBefore.length > 0) {
        segments.push({ text: textBefore })
      }
    }

    const attrs = match[1] || ''
    const innerText = match[2] || ''

    const classMatch = attrs.match(/class(?:Name)?=["']([^"']*)["']/i)
    const className = classMatch ? classMatch[1] : ''

    const styleMatch = attrs.match(/style=["']([^"']*)["']/i)
    const styleAttr = styleMatch ? styleMatch[1] : ''
    const colorMatch = styleAttr.match(/color:\s*([^;]+)/i)
    let color = colorMatch ? colorMatch[1].trim() : undefined

    if (!color && className) {
      const varMatch = className.match(/text-\[(var\(--[^)]+\))\]/)
      const hexMatch = className.match(/text-\[(#[0-9a-fA-F]+)\]/)
      if (varMatch) {
        color = varMatch[1]
      } else if (hexMatch) {
        color = hexMatch[1]
      } else if (className.includes('text-primary-orange') || className.includes('text-coral')) {
        color = 'var(--color-primary-orange, #E4521B)'
      } else if (className.includes('text-white')) {
        color = '#FFFFFF'
      }
    }

    segments.push({
      text: innerText,
      className,
      color,
    })

    lastIndex = spanRegex.lastIndex
  }

  if (lastIndex < raw.length) {
    const textAfter = raw.substring(lastIndex)
    if (textAfter.length > 0) {
      segments.push({ text: textAfter })
    }
  }

  if (segments.length === 0) {
    segments.push({ text: raw })
  }

  const rawText = segments.map((s) => s.text).join('')
  return { rawText, segments }
}

export function SlitHeading({
  text,
  lines: linesProp,
  as: Component = 'h2',
  id,
  align = 'left',
  slit = 0,
  className = '',
  dotColor = '#E4521B',
  textColor = '#111827',
  eyebrow,
  showAccentLine = false,
}: SlitHeadingProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const rawLines = useMemo(() => {
    if (linesProp && linesProp.length > 0) return linesProp
    if (text) return text.split('\n')
    return []
  }, [text, linesProp])

  const parsedLines = useMemo(() => rawLines.map(parseSlitLine), [rawLines])

  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  let charIndex = 0
  const cut = Math.min(0.5, Math.max(0, slit))
  const slitCutValue = cut > 0 ? `calc(${(cut * 0.72).toFixed(3)}em + 0.05em)` : '0px'

  const alignmentClasses = {
    left: 'text-left items-start justify-start',
    center: 'text-center items-center justify-center',
    right: 'text-right items-end justify-end',
  }[align]

  const accentLineAlignment = {
    left: 'origin-left justify-start',
    center: 'origin-center justify-center',
    right: 'origin-right justify-end',
  }[align]

  return (
    <div
      ref={rootRef}
      className={`slit-heading-wrap flex flex-col ${alignmentClasses}`}
      data-visible={isVisible ? 'true' : 'false'}
      style={
        {
          '--slit-cut': slitCutValue,
          '--slit-dot-color': dotColor,
          '--slit-text-color': textColor,
        } as React.CSSProperties
      }
    >
      <style>{`
        .slit-title {
          margin: 0;
          font-family: var(--font-jakarta), var(--font-sans), 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.03em;
          color: var(--slit-text-color, #111827);
        }
        .slit-line {
          display: block;
          overflow: hidden;
          padding-top: 0.04em;
          padding-bottom: 0.08em;
          margin-top: 0;
        }
        .slit-word {
          display: inline-block;
          white-space: nowrap;
        }
        .slit-ch {
          display: inline-block;
          transform: translateY(105%);
          transition: transform 760ms cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: min(calc(var(--i) * 22ms), 400ms);
          will-change: transform;
        }
        .slit-heading-wrap[data-visible="true"] .slit-ch {
          transform: translateY(0);
        }
        @media (hover: hover) and (pointer: fine) {
          .slit-title:hover .slit-ch {
            transform: translateY(0);
          }
        }
        .slit-coral-dot {
          color: var(--slit-dot-color, #E4521B) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .slit-ch {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Optional Brand Eyebrow */}
      {eyebrow && (
        <div className="inline-flex items-center gap-2.5 mb-3.5 select-none">
          <span className="flex items-center justify-center shrink-0" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.45" />
              <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#E4521B" />
            </svg>
          </span>
          <span className="font-sans font-bold text-[12px] sm:text-[13px] tracking-[0.16em] text-[#E4521B] uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      {/* Main Headline Component */}
      <Component
        id={id}
        className={`slit-title ${className}`}
        aria-label={parsedLines.map((l) => l.rawText).join(' ')}
        data-hover-slit={cut > 0 ? 'true' : 'false'}
      >
        {parsedLines.map((lineObj, li) => (
          <span className="slit-line" key={li} aria-hidden="true">
            {lineObj.segments.map((seg, si) => {
              const segStyle: React.CSSProperties & Record<string, string | undefined> = {}
              if (seg.color) {
                segStyle.color = seg.color
                segStyle['--slit-text-color'] = seg.color
              }

              const tokens = seg.text.match(/\S+|\s+/g) || []

              return (
                <span
                  key={si}
                  className={seg.className || undefined}
                  style={Object.keys(segStyle).length > 0 ? segStyle : undefined}
                >
                  {tokens.map((token, ti) => {
                    if (/^\s+$/.test(token)) {
                      return ' '
                    }
                    return (
                      <span className="slit-word" key={ti}>
                        {Array.from(token).map((ch, ci) => {
                          const isAccent = ch === '.' || ch === '?'
                          return (
                            <span
                              className={`slit-ch ${isAccent ? 'slit-coral-dot' : ''}`}
                              key={ci}
                              style={{ ['--i' as string]: charIndex++ } as React.CSSProperties}
                            >
                              {ch}
                            </span>
                          )
                        })}
                      </span>
                    )
                  })}
                </span>
              )
            })}
          </span>
        ))}
      </Component>

      {/* Optional Signature Accent Line */}
      {showAccentLine && (
        <div className={`flex items-center gap-2 my-2.5 ${accentLineAlignment}`} aria-hidden="true">
          <span className="w-12 h-[3.5px] rounded-full bg-[#E4521B]" />
          <span className="w-2 h-[3.5px] rounded-full bg-[#E4521B]/40" />
        </div>
      )}
    </div>
  )
}

export default SlitHeading

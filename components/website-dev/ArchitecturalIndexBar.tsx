'use client'

import React from 'react'

export interface ArchitecturalIndexBarProps {
  /** The current chapter/index number, e.g. "01" */
  index: string
  /** The total chapters/slides, e.g. "03" (optional) */
  total?: string
  /** Main taxonomy title, e.g. "Static Architecture" */
  title: string
  /** Optional secondary subtitle or description, e.g. "Fast & Maintenance-Free" */
  subtitle?: string
  /** Visual theme: "light" (default for white/sand), "dark" (for obsidian backgrounds), or "orange" (for solid brand orange) */
  theme?: 'light' | 'dark' | 'orange'
  /** Optional container max-width class (defaults to "max-w-[1380px]") */
  maxWidth?: string
  /** Optional extra className for the wrapper */
  className?: string
  /** Hide the right progress counter if not needed */
  showCounter?: boolean
}

export function ArchitecturalIndexBar({
  index,
  total = '03',
  title,
  subtitle,
  theme = 'light',
  maxWidth = 'max-w-[1380px]',
  className = '',
  showCounter = true,
}: ArchitecturalIndexBarProps) {
  const isLight = theme === 'light'
  const isOrange = theme === 'orange'
  // isDark is fallback if not light and not orange

  // Theme-driven styling tokens
  const borderBottomColor = isLight
    ? 'border-border-warm/80'
    : isOrange
    ? 'border-white/20'
    : 'border-white/10'

  const dotColor = isLight
    ? 'bg-primary-orange'
    : isOrange
    ? 'bg-white'
    : 'bg-primary-orange'

  const indexNumberColor = isLight
    ? 'text-heading-dark'
    : 'text-white'

  const dividerColor = isLight
    ? 'bg-border-subtle'
    : isOrange
    ? 'bg-white/30'
    : 'bg-white/20'

  const titleColor = isLight
    ? 'text-primary-orange'
    : isOrange
    ? 'text-[#FFE3D4]'
    : 'text-primary-sunset'

  const subtitleSlashColor = isLight
    ? 'text-border-subtle'
    : isOrange
    ? 'text-white/40'
    : 'text-white/25'

  const subtitleColor = isLight
    ? 'text-body-muted'
    : isOrange
    ? 'text-white/80'
    : 'text-white/70'

  const counterTextColor = isLight
    ? 'text-body-muted'
    : isOrange
    ? 'text-white/80'
    : 'text-white/60'

  const counterActiveColor = isLight
    ? 'text-primary-orange font-bold'
    : isOrange
    ? 'text-white font-bold'
    : 'text-primary-sunset font-bold'

  return (
    <div
      className={`w-full ${maxWidth} mx-auto flex items-center justify-between pb-3.5 mb-4 sm:mb-5 border-b ${borderBottomColor} ${className}`}
    >
      {/* Left side: Micro-geometric square, Index Number, Divider, Title, Subtitle */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-xs shrink-0 ${dotColor}`} />
          <span className={`font-mono text-xs font-bold tracking-wider ${indexNumberColor}`}>
            {index}
          </span>
        </div>

        <span className={`h-3.5 w-[1px] shrink-0 ${dividerColor}`} />

        <span className={`font-sans font-semibold text-xs uppercase tracking-[0.12em] ${titleColor}`}>
          {title}
        </span>

        {subtitle && (
          <>
            <span className={`hidden sm:inline-block font-light ${subtitleSlashColor}`}>
              /
            </span>
            <span className={`hidden sm:inline-block font-sans text-xs ${subtitleColor}`}>
              {subtitle}
            </span>
          </>
        )}
      </div>

      {/* Right side: Monospace Step Counter e.g. 01 / 03 */}
      {showCounter && total && (
        <div className={`flex items-center gap-2 font-mono text-[11px] tracking-widest ${counterTextColor}`}>
          <span className={counterActiveColor}>{index}</span>
          <span className={subtitleSlashColor}>/</span>
          <span>{total}</span>
        </div>
      )}
    </div>
  )
}

export default ArchitecturalIndexBar

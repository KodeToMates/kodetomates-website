import React from 'react'
import { BRAND_COLORS } from '@/lib/constants'

export interface BrandEmblemProps {
  size?: number
  primaryColor?: string
  secondaryColor?: string
  className?: string
}

export function BrandEmblem({
  size = 16,
  primaryColor = BRAND_COLORS.primary,
  secondaryColor = BRAND_COLORS.sunset,
  className = '',
}: BrandEmblemProps) {
  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${className}`} aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" fill={secondaryColor} fillOpacity="0.45" />
        <rect x="6.5" y="6.5" width="7" height="7" rx="1.5" fill={primaryColor} />
      </svg>
    </span>
  )
}

export default BrandEmblem

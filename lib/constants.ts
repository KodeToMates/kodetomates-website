/**
 * KodeToMates Global Brand & Design System Constants
 * Centralized design tokens for colors, typography standards, and brand geometry.
 */

export const BRAND_COLORS = {
  primary: '#E4521B',
  primaryHover: '#CC420F',
  sunset: '#FF914D',
  berry: '#AB003E',
  headingDark: '#161413',
  bodyText: '#554E48',
  bodyMuted: '#665F58',
  bodyGray: '#6B645E',
  surfaceSand: '#FAF8F5',
  surfacePill: '#F5F2EB',
  borderWarm: '#F0EBE1',
  borderSubtle: '#E8E2D9',
  pillBlack: '#141210',
  darkBg: '#0C0B0A',
  white: '#FFFFFF',
} as const

export type BrandColorKey = keyof typeof BRAND_COLORS

export const BRAND_FONTS = {
  sans: 'var(--font-jakarta), var(--font-sans), "Plus Jakarta Sans", sans-serif',
} as const

// Export navigation constants & types
export * from '@/config/navigation'

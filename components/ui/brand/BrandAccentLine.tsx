import React from 'react'

export interface BrandAccentLineProps {
  align?: 'left' | 'center' | 'right'
  theme?: 'orange' | 'white'
  className?: string
}

export function BrandAccentLine({
  align = 'center',
  theme = 'orange',
  className = '',
}: BrandAccentLineProps) {
  const alignClass =
    align === 'center'
      ? 'justify-center mx-auto'
      : align === 'right'
      ? 'justify-end ml-auto'
      : 'justify-start'

  const isWhite = theme === 'white'

  return (
    <div className={`flex items-center gap-2 my-3.5 ${alignClass} ${className}`} aria-hidden="true">
      <span
        className={`w-12 sm:w-14 h-[3.5px] rounded-full ${
          isWhite ? 'bg-white' : 'bg-primary-orange'
        }`}
      />
      <span
        className={`w-2.5 h-[3.5px] rounded-full ${
          isWhite ? 'bg-white/40' : 'bg-primary-orange/40'
        }`}
      />
    </div>
  )
}

export default BrandAccentLine

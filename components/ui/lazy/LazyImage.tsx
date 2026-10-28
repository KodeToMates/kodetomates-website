'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { TomatoEmblem } from '../feedback/UniqueLoader'
import { cn } from '@/lib/utils'

export interface LazyImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  /** Optional custom container aspect ratio or classes */
  containerClassName?: string
  /** Whether to show the mini-tomato watermark during load */
  showTomatoWatermark?: boolean
}

/**
 * Unique LazyImage Component
 * Features progressive warm blur-up, animated terracotta shimmer placeholder,
 * and elegant graceful failure handling.
 */
export function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  showTomatoWatermark = true,
  priority = false,
  fill,
  width,
  height,
  ...rest
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-surface-dim/60',
        fill ? 'w-full h-full' : '',
        containerClassName
      )}
    >
      {/* Loading Placeholder Skeleton */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#FEF3E5]/90 via-[#F9F8F6] to-[#FDE6D0]/80 backdrop-blur-xs"
          >
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
              style={{ animation: 'shimmer-sweep 1.8s infinite linear' }}
            />

            {showTomatoWatermark && (
              <div className="relative z-10 opacity-70">
                <TomatoEmblem size={36} pulse={false} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State Fallback */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-surface-dim/90 text-center z-10">
          <TomatoEmblem size={36} pulse={false} />
          <span className="text-xs font-mono text-[#5A5654] mt-2">
            Image not found
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'transition-all duration-700 ease-out',
            isLoaded
              ? 'opacity-100 scale-100 blur-0'
              : 'opacity-0 scale-105 blur-md',
            className
          )}
          {...rest}
        />
      )}
    </div>
  )
}

export default LazyImage

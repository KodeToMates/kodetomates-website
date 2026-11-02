'use client'

import React, { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GooeyLoader } from './GooeyLoader'

export interface SitePreloaderProps {
  /** Minimum duration in ms before finishing to ensure smooth animation perception (default: 1100ms) */
  minDuration?: number
  /** Whether to show preloader only once per session or on every full page refresh (default: false) */
  oncePerSession?: boolean
}

const emptySubscribe = () => () => {}

function checkAlreadySeen(oncePerSession: boolean): boolean {
  if (!oncePerSession || typeof window === 'undefined') return false
  try {
    return sessionStorage.getItem('kodetomates_preloader_seen') === 'true'
  } catch {
    return false
  }
}

function SitePreloaderContent({
  minDuration = 1100,
  oncePerSession = false,
}: SitePreloaderProps) {
  const [isVisible, setIsVisible] = useState(() => !checkAlreadySeen(oncePerSession))
  const [progress, setProgress] = useState(0)
  const startTimeRef = useRef<number>(0)
  const animFrameRef = useRef<number | null>(null)

  // Complete preloader and restore scrolling
  const handleComplete = useCallback(() => {
    setIsVisible(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
      document.documentElement.classList.remove('lenis-stopped')
    }
    if (typeof window !== 'undefined') {
      const win = window as unknown as { lenis?: { start: () => void } }
      win.lenis?.start?.()
    }
  }, [])

  // Skip handler (Escape key or skip button)
  const handleSkip = useCallback(() => {
    setProgress(100)
    setTimeout(handleComplete, 80)
  }, [handleComplete])

  useEffect(() => {
    if (!isVisible) {
      const handleReplayEvent = () => {
        setProgress(0)
        setIsVisible(true)
      }
      window.addEventListener('kode:replay-preloader', handleReplayEvent)
      ;(window as unknown as { __replayPreloader?: () => void }).__replayPreloader = handleReplayEvent

      return () => {
        window.removeEventListener('kode:replay-preloader', handleReplayEvent)
      }
    }

    if (oncePerSession && typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('kodetomates_preloader_seen', 'true')
      } catch {
        // Ignore storage access errors
      }
    }

    startTimeRef.current = Date.now()

    // Lock page scroll while preloader is active
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
      document.documentElement.classList.add('lenis-stopped')
    }
    if (typeof window !== 'undefined') {
      const win = window as unknown as { lenis?: { stop: () => void } }
      win.lenis?.stop?.()
    }

    // Smooth progress simulation with organic curve
    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current
      const progressRatio = Math.min(elapsed / minDuration, 1)

      const eased = 1 - Math.pow(1 - progressRatio, 3)
      const currentVal = Math.round(eased * 100)

      setProgress(currentVal)

      if (progressRatio < 1) {
        animFrameRef.current = requestAnimationFrame(updateProgress)
      } else {
        setProgress(100)
        setTimeout(() => {
          handleComplete()
        }, 160)
      }
    }

    animFrameRef.current = requestAnimationFrame(updateProgress)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    const handleReplayEvent = () => {
      setProgress(0)
      startTimeRef.current = Date.now()
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
      }
      animFrameRef.current = requestAnimationFrame(updateProgress)
    }
    window.addEventListener('kode:replay-preloader', handleReplayEvent)
    ;(window as unknown as { __replayPreloader?: () => void }).__replayPreloader = handleReplayEvent

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('kode:replay-preloader', handleReplayEvent)
      if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
        document.documentElement.classList.remove('lenis-stopped')
      }
      if (typeof window !== 'undefined') {
        const win = window as unknown as { lenis?: { start: () => void } }
        win.lenis?.start?.()
      }
    }
  }, [isVisible, minDuration, oncePerSession, handleComplete, handleSkip])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="site-preloader-backdrop"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black select-none cursor-default"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          {/* Centered White Gooey Blobs Loading UI */}
          <motion.div
            key="white-gooey-loader"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center justify-center"
          >
            <GooeyLoader size={24} color="#FFFFFF" duration={1.2} />

            {/* Subtle percentage readout */}
            <span className="font-mono text-xs font-medium text-white/40 tabular-nums mt-6 tracking-widest">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SitePreloader(props: SitePreloaderProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!isMounted) return null

  return <SitePreloaderContent {...props} />
}

export default SitePreloader

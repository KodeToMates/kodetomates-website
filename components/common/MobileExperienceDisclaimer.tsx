'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Laptop, X } from 'lucide-react'

const STORAGE_KEY = 'ktm_mobile_disclaimer_dismissed'
const DISPLAY_DURATION_MS = 20000 // 20 seconds auto-dismiss
const INITIAL_DELAY_MS = 1500 // 1.5s delay after page load

export function MobileExperienceDisclaimer() {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const initialDelayRef = useRef<NodeJS.Timeout | null>(null)

  const handleDismiss = useCallback(() => {
    setIsVisible(false)
    if (timerRef.current) clearTimeout(timerRef.current)
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignore storage errors
    }
  }, [])

  useEffect(() => {
    // Only execute in browser
    if (typeof window === 'undefined') return

    // Verify it is a mobile viewport (< 768px)
    const isMobile = window.innerWidth < 768
    if (!isMobile) return

    // Check if user already dismissed it during this browsing session
    try {
      const isDismissed = sessionStorage.getItem(STORAGE_KEY)
      if (isDismissed === 'true') return
    } catch {
      // Ignore storage errors in restricted browser contexts
    }

    // Delay display slightly so initial page render settles
    initialDelayRef.current = setTimeout(() => {
      setIsVisible(true)

      // Start 20-second countdown for auto-dismissal
      timerRef.current = setTimeout(() => {
        handleDismiss()
      }, DISPLAY_DURATION_MS)
    }, INITIAL_DELAY_MS)

    return () => {
      if (initialDelayRef.current) clearTimeout(initialDelayRef.current)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [handleDismiss])

  return (
    <AnimatePresence>
      {isVisible && (
        <aside
          role="region"
          aria-label="Desktop experience recommendation"
          className="fixed bottom-5 inset-x-4 z-[9999] md:hidden max-w-sm mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF7A30] via-[#E4521B] to-[#D13B07] text-white shadow-[0_12px_32px_rgba(228,82,27,0.45)] border border-white/25 px-3.5 py-3"
          >
            <div className="flex items-center gap-3">
              {/* Laptop Icon */}
              <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                <Laptop className="w-4 h-4 stroke-[2.4]" />
              </div>

              {/* Heading Only */}
              <p className="flex-1 font-sans font-semibold text-[13px] leading-snug text-white tracking-[-0.01em]">
                For the best experience, use a laptop or desktop
              </p>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleDismiss}
                aria-label="Close notification"
                className="flex-shrink-0 p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/20 active:scale-90 transition-all cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>

            {/* 20-Second Progress Bar */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-1 bg-black/15 overflow-hidden"
            >
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 20, ease: 'linear' }}
                className="h-full bg-white/80"
              />
            </div>
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
  )
}

export default MobileExperienceDisclaimer

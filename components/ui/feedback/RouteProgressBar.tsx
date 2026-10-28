'use client'

import React, { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

/**
 * Unique Top Route Progress Bar for KodeToMates
 * Activates whenever navigation begins, with glowing brand gradient and trailing light flare
 */
export function RouteProgressBar() {
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)
  const [progress, setProgress] = useState(0)
  const prevPathnameRef = useRef(pathname)

  // Complete and reset progress bar on pathname change
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname
      if (isNavigating) {
        const completeTimer = setTimeout(() => {
          setProgress(100)
        }, 0)
        const resetTimer = setTimeout(() => {
          setIsNavigating(false)
          setProgress(0)
        }, 350)
        return () => {
          clearTimeout(completeTimer)
          clearTimeout(resetTimer)
        }
      }
    }
  }, [pathname, isNavigating])

  // Listen to internal link clicks to trigger route progress immediately
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      const targetAttr = target.getAttribute('target')

      // Ignore external links, mailto, tel, anchors on same page, or new tabs
      if (
        !href ||
        targetAttr === '_blank' ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        href.startsWith('http://') ||
        href.startsWith('https://')
      ) {
        return
      }

      // If navigating to the same URL, ignore
      if (href === pathname) return

      // Start navigation indicator
      setIsNavigating(true)
      setProgress(25)

      const timer1 = setTimeout(() => setProgress(65), 180)
      const timer2 = setTimeout(() => setProgress(88), 450)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  if (!isNavigating && progress === 0) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none overflow-visible"
      role="progressbar"
      aria-label="Page loading progress"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#AB003E] relative"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        {/* Glowing tip of the progress bar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-[#FF914D] blur-[3px] opacity-90 shadow-[0_0_12px_#E4521B]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
      </motion.div>
    </div>
  )
}

export default RouteProgressBar

'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export interface HeroGlitchProps {
  imageSrc: string
  imageAlt: string
  className?: string
  objectPosition?: string
}

export function HeroGlitch({
  imageSrc,
  imageAlt,
  className = '',
  objectPosition = 'object-[center_35%]',
}: HeroGlitchProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchPhase, setGlitchPhase] = useState(0)

  // Old TV sync drop & glitch cycle: triggers every 2.2 - 4.2 seconds
  useEffect(() => {
    let timerId: NodeJS.Timeout
    let burstId: NodeJS.Timeout

    const scheduleNextGlitch = () => {
      const waitTime = Math.floor(Math.random() * 2000) + 2200 // 2.2s - 4.2s
      timerId = setTimeout(() => {
        setIsGlitching(true)
        setGlitchPhase(Math.floor(Math.random() * 3))

        // Snappy TV glitch burst duration (200ms - 350ms)
        const burstDuration = Math.floor(Math.random() * 150) + 200
        burstId = setTimeout(() => {
          setIsGlitching(false)
          scheduleNextGlitch()
        }, burstDuration)
      }, waitTime)
    }

    scheduleNextGlitch()

    return () => {
      clearTimeout(timerId)
      clearTimeout(burstId)
    }
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <style>{`
        /* Continuous Subtle CRT Phosphor Hum */
        @keyframes crt-phosphor-flicker {
          0% { opacity: 0.98; }
          48% { opacity: 1; }
          50% { opacity: 0.94; }
          52% { opacity: 1; }
          95% { opacity: 0.97; }
          100% { opacity: 1; }
        }

        /* Slow VHS / CRT Tracking Bar Roll */
        @keyframes vhs-tracking-roll {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }

        /* Fast TV Static Grain Dance */
        @keyframes tv-static-jitter {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-3%, -2%); }
          40% { transform: translate(2%, 3%); }
          60% { transform: translate(-2%, 2%); }
          80% { transform: translate(3%, -1%); }
          100% { transform: translate(0, 0); }
        }

        /* Old TV Screen Twitch */
        @keyframes tv-screen-twitch {
          0% { transform: scale(1.02) translate(0, 0); }
          25% { transform: scale(1.02) translate(-4px, 3px) skewX(-0.8deg); }
          50% { transform: scale(1.02) translate(5px, -2px) skewX(1deg); }
          75% { transform: scale(1.02) translate(-3px, 1px); }
          100% { transform: scale(1.02) translate(0, 0); }
        }
      `}</style>

      {/* --- 1. BASE CINEMATIC IMAGE WITH FRAMER MOTION ZOOM OUT & CROSS-FADE --- */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          animation: isGlitching ? 'tv-screen-twitch 0.22s steps(2) infinite' : 'none',
        }}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={imageSrc}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { scale: 1.18, opacity: 0 }
            }
            animate={{
              scale: 1.02,
              opacity: 1,
              transition: {
                scale: {
                  duration: 6,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 1.2,
                  ease: 'easeInOut',
                },
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 1.2,
                ease: 'easeInOut',
              },
            }}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: 'transform, opacity' }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className={`object-cover ${objectPosition} filter brightness-[0.88] contrast-[1.1]`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- 2. OLD TV TUBE VIGNETTE & PHOSPHOR CURVATURE (Soft CRT edges) --- */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 72%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* --- 3. DENSE CRT SCANLINES & APERTURE GRILLE (Subtle TV scanlines) --- */}
      <div
        className="absolute inset-0 pointer-events-none z-[3] opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1.5px, transparent 1.5px, transparent 3.5px)',
          animation: 'crt-phosphor-flicker 0.15s infinite',
        }}
      />

      {/* --- 4. ROLLING VHS / ANALOG TV TRACKING DISTORTION BAR --- */}
      <div
        className="absolute inset-x-0 h-32 pointer-events-none z-[4] opacity-30 mix-blend-screen"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 35%, rgba(228,82,27,0.25) 55%, transparent 100%)',
          animation: 'vhs-tracking-roll 5.5s linear infinite',
        }}
      />

      {/* --- 5. OLD TV STATIC SNOW / NOISE GRAIN OVERLAY --- */}
      <div
        className="absolute -inset-[20%] pointer-events-none z-[4] opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: 'tv-static-jitter 0.2s steps(4) infinite',
        }}
      />

      {/* --- 6. HEAVY ANALOG GLITCH & RGB CHROMATIC ABERRATION BURSTS --- */}
      {isGlitching && (
        <div className="absolute inset-0 pointer-events-none select-none z-[5]" aria-hidden="true">
          {/* TV Static Noise Spike */}
          <div
            className="absolute inset-0 opacity-[0.22] mix-blend-color-dodge"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Red/Coral Phosphor Beam Misalignment (Slice 1) */}
          <div
            className="absolute inset-0 opacity-90 mix-blend-screen"
            style={{
              transform: glitchPhase === 0 ? 'translateX(-14px)' : 'translateX(12px) skewX(-2.5deg)',
              clipPath:
                glitchPhase === 0
                  ? 'polygon(0 10%, 100% 10%, 100% 28%, 0 28%)'
                  : glitchPhase === 1
                  ? 'polygon(0 45%, 100% 45%, 100% 65%, 0 65%)'
                  : 'polygon(0 70%, 100% 70%, 100% 88%, 0 88%)',
              filter: 'drop-shadow(7px 0 0 #E4521B) contrast(1.4) saturate(1.8)',
            }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_35%] filter brightness-[0.88]"
            />
          </div>

          {/* Cyan/Electric Blue Beam Misalignment (Slice 2) */}
          <div
            className="absolute inset-0 opacity-85 mix-blend-screen"
            style={{
              transform: glitchPhase === 0 ? 'translateX(15px) skewX(2.5deg)' : 'translateX(-14px)',
              clipPath:
                glitchPhase === 0
                  ? 'polygon(0 30%, 100% 30%, 100% 48%, 0 48%)'
                  : glitchPhase === 1
                  ? 'polygon(0 68%, 100% 68%, 100% 86%, 0 86%)'
                  : 'polygon(0 15%, 100% 15%, 100% 35%, 0 35%)',
              filter: 'drop-shadow(-7px 0 0 #00E5FF) contrast(1.3) hue-rotate(180deg)',
            }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_35%] filter brightness-[0.85]"
            />
          </div>

          {/* Horizontal Static Noise Interference Bars */}
          <div
            className="absolute inset-x-0 h-5 bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[1px]"
            style={{
              top: glitchPhase === 0 ? '24%' : glitchPhase === 1 ? '58%' : '80%',
            }}
          />
          <div
            className="absolute inset-x-0 h-3 bg-[#E4521B]/90 blur-[0.5px]"
            style={{
              top: glitchPhase === 0 ? '66%' : glitchPhase === 1 ? '18%' : '44%',
            }}
          />
          <div
            className="absolute inset-x-0 h-8 bg-white/30 blur-[2px]"
            style={{
              top: glitchPhase === 0 ? '82%' : glitchPhase === 1 ? '76%' : '12%',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default HeroGlitch

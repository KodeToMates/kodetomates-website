'use client'

import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Orbs specification: centre (x%, y%) / diameter % of stage width
const orbsData = [
  // Major prominent spheres:
  { id: 'A', x: 9.8, y: 13.5, d: 4.8, z: 5 },       // Upper-left large floating sphere
  { id: 'E', x: 27.2, y: 80.8, d: 5.0, z: 5 },      // Bottom-left large sphere under terminal
  { id: 'D', x: 7.6, y: 65.5, d: 3.2, z: 5 },       // Left-middle medium sphere
  { id: 'B', x: 65.5, y: 4.2, d: 1.8, z: 5 },       // Top orbit tiny sphere
  { id: 'C', x: 11.2, y: 44.2, d: 1.8, z: 5 },      // Left orbit sphere
  { id: 'F', x: 71.2, y: 85.8, d: 1.8, z: 5 },      // Bottom-right orbit sphere
  { id: 'G', x: 91.2, y: 66.8, d: 1.4, z: 5 },      // Far right tiny sphere
  { id: 'H', x: 13.4, y: 19.5, d: 1.0, z: 5 },      // Micro dot near A
  { id: 'I', x: 14.2, y: 76.8, d: 1.1, z: 5 },      // Micro dot near D/E
  { id: 'J', x: 75.8, y: 92.5, d: 1.2, z: 5 },      // Micro dot bottom right
]

// Reusable Realistic Glossy 3D Orb Component using em units
function Orb({
  id,
  x,
  y,
  d,
  index,
  shouldReduceMotion,
}: {
  id: string
  x: number
  y: number
  d: number
  index: number
  shouldReduceMotion: boolean | null
}) {
  const isSmall = d < 2.2 // roughly <18px at desktop stage

  return (
    <motion.div
      key={id}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [-3.5, 3.5, -3.5],
              x: index % 2 === 0 ? [-2, 2, -2] : [2, -2, 2],
              scale: [1, 1.035, 1],
            }
      }
      transition={{
        duration: 6 + (index % 5),
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.35,
      }}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${d}cqw`,
        height: `${d}cqw`,
        fontSize: `${d}cqw`,
        transform: 'translate(-50%, -50%)',
        opacity: isSmall ? 0.88 : 1,
      }}
      className="absolute pointer-events-none z-5 select-none"
    >
      {/* Contact shadow under the orb: shrinks and fades when orb floats up */}
      {!isSmall && (
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 0.85, 1],
                  opacity: [0.38, 0.22, 0.38],
                }
          }
          transition={{
            duration: 6 + (index % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.35,
          }}
          style={{
            position: 'absolute',
            width: '78%',
            height: '16%',
            left: '11%',
            bottom: '-24%',
            background: 'radial-gradient(ellipse, rgba(170,60,10,.38), rgba(170,60,10,0) 70%)',
            filter: 'blur(0.04em)',
          }}
        />
      )}

      {/* Spherical orb body */}
      <div
        style={{
          width: '1em',
          height: '1em',
          position: 'relative',
          borderRadius: '50%',
          overflow: 'hidden',
          background: `
            radial-gradient(circle at 33% 27%, rgba(255,255,255,.95) 0 2.5%, rgba(255,255,255,0) 13%),
            radial-gradient(circle at 72% 84%, rgba(255,196,140,.7) 0%, rgba(255,196,140,0) 40%),
            radial-gradient(circle at 30% 26%, #FFC99A 0%, #FF9C55 22%, #F26A28 48%, #D9470F 75%, #A93008 100%)
          `,
          boxShadow: `
            inset -0.10em -0.14em 0.24em rgba(110,28,0,.55),
            inset 0.05em 0.07em 0.14em rgba(255,225,190,.55),
            0 0.55em 0.8em -0.15em rgba(228,82,27,.45)
          `,
        }}
      >
        {/* Soft streak highlight (for medium/large orbs) */}
        {!isSmall && (
          <div
            style={{
              position: 'absolute',
              left: '0.16em',
              top: '0.09em',
              width: '0.36em',
              height: '0.20em',
              transform: 'rotate(-30deg)',
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,.9), rgba(255,255,255,0) 70%)',
              filter: 'blur(0.012em)',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

export function HeroVisual({ isMobile = false }: { isMobile?: boolean }) {
  const shouldReduceMotion = useReducedMotion()

  // Typewriter Code Editor Effect
  const fullCodeLines = [
    { num: 1, content: [{ text: "import", color: "#F97583" }, { text: " { ", color: "#E1E4E8" }, { text: "Component", color: "#FFCB6B" }, { text: " } ", color: "#E1E4E8" }, { text: "from", color: "#F97583" }, { text: " 'react'", color: "#9ECBFF" }, { text: ";", color: "#E1E4E8" }] },
    { num: 2, content: [{ text: "export function ", color: "#F97583" }, { text: "CommunityProject", color: "#79B8FF" }, { text: "() {", color: "#E1E4E8" }] },
    { num: 3, content: [{ text: "  return (", color: "#F97583" }] },
    { num: 4, content: [{ text: "    <", color: "#E1E4E8" }, { text: "ProjectCard", color: "#FFCB6B" }, { text: ">", color: "#E1E4E8" }] },
    { num: 5, content: [{ text: "      <", color: "#E1E4E8" }, { text: "Title", color: "#FFCB6B" }, { text: ">", color: "#E1E4E8" }, { text: "Build Together", color: "#E1E4E8" }, { text: "</", color: "#E1E4E8" }, { text: "Title", color: "#FFCB6B" }, { text: ">", color: "#E1E4E8" }] },
    { num: 6, content: [{ text: "      <", color: "#E1E4E8" }, { text: "Collaborators", color: "#FFCB6B" }, { text: " count={", color: "#E1E4E8" }, { text: "10", color: "#79B8FF" }, { text: "} />", color: "#E1E4E8" }] },
    { num: 7, content: [{ text: "    </", color: "#E1E4E8" }, { text: "ProjectCard", color: "#FFCB6B" }, { text: ">", color: "#E1E4E8" }] },
    { num: 8, content: [{ text: "  );", color: "#E1E4E8" }] },
    { num: 9, content: [] }, // line 9 with block cursor
  ]

  const [visibleCodeLineIndex, setVisibleCodeLineIndex] = useState(fullCodeLines.length)

  useEffect(() => {
    if (shouldReduceMotion) return
    let timeout: NodeJS.Timeout
    const interval = setInterval(() => {
      setVisibleCodeLineIndex((prev) => {
        if (prev >= fullCodeLines.length) {
          timeout = setTimeout(() => {
            setVisibleCodeLineIndex(4)
          }, 4000)
          return prev
        }
        return prev + 1
      })
    }, 450)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [shouldReduceMotion])

  // Terminal Typing & Output Sequence
  const [terminalStep, setTerminalStep] = useState(4)

  useEffect(() => {
    if (shouldReduceMotion) return
    const interval = setInterval(() => {
      setTerminalStep((prev) => {
        if (prev >= 4) {
          setTimeout(() => setTerminalStep(1), 4500)
          return 4
        }
        return prev + 1
      })
    }, 900)

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  return (
    <div 
      className={isMobile 
        ? "relative w-full h-full pointer-events-none select-none overflow-visible"
        : "hidden md:block absolute right-0 top-[53.5%] -translate-y-[48%] w-[min(50.24vw,89svh)] aspect-[840/640] pointer-events-none select-none overflow-visible z-10"
      }
      style={{ containerType: 'inline-size' } as React.CSSProperties}
      aria-hidden="true"
    >
      {/* ========================================================
          1. VISIBLE SOFT ORGANIC BLOB SHAPES (Z-index 0)
          viewBox="-168 -128 1176 896" (stage 840x640 +-20% on each side)
          left:-20%; top:-20%; width:140%; height:140%; overflow:visible
         ======================================================== */}
      <svg
        viewBox="-168 -128 1176 896"
        className="absolute -left-[20%] -top-[20%] w-[140%] h-[140%] overflow-visible pointer-events-none z-0"
      >
        <defs>
          {/* Enlarged Filter Regions (x/y -50%, width/height 200%) so blurred glow never slices */}
          <filter id="softBlobBlur30" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <filter id="softBlobBlur3" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <filter id="softBlobBlur25" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
          <filter id="softBlobBlur5" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter id="softBlobBlur4" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          {/* Layer A Outer Pale Blob: linearGradient 135deg: #FCD6B8 @0.9 -> #FBC9A3 @0.65 */}
          <linearGradient id="layerAGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD6B8" stopOpacity="0.90" />
            <stop offset="100%" stopColor="#FBC9A3" stopOpacity="0.65" />
          </linearGradient>

          {/* Layer B Middle Blob: linearGradient 135deg: #F9B58A @0.85 -> #F7A06B @0.70 */}
          <linearGradient id="layerBGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9B58A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F7A06B" stopOpacity="0.70" />
          </linearGradient>

          {/* Layer C Core Orange: radialGradient: #F58A4F @0.95 -> #F8A06A @0.55 -> #F9AE80 @0.15 */}
          <radialGradient id="layerCGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F58A4F" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#F8A06A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F9AE80" stopOpacity="0.15" />
          </radialGradient>

          {/* Layer D Top-Right Pale Lobe: #FDE0C6 @0.75 -> #FEEBD9 @0.30 */}
          <linearGradient id="layerDGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE0C6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FEEBD9" stopOpacity="0.30" />
          </linearGradient>

          {/* Ripple Linear Gradients (white, fading to 0 at both ends) */}
          <linearGradient id="rippleGradA1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rippleGradA2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Behind everything: ONE blurred glow copy of Layer B (stdDeviation 30, opacity .35) */}
        <motion.path
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.03, 0.98, 1],
            rotate: [0, 1.5, -1, 0],
            x: [0, 8, -6, 0],
            y: [0, -6, 6, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          d="M70 400 C55 320 140 250 250 250 C340 250 420 200 520 205 C620 210 710 270 730 360 C750 450 690 520 610 565 C520 610 400 612 310 590 C220 570 90 520 70 400Z"
          fill="url(#layerBGrad)"
          opacity="0.35"
          filter="url(#softBlobBlur30)"
        />

        {/* 2. Layer D: Top-right pale lobe (bleeds off right edge and behind navbar) */}
        <motion.path
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.025, 0.985, 1],
            rotate: [0, -1, 1.2, 0],
            x: [0, -5, 5, 0],
            y: [0, 4, -4, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          d="M600 20 C680 -40 800 -30 880 40 C940 100 930 200 880 260 C830 320 740 300 690 250 C640 200 560 90 600 20Z"
          fill="url(#layerDGrad)"
          filter="url(#softBlobBlur4)"
        />

        {/* 3. Layer A: Outer pale blob, z lowest (stdDeviation 3, fill #FCD6B8 @0.9 -> #FBC9A3 @0.65) */}
        <motion.path
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.02, 0.985, 1],
            rotate: [0, 1, -0.8, 0],
            x: [0, 6, -5, 0],
            y: [0, -5, 4, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          d="M40 330 C20 250 110 170 230 175 C330 180 400 130 520 120 C640 110 760 170 805 270 C850 370 800 470 730 540 C650 620 520 640 400 625 C270 610 170 600 100 520 C60 475 50 400 40 330Z"
          fill="url(#layerAGrad)"
          filter="url(#softBlobBlur3)"
        />

        {/* 4. 2 extremely faint ripple strokes inside layer A (white, 1px, opacity .25, fading to 0 at both ends) */}
        <path
          d="M 85 340 C 70 265 145 195 250 195 C 340 195 410 150 515 145 C 625 140 735 190 775 280 C 815 370 770 455 705 520 C 630 590 510 610 400 595 C 280 580 185 575 125 505 C 90 465 95 405 85 340 Z"
          fill="none"
          stroke="url(#rippleGradA1)"
          strokeWidth="1"
        />
        <path
          d="M 125 350 C 115 285 180 225 270 220 C 350 215 415 175 505 170 C 600 165 695 210 735 290 C 770 370 730 440 675 495 C 610 555 500 575 400 560 C 295 545 205 545 155 485 C 130 450 135 405 125 350 Z"
          fill="none"
          stroke="url(#rippleGradA2)"
          strokeWidth="1"
        />

        {/* 5. Layer B: Middle blob, shifted to lower left (stdDeviation 2.5) */}
        <motion.path
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.025, 0.98, 1],
            rotate: [0, -1.2, 1, 0],
            x: [0, -7, 6, 0],
            y: [0, 5, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          d="M70 400 C55 320 140 250 250 250 C340 250 420 200 520 205 C620 210 710 270 730 360 C750 450 690 520 610 565 C520 610 400 612 310 590 C220 570 90 520 70 400Z"
          fill="url(#layerBGrad)"
          filter="url(#softBlobBlur25)"
        />

        {/* 6. Layer C: Core, the strongest orange (lower-left of editor, partly behind terminal) */}
        <motion.path
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.04, 0.97, 1],
            rotate: [0, 1.8, -1.2, 0],
            x: [0, 8, -6, 0],
            y: [0, -6, 7, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          d="M60 470 C50 410 110 370 180 380 C250 390 300 440 330 500 C360 560 300 610 220 600 C140 590 70 540 60 470Z"
          fill="url(#layerCGrad)"
          filter="url(#softBlobBlur5)"
        />
      </svg>

      {/* ========================================================
          2. DASHED ORBIT RING & TRAVELING DOTS (Z-index 1 - Strictly inside stage)
          SVG: width:100%; height:100%; viewBox="0 0 840 640"; overflow:visible; z-index:1
          cx=432.6 cy=316.8 rx=336 ry=291, transform rotate(-8 432.6 316.8), stroke rgba(228,82,27,.45)
          stroke-width:1.2, stroke-dasharray="6 8", fill:none, vectorEffect:non-scaling-stroke
         ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-1 overflow-visible">
        <svg viewBox="0 0 840 640" className="w-full h-full overflow-visible pointer-events-none">
          <ellipse
            cx="432.6"
            cy="316.8"
            rx="336"
            ry="291"
            transform="rotate(-8 432.6 316.8)"
            fill="none"
            stroke="rgba(228,82,27,0.45)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Traveling Orbit Dots along the exact ellipse path (cx 51.5%, cy 49.5%, rx 40%, ry 45.47%, rotate -8deg) */}
        {!shouldReduceMotion && (
          <div 
            className="absolute left-[51.5%] top-[49.5%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90.94%] pointer-events-none overflow-visible"
            style={{ transform: 'translate(-50%, -50%) rotate(-8deg)' }}
          >
            <motion.div
              animate={{ offsetDistance: ['0%', '100%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{
                offsetPath: 'ellipse(50% 50% at 50% 50%)',
              } as React.CSSProperties}
              className="absolute w-[0.8cqw] h-[0.8cqw] rounded-full bg-[#E4521B] shadow-[0_0_6px_rgba(228,82,27,0.85)]"
            />
            <motion.div
              animate={{ offsetDistance: ['33%', '133%'] }}
              transition={{ duration: 21, repeat: Infinity, ease: 'linear' }}
              style={{
                offsetPath: 'ellipse(50% 50% at 50% 50%)',
              } as React.CSSProperties}
              className="absolute w-[0.7cqw] h-[0.7cqw] rounded-full bg-[#E4521B] shadow-[0_0_5px_rgba(228,82,27,0.75)]"
            />
            <motion.div
              animate={{ offsetDistance: ['66%', '166%'] }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              style={{
                offsetPath: 'ellipse(50% 50% at 50% 50%)',
              } as React.CSSProperties}
              className="absolute w-[0.9cqw] h-[0.9cqw] rounded-full bg-[#E4521B] shadow-[0_0_7px_rgba(228,82,27,0.85)]"
            />
          </div>
        )}
      </div>

      {/* ========================================================
          3. REALISTIC GLOSSY 3D ORBS (Z-index 5 - Strictly BEHIND windows)
         ======================================================== */}
      {orbsData.map((orb, index) => (
        <Orb
          key={orb.id}
          id={orb.id}
          x={orb.x}
          y={orb.y}
          d={orb.d}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}

      {/* ========================================================
          4. CODE EDITOR WINDOW "ProjectCard.tsx" (Z-index 10)
          3D Floating perspective tilted toward top-left corner
         ======================================================== */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [-4, 4, -4],
          rotateZ: [-4.2, -3.8, -4.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          left: '16.5%',
          top: '16%',
          width: '51%',
          aspectRatio: '1.24',
          transform: 'perspective(1200px) rotateX(10deg) rotateY(-8deg) rotateZ(-4deg) translateZ(10px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute z-10 rounded-[2.2cqw] bg-[#121622] border border-white/[0.12] shadow-[0_36px_72px_rgba(80,25,0,0.42),0_14px_30px_rgba(0,0,0,0.45)] overflow-hidden"
      >
        {/* Title Bar */}
        <div className="flex items-center px-[3cqw] py-[1.8cqw] bg-[#0F131D] border-b border-white/[0.06] select-none">
          <div className="flex items-center gap-[1.2cqw]">
            <span className="w-[1.6cqw] h-[1.6cqw] rounded-full bg-[#FF5F56] inline-block shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" />
            <span className="w-[1.6cqw] h-[1.6cqw] rounded-full bg-[#FFBD2E] inline-block shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" />
            <span className="w-[1.6cqw] h-[1.6cqw] rounded-full bg-[#27C93F] inline-block shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" />
          </div>
          <div className="flex-1 text-center font-sans text-[1.3cqw] font-medium text-white/50 -ml-[4.8cqw] tracking-wide">
            ProjectCard.tsx
          </div>
        </div>

        {/* Code Lines Body with sharp geometric precision font */}
        <div 
          className="p-[3cqw] font-mono text-[1.55cqw] leading-[1.8] text-[#E1E4E8] overflow-hidden antialiased"
          style={{ WebkitFontSmoothing: 'antialiased', textRendering: 'geometricPrecision' }}
        >
          {fullCodeLines.map((line, idx) => {
            const isVisible = idx < visibleCodeLineIndex
            if (!isVisible) return null

            return (
              <div key={line.num} className="flex items-start">
                <span className="w-[4.5cqw] select-none text-right pr-[2cqw] text-white/20 text-[1.35cqw] font-mono">
                  {line.num}
                </span>
                <span className="flex-1 whitespace-pre">
                  {line.content.map((token, tIdx) => (
                    <span key={tIdx} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                  {/* Blinking Caret on line 9 */}
                  {idx === 8 && (
                    <span className="inline-block w-[1.2cqw] h-[2cqw] bg-white/70 animate-pulse align-middle" />
                  )}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* ========================================================
          5. FLOATING 3D "</>" CUBE (Z-index 15)
          left: 68.5%, top: 10.5%, width: 11.2%, square, rotate: 8deg
          linear-gradient(145deg, #FFFFFF, #FBEFE4), 1px border rgba(255,255,255,.9)
          shadow 0 14px 28px rgba(228,82,27,.22), inset 0 2px 0 rgba(255,255,255,.9)
          Icon colour #E4521B, stroke 2.5
         ======================================================== */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [-5, 5, -5],
          rotate: [8, 10.5, 8],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          left: '68.5%',
          top: '10.5%',
          width: '11.2%',
          aspectRatio: '1',
          background: 'linear-gradient(145deg, #FFFFFF 0%, #FBEFE4 100%)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 14px 28px rgba(228, 82, 27, 0.22), inset 0 2px 0 rgba(255, 255, 255, 0.9)',
          transform: 'rotate(8deg)',
        }}
        className="absolute z-15 rounded-[22%] flex items-center justify-center opacity-100"
      >
        <svg viewBox="0 0 40 40" className="w-[52%] h-[52%]" fill="none">
          {/* Left bracket < */}
          <path d="M14 13 L6 20 L14 27" stroke="#E4521B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Slash / */}
          <path d="M23 11 L17 29" stroke="#E4521B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Right bracket > */}
          <path d="M26 13 L34 20 L26 27" stroke="#E4521B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* ========================================================
          6. 3D GLOSSY ORANGE GEAR (Z-index 15)
          left: 76.5%, top: 32%, width: 9.8%, continuous rotate
          SVG with 3 layers: base gradient #FFA25E -> #E4521B, top-left highlight, dark inner hole ring + drop shadow
         ======================================================== */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          rotate: 360,
          y: [4, -4, 4],
        }}
        transition={{
          rotate: { duration: 24, repeat: Infinity, ease: 'linear' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          left: '76.5%',
          top: '32%',
          width: '9.8%',
          aspectRatio: '1',
        }}
        className="absolute z-15 filter drop-shadow-[0_12px_24px_rgba(228,82,27,0.42)]"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" shapeRendering="geometricPrecision">
          <defs>
            <radialGradient id="gearBaseGrad" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#FFA25E" />
              <stop offset="55%" stopColor="#E4521B" />
              <stop offset="100%" stopColor="#A82800" />
            </radialGradient>
            <radialGradient id="gearHighlightGrad" cx="30%" cy="26%" r="50%">
              <stop offset="0%" stopColor="#FFF2E8" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#FFA25E" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E4521B" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gearHoleGrad" cx="45%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#661400" />
              <stop offset="70%" stopColor="#8C2200" />
              <stop offset="100%" stopColor="#B83200" />
            </radialGradient>
          </defs>

          {/* Layer 1: Base gear body with bevel gradient */}
          <path
            fill="url(#gearBaseGrad)"
            d="M84 45.8l-6.4-1.5c-.5-2-1.3-3.8-2.3-5.5l3.9-5.3c1-1.4.8-3.3-.4-4.5l-4.4-4.4c-1.2-1.2-3.1-1.4-4.5-.4l-5.3 3.9c-1.7-1-3.5-1.8-5.5-2.3L56.4 16c-.4-1.7-1.9-2.8-3.6-2.8h-5.6c-1.7 0-3.2 1.1-3.6 2.8l-1.5 6.4c-2 .5-3.8 1.3-5.5 2.3l-5.3-3.9c-1.4-1-3.3-.8-4.5.4l-4.4 4.4c-1.2 1.2-1.4 3.1-.4 4.5l3.9 5.3c-1 1.7-1.8 3.5-2.3 5.5L16 45.8c-1.7.4-2.8 1.9-2.8 3.6v5.6c0 1.7 1.1 3.2 2.8 3.6l6.4 1.5c.5 2 1.3 3.8 2.3 5.5l-3.9 5.3c-1 1.4-.8 3.3.4 4.5l4.4 4.4c1.2 1.2 3.1 1.4 4.5.4l5.3-3.9c1.7 1 3.5 1.8 5.5 2.3l1.5 6.4c.4 1.7 1.9 2.8 3.6 2.8h5.6c1.7 0 3.2-1.1 3.6-2.8l1.5-6.4c2-.5 3.8-1.3 5.5-2.3l5.3 3.9c1.4 1 3.3.8 4.5-.4l4.4-4.4c1.2-1.2 1.4-3.1.4-4.5l-3.9-5.3c1-1.7 1.8-3.5 2.3-5.5l6.4-1.5c1.7-.4 2.8-1.9 2.8-3.6v-5.6c0-1.7-1.1-3.2-2.8-3.6zM50 71c-11.6 0-21-9.4-21-21s9.4-21 21-21 21 9.4 21 21-9.4 21-21 21z"
          />

          {/* Layer 2: Glossy Top-Left Specular highlight */}
          <path
            fill="url(#gearHighlightGrad)"
            d="M50 29c11.6 0 21 9.4 21 21s-9.4 21-21 21-21-9.4-21-21 9.4-21 21-21z"
          />

          {/* Layer 3: Dark Inner Hole Ring with 3D depth */}
          <circle cx="50" cy="50" r="14" fill="url(#gearHoleGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* ========================================================
          7. TERMINAL & GIT WINDOW (Z-index 20 - Overlapping editor)
          3D Floating Popup with cross perspective looking elegant
         ======================================================== */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [4, -4, 4],
          rotateZ: [-5.4, -4.6, -5.4],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        style={{
          left: '44.8%',
          top: '50.5%',
          width: '41%',
          aspectRatio: '1.64',
          transform: 'perspective(1200px) rotateX(8deg) rotateY(-11deg) rotateZ(-5deg) translateZ(35px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute z-20 rounded-[2.2cqw] bg-[#10141D] border border-white/[0.12] shadow-[0_45px_90px_rgba(0,0,0,0.65),0_18px_40px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[3cqw] py-[1.8cqw] bg-[#0C0F17] border-b border-white/[0.06]">
          <div className="flex items-center gap-[1.2cqw] text-white/60 text-[1.3cqw] font-sans font-medium">
            <svg className="w-[1.8cqw] h-[1.8cqw] text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            <span>Terminal &amp; Git</span>
          </div>

          {/* PASSING Badge */}
          <div className="flex items-center gap-[0.8cqw] px-[2cqw] py-[0.5cqw] rounded-full bg-[#182F24] border border-[#22C55E]/30">
            <span className="w-[1cqw] h-[1cqw] rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[1.1cqw] font-bold text-[#22C55E] tracking-wider uppercase">
              ● PASSING
            </span>
          </div>
        </div>

        {/* Terminal Body with sharp font */}
        <div 
          className="p-[3cqw] font-mono text-[1.4cqw] leading-relaxed text-white/80 flex flex-col gap-[0.8cqw] antialiased"
          style={{ WebkitFontSmoothing: 'antialiased', textRendering: 'geometricPrecision' }}
        >
          <div>
            <span className="text-[#56B6C2]">~/kodetomates</span> <span className="text-[#22C55E]">$</span> <span className="text-white">npm run build</span>
          </div>

          {terminalStep >= 2 && (
            <div className="text-white/45 flex items-center gap-[1cqw]">
              <span>&gt;</span> Next.js 15.3.6 (Turbopack)
            </div>
          )}

          {terminalStep >= 3 && (
            <div className="text-white/70 flex items-center gap-[1cqw]">
              <span className="text-[#61AFEF]">✓</span> Creating an optimized production build...
            </div>
          )}

          {terminalStep >= 4 && (
            <div className="text-[#22C55E] flex items-center gap-[1cqw] font-semibold">
              <span>✓</span> Compiled successfully in 12s
            </div>
          )}

          {/* Prompt Cursor */}
          <div className="flex items-center gap-[0.6cqw] text-white/50 pt-[0.4cqw]">
            <span>&gt;</span>
            <span className="inline-block w-[1.2cqw] h-[2cqw] bg-white/70 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

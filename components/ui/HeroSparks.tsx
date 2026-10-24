'use client'

import React, { useEffect, useRef } from 'react'

interface Spark {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  wobbleSpeed: number
  wobbleOffset: number
  life: number
  decay: number
  maxAlpha: number
  color: string
}

// Brand-tailored ember palette: vibrant coral, warm terracotta, peach, and glowing embers
const SPARK_COLORS = ['#E4521B', '#FF632B', '#FF8F50', '#FFA466', '#FFD2B2', '#FFF0E5']

export function HeroSparks({
  className = '',
  count,
}: {
  className?: string
  count?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    window.addEventListener('resize', handleResize)

    // Density: balanced spark count so it looks cinematic and organic (never crowded or empty)
    const sparkCount = count ?? Math.max(10, Math.floor(Math.min(width / 75, 20)))
    const sparks: Spark[] = []

    const resetSpark = (spark: Spark, randomizePosition = false) => {
      spark.x = Math.random() * width
      spark.y = randomizePosition ? Math.random() * height : height + Math.random() * 30
      spark.size = Math.random() * 2.2 + 0.9
      spark.speedY = -(Math.random() * 0.65 + 0.28) // Steady upward drift
      spark.speedX = (Math.random() - 0.5) * 0.35
      spark.wobbleSpeed = Math.random() * 0.014 + 0.007
      spark.wobbleOffset = Math.random() * Math.PI * 2
      spark.life = randomizePosition ? Math.random() * 0.85 : 0
      spark.decay = Math.random() * 0.0022 + 0.0016 // Lifespan of 5 to 9 seconds
      spark.maxAlpha = Math.random() * 0.6 + 0.35
      spark.color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)]
    }

    // Populate initial sparks throughout the height so it is immediately active
    for (let i = 0; i < sparkCount; i++) {
      const s = {} as Spark
      resetSpark(s, true)
      sparks.push(s)
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < sparks.length; i++) {
        const spark = sparks[i]

        // Drift upward with organic horizontal sine sway
        spark.y += spark.speedY
        spark.x += spark.speedX + Math.sin(spark.y * spark.wobbleSpeed + spark.wobbleOffset) * 0.35
        spark.life += spark.decay

        // Continuous infinite loop: respawn at bottom when lifespan finishes or flies above canvas
        if (spark.life >= 1 || spark.y < -20 || spark.x < -30 || spark.x > width + 30) {
          resetSpark(spark, false)
        }

        // Smooth sinusoidal opacity curve: fades in softly, reaches peak glow, fades out smoothly
        const currentAlpha = Math.sin(spark.life * Math.PI) * spark.maxAlpha

        if (currentAlpha > 0.02) {
          ctx.save()
          ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha))
          ctx.fillStyle = spark.color
          ctx.shadowColor = spark.color
          ctx.shadowBlur = spark.size * 3.8

          ctx.beginPath()
          ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-[12] ${className}`}
      aria-hidden="true"
    />
  )
}

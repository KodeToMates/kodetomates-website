"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export interface SpiderCursorProps {
  className?: string
  color?: string
  bgColor?: string
  count?: number
}

interface Point {
  x: number
  y: number
  len: number
  r: number
  t?: number
}

interface DirPoint {
  x: number
  y: number
}

export function SpiderCursor({
  className,
  color = "#fff",
  bgColor = "transparent",
  count = 2,
}: SpiderCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let w: number = 0
    let h: number = 0
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { sin, cos, PI, hypot, min, max } = Math

    function spawn() {
      const targetW = canvas?.parentElement?.clientWidth || window.innerWidth
      const targetH = canvas?.parentElement?.clientHeight || window.innerHeight

      const pts: Point[] = many(333, () => {
        return {
          x: rnd(targetW),
          y: rnd(targetH),
          len: 0,
          r: 0,
        }
      })

      const pts2: DirPoint[] = many(9, (i) => {
        return {
          x: cos((i / 9) * PI * 2),
          y: sin((i / 9) * PI * 2),
        }
      })

      const seed = rnd(100)
      let tx = rnd(targetW)
      let ty = rnd(targetH)
      let x = rnd(targetW)
      let y = rnd(targetH)
      const kx = rnd(0.5, 0.5)
      const ky = rnd(0.5, 0.5)
      const walkRadius = pt(rnd(50, 50), rnd(50, 50))
      const r = (targetW || window.innerWidth) / rnd(100, 150)

      function paintPt(p: Point) {
        pts2.forEach((pt2) => {
          if (!p.len) return
          drawLine(
            lerp(x + pt2.x * r, p.x, p.len * p.len),
            lerp(y + pt2.y * r, p.y, p.len * p.len),
            x + pt2.x * r,
            y + pt2.y * r
          )
        })
        drawCircle(p.x, p.y, p.r)
      }

      return {
        follow(newX: number, newY: number) {
          tx = newX
          ty = newY
        },

        tick(t: number) {
          const selfMoveX = cos(t * kx + seed) * walkRadius.x
          const selfMoveY = sin(t * ky + seed) * walkRadius.y
          const fx = tx + selfMoveX
          const fy = ty + selfMoveY

          const currW = w || window.innerWidth
          x += min(currW / 100, (fx - x) / 10)
          y += min(currW / 100, (fy - y) / 10)

          let i = 0
          pts.forEach((p) => {
            const dx = p.x - x
            const dy = p.y - y
            const len = hypot(dx, dy)
            let radius = min(2, currW / len / 5)
            p.t = 0
            const increasing = len < currW / 10 && i++ < 8
            const dir = increasing ? 0.1 : -0.1
            if (increasing) {
              radius *= 1.5
            }
            p.r = radius
            p.len = max(0, min(p.len + dir, 1))
            paintPt(p)
          })
        },
      }
    }

    const spiders = many(count, spawn)

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      spiders.forEach((spider) => {
        spider.follow(mouseX, mouseY)
      })
    }

    let animId: number

    function anim(t: number) {
      const targetW = canvas?.parentElement ? canvas.parentElement.clientWidth : window.innerWidth
      const targetH = canvas?.parentElement ? canvas.parentElement.clientHeight : window.innerHeight

      if (w !== targetW) w = canvas!.width = targetW
      if (h !== targetH) h = canvas!.height = targetH

      if (bgColor === "transparent") {
        ctx!.clearRect(0, 0, w, h)
      } else {
        ctx!.fillStyle = bgColor
        ctx!.fillRect(0, 0, w, h)
      }

      ctx!.fillStyle = ctx!.strokeStyle = color
      t /= 1000
      spiders.forEach((spider) => spider.tick(t))
      animId = requestAnimationFrame(anim)
    }

    function rnd(val = 1, dx = 0) {
      return Math.random() * val + dx
    }

    function drawCircle(cx: number, cy: number, cr: number) {
      ctx!.beginPath()
      ctx!.ellipse(cx, cy, max(0.1, cr), max(0.1, cr), 0, 0, PI * 2)
      ctx!.fill()
    }

    function drawLine(x0: number, y0: number, x1: number, y1: number) {
      ctx!.beginPath()
      ctx!.moveTo(x0, y0)
      many(100, (i) => {
        const factor = (i + 1) / 100
        const lx = lerp(x0, x1, factor)
        const ly = lerp(y0, y1, factor)
        const k = noise(lx / 5 + x0, ly / 5 + y0) * 2
        ctx!.lineTo(lx + k, ly + k)
      })
      ctx!.stroke()
    }

    function many<T>(n: number, f: (i: number) => T): T[] {
      return [...Array(n)].map((_, i) => f(i))
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t
    }

    function noise(nx: number, ny: number, t = 101) {
      const w0 = sin(0.3 * nx + 1.4 * t + 2.0 + 2.5 * sin(0.4 * ny + -1.3 * t + 1.0))
      const w1 = sin(0.2 * ny + 1.5 * t + 2.8 + 2.3 * sin(0.5 * nx + -1.2 * t + 0.5))
      return w0 + w1
    }

    function pt(px: number, py: number) {
      return { x: px, y: py }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    animId = requestAnimationFrame(anim)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      cancelAnimationFrame(animId)
    }
  }, [bgColor, color, count])

  return (
    <div className={cn("overflow-hidden m-0 w-full h-full", className)}>
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" style={{ display: "block" }} />
    </div>
  )
}

export default SpiderCursor


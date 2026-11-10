"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Use standard useEffect to ensure clean hydration without layout effect warnings in Next.js
const useIsomorphicLayoutEffect = useEffect

gsap.registerPlugin(ScrollTrigger)

/*
 * Dish Orbit Carousel: an interactive orbit stage showcasing multi-state items.
 * The hero visual sits on the left; changing items swings it out over the top
 * on a wide orbit while the next item swings in from the other side.
 * The two-weight title wipes out and back in (thin line from the right, heavy line
 * from the left), the card and its coloured rating badge cross-fade, and a pastel arc
 * behind the scene turns and morphs with the item's accent colour.
 * The page scroll drives it via GSAP ScrollTrigger, and pager dots, thumbnails,
 * arrow keys, and touch swipes jump seamlessly too.
 */

export type Dish = {
  /** The thin first title line, e.g. "BESPOKE". */
  title: string
  /** The heavy second title line, e.g. "WEBSITE DEV". */
  subtitle: string
  /** Item visual or cutout PNG/WebP/JPG, square or rounded. */
  image: string
  alt?: string
  /** Small eyebrow line above the title. Defaults to "#n Core Pillar". */
  eyebrow?: string
  /** Two-line label under the thumbnail. Defaults to title + subtitle. */
  label?: string
  rating: number
  chef: string
  /** Secondary subtitle / capability under the lead title. */
  kitchen?: string
  description: string
  likes: number
  ingredients?: string[]
  /** Accent colour: hex or rgb(), so the band morphs between items. */
  accent: string
  /** Optional custom CSS class for this item's image */
  imageClassName?: string
  /** Optional destination route */
  href?: string
}

export type DishOrbitCarouselProps = {
  dishes: Dish[]
  /** Root height. A definite length: percentages collapse on a host page. Defaults to "500px". */
  height?: string
  /** Scroll distance per dish in pixels. Set to 0 to disable scroll track pinning. Defaults to 220. */
  scrollPerDishPx?: number
  /** Whether to automatically advance dishes when scroll pinning is disabled. Defaults to true. */
  autoPlay?: boolean
  /** Autoplay interval in milliseconds. Defaults to 5000. */
  autoPlayInterval?: number
  /** Optional photo behind the display. Washed by the theme background. */
  backdrop?: string
  /** Scroll on forever: past the last item comes the first again, and up from the first, the last. */
  loop?: boolean
  /** Embedded display face (Outfit, OFL). Pass null to use the host's font (Plus Jakarta Sans). */
  fontSrc?: string | null
  onPlay?: (dish: Dish, index: number) => void
  onOrder?: (dish: Dish, index: number) => void
  onChange?: (index: number) => void
  className?: string
  /** Label for first action button. Defaults to "Play video". */
  playLabel?: string
  /** Label for second action button. Defaults to "Order food". */
  orderLabel?: string
  /** Label for first tab in info card. Defaults to "Overview". */
  overviewTabLabel?: string
  /** Label for second tab in info card. Defaults to "Ingredients". */
  detailTabLabel?: string
  /** Whether to show the top-right search/menu action buttons. Defaults to false for embedded heroes. */
  showTopNav?: boolean
  /** HTML heading level for the animated title. Defaults to "h2". */
  headingLevel?: "h1" | "h2"
}

// #region carousel calculations
export function wrapIndex(i: number, n: number): number {
  if (n <= 0) return 0
  return ((Math.round(i) % n) + n) % n
}

/** Which way to swing when jumping from one dish to another: the shorter way round. */
export function stepDirection(from: number, to: number, n: number): 1 | -1 {
  if (n <= 0) return 1
  const fwd = (((to - from) % n) + n) % n
  return fwd <= n - fwd ? 1 : -1
}

/** Scroll stretches in the section: one per dish change, plus one back round to the first when looping. */
export function scrollSteps(n: number, loop: boolean): number {
  return Math.max(0, loop ? n : n - 1)
}

/** The scroll stretch for dish `i` nearest the current one (when looping, dish 0 is also the last stretch). */
export function segmentFor(i: number, current: number, n: number, loop: boolean): number {
  return loop && i === 0 && current > n / 2 ? n : i
}

/** First thumbnail shown in the strip window, keeping the current one in view. */
export function stripStart(index: number, n: number, visible: number): number {
  if (n <= visible) return 0
  return Math.max(0, Math.min(index - 1, n - visible))
}

/** Title font size so a line of `chars` characters fits `width` px at `em` average glyph width. */
export function fitSize(chars: number, max: number, width: number, em: number): number {
  return Math.min(max, width / (Math.max(1, chars) * em))
}

/**
 * The pastel band: a thick stroke along the plates' orbit circle, tapering at
 * both ends. Angles in degrees, screen space (0 = right, 90 = straight down).
 */
export function arcPath(a0: number, a1: number, cx: number, cy: number, r: number, w: number, steps = 48): string {
  const outer: string[] = []
  const inner: string[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const a = ((a0 + (a1 - a0) * t) * Math.PI) / 180
    const h = (w / 2) * Math.pow(Math.sin(Math.PI * t), 0.45)
    const c = Math.cos(a)
    const s = Math.sin(a)
    outer.push((cx + c * (r + h)).toFixed(1) + " " + (cy + s * (r + h)).toFixed(1))
    inner.push((cx + c * (r - h)).toFixed(1) + " " + (cy + s * (r - h)).toFixed(1))
  }
  return "M" + outer.join("L") + "L" + inner.reverse().join("L") + "Z"
}

/** Where the band rests for each dish, as [start, end] angles along the orbit. */
export const ARC_REST = [
  [50, 98],
  [46, 124],
  [60, 126],
  [40, 100],
]

export function arcRest(index: number): number[] {
  return ARC_REST[((index % ARC_REST.length) + ARC_REST.length) % ARC_REST.length]
}

/** The band mid-swap: it stretches to trail between the outgoing and incoming plate. */
export const ARC_SWEEP = [38, 146]
// #endregion

// The plates' orbit: its pivot sits above the canvas (the .dsh-orbit transform-origin).
const ORBIT_X = 299
const ORBIT_Y = -510
const ORBIT_R = 650
const SWING = 50 // degrees the plate travels round the orbit's pivot
const ITEM = 118 // thumbnail pitch in canvas px
const VISIBLE = 4

const FONT = "dsh-face"

const CSS =
  ".dsh-trk{position:relative;width:100%}" +
  ".dsh-root{overflow:hidden;width:100%;background:var(--color-background,#FFFFFF);color:var(--color-foreground,#161413);" +
  "font-family:var(--font-jakarta),var(--font-sans)," + FONT + ",ui-sans-serif,system-ui,sans-serif;container-type:inline-size;-webkit-tap-highlight-color:transparent}" +
  ".dsh-root-sticky{position:sticky;top:84px}" +
  ".dsh-root-relative{position:relative;top:0}" +
  ".dsh-root *{box-sizing:border-box}" +
  ".dsh-bd{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;pointer-events:none}" +
  ".dsh-wash{position:absolute;inset:0;background:color-mix(in oklab,var(--color-background,#FFFFFF) 38%,transparent);pointer-events:none}" +
  ".dsh-dim{position:absolute;inset:0;background:var(--color-background,#FFFFFF);mix-blend-mode:multiply;opacity:.72;pointer-events:none}" +
  ".dsh-root:focus-visible{outline:2px solid var(--color-primary,#E4521B);outline-offset:-4px}" +
  ".dsh-canvas{position:absolute;left:50%;top:50%;width:960px;height:430px;transform:translate(-50%,-50%) scale(var(--dsh-s,1));transform-origin:50% 50%}" +
  ".dsh-arc{position:absolute;left:0;top:0;width:960px;height:440px;overflow:visible;pointer-events:none}" +
  ".dsh-btn{appearance:none;border:0;background:none;color:inherit;font:inherit;padding:0;margin:0;cursor:pointer}" +
  ".dsh-btn:focus-visible{outline:2px solid var(--color-primary,#E4521B);outline-offset:3px;border-radius:10px}" +
  ".dsh-ico{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}" +
  ".dsh-top{position:absolute;left:800px;top:52px;display:flex;gap:14px;z-index:20}" +
  ".dsh-top .dsh-btn{width:36px;height:36px;display:grid;place-items:center;border-radius:10px;background:rgba(255,255,255,0.7);border:1px solid #E8E2D9}" +
  ".dsh-pager{position:absolute;left:76px;top:112px;display:flex;flex-direction:column;align-items:center;gap:7px;z-index:20}" +
  ".dsh-dot{width:14px;height:10px;display:grid;place-items:center}" +
  ".dsh-dot i{display:block;width:3px;height:3px;border-radius:3px;background:var(--color-foreground,#161413);opacity:.4;transition:height .45s cubic-bezier(.3,.7,.2,1),opacity .3s,background-color .3s}" +
  ".dsh-dot[aria-current] i{height:22px;opacity:1;background:#E4521B}" +
  ".dsh-dot[aria-current]{height:26px}" +
  ".dsh-dot{transition:height .45s cubic-bezier(.3,.7,.2,1)}" +
  ".dsh-plates{position:absolute;left:130px;top:22px;width:245px;height:245px;touch-action:pan-y}" +
  ".dsh-orbit{position:absolute;inset:0;transform-origin:69% -217%;visibility:hidden;will-change:transform}" +
  ".dsh-orbit>img{display:block;width:245px;height:245px;max-width:none;user-select:none;-webkit-user-drag:none;" +
  "filter:drop-shadow(0 18px 24px rgba(0,0,0,.22)) drop-shadow(0 3px 6px rgba(0,0,0,.1))}" +
  ".dsh-head{position:absolute;left:388px;top:36px;width:330px;height:150px}" +
  ".dsh-hd{position:absolute;inset:0;visibility:hidden}" +
  ".dsh-eye{font-family:var(--font-jakarta),var(--font-sans),sans-serif;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#E4521B;margin:0 0 4px 2px}" +
  ".dsh-t1,.dsh-t2{display:block;white-space:nowrap;line-height:1;text-transform:uppercase;margin:0;font-family:var(--font-jakarta),var(--font-sans),sans-serif}" +
  ".dsh-t1{font-weight:300;letter-spacing:-.025em;margin-top:6px;color:#161413}" +
  ".dsh-t2{font-weight:800;letter-spacing:-.035em;margin-top:6px;color:#161413}" +
  ".dsh-acts{position:absolute;left:396px;top:220px;display:flex;gap:18px;font-size:13px;font-weight:600;z-index:20}" +
  ".dsh-acts .dsh-btn{display:flex;align-items:center;gap:8px;padding:8px 18px;border-radius:9999px;transition:all .2s}" +
  ".dsh-acts .dsh-act-secondary{background:#FAF8F5;border:1px solid #E8E2D9;color:#161413;box-shadow:0 1px 2px rgba(0,0,0,0.04)}" +
  ".dsh-acts .dsh-act-secondary:hover{background:#F2EFEA;border-color:#161413;transform:translateY(-1px)}" +
  ".dsh-acts .dsh-act-primary{background:linear-gradient(135deg,#FF914D 0%,#E4521B 60%,#AB003E 100%);color:#FFFFFF;box-shadow:0 4px 18px rgba(228,82,27,0.35)}" +
  ".dsh-acts .dsh-act-primary:hover{opacity:0.95;transform:translateY(-1px);box-shadow:0 6px 22px rgba(228,82,27,0.45)}" +
  ".dsh-acts .dsh-ico{width:14px;height:14px}" +
  ".dsh-acts .dsh-fill{fill:currentColor;stroke:none}" +
  ".dsh-card{position:absolute;left:722px;top:57px;width:223px;padding:18px 20px 20px;border-radius:20px;" +
  "background:rgba(255,255,255,0.85);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);" +
  "border:1px solid rgba(232,226,217,0.9);box-shadow:0 1px 0 rgba(255,255,255,0.8) inset,0 20px 42px -20px rgba(0,0,0,.15);z-index:20}" +
  ".dsh-tabs{display:flex;justify-content:space-between;padding:0 6px 0 6px;font-size:12px;margin-bottom:16px;border-bottom:1px solid #F0EBE1;padding-bottom:8px}" +
  ".dsh-tab{color:var(--color-muted-foreground,#6B645E);font-weight:600;padding:2px 0;transition:color .2s}" +
  ".dsh-tab[aria-selected=true]{color:#E4521B;font-weight:700}" +
  ".dsh-bodies{display:grid}" +
  ".dsh-body{grid-area:1/1;visibility:hidden}" +
  ".dsh-rate{position:relative;height:62px;margin:0 0 14px 2px}" +
  ".dsh-badge{position:absolute;left:0;top:0;width:46px;height:62px;border-radius:10px;display:flex;align-items:center;justify-content:center}" +
  ".dsh-badge svg{position:absolute;left:17px;bottom:9px;width:12px;height:12px;fill:#FFFFFF;opacity:.95}" +
  ".dsh-num{position:absolute;left:10px;top:4px;font-size:36px;font-weight:800;letter-spacing:-.04em;line-height:1;color:#161413;font-family:var(--font-jakarta),var(--font-sans),sans-serif}" +
  ".dsh-chef{font-size:16px;font-weight:700;letter-spacing:-.02em;margin:0;color:#161413;font-family:var(--font-jakarta),var(--font-sans),sans-serif;line-height:1.25}" +
  ".dsh-kit{font-size:10.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#E4521B;margin:3px 0 10px}" +
  ".dsh-desc{font-size:12px;line-height:1.45;margin:0;min-height:52px;color:#6B645E}" +
  ".dsh-ing{display:flex;flex-wrap:wrap;gap:4px;margin:0;padding:0;list-style:none;min-height:52px}" +
  ".dsh-ing li{font-size:10.5px;padding:3px 8px;border-radius:99px;background:#FAF8F5;border:1px solid #E8E2D9;color:#554E48;font-weight:500}" +
  ".dsh-react{display:flex;gap:10px;margin-top:16px;padding-top:12px;border-top:1px solid #F0EBE1}" +
  ".dsh-like{display:flex;align-items:center;gap:7px;height:32px;padding:0 12px 0 10px;border-radius:99px;font-size:11px;font-weight:600;" +
  "background:#FAF8F5;border:1px solid #E8E2D9;color:#554E48;transition:all .25s}" +
  ".dsh-like[aria-pressed=true]{background:#E4521B;color:#FFFFFF;border-color:#E4521B}" +
  ".dsh-meh{width:32px;height:32px;display:grid;place-items:center;border-radius:99px;background:#FAF8F5;border:1px solid #E8E2D9;color:#554E48;transition:all .25s}" +
  ".dsh-meh[aria-pressed=true]{background:#161413;color:#FFFFFF;border-color:#161413}" +
  ".dsh-react .dsh-ico{width:14px;height:14px}" +
  ".dsh-strip{position:absolute;left:130px;top:302px;width:550px;height:122px;display:flex;align-items:center;z-index:20}" +
  ".dsh-arrow{width:36px;height:36px;display:grid;place-items:center;flex:none;color:#161413}" +
  ".dsh-arrow svg{width:12px;height:16px;fill:currentColor}" +
  ".dsh-win{position:relative;width:" + ITEM * VISIBLE + "px;height:122px;overflow:hidden;flex:none;margin:0 2px;" +
  "-webkit-mask-image:linear-gradient(90deg,#000 88%,transparent);mask-image:linear-gradient(90deg,#000 88%,transparent)}" +
  ".dsh-track{position:absolute;left:0;top:0;display:flex;transition:transform .6s cubic-bezier(.65,0,.35,1)}" +
  ".dsh-th{width:" + ITEM + "px;height:122px;display:flex;justify-content:center;padding-top:3px}" +
  ".dsh-th .dsh-btn{width:86px;height:116px;border-radius:14px;display:flex;flex-direction:column;align-items:center;gap:7px;padding-top:9px;" +
  "transition:background .35s,border-color .35s,transform .35s;border:1px solid transparent}" +
  ".dsh-th .dsh-btn:hover{background:rgba(255,255,255,0.85);border-color:#E8E2D9;transform:translateY(-2px)}" +
  ".dsh-th .dsh-btn[aria-current]{background:#FAF8F5;border-color:#E8E2D9;box-shadow:0 8px 20px -12px rgba(0,0,0,.18)}" +
  ".dsh-th img{width:56px;height:56px;max-width:none;object-fit:cover;border-radius:12px;filter:drop-shadow(0 4px 6px rgba(0,0,0,.12));transition:transform .45s}" +
  ".dsh-th .dsh-btn[aria-current] img{transform:scale(1.08)}" +
  ".dsh-th span{font-size:10px;line-height:1.25;text-align:center;font-weight:600;color:#554E48;max-width:80px}" +
  ".dsh-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}" +
  "@container (max-width:639px){" +
  ".dsh-trk-static{height:auto !important}" +
  ".dsh-root-relative{height:auto !important;min-height:540px}" +
  ".dsh-canvas{position:relative;left:auto;top:auto;width:100%;height:auto;transform:none;display:flex;flex-direction:column;align-items:center;padding:20px 16px 20px}" +
  ".dsh-arc{width:200%;height:auto;left:-60%;top:-30px}" +
  ".dsh-top{position:relative;left:auto;top:auto;align-self:flex-end}" +
  ".dsh-pager{left:14px;top:150px}" +
  ".dsh-plates{position:relative;left:auto;top:auto;width:min(52vw,32svh);height:min(52vw,32svh);margin-top:0}" +
  ".dsh-orbit>img{width:100%;height:100%}" +
  ".dsh-head{position:relative;left:auto;top:auto;width:100%;height:132px;margin-top:10px}" +
  ".dsh-hd{text-align:center;transform:scale(.78);transform-origin:50% 0}" +
  ".dsh-acts{position:relative;left:auto;top:auto;margin-top:4px}" +
  ".dsh-card{position:relative;left:auto;top:auto;width:100%;max-width:420px;margin-top:12px}" +
  ".dsh-strip{display:none}" +
  "}" +
  "@media (prefers-reduced-motion:reduce){.dsh-track,.dsh-dot,.dsh-dot i,.dsh-th .dsh-btn,.dsh-th img,.dsh-like{transition:none}}"

const HIDE_1 = "inset(0% 0% 0% 100%)" // thin line: wipes in from the right
const HIDE_2 = "inset(0% 100% 0% 0%)" // heavy line: wipes in from the left
const SHOW = "inset(0% 0% 0% 0%)"

const Icon = {
  search: <svg className="dsh-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>,
  menu: <svg className="dsh-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5h16M4 12h16M4 17.5h16" /></svg>,
  play: <svg className="dsh-ico dsh-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17l14-8.5z" /></svg>,
  order: <svg className="dsh-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V8H8" /></svg>,
  up: <svg className="dsh-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H3.5V10zM7 10l4-7c1.6 0 2.6 1.2 2.2 2.8L12.6 9H19a2 2 0 0 1 2 2.3l-1.3 7A2 2 0 0 1 17.7 20H7" /></svg>,
  down: <svg className="dsh-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3.5v10zM17 14l-4 7c-1.6 0-2.6-1.2-2.2-2.8l.6-3.2H5a2 2 0 0 1-2-2.3l1.3-7A2 2 0 0 1 6.3 4H17" /></svg>,
}

export function DishOrbitCarousel({
  dishes,
  height = "500px",
  scrollPerDishPx = 220,
  backdrop,
  loop = false,
  fontSrc = null,
  onPlay,
  onOrder,
  onChange,
  className,
  playLabel = "Play video",
  orderLabel = "Order food",
  overviewTabLabel = "Overview",
  detailTabLabel = "Ingredients",
  showTopNav = false,
  headingLevel = "h2",
  autoPlay = true,
  autoPlayInterval = 5000,
}: DishOrbitCarouselProps) {
  const n = dishes.length
  const [index, setIndex] = useState(0)
  const [tab, setTab] = useState("overview")
  const [liked, setLiked] = useState({} as Record<number, boolean>)
  const [disliked, setDisliked] = useState({} as Record<number, boolean>)
  const [paused, setPaused] = useState(false)

  const trackRef = useRef(null as HTMLDivElement | null)
  const rootRef = useRef(null as HTMLDivElement | null)
  const stRef = useRef(null as ScrollTrigger | null)
  const segRef = useRef(0)
  const indexRef = useRef(0)
  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])
  const orbits = useRef([] as (HTMLDivElement | null)[])
  const heads = useRef([] as (HTMLDivElement | null)[])
  const bodies = useRef([] as (HTMLDivElement | null)[])
  const arcRef = useRef(null as SVGPathElement | null)
  const arc = useRef({ a0: 0, a1: 0 })
  const shown = useRef(-1)
  const dirRef = useRef(1 as 1 | -1)
  const tlRef = useRef(null as gsap.core.Timeline | null)
  const reducedRef = useRef(false)
  const swipe = useRef(null as { x: number; y: number } | null)

  // Fit the 960 x 500 design canvas to the root. Measured on resize only.
  useIsomorphicLayoutEffect(() => {
    const el = rootRef.current
    if (!el) return
    const fit = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      el.style.setProperty("--dsh-s", String(Math.min(w / 960, h / 430, 1.05)))
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const on = () => (reducedRef.current = mq.matches)
    on()
    mq.addEventListener("change", on)
    return () => mq.removeEventListener("change", on)
  }, [])

  // The swap. Every dish is in the DOM; GSAP only moves the outgoing and incoming ones.
  useIsomorphicLayoutEffect(() => {
    const from = shown.current
    const to = index
    const parts = (i: number) => {
      const head = heads.current[i]
      return {
        orbit: orbits.current[i],
        head,
        eye: head && head.querySelector(".dsh-eye"),
        t1: head && head.querySelector(".dsh-t1"),
        t2: head && head.querySelector(".dsh-t2"),
        body: bodies.current[i],
      }
    }
    // Writes the band's path only; no layout is read.
    const drawArc = () => arcRef.current?.setAttribute("d", arcPath(arc.current.a0, arc.current.a1, ORBIT_X, ORBIT_Y, ORBIT_R, 118))
    const rest = arcRest(to)
    const tint = dishes[to] ? dishes[to].accent : "transparent"
    if (tlRef.current) tlRef.current.progress(1).kill()
    const b = parts(to)
    if (from === -1 || from === to || reducedRef.current) {
      for (let i = 0; i < n; i++) if (i !== to) {
        const p = parts(i)
        gsap.set([p.orbit, p.head, p.body], { autoAlpha: 0 })
      }
      gsap.set([b.orbit, b.head, b.body, b.eye], { autoAlpha: 1, rotation: 0, y: 0 })
      gsap.set(b.t1, { clipPath: SHOW })
      gsap.set(b.t2, { clipPath: SHOW })
      arc.current.a0 = rest[0]
      arc.current.a1 = rest[1]
      drawArc()
      if (arcRef.current) gsap.set(arcRef.current, { fill: tint })
      shown.current = to
      return
    }
    const a = parts(from)
    const d = dirRef.current
    const tl = gsap.timeline({ onComplete: () => { tlRef.current = null } })
    tlRef.current = tl
    // plate: out over the top on the orbit, the next one swings in from the far side
    tl.to(a.orbit, { rotation: SWING * d, duration: 0.62, ease: "power2.in" }, 0)
      .set(a.orbit, { autoAlpha: 0, rotation: 0 }, 0.62)
      .fromTo(b.orbit, { autoAlpha: 1, rotation: -SWING * d }, { rotation: 0, duration: 0.95, ease: "power3.out" }, 0.3)
    // title: thin line clips away to the right, heavy line to the left, then the next wipes in
    tl.to(a.t1, { clipPath: HIDE_1, duration: 0.42, ease: "power2.in" }, 0)
      .to(a.t2, { clipPath: HIDE_2, duration: 0.42, ease: "power2.in" }, 0.06)
      .to(a.eye, { autoAlpha: 0, duration: 0.25 }, 0)
      .set(a.head, { autoAlpha: 0 }, 0.5)
      .set(b.head, { autoAlpha: 1 }, 0.5)
      .fromTo(b.eye, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0.55)
      .fromTo(b.t1, { clipPath: HIDE_1 }, { clipPath: SHOW, duration: 0.7, ease: "power3.out" }, 0.55)
      .fromTo(b.t2, { clipPath: HIDE_2 }, { clipPath: SHOW, duration: 0.7, ease: "power3.out" }, 0.62)
    // card: cross-fade, the incoming rows rise in turn
    tl.to(a.body, { autoAlpha: 0, y: -6, duration: 0.3, ease: "power1.in" }, 0.05)
      .set(b.body, { autoAlpha: 1, y: 0 }, 0.4)
    if (b.body) tl.fromTo(b.body.children, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }, 0.4)
    // the band stretches along the orbit with the plates, then settles into the next dish's span, morphing colour
    tl.to(arc.current, { a0: ARC_SWEEP[0], a1: ARC_SWEEP[1], duration: 0.6, ease: "power2.inOut", onUpdate: drawArc }, 0)
      .to(arc.current, { a0: rest[0], a1: rest[1], duration: 0.85, ease: "power3.out", onUpdate: drawArc }, 0.6)
    if (arcRef.current) tl.to(arcRef.current, { fill: tint, duration: 1.1, ease: "power1.inOut" }, 0.1)
    shown.current = to
  }, [index, n, dishes])

  useEffect(() => () => { tlRef.current?.kill() }, [])

  const select = useCallback((next: number, dir: 1 | -1) => {
    if (next === indexRef.current) return
    dirRef.current = dir
    indexRef.current = next
    setIndex(next)
    onChangeRef.current?.(next)
  }, [])

  // The page scroll drives the dish if scrollPerDishPx > 0. If 0, it operates as a standard responsive carousel.
  const isSticky = scrollPerDishPx > 0
  const steps = isSticky ? scrollSteps(n, loop) : 0
  useEffect(() => {
    const track = trackRef.current
    if (!track || steps < 1 || !isSticky) return
    const trigger = ScrollTrigger.create({
      trigger: track,
      start: "top top+=84",
      end: "bottom bottom",
      snap: { snapTo: 1 / steps, duration: { min: 0.25, max: 0.6 }, delay: 0.05, ease: "power2.inOut" },
      onUpdate: (self) => {
        // Looping: the last stretch shows the first dish, so jump back to the top unseen.
        if (loop && self.progress >= 1 && self.direction > 0) {
          segRef.current = 0
          self.scroll(self.start + 1)
          select(0, 1)
          return
        }
        const seg = Math.round(self.progress * steps)
        if (seg === segRef.current) return
        const dir = seg > segRef.current ? 1 : -1
        segRef.current = seg
        select(wrapIndex(seg, n), dir)
      },
    })
    // At the very top no scroll is left to fire onUpdate, so scrolling up there wraps round to the last dish.
    let raf = 0
    const onWheel = (e: WheelEvent) => {
      const y = trigger.scroll()
      if (!loop || e.deltaY >= 0 || y < trigger.start - 1 || y > trigger.start + 1) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        segRef.current = n - 1
        trigger.scroll(trigger.start + ((trigger.end - trigger.start) * (n - 1)) / steps)
        select(n - 1, -1)
      })
    }
    window.addEventListener("wheel", onWheel, { passive: true })
    stRef.current = trigger
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("wheel", onWheel)
      trigger.kill()
      stRef.current = null
    }
  }, [steps, loop, n, isSticky])

  // Buttons, keys and swipes jump to a dish and move the scroll to its stretch, so the two stay in step.
  const go = useCallback((to: number, dir?: 1 | -1) => {
    if (n < 2) return
    const next = wrapIndex(to, n)
    if (next === index) return
    const st = stRef.current
    const y = st ? st.scroll() : 0
    if (st && y >= st.start - 1 && y <= st.end + 1 && steps > 0) {
      const seg = segmentFor(next, segRef.current, n, loop)
      segRef.current = seg
      st.scroll(st.start + ((st.end - st.start) * seg) / steps)
    }
    select(next, dir ?? stepDirection(index, next, n))
  }, [n, index, steps, loop, select])

  const step = useCallback((d: 1 | -1) => go(index + d, d), [go, index])

  // Automatic cycle when not sticky-pinned
  useEffect(() => {
    if (!autoPlay || paused || reducedRef.current || isSticky) return
    const timer = setInterval(() => {
      step(1)
    }, autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlay, paused, isSticky, autoPlayInterval, step])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1) }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1) }
  }
  const onPointerDown = (e: React.PointerEvent) => { swipe.current = { x: e.clientX, y: e.clientY } }
  const onPointerUp = (e: React.PointerEvent) => {
    const s = swipe.current
    swipe.current = null
    if (!s) return
    const dx = e.clientX - s.x
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(e.clientY - s.y) * 1.4) step(dx < 0 ? 1 : -1)
  }

  const start = stripStart(index, n, VISIBLE)
  const dish = dishes[index]

  const HeadingTag = headingLevel
  const trackHeight = isSticky ? "calc(" + height + " + " + steps * scrollPerDishPx + "px)" : height

  return (
    <div
      ref={trackRef}
      suppressHydrationWarning
      className={"dsh-trk" + (isSticky ? " dsh-trk-sticky" : " dsh-trk-static") + (className ? " " + className : "")}
      style={{ height: trackHeight }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={rootRef}
        suppressHydrationWarning
        className={"dsh-root " + (isSticky ? "dsh-root-sticky" : "dsh-root-relative")}
        style={{ height }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Dishes"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <style>
          {(fontSrc ? "@font-face{font-family:" + FONT + ";src:url(" + fontSrc + ") format('woff2');font-weight:100 900;font-display:swap}" : "") + CSS}
        </style>
        {backdrop ? <img className="dsh-bd" src={backdrop} alt="" width={1200} height={900} /> : null}
        {backdrop ? <div className="dsh-dim" /> : null}
        {backdrop ? <div className="dsh-wash" /> : null}

        <div className="dsh-canvas" suppressHydrationWarning>
          <svg className="dsh-arc" viewBox="0 0 960 520" aria-hidden="true">
            <path ref={arcRef} style={{ opacity: 0.38 }} />
          </svg>

          {showTopNav && (
            <div className="dsh-top">
              <button type="button" className="dsh-btn" aria-label="Search">{Icon.search}</button>
              <button type="button" className="dsh-btn" aria-label="Menu">{Icon.menu}</button>
            </div>
          )}

          <div className="dsh-pager" role="tablist" aria-label="Choose a dish">
            {dishes.map((d, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                className="dsh-btn dsh-dot"
                aria-selected={i === index}
                aria-current={i === index ? "true" : undefined}
                aria-label={d.title + " " + d.subtitle}
                onClick={() => go(i)}
              >
                <i />
              </button>
            ))}
          </div>

          <div className="dsh-plates" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => (swipe.current = null)}>
            {dishes.map((d, i) => (
              <div key={i} ref={(el) => { orbits.current[i] = el }} className="dsh-orbit" aria-hidden={i !== index}>
                <img
                  src={d.image}
                  alt={d.alt ?? d.title + " " + d.subtitle}
                  width={245}
                  height={245}
                  draggable={false}
                  className={d.imageClassName}
                />
              </div>
            ))}
          </div>

          <div className="dsh-head" aria-live="polite">
            {dishes.map((d, i) => (
              <div key={i} ref={(el) => { heads.current[i] = el }} className="dsh-hd" aria-hidden={i !== index}>
                <p className="dsh-eye">{d.eyebrow ?? "#" + (i + 1) + " Most loved dish"}</p>
                <HeadingTag style={{ margin: 0, font: "inherit" }}>
                  <span className="dsh-t1" style={{ fontSize: fitSize(d.title.length, 56, 330, 0.56) + "px" }}>{d.title}</span>
                  <span className="dsh-t2" style={{ fontSize: fitSize(d.subtitle.length, 62, 320, 0.64) + "px" }}>{d.subtitle}</span>
                </HeadingTag>
              </div>
            ))}
          </div>

          <div className="dsh-acts">
            <button
              type="button"
              className="dsh-btn dsh-act-secondary"
              onClick={() => dish && onPlay?.(dish, index)}
            >
              {Icon.play}
              <span>{playLabel}</span>
            </button>
            <button
              type="button"
              className="dsh-btn dsh-act-primary"
              onClick={() => dish && onOrder?.(dish, index)}
            >
              <span>{orderLabel}</span>
              {Icon.order}
            </button>
          </div>

          <div className="dsh-card">
            <div className="dsh-tabs" role="tablist" aria-label="Dish details">
              {["overview", "ingredients"].map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  className="dsh-btn dsh-tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                >
                  {t === "overview" ? overviewTabLabel : detailTabLabel}
                </button>
              ))}
            </div>
            <div className="dsh-bodies">
              {dishes.map((d, i) => (
                <div key={i} ref={(el) => { bodies.current[i] = el }} className="dsh-body" aria-hidden={i !== index}>
                  <div className="dsh-rate">
                    <div className="dsh-badge" style={{ background: d.accent }}>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" /></svg>
                    </div>
                    <span className="dsh-num" aria-label={"Rated " + d.rating.toFixed(1) + " out of 5"}>{d.rating.toFixed(1)}</span>
                  </div>
                  <p className="dsh-chef">{d.chef}</p>
                  <p className="dsh-kit">{d.kitchen ?? " "}</p>
                  {tab === "overview" || !d.ingredients?.length ? (
                    <p className="dsh-desc">{d.description}</p>
                  ) : (
                    <ul className="dsh-ing">{d.ingredients.map((x) => <li key={x}>{x}</li>)}</ul>
                  )}
                  <div className="dsh-react">
                    <button
                      type="button"
                      className="dsh-btn dsh-like"
                      aria-pressed={!!liked[i]}
                      tabIndex={i === index ? 0 : -1}
                      onClick={() => { setLiked((s) => ({ ...s, [i]: !s[i] })); setDisliked((s) => ({ ...s, [i]: false })) }}
                    >
                      {Icon.up}{d.likes + (liked[i] ? 1 : 0)} verified
                    </button>
                    <button
                      type="button"
                      className="dsh-btn dsh-meh"
                      aria-pressed={!!disliked[i]}
                      aria-label="Bookmark pillar"
                      tabIndex={i === index ? 0 : -1}
                      onClick={() => { setDisliked((s) => ({ ...s, [i]: !s[i] })); setLiked((s) => ({ ...s, [i]: false })) }}
                    >
                      {Icon.down}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dsh-strip">
            <button type="button" className="dsh-btn dsh-arrow" aria-label="Previous dish" onClick={() => step(-1)}>
              <svg viewBox="0 0 12 16" aria-hidden="true"><path d="M11 0v16L0 8z" /></svg>
            </button>
            <div className="dsh-win">
              <div className="dsh-track" style={{ transform: "translateX(" + -start * ITEM + "px)" }}>
                {dishes.map((d, i) => (
                  <div key={i} className="dsh-th">
                    <button type="button" className="dsh-btn" aria-current={i === index ? "true" : undefined} onClick={() => go(i)}>
                      <img src={d.image} alt="" width={56} height={56} draggable={false} className={d.imageClassName} />
                      <span>{d.label ?? d.title + " " + d.subtitle}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="dsh-btn dsh-arrow" aria-label="Next dish" onClick={() => step(1)}>
              <svg viewBox="0 0 12 16" aria-hidden="true"><path d="M1 0v16l11-8z" /></svg>
            </button>
          </div>

        </div>
        <p className="dsh-sr" aria-live="polite">{dish ? "Item " + (index + 1) + " of " + n + ": " + dish.title + " " + dish.subtitle : ""}</p>
      </div>
    </div>
  )
}

export default DishOrbitCarousel

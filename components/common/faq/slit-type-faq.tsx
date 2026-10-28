"use client"

import * as React from "react"
import { Ticker } from "@/components/common/ticker"
import "./slit-type-faq.css"

/*
 * Slit Type FAQ: a frequently-asked-questions section set in one ink on one
 * paper. The display headline rises letter by letter through a hard
 * horizontal slit as the section scrolls in, and the questions sit on
 * full-width ruled rows.
 *
 * Styled to perfectly match the KodeToMates aesthetic:
 * Plus Jakarta Sans font, signature coral accents (#E4521B), title case,
 * brand eyebrow, and signature accent line from "More than learning. More than building."
 */

export type SlitPreset = "kodetomates" | "signal" | "cobalt" | "moss" | "carbon"

export type SlitPalette = {
  /** Background. */
  paper: string
  /** Type, rules and the flood. */
  ink: string
  /** Text on the flood. Defaults to whichever of paper, white or black reads best on the ink. */
  onInk?: string
}

export type FaqItem = {
  question: string
  /** Any node: paragraphs, links, lists. */
  answer: React.ReactNode
  /** Plain text of the answer for search, if `answer` is not a string. Extracted from the node when omitted. */
  answerText?: string
  /** Matches one of `categories`. */
  category?: string
  /** Stable id for the #hash deep link. Defaults to a slug of the question. */
  id?: string
}

export type SlitPaletteInput = Partial<SlitPalette>

export type SlitTypeFaqProps = {
  items?: FaqItem[]
  /** Brand Eyebrow text above the headline (e.g. "FAQ & KNOWLEDGE"). */
  eyebrow?: string
  /** Display headline. Use "\n" for line breaks. */
  headline?: string
  /** Show signature terracotta accent pill & dot under headline. */
  showAccentLine?: boolean
  /** How much of each capital the slit hides at rest, 0 to 0.5. Hovering the headline lifts the letters clear. 0 sets it whole. */
  slit?: number
  /** One or two sentences under the headline. */
  intro?: React.ReactNode
  preset?: SlitPreset
  /** Override the light palette of the preset. */
  palette?: SlitPaletteInput
  /** Override the dark palette of the preset. */
  darkPalette?: SlitPaletteInput
  /** "auto" follows a `.dark` class on any ancestor (shadcn / Tailwind convention). */
  theme?: "auto" | "light" | "dark"
  /** "single" closes the open question when another opens. */
  type?: "single" | "multiple"
  /** Index or id of the question(s) open on first render. Pass [] for none. */
  defaultOpen?: number | string | (number | string)[]
  /** Controlled: the ids of the open questions. Pair with `onOpenChange`. */
  open?: string[]
  /** Prefixed to every question id, so two FAQs on one page never share a #hash. */
  idPrefix?: string
  /** Show the search field. */
  search?: boolean
  searchLabel?: string
  /** Category chips, filtered against `item.category`. Omit to hide the chips. */
  categories?: string[]
  /** Optional line of short phrases that runs between rules under the headline. */
  ticker?: string[]
  /** Closing row. Pass null to drop it. */
  contact?: { prompt: string; label: string; href: string } | null
  /** Show a copy-link button in each open answer. */
  copyLinks?: boolean
  /** Write the open question's id into location.hash. */
  syncHash?: boolean
  /** Minimum height of the section. Any CSS length. The default 0 lets the section size to its questions. */
  minHeight?: number | string
  /** Font stacks. Pass your own, e.g. "var(--font-sans)". */
  displayFont?: string
  textFont?: string
  onOpenChange?: (openIds: string[]) => void
  ariaLabel?: string
  className?: string
  style?: React.CSSProperties
}

const PRESETS: { [k: string]: { light: SlitPalette; dark: SlitPalette } } = {
  kodetomates: {
    light: { paper: "#ffffff", ink: "#E4521B", onInk: "#ffffff" },
    dark: { paper: "#141210", ink: "#ff6738", onInk: "#141210" },
  },
  signal: {
    light: { paper: "#ffffff", ink: "#e10e17", onInk: "#ffffff" },
    dark: { paper: "#140c0c", ink: "#ff4a3d", onInk: "#140c0c" },
  },
  cobalt: {
    light: { paper: "#f6f7ff", ink: "#1d3cf5", onInk: "#ffffff" },
    dark: { paper: "#0b1030", ink: "#7b8cff", onInk: "#0b1030" },
  },
  moss: {
    light: { paper: "#f4f6ef", ink: "#1f4d2b", onInk: "#f4f6ef" },
    dark: { paper: "#0e1a12", ink: "#8fd19e", onInk: "#0e1a12" },
  },
  carbon: {
    light: { paper: "#f3f3f1", ink: "#111111", onInk: "#f3f3f1" },
    dark: { paper: "#131313", ink: "#f1f1ee", onInk: "#131313" },
  },
}

// #region logic
export function slugify(s: string): string {
  return (
    s
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 64) || "question"
  )
}

/** Ids for every item: its own id, or a slug of the question, made unique. */
export function itemIds(questions: string[], ids: (string | undefined)[]): string[] {
  const seen: { [k: string]: number } = {}
  return questions.map((q, i) => {
    const base = ids[i] || slugify(q)
    seen[base] = (seen[base] || 0) + 1
    return seen[base] > 1 ? base + "-" + seen[base] : base
  })
}

/** Lower-case words of a query; every word must appear somewhere in the text. */
export function queryWords(query: string): string[] {
  return query.toLowerCase().split(/\s+/).filter(Boolean)
}

export function matches(text: string, query: string): boolean {
  const words = queryWords(query)
  if (!words.length) return true
  const t = text.toLowerCase()
  return words.every((w) => t.includes(w))
}

/** Splits text into plain and matched runs so matches can be marked. Overlapping words merge. */
export function highlightRuns(text: string, query: string): { text: string; hit: boolean }[] {
  const words = queryWords(query)
  if (!words.length || !text) return [{ text, hit: false }]
  const t = text.toLowerCase()
  const marks = new Array(text.length).fill(false)
  for (const w of words) {
    let at = t.indexOf(w)
    while (at > -1) {
      for (let k = at; k < at + w.length; k++) marks[k] = true
      at = t.indexOf(w, at + 1)
    }
  }
  const runs: { text: string; hit: boolean }[] = []
  for (let k = 0; k < text.length; k++) {
    const last = runs[runs.length - 1]
    if (last && last.hit === marks[k]) last.text += text[k]
    else runs.push({ text: text[k], hit: marks[k] })
  }
  return runs
}

/** A short excerpt of `text` around the first matched word, or "" when nothing matches. */
export function snippet(text: string, query: string, radius = 44): string {
  const words = queryWords(query)
  if (!words.length || !text) return ""
  const t = text.toLowerCase()
  let at = -1
  for (const w of words) {
    const i = t.indexOf(w)
    if (i > -1 && (at < 0 || i < at)) at = i
  }
  if (at < 0) return ""
  let from = Math.max(0, at - radius)
  let to = Math.min(text.length, at + radius * 2)
  if (from > 0) from = text.indexOf(" ", from) + 1 || from
  if (to < text.length) to = text.lastIndexOf(" ", to) > at ? text.lastIndexOf(" ", to) : to
  return (from > 0 ? "…" : "") + text.slice(from, to).trim() + (to < text.length ? "…" : "")
}

/** Which ids start open, from an index, an id, or a list of both. */
export function resolveOpen(spec: number | string | (number | string)[] | undefined, ids: string[], single: boolean, prefix = ""): string[] {
  if (spec === undefined) return []
  const list = Array.isArray(spec) ? spec : [spec]
  const out: string[] = []
  for (const s of list) {
    const named = typeof s === "string" ? (ids.includes(s) ? s : ids.includes(prefix + s) ? prefix + s : undefined) : undefined
    const id = typeof s === "number" ? ids[s] : named
    if (id && !out.includes(id)) out.push(id)
  }
  return single ? out.slice(0, 1) : out
}

/** Roving focus between question buttons. Returns -1 for keys it does not handle. */
export function nextFocus(key: string, i: number, n: number): number {
  if (!n) return -1
  if (key === "ArrowDown") return (i + 1) % n
  if (key === "ArrowUp") return (i - 1 + n) % n
  if (key === "Home") return 0
  if (key === "End") return n - 1
  return -1
}

function channel(v: number): number {
  const c = v / 255
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

/** WCAG relative luminance of a #rgb or #rrggbb colour; NaN for anything else. */
export function luminance(hex: string): number {
  let h = hex.trim().replace("#", "")
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
  if (!/^[0-9a-f]{6}$/i.test(h)) return NaN
  const r = channel(parseInt(h.slice(0, 2), 16))
  const g = channel(parseInt(h.slice(2, 4), 16))
  const b = channel(parseInt(h.slice(4, 6), 16))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrast(a: string, b: string): number {
  const x = luminance(a)
  const y = luminance(b)
  if (Number.isNaN(x) || Number.isNaN(y)) return NaN
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}

/** Text colour for the flood: the paper if it reads (4.5:1), else white or near-black, whichever reads better. */
export function pickOnInk(ink: string, paper: string): string {
  const onPaper = contrast(ink, paper)
  if (Number.isNaN(onPaper)) return paper
  if (onPaper >= 4.5) return paper
  return contrast(ink, "#ffffff") >= contrast(ink, "#111111") ? "#ffffff" : "#111111"
}
// #endregion

const useIsoLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

/** Plain text of a React node, for search. */
function nodeText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return ""
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(nodeText).join(" ")
  if (React.isValidElement(node)) return nodeText((node.props as { children?: React.ReactNode }).children)
  return ""
}

function Marked({ text, query }: { text: string; query: string }) {
  const runs = highlightRuns(text, query)
  return (
    <>
      {runs.map((r, k) =>
        r.hit ? (
          <mark key={k} className="stf-mark">
            {r.text}
          </mark>
        ) : (
          <React.Fragment key={k}>{r.text}</React.Fragment>
        ),
      )}
    </>
  )
}

function PlusIcon() {
  return (
    <span className="stf-cell" aria-hidden="true">
      <svg className="stf-plus" viewBox="0 0 32 32" fill="none">
        <path d="M16 1v30M1 16h30" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    </span>
  )
}

interface ParsedSegment {
  text: string
  color?: string
  className?: string
}

interface ParsedLine {
  rawText: string
  segments: ParsedSegment[]
}

function parseFaqLine(rawLine: string): ParsedLine {
  const raw = String(rawLine).trim()
  const segments: ParsedSegment[] = []
  const spanRegex = /<span\b([^>]*)>([\s\S]*?)<\/span>/gi

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = spanRegex.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      const textBefore = raw.substring(lastIndex, match.index)
      if (textBefore.length > 0) {
        segments.push({ text: textBefore })
      }
    }

    const attrs = match[1] || ''
    const innerText = match[2] || ''

    const classMatch = attrs.match(/class(?:Name)?=["']([^"']*)["']/i)
    const className = classMatch ? classMatch[1] : ''

    const styleMatch = attrs.match(/style=["']([^"']*)["']/i)
    const styleAttr = styleMatch ? styleMatch[1] : ''
    const colorMatch = styleAttr.match(/color:\s*([^;]+)/i)
    let color = colorMatch ? colorMatch[1].trim() : undefined

    if (!color && className) {
      const varMatch = className.match(/text-\[(var\(--[^)]+\))\]/)
      if (varMatch) {
        color = varMatch[1]
      } else if (className.includes('text-primary-orange') || className.includes('text-coral')) {
        color = 'var(--color-primary-orange, #E4521B)'
      }
    }

    segments.push({
      text: innerText,
      className,
      color,
    })

    lastIndex = spanRegex.lastIndex
  }

  if (lastIndex < raw.length) {
    const textAfter = raw.substring(lastIndex)
    if (textAfter.length > 0) {
      segments.push({ text: textAfter })
    }
  }

  if (segments.length === 0) {
    segments.push({ text: raw })
  }

  const rawText = segments.map((s) => s.text).join('')
  return { rawText, segments }
}

function Headline({ text, id, slit }: { text: string; id: string; slit: boolean }) {
  let n = 0
  const lines = text.split("\n")
  const parsedLines = lines.map(parseFaqLine)

  return (
    <h2
      className="stf-title"
      id={id}
      aria-label={parsedLines.map((l) => l.rawText).join(" ")}
      data-slit={slit ? "true" : "false"}
    >
      {parsedLines.map((lineObj, li) => (
        <span className="stf-line" key={li} aria-hidden="true">
          {lineObj.segments.map((seg, si) => {
            const segStyle: React.CSSProperties = {}
            if (seg.color) {
              segStyle.color = seg.color
            }

            const tokens = seg.text.match(/\S+|\s+/g) || []

            return (
              <span
                key={si}
                className={seg.className || undefined}
                style={Object.keys(segStyle).length > 0 ? segStyle : undefined}
              >
                {tokens.map((token, ti) => {
                  if (/^\s+$/.test(token)) {
                    return ' '
                  }
                  return (
                    <span className="stf-word" key={ti}>
                      {Array.from(token).map((ch, ci) => {
                        const isDot = ch === "."
                        return (
                          <span
                            className={`stf-ch ${isDot ? "stf-coral-dot" : ""}`}
                            key={ci}
                            style={{ ["--i" as string]: n++ } as React.CSSProperties}
                          >
                            {ch}
                          </span>
                        )
                      })}
                    </span>
                  )
                })}
              </span>
            )
          })}
        </span>
      ))}
    </h2>
  )
}

export default function SlitTypeFaq({
  items = [],
  eyebrow = "FAQ & KNOWLEDGE",
  headline = 'Frequently asked questions.\n<span style="color: var(--color-primary-orange)">Clear answers for builders.</span>',
  showAccentLine = true,
  slit = 0.38,
  intro = "Have questions about KodeToMates? Explore our answers on community membership, collaborative projects, learning roadmaps, and more.",
  preset = "kodetomates",
  palette,
  darkPalette,
  theme = "auto",
  type = "single",
  defaultOpen = 0,
  open: openProp,
  idPrefix = "",
  search = true,
  searchLabel = "Search questions & answers",
  categories,
  ticker,
  contact = { prompt: "Still have a question or project idea?", label: "Reach out to our team", href: "/contact" },
  copyLinks = true,
  syncHash = false,
  minHeight = 0,
  displayFont = 'var(--font-jakarta), var(--font-sans), "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  textFont = 'var(--font-jakarta), var(--font-sans), "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  onOpenChange,
  ariaLabel,
  className,
  style,
}: SlitTypeFaqProps) {
  const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, "")
  const rootRef = React.useRef(null as HTMLElement | null)
  const btnRefs = React.useRef([] as (HTMLButtonElement | null)[])
  const timers = React.useRef({} as Record<string, number>)
  const single = type === "single"

  const ids = React.useMemo(
    () =>
      itemIds(
        items.map((it) => it.question),
        items.map((it) => it.id),
      ).map((id) => idPrefix + id),
    [items, idPrefix],
  )
  const answers = React.useMemo(() => items.map((it) => it.answerText ?? nodeText(it.answer)), [items])
  const texts = React.useMemo(() => items.map((it, i) => it.question + " " + answers[i]), [items, answers])

  const [openState, setOpenState] = React.useState(() => resolveOpen(defaultOpen, ids, single, idPrefix))
  const open = openProp ?? openState
  const openRef = React.useRef(open)
  const controlledRef = React.useRef(openProp !== undefined)
  const onChangeRef = React.useRef(onOpenChange)

  useIsoLayoutEffect(() => {
    openRef.current = open
    controlledRef.current = openProp !== undefined
    onChangeRef.current = onOpenChange
  })

  const commit = React.useCallback((next: string[]) => {
    if (!controlledRef.current) setOpenState(next)
    onChangeRef.current?.(next)
  }, [])
  const [closing, setClosing] = React.useState([] as string[])
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState(null as string | null)
  const [copied, setCopied] = React.useState(null as string | null)
  const [introState, setIntroState] = React.useState("pending" as "pending" | "done")

  const reduced = React.useCallback(
    () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  )

  // The headline rises through its slit once, when the section first comes into view.
  React.useEffect(() => {
    const el = rootRef.current
    if (!el || reduced() || typeof IntersectionObserver === "undefined") {
      setIntroState("done")
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          requestAnimationFrame(() => setIntroState("done"))
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    const safety = window.setTimeout(() => setIntroState("done"), 2500)
    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [reduced])

  // A #hash naming a question opens it and brings it into view.
  React.useEffect(() => {
    const fromHash = () => {
      const h = decodeURIComponent(location.hash.replace(/^#/, ""))
      if (!h || !ids.includes(h)) return
      const cur = openRef.current
      if (!cur.includes(h)) commit(single ? [h] : [...cur, h])
      const i = ids.indexOf(h)
      window.setTimeout(() => btnRefs.current[i]?.scrollIntoView({ block: "center", behavior: reduced() ? "auto" : "smooth" }), 60)
    }
    fromHash()
    window.addEventListener("hashchange", fromHash)
    return () => window.removeEventListener("hashchange", fromHash)
  }, [ids, single, reduced, commit])

  React.useEffect(() => {
    const t = timers.current
    return () => Object.values(t).forEach((h) => window.clearTimeout(h))
  }, [])

  const beginClose = React.useCallback(
    (closeIds: string[]) => {
      if (!closeIds.length) return
      if (reduced()) return
      setClosing((cur) => [...cur.filter((c) => !closeIds.includes(c)), ...closeIds])
      for (const id of closeIds) {
        window.clearTimeout(timers.current[id])
        timers.current[id] = window.setTimeout(() => {
          setClosing((cur) => cur.filter((c) => c !== id))
        }, 300)
      }
    },
    [reduced],
  )

  // Whatever changes the open set (a click, a #hash, a controlled prop), a question that
  // closes wipes its ink out to the right before it is put away. Layout effect: the
  // closing state lands before paint, so the ink never blinks.
  const prevOpen = React.useRef(open)
  const openKey = open.join("|")
  useIsoLayoutEffect(() => {
    const prev = prevOpen.current
    const now = openRef.current
    prevOpen.current = now
    const added = now.filter((id) => !prev.includes(id))
    if (added.length) {
      for (const id of added) window.clearTimeout(timers.current[id])
      setClosing((cur) => cur.filter((c) => !added.includes(c)))
    }
    beginClose(prev.filter((id) => !now.includes(id)))
  }, [openKey, beginClose])

  const toggle = (id: string) => {
    const isOpen = open.includes(id)
    commit(isOpen ? open.filter((o) => o !== id) : single ? [id] : [...open, id])
    if (syncHash && typeof history !== "undefined") {
      // Closing clears the hash only if it names this question; a host page's own hash stays.
      const ownHash = decodeURIComponent(location.hash.replace(/^#/, "")) === id
      if (!isOpen || ownHash) history.replaceState(history.state, "", location.pathname + location.search + (isOpen ? "" : "#" + id))
    }
  }

  const copyLink = async (id: string) => {
    const url = location.origin + location.pathname + location.search + "#" + id
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = url
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
      } catch {
        /* nothing else to try */
      }
      ta.remove()
    }
    setCopied(id)
    window.clearTimeout(timers.current["__copy"])
    timers.current["__copy"] = window.setTimeout(() => setCopied(null), 1800)
  }

  const counts = React.useMemo(() => {
    const out: Record<string, number> = {}
    items.forEach((it, i) => {
      if (it.category && matches(texts[i], query)) out[it.category] = (out[it.category] || 0) + 1
    })
    return out
  }, [items, texts, query])

  const allCount = texts.filter((t) => matches(t, query)).length

  const visible = items
    .map((it, i) => ({ it, i, id: ids[i] }))
    .filter(({ it, i }) => (!category || it.category === category) && matches(texts[i], query))

  const onKey = (e: React.KeyboardEvent, pos: number) => {
    const to = nextFocus(e.key, pos, visible.length)
    if (to < 0) return
    e.preventDefault()
    btnRefs.current[visible[to].i]?.focus()
  }

  const base = PRESETS[preset] ?? PRESETS.kodetomates
  const light = { ...base.light, ...palette }
  const dark = { ...base.dark, ...darkPalette }
  const onLight = palette?.onInk ?? (palette?.ink || palette?.paper ? pickOnInk(light.ink, light.paper) : light.onInk)
  const onDark = darkPalette?.onInk ?? (darkPalette?.ink || darkPalette?.paper ? pickOnInk(dark.ink, dark.paper) : dark.onInk)

  // The slit sits on the baseline: each capital drops by a share of its cap height (about 0.72em).
  const cut = Math.min(0.5, Math.max(0, slit))
  const vars = {
    "--stf-cut": cut > 0 ? "calc(" + (cut * 0.72).toFixed(3) + "em + 0.05em)" : "0px",
    "--stf-paper-l": light.paper,
    "--stf-ink-l": light.ink,
    "--stf-on-l": onLight,
    "--stf-paper-d": dark.paper,
    "--stf-ink-d": dark.ink,
    "--stf-on-d": onDark,
    "--stf-display-font": displayFont,
    "--stf-text-font": textFont,
    minHeight: typeof minHeight === "number" ? minHeight + "px" : minHeight,
    ...style,
  } as React.CSSProperties

  const plainHeadline = headline.split("\n").join(" ")
  const filtering = query.trim() !== "" || category !== null

  return (
    <section
      ref={rootRef}
      className={"stf" + (className ? " " + className : "")}
      data-theme={theme}
      data-intro={introState}
      aria-label={ariaLabel ?? (headline ? undefined : "Frequently asked questions")}
      aria-labelledby={!ariaLabel && headline ? uid + "-h" : undefined}
      style={vars}
    >
      <div className="stf-wrap">
        {/* Brand Eyebrow from "More than learning. More than building." */}
        {eyebrow && (
          <div className="stf-eyebrow">
            <span className="flex items-center justify-center shrink-0" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.45" />
                <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#E4521B" />
              </svg>
            </span>
            <span className="stf-eyebrow-text">{eyebrow}</span>
          </div>
        )}

        {/* Display Headline with animated slit reveal and signature coral dot */}
        {headline ? <Headline text={headline} id={uid + "-h"} slit={cut > 0} /> : null}

        {/* Signature Accent Line from "More than learning. More than building." */}
        {showAccentLine && (
          <div className="stf-accent-line" aria-hidden="true">
            <span className="stf-accent-pill" />
            <span className="stf-accent-dot" />
          </div>
        )}

        {ticker && ticker.length ? (
          <Ticker
            phrases={ticker}
            variant="faq"
            duration={34}
            showToggle={true}
            pauseOnHover={true}
            ariaLabel="FAQ Highlights Ticker"
          />
        ) : null}

        {intro || search ? (
          <div className="stf-meta">
            {intro ? <p className="stf-intro">{intro}</p> : <span />}
            {search ? (
              <div className="stf-search" role="search">
                <label htmlFor={uid + "-q"}>{searchLabel}</label>
                <div className="stf-field">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.6" />
                    <path d="m13 13 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <input
                    id={uid + "-q"}
                    type="search"
                    autoComplete="off"
                    spellCheck={false}
                    value={query}
                    placeholder={"Try “" + (queryHint(items) || "community") + "”"}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && query) {
                        e.preventDefault()
                        setQuery("")
                      }
                      if (e.key === "ArrowDown" && visible.length) {
                        e.preventDefault()
                        btnRefs.current[visible[0].i]?.focus()
                      }
                    }}
                  />
                  {query ? (
                    <button type="button" className="stf-clear" onClick={() => setQuery("")}>
                      Clear
                    </button>
                  ) : null}
                </div>
                <div className="stf-count" aria-live="polite">
                  {filtering ? visible.length + " of " + items.length + " questions" : ""}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {categories && categories.length ? (
          <ul className="stf-chips" aria-label="Filter by topic">
            <li>
              <button type="button" className="stf-chip" aria-pressed={category === null} onClick={() => setCategory(null)}>
                All <small>{allCount}</small>
              </button>
            </li>
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  className="stf-chip"
                  aria-pressed={category === c}
                  onClick={() => setCategory(category === c ? null : c)}
                >
                  {c} <small>{counts[c] || 0}</small>
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {visible.length ? (
          <ul className="stf-list" aria-label={plainHeadline ? undefined : "Questions"}>
            {visible.map(({ it, i, id }, pos) => {
              const isOpen = open.includes(id)
              const state = isOpen ? "open" : closing.includes(id) ? "closing" : "closed"
              const btnId = uid + "-b-" + i
              const panelId = uid + "-p-" + i
              const excerpt = query.trim() && !isOpen ? snippet(answers[i], query) : ""
              const row = (inv: boolean) => (
                <span className={"stf-row" + (inv ? " stf-row--inv" : "")} aria-hidden={inv ? "true" : undefined}>
                  <span className="stf-label">
                    <Marked text={it.question} query={query} />
                    {excerpt ? (
                      <span className="stf-snippet">
                        <Marked text={excerpt} query={query} />
                      </span>
                    ) : null}
                  </span>
                  <PlusIcon />
                </span>
              )
              return (
                <li key={id} id={id} className="stf-item" data-state={state}>
                  <span className="stf-fill" aria-hidden="true" />
                  <h3 className="stf-h">
                    <button
                      ref={(el) => {
                        btnRefs.current[i] = el
                      }}
                      id={btnId}
                      type="button"
                      className="stf-btn"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(id)}
                      onKeyDown={(e) => onKey(e, pos)}
                    >
                      {row(false)}
                      {row(true)}
                    </button>
                  </h3>
                  <div
                    className="stf-panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                  >
                    <div className="stf-panel-in">
                      <div className="stf-answer">
                        <div className="stf-text">
                          {typeof it.answer === "string" ? <p><Marked text={it.answer} query={query} /></p> : it.answer}
                        </div>
                        {copyLinks || it.category ? (
                          <div className="stf-tools">
                            {it.category ? <span className="stf-tag">{it.category}</span> : null}
                            {copyLinks ? (
                              <button type="button" className="stf-copy" onClick={() => copyLink(id)}>
                                {copied === id ? "Link copied" : "Copy link"}
                              </button>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="stf-empty" role="status">
            <p>Nothing here matches “{query.trim() || category}”.</p>
            <button
              type="button"
              className="stf-copy stf-reset"
              onClick={() => {
                setQuery("")
                setCategory(null)
              }}
            >
              Show every question
            </button>
          </div>
        )}

        {contact ? (
          <div className="stf-contact">
            <p>{contact.prompt}</p>
            <a className="stf-cta" href={contact.href}>
              <span>
                {contact.label} <Arrow />
              </span>
              <span aria-hidden="true">
                {contact.label} <Arrow />
              </span>
            </a>
          </div>
        ) : null}
        <span className="stf-sr" aria-live="polite">
          {copied ? "Link copied" : ""}
        </span>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** A word worth searching for, taken from the questions so the hint always finds something. */
function queryHint(items: FaqItem[]): string {
  const stop = new Set(["what", "which", "where", "when", "does", "should", "could", "would", "every", "there", "their", "about", "before", "after", "your", "from", "with", "have", "this", "that", "many", "much", "long", "take", "make", "copy", "look", "slightly", "different"])
  for (const it of items.slice(1)) {
    for (const w of it.question.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/)) {
      if (w.length > 4 && !stop.has(w)) return w
    }
  }
  return ""
}

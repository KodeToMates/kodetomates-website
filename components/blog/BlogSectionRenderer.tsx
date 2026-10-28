'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight, Lightbulb, Quote, Info, BarChart3 } from 'lucide-react'
import type { ArticleSection, ArticleLink } from '@/lib/blogs'

interface BlogSectionRendererProps {
  section: ArticleSection
  links?: ArticleLink[]
}

/**
 * Replaces exact target words with styled internal or external links
 */
function renderParagraphWithLinks(text: string, links: ArticleLink[] = []) {
  if (!links || links.length === 0) {
    return text
  }

  // Find all matches for all links
  type Match = {
    start: number
    end: number
    link: ArticleLink
  }

  const matches: Match[] = []

  links.forEach((l) => {
    if (!l.word) return
    const index = text.indexOf(l.word)
    if (index !== -1) {
      matches.push({
        start: index,
        end: index + l.word.length,
        link: l,
      })
    }
  })

  if (matches.length === 0) {
    return text
  }

  // Sort matches by start index and avoid overlaps
  matches.sort((a, b) => a.start - b.start)
  const nonOverlapping: Match[] = []
  let lastEnd = 0

  for (const m of matches) {
    if (m.start >= lastEnd) {
      nonOverlapping.push(m)
      lastEnd = m.end
    }
  }

  const nodes: React.ReactNode[] = []
  let cursor = 0

  nonOverlapping.forEach((m, idx) => {
    if (m.start > cursor) {
      nodes.push(text.slice(cursor, m.start))
    }

    const matchedText = text.slice(m.start, m.end)
    const isExternal = m.link.isExternal

    nodes.push(
      isExternal ? (
        <a
          key={`ext-link-${idx}`}
          href={m.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 font-sans font-semibold text-[#E4521B] underline decoration-[#E4521B]/40 underline-offset-4 transition-colors hover:text-[#C23C0A] hover:decoration-[#C23C0A]"
        >
          <span>{matchedText}</span>
          <ArrowUpRight className="inline-block w-3 h-3 text-[#E4521B]/80 shrink-0" />
        </a>
      ) : (
        <Link
          key={`int-link-${idx}`}
          href={m.link.url}
          className="inline-flex items-center gap-0.5 font-sans font-semibold text-[#E4521B] underline decoration-[#E4521B]/40 underline-offset-4 transition-colors hover:text-[#C23C0A] hover:decoration-[#C23C0A]"
        >
          <span>{matchedText}</span>
        </Link>
      )
    )

    cursor = m.end
  })

  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }

  return nodes
}

export function BlogSectionRenderer({ section, links = [] }: BlogSectionRendererProps) {
  switch (section.type) {
    case 'heading': {
      if (section.level === 2) {
        return (
          <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#161413] tracking-[-0.03em] mt-12 mb-4 leading-tight">
            {section.text}
          </h2>
        )
      }
      return (
        <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#161413] tracking-[-0.02em] mt-8 mb-3 leading-snug">
          {section.text}
        </h3>
      )
    }

    case 'paragraph': {
      return (
        <p className="font-sans text-[15px] sm:text-[17px] text-[#554E48] leading-[1.8] mb-6">
          {renderParagraphWithLinks(section.text, links)}
        </p>
      )
    }

    case 'table': {
      return (
        <div className="my-8 w-full overflow-hidden rounded-2xl border border-[#EBE7DF] bg-white shadow-sm">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left font-sans text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#EBE7DF]">
                  {section.headers.map((h, i) => (
                    <th
                      key={i}
                      className="px-5 py-3.5 font-sans font-bold text-xs sm:text-[13px] text-[#161413] uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2EFE9]">
                {section.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`px-5 py-3.5 text-[#554E48] leading-relaxed ${
                          cIdx === 0 ? 'font-medium text-[#161413]' : ''
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.caption && (
            <div className="px-5 py-2.5 bg-[#FAF7F2]/60 border-t border-[#EBE7DF] text-xs font-sans text-[#8C847E] italic">
              {section.caption}
            </div>
          )}
        </div>
      )
    }

    case 'chart': {
      // Find max value to calibrate bar scales
      const maxValue = Math.max(...section.items.map((it) => it.value), 100)

      return (
        <div className="my-8 rounded-2xl border border-[#EBE7DF] bg-[#FAF7F2]/70 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-1.5 rounded-lg bg-[#E4521B]/10 text-[#E4521B]">
              <BarChart3 className="w-4 h-4" />
            </span>
            <h4 className="font-sans font-bold text-base sm:text-lg text-[#161413] tracking-[-0.02em]">
              {section.title}
            </h4>
          </div>

          <div className="space-y-4">
            {section.items.map((item, idx) => {
              const percentage = Math.min(100, Math.round((item.value / maxValue) * 100))

              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between font-sans text-xs sm:text-sm font-medium">
                    <span className="text-[#161413]">{item.label}</span>
                    <span className="font-mono font-semibold text-[#E4521B]">
                      {item.value}
                      {section.chartType === 'metric' && typeof item.value === 'number' && item.value < 100 ? '%' : ''}
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-[#E8DACD]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF914D] to-[#E4521B] transition-all duration-700 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    case 'image': {
      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-[#EBE7DF]">
          <div className="relative aspect-[16/9] w-full bg-[#FAF7F2]">
            <Image
              src={section.src}
              alt={section.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {section.caption && (
            <figcaption className="px-4 py-2.5 bg-[#FAF7F2] text-xs font-sans text-[#8C847E] text-center italic border-t border-[#EBE7DF]">
              {section.caption}
            </figcaption>
          )}
        </figure>
      )
    }

    case 'callout': {
      const isTip = section.variant === 'tip'
      const isQuote = section.variant === 'quote'

      return (
        <div
          className={`my-8 rounded-2xl p-6 border-l-4 ${
            isTip
              ? 'border-l-[#E4521B] bg-[#FEF4ED]/80 border-t border-r border-b border-[#F7E1D2]'
              : isQuote
              ? 'border-l-[#161413] bg-[#FAF7F2] border-t border-r border-b border-[#EBE7DF]'
              : 'border-l-[#E4521B] bg-[#FAF7F2] border-t border-r border-b border-[#EBE7DF]'
          }`}
        >
          <div className="flex gap-4">
            <span className="shrink-0 text-[#E4521B] pt-0.5">
              {isTip && <Lightbulb className="w-5 h-5 text-[#E4521B]" />}
              {isQuote && <Quote className="w-5 h-5 text-[#161413]" />}
              {!isTip && !isQuote && <Info className="w-5 h-5 text-[#E4521B]" />}
            </span>
            <div className="space-y-2">
              <p className="font-sans text-[15px] sm:text-base text-[#161413] font-medium leading-relaxed italic">
                {section.text}
              </p>
              {section.citation && (
                <p className="font-sans text-xs text-[#8C847E] font-semibold uppercase tracking-wider">
                  — {section.citation}
                </p>
              )}
            </div>
          </div>
        </div>
      )
    }

    case 'cta': {
      return (
        <div className="my-10 rounded-3xl bg-gradient-to-br from-[#161413] to-[#25211E] p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          {/* Subtle Ambient Coral Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#E4521B]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-[-0.03em] leading-snug">
              {section.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#C2BCB6] leading-relaxed">
              {section.description}
            </p>
            <div className="pt-2">
              <Link
                href={section.buttonHref}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#E4521B] hover:bg-[#C23C0A] text-white font-sans font-semibold text-sm transition-all duration-300 shadow-[0_8px_20px_rgba(228,82,27,0.35)] hover:shadow-[0_12px_28px_rgba(228,82,27,0.5)] hover:-translate-y-0.5"
              >
                <span>{section.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )
    }

    default:
      return null
  }
}

export default BlogSectionRenderer

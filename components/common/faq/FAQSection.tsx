'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SlitTypeFaq, { FaqItem, SlitPreset } from './slit-type-faq'
import { HOME_FAQ_ITEMS, HOME_FAQ_CATEGORIES, FAQ_TICKER_PHRASES } from '@/data/faq'

export interface FAQContactConfig {
  prompt?: string
  label?: string
  href?: string
}

export interface FAQSectionProps {
  /** HTML section id attribute for anchoring (default 'faq') */
  id?: string
  /** List of FAQ items to display */
  items?: FaqItem[]
  /** Eyebrow badge text */
  eyebrow?: string
  /** Display headline with multi-line support via '\n' */
  headline?: string
  /** Introductory paragraph below headline */
  intro?: string
  /** Category filtering pills */
  categories?: string[]
  /** Ticker phrases moving across the top */
  ticker?: string[]
  /** Whether search functionality is enabled */
  search?: boolean
  /** Search input placeholder label */
  searchLabel?: string
  /** Bottom contact prompt configuration */
  contact?: FAQContactConfig
  /** Theme visual preset */
  preset?: SlitPreset
  /** Slit depth cutoff (default 0 for 100% full view without hover) */
  slit?: number
  /** Whether signature accent pill & dot are shown */
  showAccentLine?: boolean
  /** Custom classes for outer <section> */
  className?: string
  /** Maximum width container class (default 'max-w-7xl') */
  containerMaxWidth?: string
  /** Section background color (default 'bg-white') */
  bgColor?: string
  /** Index of item open by default (default 0) */
  defaultOpen?: number
}

export function FAQSection({
  id = 'faq',
  items = HOME_FAQ_ITEMS,
  eyebrow = 'QUICK ANSWERS & FAQ',
  headline = 'Frequently asked questions.\n<span style="color: var(--color-primary-orange)">Clear answers for builders.</span>',
  intro = 'Find quick answers regarding our community sprints, live pair-coding sessions, practical learning roadmaps, and verifiable proof of work.',
  categories = HOME_FAQ_CATEGORIES,
  ticker = FAQ_TICKER_PHRASES,
  search = true,
  searchLabel = 'Search questions & answers',
  contact = {
    prompt: 'Still have a question or project idea?',
    label: 'Reach out to our team',
    href: '/contact',
  },
  preset = 'kodetomates',
  slit = 0,
  showAccentLine = true,
  className = '',
  containerMaxWidth = 'max-w-7xl',
  bgColor = 'bg-white',
  defaultOpen = 0,
}: FAQSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id={id}
      className={`w-full ${bgColor} relative scroll-mt-24 border-t border-[#F0EBE1] overflow-hidden ${className}`}
      aria-label={headline ? undefined : 'Frequently asked questions'}
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -44 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full ${containerMaxWidth} mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <SlitTypeFaq
          items={items}
          eyebrow={eyebrow}
          headline={headline}
          showAccentLine={showAccentLine}
          slit={slit}
          intro={intro}
          preset={preset}
          categories={categories}
          ticker={ticker}
          search={search}
          searchLabel={searchLabel}
          contact={{
            prompt: contact.prompt ?? 'Still have a question or project idea?',
            label: contact.label ?? 'Reach out to our team',
            href: contact.href ?? '/contact',
          }}
          copyLinks={true}
          syncHash={true}
          defaultOpen={defaultOpen}
        />
      </motion.div>
    </section>
  )
}

export default FAQSection

import { FaqItem } from '@/components/common/faq'
import faqData from './faq.json'

export type { FaqItem }

export interface PageFaqConfig {
  eyebrow?: string
  headline?: string
  intro?: string
  items: FaqItem[]
  categories?: string[]
  ticker?: string[]
}

export interface FaqJsonData {
  categories: string[]
  ticker: string[]
  items: FaqItem[]
  pages?: Record<
    string,
    {
      eyebrow?: string
      headline?: string
      intro?: string
      categories?: string[]
      items?: FaqItem[]
      ticker?: string[]
    }
  >
}

/** Raw JSON FAQ data */
export const rawFaqData = faqData as FaqJsonData

/** Default categories across the site */
export const HOME_FAQ_CATEGORIES: string[] = faqData.categories

/** Rotating animated ticker phrases */
export const FAQ_TICKER_PHRASES: string[] = faqData.ticker

/** Core home page FAQs */
export const HOME_FAQ_ITEMS: FaqItem[] = faqData.items as FaqItem[]

/** Registry of FAQs organized by page for multi-page scaling */
export const PAGE_FAQS: Record<string, PageFaqConfig> = Object.fromEntries(
  Object.entries(faqData.pages ?? {}).map(([key, rawPageConfig]) => {
    const pageConfig = rawPageConfig as Partial<PageFaqConfig>
    return [
      key,
      {
        eyebrow: pageConfig.eyebrow ?? 'QUICK ANSWERS & FAQ',
        headline:
          pageConfig.headline ??
          'Frequently asked questions.\n<span style="color: var(--color-primary-orange)">Clear answers for builders.</span>',
        intro:
          pageConfig.intro ??
          'Find quick answers regarding our community sprints, live pair-coding sessions, practical learning roadmaps, and verifiable proof of work.',
        categories: pageConfig.categories ?? HOME_FAQ_CATEGORIES,
        items: pageConfig.items ?? HOME_FAQ_ITEMS,
        ticker: pageConfig.ticker ?? FAQ_TICKER_PHRASES,
      },
    ]
  })
)

/** Helper function to retrieve FAQ configuration for any page */
export function getPageFaq(pageKey: string): PageFaqConfig {
  return (
    PAGE_FAQS[pageKey] ?? {
      eyebrow: 'QUICK ANSWERS & FAQ',
      headline:
        'Frequently asked questions.\n<span style="color: var(--color-primary-orange)">Clear answers for builders.</span>',
      intro:
        'Find quick answers regarding our ecosystem, workflows, and building together.',
      categories: HOME_FAQ_CATEGORIES,
      items: HOME_FAQ_ITEMS,
      ticker: FAQ_TICKER_PHRASES,
    }
  )
}

/** Helper function to retrieve consolidated FAQs across all pages directly from faq.json */
export function getAllPagesFaq() {
  const pageConfigs: Record<string, { label: string }> = {
    home: { label: 'General & Community' },
    about: { label: 'About Us' },
    'website-dev': { label: 'Website Dev' },
    'website-redesign': { label: 'Website Redesign' },
    seo: { label: 'SEO & Optimization' },
    'digital-invitation': { label: 'Digital Invitations' },
  }

  const allItems: FaqItem[] = []
  const categories = Object.values(pageConfigs).map((c) => c.label)

  // 1. Home items from faqData.items
  const homeItems = (faqData.items ?? []) as FaqItem[]
  homeItems.forEach((item) => {
    allItems.push({
      ...item,
      category: pageConfigs.home.label,
    })
  })

  // 2. Page-specific items from faqData.pages
  const pages = (faqData.pages ?? {}) as Record<string, { items?: FaqItem[] }>
  for (const [pageKey, config] of Object.entries(pageConfigs)) {
    if (pageKey === 'home') continue
    const pageData = pages[pageKey]
    if (pageData?.items) {
      pageData.items.forEach((item) => {
        allItems.push({
          ...item,
          category: config.label,
        })
      })
    }
  }

  const ticker = [
    'LEARN TOGETHER · BUILD TOGETHER',
    'PRODUCTION-GRADE WEBSITES',
    'SEARCH ENGINE OPTIMISATION',
    'MODERN WEBSITE REDESIGNS',
    'INTERACTIVE DIGITAL INVITATIONS',
    'CLEAN ARCHITECTURE & ACCESSIBILITY',
    '100% PRACTICAL CODE',
    'VERIFIABLE PROOF OF WORK',
  ]

  return {
    categories,
    ticker,
    items: allItems,
  }
}

export default faqData


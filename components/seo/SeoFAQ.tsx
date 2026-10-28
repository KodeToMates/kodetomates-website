'use client'

import React from 'react'
import { FAQSection as CommonFAQSection, type FAQSectionProps } from '@/components/common/faq'
import { getPageFaq } from '@/data/faq'

export function SeoFAQ(props: Partial<FAQSectionProps> = {}) {
  const seoFaq = getPageFaq('seo')

  return (
    <CommonFAQSection
      id="faq"
      items={seoFaq.items}
      categories={seoFaq.categories}
      ticker={seoFaq.ticker}
      eyebrow={seoFaq.eyebrow ?? 'FAQS'}
      headline={seoFaq.headline}
      intro={seoFaq.intro}
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search questions & answers"
      contact={{
        prompt: 'Have a specific question about your website or search goals?',
        label: 'Discuss with our team',
        href: '/contact',
      }}
      defaultOpen={0}
      bgColor="bg-white"
      {...props}
    />
  )
}

export default SeoFAQ

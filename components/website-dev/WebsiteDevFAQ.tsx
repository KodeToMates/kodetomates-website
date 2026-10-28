'use client'

import React from 'react'
import { FAQSection as CommonFAQSection } from '@/components/common/faq'
import { getPageFaq } from '@/data/faq'

export function WebsiteDevFAQ() {
  const faq = getPageFaq('website-dev')

  return (
    <CommonFAQSection
      id="faq"
      items={faq.items}
      categories={faq.categories}
      ticker={faq.ticker}
      eyebrow={faq.eyebrow}
      headline={faq.headline}
      intro={faq.intro}
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search questions & answers"
      contact={{
        prompt: 'Have a specific question about your website project?',
        label: 'Discuss with our engineers',
        href: '/contact',
      }}
      defaultOpen={0}
      bgColor="bg-white"
    />
  )
}

export default WebsiteDevFAQ

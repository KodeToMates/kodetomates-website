'use client'

import React from 'react'
import { FAQSection as CommonFAQSection } from '@/components/common/faq'
import { getPageFaq } from '@/data/faq'

export function FAQSection() {
  const homeFaq = getPageFaq('home')

  return (
    <CommonFAQSection
      id="faq"
      items={homeFaq.items}
      categories={homeFaq.categories}
      ticker={homeFaq.ticker}
      eyebrow={homeFaq.eyebrow}
      headline={homeFaq.headline}
      intro={homeFaq.intro}
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search questions & answers"
      contact={{
        prompt: 'Still have a question or project idea?',
        label: 'Reach out to our team',
        href: '/contact',
      }}
      defaultOpen={0}
    />
  )
}

export default FAQSection


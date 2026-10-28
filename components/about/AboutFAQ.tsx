'use client'

import React from 'react'
import { FAQSection as CommonFAQSection } from '@/components/common/faq'
import { getPageFaq } from '@/data/faq'

export function AboutFAQ() {
  const aboutFaq = getPageFaq('about')

  return (
    <CommonFAQSection
      id="faq"
      items={aboutFaq.items}
      categories={aboutFaq.categories}
      ticker={aboutFaq.ticker}
      eyebrow={aboutFaq.eyebrow ?? 'FREQUENTLY ASKED QUESTIONS'}
      headline={aboutFaq.headline}
      intro={aboutFaq.intro}
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search questions about KodeToMates..."
      contact={{
        prompt: 'Have a project idea or question about collaborating?',
        label: 'Reach out to our team',
        href: '/contact',
      }}
      defaultOpen={0}
      bgColor="bg-white"
      containerMaxWidth="max-w-7xl"
      className="border-t border-gray-100"
    />
  )
}

export default AboutFAQ

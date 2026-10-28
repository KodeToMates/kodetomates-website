'use client'

import React from 'react'
import { FAQSection as CommonFAQSection, type FAQSectionProps } from '@/components/common/faq'
import { getPageFaq } from '@/data/faq'

export function WebsiteRedesignFAQ(props: Partial<FAQSectionProps> = {}) {
  const redesignFaq = getPageFaq('website-redesign')

  return (
    <CommonFAQSection
      id="faq"
      items={redesignFaq.items}
      categories={redesignFaq.categories}
      ticker={redesignFaq.ticker}
      eyebrow={redesignFaq.eyebrow ?? 'QUICK ANSWERS & FAQ'}
      headline={redesignFaq.headline}
      intro={redesignFaq.intro}
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search redesign questions & answers"
      contact={{
        prompt: 'Have a specific question about your website redesign roadmap?',
        label: 'Discuss with our redesign team',
        href: '/contact',
      }}
      defaultOpen={0}
      bgColor="bg-white"
      {...props}
    />
  )
}

export default WebsiteRedesignFAQ

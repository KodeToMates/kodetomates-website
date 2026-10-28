'use client'

import React from 'react'
import { FAQSection as CommonFAQSection } from '@/components/common/faq'
import { getPageFaq } from '@/data/faq'

export function DigitalInvitationFAQ() {
  const faq = getPageFaq('digital-invitation')

  return (
    <CommonFAQSection
      id="faq"
      items={faq.items}
      categories={faq.categories}
      ticker={faq.ticker}
      eyebrow={faq.eyebrow ?? 'FREQUENTLY ASKED QUESTIONS'}
      headline={faq.headline}
      intro={faq.intro}
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search invitation questions..."
      contact={{
        prompt: 'Have a custom celebration ritual or question?',
        label: 'Chat with our design team',
        href: '/contact',
      }}
      defaultOpen={0}
      bgColor="bg-white"
      containerMaxWidth="max-w-7xl"
      className="border-t border-gray-100"
    />
  )
}

export default DigitalInvitationFAQ

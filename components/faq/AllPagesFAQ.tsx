'use client'

import React, { useMemo } from 'react'
import { FAQSection as CommonFAQSection } from '@/components/common/faq'
import { getAllPagesFaq } from '@/data/faq'

export function AllPagesFAQ() {
  const { items, categories, ticker } = useMemo(() => getAllPagesFaq(), [])

  return (
    <CommonFAQSection
      id="faq"
      items={items}
      categories={categories}
      ticker={ticker}
      eyebrow="KODETOMATES KNOWLEDGE BASE & FAQ"
      headline={'Frequently asked questions.\n<span style="color: #E4521B">Clear answers across all our services.</span>'}
      intro="Everything you need to know about KodeToMates in one place. Explore comprehensive answers across our community platform, website development, redesigns, search optimization, digital invitations, and collaboration workflows."
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search all questions & answers..."
      contact={{
        prompt: 'Have a specific question about your project or idea?',
        label: 'Reach out to our team',
        href: '/contact',
      }}
      defaultOpen={0}
      className="pt-28 sm:pt-36 pb-24 border-t-0"
      bgColor="bg-white"
      containerMaxWidth="max-w-7xl"
    />
  )
}

export default AllPagesFAQ

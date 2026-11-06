'use client'

import React from 'react'
import { FAQSection as CommonFAQSection } from '@/components/common/faq'
import { WHAT_WE_DO_FAQS, WHAT_WE_DO_TICKER_PHRASES } from '@/config/what-we-do'

export function WhatWeDoFAQ() {
  const formattedItems = WHAT_WE_DO_FAQS.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
    category: 'General',
  }))

  return (
    <CommonFAQSection
      id="faq"
      items={formattedItems}
      categories={['General']}
      ticker={WHAT_WE_DO_TICKER_PHRASES}
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      headline='Clear answers on workflows.\n<span style="color: var(--color-primary-orange)">Transparency across every pillar.</span>'
      intro="Everything you need to know about our project timelines, engineering standards, SEO preservation, and pricing models."
      showAccentLine={true}
      slit={0}
      search={true}
      searchLabel="Search capabilities, workflows & FAQs..."
      contact={{
        prompt: 'Have a custom inquiry or enterprise requirement?',
        label: 'Schedule a Consultation',
        href: '/contact',
      }}
      defaultOpen={0}
      bgColor="bg-white"
    />
  )
}

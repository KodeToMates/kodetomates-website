import React from 'react'
import type { Metadata } from 'next'
import { AllPagesFAQ } from '@/components/faq'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Knowledge Base | KodeToMates',
  description:
    'Find clear answers to common questions about KodeToMates: community membership, website development, website redesigns, search optimization, digital invitations, and collaboration workflows.',
}

export default function FAQPage() {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#161413]">
      <AllPagesFAQ />
    </main>
  )
}

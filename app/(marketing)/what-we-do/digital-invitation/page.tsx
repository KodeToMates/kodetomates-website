import React from 'react'
import type { Metadata } from 'next'
import {
  DigitalInvitationScrollShowcase,
  EveryScreenShowcaseSection,
  CelebrationCategoriesSection,
  TestimonialsSection,
  DigitalInvitationFAQ,
} from '@/components/digital-invitation'

export const metadata: Metadata = {
  title: 'Digital Invitations & Event RSVP Experiences | KodeToMates',
  description:
    'Bespoke digital wedding invitations, instant RSVP tracking, interactive venue navigation, and personalized celebratory web experiences crafted by KodeToMates.',
}

export default function DigitalInvitationPage() {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#161413]">
      {/* 3-Stage Persistent Scroll Showcase:
          Phase 1: Hero (Mockup on Right)
          Phase 2: 'Every Detail, Beautifully Handled.' (Mockup in Center)
          Phase 3: 'Three simple steps. Ready in 2–3 business days.' (Mockup on Right) */}
      <DigitalInvitationScrollShowcase />

      {/* One Link · Every Screen (Animated Laptop, Tablet, Mobile Views) */}
      <EveryScreenShowcaseSection />

      {/* Find the Perfect Invitation for Your Celebration Showcase */}
      <CelebrationCategoriesSection />

      {/* Loved by families on Google (Testimonials & Reviews) */}
      <TestimonialsSection />

      {/* Frequently Asked Questions (Official KodeToMates FAQ UI) */}
      <DigitalInvitationFAQ />
    </main>
  )
}

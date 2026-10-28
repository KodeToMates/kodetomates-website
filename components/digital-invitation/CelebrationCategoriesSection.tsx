'use client'

import React, { useState } from 'react'
import { SlitHeading } from '@/components/ui'
import { Carousel, Card, CardItem } from '@/components/ui/specials-linear-carousel'

// All primary and regional celebration categories
const CELEBRATION_CARDS: CardItem[] = [
  {
    title: 'Wedding',
    category: 'Sacred Muhurtham',
    description:
      'Multi-day ceremony itineraries, bride & groom stories, interactive venue maps, and real-time RSVP tracking.',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Engagement',
    category: 'Rings & Promises',
    description:
      'Countdown timers, couple photo highlights, venue navigation, and elegant RSVP collection for your ring ceremony.',
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Birthday',
    category: 'Milestone Celebrations',
    description:
      'Vibrant invitations for 1st birthdays, sweet sixteens, and jubilee celebrations with music, dress codes, and gift registries.',
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'House Warming',
    category: 'Griha Pravesham',
    description:
      'Auspicious homam timings, instant 1-tap Google Maps directions, and blessings guestbook for your new dream home.',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Events & Celebrations',
    category: 'Grand Gatherings',
    description:
      'Corporate galas, festive reunions, and anniversary dinners with digital QR passes, schedule feeds, and speaker line-ups.',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Reception',
    category: 'Evening Gala',
    description:
      'Glamorous dinner invitations with live dress code inspiration, party music playlists, and guest RSVP tracking.',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Baby Shower & Seemantham',
    category: 'Valaikappu & Blessings',
    description:
      'Joyful celebration invites for the mother-to-be with tradition schedules, bangles ceremony notes, and RSVP.',
    src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Naming Ceremony',
    category: 'Thottil Vizha / Namakaran',
    description:
      'Welcoming your newborn with muhurtham timings, sweet family stories, and instant directions for near and dear ones.',
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Manjal Neerattu Vizha',
    category: 'Traditional Rites',
    description:
      'Sacred puberty ceremony digital invites with traditional South Indian aesthetics, family tree, and muhurtham notes.',
    src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Kaathu Kuthu',
    category: 'Ear Piercing Ceremony',
    description:
      'Auspicious temple location maps, festive feast lunch timings, and warm celebratory invitations for the entire family.',
    src: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Anniversary & Manivizha',
    category: 'Milestone Love',
    description:
      'Celebrate silver, golden, Sashtiabdhapoorthi (60th), or Sadabhishekam (80th) milestones with heartfelt video invites.',
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
  },
]

// Simple, non-clickable celebration ceremony tags
const ALSO_DESIGNED_FOR_LABELS = [
  'Reception',
  'Baby shower & seemantham',
  'Naming ceremony',
  'Manjal neerattu vizha',
  'Kaathu kuthu',
  'Anniversary & manivizha',
]

export function CelebrationCategoriesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const filterTabs = [
    { id: 'all', label: 'All Celebrations' },
    { id: 'Wedding', label: 'Wedding' },
    { id: 'Engagement', label: 'Engagement' },
    { id: 'Birthday', label: 'Birthday' },
    { id: 'House Warming', label: 'House Warming' },
    { id: 'Events & Celebrations', label: 'Events' },
  ]

  const filteredCards =
    selectedFilter === 'all'
      ? CELEBRATION_CARDS
      : CELEBRATION_CARDS.filter((c) => c.title.includes(selectedFilter))

  const carouselItems = filteredCards.map((card, idx) => (
    <Card
      key={`${card.title}-${idx}`}
      card={card}
      index={idx}
    />
  ))

  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-16 bg-white border-t border-gray-100 overflow-hidden">
      {/* Soft Ambient Radial Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.05)_0%,transparent_70%)] blur-3xl -z-10"
      />

      {/* Centered Section Header & Filters */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="w-full text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Main Heading with Signature Home Page Slit Reveal Animation */}
          <SlitHeading
            id="celebration-categories-heading"
            align="center"
            lines={['Find the Perfect Invitation for <span style="color: var(--color-primary-orange)">Your Celebration.</span>']}
            showAccentLine={true}
            slit={0.35}
            dotColor="#E4521B"
            textColor="#161413"
            className="text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-[-0.03em] mb-4"
          />

          {/* Subtitle / Body Copy */}
          <p className="font-sans text-[15.5px] sm:text-[17px] text-[#6B645E] leading-relaxed max-w-2xl mx-auto">
            From grand wedding muhurthams and engagements to intimate house warmings and baby showers, every milestone deserves an unforgettable digital experience.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#161413] text-white shadow-sm'
                      : 'bg-white text-[#524B45] hover:text-[#161413] border border-[#E8E2D9] hover:border-[#161413]/30 hover:bg-[#F5F1EB]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Full-Width Carousel Showcase (Spanning Edge-to-Edge with Left & Right Floating Arrows) */}
      <div className="relative w-full overflow-hidden my-3 sm:my-4">
        <Carousel items={carouselItems} autoplay autoplaySpeed={0.5} />
      </div>

      {/* Simple, Non-Clickable "Also designed for:" Label Row Below the Cards */}
      <div className="w-full max-w-4xl mx-auto text-center px-6 mt-6 sm:mt-8">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-xs sm:text-[13.5px] font-sans text-[#7A726B]">
          <span className="font-semibold text-[#161413]">Also designed for:</span>
          {ALSO_DESIGNED_FOR_LABELS.map((label, idx) => (
            <React.Fragment key={idx}>
              <span>{label}</span>
              {idx < ALSO_DESIGNED_FOR_LABELS.length - 1 && (
                <span className="text-[#D1C9BE] select-none" aria-hidden>
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { StackedCardsSection, StackedCardItem } from '@/components/common/stacked-cards'

const WHO_WE_WORK_WITH_CARDS: StackedCardItem[] = [
  {
    id: 'founders',
    number: '01',
    pill: 'Businesses & Founders',
    title: 'Businesses & Founders',
    headline: 'Explore the problem and chart a practical way forward',
    description:
      'You have an idea, a process that could work better, or a digital experience that needs improvement. We can explore the problem with you and discuss a practical way forward.',
    image: '/Image-v1/Home_page/home-hero-1.jpg',
    tags: ['Problem Discovery', 'Digital Products', 'Process Improvement', 'Practical Roadmaps'],
    stat: 'Founders',
    accentColor: '#E4521B',
  },
  {
    id: 'developers',
    number: '02',
    pill: 'Developers & Enthusiasts',
    title: 'Developers & Tech Enthusiasts',
    headline: 'Learn, experiment, share knowledge, and build together',
    description:
      'You enjoy learning, experimenting, sharing knowledge, and contributing to meaningful projects. KodeToMates is a place to connect around those interests.',
    image: '/Image-v1/Home_page/build-real-products.jpg',
    tags: ['Hands-on Spikes', 'Modern Frameworks', 'Peer Code Reviews', 'Open Repos'],
    stat: 'Developers',
    accentColor: '#059669',
  },
  {
    id: 'designers',
    number: '03',
    pill: 'Designers & Creatives',
    title: 'Designers & Creative Thinkers',
    headline: 'Connect thoughtful human design with sound engineering',
    description:
      'You care about how technology feels and works for people. We value the connection between thoughtful design and good engineering.',
    image: '/images/projects/community-sticky-notes.jpg',
    tags: ['Thoughtful UI/UX', 'User Psychology', 'Design Systems', 'Craft & Details'],
    stat: 'Designers',
    accentColor: '#7C3AED',
  },
  {
    id: 'mentors',
    number: '04',
    pill: 'Mentors & Leaders',
    title: 'Mentors & Collaborators',
    headline: 'Exchange knowledge, offer perspectives, and help teams grow',
    description:
      'You have experience, ideas, or perspectives that can help people grow and projects improve. We welcome opportunities to exchange knowledge and collaborate.',
    image: '/Image-v1/Home_page/grow & lead.jpg',
    tags: ['Knowledge Exchange', 'Constructive Feedback', 'Technical Guidance', 'Mutual Growth'],
    stat: 'Mentors',
    accentColor: '#D97706',
  },
]

export function AboutWhoWeWorkWith() {
  return (
    <StackedCardsSection
      sectionId="who-we-work-with"
      eyebrow=""
      titleLine1="Who we"
      titleLine2='<span className="text-[var(--color-primary-orange)]">work with</span>'
      descriptionParagraphs={[
        "We believe good collaboration starts with openness, shared expectations, and respect for one another's contributions.",
      ]}
      cards={WHO_WE_WORK_WITH_CARDS}
      ctaButton={{
        label: 'Collaborate With Us',
        href: '/contact',
        secondary: {
          label: 'Explore Our Work',
          href: '/projects',
        },
      }}
      className="-mt-[1px]"
      contentAlign="center"
    />
  )
}

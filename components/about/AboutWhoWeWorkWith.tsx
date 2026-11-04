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
      'You have an ambitious idea, an inefficient workflow, or an existing web product that needs modernization. We partner with you to unpack the real problem, validate market assumptions, and build resilient software roadmaps that turn vision into measurable business value.',
    image: '/Image-v1/dev_page/business-website.jpg',
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
      'You thrive on hands-on architecture spikes, diving deep into modern web runtimes, and shipping open-source code. KodeToMates offers a collaborative sandbox where engineers level up through peer code reviews, shared repositories, and production-grade challenges.',
    image: '/Image-v1/Home_page/developer-tools.jpg',
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
      'You care deeply about user psychology, fluid motion, and typography that breathes. We bridge the gap between Figma designs and production code, transforming creative concepts into accessible, 60fps interactive systems with complete visual harmony.',
    image: '/Image-v1/about_page/design.jpg',
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
      'You bring battle-tested industry experience, architectural judgment, and high-leverage technical insight. We create meaningful touchpoints for senior leaders to mentor emerging builders, conduct design critiques, and shape the direction of ambitious digital products.',
    image: '/Image-v1/Home_page/community-projects.jpg',
    tags: ['Knowledge Exchange', 'Constructive Feedback', 'Technical Guidance', 'Mutual Growth'],
    stat: 'Mentors',
    accentColor: '#D97706',
  },
]

export function AboutWhoWeWorkWith() {
  return (
    <StackedCardsSection
      sectionId="who-we-work-with"
      eyebrow="Collaborative Network"
      titleLine1="Who we"
      titleLine2='<span className="text-[var(--color-primary-orange)]">work with</span>'
      descriptionParagraphs={[
        "Great products and enduring digital experiences are never built in isolation. We partner with ambitious founders, inquisitive engineers, thoughtful designers, and experienced mentors who care deeply about craft, transparency, and sustainable execution.",
        "Whether we are co-creating a new brand platform from scratch, untangling complex web architecture, or hosting knowledge-sharing sessions, our engagements are anchored in mutual respect, direct feedback loops, and measurable impact.",
        "Every collaborator brings a distinct perspective to the table. Explore the different ways we plug into your journey—from high-velocity technical advisory to hands-on engineering sprints.",
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

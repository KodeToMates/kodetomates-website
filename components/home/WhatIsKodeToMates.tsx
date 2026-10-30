'use client'

import React from 'react'
import { StackedCardsSection, StackedCardItem } from '@/components/common/stacked-cards'

const PILLAR_CARDS: StackedCardItem[] = [
  {
    id: 'learn',
    number: '01',
    pill: 'Learn by Doing',
    title: 'Learn Together',
    headline: 'Master modern engineering with live practice & mentorship',
    description:
      'Break out of tutorial purgatory. Dive into curated learning paths, live pair-coding sessions, and open workshops covering full-stack web development, AI automation, and system design.',
    image: '/Image-v1/Home_page/Learn-together.jpg',
    tags: ['Hands-on Labs', 'System Architecture', 'Live Workshops', 'Peer Mentoring'],
    stat: '100% Practical',
    accentColor: '#E4521B',
  },
  {
    id: 'build',
    number: '02',
    pill: 'Real-World Software',
    title: 'Build Real Products',
    headline: 'Turn your ideas into deployed, production code',
    description:
      'Theory without execution is wasted. Team up with fellow engineers to architect, code, test, and ship production-ready applications, open-source repositories, and client-grade solutions.',
    image: '/Image-v1/Home_page/build-real-products.jpg',
    tags: ['Full-Stack Apps', 'Open Source Repos', 'CI/CD Pipelines', 'Production MVPs'],
    stat: 'Shipped Code',
    accentColor: '#059669',
  },
  {
    id: 'collaborate',
    number: '03',
    pill: 'Team Engineering',
    title: 'Collaborate as a Team',
    headline: 'Work the way modern high-performing tech teams work',
    description:
      'Software engineering is a multiplayer sport. Experience Git workflows, pull request reviews, Agile sprints, and cross-functional team dynamics alongside frontend, backend, and design peers.',
    image: '/Image-v1/Home_page/team.jpg',
    tags: ['Git & PR Reviews', 'Agile Sprints', 'Pair Programming', 'Community Hub'],
    stat: 'Multiplayer Dev',
    accentColor: '#7C3AED',
  },
  {
    id: 'grow',
    number: '04',
    pill: 'Proof of Work',
    title: 'Grow & Lead',
    headline: 'Build a verifiable portfolio, unlock career opportunities',
    description:
      'Prove your skills with real contributions. Turn community projects into proof-of-work case studies, land high-impact tech roles, launch startups, or step up as an engineering mentor.',
    image: '/Image-v1/Home_page/grow & lead.jpg',
    tags: ['Career Growth', 'Portfolio Proof', 'Tech Leadership', 'Referral Network'],
    stat: 'Career Impact',
    accentColor: '#D97706',
  },
]

export function WhatIsKodeToMates() {
  return (
    <StackedCardsSection
      sectionId="about"
      eyebrow="WHAT IS KodeToMates?"
      titleLine1="More than learning"
      titleLine2='<span className="text-[var(--color-primary-orange)]">More than building</span>'
      descriptionParagraphs={[
        'KodeToMates is an open ecosystem designed for developers, builders, and creative technologists who want to break beyond passive tutorials. We bridge the critical gap between understanding syntax and shipping production-grade software.',
        'Here, learning is active, multiplayer, and driven by execution. Members collaborate on real GitHub repositories, participate in pair-coding sprints, exchange candid peer code reviews, and build verifiable public proof-of-work that unlocks high-impact engineering careers.',
      ]}
      cards={PILLAR_CARDS}
      ctaButton={{
        label: 'Explore Our Community',
        href: '/community',
      }}
      className="-mt-[1px]"
      contentAlign="center"
    />
  )
}

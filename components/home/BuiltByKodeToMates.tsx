'use client'

import React from 'react'
import { StackedCardsSection, StackedCardItem } from '@/components/common/stacked-cards'

const PROJECTS_CARDS: StackedCardItem[] = [
  {
    id: 'developer-tools',
    number: '01',
    pill: 'Developer Experience',
    title: 'Developer Tools',
    headline: 'Tools that make development faster, simpler & collaborative',
    description:
      "We're exploring tools that make development faster, simpler and more collaborative — from streamlined local workflows to smarter engineering utilities and dev-kits.",
    image: '/images/projects/laptop-ai-desk.jpg',
    tags: ['Developer Experience', 'Productivity Utilities', 'CLI & Workflows', 'Open Source'],
    stat: 'Active Research',
    accentColor: '#E4521B',
    link: '/projects',
  },
  {
    id: 'ai-automation',
    number: '02',
    pill: 'Autonomous Agents',
    title: 'AI & Automation',
    headline: 'Removing friction and helping developers focus on creating',
    description:
      "We're researching how generative AI, agent orchestration, and automated pipelines can remove mechanical friction, save development hours, and accelerate engineering breakthroughs.",
    image: '/images/projects/ai-automation-desk.jpg',
    tags: ['Autonomous Agents', 'LLM Chains', 'Workflow Automation', 'Semantic Search'],
    stat: 'AI Prototypes',
    accentColor: '#059669',
    link: '/projects',
  },
  {
    id: 'community-projects',
    number: '03',
    pill: 'Open Collaboration',
    title: 'Community Projects',
    headline: 'Open to ideas, partnerships & building together',
    description:
      "We're open to ideas, partnerships and collaborations. If you have a project idea, a problem to solve, or just want to build production-grade software together — let's build.",
    image: '/images/projects/community-sticky-notes.jpg',
    tags: ['Collaborative Repos', 'Open Source', 'Sprint Hackathons', 'Peer Building'],
    stat: 'Public Repos',
    accentColor: '#7C3AED',
    link: '/projects',
  },
]

export function BuiltByKodeToMates() {
  return (
    <StackedCardsSection
      sectionId="built-by-kodetomates"
      eyebrow="OUR JOURNEY STARTS HERE"
      titleLine1="Real ideas. Real problems"
      titleLine2={`<span style="color: var(--color-primary-orange)">Real products</span>`}
      descriptionParagraphs={[
        "We're at the beginning of our journey. Explore the ideas we're researching, the tools we're experimenting with, and the production-grade software we build together.",
        'From developer tooling and autonomous AI workflows to community-driven repositories, our focus is turning concepts into shipped, open proof of work that solves real software challenges.',
      ]}
      cards={PROJECTS_CARDS}
      ctaButton={{
        label: 'Build with us',
        href: '/projects',
        secondary: {
          label: 'Share an idea',
          href: '/contact',
        },
      }}
    />
  )
}

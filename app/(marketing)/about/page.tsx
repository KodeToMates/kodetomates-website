import React from 'react'
import type { Metadata } from 'next'
import {
  AboutHero,
  AboutCulture,
  AboutProcessTimeline,
  AboutWhatWeAreBuilding,
  AboutWhyWeExist,
  AboutBeliefsStackedCards,
  AboutWhoWeWorkWith,
  AboutTeamSection,
  AboutFAQ,
} from '@/components/about'

export const metadata: Metadata = {
  title: 'About Us — A Community of Builders | KodeToMates',
  description:
    'KodeToMates is a growing technology community built around a simple idea: learn together, build together, and create things that make a difference.',
}

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#161413]">
      {/* 1. Hero — A Community of Builders */}
      <AboutHero />

      {/* 2. Philosophy — More than code. A culture of building. */}
      <AboutCulture />

      {/* 3. Methodology — How we turn ideas into outcomes */}
      <AboutProcessTimeline />

      {/* 4. What we're building — Interactive Story Scroll */}
      <AboutWhatWeAreBuilding />

      {/* 5. Purpose & Direction — Why KodeToMates exists, Mission & Vision */}
      <AboutWhyWeExist />

      {/* 6. Core Values — What we believe in (Full-width Stacked Cards) */}
      <AboutBeliefsStackedCards />

      {/* 7. Collaboration — Who we work with (Home Page Stacked Cards UI) */}
      <AboutWhoWeWorkWith />

      {/* 8. People — Meet the people behind the ideas */}
      <AboutTeamSection />

      {/* 9. Questions — Frequently Asked Questions */}
      <AboutFAQ />
    </main>
  )
}

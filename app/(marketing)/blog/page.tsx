import React from 'react'
import type { Metadata } from 'next'
import { getAllArticles } from '@/lib/blogs'
import { BlogListingSchema } from '@/components/schema'
import { BlogListingClient } from '@/components/blog'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Journal, Technical Teardowns & Architecture Insights | KodeToMates',
  description:
    'Deep architectural teardowns, redesign blueprints, search visibility breakdowns, and collaborative community insights from our builder ecosystem.',
}

export default async function BlogPage() {
  const articles = await getAllArticles()

  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#161413] pt-28 sm:pt-36 pb-24">
      {/* Search Engine Optimization: Structured Data JSON-LD Graph */}
      <BlogListingSchema articles={articles} />

      {/* Editorial Page Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-[#161413] tracking-[-0.03em] mb-4 leading-[1.08]">
            Articles, Insights &{' '}
            <span className="bg-gradient-to-r from-[#FF914D] to-[#E4521B] bg-clip-text text-transparent">
              Technical Craft
            </span>
          </h1>

          <p className="text-base sm:text-lg font-sans text-[#6B645E] leading-relaxed max-w-2xl">
            Deep architectural teardowns, redesign blueprints, search visibility breakdowns, and collaborative community insights from our builder ecosystem.
          </p>
        </div>

        {/* Client-Side Category Filtering and Blog Grid */}
        <BlogListingClient articles={articles} />
      </section>
    </main>
  )
}

'use client'

import React, { useState, useMemo } from 'react'
import { getAllArticles, getAllCategories } from '@/lib/blogs'
import { Blogs } from '@/components/ui/blogs'

export default function BlogPage() {
  const allArticles = useMemo(() => getAllArticles(), [])
  const categories = useMemo(() => ['All', ...getAllCategories()], [])
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return allArticles
    }
    return allArticles.filter((article) => article.category === activeCategory)
  }, [allArticles, activeCategory])

  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#161413] pt-28 sm:pt-36 pb-24">
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

        {/* Category Filter Chips */}
        <div className="mt-8 pt-6 border-t border-[#EFECE6] flex flex-wrap gap-2 sm:gap-2.5 items-center" aria-label="Filter articles by topic">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            const count =
              cat === 'All'
                ? allArticles.length
                : allArticles.filter((a) => a.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-semibold transition-all duration-200 flex items-center gap-1.5 ${isActive
                    ? 'bg-[#161413] text-white shadow-sm'
                    : 'bg-[#FAF7F2] text-[#6B645E] hover:text-[#161413] hover:bg-[#F2ECE4]'
                  }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-[#E8E2D8] text-[#554E48]'
                    }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <Blogs
        articles={filteredArticles}
        showHeading={false}
        className="!py-0"
      />
    </main>
  )
}

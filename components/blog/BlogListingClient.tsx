'use client'

import React, { useState, useMemo } from 'react'
import type { BlogArticle } from '@/lib/blogs'
import { Blogs } from '@/components/ui/blogs'
import { getAllCategories } from '@/lib/blogs'

interface BlogListingClientProps {
  articles: BlogArticle[]
}

export function BlogListingClient({ articles }: BlogListingClientProps) {
  const categories = useMemo(() => ['All', ...getAllCategories(articles)], [articles])
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return articles
    }
    return articles.filter((article) => article.category === activeCategory)
  }, [articles, activeCategory])

  return (
    <>
      {/* Category Filter Chips */}
      <div
        className="mt-8 pt-6 border-t border-[#EFECE6] flex flex-wrap gap-2 sm:gap-2.5 items-center"
        aria-label="Filter articles by topic"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          const count =
            cat === 'All'
              ? articles.length
              : articles.filter((a) => a.category === cat).length

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#161413] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#6B645E] hover:text-[#161413] hover:bg-[#F2ECE4]'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#E8E2D8] text-[#554E48]'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Blog Cards Grid */}
      <Blogs
        articles={filteredArticles}
        showHeading={false}
        className="!py-0"
      />
    </>
  )
}


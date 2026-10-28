'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles, BlogArticle } from '@/lib/blogs'

export interface BlogsProps {
  articles?: BlogArticle[]
  caption?: string
  headline?: string
  showHeading?: boolean
  className?: string
}

export function Blogs({
  articles,
  caption = 'KODETOMATES JOURNAL & INSIGHTS',
  headline = 'Featured Publications',
  showHeading = true,
  className = '',
}: BlogsProps) {
  const articlesList = articles ?? getAllArticles()

  return (
    <section className={`bg-white px-4 py-8 sm:py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-3 font-sans font-semibold text-[#E4521B] text-xs uppercase tracking-wider sm:mb-4">
              {caption}
            </p>
            <h2 className="font-sans font-bold text-3xl text-[#161413] tracking-[-0.03em] sm:text-4xl md:text-5xl">
              {headline}
            </h2>
          </div>
        )}

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articlesList.map((article) => {
            const articleHref = `/blog/${article.slug}`

            return (
              <div
                key={article.id}
                className="group relative cursor-pointer border border-[#EBE7DF] bg-[#FAFAF8]/60 shadow-none backdrop-blur-sm transition-all duration-300 hover:shadow-[0_12px_32px_rgba(228,82,27,0.08)] hover:border-[#E4521B]/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="p-0">
                  <div className="relative mb-4 sm:mb-6 overflow-hidden bg-[#F2EFE9]">
                    <Link href={articleHref} className="block overflow-hidden">
                      <Image
                        alt={article.title}
                        className="aspect-square h-64 w-full object-cover sm:h-72 md:h-80 transition-transform duration-700 ease-out group-hover:scale-105"
                        height={1080}
                        src={article.mainImage || '/placeholder.svg'}
                        width={1920}
                        priority={false}
                      />
                    </Link>
                    <p className="absolute top-0 left-0 rounded-none border-0 bg-white/95 px-2.5 py-1 font-sans font-bold text-[11px] text-[#161413] uppercase tracking-wide backdrop-blur-sm sm:-top-0.5 sm:-left-0.5 sm:px-3 sm:py-1 sm:text-xs shadow-sm">
                      #{article.category}
                    </p>
                  </div>

                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <Link href={articleHref} className="block group/title">
                      <h3 className="mb-2.5 font-sans font-bold text-lg text-[#161413] tracking-[-0.02em] sm:text-xl md:text-[22px] leading-snug transition-colors group-hover/title:text-[#E4521B]">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="mb-5 font-sans text-[#6B645E] text-xs leading-relaxed sm:text-sm line-clamp-3">
                      {article.description}
                    </p>

                    {/* Read More Link and Date */}
                    <div className="flex flex-col gap-3 pt-3 border-t border-[#EFECE6] sm:flex-row sm:items-center sm:justify-between">
                      <Link
                        className="group/btn relative inline-flex items-center overflow-hidden font-sans font-semibold text-[#161413] text-xs transition-colors hover:text-[#E4521B] sm:text-sm"
                        href={articleHref}
                      >
                        <span className="mr-2 overflow-hidden rounded-none border border-[#DDD7CE] p-2 transition-colors duration-300 ease-in group-hover/btn:bg-[#E4521B] group-hover/btn:text-white group-hover/btn:border-[#E4521B] sm:p-2.5">
                          <ArrowRight className="h-3.5 w-3.5 translate-x-0 opacity-100 transition-all duration-300 ease-in group-hover/btn:translate-x-8 group-hover/btn:opacity-0 sm:h-4 sm:w-4" />
                          <ArrowRight className="absolute top-1/2 -left-4 h-4 w-4 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover/btn:left-2 sm:-left-5 sm:h-4 sm:w-4 sm:group-hover/btn:left-2.5" />
                        </span>
                        Read more
                      </Link>
                      <span className="flex items-center gap-2 font-sans text-[11px] font-medium text-[#8C847E] sm:gap-3 sm:text-xs">
                        {article.publishDate}
                        <span className="w-6 border-[#DDD7CE] border-t sm:w-12" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blogs

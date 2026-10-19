'use client'

import React from 'react'
import Link from 'next/link'
import { LazySection } from '@/components/ui/LazySection'
import { LazyImage } from '@/components/ui/LazyImage'
import { LoaderPreviewDemo } from '@/components/ui/LoaderPreviewDemo'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 'nextjs-lazy-loading-architecture',
    title: 'Architecting Instant Experiences: Next.js 16 Lazy Loading & Suspense',
    excerpt: 'How we engineered high-performance dynamic streaming, intersection skeletons, and zero layout shift across our collaborative ecosystem.',
    category: 'Engineering',
    readTime: '5 min read',
    date: 'Oct 2026',
    image: '/images/projects/laptop-ai-desk.jpg',
  },
  {
    id: 'design-systems-organic-cyber',
    title: 'Crafting Organic-Cyber Brand UI: From Terracotta to Pixels',
    excerpt: 'Blending playful natural metaphors with precision developer tooling to build interfaces that feel human, fast, and remarkably responsive.',
    category: 'UI/UX Design',
    readTime: '7 min read',
    date: 'Sep 2026',
    image: '/images/projects/ai-automation-desk.jpg',
  },
  {
    id: 'collaborative-developer-community',
    title: 'Building Together: The Philosophy Behind KodeToMates',
    excerpt: 'Why modern engineering works best when learning, experimenting, and shipping happen in a tightly knit, open community.',
    category: 'Community',
    readTime: '4 min read',
    date: 'Sep 2026',
    image: '/images/projects/community-sticky-notes.jpg',
  }
]

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 container mx-auto px-6 max-w-6xl min-h-[80vh]">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4521B]/10 text-[#E4521B] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Tag className="w-3.5 h-3.5" />
          KodeToMates Journal
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-[#1A1614] tracking-tight mb-4">
          Engineering &{' '}
          <span className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent">
            Design Insights
          </span>
        </h1>
        <p className="text-lg text-[#554E48] leading-relaxed">
          Deep dives, design philosophies, and architectural walkthroughs from the KodeToMates team.
        </p>
      </div>

      {/* Interactive Lazy Loader UI Showcase */}
      <LoaderPreviewDemo />

      {/* Blog Articles Loaded with LazySection */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-dim">
          <h2 className="text-2xl font-playfair font-bold text-[#1A1614]">
            Recent Publications
          </h2>
          <span className="text-xs font-mono text-[#8C847E]">
            3 articles available
          </span>
        </div>

        <LazySection
          title="Recent Articles"
          tag="JOURNAL:ARTICLES"
          skeletonCards={3}
          minHeight="440px"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-3xl bg-surface-paper/90 border border-surface-dim/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(228,82,27,0.09)] hover:border-[#E8DACD] transition-all duration-300 p-5"
              >
                <div>
                  {/* Lazy Loaded Image with Terracotta Shimmer */}
                  <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden bg-surface-dim mb-5">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs font-mono text-[#8C847E] mb-2.5">
                    <span className="text-[#E4521B] font-semibold">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair font-bold text-xl text-[#1A1614] leading-snug group-hover:text-[#E4521B] transition-colors mb-2.5">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#554E48] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Article Link */}
                <div className="pt-6 mt-4 border-t border-surface-dim/70">
                  <Link
                    href={`/blog#${post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#1A1614] group-hover:text-[#E4521B] transition-colors"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </LazySection>
      </div>
    </main>
  )
}

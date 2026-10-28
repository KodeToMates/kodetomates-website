import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '@/lib/blogs'
import { BlogSectionRenderer } from '@/components/blog'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found | KodeToMates',
    }
  }

  return {
    title: `${article.title} | KodeToMates Journal`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.mainImage],
      type: 'article',
      publishedTime: article.publishDate,
    },
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((a) => ({
    slug: a.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const allArticles = getAllArticles()
  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <main className="relative w-full min-h-screen bg-white selection:bg-[#E4521B]/20 selection:text-[#161413] pt-28 sm:pt-36 pb-24">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm text-[#6B645E] hover:text-[#E4521B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EBE7DF] text-[#161413] text-xs font-sans font-bold uppercase tracking-wider">
            <Tag className="w-3 h-3 text-[#E4521B]" />
            #{article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#161413] tracking-[-0.03em] leading-[1.12] mb-6">
          {article.title}
        </h1>

        {/* Author Byline & Publish Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#EFECE6] mb-8">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#EBE7DF]">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-[#161413]">{article.author.name}</p>
              <p className="font-sans text-xs text-[#8C847E]">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans text-[#6B645E]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#E4521B]" />
              {article.publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E4521B]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#EBE7DF] mb-12 shadow-sm bg-[#FAF7F2]">
          <Image
            src={article.mainImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Sections */}
        <div className="article-body">
          {article.sections.map((section, index) => (
            <BlogSectionRenderer
              key={`section-${index}`}
              section={section}
              links={article.links}
            />
          ))}
        </div>
      </article>

      {/* Related Articles Footer */}
      {relatedArticles.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-[#EFECE6]">
          <div className="mb-10 text-center">
            <p className="font-sans font-semibold text-xs text-[#E4521B] uppercase tracking-wider mb-2">
              KEEP READING
            </p>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#161413] tracking-[-0.03em]">
              More Insights from KodeToMates
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="group border border-[#EBE7DF] bg-[#FAF7F2]/60 p-4 rounded-2xl hover:border-[#E4521B]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-[#F2EFE9]">
                    <Image
                      src={rel.mainImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="font-sans font-bold text-[11px] text-[#E4521B] uppercase tracking-wide">
                    #{rel.category}
                  </span>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#161413] tracking-[-0.02em] mt-1.5 mb-2 group-hover:text-[#E4521B] transition-colors leading-snug">
                    {rel.title}
                  </h3>
                </div>
                <div className="pt-3 border-t border-[#EFECE6] flex items-center justify-between text-xs font-sans text-[#8C847E]">
                  <span>{rel.readTime}</span>
                  <span>{rel.publishDate}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

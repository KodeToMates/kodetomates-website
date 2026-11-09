import React from 'react'
import { siteConfig } from '@/config/site'
import { getAllArticles } from '@/lib/blogs'

export function BlogListingSchema() {
  const baseUrl = siteConfig.url
  const pageUrl = `${baseUrl}/blog`
  const articles = getAllArticles()

  const blogEntity = {
    '@type': 'Blog',
    '@id': `${pageUrl}/#blog`,
    name: 'KodeToMates Journal & Technical Insights',
    description:
      'Deep architectural teardowns, redesign blueprints, search visibility breakdowns, and collaborative community insights from our builder ecosystem.',
    url: pageUrl,
    publisher: {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${baseUrl}/#organization`,
      name: siteConfig.name,
      url: baseUrl,
    },
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      url: `${baseUrl}/blog/${article.slug}`,
      datePublished: article.publishDate,
      image: article.mainImage.startsWith('http')
        ? article.mainImage
        : `${baseUrl}${article.mainImage.startsWith('/') ? '' : '/'}${article.mainImage}`,
      author: {
        '@type': 'Person',
        name: article.author.name,
      },
    })),
  }

  const breadcrumbEntity = {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Journal',
        item: pageUrl,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [blogEntity, breadcrumbEntity],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default BlogListingSchema


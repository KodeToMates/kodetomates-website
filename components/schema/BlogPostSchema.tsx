import React from 'react'
import { siteConfig } from '@/config/site'
import type { BlogArticle } from '@/lib/blogs'

export function BlogPostSchema({ article }: { article: BlogArticle }) {
  const baseUrl = siteConfig.url
  const canonicalUrl = `${baseUrl}/blog/${article.slug}`
  const imageUrl = article.mainImage.startsWith('http')
    ? article.mainImage
    : `${baseUrl}${article.mainImage.startsWith('/') ? '' : '/'}${article.mainImage}`

  const blogPostingEntity = {
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}/#article`,
    headline: article.title,
    description: article.description,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      caption: article.title,
    },
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    articleSection: article.category,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${baseUrl}/#organization`,
      name: siteConfig.name,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
  }

  const breadcrumbEntity = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}/#breadcrumb`,
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
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [blogPostingEntity, breadcrumbEntity],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default BlogPostSchema


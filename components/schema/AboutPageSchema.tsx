import React from 'react'
import { siteConfig } from '@/config/site'
import { getPageFaq } from '@/data/faq'

export function AboutPageSchema() {
  const baseUrl = siteConfig.url
  const pageUrl = `${baseUrl}/about`
  const aboutFaq = getPageFaq('about')

  const aboutPageEntity = {
    '@type': 'AboutPage',
    '@id': `${pageUrl}/#aboutpage`,
    url: pageUrl,
    name: 'About Us — A Community of Builders | KodeToMates',
    description:
      'KodeToMates is a growing technology community built around a simple idea: learn together, build together, and create things that make a difference.',
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    mainEntity: {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${baseUrl}/#organization`,
      name: siteConfig.name,
      url: baseUrl,
      description: siteConfig.description,
      slogan: siteConfig.tagline,
      knowsAbout: [
        'Software Engineering',
        'Next.js Full-Stack Architecture',
        'UI/UX Design Systems',
        'Web Performance & SEO',
      ],
    },
  }

  const faqEntity = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}/#faq`,
    mainEntity: aboutFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
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
        name: 'About Us',
        item: pageUrl,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [aboutPageEntity, faqEntity, breadcrumbEntity],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default AboutPageSchema


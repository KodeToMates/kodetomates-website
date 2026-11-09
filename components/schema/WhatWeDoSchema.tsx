import React from 'react'
import { siteConfig } from '@/config/site'
import { WHAT_WE_DO_FAQS, SERVICE_PILLARS } from '@/config/what-we-do'

export function WhatWeDoSchema() {
  const baseUrl = siteConfig.url
  const pageUrl = `${baseUrl}/what-we-do`

  const webPageEntity = {
    '@type': 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name: 'What We Do — Capabilities & Strategic Engineering | KodeToMates',
    description:
      'Explore KodeToMates full-stack software capabilities: bespoke website development, modern UI/UX redesigns, technical SEO architecture, and interactive digital invitations.',
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    about: {
      '@id': `${baseUrl}/#organization`,
    },
  }

  const catalogEntity = {
    '@type': 'OfferCatalog',
    '@id': `${pageUrl}/#catalog`,
    name: 'KodeToMates Four Core Engineering Pillars',
    itemListElement: SERVICE_PILLARS.map((pillar, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: pillar.title,
      url: `${baseUrl}${pillar.href}`,
      serviceType: pillar.category,
      description: pillar.descriptionPrimary,
      provider: {
        '@id': `${baseUrl}/#organization`,
      },
    })),
  }

  const faqEntity = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}/#faq`,
    mainEntity: WHAT_WE_DO_FAQS.map((item) => ({
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
        name: 'What We Do',
        item: pageUrl,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [webPageEntity, catalogEntity, faqEntity, breadcrumbEntity],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default WhatWeDoSchema

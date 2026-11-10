import React from 'react'
import { siteConfig } from '@/config/site'
import { getPageFaq } from '@/data/faq'

export interface ServiceSchemaProps {
  name: string
  serviceType: string
  description: string
  slug: string // e.g. "what-we-do/website-dev"
  faqKey: string
}

export function ServiceSchema({
  name,
  serviceType,
  description,
  slug,
  faqKey,
}: ServiceSchemaProps) {
  const baseUrl = siteConfig.url
  const cleanSlug = slug.replace(/^\//, '')
  const canonicalUrl = `${baseUrl}/${cleanSlug}`
  const faqData = getPageFaq(faqKey)

  const serviceEntity = {
    '@type': 'Service',
    '@id': `${canonicalUrl}/#service`,
    name,
    serviceType,
    description,
    url: canonicalUrl,
    provider: {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${baseUrl}/#organization`,
      name: siteConfig.name,
      url: baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    termsOfService: `${baseUrl}/contact`,
  }

  const faqEntity = {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}/#faq`,
    mainEntity: faqData.items.map((item) => ({
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
        name: 'What We Do',
        item: `${baseUrl}/what-we-do`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: canonicalUrl,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [serviceEntity, faqEntity, breadcrumbEntity],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default ServiceSchema


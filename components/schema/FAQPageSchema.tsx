import React from 'react'
import { siteConfig } from '@/config/site'
import { getAllPagesFaq } from '@/data/faq'

export function FAQPageSchema() {
  const baseUrl = siteConfig.url
  const pageUrl = `${baseUrl}/faq`
  const allFaqData = getAllPagesFaq()

  const faqEntity = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}/#faq`,
    name: 'KodeToMates Knowledge Base & Frequently Asked Questions',
    description:
      'Find clear answers to common questions about KodeToMates: community membership, website development, website redesigns, search optimization, digital invitations, and collaboration workflows.',
    url: pageUrl,
    mainEntity: allFaqData.items.map((item) => ({
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
        name: 'Frequently Asked Questions',
        item: pageUrl,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [faqEntity, breadcrumbEntity],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default FAQPageSchema


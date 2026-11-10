import React from 'react'
import { siteConfig } from '@/config/site'

export function ContactPageSchema() {
  const baseUrl = siteConfig.url
  const pageUrl = `${baseUrl}/contact`

  const contactPageEntity = {
    '@type': 'ContactPage',
    '@id': `${pageUrl}/#contactpage`,
    url: pageUrl,
    name: 'Contact Us | KodeToMates',
    description:
      'Get in touch with the KodeToMates community. Have a project idea, inquiry, or want to collaborate with builders and mentors? Reach out today.',
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    mainEntity: {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${baseUrl}/#organization`,
      name: siteConfig.name,
      url: baseUrl,
      email: siteConfig.contact.email,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: siteConfig.contact.email,
          availableLanguage: ['English', 'Hindi', 'Tamil', 'Malayalam'],
          areaServed: 'IN',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: siteConfig.contact.email,
          availableLanguage: ['English', 'Hindi', 'Tamil', 'Malayalam'],
          areaServed: 'IN',
        },
      ],
    },
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
        name: 'Contact Us',
        item: pageUrl,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [contactPageEntity, breadcrumbEntity],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default ContactPageSchema


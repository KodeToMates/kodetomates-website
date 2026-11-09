import React from 'react'
import { siteConfig } from '@/config/site'
import { HOME_FAQ_ITEMS } from '@/data/faq'

export function HomePageSchema() {
  const baseUrl = siteConfig.url

  // 1. Organization & Studio Schema
  const organizationSchema = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${baseUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${baseUrl}/#logo`,
      url: siteConfig.logo,
      caption: siteConfig.name,
    },
    image: siteConfig.ogImage,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.links.instagram],
    knowsAbout: [
      'Next.js 16 App Router',
      'React & TypeScript Engineering',
      'Technical SEO & Core Web Vitals',
      'Bespoke Website Development',
      'Website Redesign & Modernization',
      'Interactive Digital Invitations',
      'Full-Stack Cloud Architecture',
      'UI/UX Design Systems',
    ],
    priceRange: '$$',
    currenciesAccepted: 'INR, USD',
    paymentAccepted: 'Credit Card, UPI, Bank Transfer',
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  }

  // 2. WebSite Schema
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: siteConfig.name,
    alternateName: ['Kode To Mates', 'KodeToMates Studio', 'KodeToMates Community'],
    url: baseUrl,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
  }

  // 3. Service Catalog Schema (What We Do 4 Pillars)
  const serviceCatalogSchema = {
    '@type': 'OfferCatalog',
    '@id': `${baseUrl}/#services`,
    name: 'KodeToMates Core Capabilities & Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Bespoke Website Development',
        url: `${baseUrl}/what-we-do/website-dev`,
        serviceType: 'Web Application Engineering',
        description:
          'High-performance bespoke web platforms and portals engineered with modern Next.js and TypeScript architecture for sub-second speeds.',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
      },
      {
        '@type': 'Service',
        name: 'Website Redesign & Modernization',
        url: `${baseUrl}/what-we-do/website-redesign`,
        serviceType: 'UI/UX Redesign & Modernization',
        description:
          'Transforming slow, outdated websites into sleek, modern digital experiences with zero downtime and 100% SEO equity preservation.',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
      },
      {
        '@type': 'Service',
        name: 'Technical SEO & Digital Growth',
        url: `${baseUrl}/what-we-do/seo`,
        serviceType: 'Search Engine Optimization',
        description:
          'Data-backed search optimization, site architecture audits, schema markup, and Core Web Vitals tuning targeting Google Top 10 rankings.',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
      },
      {
        '@type': 'Service',
        name: 'Interactive Digital Invitations',
        url: `${baseUrl}/what-we-do/digital-invitation`,
        serviceType: 'Event RSVP Web Experiences',
        description:
          'Curated, interactive digital event invitations with real-time RSVP guest tracking, Google Maps sync, and instant WhatsApp/SMS sharing.',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
      },
    ],
  }

  // 4. FAQPage Schema (Sourced dynamically from on-page FAQ data)
  const faqPageSchema = {
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: HOME_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  // 5. BreadcrumbList Schema
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${baseUrl}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ],
  }

  // Unified Linked Data Graph
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      websiteSchema,
      serviceCatalogSchema,
      faqPageSchema,
      breadcrumbSchema,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default HomePageSchema


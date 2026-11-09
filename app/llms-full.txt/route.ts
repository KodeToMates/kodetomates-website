import { siteConfig } from '@/config/site'
import blogsData from '@/data/blogs.json'
import {
  SERVICE_PILLARS,
  CAPABILITIES_MATRIX,
  DELIVERY_PROCESS_STEPS,
  SERVICE_DECISION_ITEMS,
} from '@/config/what-we-do'
import { getAllPagesFaq } from '@/data/faq'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = siteConfig.url
  const { items: allFaqs } = getAllPagesFaq()

  // 1. Service Pillars
  const servicesSection = SERVICE_PILLARS.map((pillar) => {
    return `### ${pillar.number}. ${pillar.title} (${pillar.category})
- **URL**: ${baseUrl}${pillar.href}
- **Headline**: ${pillar.headline}
- **Overview**: ${pillar.descriptionPrimary}
- **Engineering Depth**: ${pillar.descriptionSecondary}
- **Key Capabilities**: ${pillar.tags.join(', ')}
- **Performance Benchmark**: ${pillar.stat} (${pillar.statLabel})
`
  }).join('\n')

  // 2. Capabilities Matrix
  const capabilitiesSection = CAPABILITIES_MATRIX.map((cap) => {
    return `#### ${cap.title} (${cap.category})
- **Benchmark**: ${cap.metric} — ${cap.metricLabel}
- **Description**: ${cap.description}
- **Key Features**: ${cap.features.join(', ')}
- **Reference**: ${baseUrl}${cap.href}
`
  }).join('\n')

  // 3. Delivery Process
  const deliverySection = DELIVERY_PROCESS_STEPS.map((step) => {
    return `#### Step ${step.step}: ${step.title} [${step.phase}] (${step.duration})
${step.description}
- **Deliverables**: ${step.deliverables.join(', ')}
`
  }).join('\n')

  // 4. Decision Items
  const decisionSection = SERVICE_DECISION_ITEMS.map((item) => {
    return `- **Question**: "${item.question}"
  - **Recommended Service**: [${item.recommendation}](${baseUrl}${item.href}) (${item.badge})
  - **Rationale**: ${item.description}`
  }).join('\n\n')

  // 5. Blog Articles with Full Section Summaries
  const blogsSection = (blogsData.articles || [])
    .map((article) => {
      const headings = (article.sections || [])
        .filter((s: { type: string; text?: string }) => s.type === 'heading' && s.text)
        .map((s: { text?: string }) => `  - ${s.text}`)
        .join('\n')

      return `### ${article.title}
- **URL**: ${baseUrl}/blog/${article.slug}
- **Category**: ${article.category} | **Read Time**: ${article.readTime} | **Published**: ${article.publishDate}
- **Author**: ${article.author?.name} (${article.author?.role})
- **Summary**: ${article.description}
- **Key Topics Explored**:
${headings || '  - Engineering deep dive and implementation guidelines'}
`
    })
    .join('\n')

  // 6. FAQs organized by category
  const faqsByCategory: Record<string, typeof allFaqs> = {}
  allFaqs.forEach((faq) => {
    const cat = faq.category || 'General'
    if (!faqsByCategory[cat]) faqsByCategory[cat] = []
    faqsByCategory[cat].push(faq)
  })

  const faqsSection = Object.entries(faqsByCategory)
    .map(([category, faqs]) => {
      const itemsText = faqs
        .map((f) => {
          const answerText =
            typeof f.answer === 'string'
              ? f.answer.replace(/<[^>]+>/g, '')
              : String(f.answer ?? '')
          return `#### Q: ${f.question}\n**A**: ${answerText}`
        })
        .join('\n\n')
      return `### ${category}\n\n${itemsText}`
    })
    .join('\n\n')

  const fullContent = `# ${siteConfig.name} — Comprehensive Technical & Knowledge Specification (llms-full.txt)

> ${siteConfig.description} ${siteConfig.tagline}

This document contains the complete, uncompressed technical specifications, core service architectures, engineering guidelines, delivery processes, and comprehensive knowledge base for KodeToMates (${baseUrl}).

---

## 1. Executive Summary & Brand Identity

- **Brand Name**: ${siteConfig.name}
- **Domain**: ${siteConfig.domain}
- **Canonical URL**: ${baseUrl}
- **Tagline**: ${siteConfig.tagline}
- **Brand Line**: Build Together. Learn Together.
- **Contact Email**: ${siteConfig.contact.email}
- **Primary Accent Color**: #E4521B (Coral / Terracotta)
- **Primary Typography**: Plus Jakarta Sans (font-sans)
- **Mission**: Create a collaborative environment where people can learn technology, build meaningful products, and grow together through verifiable proof of work.
- **Core Pillars**: Learn Continuously · Build with Purpose · Share Knowledge · Collaborate Openly · Grow Together.

---

## 2. Core Service Architectures

${servicesSection}

---

## 3. Capabilities & Technical Matrix

${capabilitiesSection}

---

## 4. Delivery Methodology & Sprints

Our end-to-end delivery framework ensures zero-downtime cutovers, strict performance budgets, and verifiable milestones across 5 disciplined phases:

${deliverySection}

---

## 5. Service Decision Framework

Use this decision matrix to determine the optimal engagement path for prospective client requirements:

${decisionSection}

---

## 6. Engineering Handbook & Technical Deep Dives

${blogsSection}

---

## 7. Knowledge Base & Comprehensive FAQs

${faqsSection}

---

## 8. Navigation & Site Map Index

- **Home**: ${baseUrl}/
- **What We Do Hub**: ${baseUrl}/what-we-do
- **Website Development**: ${baseUrl}/what-we-do/website-dev
- **Website Redesign**: ${baseUrl}/what-we-do/website-redesign
- **SEO & Growth**: ${baseUrl}/what-we-do/seo
- **Digital Invitations**: ${baseUrl}/what-we-do/digital-invitation
- **About Us**: ${baseUrl}/about
- **Projects**: ${baseUrl}/projects
- **Community**: ${baseUrl}/community
- **Resources**: ${baseUrl}/resources
- **Join Us**: ${baseUrl}/join
- **Blog**: ${baseUrl}/blog
- **FAQ**: ${baseUrl}/faq
- **Contact**: ${baseUrl}/contact

---

## 9. Contact & Inquiries

For project inquiries, technical audits, website redesign consultations, or community partnerships:
- **Email**: ${siteConfig.contact.email}
- **Website**: ${baseUrl}/contact
- **Social**: ${siteConfig.links.instagram}
`

  return new Response(fullContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}

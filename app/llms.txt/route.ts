import { siteConfig } from '@/config/site'
import blogsData from '@/data/blogs.json'
import { SERVICE_PILLARS } from '@/config/what-we-do'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = siteConfig.url

  const servicesMarkdown = SERVICE_PILLARS.map(
    (pillar) =>
      `- [${pillar.shortTitle}](${baseUrl}${pillar.href}): ${pillar.headline}. Key capabilities: ${pillar.tags.slice(0, 3).join(', ')}.`
  ).join('\n')

  const blogsMarkdown = (blogsData.articles || [])
    .map(
      (article) => `- [${article.title}](${baseUrl}/blog/${article.slug}): ${article.description}`
    )
    .join('\n')

  const content = `# ${siteConfig.name}

> ${siteConfig.description} ${siteConfig.tagline}

KodeToMates is a digital engineering studio and collaborative technology organization based in India (${baseUrl}). We architect sub-second Next.js 16 web applications, execute zero-downtime website redesigns with 100% SEO equity preservation, engineer data-backed technical SEO for Google Top 10 rankings, and build curated mobile-first interactive event invitations with real-time RSVP coordination.

## Core Services

${servicesMarkdown}

## Company & Platform

- [What We Do Hub](${baseUrl}/what-we-do): Master overview of services, engineering capabilities matrix, 5-phase delivery process, and service decision frameworks.
- [About KodeToMates](${baseUrl}/about): Company mission, vision, engineering philosophy, and values centered on practical creation and collaborative learning.
- [Projects & Case Studies](${baseUrl}/projects): Portfolio of real-world web applications, community initiatives, and client solutions engineered by KodeToMates.
- [Community](${baseUrl}/community): Collaborative technology ecosystem for developers, designers, and creators to learn by doing, pair-code, and build in public.
- [Knowledge Resources](${baseUrl}/resources): Engineering notes, architecture blueprints, guides, tutorials, and career roadmaps.
- [Join KodeToMates](${baseUrl}/join): Entry pathways to learn, build, collaborate, and contribute with the KodeToMates ecosystem.
- [Frequently Asked Questions (FAQ)](${baseUrl}/faq): Comprehensive answers regarding pricing, engineering process, timelines, migration guarantees, and ongoing support retainers.
- [Contact & Inquiries](${baseUrl}/contact): Direct consultation booking for project proposals, technical audits, and collaboration inquiries.

## Engineering Handbook & Articles

${blogsMarkdown}

## Full Documentation

- [Full In-Depth Knowledge Base](${baseUrl}/llms-full.txt): Complete inline documentation including detailed capability breakdowns, delivery methodology, technical FAQs, and engineering principles in a single file.

## Contact & Location

- Website: ${baseUrl}
- Email: ${siteConfig.contact.email}
- Instagram: ${siteConfig.links.instagram}
- Location: Tamil Nadu, India
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}

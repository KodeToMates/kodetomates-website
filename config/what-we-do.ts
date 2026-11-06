import {
  Code2,
  TrendingUp,
  Palette,
  MailOpen,
  Zap,
  Gauge,
  Sparkles,
  Search,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import type { ElementType } from 'react'

export interface ServicePillar {
  id: string
  number: string
  shortTitle: string
  category: string
  pill: string
  title: string
  headline: string
  descriptionPrimary: string
  descriptionSecondary: string
  tags: string[]
  stat: string
  statLabel: string
  image: string
  href: string
  btnLabel: string
  icon: ElementType
  badge: string
}

export interface CapabilityItem {
  id: string
  title: string
  category: string
  description: string
  icon: ElementType
  metric: string
  metricLabel: string
  features: string[]
  href: string
}

export interface DeliveryStep {
  step: string
  phase: string
  title: string
  description: string
  deliverables: string[]
  duration: string
}

export interface ServiceDecisionItem {
  id: string
  question: string
  recommendation: string
  description: string
  icon: ElementType
  href: string
  badge: string
  ctaText: string
}

export const WHAT_WE_DO_TICKER_PHRASES = [
  'NEXT.JS 16 APP ROUTER',
  'SUB-SECOND CORE WEB VITALS',
  'EDITORIAL UI/UX REDESIGN',
  'GOOGLE TOP 10 RANKINGS',
  'INTERACTIVE RSVP EXPERIENCES',
  'ZERO DOWNTIME CUTOVER',
  'MODERN TYPESCRIPT STRICT',
  'HIGH-CONVERSION ARCHITECTURE',
  'EDGE APIS & HEADLESS CMS',
  'WCAG AA ACCESSIBILITY',
  'BESPOKE DIGITAL CRAFT',
]

export const WHAT_WE_DO_HERO_METRICS = [
  { value: '99+', label: 'PageSpeed Score', detail: 'Sub-second edge latency' },
  { value: 'Top 10', label: 'Google Rankings', detail: 'Organic search growth' },
  { value: '3x', label: 'Conversion Lift', detail: 'Editorial UI/UX redesigns' },
  { value: '100%', label: 'Mobile Optimized', detail: 'Touch-first interactions' },
]

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'website-development',
    number: '01',
    shortTitle: 'Web Development',
    category: 'WEBSITE DEVELOPMENT',
    pill: 'Custom Architecture',
    badge: 'Core Engineering',
    title: 'Websites That Work For You',
    headline: 'High-performance, bespoke web platforms engineered for business scale',
    descriptionPrimary:
      'Your website is the digital front door to your business. We engineer lightning-fast, secure, and fully responsive web applications using modern tech stacks like Next.js, React, and TypeScript. From custom landing pages to complex corporate portals, we build experiences that load in milliseconds and convert casual visitors into high-value clients.',
    descriptionSecondary:
      'Every line of code is structured for peak Core Web Vitals, accessible UI/UX, seamless mobile interactions, and effortless content scalability as your company grows.',
    tags: [
      'Next.js 16 App Router',
      'Mobile-First Responsive UI',
      'Sub-Second Page Load Speed',
      'Production API Integrations',
      'Headless CMS & Edge Databases',
    ],
    stat: '99+ PageSpeed',
    statLabel: 'Sub-second TTFB',
    image: '/Image-v1/Home_page/website-develop.jpg',
    href: '/what-we-do/website-dev',
    btnLabel: 'Explore Website Development',
    icon: Code2,
  },
  {
    id: 'website-redesign',
    number: '02',
    shortTitle: 'Website Redesign',
    category: 'WEBSITE REDESIGN & MODERNIZATION',
    pill: 'UI/UX Transformation',
    badge: 'Design & Modernization',
    title: 'Modern Look. Better Results.',
    headline: 'Transform outdated, slow sites into sleek, modern digital experiences',
    descriptionPrimary:
      'Is your current website feeling slow, clunky, or failing to represent the true quality of your work? We conduct end-to-end design overhauls that retain your hard-earned SEO equity while completely revamping your user experience, typography, animations, and conversion funnels.',
    descriptionSecondary:
      'We migrate legacy codebases into bleeding-edge modern frameworks, eliminating technical debt and delivering an editorial, premium design aesthetic that positions your brand as an industry leader.',
    tags: [
      'Editorial UI/UX Redesign',
      'Zero-Downtime Migration',
      'Conversion Rate Optimization',
      'Modern Interactive Micro-animations',
      'Preserved Google SEO Equity',
    ],
    stat: '3x Better Conversion',
    statLabel: 'Measured Engagement Lift',
    image: '/Image-v1/Home_page/website-redesign.jpg',
    href: '/what-we-do/website-redesign',
    btnLabel: 'Explore Website Redesign',
    icon: Palette,
  },
  {
    id: 'seo-digital-growth',
    number: '03',
    shortTitle: 'SEO & Growth',
    category: 'SEO & DIGITAL GROWTH',
    pill: 'Organic Visibility',
    badge: 'Organic Scale',
    title: 'Be Found First Online',
    headline: 'Data-backed search optimization that consistently ranks your brand',
    descriptionPrimary:
      'Building a beautiful website is only half the battle—your target audience needs to discover it. Our search engine optimization blends technical site architecture audits, high-intent keyword strategies, structured schema markup, and speed optimizations to dominate competitive search rankings.',
    descriptionSecondary:
      'We do not rely on guesswork or vanity metrics. We focus on search intent, sustainable organic traffic pipelines, and measurable conversions that continuously grow your inbound customer pipeline.',
    tags: [
      'Technical SEO Audits',
      'High-Intent Keyword Strategy',
      'Competitor Gap Analysis',
      'Schema & Core Web Vitals',
      'Organic Traffic Pipeline',
    ],
    stat: 'Top 10 Rankings',
    statLabel: 'Sustainable Inbound Leads',
    image: '/Image-v1/Home_page/seo.jpg',
    href: '/what-we-do/seo',
    btnLabel: 'Explore SEO & Growth',
    icon: TrendingUp,
  },
  {
    id: 'digital-invitations',
    number: '04',
    shortTitle: 'Digital Invitations',
    category: 'DIGITAL INVITATIONS & EXPERIENCES',
    pill: 'Interactive RSVP',
    badge: 'Interactive Events',
    title: 'Beautiful Invites. Made Simple.',
    headline: 'Curated, interactive digital event experiences that captivate your guests',
    descriptionPrimary:
      'Say goodbye to static PDF cards and postal delays. We design breathtaking, interactive digital invitations for weddings, corporate galas, product launches, and private gatherings that set the tone before the event even begins.',
    descriptionSecondary:
      'Featuring real-time RSVP tracking, calendar integration, Google Maps directions, gift registries, dynamic countdown timers, and custom photo galleries—all optimized for flawless presentation on every smartphone.',
    tags: [
      'Real-Time RSVP & Guest List',
      'Google Maps & Calendar Sync',
      'Curated Audio & Visuals',
      'Instant WhatsApp & SMS Share',
      '2–3 Days Fast Delivery',
    ],
    stat: '100% Mobile',
    statLabel: 'Flawless Touch Experience',
    image: '/Image-v1/Home_page/digital-invitation.jpg',
    href: '/what-we-do/digital-invitation',
    btnLabel: 'Explore Digital Invitations',
    icon: MailOpen,
  },
]

export const CAPABILITIES_MATRIX: CapabilityItem[] = [
  {
    id: 'sub-second-performance',
    title: 'Sub-Second Performance',
    category: 'Architecture & Speed',
    description:
      'Engineered with modern Next.js edge caching, asset minification, and zero layout shift for blistering 99+ Core Web Vitals.',
    icon: Gauge,
    metric: '< 400ms',
    metricLabel: 'Average Edge TTFB',
    features: ['Next.js App Router', 'Image optimization', 'Zero runtime bloat'],
    href: '/what-we-do/website-dev',
  },
  {
    id: 'editorial-ux-design',
    title: 'Editorial UI/UX Design',
    category: 'Design Systems',
    description:
      'Custom visual craft, micro-interactions, and human-centric interfaces that elevate brand authority and drive conversions.',
    icon: Sparkles,
    metric: '100%',
    metricLabel: 'Bespoke Figma Craft',
    features: ['Design tokens', 'Micro-interactions', 'Accessible typography'],
    href: '/what-we-do/website-redesign',
  },
  {
    id: 'technical-seo-authority',
    title: 'Technical SEO Authority',
    category: 'Search & Visibility',
    description:
      'Deep site architecture audits, structured JSON-LD schemas, and keyword clusters designed to dominate Google search result pages.',
    icon: Search,
    metric: 'Top 10',
    metricLabel: 'Target Keyword Ranks',
    features: ['Schema markup', 'Crawl budget tuning', 'Topical clusters'],
    href: '/what-we-do/seo',
  },
  {
    id: 'zero-downtime-migration',
    title: 'Zero-Downtime Migration',
    category: 'Engineering Stability',
    description:
      'Seamless transition from WordPress, Shopify, or legacy stacks to Next.js without losing URL mappings or search equity.',
    icon: ShieldCheck,
    metric: '100%',
    metricLabel: 'SEO Equity Retention',
    features: ['301 redirect map', 'DNS cutover testing', 'Zero user interruption'],
    href: '/what-we-do/website-redesign',
  },
  {
    id: 'interactive-rsvp-portals',
    title: 'Interactive RSVP Engines',
    category: 'Celebration Tech',
    description:
      'Turnkey mobile-first event guest coordination with live RSVP responses, countdown timers, venue directions, and audio playback.',
    icon: MailOpen,
    metric: '2–3 Days',
    metricLabel: 'Turnaround Delivery',
    features: ['Live RSVP tracking', 'Google Maps sync', 'Instant WhatsApp share'],
    href: '/what-we-do/digital-invitation',
  },
  {
    id: 'cloud-scale-integrations',
    title: 'Cloud & API Integrations',
    category: 'Ecosystem & APIs',
    description:
      'Connecting production web platforms with PostgreSQL, Stripe, CRM pipelines, headless CMS engines, and marketing automations.',
    icon: Layers,
    metric: '99.9%',
    metricLabel: 'Uptime Reliability',
    features: ['Headless CMS', 'Stripe checkout', 'Automated webhooks'],
    href: '/what-we-do/website-dev',
  },
]

export const DELIVERY_PROCESS_STEPS: DeliveryStep[] = [
  {
    step: '01',
    phase: 'DISCOVER & AUDIT',
    title: 'Strategic Architecture & Gap Analysis',
    description:
      'We dissect your business goals, target audience search intent, existing tech stack bottlenecks, and competitor positioning to establish a clear implementation roadmap.',
    deliverables: ['Technical audit report', 'Competitor gap analysis', 'Architecture blueprint'],
    duration: 'Week 1',
  },
  {
    step: '02',
    phase: 'PROTOTYPE & DESIGN',
    title: 'Editorial UI/UX & Interaction Design',
    description:
      'We craft interactive wireframes and high-fidelity Figma design systems tailored to your brand voice, testing micro-interactions and mobile responsiveness early.',
    deliverables: ['Figma design system', 'Interactive prototype', 'Typography & motion specs'],
    duration: 'Week 2–3',
  },
  {
    step: '03',
    phase: 'ENGINEER & OPTIMIZE',
    title: 'Full-Stack Next.js & TypeScript Build',
    description:
      'Our team develops production-grade code using Next.js App Router, Tailwind CSS, clean components, and resilient APIs engineered for sub-second page speeds.',
    deliverables: ['Modular codebase', 'Core Web Vitals tuning', 'CMS & API integration'],
    duration: 'Week 3–5',
  },
  {
    step: '04',
    phase: 'VERIFY & SEO CUTOVER',
    title: 'Quality Assurance & Zero-Downtime Launch',
    description:
      'Rigorous cross-browser verification, WCAG accessibility checks, structured schema validation, and safe zero-downtime DNS deployment.',
    deliverables: ['Lighthouse 95+ score', 'Schema validation', 'Production deployment'],
    duration: 'Week 6',
  },
  {
    step: '05',
    phase: 'GROW & MONITOR',
    title: 'Continuous Telemetry & Search Scaling',
    description:
      'Post-launch telemetry, rank tracking, conversion monitoring, and iterative enhancements that keep your platform ahead of search algorithm updates.',
    deliverables: ['Analytics dashboard', 'Monthly performance reports', 'Iterative updates'],
    duration: 'Ongoing',
  },
]

export const SERVICE_DECISION_ITEMS: ServiceDecisionItem[] = [
  {
    id: 'decision-dev',
    question: 'Need a brand-new website or web app built from the ground up?',
    recommendation: 'Website Development',
    description:
      'Custom Next.js engineering with bespoke UI/UX, sub-second edge speeds, and full CMS control for modern businesses.',
    icon: Code2,
    href: '/what-we-do/website-dev',
    badge: 'Build From Scratch',
    ctaText: 'Explore Web Dev',
  },
  {
    id: 'decision-redesign',
    question: 'Have an existing website that looks outdated, runs slow, or fails to convert?',
    recommendation: 'Website Redesign',
    description:
      'Complete editorial visual overhaul and legacy code migration with zero downtime and 100% SEO equity preservation.',
    icon: Palette,
    href: '/what-we-do/website-redesign',
    badge: 'Modernize Existing Site',
    ctaText: 'Explore Redesign',
  },
  {
    id: 'decision-seo',
    question: 'Have a solid website but struggling to rank on page 1 of Google?',
    recommendation: 'SEO & Digital Growth',
    description:
      'Technical site audits, high-intent keyword targeting, and schema markup that drive sustainable organic traffic.',
    icon: TrendingUp,
    href: '/what-we-do/seo',
    badge: 'Drive Organic Leads',
    ctaText: 'Explore SEO Growth',
  },
  {
    id: 'decision-invite',
    question: 'Planning a wedding, gala, corporate event, or milestone gathering?',
    recommendation: 'Digital Invitations',
    description:
      'Curated interactive mobile invitations with live RSVP tracking, calendar integration, and 1-click WhatsApp sharing.',
    icon: MailOpen,
    href: '/what-we-do/digital-invitation',
    badge: 'Celebrate in Style',
    ctaText: 'Explore Invitations',
  },
]

export const WHAT_WE_DO_FAQS = [
  {
    question: 'Which service should we start with?',
    answer:
      'If you have an existing site with traffic, a Website Redesign or Technical SEO Sprint usually yields the fastest return. If you are launching a new product or brand, our custom Website Development gives you a high-performance foundation from day one. Reach out and our team will recommend the most direct path based on your goals.',
  },
  {
    question: 'Will our Google rankings drop if we redesign our website?',
    answer:
      'No. We follow a strict zero-downtime SEO preservation protocol. We audit all current indexed URLs, implement 1:1 301 redirect mappings, preserve essential title and header hierarchy, and upgrade your site to sub-second Core Web Vitals, which typically boosts search rankings post-launch.',
  },
  {
    question: 'What tech stack does KodeToMates use to build websites?',
    answer:
      'We primarily architect with Next.js 16 (App Router), React, TypeScript, and Tailwind CSS, backed by edge platforms like Vercel and Cloudflare. For databases and backends, we integrate PostgreSQL, Supabase, Prisma, and tailored headless CMS systems like Sanity or Strapi.',
  },
  {
    question: 'How long does a typical project take from start to finish?',
    answer:
      'Digital Invitations take just 2–3 business days. Focused SEO sprints take 2–4 weeks. A full custom Website Development or Redesign typically spans 4 to 8 weeks depending on the complexity of pages, CMS integration, and custom animations.',
  },
  {
    question: 'Can our internal team easily update text and images after launch?',
    answer:
      'Yes. Every website we build can be connected to an intuitive headless CMS or visual content dashboard. We also provide full documentation and walkthroughs so your team can publish blog posts, update copy, and manage team members without touching code.',
  },
  {
    question: 'Do you offer ongoing support, maintenance, and SEO retainers?',
    answer:
      'Yes. We provide continuous maintenance, security patching, uptime monitoring, and monthly SEO growth retainers to ensure your platform consistently converts and ranks as your company grows.',
  },
]

import { FaqItem } from '@/components/ui/slit-type-faq'

export type { FaqItem }

export interface PageFaqConfig {
  eyebrow?: string
  headline?: string
  intro?: string
  items: FaqItem[]
  categories?: string[]
  ticker?: string[]
}

/** Default categories across the site */
export const HOME_FAQ_CATEGORIES = [
  'About',
  'Community',
  'Membership',
  'Learning',
  'Projects',
  'Support',
]

/** Rotating animated ticker phrases */
export const FAQ_TICKER_PHRASES = [
  'LEARN TOGETHER',
  'BUILD REAL PRODUCTS',
  'COLLABORATE AS A TEAM',
  'GROW & LEAD',
  '100% PRACTICAL',
  'OPEN SOURCE REPOSITORIES',
  'VERIFIABLE PROOF OF WORK',
]

/** Core home page FAQs */
export const HOME_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-kodetomates',
    question: 'What is KodeToMates?',
    answer:
      'KodeToMates is an open ecosystem designed for developers, builders, and creative technologists who want to break beyond passive tutorials. We bridge the critical gap between understanding syntax and shipping production-grade software through active pair-coding, collaborative GitHub repositories, and peer code reviews.',
    category: 'About',
  },
  {
    id: 'who-can-join',
    question: 'Who can join KodeToMates?',
    answer:
      'Anyone passionate about building, learning, and creating technology can join. Whether you are a student, self-taught builder, frontend developer, backend engineer, AI researcher, or UI/UX designer — there is an active space for you to build and collaborate.',
    category: 'Community',
  },
  {
    id: 'is-it-free',
    question: 'Is KodeToMates free to join?',
    answer:
      'Yes, 100%! Joining our core community, discussions, open-source repositories, and weekly collaborative workshops is completely free.',
    category: 'Membership',
  },
  {
    id: 'learning-resources',
    question: 'What kind of learning resources are available?',
    answer:
      'We provide curated roadmaps, production codebases, architecture teardowns, live workshops, code reviews, and community-driven documentation across full-stack web, generative AI agents, and systems design.',
    category: 'Learning',
  },
  {
    id: 'real-projects',
    question: 'Can I work on real production software?',
    answer:
      'Absolutely. Practical execution is our cornerstone. You can initiate your own project, join existing community sprints, build developer utilities, or contribute to deployed open-source tools to build verifiable proof of work.',
    category: 'Projects',
  },
  {
    id: 'how-to-connect',
    question: 'How do I connect and collaborate with other members?',
    answer:
      'Through our active Discord and Slack channels, weekly demo sprints, pair programming rooms, and collaborative project repositories where you experience the same workflows used by high-performing tech teams.',
    category: 'Community',
  },
  {
    id: 'mentorship-support',
    question: 'Who can I contact for mentorship and support?',
    answer:
      'Our maintainers and community mentors are active daily in our discussion channels. You can also reach out directly through our Contact page for guidance, technical reviews, or partnership inquiries.',
    category: 'Support',
  },
]

/** Registry of FAQs organized by page for multi-page scaling */
export const PAGE_FAQS: Record<string, PageFaqConfig> = {
  home: {
    eyebrow: 'QUICK ANSWERS & FAQ',
    headline: 'Frequently asked questions.\n<span style="color: var(--color-primary-orange)">Clear answers for builders.</span>',
    intro:
      'Find quick answers regarding our community sprints, live pair-coding sessions, practical learning roadmaps, and verifiable proof of work.',
    categories: HOME_FAQ_CATEGORIES,
    items: HOME_FAQ_ITEMS,
    ticker: FAQ_TICKER_PHRASES,
  },
}

/** Helper function to retrieve FAQ configuration for any page */
export function getPageFaq(pageKey: string): PageFaqConfig {
  return (
    PAGE_FAQS[pageKey] ?? {
      eyebrow: 'QUICK ANSWERS & FAQ',
      headline: 'Frequently asked questions.\n<span style="color: var(--color-primary-orange)">Clear answers for builders.</span>',
      intro: 'Find quick answers regarding our ecosystem, workflows, and building together.',
      categories: HOME_FAQ_CATEGORIES,
      items: HOME_FAQ_ITEMS,
      ticker: FAQ_TICKER_PHRASES,
    }
  )
}

import type { ElementType } from 'react'
import { Code2, TrendingUp, Palette, MailOpen } from 'lucide-react'

/**
 * Navigation item for dropdown menus
 */
export interface NavSubItem {
  icon: ElementType
  title: string
  description: string
  href: string
  color?: string
}

/**
 * Column grouping for multi-column dropdowns
 */
export interface NavSubMenuColumn {
  title: string
  items: NavSubItem[]
}

/**
 * Top-level navigation menu item
 */
export interface NavMenuItem {
  title: string
  href: string
  hasDropdown: boolean
  dropdownItems?: NavSubItem[]
  subMenus?: NavSubMenuColumn[]
}

/**
 * CTA button configuration in navigation
 */
export interface NavCTAConfig {
  label: string
  type: 'modal' | 'link'
  href?: string
}

/**
 * Main header navigation items
 */
export const MAIN_NAV_ITEMS: NavMenuItem[] = [
  {
    title: 'Home',
    href: '/',
    hasDropdown: false,
  },
  {
    title: 'What We Do',
    href: '/what-we-do',
    hasDropdown: true,
    subMenus: [
      {
        title: 'Engineering & Architecture',
        items: [
          {
            icon: Code2,
            title: 'Website Development',
            description: 'Modern, high-performance web applications built on Next.js & React',
            href: '/what-we-do/website-dev',
            color: '#E4521B',
          },
          {
            icon: Palette,
            title: 'Website Redesign',
            description: 'Transform legacy sites into sleek, modern digital experiences with zero downtime',
            href: '/what-we-do/website-redesign',
            color: '#E4521B',
          },
        ],
      },
      {
        title: 'Growth & Experiences',
        items: [
          {
            icon: TrendingUp,
            title: 'SEO & Digital Growth',
            description: 'Technical site audits, high-intent keyword strategies & search ranking growth',
            href: '/what-we-do/seo',
            color: '#E4521B',
          },
          {
            icon: MailOpen,
            title: 'Digital Invitations',
            description: 'Interactive event experiences with real-time RSVP & mobile coordination',
            href: '/what-we-do/digital-invitation',
            color: '#E4521B',
          },
        ],
      },
    ],
    dropdownItems: [
      {
        icon: Code2,
        title: 'Website Dev',
        description: 'Modern, high-performance web applications',
        href: '/what-we-do/website-dev',
        color: '#E4521B',
      },
      {
        icon: TrendingUp,
        title: 'SEO',
        description: 'Search visibility, audits & ranking growth',
        href: '/what-we-do/seo',
        color: '#E4521B',
      },
      {
        icon: Palette,
        title: 'Website Redesign',
        description: 'Transform outdated sites into sleek experiences',
        href: '/what-we-do/website-redesign',
        color: '#E4521B',
      },
      {
        icon: MailOpen,
        title: 'Digital Invitation',
        description: 'Interactive RSVP & curated digital invitations',
        href: '/what-we-do/digital-invitation',
        color: '#E4521B',
      },
    ],
  },
  {
    title: 'About Us',
    href: '/about',
    hasDropdown: false,
  },
  {
    title: 'Blog',
    href: '/blog',
    hasDropdown: false,
  },
  {
    title: 'FAQ',
    href: '/faq',
    hasDropdown: false,
  },
  {
    title: 'Contact',
    href: '/contact',
    hasDropdown: false,
  },
]

/**
 * Navbar primary call-to-action button configuration
 */
export const NAVBAR_CTA: NavCTAConfig = {
  label: 'Enquiry KodeTomates',
  type: 'modal',
}

/**
 * Global navigation config object
 */
export const navigationConfig = {
  mainNav: MAIN_NAV_ITEMS,
  navbarCta: NAVBAR_CTA,
} as const

// Backwards-compatible navigation export
export const navigation = navigationConfig

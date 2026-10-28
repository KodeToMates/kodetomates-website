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
 * Top-level navigation menu item
 */
export interface NavMenuItem {
  title: string
  href: string
  hasDropdown: boolean
  dropdownItems?: NavSubItem[]
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
  // {
  //   title: 'Projects',
  //   href: '/projects',
  //   hasDropdown: false,
  // },
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

/**
 * Global site configuration for KodeToMates
 */
export const siteConfig = {
  name: 'KodeToMates',
  shortName: 'KodeToMates',
  domain: 'kodetomates.in',
  url: 'https://www.kodetomates.in',
  apiUrl: 'https://api.kodetomates.in/api/v1',
  ogImage: 'https://www.kodetomates.in/Image-v1/KTM_Logos/Primary-Logo.png',
  logo: 'https://www.kodetomates.in/Image-v1/KTM_Logos/Primary-Logo.png',
  description:
    'Custom high-performance web development, zero-downtime redesigns, technical SEO growth, and interactive digital event invitations crafted by KodeToMates.',
  tagline: 'Build Together. Learn Together.',
  links: {
    instagram: 'https://www.instagram.com/kodetomates/',
  },
  contact: {
    email: 'contact@kodetomates.in',
  },
  creator: 'KodeToMates',
} as const

export type SiteConfig = typeof siteConfig

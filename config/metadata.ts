import type { Metadata } from 'next'
import { siteConfig } from './site'

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'KodeToMates | Build Together. Learn Together.',
    template: '%s | KodeToMates',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: 'KodeToMates', url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'KodeToMates | Build Together. Learn Together.',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'KodeToMates — Modern Web Craft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodeToMates | Build Together. Learn Together.',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/Image-v1/KTM_Logos/favicon_io/favicon.ico?v=2' },
      { url: '/Image-v1/KTM_Logos/favicon_io/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/Image-v1/KTM_Logos/favicon_io/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/Image-v1/KTM_Logos/favicon_io/favicon.ico?v=2',
    apple: [
      { url: '/Image-v1/KTM_Logos/favicon_io/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/Image-v1/KTM_Logos/favicon_io/site.webmanifest',
  verification: {
    google: 'X_gZv45hh9t4oBkEngeNTeq-I-nyjFS1urQgD1dXwBc',
  },
}

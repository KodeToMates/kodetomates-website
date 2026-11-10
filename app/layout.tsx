import type { Metadata } from 'next'
import {
  Inter,
  Instrument_Serif,
  Outfit,
  Fraunces,
  Plus_Jakarta_Sans,
  Playfair_Display,
  Space_Grotesk,
  Caveat,
} from 'next/font/google'
import './globals.css'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { baseMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrument = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument',
})
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
})
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          '@id': `${siteConfig.url}/#logo`,
          url: siteConfig.logo,
          caption: siteConfig.name,
        },
        image: siteConfig.ogImage,
        description: siteConfig.description,
        sameAs: [siteConfig.links.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.tagline,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        inLanguage: 'en-IN',
      },
    ],
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${outfit.variable} ${fraunces.variable} ${jakarta.variable} ${playfair.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <head>
        {/* Pre-hydration cleanup script for browser extension attribute injections (e.g. Bitdefender bis_skin_checked) */}
        <script
          id="extension-hydration-fix"
          dangerouslySetInnerHTML={{
            __html: `(function(){var a=['bis_skin_checked','bis_register','data-gr-ext-installed','data-new-gr-c-s-check-loaded','cz-shortcut-listen','fdprocessedid'];function c(){for(var i=0;i<a.length;i++){var e=document.querySelectorAll('['+a[i]+']');for(var j=0;j<e.length;j++){e[j].removeAttribute(a[i]);}}}if(typeof document!=='undefined'){c();try{var o=new MutationObserver(function(m){for(var i=0;i<m.length;i++){if(m[i].type==='attributes'&&a.indexOf(m[i].attributeName)!==-1){m[i].target.removeAttribute(m[i].attributeName);}}});o.observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:a});}catch(e){}}})();`,
          }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <meta
          name="google-site-verification"
          content="X_gZv45hh9t4oBkEngeNTeq-I-nyjFS1urQgD1dXwBc"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans bg-background-sand text-text-primary antialiased"
      >
        <SmoothScrollProvider>
          <SiteLayout>{children}</SiteLayout>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

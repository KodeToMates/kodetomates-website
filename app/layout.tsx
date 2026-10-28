import { Inter, Instrument_Serif, Outfit, Fraunces, Plus_Jakarta_Sans, Playfair_Display, Space_Grotesk, Caveat } from 'next/font/google'
import './globals.css'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrument = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument'
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

export const metadata = {
  title: 'KodeToMates | Build Together. Learn Together.',
  description: 'KodeToMates is a collaborative technology community.',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${outfit.variable} ${fraunces.variable} ${jakarta.variable} ${playfair.variable} ${spaceGrotesk.variable} ${caveat.variable}`}>
      <head>
        <link rel="icon" href="/Image-v1/KTM_Logos/favicon_io/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/Image-v1/KTM_Logos/favicon_io/favicon-32x32.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/Image-v1/KTM_Logos/favicon_io/favicon-16x16.png?v=2" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/Image-v1/KTM_Logos/favicon_io/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/Image-v1/KTM_Logos/favicon_io/site.webmanifest" />
      </head>
      <body suppressHydrationWarning className="font-sans bg-background-sand text-text-primary antialiased">
        <SmoothScrollProvider>
          <SiteLayout>{children}</SiteLayout>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

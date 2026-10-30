'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MobileExperienceDisclaimer } from '@/components/common/MobileExperienceDisclaimer'
import { RouteProgressBar, SitePreloader } from '@/components/ui'
import { KizhiChatWidget } from '@/components/ai'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SitePreloader />
      <RouteProgressBar />
      <Navbar />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
      <KizhiChatWidget />
      <MobileExperienceDisclaimer />
    </>
  )
}


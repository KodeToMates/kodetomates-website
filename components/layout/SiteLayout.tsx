'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { MobileExperienceDisclaimer } from '@/components/common/MobileExperienceDisclaimer'
import { RouteProgressBar, SitePreloader } from '@/components/ui'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SitePreloader />
      <RouteProgressBar />
      <Navbar />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
      <ScrollToTop />
      <MobileExperienceDisclaimer />
    </>
  )
}


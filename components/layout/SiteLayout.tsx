'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { RouteProgressBar } from '@/components/ui/RouteProgressBar'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteProgressBar />
      <Navbar />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}


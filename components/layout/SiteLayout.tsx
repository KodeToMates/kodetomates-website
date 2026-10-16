'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  if (isHomePage) {
    return <main className="min-h-screen flex flex-col">{children}</main>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  )
}

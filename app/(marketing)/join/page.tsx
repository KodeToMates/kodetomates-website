import React from 'react'
import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/schema'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Join Us | KodeToMates',
  description:
    'Find your place at KodeToMates. Learn together, build together, and create impactful software experiences with our developer and designer community.',
}

export default function JoinPage() {
  const baseUrl = siteConfig.url
  const breadcrumbs = [
    { name: 'Home', url: baseUrl },
    { name: 'Join Us', url: `${baseUrl}/join` },
  ]

  return (
    <main className="pt-32 pb-20 container mx-auto px-6 max-w-5xl min-h-[70vh]">
      {/* Search Engine Optimization: Breadcrumb Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} id={`${baseUrl}/join/#breadcrumb`} />

      <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-[-0.03em] mb-6 text-[#1A1614]">
        Find your place at <span className="text-[#E4521B]">KodeToMates</span>.
      </h1>
      <p className="text-lg font-sans text-[#6B645E] max-w-2xl mb-12 leading-relaxed">
        Whether you&apos;re learning, building, contributing or looking for people to create with, start where you are.
      </p>
    </main>
  )
}

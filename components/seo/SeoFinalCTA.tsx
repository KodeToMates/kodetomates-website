'use client'

import React from 'react'
import { CTASection, type CTASectionProps } from '@/components/common/cta'

export function SeoFinalCTA(props: Partial<CTASectionProps> = {}) {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const input = document.getElementById('seo-name')
    if (input) {
      setTimeout(() => input.focus(), 600)
    }
  }

  return (
    <CTASection
      id="seo-cta"
      eyebrow="READY TO DOMINATE SEARCH"
      lines={['Turn search engines into your highest-converting pipeline.']}
      headlineClassName="text-[clamp(24px,3vw,42px)] sm:text-[clamp(28px,3.4vw,48px)] font-bold leading-[1.14] tracking-[-0.03em] mb-2"
      subtitle="No generic advice. No fluff. Direct Git PRs, sub-second Core Web Vitals, and semantic authority engineered to rank #1."
      backgroundImage="/Image-v1/seo_page/seo-hero-bg.jpg"
      backgroundImageAlt="KodeToMates Technical SEO Engineering"
      primaryButton={{
        label: 'Claim Free Forensic Audit',
        href: '#seo-form',
        onClick: scrollToForm,
      }}
      secondaryButton={{
        label: 'Speak With an Engineer',
        href: '/contact',
      }}
      showAccentLine={true}
      slit={0}
      textColor="#FFFFFF"
      dotColor="#E4521B"
      sectionBgColor="bg-white"
      containerMaxWidth="max-w-[1280px]"
      {...props}
    />
  )
}

export default SeoFinalCTA

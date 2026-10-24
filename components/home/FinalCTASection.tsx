'use client'

import React from 'react'
import { CTASection } from '@/components/common/cta'

export function FinalCTASection() {
  const handleOpenJoinModal = (e: React.MouseEvent) => {
    // Open the interactive community modal (same as navbar)
    if (typeof window !== 'undefined') {
      e.preventDefault()
      window.dispatchEvent(new CustomEvent('open-join-modal'))
    }
  }

  return (
    <CTASection
      id="join"
      eyebrow="JOIN THE ECOSYSTEM"
      lines={['Ready to build and ship real products together?']}
      headlineClassName="text-[clamp(24px,3vw,42px)] sm:text-[clamp(28px,3.4vw,48px)] font-bold leading-[1.14] tracking-[-0.03em] mb-2"
      subtitle="There is a place for you at KodeToMates. Break beyond passive tutorials, collaborate on live repositories, and build verifiable proof of work together."
      backgroundImage="/images/hero-kinetic-cinematic.jpg"
      backgroundImageAlt="KodeToMates Creative Tech Community"
      primaryButton={{
        label: 'Join KodeToMates',
        href: '/join',
        onClick: handleOpenJoinModal,
      }}
      secondaryButton={{
        label: 'Explore Projects',
        href: '/projects',
      }}
      showAccentLine={true}
      slit={0}
      textColor="#FFFFFF"
      dotColor="#E4521B"
      sectionBgColor="bg-white"
      containerMaxWidth="max-w-[1280px]"
    />
  )
}

// Alias export for backward compatibility
export const JoinKodeToMatesSection = FinalCTASection
export default FinalCTASection

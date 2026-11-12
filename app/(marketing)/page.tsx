import { Hero } from '@/components/home/Hero'
import { HeroTicker } from '@/components/home/HeroTicker'
import { FloatingBackground } from '@/components/home/FloatingBackground'
import { WhatIsKodeToMates } from '@/components/home/WhatIsKodeToMates'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { BuiltByKodeToMates } from '@/components/home/BuiltByKodeToMates'
import { OurClientsWebsites } from '@/components/home/OurClientsWebsites'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TechnologiesSection } from '@/components/home/TechnologiesSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'
import { FAQSection } from '@/components/home/FAQSection'
import { HomePageSchema } from '@/components/schema'
import { LazySection } from '@/components/ui'

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[linear-gradient(135deg,#FEF3E5_0%,#FDE6D0_100%)] overflow-x-clip overflow-y-visible selection:bg-[#E4521B]/20 selection:text-[#E4521B]">
      {/* Search Engine Optimization: Structured Data JSON-LD Graph */}
      <HomePageSchema />

      {/* Dynamic Background with Ambient Glows & Noise Texture */}
      <FloatingBackground />

      {/* Hero Section */}
      <Hero />

      {/* Engineering & Ecosystem Ticker Bar */}
      <HeroTicker />

      {/* Section 1: What Is KodeToMates? */}
      <WhatIsKodeToMates />

      {/* Section 2: What We Do */}
      <LazySection
        title="What We Do"
        tag="SERVICES:EXPLORATION"
        minHeight="540px"
        skeletonCards={4}
      >
        <WhatWeDo />
      </LazySection>

      {/* Section: Technologies We Are Using */}
      <LazySection
        title="Technologies We Are Using"
        tag="TECH:ECOSYSTEM"
        minHeight="560px"
        skeletonCards={4}
      >
        <TechnologiesSection />
      </LazySection>

      {/* Section 3: Built by KodeToMates */}
      <BuiltByKodeToMates />

      {/* Section 3.5: Our Clients' Websites */}
      <LazySection
        title="Our Clients' Websites"
        tag="CLIENTS:SHOWCASE"
        minHeight="520px"
        skeletonCards={2}
      >
        <OurClientsWebsites />
      </LazySection>

      {/* Section 4: Testimonials */}
      <LazySection
        title="Testimonials"
        tag="COMMUNITY:VOICES"
        minHeight="600px"
        skeletonCards={1}
      >
        <TestimonialsSection wrapperBg="bg-[#12111A]" />
      </LazySection>
      {/* Section 6: Join KodeToMates CTA */}
      <LazySection
        title="Join KodeToMates"
        tag="COMMUNITY:ONBOARDING"
        minHeight="380px"
        skeletonCards={1}
      >
        <FinalCTASection />
      </LazySection>

      {/* Section 7: Frequently Asked Questions (FAQ) */}
      <LazySection
        title="FAQ"
        tag="KNOWLEDGE:FAQ"
        minHeight="460px"
        skeletonCards={2}
      >
        <FAQSection />
      </LazySection>
    </div>
  )
}

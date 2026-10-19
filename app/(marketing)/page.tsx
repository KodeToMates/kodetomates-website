import { Hero } from '@/components/home/Hero'
import { FloatingBackground } from '@/components/home/FloatingBackground'
import { WhatIsKodeToMates } from '@/components/home/WhatIsKodeToMates'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { BuiltByKodeToMates } from '@/components/home/BuiltByKodeToMates'
import { TechnologiesSection } from '@/components/home/TechnologiesSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'
import { FAQSection } from '@/components/home/FAQSection'
import { LazySection } from '@/components/ui/LazySection'

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[linear-gradient(135deg,#FEF3E5_0%,#FDE6D0_100%)] overflow-x-clip overflow-y-visible selection:bg-[#E4521B]/20 selection:text-[#E4521B]">

      {/* Dynamic Background with Ambient Glows & Noise Texture */}
      <FloatingBackground />

      {/* Hero Section */}
      <Hero />

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
      <LazySection
        title="Built by KodeToMates"
        tag="SHOWCASE:PORTFOLIO"
        minHeight="520px"
        skeletonCards={3}
      >
        <BuiltByKodeToMates />
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


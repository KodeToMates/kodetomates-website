import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { FloatingBackground } from '@/components/home/FloatingBackground'
import { WhatIsKodeToMates } from '@/components/home/WhatIsKodeToMates'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { BuiltByKodeToMates } from '@/components/home/BuiltByKodeToMates'
import { CommunitySection } from '@/components/home/CommunitySection'
import { ResourcesSection } from '@/components/home/ResourcesSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'
import { FAQSection } from '@/components/home/FAQSection'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-[linear-gradient(135deg,#FEF3E5_0%,#FDE6D0_100%)] overflow-x-clip overflow-y-visible selection:bg-[#E4521B]/20 selection:text-[#E4521B]">
      {/* Dynamic Background with Ambient Glows & Noise Texture */}
      <FloatingBackground />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section 1: What Is KodeToMates? */}
      <WhatIsKodeToMates />

      {/* Section 2: What We Do */}
      <WhatWeDo />

      {/* Section 3: Built by KodeToMates */}
      <BuiltByKodeToMates />

      {/* Section 4: Community */}
      <CommunitySection />

      {/* Section 5: Resources */}
      <ResourcesSection />

      {/* Section 6: Join KodeToMates CTA */}
      <FinalCTASection />

      {/* Section 7: Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* Site Footer */}
      <Footer />
    </main>
  )
}

import React from 'react'
import type { Metadata } from 'next'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | KodeToMates',
  description:
    'Get in touch with the KodeToMates community. Have a project idea, inquiry, or want to collaborate with builders and mentors? Reach out today.',
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFF9F2] via-[#FDF3E7] to-[#FAF4EC] pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#E4521B]">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
        {/* Top-Left Ambient Sunset Glow */}
        <div className="absolute -top-24 -left-24 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-gradient-to-br from-[#FF914D]/20 via-[#FF7A32]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Bottom-Right Ambient Berry Glow */}
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] bg-gradient-to-tl from-[#AB003E]/12 via-[#FF914D]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(#1A1817 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column: Editorial Overview & Trust Channels */}
          <div className="lg:col-span-5 xl:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 xl:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

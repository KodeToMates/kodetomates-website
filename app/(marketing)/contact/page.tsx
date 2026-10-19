import React from 'react'
import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us | KodeToMates',
  description:
    'Get in touch with the KodeToMates community. Have a project idea, inquiry, or want to collaborate with builders and mentors? Reach out today.',
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-white pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 overflow-x-clip selection:bg-[#E4521B]/20 selection:text-[#E4521B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Contact Card matching reference design */}
        <ContactForm />

        {/* Supporting Trust & Communication Channels Row */}
        <div className="mt-10 sm:mt-14">
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

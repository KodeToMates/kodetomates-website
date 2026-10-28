'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SlitHeading } from '@/components/ui'
import { ArrowRight, Code2, Sparkles, Cpu, Target } from 'lucide-react'

interface TeamMember {
  persona: string
  role: string
  bio: string
  image: string
  badge: string
  tags: string[]
  icon: React.ComponentType<{ className?: string }>
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    persona: 'Passionate Developer',
    role: 'Full-Stack Architecture & Engineering',
    bio: 'Turns complex problem spaces into modular, maintainable code. Focused on high-performance web applications and resilient systems.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    badge: 'ENGINEERING',
    tags: ['Next.js', 'TypeScript', 'Node.js'],
    icon: Code2,
  },
  {
    persona: 'Creative Technologist',
    role: 'UI/UX Design & Front-End Craft',
    bio: 'Bridges the gap between thoughtful design and fluid code. Obsessed with micro-interactions, responsive typography, and accessible interfaces.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    badge: 'EXPERIENCE',
    tags: ['Framer Motion', 'Design Systems', 'WCAG AA'],
    icon: Sparkles,
  },
  {
    persona: 'Systems Architect',
    role: 'Cloud Infrastructure & API Design',
    bio: 'Designs scalable backends, database models, and edge runtime integrations that keep applications fast, reliable, and secure.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    badge: 'PLATFORMS',
    tags: ['PostgreSQL', 'Edge APIs', 'DevOps'],
    icon: Cpu,
  },
  {
    persona: 'Product Craftsman',
    role: 'Product Discovery & Strategy',
    bio: 'Connects business objectives with practical user needs, ensuring what we build delivers measurable impact and genuine utility.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    badge: 'STRATEGY',
    tags: ['User Research', 'Product Roadmaps', 'Validation'],
    icon: Target,
  },
]

export function AboutTeamSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100 overflow-hidden selection:bg-[#E4521B]/20 selection:text-[#161413]">
      {/* Soft Ambient Radial Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(228,82,27,0.04)_0%,transparent_70%)] blur-3xl -z-10"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* ===================================================================
            HEADER: Headline, Narrative & CTA
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 sm:pb-16 border-b border-gray-100">
          
          {/* Left Column: Heading & Narrative Copy */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <SlitHeading
              id="meet-the-team-heading"
              align="left"
              lines={['Meet the people <span style="color: var(--color-primary-orange)">behind the ideas.</span>']}
              showAccentLine={true}
              slit={0.35}
              dotColor="#E4521B"
              textColor="#161413"
              className="text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-[-0.03em] mb-4"
            />

            <div className="space-y-3 font-sans text-[15px] sm:text-[16px] text-[#6B645E] leading-relaxed max-w-2xl mt-2">
              <p className="text-[#161413] font-semibold text-[16px] sm:text-[17.5px]">
                KodeToMates is shaped by the people who bring curiosity, care, and commitment to the work.
              </p>
              <p>
                We&apos;re building a culture where people can share what they know, learn what they don&apos;t, take ownership, and support each other&apos;s growth.
              </p>
              <p>
                As the community grows, we want to keep that spirit at its centre: approachable people, honest communication, and a shared interest in making useful things.
              </p>
            </div>
          </div>

          {/* Right Column: CTA Button */}
          <div className="lg:col-span-4 flex lg:justify-end items-end pb-1">
            <Link
              href="/community"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#E4521B] hover:bg-[#141210] text-white font-sans font-semibold text-[14.5px] shadow-[0_8px_20px_rgba(228,82,27,0.25)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer"
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* ===================================================================
            TEAM MEMBERS GRID (4 Round Profile Cards)
           =================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pt-12 sm:pt-16">
          {TEAM_MEMBERS.map((member, idx) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.persona}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[36px] bg-white border border-[#EAE4DC] hover:border-[#E4521B]/40 shadow-xs hover:shadow-[0_20px_48px_rgba(228,82,27,0.12)] transition-all duration-300 p-6 sm:p-7 flex flex-col items-center justify-between text-center"
              >
                {/* Round Avatar Container with Brand Gradient Ring */}
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-[#E4521B] to-[#FF914D] shadow-[0_10px_28px_rgba(228,82,27,0.18)] group-hover:scale-105 transition-transform duration-500">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-100 border-2 border-white">
                      <Image
                        src={member.image}
                        alt={member.persona}
                        fill
                        sizes="160px"
                        className="object-cover object-center filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Floating Icon Pill Badge */}
                  <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-[#161413] border-2 border-white flex items-center justify-center text-white shadow-md">
                    <Icon className="w-4 h-4 text-[#FF914D]" />
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#161413] border border-white/20 text-white font-sans font-bold text-[10px] uppercase tracking-wider shadow-xs whitespace-nowrap">
                    {member.badge}
                  </div>
                </div>

                {/* Content Body: Centered Persona & Role */}
                <div className="flex-1 flex flex-col items-center justify-between w-full">
                  <div className="mb-4">
                    {/* Persona Title */}
                    <h3 className="font-sans font-bold text-xl sm:text-[22px] text-[#161413] tracking-tight group-hover:text-[#E4521B] transition-colors mb-1.5">
                      {member.persona}
                    </h3>

                    {/* Role Title */}
                    <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#E4521B] uppercase tracking-wider mb-3">
                      {member.role}
                    </p>

                    {/* Short Bio */}
                    <p className="font-sans text-[13.5px] sm:text-[14px] text-[#6B645E] leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills / Tech Tags */}
                  <div className="pt-4 border-t border-[#F0EBE1] flex flex-wrap justify-center gap-1.5 w-full">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#EAE4DC] font-sans font-semibold text-[11px] text-[#554E48]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

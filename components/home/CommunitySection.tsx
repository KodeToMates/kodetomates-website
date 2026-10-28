'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Sparkles, Terminal, Heart } from 'lucide-react'

interface CommunityMember {
  id: string
  name: string
  handle: string
  role: string
  badge: string
  badgeColor: string
  avatarBg: string
  location: string
  building: string
  skills: string[]
  prsCount: number
  sprintsCount: number
}

const COMMUNITY_MEMBERS: CommunityMember[] = [
  {
    id: 'alex',
    name: 'Alex Rivera',
    handle: '@alexrivera',
    role: 'Full-Stack Systems Engineer',
    badge: 'Sprint Lead',
    badgeColor: '#E4521B',
    avatarBg: 'from-[#FF8F4D] to-[#E4521B]',
    location: 'Berlin, Germany',
    building: 'Building low-latency WebRTC pairing in CollabHub OS',
    skills: ['Rust', 'TypeScript', 'WebRTC', 'Next.js 15'],
    prsCount: 38,
    sprintsCount: 14,
  },
  {
    id: 'sarah',
    name: 'Sarah Chen',
    handle: '@sarahcodes',
    role: 'AI & Data Systems Researcher',
    badge: 'Core Contributor',
    badgeColor: '#D84610',
    avatarBg: 'from-[#FFA669] to-[#D84610]',
    location: 'Toronto, Canada',
    building: 'Architecting token telemetry eval pipelines for PromptForge',
    skills: ['Python', 'FastAPI', 'PyTorch', 'LangChain'],
    prsCount: 52,
    sprintsCount: 20,
  },
  {
    id: 'marcus',
    name: 'Marcus Vance',
    handle: '@marcus_ux',
    role: 'Design Engineer & Creative Dev',
    badge: 'UI/UX Mentor',
    badgeColor: '#E4521B',
    avatarBg: 'from-[#FFB58A] to-[#C83C0C]',
    location: 'Austin, TX',
    building: 'Crafting spatial 3D WebGL data structures in AlgoSphere',
    skills: ['Three.js', 'React 19', 'Tailwind', 'GLSL'],
    prsCount: 29,
    sprintsCount: 11,
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    handle: '@priyadev',
    role: 'Cloud & DevOps Architect',
    badge: 'Open Source Fellow',
    badgeColor: '#B8380A',
    avatarBg: 'from-[#FFA05E] to-[#B8380A]',
    location: 'Bengaluru, India',
    building: 'Automating multi-region edge deployment templates',
    skills: ['Docker', 'Kubernetes', 'Go', 'AWS'],
    prsCount: 44,
    sprintsCount: 16,
  },
]

const LIVE_ACTIVITIES = [
  { mate: 'Alex R.', action: 'merged PR #142 into', project: 'CollabHub OS', time: '4m ago' },
  { mate: 'Sarah C.', action: 'started a pair session on', project: 'Agentic RAG', time: '12m ago' },
  { mate: 'Marcus V.', action: 'published 3D WebGL lab for', project: 'AlgoSphere', time: '28m ago' },
]

export function CommunitySection() {
  const shouldReduceMotion = useReducedMotion()
  const [deck, setDeck] = useState(COMMUNITY_MEMBERS)
  const [likeCount, setLikeCount] = useState<Record<string, number>>({
    alex: 24,
    sarah: 38,
    marcus: 19,
    priya: 31,
  })

  // Rotate stacked cards deck: top card moves to bottom
  const cycleDeckForward = () => {
    setDeck((prev) => {
      const next = [...prev]
      const first = next.shift()
      if (first) next.push(first)
      return next
    })
  }

  // Rotate stacked cards deck backwards
  const cycleDeckBackward = () => {
    setDeck((prev) => {
      const next = [...prev]
      const last = next.pop()
      if (last) next.unshift(last)
      return next
    })
  }

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikeCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  return (
    <section
      id="community"
      className="relative z-10 w-full min-h-screen min-h-[100svh] flex flex-col justify-center py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-28 bg-[#FEF5EB] selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="community-heading"
    >
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Typography, Copy & Community Stats
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            
            {/* Signature Subtitle with Layered Dual-Square Icon */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 select-none cursor-default"
            >
              <span className="flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {/* Top-left lighter offset square */}
                  <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.45" />
                  {/* Bottom-right solid berry square */}
                  <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#AB003E" />
                </svg>
              </span>

              <span className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[22px] bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent tracking-[-0.01em]">
                Community
              </span>
            </motion.div>

            {/* Headline: Distinctive Editorial Style */}
            <motion.h2
              id="community-heading"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[clamp(2.4rem,4.2vw,3.8rem)] font-bold text-[#161413] leading-[1.14] tracking-[-0.03em] mb-3 sm:mb-4"
            >
              <div>Don&apos;t learn</div>
              <div className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent mt-1">
                alone.
              </div>
            </motion.h2>

            {/* Signature Decorative Down Line with Square Dot (━━━━ ▪) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex items-center gap-2 mb-4 sm:mb-5 origin-left"
              aria-hidden="true"
            >
              <span className="w-12 sm:w-14 h-[3.5px] rounded-[1px] bg-gradient-to-r from-[#FF914D] to-[#AB003E]" />
              <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#AB003E]" />
            </motion.div>

            {/* Copy Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[15px] sm:text-[16.5px] leading-[1.68] text-[#554E48] font-normal tracking-[-0.01em] max-w-xl mb-6"
            >
              Find people who are learning, experimenting and building — and contribute your own knowledge along the way.
            </motion.p>

            {/* Community Metrics Grid */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8"
            >
              {[
                { number: '2,400+', label: 'Active Builders' },
                { number: '180+', label: 'Weekly Sprints' },
                { number: '40+', label: 'Countries' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/70 border border-[#F2DECE] p-3 sm:p-3.5 text-left shadow-[0_4px_14px_rgba(224,93,58,0.04)]"
                >
                  <div className="font-sans font-bold text-[20px] sm:text-[23px] text-[#161413] tracking-[-0.02em] leading-none mb-1">
                    {stat.number}
                  </div>
                  <div className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#8C7E74]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Primary Action Button */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/community"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E4521B] via-[#D84610] to-[#E4521B] text-white font-sans font-semibold text-[15px] shadow-[0_8px_24px_rgba(228,82,27,0.32),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_32px_rgba(228,82,27,0.48),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 select-none"
              >
                <span>Meet the Community</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#E4521B]">
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </span>
              </Link>
            </motion.div>

            {/* Live Activity Feed Ticker */}
            <div className="mt-8 pt-5 border-t border-[#F2DECE]/80 w-full max-w-lg">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4521B] opacity-50 duration-1000" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E4521B]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8C7E74]">
                  Live Community Activity
                </span>
              </div>
              <div className="space-y-1.5">
                {LIVE_ACTIVITIES.map((act, i) => (
                  <div key={i} className="text-[12.5px] text-[#554E48] font-sans flex items-center gap-1.5 truncate">
                    <span className="font-bold text-[#161413]">{act.mate}</span>
                    <span className="text-[#8C7E74]">{act.action}</span>
                    <span className="font-medium text-[#E4521B] truncate">{act.project}</span>
                    <span className="text-[11px] text-[#B0A79E] shrink-0 ml-auto">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Interactive 3D Stacked Member Cards Deck
             ======================================================== */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full py-8 select-none">
            
            {/* Interactive Stack Deck Container */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[480px] sm:h-[500px] flex items-center justify-center">
              
              {/* Stack Deck Navigation Controls */}
              <div className="absolute -top-3 right-2 z-40 flex items-center gap-2">
                <button
                  type="button"
                  onClick={cycleDeckBackward}
                  aria-label="Previous mate card"
                  className="w-9 h-9 rounded-full bg-white/90 border border-[#F0D5C2] text-[#161413] flex items-center justify-center hover:bg-[#E4521B] hover:text-white hover:border-[#E4521B] shadow-[0_2px_8px_rgba(228,82,27,0.08)] transition-all duration-300 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
                </button>
                <button
                  type="button"
                  onClick={cycleDeckForward}
                  aria-label="Next mate card"
                  className="w-9 h-9 rounded-full bg-white/90 border border-[#F0D5C2] text-[#161413] flex items-center justify-center hover:bg-[#E4521B] hover:text-white hover:border-[#E4521B] shadow-[0_2px_8px_rgba(228,82,27,0.08)] transition-all duration-300 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>

              {/* Render Stacked Cards (Top 3 in Deck) */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  {deck.slice(0, 3).map((member, index) => {
                    const isTop = index === 0
                    const isMiddle = index === 1

                    // Depth transforms for 3D stack fan effect
                    const yOffset = isTop ? 0 : isMiddle ? 16 : 30
                    const scale = isTop ? 1 : isMiddle ? 0.94 : 0.88
                    const rotate = isTop ? -1.5 : isMiddle ? 2.5 : 6
                    const zIndex = isTop ? 30 : isMiddle ? 20 : 10
                    const opacity = isTop ? 1 : isMiddle ? 0.88 : 0.7

                    return (
                      <motion.div
                        key={member.id}
                        layout
                        initial={{ opacity: 0, y: 50, scale: 0.85 }}
                        animate={{
                          opacity,
                          y: yOffset,
                          scale,
                          rotate,
                          zIndex,
                        }}
                        exit={{ opacity: 0, x: 200, rotate: 18 }}
                        transition={{
                          type: 'spring',
                          stiffness: 280,
                          damping: 24,
                        }}
                        onClick={isTop ? undefined : cycleDeckForward}
                        className={`absolute w-full rounded-[30px] sm:rounded-[34px] bg-gradient-to-b from-white via-[#FFFDFB] to-[#FFF7EE]/95 border border-white/90 ring-1 ring-[#F2DECE]/90 shadow-[0_20px_50px_rgba(224,93,58,0.12),0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,1)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer ${
                          isTop ? 'cursor-default' : 'hover:ring-[#E4521B]/40'
                        }`}
                        style={{
                          height: '440px',
                        }}
                      >
                        {/* Card Ambient Spotlight Glow on Top Right */}
                        <div 
                          className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[40px] pointer-events-none opacity-25"
                          style={{
                            background: 'radial-gradient(circle, #FFA669 0%, #FB8846 40%, transparent 70%)',
                          }}
                          aria-hidden="true"
                        />

                        {/* Card Header: Profile Info */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              {/* Glowing Avatar */}
                              <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${member.avatarBg} shadow-[0_8px_18px_rgba(228,82,27,0.25)] flex items-center justify-center text-white font-sans font-bold text-xl select-none`}>
                                {member.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-sans font-bold text-[18px] sm:text-[19px] text-[#161413] tracking-[-0.02em] leading-tight">
                                  {member.name}
                                </h4>
                                <div className="font-sans text-[12px] text-[#8C7E74]">
                                  {member.handle} · {member.location}
                                </div>
                              </div>
                            </div>

                            {/* Badge */}
                            <span 
                              className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-[#FAD4BE] bg-[#FFF3EB] text-[#E4521B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
                            >
                              {member.badge}
                            </span>
                          </div>

                          {/* Member Role & Current Project */}
                          <div className="mb-4">
                            <div className="text-[13px] font-semibold text-[#8C7E74] mb-1">
                              {member.role}
                            </div>
                            <div className="p-3.5 rounded-2xl bg-[#FFF8F2] border border-[#FCE1CF] text-[13px] sm:text-[13.5px] leading-[1.55] text-[#2C2723] font-medium flex items-start gap-2">
                              <Terminal className="w-4 h-4 text-[#E4521B] shrink-0 mt-0.5" />
                              <span>{member.building}</span>
                            </div>
                          </div>

                          {/* Skill Chips */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {member.skills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center text-[11px] sm:text-[11.5px] font-medium px-2.5 py-0.5 rounded-full bg-[#FFF5EC] text-[#9E3006] border border-[#FAD6C0]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer: Metrics & Interactive Actions */}
                        <div className="pt-3.5 border-t border-[#F2DECE]/80 flex items-center justify-between">
                          <div className="flex items-center gap-4 text-[12.5px] text-[#554E48]">
                            <div>
                              <span className="font-bold text-[#161413]">{member.prsCount}</span> PRs
                            </div>
                            <div>
                              <span className="font-bold text-[#161413]">{member.sprintsCount}</span> Sprints
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Like / Cheer micro-interaction */}
                            <button
                              type="button"
                              onClick={(e) => handleLike(member.id, e)}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F0D5C2] text-[#E4521B] text-[12px] font-bold hover:bg-[#FFF5EC] transition-all cursor-pointer shadow-xs active:scale-95"
                            >
                              <Heart className="w-3.5 h-3.5 fill-[#E4521B]" />
                              <span>{likeCount[member.id] || 0}</span>
                            </button>

                            {/* Cycle Deck Pill */}
                            {isTop && (
                              <button
                                type="button"
                                onClick={cycleDeckForward}
                                className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#E4521B] text-white text-[12px] font-bold shadow-[0_4px_12px_rgba(228,82,27,0.28)] hover:bg-[#D84610] transition-all cursor-pointer"
                              >
                                <span>Next Mate</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>

                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>

            </div>

            {/* Hint subtitle under stacked deck */}
            <div className="mt-4 text-center text-[12px] font-semibold text-[#8C7E74] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E4521B]" />
              <span>Click card or arrows to shuffle through community builders</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

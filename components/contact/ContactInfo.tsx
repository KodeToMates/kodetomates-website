'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, MessageSquare, Globe, Copy, Check, Sparkles } from 'lucide-react'

export function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@kodetomates.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const contactChannels = [
    {
      icon: Mail,
      iconColor: 'text-[#E4521B]',
      iconBg: 'bg-[#FF914D]/15',
      title: 'Email Us Directly',
      value: 'hello@kodetomates.com',
      description: 'For partnerships, sponsors, and general inquiries.',
      action: (
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E8E1D9] hover:bg-[#F9F6F0] text-[#E4521B] shadow-2xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B26]"
          title="Copy email address"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      ),
    },
    {
      icon: Clock,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#10B981]/15',
      title: 'Response Promise',
      value: 'Under 24 Hours',
      description: 'Every inquiry is routed directly to a team lead.',
    },
    {
      icon: MessageSquare,
      iconColor: 'text-[#8B5CF6]',
      iconBg: 'bg-[#8B5CF6]/15',
      title: 'Live Community',
      value: 'Discord & Community Forums',
      description: 'Connect with 500+ builders, mentors, and collaborators.',
    },
    {
      icon: Globe,
      iconColor: 'text-[#3B82F6]',
      iconBg: 'bg-[#3B82F6]/15',
      title: 'Global & Remote-First',
      value: 'Every Time Zone',
      description: 'Peer collaboration happening 24/7 across the globe.',
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Editorial Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF914D]/15 border border-[#FF914D]/30 text-[#C2410C] text-xs font-bold uppercase tracking-wider mb-3.5">
          <Sparkles className="w-3.5 h-3.5 text-[#E4521B]" />
          <span>Get In Touch</span>
        </div>

        <h1 className="font-serif text-[clamp(2.4rem,4.2vw,3.8rem)] font-bold text-[#1A1614] leading-[1.12] tracking-tight mb-4">
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-[#FF7A32] via-[#F04358] to-[#AB003E] bg-clip-text text-transparent">
            meaningful together.
          </span>
        </h1>

        <p className="font-sans text-[16px] sm:text-[17.5px] text-[#5A5654] leading-relaxed max-w-lg">
          Have a project idea, want to join as a mate, explore technical partnerships, or have questions about how KodeToMates works? We&apos;d love to connect.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactChannels.map((channel, idx) => {
          const Icon = channel.icon
          return (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(26,24,23,0.03)] hover:shadow-[0_8px_24px_rgba(26,24,23,0.06)] hover:bg-white/90 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${channel.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${channel.iconColor}`} />
                  </div>
                  {channel.action}
                </div>

                <h3 className="font-sans font-semibold text-[13px] text-[#8C847C] uppercase tracking-wider mb-1">
                  {channel.title}
                </h3>
                <p className="font-sans font-bold text-[15.5px] sm:text-[16px] text-[#1A1817]">
                  {channel.value}
                </p>
              </div>

              <p className="font-sans text-xs text-[#6B645E] mt-2.5 leading-relaxed">
                {channel.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Trust & Community Highlight Pill */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FEF2E6] to-[#FFF9F2] border border-[#FDE3CA] flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#E4521B]/15 flex items-center justify-center text-[#E4521B] shrink-0 font-serif font-bold text-lg">
          KTM
        </div>
        <div>
          <h4 className="font-sans font-bold text-[14px] text-[#1A1817]">
            Direct Founder & Mentor Access
          </h4>
          <p className="font-sans text-xs sm:text-[13px] text-[#6B645E] mt-0.5 leading-snug">
            We review every submission personally to help connect you with the right cohort and projects.
          </p>
        </div>
      </div>
    </div>
  )
}

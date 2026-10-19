'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, MessageSquare, Globe, Copy, Check } from 'lucide-react'

export function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kodetomates@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactChannels = [
    {
      icon: Mail,
      iconColor: 'text-[#E4521B]',
      iconBg: 'bg-[#FF914D]/15',
      title: 'Email Directly',
      value: 'kodetomates@gmail.com',
      description: 'For partnerships, sponsors, and general inquiries.',
      action: (
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-[#E8E1D9] hover:bg-[#F9F6F0] text-[#E4521B] shadow-2xs transition-all cursor-pointer"
          title="Copy email address"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-700">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
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
      value: 'Discord & Forums',
      description: 'Connect with 500+ builders, mentors, and collaborators.',
    },
    {
      icon: Globe,
      iconColor: 'text-[#3B82F6]',
      iconBg: 'bg-[#3B82F6]/15',
      title: 'Global & Remote',
      value: 'Every Time Zone',
      description: 'Peer collaboration happening 24/7 across the globe.',
    },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {contactChannels.map((channel, idx) => {
          const Icon = channel.icon
          return (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#EBE6DC] shadow-[0_4px_16px_rgba(26,24,23,0.02)] hover:shadow-[0_8px_24px_rgba(26,24,23,0.05)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${channel.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${channel.iconColor}`} />
                  </div>
                  {channel.action}
                </div>

                <h3 className="font-sans font-semibold text-[11.5px] text-[#8C847C] uppercase tracking-wider mb-1">
                  {channel.title}
                </h3>
                <p className="font-sans font-bold text-[14.5px] sm:text-[15px] text-[#1A1817]">
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
    </div>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, X, ArrowUpRight } from 'lucide-react'
import DoodleCrewFooter, {
  KODETOMATES_CREW,
  KODETOMATES_COLUMNS,
} from '@/components/ui/doodle-crew-footer'

export function Footer() {
  const [activeNotice, setActiveNotice] = useState<string | null>(null)

  // Listen for Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveNotice(null)
    }
    if (activeNotice) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [activeNotice])

  return (
    <div className="relative w-full bg-[#0C0B0A] overflow-hidden">
      {/* Ambient warm orange core glow behind center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #E4521B 0%, #FF914D 40%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <DoodleCrewFooter
        wordmark="KODETOMATES"
        brand="KodeToMates"
        brandNode={
          <span className="font-sans font-bold tracking-[-0.03em] text-white">
            Kode<span className="text-[#E4521B]">To</span>Mates
          </span>
        }
        logoNode={
          <span className="dcf-logo" aria-hidden="true">
            <Image
              src="/Image-v1/KTM_Logos/Primary-Logo.png"
              alt="KodeToMates Logo"
              width={34}
              height={34}
              className="object-contain"
            />
          </span>
        }
        blurb="A collaborative technology community & digital engineering studio. We build production-ready software, high-converting platforms, and scalable digital experiences."
        columns={KODETOMATES_COLUMNS}
        copyright={`© ${new Date().getFullYear()} KodeToMates. All rights reserved.`}
        legal={[
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'LLMs.txt', href: '/llms.txt' },
          { label: 'Support', href: '/contact' },
        ]}
        socials={[
          { label: 'Instagram', href: 'https://www.instagram.com/kodetomates/' },
          { label: 'GitHub', href: '/contact' },
          { label: 'LinkedIn', href: '/contact' },
          { label: 'Discord', href: '/contact' },
        ]}
        crew={KODETOMATES_CREW}
        preset="night"
        palette={{
          background: '#0C0B0A',
          ink: '#F4EFEA',
          accent: '#E4521B',
        }}
        fontFamily="var(--font-jakarta), var(--font-inter), sans-serif"
        serifFamily="var(--font-jakarta), var(--font-inter), sans-serif"
        tracking={-0.03}
        backToTop={true}
      />

      {/* Channel Under Development Popup Modal */}
      <AnimatePresence>
        {activeNotice && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveNotice(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="social-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-[28px] bg-[#161413] border border-white/10 p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(228,82,27,0.18)] overflow-hidden text-left"
            >
              <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-25"
                style={{
                  background: 'radial-gradient(circle, #E4521B 0%, transparent 70%)',
                }}
              />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#E4521B]/15 border border-[#E4521B]/30 flex items-center justify-center text-[#E4521B] shadow-inner">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => setActiveNotice(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-[#A69B92] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <span className="font-mono text-xs font-bold text-[#FF914D] uppercase tracking-wider block">
                Channel In Development
              </span>

              <h3
                id="social-modal-title"
                className="font-sans font-bold text-xl sm:text-2xl text-white tracking-[-0.02em] mt-1 mb-2.5"
              >
                {activeNotice} Profile Not Yet Launched
              </h3>

              <p className="font-sans text-[14px] text-[#A69B92] leading-relaxed mb-5">
                Our team has not launched our official <strong className="text-white font-semibold">{activeNotice}</strong> channel yet. We are actively curating content and building our community presence.
              </p>

              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="min-w-0">
                    <div className="font-sans font-bold text-xs text-white truncate">@kodetomates on Instagram</div>
                    <div className="font-sans text-[11px] text-[#8E857E] truncate">Daily builder updates &amp; announcements</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#059669]/15 text-[#27C93F] font-mono text-[10px] font-bold border border-[#059669]/30 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                  <span>Active</span>
                </span>
              </div>

              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/kodetomates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-[#E4521B] hover:bg-[#CC420F] text-white font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(228,82,27,0.35)] transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                >
                  <span>Connect With Us on Instagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveNotice(null)}
                  className="w-full py-2.5 rounded-full text-xs font-sans font-medium text-[#8E857E] hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Footer

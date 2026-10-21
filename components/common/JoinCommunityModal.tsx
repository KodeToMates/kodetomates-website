'use client'

import React, { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react'
import { submitContactRequest } from '@/lib/api/contact'
import { ContactRequestPayload } from '@/types/contact'

export interface JoinCommunityModalProps {
  isOpen: boolean
  onClose: () => void
}

const TRACK_OPTIONS = [
  'Full-Stack Web Development',
  'AI & Autonomous Systems',
  'Frontend Engineering & UI/UX',
  'Backend & Cloud Architecture',
  'Open Source Collaboration',
  'Other / Exploring',
]

export function JoinCommunityModal({ isOpen, onClose }: JoinCommunityModalProps) {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [track, setTrack] = useState('')
  const [message, setMessage] = useState('')

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleClose = useCallback(() => {
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setErrorMessage('')
    }, 200)
  }, [onClose])

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = fullName.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || trimmedName.length < 2) {
      setStatus('error')
      setErrorMessage('Please enter your full name.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (!trimmedMessage || trimmedMessage.length < 6) {
      setStatus('error')
      setErrorMessage('Please provide a brief note on what you want to build or learn.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const formattedMessage = [
        track ? `[Track: ${track}]` : '',
        trimmedMessage,
      ]
        .filter(Boolean)
        .join('\n\n')

      const payload: ContactRequestPayload = {
        fullName: trimmedName,
        email: trimmedEmail,
        phone: phone.trim() || undefined,
        message: formattedMessage,
        leadSource: 'Join Community Modal (Navbar)',
      }

      await submitContactRequest(payload)
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      const msg = err instanceof Error ? err.message : 'Unable to submit application. Please try again.'
      setErrorMessage(msg)
    }
  }

  if (!isMounted) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Clean Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[520px] my-auto rounded-2xl sm:rounded-3xl bg-[#12111A]/95 backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.65)] z-10"
          >
            {/* Header: Title and Close */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="inline-block text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-[#E4521B] mb-1.5">
                  JOIN KODETOMATES
                </span>
                <h3
                  id="join-modal-title"
                  className="font-sans font-bold text-[22px] sm:text-[24px] text-white tracking-[-0.025em] leading-snug"
                >
                  Join the developer circle<span className="text-[#E4521B]">.</span>
                </h3>
                <p className="font-sans text-[13px] text-[#A6A0B2] mt-1 leading-normal">
                  Collaborate on real repositories, pair-code with peers, and build proof-of-work.
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 mt-0.5"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {status === 'success' ? (
              /* Success State */
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E4521B]/15 border border-[#E4521B]/30 flex items-center justify-center text-[#E4521B] mx-auto mb-3.5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-[20px] text-white tracking-[-0.02em] mb-1.5">
                  Application received
                </h4>
                <p className="font-sans text-[13.5px] text-[#A6A0B2] max-w-sm mx-auto mb-6 leading-relaxed">
                  Thanks, <strong className="text-white">{fullName}</strong>. We will review your application and send onboarding details to <span className="text-white font-medium">{email}</span>.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-[#E4521B] hover:bg-[#CC420F] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Clean Form */
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {status === 'error' && errorMessage && (
                  <div
                    className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2 font-sans"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="join-name"
                      className="block text-xs font-sans font-medium text-white/80 mb-1"
                    >
                      Full Name <span className="text-[#E4521B]">*</span>
                    </label>
                    <input
                      id="join-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Rivera"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#E4521B] focus:ring-1 focus:ring-[#E4521B] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="join-email"
                      className="block text-xs font-sans font-medium text-white/80 mb-1"
                    >
                      Email Address <span className="text-[#E4521B]">*</span>
                    </label>
                    <input
                      id="join-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#E4521B] focus:ring-1 focus:ring-[#E4521B] transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Primary Track Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="join-phone"
                      className="block text-xs font-sans font-medium text-white/80 mb-1"
                    >
                      Phone Number <span className="text-white/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="join-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 555 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#E4521B] focus:ring-1 focus:ring-[#E4521B] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="join-track"
                      className="block text-xs font-sans font-medium text-white/80 mb-1"
                    >
                      Primary Track
                    </label>
                    <div className="relative">
                      <select
                        id="join-track"
                        value={track}
                        onChange={(e) => setTrack(e.target.value)}
                        className={`w-full px-3.5 py-2.5 pr-9 rounded-xl bg-white/[0.05] border border-white/10 text-sm font-sans appearance-none cursor-pointer focus:outline-none focus:border-[#E4521B] focus:ring-1 focus:ring-[#E4521B] transition-all ${
                          track ? 'text-white' : 'text-white/40'
                        }`}
                      >
                        <option value="" disabled className="bg-[#181622] text-white/50">
                          Select your track...
                        </option>
                        {TRACK_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#181622] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Goals / Message */}
                <div>
                  <label
                    htmlFor="join-message"
                    className="block text-xs font-sans font-medium text-white/80 mb-1"
                  >
                    What do you want to build or achieve? <span className="text-[#E4521B]">*</span>
                  </label>
                  <textarea
                    id="join-message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you are working on, learning goals, or ideas you want to ship..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#E4521B] focus:ring-1 focus:ring-[#E4521B] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-2.5 sm:py-3 rounded-full bg-[#E4521B] hover:bg-[#CC420F] text-white font-sans font-semibold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11.5px] text-white/40 mt-2 font-sans">
                    We review submissions daily and respond via email.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}

export default JoinCommunityModal

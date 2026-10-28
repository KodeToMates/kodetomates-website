'use client'

import React, { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react'
import { submitContactRequest } from '@/lib/api/contact'
import {
  ContactFormData,
  ContactRequestPayload,
  CONTACT_SUBJECT_OPTIONS,
  initialContactFormData,
} from '@/types/contact'
import { validateContactForm } from '@/lib/validations/contact'

export interface JoinCommunityModalProps {
  isOpen: boolean
  onClose: () => void
}

export function JoinCommunityModal({ isOpen, onClose }: JoinCommunityModalProps) {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  const [formData, setFormData] = useState<ContactFormData>(initialContactFormData)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleClose = useCallback(() => {
    onClose()
    setTimeout(() => {
      setFormData(initialContactFormData)
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setStatus('error')
      setErrorMessage(validation.firstError || 'Please complete all required fields.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const payload: ContactRequestPayload = {
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        subject: formData.subject.trim() || undefined,
        message: formData.message.trim() || formData.subject.trim(),
        leadSource: 'Enquiry Modal (Navbar)',
      }

      await submitContactRequest(payload)
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      const msg =
        err instanceof Error
          ? err.message
          : 'Failed to submit enquiry. Please try again later.'
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
          aria-labelledby="enquiry-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Clean Borderless Glassmorphic Modal Card matching Navbar Aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[620px] max-h-[92vh] my-auto rounded-3xl bg-[rgba(15,14,23,0.72)] backdrop-blur-2xl backdrop-saturate-180 p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.6)] z-10 overflow-y-auto border-0"
          >
            {/* Header: Title and Close Button */}
            <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
              <div>
                <span className="inline-block text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-[#E4521B] mb-1.5">
                  ENQUIRY KODETOMATES
                </span>
                <h3
                  id="enquiry-modal-title"
                  className="font-sans font-bold text-[22px] sm:text-[26px] text-white tracking-[-0.025em] leading-snug"
                >
                  Let&apos;s build something great<span className="text-[#E4521B]">.</span>
                </h3>
                <p className="font-sans text-[13.5px] text-[#C4C0D0] mt-1 leading-normal">
                  Tell us about your project, idea, or questions and our team will get back to you within 24 hours.
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-8.5 h-8.5 rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0 border-0 mt-0.5"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {status === 'success' ? (
              /* Success Confirmation View */
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#E4521B]/15 flex items-center justify-center text-[#E4521B] mx-auto mb-4 shadow-[0_10px_25px_rgba(228,82,27,0.2)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-sans font-bold text-[22px] text-white tracking-[-0.02em] mb-2">
                  Enquiry Received!
                </h4>
                <p className="font-sans text-[14px] text-white/75 max-w-sm mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We&apos;ve received your inquiry regarding <span className="text-[#E4521B] font-semibold">“{formData.subject}”</span> and our team will get back to you at <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-pill-coral px-8 py-2.5 rounded-full text-white text-sm font-semibold transition-all cursor-pointer shadow-[0_4px_16px_rgba(228,82,27,0.35)] border-0"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Enquiry Form (Same Fields as Contact Page) */
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && errorMessage && (
                  <div
                    className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs sm:text-[13px] flex items-center gap-2.5 font-sans"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-xs font-sans font-semibold text-white/85 mb-1.5"
                    >
                      Name <span className="text-[#E4521B]">*</span>
                    </label>
                    <input
                      id="modal-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      disabled={status === 'submitting'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.08] text-white placeholder-white/35 text-sm font-sans focus:outline-none focus:bg-white/[0.14] focus:ring-2 focus:ring-[#E4521B]/60 transition-all border-0 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-xs font-sans font-semibold text-white/85 mb-1.5"
                    >
                      Email <span className="text-[#E4521B]">*</span>
                    </label>
                    <input
                      id="modal-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={status === 'submitting'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.08] text-white placeholder-white/35 text-sm font-sans focus:outline-none focus:bg-white/[0.14] focus:ring-2 focus:ring-[#E4521B]/60 transition-all border-0 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Company / Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-xs font-sans font-semibold text-white/85 mb-1.5"
                    >
                      Phone Number <span className="text-white/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 555 123 4567"
                      disabled={status === 'submitting'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.08] text-white placeholder-white/35 text-sm font-sans focus:outline-none focus:bg-white/[0.14] focus:ring-2 focus:ring-[#E4521B]/60 transition-all border-0 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-company"
                      className="block text-xs font-sans font-semibold text-white/85 mb-1.5"
                    >
                      Company / Organisation <span className="text-white/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="modal-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Studio (optional)"
                      disabled={status === 'submitting'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.08] text-white placeholder-white/35 text-sm font-sans focus:outline-none focus:bg-white/[0.14] focus:ring-2 focus:ring-[#E4521B]/60 transition-all border-0 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Row 3: Subject Dropdown */}
                <div>
                  <label
                    htmlFor="modal-subject"
                    className="block text-xs font-sans font-semibold text-white/85 mb-1.5"
                  >
                    Subject <span className="text-[#E4521B]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="modal-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className={`w-full px-3.5 py-2.5 pr-9 rounded-xl bg-white/[0.08] text-sm font-sans appearance-none cursor-pointer focus:outline-none focus:bg-white/[0.14] focus:ring-2 focus:ring-[#E4521B]/60 transition-all border-0 disabled:opacity-60 ${
                        formData.subject ? 'text-white' : 'text-white/40'
                      }`}
                    >
                      <option value="" disabled className="bg-[#181622] text-white/50">
                        Choose your topic...
                      </option>
                      {CONTACT_SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#181622] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Message / Special Requests */}
                <div>
                  <label
                    htmlFor="modal-message"
                    className="block text-xs font-sans font-semibold text-white/85 mb-1.5"
                  >
                    Message / Special Requests <span className="text-[#E4521B]">*</span>
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else we should know?"
                    disabled={status === 'submitting'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.08] text-white placeholder-white/35 text-sm font-sans focus:outline-none focus:bg-white/[0.14] focus:ring-2 focus:ring-[#E4521B]/60 transition-all resize-none border-0 disabled:opacity-60"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-pill-coral py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(228,82,27,0.4)] border-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11.5px] text-white/40 mt-2 font-sans">
                    We review all enquiries promptly and respond within 24 hours.
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

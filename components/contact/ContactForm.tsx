'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react'
import {
  ContactFormData,
  ContactRequestPayload,
  CONTACT_SUBJECT_OPTIONS,
  initialContactFormData,
} from '@/types/contact'
import { validateContactForm } from '@/lib/validations/contact'
import { submitContactRequest } from '@/lib/api/contact'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialContactFormData)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [serverSuccessMessage, setServerSuccessMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@kodetomates.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

    // 1. Client-side validation
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setStatus('error')
      setErrorMessage(validation.firstError || 'Please complete all required fields.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    // 2. Format payload according to API contract
    const payload: ContactRequestPayload = {
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() || undefined,
      message: formData.message.trim() || formData.subject.trim(),
      leadSource: 'Website (Contact Page-CTA)',
    }

    if (formData.phone.trim()) {
      payload.phone = formData.phone.trim()
    }
    if (formData.company.trim()) {
      payload.company = formData.company.trim()
    }

    // 3. Submit to backend API
    try {
      const response = await submitContactRequest(payload)
      setServerSuccessMessage(response.message || 'Contact request submitted successfully')
      setStatus('success')
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Failed to submit contact request. Please try again later.'
      setStatus('error')
      setErrorMessage(message)
    }
  }

  const handleReset = () => {
    setFormData(initialContactFormData)
    setStatus('idle')
    setErrorMessage('')
    setServerSuccessMessage('')
  }

  return (
    <div className="relative w-full rounded-[32px] sm:rounded-[36px] bg-white border border-neutral-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* ========================================================
          HEADER BAR (Matching Reference Screenshot: Title Left, Text Right)
         ======================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 sm:pb-10 border-b border-neutral-100 mb-8 sm:mb-10">
        <div>
          {/* Eyebrow badge matching "Plan Trip" in reference */}

          {/* Headline matching "Contact Us" */}
          <h1 className="font-sans text-[clamp(2.4rem,4.4vw,3.8rem)] font-bold text-[#141210] leading-none tracking-tight">
            Contact Us
          </h1>
        </div>

        {/* Subtitle description right-aligned on desktop */}
        <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#6B645E] leading-relaxed max-w-sm lg:text-right">
          Tell us about your project, idea, or questions and we&apos;ll confirm availability within 24 hours.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-center justify-center text-center py-12 sm:py-16"
          >
            {/* Animated Success Badge */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#10B981]/20 to-[#34D399]/20 border border-[#10B981]/40 flex items-center justify-center mb-6 shadow-[0_10px_25px_rgba(16,185,129,0.2)] text-[#059669]">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#1A1817] mb-3">
              Message Sent Successfully!
            </h3>

            <p className="font-sans text-[15.5px] sm:text-[17px] text-[#5A5654] max-w-md mb-8 leading-relaxed">
              Thank you, <span className="font-semibold text-[#1A1817]">{formData.name}</span>! {serverSuccessMessage}. We&apos;ve received your inquiry regarding <span className="font-semibold text-[#E4521B]">“{formData.subject}”</span> and our team will get back to you at <span className="font-semibold text-[#1A1817]">{formData.email}</span> within 24 hours.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1A1817] hover:bg-[#2B2724] text-white font-sans font-semibold text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B26] focus-visible:ring-offset-2"
            >
              <Sparkles className="w-4 h-4 text-[#FF914D]" />
              <span>Send Another Message</span>
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
            {/* ========================================================
                LEFT COLUMN: Interactive Form (Matching Reference Inputs)
               ======================================================== */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between gap-4 sm:gap-5"
            >
              {/* Error Banner */}
              {status === 'error' && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-red-50 border border-red-200/80 text-red-700 text-sm font-medium"
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FA] border border-neutral-200 text-[#141210] text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-3 focus:ring-[#E4521B]/10 disabled:opacity-60"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FA] border border-neutral-200 text-[#141210] text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-3 focus:ring-[#E4521B]/10 disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Company / Organisation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 555 123 4567"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FA] border border-neutral-200 text-[#141210] text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-3 focus:ring-[#E4521B]/10 disabled:opacity-60"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-company"
                    className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817]"
                  >
                    Company / Organisation
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Studio (optional)"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FA] border border-neutral-200 text-[#141210] text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-3 focus:ring-[#E4521B]/10 disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Row 3: Subject Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817]"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className={`w-full px-4 py-3 pr-10 rounded-2xl bg-[#F8F9FA] border border-neutral-200 text-sm sm:text-[14.5px] font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-3 focus:ring-[#E4521B]/10 disabled:opacity-60 appearance-none cursor-pointer ${formData.subject ? 'text-[#141210]' : 'text-neutral-400'
                      }`}
                  >
                    <option value="" disabled>Choose your topic...</option>
                    {CONTACT_SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="text-[#141210] bg-white py-1.5">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 4: Message / Special Requests */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817]"
                >
                  Message / Special Requests
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything else we should know?"
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FA] border border-neutral-200 text-[#141210] text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 resize-none focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-3 focus:ring-[#E4521B]/10 disabled:opacity-60"
                />
              </div>

              {/* Row 5: Submit Action (Split Pill Button + Arrow Circle matching screenshot) */}
              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-dark-coral group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans font-semibold text-sm sm:text-[15px]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Reserve Your Spot</span>
                  )}
                </button>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  aria-label="Submit Message"
                  className="btn-dark-coral w-12 h-12 rounded-full flex items-center justify-center group shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>

            {/* ========================================================
                RIGHT COLUMN: Scenic Visual Card (Exact Screenshot Parity)
               ======================================================== */}
            <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-auto min-h-[380px] lg:min-h-full rounded-[26px] sm:rounded-[28px] overflow-hidden shadow-[0_8px_24px_rgba(26,24,23,0.06)] flex flex-col justify-between p-5 sm:p-6 group">
              {/* Background scenic photo */}
              <Image
                src="/images/contact-journey.jpg"
                alt="Scenic road representing your journey with KodeToMates"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Ambient depth gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60 pointer-events-none" />

              {/* Top-Right Pill Badge matching "Your Journey" in screenshot */}
              <div className="relative self-end z-10 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/40 text-white font-sans text-xs font-semibold tracking-wide shadow-sm select-none">
                Your Journey
              </div>

              {/* Bottom Frosted Glass Trust Overlay Card */}
              <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-[#0F0D16]/70 backdrop-blur-xl border border-white/20 text-white shadow-xl">

                <div className="text-sm font-semibold text-white/95 leading-snug">
                  Direct Founder &amp; Mentor Access
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 text-xs">
                  <span className="text-white/80 font-mono text-[11.5px]">kodetomates@gmail.com</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#34D399]" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Mail,
  Zap,
  Code2,
} from 'lucide-react'
import {
  ContactFormData,
  ContactRequestPayload,
  CONTACT_SUBJECT_OPTIONS,
  initialContactFormData,
} from '@/types/contact'
import { validateContactForm } from '@/lib/validations/contact'
import { submitContactRequest } from '@/lib/api/contact'

export function HomeContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialContactFormData)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [serverSuccessMessage, setServerSuccessMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const shouldReduceMotion = useReducedMotion()

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
      leadSource: 'KodeToMates Home Page (/)',
      tenantName: 'Kodetomates Website',
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
    <section
      id="contact"
      aria-label="Contact KodeToMates"
      className="relative z-10 w-full bg-[#0C0B0A] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 selection:bg-[#E4521B]/30 selection:text-white"
    >
      {/* --- CENTERED CARD CONTAINER WITH FULL BACKGROUND IMAGE --- */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[1320px] mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden bg-[#0C0B0A] border border-[#302A25] shadow-[0_24px_70px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        {/* Subtle top rim light accent */}
        <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-20" />

        {/* ========================================================
            FULL BACKGROUND PHOTOGRAPHY ACROSS ENTIRE CONTAINER
           ======================================================== */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/Image-v1/contact-us.jpg"
            alt="Scenic path representing your digital engineering journey with KodeToMates"
            fill
            sizes="(max-width: 1320px) 100vw, 1320px"
            className="object-cover object-[center_38%] filter brightness-[0.32] contrast-[1.14] scale-[1.02]"
            priority
          />

          {/* Cinematic Vignette Overlays for deep atmospheric contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0B0A]/92 via-[#0C0B0A]/75 to-[#0C0B0A]/95 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/95 via-[#0C0B0A]/80 to-[#0C0B0A]/90 z-10" />

          {/* Ambient warm brand coral glow */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#E4521B]/15 rounded-full blur-[140px] pointer-events-none z-10" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#FF914D]/10 rounded-full blur-[120px] pointer-events-none z-10" />
        </div>

        {/* ========================================================
            INNER CONTENT GRID: Left Info, Right Side Form
           ======================================================== */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 xl:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            
            {/* ========================================================
                LEFT COLUMN: Headline, Story & Trust Indicators
               ======================================================== */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full pt-2">
              <div>
                {/* Eyebrow Badge (MANDATORY RULE: font-sans font-semibold text-xs tracking-wider uppercase text-[#E4521B]) */}
                <div className="inline-flex items-center gap-2 font-sans font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#E4521B] px-3.5 py-1.5 rounded-full bg-[#E4521B]/10 border border-[#E4521B]/25 mb-4 sm:mb-5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#E4521B] animate-pulse" />
                  <span>DIRECT COLLABORATION // CONTACT</span>
                </div>

                {/* Section Heading (MANDATORY RULE: font-sans font-bold tracking-[-0.03em] leading-[1.08-1.14]) */}
                <h2 className="font-sans text-[clamp(2.3rem,4vw,3.6rem)] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4 sm:mb-5">
                  Have an idea? <br />
                  <span className="bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#AB003E] -webkit-background-clip-text -webkit-text-fill-color-transparent bg-clip-text text-transparent">
                    Let&apos;s build it together.
                  </span>
                </h2>

                {/* Body Copy (MANDATORY RULE: font-sans leading-relaxed text-[#6B645E] / high contrast #D6CFC9 on dark) */}
                <p className="font-sans text-[15px] sm:text-[16px] text-[#D6CFC9] leading-relaxed mb-8 max-w-md">
                  Whether you have a breakthrough product idea, need high-performance web development, or want to collaborate with our engineering team — we confirm availability within 24 hours.
                </p>

                {/* Feature Value Props */}
                <div className="space-y-3.5 mb-8">
                  <div className="flex items-center gap-3 text-sm text-white/90 font-sans">
                    <div className="w-8 h-8 rounded-full bg-[#E4521B]/15 border border-[#E4521B]/30 flex items-center justify-center text-[#FF914D] shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span>Rapid MVP sprints to production deployment</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/90 font-sans">
                    <div className="w-8 h-8 rounded-full bg-[#059669]/15 border border-[#059669]/30 flex items-center justify-center text-[#34D399] shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span>Clean modern architecture &amp; verifiable proof of work</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/90 font-sans">
                    <div className="w-8 h-8 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span>Direct founder and senior mentor engineering access</span>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels Frosted Badge */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-white shadow-xl mt-auto">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-white/90 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#FF914D]" />
                    <span>Direct Contact</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#34D399]">
                    <Clock className="w-3 h-3" />
                    <span>&lt; 24h Response</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                  <span className="text-white/85 font-mono text-[12px] sm:text-[13px]">
                    hello@kodetomates.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/12 hover:bg-white/20 text-white text-[11.5px] font-medium transition-all duration-200 cursor-pointer"
                    aria-label="Copy direct contact email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#34D399]" />
                        <span className="text-[#34D399]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* ========================================================
                RIGHT COLUMN: The Interactive Contact Form
               ======================================================== */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="relative w-full rounded-[24px] sm:rounded-[30px] bg-[#141210]/75 backdrop-blur-2xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_1px_2px_rgba(255,255,255,0.06)] p-6 sm:p-8 lg:p-9">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="home-success-card"
                      initial={{ opacity: 0, scale: 0.95, y: 16 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                      className="flex flex-col items-center justify-center text-center py-10 sm:py-14"
                    >
                      {/* Animated Success Badge */}
                      <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#10B981]/25 to-[#34D399]/25 border border-[#10B981]/50 flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(16,185,129,0.3)] text-[#34D399]">
                        <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
                      </div>

                      <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white mb-3">
                        Message Sent Successfully!
                      </h3>

                      <p className="font-sans text-[15px] sm:text-[16.5px] text-[#D6CFC9] max-w-md mb-8 leading-relaxed">
                        Thank you, <span className="font-semibold text-white">{formData.name}</span>! {serverSuccessMessage}. We&apos;ve received your inquiry regarding <span className="font-semibold text-[#FF914D]">“{formData.subject}”</span> and our team will get back to you at <span className="font-semibold text-white">{formData.email}</span> within 24 hours.
                      </p>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E4521B] hover:bg-[#CC420F] text-white font-sans font-semibold text-sm tracking-wide transition-all duration-200 shadow-[0_6px_20px_rgba(228,82,27,0.35)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B26] focus-visible:ring-offset-2"
                      >
                        <Sparkles className="w-4 h-4 text-white" />
                        <span>Send Another Message</span>
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex flex-col gap-4 sm:gap-5"
                    >
                      {/* Form Header inside card */}
                      <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                        <div>
                          <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-[-0.02em]">
                            Send a Message
                          </h3>
                          <p className="text-xs sm:text-sm text-[#A8A19B] mt-0.5">
                            Fill in the details below and we&apos;ll be in touch.
                          </p>
                        </div>
                        <span className="text-[11px] font-medium text-white/50 bg-white/10 px-2.5 py-1 rounded-full">
                          Required *
                        </span>
                      </div>

                      {/* Error Banner */}
                      {status === 'error' && errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 p-3.5 rounded-2xl bg-red-500/15 border border-red-500/35 text-red-200 text-sm font-medium"
                          role="alert"
                        >
                          <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}

                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="home-contact-name"
                            className="font-sans font-semibold text-xs sm:text-[13px] text-white/90"
                          >
                            Name <span className="text-[#E4521B]">*</span>
                          </label>
                          <input
                            id="home-contact-name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white/[0.12] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/30 disabled:opacity-60"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="home-contact-email"
                            className="font-sans font-semibold text-xs sm:text-[13px] text-white/90"
                          >
                            Email <span className="text-[#E4521B]">*</span>
                          </label>
                          <input
                            id="home-contact-email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white/[0.12] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/30 disabled:opacity-60"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="home-contact-phone"
                            className="font-sans font-semibold text-xs sm:text-[13px] text-white/90"
                          >
                            Phone Number
                          </label>
                          <input
                            id="home-contact-phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 555 123 4567"
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white/[0.12] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/30 disabled:opacity-60"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="home-contact-company"
                            className="font-sans font-semibold text-xs sm:text-[13px] text-white/90"
                          >
                            Company / Organisation
                          </label>
                          <input
                            id="home-contact-company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Acme Studio (optional)"
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 focus:outline-none focus:bg-white/[0.12] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/30 disabled:opacity-60"
                          />
                        </div>
                      </div>

                      {/* Row 3: Subject Dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="home-contact-subject"
                          className="font-sans font-semibold text-xs sm:text-[13px] text-white/90"
                        >
                          Subject / Topic <span className="text-[#E4521B]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="home-contact-subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                            className={`w-full px-4 py-3 pr-10 rounded-2xl bg-[#1D1B19] border border-white/15 text-sm sm:text-[14.5px] font-sans transition-all duration-200 focus:outline-none focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/30 disabled:opacity-60 appearance-none cursor-pointer ${
                              formData.subject ? 'text-white' : 'text-neutral-400'
                            }`}
                          >
                            <option value="" disabled className="text-neutral-400 bg-[#1D1B19]">
                              Choose your topic...
                            </option>
                            {CONTACT_SUBJECT_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="text-white bg-[#1D1B19] py-1.5">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-white/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Row 4: Message Textarea */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="home-contact-message"
                          className="font-sans font-semibold text-xs sm:text-[13px] text-white/90"
                        >
                          Message / Project Details <span className="text-[#E4521B]">*</span>
                        </label>
                        <textarea
                          id="home-contact-message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about what you want to build, collaborate on, or learn..."
                          required
                          disabled={status === 'submitting'}
                          className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white text-sm sm:text-[14.5px] placeholder-neutral-400 font-sans transition-all duration-200 resize-none focus:outline-none focus:bg-white/[0.12] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/30 disabled:opacity-60"
                        />
                      </div>

                      {/* Row 5: Submit Action (Coral Accent Button + Arrow Circle) */}
                      <div className="flex items-center gap-2.5 pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans font-semibold text-sm sm:text-[15px] bg-[#E4521B] hover:bg-[#CC420F] text-white shadow-[0_8px_24px_rgba(228,82,27,0.38)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
                          aria-label="Submit Contact Request"
                          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E4521B] hover:bg-[#CC420F] text-white shadow-[0_8px_24px_rgba(228,82,27,0.38)] transition-all duration-200 cursor-pointer group shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HomeContactSection

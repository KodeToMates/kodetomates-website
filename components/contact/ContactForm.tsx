'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Phone,
  Building2,
  Tag,
  MessageSquare,
  Sparkles,
} from 'lucide-react'
import { ContactFormData, ContactRequestPayload } from '@/types/contact'
import { validateContactForm } from '@/lib/validations/contact'
import { submitContactRequest } from '@/lib/api/contact'

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Project Collaboration',
  'Join the Community',
  'Mentorship & Learning',
  'Technical Partnership',
]

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [serverSuccessMessage, setServerSuccessMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubjectChipClick = (subject: string) => {
    setFormData((prev) => ({ ...prev, subject }))
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
    // We prepend the user's selected topic to the message so that it is preserved in the backend CRM lead message
    const formattedMessage = formData.subject.trim()
      ? `[Topic: ${formData.subject.trim()}]\n\n${formData.message.trim()}`
      : formData.message.trim()

    const payload: ContactRequestPayload = {
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      message: formattedMessage,
      leadSource: 'Website',
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
    setFormData(initialFormData)
    setStatus('idle')
    setErrorMessage('')
    setServerSuccessMessage('')
  }

  return (
    <div className="relative w-full rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_20px_50px_rgba(26,24,23,0.06),0_1px_3px_rgba(26,24,23,0.04)] p-7 sm:p-10 lg:p-12 overflow-hidden">
      {/* Ambient background glass highlight */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FF914D]/10 via-[#AB003E]/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" 
        aria-hidden="true" 
      />

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-center justify-center text-center py-10 sm:py-14"
          >
            {/* Animated Success Badge */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#10B981]/20 to-[#34D399]/20 border border-[#10B981]/40 flex items-center justify-center mb-6 shadow-[0_10px_25px_rgba(16,185,129,0.2)] text-[#059669]">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817] mb-3">
              Message Sent Successfully!
            </h3>

            <p className="font-sans text-[15.5px] sm:text-[17px] text-[#5A5654] max-w-md mb-8 leading-relaxed">
              Thank you, <span className="font-semibold text-[#1A1817]">{formData.name}</span>! {serverSuccessMessage}. We’ve received your inquiry regarding <span className="font-semibold text-[#E4521B]">“{formData.subject}”</span> and our team will get back to you at <span className="font-semibold text-[#1A1817]">{formData.email}</span> within 24 hours.
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
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-6"
            noValidate
          >
            {/* Form Title & Introduction */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF914D]/10 border border-[#FF914D]/25 text-[#C2410C] text-xs font-semibold uppercase tracking-wider mb-2.5">
                <span>Direct Message</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817] tracking-tight">
                Send us a message
              </h2>
              <p className="font-sans text-sm sm:text-[15px] text-[#6B645E] mt-1">
                Fill in the details below and we&apos;ll be in touch shortly.
              </p>
            </div>

            {/* Error Banner */}
            {status === 'error' && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 border border-red-200/80 text-red-700 text-sm font-medium"
                role="alert"
                aria-live="assertive"
              >
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Field 1: Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817] tracking-wide flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#E4521B]" />
                    <span>Your Name</span>
                  </span>
                  <span className="text-[#A39E98] text-[11px] font-normal">Required</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    aria-required="true"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E9E4DC] text-[#1A1817] text-sm sm:text-[15px] placeholder-[#A8A29D] font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-4 focus:ring-[#E4521B]/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Field 2: Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817] tracking-wide flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#E4521B]" />
                    <span>Email Address</span>
                  </span>
                  <span className="text-[#A39E98] text-[11px] font-normal">Required</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    required
                    aria-required="true"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E9E4DC] text-[#1A1817] text-sm sm:text-[15px] placeholder-[#A8A29D] font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-4 focus:ring-[#E4521B]/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone & Company (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Field 3: Phone */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-phone"
                  className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817] tracking-wide flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#E4521B]" />
                    <span>Phone Number</span>
                  </span>
                  <span className="text-[#A39E98] text-[11px] font-normal">Optional</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 555 123 4567"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E9E4DC] text-[#1A1817] text-sm sm:text-[15px] placeholder-[#A8A29D] font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-4 focus:ring-[#E4521B]/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Field 4: Company */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-company"
                  className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817] tracking-wide flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#E4521B]" />
                    <span>Company / Organisation</span>
                  </span>
                  <span className="text-[#A39E98] text-[11px] font-normal">Optional</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corporation"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E9E4DC] text-[#1A1817] text-sm sm:text-[15px] placeholder-[#A8A29D] font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-4 focus:ring-[#E4521B]/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Subject */}
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="contact-subject"
                className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817] tracking-wide flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#E4521B]" />
                  <span>Subject</span>
                </span>
                <span className="text-[#A39E98] text-[11px] font-normal">Required</span>
              </label>

              {/* Quick Select Subject Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {SUBJECT_OPTIONS.map((option) => {
                  const isSelected = formData.subject === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSubjectChipClick(option)}
                      disabled={status === 'submitting'}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                        isSelected
                          ? 'bg-[#E4521B] text-white shadow-sm'
                          : 'bg-[#F4EFEA] hover:bg-[#EFE9E2] text-[#5A5654] border border-[#E8E1D9]'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Subject Input Field */}
              <div className="relative mt-1">
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Select a topic above or type a custom subject..."
                  required
                  aria-required="true"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E9E4DC] text-[#1A1817] text-sm sm:text-[15px] placeholder-[#A8A29D] font-sans transition-all duration-200 focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-4 focus:ring-[#E4521B]/10 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="font-sans font-semibold text-xs sm:text-[13px] text-[#1A1817] tracking-wide flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#E4521B]" />
                  <span>Your Message</span>
                </span>
                <span className="text-[#A39E98] text-[11px] font-normal">
                  {formData.message.length} characters (min 10)
                </span>
              </label>
              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're working on, questions you have, or how we can collaborate..."
                  required
                  aria-required="true"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FBF9F5] border border-[#E9E4DC] text-[#1A1817] text-sm sm:text-[15px] placeholder-[#A8A29D] font-sans transition-all duration-200 resize-none focus:outline-none focus:bg-white focus:border-[#E4521B] focus:ring-4 focus:ring-[#E4521B]/10 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#FF6B26] via-[#F8493A] to-[#D81B60] text-white font-sans font-semibold text-[15.5px] sm:text-[16.5px] tracking-wide select-none shadow-[0_12px_28px_rgba(233,61,86,0.32),0_4px_14px_rgba(255,107,38,0.25)] hover:shadow-[0_16px_36px_rgba(233,61,86,0.42),0_6px_18px_rgba(255,107,38,0.35)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B26] focus-visible:ring-offset-2"
              >
                {/* Shimmer sweep effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <span className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
                      <Send className="w-3.5 h-3.5" />
                    </span>
                  </>
                )}
              </button>

              <p className="font-sans text-[12px] text-[#8C847C] mt-3">
                🔒 We respect your privacy. No spam. Usually replied within 24 hours.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

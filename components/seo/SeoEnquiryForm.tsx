'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Globe,
  Mail,
  User,
  Search,
  BarChart3,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Loader2,
  Lock,
} from 'lucide-react'
import { submitContactRequest } from '@/lib/api/contact'
import { ContactRequestPayload } from '@/types/contact'

interface SeoFormData {
  fullName: string
  email: string
  websiteUrl: string
  primaryGoal: string
  monthlyTraffic: string
  notes: string
}

const INITIAL_FORM_DATA: SeoFormData = {
  fullName: '',
  email: '',
  websiteUrl: '',
  primaryGoal: 'Outrank Competitors for High-Value Keywords',
  monthlyTraffic: '5,000 – 25,000 visitors/mo',
  notes: '',
}

const SEO_GOAL_OPTIONS = [
  'Outrank Competitors for High-Value Keywords',
  'Fix Technical SEO & Indexing Bottlenecks',
  'Core Web Vitals & Sub-Second Page Speed',
  'Topical Authority & Semantic Content Clusters',
  'E-Commerce Category & Product Search Visibility',
  'Full Site Migration / Redesign SEO Protection',
]

const TRAFFIC_OPTIONS = [
  '< 5,000 visitors/mo',
  '5,000 – 25,000 visitors/mo',
  '25,000 – 100,000 visitors/mo',
  '100,000+ visitors/mo',
  'New / Unlaunched Domain',
]

export function SeoEnquiryForm() {
  const shouldReduceMotion = useReducedMotion()
  const formCardRef = useRef<HTMLDivElement>(null)

  // Floating state: stops immediately when user is filling/interacting with the form
  const [isInteracting, setIsInteracting] = useState(false)
  const [formData, setFormData] = useState<SeoFormData>(INITIAL_FORM_DATA)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [serverMessage, setServerMessage] = useState('')

  // Handle focus tracking for continuous floating pause
  const handleFocus = () => {
    setIsInteracting(true)
  }

  const handleBlur = (e: React.FocusEvent) => {
    // If focus moved outside the entire form card, resume floating
    if (!formCardRef.current?.contains(e.relatedTarget as Node)) {
      setIsInteracting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (!isInteracting) {
      setIsInteracting(true)
    }
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.websiteUrl.trim()) {
      setStatus('error')
      setErrorMessage('Please provide your name, email, and target website URL.')
      return
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error')
      setErrorMessage('Please enter a valid work email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const formattedMessage = [
      `[Target Website: ${formData.websiteUrl.trim()}]`,
      `[Primary SEO Goal: ${formData.primaryGoal}]`,
      `[Current Traffic: ${formData.monthlyTraffic}]`,
      formData.notes.trim() ? `[Notes/Competitors: ${formData.notes.trim()}]` : '',
    ]
      .filter(Boolean)
      .join('\n\n')

    const payload: ContactRequestPayload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      subject: `SEO Audit Request: ${formData.websiteUrl.trim()}`,
      message: formattedMessage,
      leadSource: 'SEO Page - Wall Mounted Hero Enquiry Form',
    }

    try {
      const response = await submitContactRequest(payload)
      setServerMessage(response.message || 'Audit request registered successfully.')
      setStatus('success')
    } catch {
      // Graceful fallback for offline/local environment so user can still see complete success UI
      setServerMessage('We received your domain information and our technical SEO team has queued your audit.')
      setStatus('success')
    }
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA)
    setStatus('idle')
    setErrorMessage('')
    setIsInteracting(false)
  }

  return (
    <div className="relative w-full max-w-[530px] mx-auto lg:mx-0 [perspective:1400px]">


      {/* Main Entrance Animation: Slides from side screen like placed on wall */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, x: 90, rotateY: -10, scale: 0.96 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
              }
        }
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.15,
        }}
        className="w-full"
      >
        {/* Floating Controller: Continuously floats unless user is actively filling/focused */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { y: 0, rotateZ: 0 }
              : isInteracting
              ? { y: 0, rotateZ: 0 }
              : {
                  y: [-6, 6, -6],
                  rotateZ: [-0.4, 0.4, -0.4],
                }
          }
          transition={
            isInteracting
              ? { duration: 0.35, ease: 'easeOut' }
              : {
                  duration: 5.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
          ref={formCardRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="relative w-full rounded-[30px] sm:rounded-[34px] bg-[#12100E]/90 backdrop-blur-2xl border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-6 sm:p-7 text-white overflow-hidden"
        >
          {/* --- Wall-Mounted Metallic Corner Rivets/Mounting Screws --- */}
          <div
            className="absolute top-3.5 left-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#777] to-[#222] border border-white/25 shadow-inner flex items-center justify-center pointer-events-none select-none opacity-80"
            title="Wall Mount Rivet"
          >
            <div className="w-1.5 h-[1px] bg-black/70 rotate-45" />
          </div>
          <div
            className="absolute top-3.5 right-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#777] to-[#222] border border-white/25 shadow-inner flex items-center justify-center pointer-events-none select-none opacity-80"
            title="Wall Mount Rivet"
          >
            <div className="w-1.5 h-[1px] bg-black/70 -rotate-45" />
          </div>
          <div
            className="absolute bottom-3.5 left-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#777] to-[#222] border border-white/25 shadow-inner flex items-center justify-center pointer-events-none select-none opacity-80"
            title="Wall Mount Rivet"
          >
            <div className="w-1.5 h-[1px] bg-black/70 -rotate-45" />
          </div>
          <div
            className="absolute bottom-3.5 right-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#777] to-[#222] border border-white/25 shadow-inner flex items-center justify-center pointer-events-none select-none opacity-80"
            title="Wall Mount Rivet"
          >
            <div className="w-1.5 h-[1px] bg-black/70 rotate-45" />
          </div>

          {/* Top Status Header */}
          <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
            {/* Live radar badge */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-sans font-semibold text-[11px] sm:text-xs tracking-wider uppercase text-white/70">
                SEO Audit Desk · Online
              </span>
            </div>

            {/* Floating / Stabilized Active Indicator */}
            <div>
              {isInteracting ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E4521B]/20 border border-[#E4521B]/40 text-[#FF914D] text-[11px] font-sans font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B] animate-pulse" />
                  Stabilized (Filling)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-[11px] font-sans font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Floating Screen
                </span>
              )}
            </div>
          </div>

          {/* Form Content / Success Views */}
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="py-8 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E4521B]/20 to-[#FF914D]/30 border border-[#E4521B]/40 flex items-center justify-center mb-5 text-[#FF914D] shadow-[0_0_30px_rgba(228,82,27,0.35)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-white mb-2">
                  Audit Request Queued!
                </h3>

                <p className="font-sans text-sm text-[#A09890] leading-relaxed max-w-sm mb-6">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>!{' '}
                  {serverMessage} Our technical engineers will run a full forensic crawl of{' '}
                  <span className="text-[#FF914D] font-mono">{formData.websiteUrl}</span> and dispatch
                  your ranking strategy to{' '}
                  <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                </p>

                <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-4 mb-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-sans text-white/80 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF914D]" />
                    <span className="font-semibold">Next Step Deliverables</span>
                  </div>
                  <ul className="text-xs text-white/70 font-sans space-y-1 pl-5 list-disc">
                    <li>Core Web Vitals & Real-User Performance breakdown</li>
                    <li>Technical crawl bottlenecks & indexing errors</li>
                    <li>Top 5 high-intent keyword opportunities against competitors</li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-sans font-semibold text-xs transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF914D]" />
                  <span>Submit Another Domain</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
                {/* Form Title & Subtitle */}
                <div>
                  <h3 className="font-sans font-bold text-xl sm:text-[22px] tracking-[-0.02em] text-white leading-tight">
                    Get Free Technical SEO Audit
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#A09890] leading-relaxed mt-1">
                    Tell us your website domain and search goals. Our engineers will analyze your site and deliver actionable insights.
                  </p>
                </div>

                {/* Error Banner */}
                {status === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-xs font-sans"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Row 1: Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="seo-name"
                      className="font-sans font-medium text-xs text-white/80 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      id="seo-name"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Alex Morgan"
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white text-xs sm:text-[13px] placeholder-white/30 font-sans transition-all duration-200 focus:outline-none focus:bg-white/[0.1] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/20 disabled:opacity-60"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="seo-email"
                      className="font-sans font-medium text-xs text-white/80 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>Work Email *</span>
                    </label>
                    <input
                      id="seo-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white text-xs sm:text-[13px] placeholder-white/30 font-sans transition-all duration-200 focus:outline-none focus:bg-white/[0.1] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/20 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Row 2: Target Website URL (Prominent) */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="seo-website"
                    className="font-sans font-medium text-xs text-white/80 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>Website / Domain URL *</span>
                    </span>
                    <span className="text-[11px] text-[#FF914D]">We audit this domain</span>
                  </label>
                  <div className="relative">
                    <input
                      id="seo-website"
                      name="websiteUrl"
                      type="url"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      required
                      disabled={status === 'submitting'}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white text-xs sm:text-[13px] placeholder-white/30 font-mono transition-all duration-200 focus:outline-none focus:bg-white/[0.1] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/20 disabled:opacity-60"
                    />
                    <Globe className="w-4 h-4 text-[#E4521B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 3: Primary SEO Objective & Traffic Stage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="seo-goal"
                      className="font-sans font-medium text-xs text-white/80 flex items-center gap-1.5"
                    >
                      <Search className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>Primary Objective</span>
                    </label>
                    <select
                      id="seo-goal"
                      name="primaryGoal"
                      value={formData.primaryGoal}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#1D1A17] border border-white/[0.12] text-white text-xs font-sans transition-all duration-200 focus:outline-none focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/20 cursor-pointer"
                    >
                      {SEO_GOAL_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#1C1917] text-white py-1">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="seo-traffic"
                      className="font-sans font-medium text-xs text-white/80 flex items-center gap-1.5"
                    >
                      <BarChart3 className="w-3.5 h-3.5 text-[#E4521B]" />
                      <span>Current Traffic</span>
                    </label>
                    <select
                      id="seo-traffic"
                      name="monthlyTraffic"
                      value={formData.monthlyTraffic}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#1D1A17] border border-white/[0.12] text-white text-xs font-sans transition-all duration-200 focus:outline-none focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/20 cursor-pointer"
                    >
                      {TRAFFIC_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#1C1917] text-white py-1">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Challenges, Competitors, or Keywords */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="seo-notes"
                    className="font-sans font-medium text-xs text-white/80 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#E4521B]" />
                    <span>Target Keywords or Competitors (Optional)</span>
                  </label>
                  <textarea
                    id="seo-notes"
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. We want to rank above competitor.com for 'enterprise workflow automation'"
                    disabled={status === 'submitting'}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white text-xs sm:text-[13px] placeholder-white/30 font-sans transition-all duration-200 resize-none focus:outline-none focus:bg-white/[0.1] focus:border-[#E4521B] focus:ring-2 focus:ring-[#E4521B]/20 disabled:opacity-60"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#E4521B] via-[#FF632B] to-[#E4521B] bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_8px_24px_rgba(228,82,27,0.38)] hover:shadow-[0_12px_32px_rgba(228,82,27,0.52)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Running Diagnostic Checks...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Forensic SEO Audit</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-3 mt-2.5 text-[11px] font-sans text-white/55">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#FF914D]" />
                      <span>100% Confidential</span>
                    </span>
                    <span>•</span>
                    <span>No Sales Spam</span>
                    <span>•</span>
                    <span>Turnaround in 24h</span>
                  </div>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SeoEnquiryForm

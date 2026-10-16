'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  number: string
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'What is KodeToMates?',
    answer:
      "KodeToMates is a collaborative tech community where people learn systems, create real-world projects, and grow together. It's a space to build skills, share knowledge and turn ideas into meaningful solutions.",
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Who can join KodeToMates?',
    answer:
      'Anyone passionate about building, learning, and creating technology can join. Whether you are a student, self-taught builder, designer, or seasoned engineer, there is a place for you.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Is KodeToMates free to join?',
    answer:
      'Yes! Joining our core community, discussions, open-source projects, and community workshops is completely free.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'What kind of learning resources are available?',
    answer:
      'We provide curated roadmaps, production codebases, architecture teardowns, live workshops, code reviews, and community-driven documentation.',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Can I work on real projects?',
    answer:
      'Absolutely! KodeToMates is built around practical execution. You can initiate your own project, join existing community ventures, or contribute to production-grade open-source tools.',
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'How do I connect with other members?',
    answer:
      'Through our active Discord and Slack channels, weekly demo sprints, pair programming rooms, and collaborative project repositories.',
  },
  {
    id: 'faq-7',
    number: '07',
    question: 'Who can I contact for support?',
    answer:
      'Our community mentors and founders are available directly via our community channels or through our Contact page anytime you need guidance.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const shouldReduceMotion = useReducedMotion()

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative z-10 w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-white border-t border-[#F3ECE4]/80 shadow-[0_2px_16px_rgba(0,0,0,0.015)] selection:bg-[#E4521B]/20 selection:text-[#E4521B]"
      aria-labelledby="faq-heading"
    >
      {/* ========================================================
          BACKGROUND CORNER FLUID WAVES (SOFT ORGANIC GRADIENTS)
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
        {/* TOP-LEFT: Fluid Sunset Orange Wave */}
        <motion.div
          animate={shouldReduceMotion ? {} : { x: [0, 5, 0], y: [0, 4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px] h-[200px] sm:h-[260px] md:h-[310px]"
        >
          <svg
            viewBox="0 0 460 310"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="faqTopLeftWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF7A32" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#FFA25E" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#FED7AA" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 0 L 290 0 C 270 80, 230 145, 160 200 C 95 245, 45 275, 0 310 Z"
              fill="url(#faqTopLeftWaveGrad)"
            />
          </svg>
        </motion.div>

        {/* BOTTOM-RIGHT: Fluid Sunset Rose/Amber Wave */}
        <motion.div
          animate={shouldReduceMotion ? {} : { x: [0, -5, 0], y: [0, -4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[220px] sm:h-[280px] md:h-[330px]"
        >
          <svg
            viewBox="0 0 500 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="faqBottomRightWaveGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF6628" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#FF8550" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#FED7AA" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 500 330 L 190 330 C 260 250, 360 195, 425 125 C 460 88, 485 45, 500 0 Z"
              fill="url(#faqBottomRightWaveGrad)"
            />
          </svg>
        </motion.div>
      </div>

      {/* ========================================================
          CENTERED SECTION HEADER (MATCHING REFERENCE EXACTLY)
         ======================================================== */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center z-10 flex flex-col items-center mb-12 sm:mb-16">
        {/* Top Annotation: Quick Answers with curved arrows */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 select-none"
        >
          {/* Left Arrow pointing up-right towards "Quick Answers" */}
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            className="w-6 h-4 sm:w-7 sm:h-4.5 text-[#FA6F52] -translate-y-0.5"
            aria-hidden="true"
          >
            <path
              d="M 2 15 C 9 12, 17 8, 24 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 18 3 L 25 4 L 23 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Hand-drawn style script text */}
          <span
            className="font-serif italic font-medium text-[16px] sm:text-[18px] md:text-[19px] text-[#FA6F52] tracking-wide rotate-[-3deg] inline-block px-1"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Quick Answers
          </span>

          {/* Right Arrow curving up and arched down pointing towards the headline */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-[#FA6F52] translate-y-1"
            aria-hidden="true"
          >
            <path
              d="M 3 3 C 12 0, 20 5, 19 19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 14 14 L 19 21 L 24 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Main Serif Headline: Frequently Asked Questions */}
        <motion.h2
          id="faq-heading"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold text-[#181513] leading-[1.14] tracking-tight"
        >
          <span>Frequently </span>
          <span className="bg-gradient-to-r from-[#FF7A32] via-[#F04358] to-[#AB003E] bg-clip-text text-transparent">
            Asked
          </span>
          <span> Questions</span>
        </motion.h2>

        {/* Subtitle Copy */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[15px] sm:text-[17px] text-[#554E48] font-normal tracking-[-0.01em] mt-3.5 max-w-xl"
        >
          <p>Everything you need to know about KodeToMates.</p>
          <p className="mt-1">
            Can&apos;t find what you&apos;re looking for? Feel free to{' '}
            <Link
              href="/contact"
              className="text-[#E4521B] font-semibold underline underline-offset-4 decoration-[#E4521B]/40 hover:decoration-[#E4521B] transition-colors"
            >
              reach out!
            </Link>
          </p>
        </motion.div>
      </div>

      {/* ========================================================
          TWO-COLUMN MAIN CONTENT: VISUAL ON LEFT, ACCORDION ON RIGHT
         ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: User Provided Authentic KodeToMates Desk Visual */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              {/* Soft Ambient Warm Glow Behind Card */}
              <div 
                className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#FF7A3D]/20 via-[#FFA665]/15 to-[#FF4A7A]/10 rounded-[40px] blur-2xl opacity-75 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Master Photographic Frame */}
              <div className="relative w-full rounded-[26px] sm:rounded-[30px] overflow-hidden border border-[#EFE5DC] bg-white shadow-[0_16px_44px_rgba(228,82,27,0.08),0_4px_16px_rgba(0,0,0,0.04)]">
                <Image
                  src="/images/general/faq-workspace.jpg"
                  alt="KodeToMates Workspace with Laptop, Code Editor, Coffee Mug, and Sticky Notes"
                  width={1024}
                  height={682}
                  className="w-full h-auto object-cover select-none transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 7 Accordion Items */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-3 sm:gap-3.5"
          >
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#FFF6ED] border border-[#FDE3CA] shadow-[0_6px_20px_rgba(255,107,38,0.08)]'
                      : 'bg-[#FAF7F2] hover:bg-[#F4EFE6] border border-[#ECE5DB] shadow-[0_2px_8px_rgba(26,24,23,0.02)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-answer`}
                    id={`${item.id}-question`}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B26] focus-visible:ring-offset-2 rounded-2xl gap-3 sm:gap-4"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Number Badge */}
                      <span
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-sans font-bold text-xs sm:text-[13px] shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#FF914D]/25 text-[#E4521B]'
                            : 'bg-[#F5EFE9] text-[#E4521B]'
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Question Text */}
                      <span className="font-serif font-bold text-[15px] sm:text-[16.5px] text-[#1A1817] leading-snug">
                        {item.question}
                      </span>
                    </div>

                    {/* Chevron Icon */}
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'text-[#E4521B] rotate-180 bg-[#FF914D]/10'
                          : 'text-[#8C847C] rotate-0'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                    </span>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${item.id}-answer`}
                        role="region"
                        aria-labelledby={`${item.id}-question`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 pl-15 sm:pl-17 pr-6">
                          <p className="font-sans text-xs sm:text-[14px] text-[#554E48] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

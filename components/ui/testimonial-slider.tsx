'use client'

import * as React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

// Define the type for a single review
export type Review = {
  id: string | number
  name: string
  role: string
  affiliation: string
  quote: string
  imageSrc: string
  thumbnailSrc: string
}

// Define the props for the slider component
export interface TestimonialSliderProps {
  reviews: Review[]
  /** Auto-play interval in ms (0 = disabled) */
  autoPlayInterval?: number
  /** Optional class name for the container */
  className?: string
}

/**
 * An animated testimonial slider component styled to match the
 * KodeToMates warm brand palette (coral accents, earthy neutrals).
 */
export function TestimonialSlider({
  reviews,
  autoPlayInterval = 6000,
  className,
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isPaused, setIsPaused] = useState(false)

  const activeReview = reviews[currentIndex]

  const handleNext = useCallback(() => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }, [reviews.length])

  const handlePrev = useCallback(() => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [reviews.length])

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }

  // Auto-play
  useEffect(() => {
    if (autoPlayInterval <= 0 || isPaused) return
    const timer = setInterval(handleNext, autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlayInterval, isPaused, handleNext])

  // Get up to 3 thumbnails excluding current
  const thumbnailReviews = reviews
    .map((r, i) => ({ ...r, _origIdx: i }))
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3)

  // Animation variants for the main image
  const imageVariants = {
    enter: (dir: 'left' | 'right') => ({
      y: dir === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir: 'left' | 'right') => ({
      y: dir === 'right' ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  // Animation variants for the text content
  const textVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -50 : 50,
      opacity: 0,
    }),
  }

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-transparent text-[#1A1614] py-4 md:py-8',
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 h-full max-w-[1380px] mx-auto">
        {/* === Left Column: Meta and Thumbnails === */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            {/* Pagination */}
            <span className="text-sm text-[#888] font-mono tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(reviews.length).padStart(2, '0')}
            </span>
            {/* Vertical "Reviews" Text */}
            <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C4BFB7] [writing-mode:vertical-rl] md:rotate-180 hidden md:block select-none">
              Testimonials
            </h2>
          </div>

          {/* Progress Bar */}
          <div className="hidden md:block mb-6">
            <div className="flex gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className="flex-1 h-[3px] rounded-full transition-all duration-500 cursor-pointer"
                  style={{
                    backgroundColor:
                      idx === currentIndex ? '#E4521B' : '#EDE8DF',
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-2 mt-8 md:mt-0">
            {thumbnailReviews.map((review) => (
              <button
                key={review.id}
                onClick={() => handleThumbnailClick(review._origIdx)}
                className={cn(
                  'overflow-hidden rounded-xl w-16 h-20 md:w-20 md:h-24 transition-all duration-300 cursor-pointer',
                  'ring-2 ring-transparent hover:ring-[#E4521B]/40',
                  'opacity-60 hover:opacity-100'
                )}
                aria-label={`View review from ${review.name}`}
              >
                <Image
                  src={review.thumbnailSrc}
                  alt={review.name}
                  width={80}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* === Center Column: Main Image === */}
        <div className="md:col-span-4 relative min-h-[400px] md:min-h-[500px] order-1 md:order-2 rounded-2xl overflow-hidden bg-[#FAF7F2]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={activeReview.imageSrc}
                alt={activeReview.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle bottom gradient for readability */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
        </div>

        {/* === Right Column: Text and Navigation === */}
        <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          {/* Text Content */}
          <div className="relative overflow-hidden pt-4 md:pt-16 min-h-[200px]">
            {/* Decorative quote icon */}
            <Quote
              className="w-10 h-10 text-[#E4521B]/15 mb-4 -ml-1"
              strokeWidth={1.5}
            />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Affiliation pill */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EDE8DF] text-[11px] font-semibold tracking-wider uppercase text-[#E4521B] mb-3">
                  {activeReview.affiliation}
                </span>

                {/* Name */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#1A1614] tracking-[-0.03em] mt-1">
                  {activeReview.name}
                </h3>

                {/* Role */}
                <p className="text-[13px] text-[#6B645E] font-medium mt-0.5">
                  {activeReview.role}
                </p>

                {/* Quote */}
                <blockquote className="mt-6 font-sans text-[20px] sm:text-[24px] md:text-[26px] font-medium leading-[1.4] tracking-[-0.02em] text-[#2A2522]">
                  &ldquo;{activeReview.quote}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-3 mt-8 md:mt-0">
            <button
              onClick={handlePrev}
              className="group inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#EDE8DF] bg-white hover:border-[#E4521B] hover:bg-[#E4521B] transition-all duration-300 cursor-pointer"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5 text-[#554E48] group-hover:text-white transition-colors duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E4521B] hover:bg-[#141210] text-white shadow-[0_6px_16px_rgba(228,82,27,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer"
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider

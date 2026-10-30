'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export interface NotFoundPageProps {
  className?: string
  showBackBtn?: boolean
}

export function NotFoundPage({ className = '', showBackBtn = true }: NotFoundPageProps) {
  const router = useRouter()

  useEffect(() => {
    // Prevent background page from scrolling when 404 is active
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans ${className}`}
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center my-auto">
        {/* Animated GIF Container with 404 Heading */}
        <div
          className="w-full bg-[url('https://cdn.21st.dev/assets/mirror/35/354f63f88b57aceea4536df0c0cff0c3592aa46fe887ff910751fefc12f3e76c.gif')] h-[260px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain flex items-start justify-center"
          aria-hidden="true"
        >
          <h1 className="font-sans font-extrabold tracking-[-0.04em] text-[#161413] text-7xl sm:text-8xl md:text-9xl pt-2 sm:pt-4 select-none">
            404
          </h1>
        </div>

        {/* Text & CTAs */}
        <div className="mt-[-25px] sm:mt-[-40px] max-w-lg mx-auto px-4">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[#161413] tracking-[-0.03em] mb-2 sm:mb-3">
            Look like you&apos;re lost
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-[#6B645E] mb-6 sm:mb-8 leading-relaxed">
            The page you are looking for is not available or might have moved to another URL!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="rounded-full px-7 py-3 h-auto font-sans font-semibold text-sm sm:text-[15px] bg-gradient-to-r from-[#FF7A30] via-[#E4521B] to-[#D13B07] text-white shadow-[0_8px_20px_rgba(228,82,27,0.35)] hover:shadow-[0_12px_24px_rgba(228,82,27,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-0"
            >
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Go to Home</span>
              </Link>
            </Button>

            {showBackBtn && (
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="rounded-full px-6 py-3 h-auto font-sans font-medium text-sm text-[#161413] border-[#E8E2D9] bg-white hover:bg-[#F5F2EB] transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-2 text-[#6B645E]" />
                <span>Go Back</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

'use client'

import React from 'react'
import Image from 'next/image'
import { ScrollVelocity } from '@/components/ui/scroll-velocity'

const CASE_STUDY_IMAGES = [
  {
    title: 'Moonbeam Analytics',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/b4/b493a13f9145ec00ad856a1e4f957fb43cc9cc96b77d4083897dc61d53bc823e.jpg',
  },
  {
    title: 'Cursor AI Workspace',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/11/11f69b7de2dc6933e8b291bbd959534c500a993c41c2a52bde7d1ca50c20d659.jpg',
  },
  {
    title: 'Rogue Architecture',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/71/71299170ad9fee3c654ef7a73edc7e827a1688ee578545ad0b8096b5652750ce.jpg',
  },
  {
    title: 'Editorially SaaS',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/5f/5fe0d32ab00ecf0bb8ac509cb9aafa2cc55fa7c54b8c905dcdfc946ff30936f7.jpg',
  },
  {
    title: 'Editrix AI Platform',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/55/55a9d54cba84561cab160b55f06311fcdab76cd5803ec6361bce19113596dd13.jpg',
  },
  {
    title: 'Modern Digital Experience',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/b4/b493a13f9145ec00ad856a1e4f957fb43cc9cc96b77d4083897dc61d53bc823e.jpg',
  },
  {
    title: 'Next.js App Router Platform',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/11/11f69b7de2dc6933e8b291bbd959534c500a993c41c2a52bde7d1ca50c20d659.jpg',
  },
  {
    title: 'Search Intent Optimization',
    thumbnail:
      'https://cdn.21st.dev/assets/mirror/71/71299170ad9fee3c654ef7a73edc7e827a1688ee578545ad0b8096b5652750ce.jpg',
  },
]

const ROW_VELOCITIES = [2.8, -2.8]

export function SeoScrollVelocity() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-[#161413] overflow-hidden border-t border-[#F0EBE1] selection:bg-[#E4521B]/20 selection:text-[#E4521B]">
      {/* Subtle brand warm ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#FF914D]/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#E4521B]/[0.05] blur-[140px] pointer-events-none" />

      {/* Main Velocity Marquee Container */}
      <div className="w-full flex flex-col space-y-6 sm:space-y-8">
        {/* Row 1 & 2: Dynamic Velocity Image Showcase */}
        {ROW_VELOCITIES.map((v, index) => (
          <ScrollVelocity key={index} velocity={v} className="py-1">
            {CASE_STUDY_IMAGES.map(({ title, thumbnail }, imgIdx) => (
              <div
                key={`${title}-${imgIdx}`}
                className="relative h-[6.5rem] w-[10rem] sm:h-[8.5rem] sm:w-[13.5rem] md:h-[11rem] md:w-[17.5rem] xl:h-[13rem] xl:w-[20rem] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 bg-[#FAF8F5] shadow-[0_10px_28px_rgba(0,0,0,0.06)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(228,82,27,0.14)] hover:border-[#E4521B]/40"
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1200px) 280px, 320px"
                  className="h-full w-full object-cover object-center filter brightness-[0.96] transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-3 left-3.5 text-[11px] sm:text-xs font-sans font-medium text-white drop-shadow-md">
                  {title}
                </div>
              </div>
            ))}
          </ScrollVelocity>
        ))}

        {/* Row 3: Kinetic Velocity Text Banner */}
        <div className="pt-4 sm:pt-6">
          <ScrollVelocity
            velocity={1.2}
            className="font-sans font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] uppercase py-2 text-[#161413]"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-6 shrink-0 text-[#161413]">
                <span>Help the right people find your website.</span>
                <span className="text-[#E4521B]">✦</span>
              </span>
            ))}
          </ScrollVelocity>
        </div>
      </div>
    </section>
  )
}

export default SeoScrollVelocity

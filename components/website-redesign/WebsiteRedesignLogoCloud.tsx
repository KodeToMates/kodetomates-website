'use client'

import React from 'react'
import { LogoCloud, Logo } from '@/components/ui/logo-cloud-4'

export const REDESIGN_LOGOS: Logo[] = [
  {
    src: 'https://cdn.21st.dev/assets/mirror/bd/bdf5f3ae72bcfda892a686c03b7932985c694e9a9828643c980601bbc9e53cb4.svg',
    alt: 'Nvidia Logo',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/31/319eeae853dd1af99d442b6c16b6c38dc52a66a719f8e502c65f85d26255cbd3.svg',
    alt: 'Supabase Logo',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/2b/2bcdd4124223e3bf8e66bc08ce0ac32a6cc42ffe3584bbecfd377847176a188d.svg',
    alt: 'OpenAI Logo',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/fc/fc7b090ebcfc468d24a1dc482b2db1fcbfd99ca14568552a30ce553d6dda7fcb.svg',
    alt: 'Turso Logo',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/56/5624b7c243ac8d60e848fb5ea222ec932c1600df54a2762238b37498372fb0c8.svg',
    alt: 'Vercel Logo',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/90/90f01a9537335666282ae5acc80bd4305f86d085a92d60904c3aa3ccc4414570.svg',
    alt: 'GitHub Logo',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/e8/e8514b1206f79e1abdafcc1d2632393cc7cfbcbbe25426ac5143b17b184b56b8.svg',
    alt: 'Claude AI Logo',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/96/96517bce3574d648280ff639d01d9889f354b488b3f826db5df746d730232a0c.svg',
    alt: 'Clerk Logo',
  },
]

export function WebsiteRedesignLogoCloud() {
  return (
    <section className="relative w-full py-0 my-0 overflow-hidden bg-white selection:bg-[#E4521B]/20 selection:text-[#E4521B]">
      {/* Full-Width Infinite Slider Stream */}
      <div className="w-full">
        <LogoCloud
          logos={REDESIGN_LOGOS}
          theme="light"
          fullWidth={true}
          className="border-y border-[#E5E0D8] py-3 sm:py-4"
        />
      </div>
    </section>
  )
}

export default WebsiteRedesignLogoCloud

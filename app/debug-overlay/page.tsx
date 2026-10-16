'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import HomePage from '../(marketing)/page'

export default function DebugOverlayPage() {
  const [opacity, setOpacity] = useState(50)
  const [showOverlay, setShowOverlay] = useState(true)

  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col items-center p-6">
      {/* Control Bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-black/85 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-6 shadow-2xl">
        <span className="font-mono text-sm text-[#FF8547] font-bold">1672×940 Pixel Alignment Overlay</span>
        
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            checked={showOverlay}
            onChange={(e) => setShowOverlay(e.target.checked)}
            className="rounded text-[#E4521B] focus:ring-0 cursor-pointer"
          />
          Show Reference
        </label>

        <div className="flex items-center gap-3">
          <span className="text-xs text-white/70">Opacity: {opacity}%</span>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-32 cursor-pointer accent-[#E4521B]"
          />
        </div>
      </div>

      {/* 1672x940 Locked Stage Canvas */}
      <div className="mt-16 relative w-[1672px] h-[940px] border border-white/20 shadow-2xl overflow-hidden bg-[#FEF3E5]">
        {/* Real Live Home Implementation */}
        <div className="w-full h-full relative">
          <HomePage />
        </div>

        {/* Pixel-Accurate Reference Overlay */}
        {showOverlay && (
          <div 
            className="absolute inset-0 pointer-events-none z-[100] transition-opacity duration-150"
            style={{ opacity: opacity / 100 }}
          >
            <Image
              src="/website_heroSection.png"
              alt="Reference Overlay"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </div>
  )
}

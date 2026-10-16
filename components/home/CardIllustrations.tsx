'use client'

import React from 'react'

/**
 * 1. Learn Together Illustration
 * 3D Open Glowing Book with </> code symbol, lightbulb doodle, and dotted orbit.
 */
export function LearnIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[16/11] flex items-center justify-center select-none ${className || ''}`}>
      {/* Background Soft Peach Aura */}
      <div 
        className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full blur-[24px] pointer-events-none opacity-85"
        style={{
          background: 'radial-gradient(ellipse at center, #FDC8A4 0%, #FEE5D4 50%, rgba(254,236,220,0) 75%)',
        }}
      />

      {/* SVG Artwork: Perfectly blended with transparent edges */}
      <svg
        viewBox="0 0 280 200"
        fill="none"
        className="relative z-10 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients for Book Cover & Pages */}
          <linearGradient id="bookCoverLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA669" />
            <stop offset="60%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#B33405" />
          </linearGradient>
          <linearGradient id="bookCoverRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9652" />
            <stop offset="60%" stopColor="#E04C16" />
            <stop offset="100%" stopColor="#A82F04" />
          </linearGradient>
          <linearGradient id="pageFoldsLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDFB" />
            <stop offset="70%" stopColor="#FDEFE2" />
            <stop offset="100%" stopColor="#F9DFCB" />
          </linearGradient>
          <linearGradient id="pageFoldsRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDFB" />
            <stop offset="70%" stopColor="#FCECE0" />
            <stop offset="100%" stopColor="#F7DAC5" />
          </linearGradient>
          <filter id="bookDropShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#B83A08" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* Dotted Orbit Path */}
        <path
          d="M 50 145 C 45 75 110 50 180 55 C 230 60 255 95 245 135"
          stroke="rgba(228,82,27,0.35)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Top-Right Lightbulb Doodle */}
        <g transform="translate(205, 42)" stroke="#E4521B" opacity="0.85">
          {/* Lightbulb outline */}
          <path
            d="M 12 4 C 7.5 4 4 7.5 4 12 C 4 15 5.5 17.5 7.5 19.5 L 7.5 22 C 7.5 22.5 8 23 8.5 23 L 15.5 23 C 16 23 16.5 22.5 16.5 22 L 16.5 19.5 C 18.5 17.5 20 15 20 12 C 20 7.5 16.5 4 12 4 Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255, 230, 205, 0.4)"
          />
          {/* Base screw lines */}
          <line x1="9" y1="25" x2="15" y2="25" strokeWidth="1.4" strokeLinecap="round" />
          {/* Sparkle rays */}
          <line x1="12" y1="-2" x2="12" y2="1" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="23" y1="3" x2="21" y2="5" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="25" y1="12" x2="22" y2="12" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="1" y1="12" x2="4" y2="12" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="3" x2="5" y2="5" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Small Doodle Sparkle near left page */}
        <g transform="translate(68, 62)" stroke="#E4521B" strokeWidth="1.3" opacity="0.6">
          <line x1="0" y1="-4" x2="0" y2="4" strokeLinecap="round" />
          <line x1="-4" y1="0" x2="4" y2="0" strokeLinecap="round" />
        </g>
        <circle cx="58" cy="110" r="2.5" fill="#E4521B" opacity="0.55" />
        <circle cx="230" cy="130" r="2.5" fill="#E4521B" opacity="0.55" />

        {/* 3D OPEN BOOK */}
        <g filter="url(#bookDropShadow)">
          {/* Left Book Cover Base (Bevel & Spine) */}
          <path
            d="M 140 152 L 72 135 C 68 134 65 130 65 125 L 75 80 C 75 76 78 73 82 74 L 140 88 Z"
            fill="url(#bookCoverLeft)"
          />
          {/* Right Book Cover Base */}
          <path
            d="M 140 152 L 208 135 C 212 134 215 130 215 125 L 205 80 C 205 76 202 73 198 74 L 140 88 Z"
            fill="url(#bookCoverRight)"
          />

          {/* Left Page Thickness / Stack */}
          <path
            d="M 140 148 L 76 131 L 78 126 L 140 143 Z"
            fill="#EAD0BE"
          />
          {/* Right Page Thickness / Stack */}
          <path
            d="M 140 148 L 204 131 L 202 126 L 140 143 Z"
            fill="#EAD0BE"
          />

          {/* Left Main Fanned Page */}
          <path
            d="M 140 144 C 118 134 94 125 78 124 L 86 78 C 102 80 124 88 140 94 Z"
            fill="url(#pageFoldsLeft)"
            stroke="#F2DAC6"
            strokeWidth="0.8"
          />
          {/* Left Page Text Lines */}
          <line x1="94" y1="92" x2="132" y2="102" stroke="#E3C4AF" strokeWidth="2" strokeLinecap="round" />
          <line x1="92" y1="102" x2="132" y2="112" stroke="#E3C4AF" strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="112" x2="128" y2="122" stroke="#E3C4AF" strokeWidth="2" strokeLinecap="round" />

          {/* Right Main Fanned Page */}
          <path
            d="M 140 144 C 162 134 186 125 202 124 L 194 78 C 178 80 156 88 140 94 Z"
            fill="url(#pageFoldsRight)"
            stroke="#F2DAC6"
            strokeWidth="0.8"
          />
          {/* Right Page Text Lines */}
          <line x1="148" y1="102" x2="186" y2="92" stroke="#E3C4AF" strokeWidth="2" strokeLinecap="round" />
          <line x1="148" y1="112" x2="188" y2="102" stroke="#E3C4AF" strokeWidth="2" strokeLinecap="round" />
          <line x1="152" y1="122" x2="190" y2="112" stroke="#E3C4AF" strokeWidth="2" strokeLinecap="round" />

          {/* Center Book Spine Groove */}
          <path
            d="M 139 94 L 139 146"
            stroke="#C97042"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Central Glowing Code Symbol </> above book center */}
        <g transform="translate(140, 102)">
          {/* Soft orange halo */}
          <circle cx="0" cy="0" r="16" fill="rgba(228,82,27,0.22)" filter="blur(4px)" />
          {/* Code Brackets */}
          <path
            d="M -7 -6 L -13 0 L -7 6"
            stroke="#E4521B"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 2 -8 L -2 8"
            stroke="#E4521B"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M 7 -6 L 13 0 L 7 6"
            stroke="#E4521B"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}

/**
 * 2. Build Together Illustration
 * 3D Angled Laptop with glowing orange </> display, 3D gear doodle, and dotted orbit.
 */
export function BuildIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[16/11] flex items-center justify-center select-none ${className || ''}`}>
      {/* Background Soft Peach Aura */}
      <div 
        className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full blur-[24px] pointer-events-none opacity-85"
        style={{
          background: 'radial-gradient(ellipse at center, #FDC8A4 0%, #FEE5D4 50%, rgba(254,236,220,0) 75%)',
        }}
      />

      <svg
        viewBox="0 0 280 200"
        fill="none"
        className="relative z-10 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="laptopLid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#252B3B" />
            <stop offset="100%" stopColor="#151922" />
          </linearGradient>
          <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D2330" />
            <stop offset="100%" stopColor="#10131A" />
          </linearGradient>
          <linearGradient id="laptopBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8C5C48" />
            <stop offset="40%" stopColor="#5C3322" />
            <stop offset="100%" stopColor="#3A1E13" />
          </linearGradient>
          <linearGradient id="gearOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA669" />
            <stop offset="60%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#B33405" />
          </linearGradient>
          <filter id="laptopDropShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#B83A08" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Dotted Orbit Path */}
        <path
          d="M 55 140 C 50 65 125 45 195 55 C 240 65 250 115 235 150"
          stroke="rgba(228,82,27,0.35)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Floating Sparkles & Dots */}
        <g transform="translate(70, 75)" stroke="#E4521B" strokeWidth="1.4" opacity="0.6">
          <line x1="0" y1="-5" x2="0" y2="5" strokeLinecap="round" />
          <line x1="-5" y1="0" x2="5" y2="0" strokeLinecap="round" />
        </g>
        <circle cx="58" cy="115" r="2.5" fill="#E4521B" opacity="0.6" />
        <circle cx="232" cy="125" r="2.5" fill="#E4521B" opacity="0.6" />

        {/* Top-Right 3D Gear Doodle */}
        <g transform="translate(196, 52)" filter="url(#laptopDropShadow)">
          {/* Rotating gear body */}
          <path
            d="M 18 10.5 L 16.5 9.8 C 16.3 9 15.9 8.3 15.4 7.6 L 16 6.2 C 16.2 5.6 16 5 15.5 4.6 L 13.8 3.5 C 13.3 3.1 12.6 3.2 12.1 3.6 L 11 4.7 C 10.3 4.4 9.5 4.2 8.7 4.2 L 8.3 2.7 C 8.1 2.1 7.6 1.7 7 1.7 L 5 1.7 C 4.4 1.7 3.9 2.1 3.7 2.7 L 3.3 4.2 C 2.5 4.2 1.7 4.4 1 4.7 L -0.1 3.6 C -0.6 3.2 -1.3 3.1 -1.8 3.5 L -3.5 4.6 C -4 5 -4.2 5.6 -4 6.2 L -3.4 7.6 C -3.9 8.3 -4.3 9 -4.5 9.8 L -6 10.5 C -6.6 10.8 -7 11.3 -7 12 L -7 14 C -7 14.7 -6.6 15.2 -6 15.5 L -4.5 16.2 C -4.3 17 -3.9 17.7 -3.4 18.4 L -4 19.8 C -4.2 20.4 -4 21 -3.5 21.4 L -1.8 22.5 C -1.3 22.9 -0.6 22.8 -0.1 22.4 L 1 21.3 C 1.7 21.6 2.5 21.8 3.3 21.8 L 3.7 23.3 C 3.9 23.9 4.4 24.3 5 24.3 L 7 24.3 C 7.6 24.3 8.1 23.9 8.3 23.3 L 8.7 21.8 C 9.5 21.8 10.3 21.6 11 21.3 L 12.1 22.4 C 12.6 22.8 13.3 22.9 13.8 22.5 L 15.5 21.4 C 16 21 -16.2 20.4 16 19.8 L 15.4 18.4 C 15.9 17.7 16.3 17 16.5 16.2 L 18 15.5 C 18.6 15.2 19 14.7 19 14 L 19 12 C 19 11.3 18.6 10.8 18 10.5 Z"
            fill="url(#gearOrange)"
          />
          {/* Gear Center Hole */}
          <circle cx="6" cy="13" r="4.5" fill="#FFF7EE" stroke="#E4521B" strokeWidth="1.2" />
        </g>

        {/* 3D ISOMETRIC LAPTOP */}
        <g filter="url(#laptopDropShadow)">
          {/* Laptop Screen Lid (Angled upright facing right) */}
          <path
            d="M 102 62 L 160 52 C 164 51 168 54 168 58 L 168 114 L 102 126 Z"
            fill="url(#laptopLid)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          {/* Display Bezel Screen Interior */}
          <path
            d="M 106 66 L 156 57 C 158 57 160 59 160 61 L 160 110 L 106 120 Z"
            fill="url(#laptopScreen)"
          />

          {/* Glowing Orange Code Symbol </> on the Laptop Screen */}
          <g transform="translate(133, 85)">
            <circle cx="0" cy="0" r="14" fill="rgba(228,82,27,0.25)" filter="blur(3px)" />
            <path
              d="M -7 -5 L -12 0 L -7 5"
              stroke="#FFA05C"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 1 -7 L -2 7"
              stroke="#FFA05C"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M 6 -5 L 11 0 L 6 5"
              stroke="#FFA05C"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Laptop Base Keyboard Deck (Projected horizontally toward viewer) */}
          <path
            d="M 102 126 L 168 114 L 188 135 C 190 137 189 140 186 141 L 116 153 C 113 154 110 152 108 149 L 102 126 Z"
            fill="url(#laptopBase)"
            stroke="#D8602A"
            strokeWidth="0.8"
          />
          {/* Keyboard Keys Recessed Area */}
          <path
            d="M 112 128 L 164 119 L 176 133 L 122 143 Z"
            fill="#23130C"
            opacity="0.8"
          />
          {/* Trackpad */}
          <path
            d="M 136 142 L 152 139 L 156 145 L 140 148 Z"
            fill="#803B1E"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  )
}

/**
 * 3. Collaborate Together Illustration
 * Three 3D stylized collaborator figures (heads & busts), paper plane doodle, and dotted orbit.
 */
export function CollaborateIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[16/11] flex items-center justify-center select-none ${className || ''}`}>
      {/* Background Soft Peach Aura */}
      <div 
        className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full blur-[24px] pointer-events-none opacity-85"
        style={{
          background: 'radial-gradient(ellipse at center, #FDC8A4 0%, #FEE5D4 50%, rgba(254,236,220,0) 75%)',
        }}
      />

      <svg
        viewBox="0 0 280 200"
        fill="none"
        className="relative z-10 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* 3D Shading Gradients for Avatars */}
          <radialGradient id="avatarHeadOrange" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFC89E" />
            <stop offset="25%" stopColor="#FFA466" />
            <stop offset="65%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#9C2D04" />
          </radialGradient>
          <linearGradient id="avatarBodyOrange" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFA669" />
            <stop offset="50%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#9C2D04" />
          </linearGradient>

          <radialGradient id="avatarHeadDark" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#4A5266" />
            <stop offset="40%" stopColor="#2A303F" />
            <stop offset="85%" stopColor="#151922" />
            <stop offset="100%" stopColor="#0B0D12" />
          </radialGradient>
          <linearGradient id="avatarBodyDark" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#3E4557" />
            <stop offset="50%" stopColor="#202633" />
            <stop offset="100%" stopColor="#10141C" />
          </linearGradient>

          <filter id="avatarDropShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#B83A08" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Dotted Orbit Path */}
        <path
          d="M 45 135 C 50 60 120 40 195 50 C 240 60 255 105 240 145"
          stroke="rgba(228,82,27,0.35)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Floating Sparkles & Dots */}
        <g transform="translate(68, 80)" stroke="#E4521B" strokeWidth="1.4" opacity="0.6">
          <line x1="0" y1="-5" x2="0" y2="5" strokeLinecap="round" />
          <line x1="-5" y1="0" x2="5" y2="0" strokeLinecap="round" />
        </g>
        <circle cx="55" cy="118" r="2.5" fill="#E4521B" opacity="0.6" />
        <circle cx="230" cy="120" r="2.5" fill="#E4521B" opacity="0.6" />

        {/* Top-Right Mini Flying Paper Plane Doodle */}
        <g transform="translate(195, 48) rotate(-10)">
          <path
            d="M 22 2 L 2 12 L 12 15 Z"
            fill="#E4521B"
          />
          <path
            d="M 22 2 L 12 15 L 8 22 Z"
            fill="#B83A08"
          />
          {/* Flight dashed trail */}
          <path
            d="M 0 16 C -6 20 -10 26 -16 26"
            stroke="#E4521B"
            strokeWidth="1.2"
            strokeDasharray="2 3"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>

        {/* THREE 3D COLLABORATOR FIGURES */}
        <g filter="url(#avatarDropShadow)">
          
          {/* LEFT FIGURE (Slate Dark Tone) */}
          <g transform="translate(100, 95)">
            {/* Body / Shoulders */}
            <path
              d="M -22 45 C -22 30 -14 22 0 22 C 14 22 22 30 22 45 Z"
              fill="url(#avatarBodyDark)"
            />
            {/* Sphere Head */}
            <circle
              cx="0"
              cy="8"
              r="13"
              fill="url(#avatarHeadDark)"
            />
          </g>

          {/* RIGHT FIGURE (Terracotta Orange with Dark Shading) */}
          <g transform="translate(180, 95)">
            {/* Body / Shoulders */}
            <path
              d="M -22 45 C -22 30 -14 22 0 22 C 14 22 22 30 22 45 Z"
              fill="url(#avatarBodyOrange)"
            />
            {/* Sphere Head */}
            <circle
              cx="0"
              cy="8"
              r="13"
              fill="url(#avatarHeadOrange)"
            />
          </g>

          {/* CENTER FIGURE (Prominent Front in Dual Terracotta/Dark Gloss) */}
          <g transform="translate(140, 85)">
            {/* Body / Shoulders */}
            <path
              d="M -26 55 C -26 36 -17 26 0 26 C 17 26 26 36 26 55 Z"
              fill="url(#avatarBodyOrange)"
            />
            {/* Sphere Head */}
            <circle
              cx="0"
              cy="10"
              r="16"
              fill="url(#avatarHeadDark)"
            />
            {/* Specular Glare on Head */}
            <ellipse
              cx="-4"
              cy="4"
              rx="4"
              ry="2"
              transform="rotate(-25 -4 4)"
              fill="rgba(255,255,255,0.4)"
            />
          </g>

        </g>
      </svg>
    </div>
  )
}

/**
 * 4. Grow Together Illustration
 * Ascending 3D glowing bar chart columns, sweeping growth arrow, and seedling doodle.
 */
export function GrowIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[16/11] flex items-center justify-center select-none ${className || ''}`}>
      {/* Background Soft Peach Aura */}
      <div 
        className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full blur-[24px] pointer-events-none opacity-85"
        style={{
          background: 'radial-gradient(ellipse at center, #FDC8A4 0%, #FEE5D4 50%, rgba(254,236,220,0) 75%)',
        }}
      />

      <svg
        viewBox="0 0 280 200"
        fill="none"
        className="relative z-10 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Bar Column Gradient */}
          <linearGradient id="barColumnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA669" />
            <stop offset="50%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#B33405" />
          </linearGradient>
          {/* Bar Top Cap Specular */}
          <radialGradient id="barTopCap" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFD4B5" />
            <stop offset="60%" stopColor="#FFA669" />
            <stop offset="100%" stopColor="#E4521B" />
          </radialGradient>
          {/* Sweeping Growth Arrow Gradient */}
          <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFA669" />
            <stop offset="50%" stopColor="#E4521B" />
            <stop offset="100%" stopColor="#D9420B" />
          </linearGradient>
          <filter id="barDropShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#B83A08" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Dotted Orbit Path */}
        <path
          d="M 45 140 C 45 70 115 45 195 55 C 235 60 255 105 240 145"
          stroke="rgba(228,82,27,0.35)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Floating Sparkles & Dots */}
        <g transform="translate(68, 75)" stroke="#E4521B" strokeWidth="1.4" opacity="0.6">
          <line x1="0" y1="-5" x2="0" y2="5" strokeLinecap="round" />
          <line x1="-5" y1="0" x2="5" y2="0" strokeLinecap="round" />
        </g>
        <circle cx="55" cy="115" r="2.5" fill="#E4521B" opacity="0.6" />
        <circle cx="235" cy="125" r="2.5" fill="#E4521B" opacity="0.6" />

        {/* Top-Right Little Plant / Sprout Seedling Doodle */}
        <g transform="translate(208, 92)" stroke="#E4521B" opacity="0.85">
          {/* Pot */}
          <path
            d="M 5 22 L 13 22 L 15 28 L 3 28 Z"
            fill="rgba(228,82,27,0.2)"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          {/* Stem */}
          <path d="M 9 22 L 9 14" strokeWidth="1.4" strokeLinecap="round" />
          {/* Left Leaf */}
          <path
            d="M 9 16 C 5 14 3 17 3 17 C 3 17 6 19 9 17"
            strokeWidth="1.3"
            fill="rgba(228,82,27,0.2)"
            strokeLinejoin="round"
          />
          {/* Right Leaf */}
          <path
            d="M 9 14 C 13 12 15 15 15 15 C 15 15 12 17 9 15"
            strokeWidth="1.3"
            fill="rgba(228,82,27,0.2)"
            strokeLinejoin="round"
          />
          {/* Tiny Sparkle rays */}
          <line x1="9" y1="9" x2="9" y2="11" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="16" y1="10" x2="14" y2="12" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* 4 ASCENDING 3D BAR CHART COLUMNS */}
        <g filter="url(#barDropShadow)">
          
          {/* Column 1 (Lowest) */}
          <g transform="translate(90, 116)">
            {/* Column Body */}
            <rect x="-6" y="0" width="12" height="30" rx="6" fill="url(#barColumnGrad)" />
            {/* Top Cap */}
            <ellipse cx="0" cy="6" rx="6" ry="3.5" fill="url(#barTopCap)" />
          </g>

          {/* Column 2 */}
          <g transform="translate(112, 102)">
            <rect x="-6" y="0" width="12" height="44" rx="6" fill="url(#barColumnGrad)" />
            <ellipse cx="0" cy="6" rx="6" ry="3.5" fill="url(#barTopCap)" />
          </g>

          {/* Column 3 */}
          <g transform="translate(134, 86)">
            <rect x="-6" y="0" width="12" height="60" rx="6" fill="url(#barColumnGrad)" />
            <ellipse cx="0" cy="6" rx="6" ry="3.5" fill="url(#barTopCap)" />
          </g>

          {/* Column 4 (Highest) */}
          <g transform="translate(156, 68)">
            <rect x="-6" y="0" width="12" height="78" rx="6" fill="url(#barColumnGrad)" />
            <ellipse cx="0" cy="6" rx="6" ry="3.5" fill="url(#barTopCap)" />
          </g>

          {/* SWEEPING GROWTH ARROW (Sweeps upwards over the bars) */}
          <path
            d="M 82 126 C 96 110 126 84 172 54"
            stroke="url(#arrowGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <path
            d="M 160 52 L 175 51 L 174 66"
            stroke="url(#arrowGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </g>
      </svg>
    </div>
  )
}

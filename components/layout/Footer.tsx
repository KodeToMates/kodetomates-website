'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp } from 'lucide-react'

// Inline SVG brand icons for socials
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function TwitterIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0-.01-2.88 1.44 1.44 0 0 0 .01 2.88m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  )
}

function DiscordIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#7A2207] via-[#521604] to-[#200701] overflow-hidden selection:bg-[#E4521B]/40 selection:text-white">
      
      {/* ========================================================
          AMBIENT RADIANT TERRACOTTA & PEACH GLOWS (BRAND PRIMARY SHADES)
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Core luminous terracotta radial burst behind watermark */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[1000px] h-[380px] rounded-full blur-[120px] opacity-85"
          style={{
            background: 'radial-gradient(ellipse at center, #E4521B 0%, #B8380A 45%, rgba(40, 10, 2, 0.1) 85%)',
          }}
        />
        {/* Top subtle peach rim glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[200px] rounded-full blur-[90px] opacity-40"
          style={{
            background: 'radial-gradient(circle, #FFA466 0%, rgba(122, 34, 7, 0) 70%)',
          }}
        />
      </div>

      {/* ========================================================
          PART 1: NAVIGATION & BRAND CARD
          Sleek reduced height with prominent rounded bottom curve
         ======================================================== */}
      <div className="relative w-full bg-[#0E0C0A] text-[#A69B92] rounded-b-[36px] sm:rounded-b-[48px] md:rounded-b-[56px] border-b border-white/10 shadow-[0_20px_44px_rgba(0,0,0,0.65)] pt-12 sm:pt-14 pb-12 sm:pb-14 px-6 sm:px-8 lg:px-12 z-20">
        
        {/* Ambient warm glow in upper card */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] rounded-full blur-[100px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, #E4521B 0%, rgba(228,82,27,0) 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Col */}
            <div className="md:col-span-4 flex flex-col items-start">
              <Link href="/" className="inline-flex items-center gap-3 mb-3.5 group select-none">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-sm border border-white/10 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/brand/KM - Logo.png"
                    alt="KodeToMates Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="font-playfair text-2xl sm:text-[26px] font-bold tracking-tight text-white group-hover:text-[#FFA466] transition-colors">
                  Kode<span className="text-[#E4521B]">To</span>Mates
                </span>
              </Link>

              <p className="font-sans text-[13.5px] sm:text-[14px] leading-[1.6] text-[#A69B92] max-w-sm mb-4">
                The collaborative technology community where people learn systems, create real-world open source projects, and grow together.
              </p>

              <p className="font-serif text-[#E4521B] text-[16px] sm:text-[17px] italic font-normal mb-5">
                Build something meaningful with us.
              </p>

              {/* Social Icons row */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded-full bg-[#1F1916] hover:bg-[#E4521B] text-white flex items-center justify-center transition-all duration-300 border border-[#302722] hover:border-[#E4521B] shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded-full bg-[#1F1916] hover:bg-[#E4521B] text-white flex items-center justify-center transition-all duration-300 border border-[#302722] hover:border-[#E4521B] shadow-sm"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded-full bg-[#1F1916] hover:bg-[#E4521B] text-white flex items-center justify-center transition-all duration-300 border border-[#302722] hover:border-[#E4521B] shadow-sm"
                  aria-label="Discord"
                >
                  <DiscordIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded-full bg-[#1F1916] hover:bg-[#E4521B] text-white flex items-center justify-center transition-all duration-300 border border-[#302722] hover:border-[#E4521B] shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Nav Links Columns */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-[13.5px]">
              <div>
                <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-3.5">
                  What We Do
                </h4>
                <ul className="space-y-2.5 font-medium text-[#B8ADA4]">
                  <li>
                    <Link href="/what-we-do/website-dev" className="hover:text-[#E4521B] transition-colors">
                      Website Dev
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/seo" className="hover:text-[#E4521B] transition-colors">
                      SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/website-redesign" className="hover:text-[#E4521B] transition-colors">
                      Website Redesign
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/digital-invitation" className="hover:text-[#E4521B] transition-colors">
                      Digital Invitation
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-3.5">
                  Industries & Tech
                </h4>
                <ul className="space-y-2.5 font-medium text-[#B8ADA4]">
                  <li>
                    <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                      Distributed Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                      Agentic AI & LLMs
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                      Full-Stack Next.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                      3D WebGL & Canvas
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                      Cloud & Kubernetes
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-3.5">
                  Community
                </h4>
                <ul className="space-y-2.5 font-medium text-[#B8ADA4]">
                  <li>
                    <Link href="/join" className="hover:text-[#E4521B] transition-colors">
                      Join KodeToMates
                    </Link>
                  </li>
                  <li>
                    <Link href="/#community" className="hover:text-[#E4521B] transition-colors">
                      Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[#E4521B] transition-colors">
                      Mates Hall of Fame
                    </Link>
                  </li>
                  <li>
                    <Link href="/join" className="hover:text-[#E4521B] transition-colors">
                      Weekly Demo Days
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#E4521B] transition-colors">
                      Contact Mentors
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-3.5">
                  Company
                </h4>
                <ul className="space-y-2.5 font-medium text-[#B8ADA4]">
                  <li>
                    <Link href="/about" className="hover:text-[#E4521B] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[#E4521B] transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-[#E4521B] transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#E4521B] transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-[#E4521B] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-[#E4521B] transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================
          PART 2: CURVED TERRACOTTA BANNER WITH LOGO & WATERMARK
          Tighter, compact vertical proportions
         ======================================================== */}
      <div className="relative w-full pt-8 sm:pt-10 md:pt-12 pb-7 sm:pb-8 px-6 sm:px-8 lg:px-12 flex flex-col items-center z-10">
        <div className="relative max-w-7xl w-full mx-auto flex flex-col items-center">
          
          {/* Centered Stylized Watermark Logo with Official Logo Mark */}
          <div className="my-3 sm:my-5 md:my-6 flex items-center justify-center gap-3.5 sm:gap-5 group select-none cursor-default">
            
            {/* Official Logo Mark with Radiant Drop Shadow */}
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center shrink-0 drop-shadow-[0_4px_24px_rgba(228,82,27,0.7)] group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/brand/KM - Logo.png"
                alt="KodeToMates Official Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>

            {/* Giant Stylized Wordmark with Soft Terracotta Glow */}
            <span className="font-serif text-[clamp(2.3rem,5.2vw,4.4rem)] font-bold text-white tracking-[-0.03em] leading-none transition-colors drop-shadow-[0_4px_28px_rgba(228,82,27,0.35)] group-hover:text-[#FFA466]">
              Kode<span className="text-[#FF8F4D] group-hover:text-white transition-colors">To</span>Mates
            </span>
          </div>

          {/* Bottom Copyright & Legal Line in Warm Harmonious Tones */}
          <div className="w-full pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-[12.5px] sm:text-[13px] text-[#E8BA9E]">
            
            {/* Copyright Left */}
            <div className="font-sans font-normal">
              <span>© KodeToMates 2026, All rights reserved</span>
            </div>

            {/* Legal Links Right */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 font-sans font-medium">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                End User License Agreement
              </Link>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 hover:text-white text-[#FFA466] transition-colors cursor-pointer select-none font-semibold ml-1.5"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </footer>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ========================================================
// Inline SVG Brand Icons for Social Platforms
// ========================================================
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

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
  return (
    <footer className="relative w-full bg-[#0C0B0A] text-[#A69B92] overflow-hidden selection:bg-[#E4521B]/35 selection:text-white">

      {/* ========================================================
          AMBIENT RADIANT BRAND ORANGE GLOWS (Subtle & Luxurious)
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top subtle orange edge beam */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E4521B]/40 to-transparent" />

        {/* Ambient warm orange core glow behind center */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[340px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, #E4521B 0%, #FF914D 40%, transparent 75%)',
          }}
        />

        {/* Bottom subtle terracotta glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[300px] rounded-full blur-[130px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, #E4521B 0%, rgba(228,82,27,0) 70%)',
          }}
        />
      </div>

      {/* ========================================================
          MAIN CONTENT CONTAINER
         ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12 sm:pb-16 z-10">

        {/* Grid: Brand Column + Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/[0.08]">

          {/* Left Column: Brand, Mission, & Socials */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group select-none">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-white/10 ring-2 ring-[#E4521B]/30 shadow-[0_0_20px_rgba(228,82,27,0.3)] group-hover:scale-105 transition-transform duration-300 bg-[#161413]">
                <Image
                  src="/Image-v1/KTM_Logos/Primary-Logo.png"
                  alt="KodeToMates Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-sans text-2xl sm:text-[26px] font-bold tracking-[-0.03em] text-white group-hover:text-[#FFA466] transition-colors">
                Kode<span className="text-[#E4521B]">To</span>Mates
              </span>
            </Link>

            <p className="font-sans text-[14px] leading-relaxed text-[#8E857E] max-w-sm mb-4">
              A collaborative technology community & digital engineering studio. We build production-ready software, high-converting platforms, and scalable digital experiences.
            </p>



            {/* Social Icons Row with Instagram & Facebook */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-[#E4521B] text-[#A69B92] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/[0.08] hover:border-[#E4521B] shadow-sm hover:shadow-[0_4px_16px_rgba(228,82,27,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-[#E4521B] text-[#A69B92] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/[0.08] hover:border-[#E4521B] shadow-sm hover:shadow-[0_4px_16px_rgba(228,82,27,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-[#E4521B] text-[#A69B92] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/[0.08] hover:border-[#E4521B] shadow-sm hover:shadow-[0_4px_16px_rgba(228,82,27,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-[#E4521B] text-[#A69B92] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/[0.08] hover:border-[#E4521B] shadow-sm hover:shadow-[0_4px_16px_rgba(228,82,27,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-[#E4521B] text-[#A69B92] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/[0.08] hover:border-[#E4521B] shadow-sm hover:shadow-[0_4px_16px_rgba(228,82,27,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-[#E4521B] text-[#A69B92] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/[0.08] hover:border-[#E4521B] shadow-sm hover:shadow-[0_4px_16px_rgba(228,82,27,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Discord"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Columns: Categorized Navigation Links */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-7 sm:gap-8 text-[13.5px]">

            {/* Column 1: Services */}
            <div>
              <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B]" />
                <span>What We Do</span>
              </h4>
              <ul className="space-y-2.5 font-medium text-[#9E938B]">
                <li>
                  <Link href="/what-we-do/website-dev" className="hover:text-[#E4521B] transition-colors">
                    Website Dev
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/seo" className="hover:text-[#E4521B] transition-colors">
                    SEO & Growth
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

            {/* Column 2: Tech & Focus */}
            <div>
              <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B]" />
                <span>Engineering</span>
              </h4>
              <ul className="space-y-2.5 font-medium text-[#9E938B]">
                <li>
                  <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                    Next.js & React
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                    Autonomous AI & Agents
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                    3D Canvas & WebGL
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                    Distributed Systems
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#E4521B] transition-colors">
                    Cloud & Edge Ops
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Community */}
            <div>
              <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B]" />
                <span>Community</span>
              </h4>
              <ul className="space-y-2.5 font-medium text-[#9E938B]">
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

            {/* Column 4: Company */}
            <div>
              <h4 className="font-sans font-bold text-white text-[12px] tracking-wider uppercase mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B]" />
                <span>Company</span>
              </h4>
              <ul className="space-y-2.5 font-medium text-[#9E938B]">
                <li>
                  <Link href="/about" className="hover:text-[#E4521B] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#E4521B] transition-colors">
                    Engineering Blog
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

        {/* ========================================================
            BOTTOM BRAND SHOWCASE: Official Logo & Glow Wordmark
           ======================================================== */}
        <div className="pt-10 sm:pt-14 pb-8 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3.5 sm:gap-5 group select-none cursor-default mb-8">
            {/* Official Logo Mark with Radiant Drop Shadow */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center shrink-0 drop-shadow-[0_4px_24px_rgba(228,82,27,0.7)] group-hover:scale-105 transition-transform duration-300 bg-[#161413] border border-white/10">
              <Image
                src="/Image-v1/KTM_Logos/Primary-Logo.png"
                alt="KodeToMates Official Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>

            {/* Giant Stylized Wordmark */}
            <span className="font-sans text-[clamp(2.4rem,6vw,5rem)] font-bold text-white tracking-[-0.035em] leading-none transition-colors drop-shadow-[0_4px_28px_rgba(228,82,27,0.3)]">
              Kode<span className="text-[#E4521B]">To</span>Mates
            </span>
          </div>

          {/* Bottom Copyright & Legal Line */}
          <div className="w-full pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] sm:text-[13px] text-[#7E756E]">
            {/* Copyright */}
            <div className="font-sans font-normal">
              <span>© {new Date().getFullYear()} KodeToMates. All rights reserved.</span>
            </div>

            {/* Live Operational Status Tag */}


            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-sans font-medium text-[#8E857E]">
              <Link href="/terms" className="hover:text-[#E4521B] transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-[#E4521B] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-[#E4521B] transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe, TrendingUp, RefreshCw, Sparkles, Menu, X } from 'lucide-react'


interface SubItem {
  icon: React.ElementType
  title: string
  description: string
  href: string
}

interface MenuItem {
  title: string
  href: string
  hasDropdown: boolean
  dropdownItems?: SubItem[]
}

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    href: '/',
    hasDropdown: false
  },
  {
    title: 'What We Do',
    href: '/what-we-do',
    hasDropdown: true,
    dropdownItems: [
      {
        icon: Globe,
        title: 'Website Dev',
        description: 'Modern, high-performance web applications',
        href: '/what-we-do/website-dev'
      },
      {
        icon: TrendingUp,
        title: 'SEO',
        description: 'Search visibility, audits & ranking growth',
        href: '/what-we-do/seo'
      },
      {
        icon: RefreshCw,
        title: 'Website Redesign',
        description: 'Transform outdated sites into sleek experiences',
        href: '/what-we-do/website-redesign'
      },
      {
        icon: Sparkles,
        title: 'Digital Invitation',
        description: 'Interactive RSVP & curated digital invitations',
        href: '/what-we-do/digital-invitation'
      }
    ]
  },
  {
    title: 'Projects',
    href: '/projects',
    hasDropdown: false
  },
  {
    title: 'About Us',
    href: '/about',
    hasDropdown: false
  },
  {
    title: 'Blog',
    href: '/blog',
    hasDropdown: false
  },
  {
    title: 'FAQ',
    href: '/faq',
    hasDropdown: false
  },
  {
    title: 'Contact',
    href: '/contact',
    hasDropdown: false
  }
]

export function Navbar() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none"
    >
      {/* ========================================================
          FLOATING PILL NAVBAR CONTAINER (n8n Aesthetic)
          Dark glass, subtle purple-charcoal tint, sleek border & glow
         ======================================================== */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto relative w-full max-w-[1360px] h-[54px] sm:h-[58px] rounded-full bg-[#12111A]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] flex items-center justify-between px-3.5 sm:px-5 lg:px-6 transition-all duration-300"
      >
        {/* Specular Top Rim Reflection Line */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />

        {/* --- LEFT: LOGO --- */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B] rounded-full shrink-0"
        >
          <div className="relative w-8 h-8 rounded-full p-[1.5px] bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors">
            <Image
              src="/images/brand/KM - Logo.png"
              alt="KodeToMates Mark"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-sans font-bold text-[16px] sm:text-[17px] tracking-tight text-white transition-colors">
            KodeToMates<span className="text-[#E4521B]">.</span>
          </span>
        </Link>


        {/* --- CENTER: DESKTOP INLINE NAV LINKS (n8n Style) --- */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && (pathname?.startsWith(`${item.href}/`) ?? false))
            const isDropdownOpen = activeDropdown === item.title

            if (item.hasDropdown) {
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isDropdownOpen ? null : item.title)}
                    className={`flex items-center gap-1 text-[13.5px] font-sans font-medium transition-colors py-2 cursor-pointer ${isActive || isDropdownOpen ? 'text-white' : 'text-[#C4C0D0] hover:text-white'
                      }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2] ${isDropdownOpen ? 'rotate-180 text-white' : 'text-[#8E8A9A]'
                        }`}
                    />
                  </button>

                  {/* Dark Glass Floating Dropdown Popover */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[310px] pointer-events-auto z-50"
                      >
                        <div className="bg-[#14121D]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                          {item.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E4521B]/20 group-hover:border-[#E4521B]/40 transition-colors">
                                <subItem.icon className="w-4 h-4 text-white/80 group-hover:text-[#E4521B] transition-colors" />
                              </div>
                              <div>
                                <p className="text-white text-xs font-semibold group-hover:text-white transition-colors">
                                  {subItem.title}
                                </p>
                                <p className="text-white/50 text-[11px] leading-tight line-clamp-1 mt-0.5">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`text-[13.5px] font-sans font-medium transition-colors py-2 ${isActive ? 'text-white' : 'text-[#C4C0D0] hover:text-white'
                  }`}
              >
                {item.title}
              </Link>
            )
          })}
        </div>


        {/* --- RIGHT: CTA BUTTON --- */}
        <div className="hidden lg:flex items-center shrink-0">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/join"
              className="btn-pill-coral inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans font-semibold text-[13px] sm:text-[13.5px] border border-transparent hover:border-white/20"
            >
              <span>Join KodeTomates</span>
            </Link>
          </motion.div>
        </div>


        {/* --- MOBILE: RIGHT ACTIONS + HAMBURGER BUTTON --- */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Get Started CTA */}
          <Link
            href="/join"
            className="btn-pill-coral inline-flex items-center justify-center px-3.5 py-1.5 rounded-full font-sans font-semibold text-xs border border-transparent hover:border-white/20"
          >
            Join KodeTomates
          </Link>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B]"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ========================================================
          MOBILE MENU DRAWER (Dark Glass Theme)
         ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full left-3 right-3 mt-2 bg-[#12111A]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col gap-1.5 z-50 overflow-hidden"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const isAccordionOpen = mobileAccordion === item.title

              if (item.hasDropdown) {
                return (
                  <div key={item.title} className="flex flex-col">
                    <button
                      onClick={() => setMobileAccordion(isAccordionOpen ? null : item.title)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-colors cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isAccordionOpen ? 'rotate-180 text-white' : 'text-white/50'
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isAccordionOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pr-1 py-1 flex flex-col gap-1"
                        >
                          {item.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.08] text-xs transition-colors"
                            >
                              <subItem.icon className="w-3.5 h-3.5 text-[#E4521B]" />
                              <span>{subItem.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                      ? 'bg-white/[0.1] text-white font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/[0.06]'
                    }`}
                >
                  {item.title}
                </Link>
              )
            })}


          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

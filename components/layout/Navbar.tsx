'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe, TrendingUp, RefreshCw, Sparkles, Menu, X } from 'lucide-react'
import { JoinCommunityModal } from '@/components/common/JoinCommunityModal'


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
  const [joinModalOpen, setJoinModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track window scroll to subtly adjust glassmorphism opacity & shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Allow triggering from anywhere on the page via custom event
  useEffect(() => {
    const handleOpen = () => setJoinModalOpen(true)
    window.addEventListener('open-join-modal', handleOpen)
    return () => window.removeEventListener('open-join-modal', handleOpen)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
    >
      {/* ========================================================
          FLOATING PILL NAVBAR CONTAINER
          Seamless Borderless Glassmorphism: Pure translucent frosted glass & soft ambient shadow
         ======================================================== */}
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto relative w-full max-w-[1360px] h-[62px] sm:h-[68px] rounded-full backdrop-blur-2xl backdrop-saturate-180 transition-all duration-300 flex items-center justify-between px-5 sm:px-7 lg:px-8 ${
          scrolled
            ? 'bg-[rgba(15,14,23,0.55)] shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
            : 'bg-[rgba(15,14,23,0.28)] shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
        }`}
      >
        {/* --- LEFT: LOGO --- */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B] rounded-full shrink-0"
        >
          <div className="relative w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full p-[2px] bg-white/[0.12] backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-white/[0.18] transition-all">
            <Image
              src="/images/brand/KM - Logo.png"
              alt="KodeToMates Mark"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-sans font-bold text-[16px] sm:text-[17.5px] tracking-tight text-white transition-colors">
            KodeToMates<span className="text-[#E4521B]"></span>
          </span>
        </Link>


        {/* --- CENTER: DESKTOP INLINE NAV LINKS --- */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
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
                    className={`flex items-center gap-1.5 text-[14px] font-sans font-medium transition-all py-1.5 px-3 sm:px-3.5 rounded-full cursor-pointer border-0 ${
                      isActive || isDropdownOpen
                        ? 'text-white bg-white/[0.14] backdrop-blur-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/[0.1] hover:backdrop-blur-sm'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2] ${
                        isDropdownOpen ? 'rotate-180 text-white' : 'text-white/60'
                      }`}
                    />
                  </button>

                  {/* Glassmorphic Floating Dropdown Popover */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[310px] pointer-events-auto z-50"
                      >
                        <div className="relative bg-[rgba(18,17,29,0.78)] backdrop-blur-2xl backdrop-saturate-180 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                          {item.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.12] hover:backdrop-blur-sm transition-all group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/[0.1] backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-[#E4521B]/25 transition-all">
                                <subItem.icon className="w-4 h-4 text-white/90 group-hover:text-[#E4521B] transition-colors" />
                              </div>
                              <div>
                                <p className="text-white text-xs font-semibold group-hover:text-white transition-colors">
                                  {subItem.title}
                                </p>
                                <p className="text-white/60 text-[11px] leading-tight line-clamp-1 mt-0.5">
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
                className={`text-[14px] font-sans font-medium transition-all py-1.5 px-3 sm:px-3.5 rounded-full border-0 ${
                  isActive
                    ? 'text-white bg-white/[0.14] backdrop-blur-sm font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/[0.1] hover:backdrop-blur-sm'
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
            <button
              type="button"
              onClick={() => setJoinModalOpen(true)}
              className="btn-pill-coral inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-sans font-semibold text-[13.5px] sm:text-[14px] shadow-[0_4px_20px_rgba(228,82,27,0.4)] cursor-pointer transition-all border-0"
            >
              <span>Enquiry KodeTomates</span>
            </button>
          </motion.div>
        </div>


        {/* --- MOBILE: RIGHT ACTIONS + HAMBURGER BUTTON --- */}
        <div className="flex lg:hidden items-center gap-2.5">
          {/* Mobile Get Started CTA */}
          <button
            type="button"
            onClick={() => setJoinModalOpen(true)}
            className="btn-pill-coral inline-flex items-center justify-center px-4 py-2 rounded-full font-sans font-semibold text-xs shadow-[0_4px_16px_rgba(228,82,27,0.35)] cursor-pointer transition-all border-0"
          >
            Enquiry KodeTomates
          </button>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-white/90 hover:text-white rounded-full bg-white/[0.08] backdrop-blur-md hover:bg-white/[0.16] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B] border-0"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ========================================================
          MOBILE MENU DRAWER (Glassmorphic Theme)
         ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full left-3 right-3 mt-3 bg-[rgba(18,17,26,0.85)] backdrop-blur-2xl backdrop-saturate-180 rounded-3xl p-5 shadow-[0_24px_50px_rgba(0,0,0,0.5)] flex flex-col gap-2 z-50 overflow-hidden"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const isAccordionOpen = mobileAccordion === item.title

              if (item.hasDropdown) {
                return (
                  <div key={item.title} className="flex flex-col">
                    <button
                      onClick={() => setMobileAccordion(isAccordionOpen ? null : item.title)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-white/85 hover:text-white hover:bg-white/[0.1] hover:backdrop-blur-sm text-sm font-medium transition-all cursor-pointer border-0"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isAccordionOpen ? 'rotate-180 text-white' : 'text-white/60'
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
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/75 hover:text-white hover:bg-white/[0.1] text-xs transition-all border-0"
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
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all border-0 ${
                    isActive
                      ? 'bg-white/[0.16] backdrop-blur-sm text-white font-semibold'
                      : 'text-white/85 hover:text-white hover:bg-white/[0.1] hover:backdrop-blur-sm'
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}


            {/* Mobile Drawer Join CTA */}
            <div className="pt-2 mt-1 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setJoinModalOpen(true)
                }}
                className="w-full btn-pill-coral py-2.5 rounded-xl font-sans font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(228,82,27,0.35)] cursor-pointer transition-all border-0"
              >
                <span>Enquiry KodeTomates</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glassmorphism Join Community Modal */}
      <JoinCommunityModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </motion.header>
  )
}

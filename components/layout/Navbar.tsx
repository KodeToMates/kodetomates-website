'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { JoinCommunityModal } from '@/components/common/JoinCommunityModal'
import { MAIN_NAV_ITEMS, NAVBAR_CTA } from '@/config/navigation'

export function Navbar() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
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
            ? 'bg-[rgba(15,14,23,0.65)] shadow-[0_12px_40px_rgba(0,0,0,0.38)]'
            : 'bg-[rgba(15,14,23,0.32)] shadow-[0_8px_32px_rgba(0,0,0,0.22)]'
        }`}
      >
        {/* --- LEFT: LOGO --- */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B] rounded-full shrink-0"
        >
          <div className="relative w-9.5 h-9.5 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/Image-v1/KTM_Logos/Primary-Logo.png"
              alt="KodeToMates Mark"
              width={44}
              height={44}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="font-sans font-bold text-[16.5px] sm:text-[18px] tracking-tight text-white transition-colors">
            Kode<span className="text-[#E4521B]">To</span>Mates
          </span>
        </Link>

        {/* --- CENTER: DESKTOP INLINE NAV LINKS & DROPDOWN --- */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && (pathname?.startsWith(`${item.href}/`) ?? false))
            const isDropdownOpen = activeDropdown === item.title
            const isHovered = hoveredNavItem === item.title

            if (item.hasDropdown) {
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveDropdown(item.title)
                    setHoveredNavItem(item.title)
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null)
                    setHoveredNavItem(null)
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isDropdownOpen ? null : item.title)}
                    className={`relative flex items-center gap-1.5 text-[14px] font-sans font-medium transition-colors duration-200 py-1.5 px-3.5 rounded-full cursor-pointer border-0 z-10 ${
                      isActive || isDropdownOpen ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 stroke-[2.2] ${
                        isDropdownOpen ? 'rotate-180 text-[#E4521B]' : 'text-white/60 group-hover:rotate-180'
                      }`}
                    />
                    {(isHovered || isDropdownOpen || isActive) && (
                      <motion.div
                        layoutId="navbar-hover-indicator"
                        className="absolute inset-0 size-full bg-white/[0.12] rounded-full backdrop-blur-sm"
                        transition={{ type: 'spring', bounce: 0.18, duration: 0.3 }}
                      />
                    )}
                  </button>

                  {/* Multi-Column Mega Dropdown Navigation Popover */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <div className="w-auto absolute left-1/2 -translate-x-1/2 top-full pt-3 pointer-events-auto z-50">
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          layoutId="navbar-dropdown-container"
                          className="relative bg-[rgba(18,17,29,0.92)] backdrop-blur-2xl backdrop-saturate-180 border border-white/10 rounded-2xl p-6 shadow-[0_24px_60px_rgba(0,0,0,0.55)] w-max max-w-[92vw] overflow-hidden"
                          style={{ borderRadius: 20 }}
                        >
                          {/* Columns Layout */}
                          <div className="w-fit shrink-0 flex space-x-8 sm:space-x-10 overflow-hidden">
                            {item.subMenus ? (
                              item.subMenus.map((sub) => (
                                <motion.div
                                  layout
                                  className="w-full min-w-[240px] max-w-[280px]"
                                  key={sub.title}
                                >
                                  <h3 className="mb-4 text-xs font-sans font-semibold uppercase tracking-wider text-[#E4521B]">
                                    {sub.title}
                                  </h3>
                                  <ul className="space-y-4">
                                    {sub.items.map((subItem) => {
                                      const Icon = subItem.icon
                                      return (
                                        <li key={subItem.title}>
                                          <Link
                                            href={subItem.href}
                                            onClick={() => setActiveDropdown(null)}
                                            className="flex items-start space-x-3.5 group p-2 -m-2 rounded-xl hover:bg-white/[0.08] hover:backdrop-blur-sm transition-all duration-200"
                                          >
                                            <div className="border border-white/15 bg-white/[0.08] text-white rounded-lg flex items-center justify-center size-9 shrink-0 group-hover:bg-[#E4521B] group-hover:border-[#E4521B] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                              <Icon className="h-4.5 w-4.5 flex-none text-white" />
                                            </div>
                                            <div className="leading-tight">
                                              <p className="text-[13.5px] font-sans font-semibold text-white group-hover:text-[#FF914D] transition-colors shrink-0">
                                                {subItem.title}
                                              </p>
                                              <p className="text-[11.5px] font-sans text-white/60 group-hover:text-white/80 transition-colors duration-200 mt-1 line-clamp-2 leading-snug">
                                                {subItem.description}
                                              </p>
                                            </div>
                                          </Link>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </motion.div>
                              ))
                            ) : (
                              <div className="w-full min-w-[260px] space-y-3">
                                {item.dropdownItems?.map((subItem) => {
                                  const Icon = subItem.icon
                                  return (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-start space-x-3.5 group p-2 rounded-xl hover:bg-white/[0.08] transition-all"
                                    >
                                      <div className="border border-white/15 bg-white/[0.08] text-white rounded-lg flex items-center justify-center size-9 shrink-0 group-hover:bg-[#E4521B] group-hover:border-[#E4521B] transition-all">
                                        <Icon className="h-4.5 w-4.5 flex-none text-white" />
                                      </div>
                                      <div>
                                        <p className="text-[13.5px] font-sans font-semibold text-white">
                                          {subItem.title}
                                        </p>
                                        <p className="text-[11.5px] font-sans text-white/60 mt-0.5">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  )
                                })}
                              </div>
                            )}
                          </div>

                          {/* Dropdown Footer CTA Bar */}
                          <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                            <span className="text-white/55">
                              Looking for high-impact custom engineering?
                            </span>
                            <Link
                              href="/what-we-do"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-1.5 text-[#E4521B] hover:text-[#FF914D] font-semibold transition-colors group/link"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setHoveredNavItem(item.title)}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                <Link
                  href={item.href}
                  className={`relative text-[14px] font-sans font-medium transition-colors duration-200 py-1.5 px-3.5 rounded-full border-0 inline-block z-10 ${
                    isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.title}</span>
                  {(isHovered || isActive) && (
                    <motion.div
                      layoutId="navbar-hover-indicator"
                      className="absolute inset-0 size-full bg-white/[0.12] rounded-full backdrop-blur-sm"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.3 }}
                    />
                  )}
                </Link>
              </div>
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
              <span>{NAVBAR_CTA.label}</span>
            </button>
          </motion.div>
        </div>

        {/* --- MOBILE: HAMBURGER BUTTON --- */}
        <div className="flex lg:hidden items-center">
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
            className="pointer-events-auto absolute top-full left-3 right-3 mt-3 bg-[rgba(18,17,26,0.92)] backdrop-blur-2xl backdrop-saturate-180 rounded-3xl p-5 shadow-[0_24px_50px_rgba(0,0,0,0.5)] flex flex-col gap-2 z-50 overflow-hidden border border-white/10"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const isAccordionOpen = mobileAccordion === item.title

              if (item.hasDropdown) {
                return (
                  <div key={item.title} className="flex flex-col">
                    <button
                      onClick={() => setMobileAccordion(isAccordionOpen ? null : item.title)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-white/85 hover:text-white hover:bg-white/[0.1] hover:backdrop-blur-sm text-sm font-medium transition-all cursor-pointer border-0"
                    >
                      <span className="font-sans font-medium">{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isAccordionOpen ? 'rotate-180 text-[#E4521B]' : 'text-white/60'
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isAccordionOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pr-1 py-1 flex flex-col gap-2"
                        >
                          {item.subMenus ? (
                            item.subMenus.map((sub) => (
                              <div key={sub.title} className="flex flex-col gap-1 py-1">
                                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#E4521B] px-3 pt-1">
                                  {sub.title}
                                </span>
                                {sub.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-start gap-2.5 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.1] text-xs transition-all border-0 group"
                                  >
                                    <div className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#E4521B] group-hover:border-[#E4521B] transition-colors mt-0.5">
                                      <subItem.icon className="w-3.5 h-3.5 text-white transition-colors" />
                                    </div>
                                    <div>
                                      <span className="block font-sans font-semibold text-white">
                                        {subItem.title}
                                      </span>
                                      <span className="block font-sans text-[11px] text-white/55 line-clamp-1 mt-0.5">
                                        {subItem.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            ))
                          ) : (
                            item.dropdownItems?.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/75 hover:text-white hover:bg-white/[0.1] text-xs transition-all border-0 group"
                              >
                                <div className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#E4521B] transition-colors">
                                  <subItem.icon className="w-3.5 h-3.5 text-white transition-colors" />
                                </div>
                                <span>{subItem.title}</span>
                              </Link>
                            ))
                          )}

                          <Link
                            href="/what-we-do"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs font-sans font-semibold text-[#E4521B] px-3 py-1 flex items-center gap-1 hover:underline"
                          >
                            <span>Explore All Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
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
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all border-0 ${
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
                <span>{NAVBAR_CTA.label}</span>
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

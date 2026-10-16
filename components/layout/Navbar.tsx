'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ChevronDown, ArrowRight, Globe, TrendingUp, RefreshCw, Sparkles } from 'lucide-react'
import { dropdownVariants } from '@/lib/animations'

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    if (latest > 60) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }

    if (latest > 120 && latest > prev + 5) {
      setIsVisible(false)
    } else if (latest < prev - 5 || latest < 100) {
      setIsVisible(true)
    }
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-[24px] left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div 
        className={`pointer-events-auto w-[82.8vw] max-w-[1480px] h-[clamp(60px,4.8vw,82px)] rounded-full transition-all duration-300 flex items-center justify-between px-[1.2vw] ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_12px_36px_rgba(26,22,20,0.12)]' 
            : 'bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgba(26,22,20,0.06)]'
        }`}
      >
        {/* --- LEFT: LOGO (~2vw from left edge) --- */}
        <Link 
          href="/" 
          className="flex items-center gap-[0.8vw] pl-[0.8vw] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B] rounded-full shrink-0"
        >
          <div className="relative w-[clamp(28px,2.2vw,38px)] h-[clamp(28px,2.2vw,38px)] rounded-full overflow-hidden flex items-center justify-center shrink-0">
            <Image 
              src="/images/brand/KM - Logo.png" 
              alt="KodeToMates Mark" 
              width={38} 
              height={38} 
              className="object-contain"
              priority 
            />
          </div>
          <span className="font-playfair font-bold text-[clamp(18px,1.45vw,25px)] tracking-[-0.03em] text-[#1A1614] transition-colors">
            Kode<span className="bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent">To</span>Mates
          </span>
        </Link>


        {/* --- CENTER: DESKTOP MENU --- */}
        <nav 
          className="hidden lg:flex items-center gap-[clamp(14px,1.6vw,32px)] relative"
          onMouseLeave={() => {
            setActiveDropdown(null)
            setHoveredNav(null)
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => {
                setHoveredNav(item.title)
                if (item.hasDropdown) {
                  setActiveDropdown(item.title)
                } else {
                  setActiveDropdown(null)
                }
              }}
            >
              <Link
                href={item.href}
                className="relative z-10 flex items-center gap-1.5 py-2 text-[clamp(14px,1vw,17px)] font-sans font-medium text-[#1A1614] hover:text-[#E4521B] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B]"
              >
                <span>{item.title}</span>
                {item.hasDropdown && (
                  <motion.span
                    animate={{ rotate: activeDropdown === item.title ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block text-[#1A1614]/60"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.span>
                )}
              </Link>

              {/* Sliding Pill Indicator */}
              {hoveredNav === item.title && (
                <motion.div
                  layoutId="nav-pill"
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  className="absolute inset-0 rounded-full bg-[#E4521B]/10 pointer-events-none"
                />
              )}

              {/* Mega Dropdown Glass Card */}
              <AnimatePresence>
                {activeDropdown === item.title && item.dropdownItems && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50"
                  >
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 border-t border-l border-white/60 transform rotate-45 shadow-sm" />

                    <div className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(26,22,20,0.14)] flex flex-col gap-1">
                      {item.dropdownItems.map((sub, sIdx) => {
                        const Icon = sub.icon
                        return (
                          <motion.div
                            key={sub.title}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: sIdx * 0.05 }}
                          >
                            <Link
                              href={sub.href}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#E4521B]/8 transition-all"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#E4521B]/10 text-[#E4521B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="text-[13px] font-sans font-semibold text-[#1A1614] group-hover:text-[#E4521B] transition-colors">
                                  {sub.title}
                                </div>
                                <div className="text-[11px] font-sans text-[#6B645E] leading-tight mt-0.5">
                                  {sub.description}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>


        {/* --- RIGHT: CTA BUTTON (height ~3.1vw min 44px, width ~13.9vw min 190px) --- */}
        <div className="hidden lg:block shrink-0">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/join"
              className="group relative inline-flex items-center justify-center gap-2 w-[clamp(190px,13.9vw,225px)] h-[clamp(44px,3.1vw,56px)] rounded-full bg-gradient-to-r from-[#FF914D] to-[#AB003E] text-white font-sans font-semibold text-[clamp(13.5px,0.95vw,16px)] shadow-[0_4px_16px_rgba(171,0,62,0.32)] hover:shadow-[0_6px_22px_rgba(171,0,62,0.45)] hover:brightness-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <span className="relative z-10">Join KodeToMates</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>


        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1A1614] rounded-full hover:bg-[#E4521B]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4521B]"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span 
              className={`w-full h-0.5 bg-[#1A1614] rounded-full transition-transform duration-300 origin-left ${
                mobileMenuOpen ? 'rotate-45 translate-x-0.5' : ''
              }`} 
            />
            <span 
              className={`w-full h-0.5 bg-[#1A1614] rounded-full transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} 
            />
            <span 
              className={`w-full h-0.5 bg-[#1A1614] rounded-full transition-transform duration-300 origin-left ${
                mobileMenuOpen ? '-rotate-45 translate-x-0.5' : ''
              }`} 
            />
          </div>
        </button>
      </div>


      {/* --- MOBILE ANIMATED SHEET --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-4 right-4 pointer-events-auto bg-white/95 backdrop-blur-2xl border border-white/80 rounded-3xl p-5 shadow-[0_20px_60px_rgba(26,22,20,0.18)] lg:hidden flex flex-col gap-2 z-50 max-h-[80vh] overflow-y-auto"
          >
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-black/5 pb-1">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-left font-sans font-semibold text-[#1A1614] hover:bg-[#E4521B]/5 transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-[#6B645E] transition-transform duration-200 ${
                          mobileAccordion === item.title ? 'rotate-180 text-[#E4521B]' : ''
                        }`} 
                      />
                    </button>

                    <AnimatePresence>
                      {mobileAccordion === item.title && item.dropdownItems && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-3 flex flex-col gap-1 pb-2"
                        >
                          {item.dropdownItems.map((sub) => {
                            const SubIcon = sub.icon
                            return (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-[#E4521B]/8 text-[#1A1614]"
                              >
                                <SubIcon className="w-4 h-4 text-[#E4521B]" />
                                <span className="text-[13px] font-medium">{sub.title}</span>
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2.5 px-3 rounded-xl font-sans font-semibold text-[#1A1614] hover:bg-[#E4521B]/5 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF914D] to-[#AB003E] text-white font-sans font-semibold text-[15px] shadow-[0_6px_20px_rgba(171,0,62,0.35)]"
            >
              <span>Join KodeToMates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

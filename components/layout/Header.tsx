'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/common/Button'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children, hasDropdown }: { href: string, children: React.ReactNode, hasDropdown?: boolean }) => {
  const pathname = usePathname()
  const isActive = pathname === href || (pathname?.startsWith(`${href}/`) ?? false)
  
  return (
    <Link href={href} className={`group flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta ${isActive ? 'bg-brand-terracotta/10 text-brand-terracotta' : 'text-text-primary hover:bg-brand-terracotta/10 hover:text-brand-terracotta'}`}>
      {children}
      {hasDropdown && (
        <svg className={`w-3.5 h-3.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </Link>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl bg-surface-paper/85 backdrop-blur-xl border border-white/50 rounded-full shadow-[0_8px_32px_rgba(26,24,23,0.08)] px-3 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 pl-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta rounded-full">
          <Image src="/images/brand/KM - Logo.png" alt="KodeToMates" width={32} height={32} className="object-contain" priority />
          <span className="font-playfair font-bold text-[clamp(17px,1.4vw,22px)] tracking-[-0.03em] text-[#1A1614] hidden sm:block">
            Kode<span className="text-[#E4521B]">To</span>Mates
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/what-we-do" hasDropdown>What We Do</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="hidden lg:block pr-1">
          <Button href="/join" variant="primary" showArrow className="py-2.5 px-6 text-sm">Join KodeToMates</Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 mr-1 text-text-primary rounded-full hover:bg-brand-terracotta/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 pointer-events-auto bg-surface-paper border border-surface-dim rounded-2xl shadow-xl p-4 flex flex-col gap-2 lg:hidden">
           <Link href="/" className="px-4 py-3 rounded-xl hover:bg-background-sand text-text-primary font-medium">Home</Link>
           <Link href="/what-we-do" className="px-4 py-3 rounded-xl hover:bg-background-sand text-text-primary font-medium">What We Do</Link>
           <Link href="/about" className="px-4 py-3 rounded-xl hover:bg-background-sand text-text-primary font-medium">About Us</Link>
           <Link href="/blog" className="px-4 py-3 rounded-xl hover:bg-background-sand text-text-primary font-medium">Blog</Link>
           <Link href="/faq" className="px-4 py-3 rounded-xl hover:bg-background-sand text-text-primary font-medium">FAQ</Link>
           <Link href="/contact" className="px-4 py-3 rounded-xl hover:bg-background-sand text-text-primary font-medium">Contact</Link>
           <Button href="/join" variant="primary" showArrow className="mt-2 w-full">Join KodeToMates</Button>
        </div>
      )}
    </header>
  )
}

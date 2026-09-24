"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-[var(--color-brand-light-sage)]/20 shadow-sm">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center text-[var(--color-brand-deep-green)] font-extrabold text-xl tracking-tight no-underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-sage)] rounded-lg">
            <div className="relative flex items-center justify-center mr-3 h-[30px]">
              <Image 
                src="/logo-mark.png" 
                alt="KodeToMates" 
                width={54} 
                height={30} 
                priority
              />
            </div>
            <span>
              Kode<span className="text-[var(--color-brand-clay)]">To</span>Mates
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-2 font-semibold text-sm">
            {["Home", "About", "Programs", "Projects", "Community", "Blog"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-[var(--color-brand-deep-green)]/70 hover:text-[var(--color-brand-deep-green)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-sage)] rounded"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="#join" className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-sage)] hover:bg-[var(--color-brand-deep-green)] text-white text-sm font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-sage)]">
              Join the crew &rarr;
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden p-2 text-[var(--color-brand-deep-green)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-6 right-6 bg-white/95 backdrop-blur-xl border border-[var(--color-brand-light-sage)]/20 rounded-2xl shadow-xl p-4 flex flex-col gap-4 md:hidden">
          {["Home", "About", "Programs", "Projects", "Community", "Blog"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[var(--color-brand-deep-green)] font-semibold text-lg px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="h-px w-full bg-[var(--color-brand-light-sage)]/20 my-1" />
          <Link href="#join" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-sage)] text-white text-base font-bold px-7 py-3.5 rounded-full">
            Join the crew &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}

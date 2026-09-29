"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ButtonWithIcon } from "./ui/button-with-icon";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const searchItems = [
    { label: "About KodeToMates", href: "/#about", tag: "Overview" },
    { label: "Programs & Cohorts", href: "/#programs", tag: "Cohorts" },
    { label: "How It Works", href: "/#how-it-works", tag: "Process" },
    { label: "Featured Projects", href: "/#projects", tag: "Showcase" },
    { label: "Developer Community", href: "/#community", tag: "Discord" },
    { label: "Mentors & Guides", href: "/#mentors", tag: "Team" },
    { label: "Frequently Asked Questions", href: "/#faq", tag: "FAQ" },
    { label: "Contact Us", href: "/contact", tag: "Get in touch" },
  ];

  const filteredItems = searchQuery.trim()
    ? searchItems.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchItems;

  return (
    <header className="relative w-full z-30 pt-5 pb-3 bg-transparent select-none">
      <div className="w-full max-w-[1315px] mx-auto px-5 sm:px-8 md:px-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* 1. Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[#17202A] no-underline outline-none group shrink-0"
          >
            <div className="relative flex items-center justify-center h-[34px] transition-transform duration-200 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="KodeToMates" 
                width={38} 
                height={32} 
                className="h-[30px] w-auto object-contain"
                priority
              />
            </div>
            <span className="font-extrabold tracking-tight text-xl text-[#17202A]">
              Kode<span className="text-[var(--color-brand-primary)]">To</span>Mates
            </span>
          </Link>

          {/* 2. Center: Floating Pill Navigation Capsule */}
          <nav 
            aria-label="Main Navigation"
            className="hidden lg:flex items-center px-2 py-1.5 bg-white/55 backdrop-blur-md border border-[#17202A]/10 rounded-full shadow-[0_2px_12px_rgba(23,32,42,0.04)] transition-all"
          >
            <Link 
              href="/" 
              className="px-3.5 py-1 text-sm font-medium text-[#17202A]/85 hover:text-[var(--color-brand-primary)] hover:bg-white/80 rounded-full transition-all"
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="px-3.5 py-1 text-sm font-medium text-[#17202A]/85 hover:text-[var(--color-brand-primary)] hover:bg-white/80 rounded-full transition-all"
            >
              About Us
            </Link>
            <Link 
              href="/#programs" 
              className="px-3.5 py-1 text-sm font-medium text-[#17202A]/85 hover:text-[var(--color-brand-primary)] hover:bg-white/80 rounded-full transition-all"
            >
              Programs
            </Link>
            <Link 
              href="/#projects" 
              className="px-3.5 py-1 text-sm font-medium text-[#17202A]/85 hover:text-[var(--color-brand-primary)] hover:bg-white/80 rounded-full transition-all"
            >
              Projects
            </Link>
            <Link 
              href="/#community" 
              className="px-3.5 py-1 text-sm font-medium text-[#17202A]/85 hover:text-[var(--color-brand-primary)] hover:bg-white/80 rounded-full transition-all"
            >
              Community
            </Link>
            <Link 
              href="/contact" 
              className="px-3.5 py-1 text-sm font-medium text-[#17202A]/85 hover:text-[var(--color-brand-primary)] hover:bg-white/80 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </nav>

          {/* 3. Right: Action Buttons (Circle Search + Let's Talk CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Circle Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-[#17202A]/10 text-[#17202A] hover:text-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)]/40 hover:bg-white transition-all shadow-[0_2px_8px_rgba(23,32,42,0.04)] flex items-center justify-center cursor-pointer"
              aria-label="Search site sections"
              title="Search"
            >
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* "Let's Talk" Button with Sliding Icon Animation */}
            <div className="hidden sm:inline-flex">
              <ButtonWithIcon 
                href="/contact"
                text="Let's Talk"
                size="sm"
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="lg:hidden p-2 text-[#17202A] rounded-md hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Search Popover / Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 z-50 pt-2 px-5 sm:px-8 md:px-10">
          <div className="max-w-[560px] mx-auto bg-white/95 backdrop-blur-xl border border-[#17202A]/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3 px-3 py-2 bg-[#F8F7F4] border border-[#17202A]/10 rounded-xl">
              <svg className="w-4 h-4 text-[#8A929A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search sections, cohorts, projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-[#17202A] placeholder-[#8A929A] outline-none font-medium"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs text-[#8A929A] hover:text-[#17202A] px-1.5 py-0.5 rounded border border-[#17202A]/10 font-mono"
              >
                ESC
              </button>
            </div>

            <div className="mt-3 max-h-[260px] overflow-y-auto flex flex-col gap-1">
              {filteredItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--color-brand-primary)]/10 text-sm text-[#17202A] hover:text-[var(--color-brand-primary)] font-medium transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#8A929A] font-mono px-2 py-0.5 rounded bg-white border border-[#17202A]/10">
                    {item.tag}
                  </span>
                </Link>
              ))}
              {filteredItems.length === 0 && (
                <p className="text-center text-xs text-[#8A929A] py-4">
                  No matching sections found for &quot;{searchQuery}&quot;
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-5 right-5 mt-2 bg-white/95 backdrop-blur-xl border border-[#17202A]/10 rounded-2xl p-5 flex flex-col gap-2.5 lg:hidden shadow-xl z-50">
          <Link 
            href="/" 
            className="text-[#17202A] font-medium text-base px-3 py-2 rounded-lg hover:bg-[var(--color-brand-primary)]/10 hover:text-[var(--color-brand-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/#about" 
            className="text-[#17202A] font-medium text-base px-3 py-2 rounded-lg hover:bg-[var(--color-brand-primary)]/10 hover:text-[var(--color-brand-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/#programs" 
            className="text-[#17202A] font-medium text-base px-3 py-2 rounded-lg hover:bg-[var(--color-brand-primary)]/10 hover:text-[var(--color-brand-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Programs
          </Link>
          <Link 
            href="/#projects" 
            className="text-[#17202A] font-medium text-base px-3 py-2 rounded-lg hover:bg-[var(--color-brand-primary)]/10 hover:text-[var(--color-brand-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/#community" 
            className="text-[#17202A] font-medium text-base px-3 py-2 rounded-lg hover:bg-[var(--color-brand-primary)]/10 hover:text-[var(--color-brand-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Community
          </Link>
          <Link 
            href="/contact" 
            className="text-[#17202A] font-medium text-base px-3 py-2 rounded-lg hover:bg-[var(--color-brand-primary)]/10 hover:text-[var(--color-brand-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-[#17202A]/10 mt-1 flex justify-center">
            <ButtonWithIcon 
              href="/contact" 
              text="Let's Talk"
              size="sm"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}

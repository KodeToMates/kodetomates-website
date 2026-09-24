import React from "react";
import { Container } from "../ui/Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-brand-cream)] border-t border-[var(--color-brand-light-sage)]/20 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16 mb-16">
          <div className="col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 text-[var(--color-brand-deep-green)] font-extrabold text-xl tracking-tight mb-4">
              <div className="relative flex items-center justify-center">
                <Image 
                  src="/logo-mark.png" 
                  alt="KodeToMates" 
                  width={40} 
                  height={22} 
                />
              </div>
              <span>Kode<span className="text-[var(--color-brand-clay)]">To</span>Mates</span>
            </div>
            <p className="text-[var(--color-brand-deep-green)]/70 text-base max-w-xs mb-8">
              Build together. Learn together. Grow as mates.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-light-sage)]/20 flex items-center justify-center text-[var(--color-brand-sage)] hover:bg-[var(--color-brand-sage)] hover:text-white transition-colors">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-light-sage)]/20 flex items-center justify-center text-[var(--color-brand-sage)] hover:bg-[var(--color-brand-sage)] hover:text-white transition-colors">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-light-sage)]/20 flex items-center justify-center text-[var(--color-brand-sage)] hover:bg-[var(--color-brand-sage)] hover:text-white transition-colors">
                GH
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[var(--color-brand-deep-green)] mb-6">Product</h4>
            <ul className="flex flex-col gap-4 text-[var(--color-brand-deep-green)]/70 text-sm">
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Curriculum</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Project Board</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Pairing App</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[var(--color-brand-deep-green)] mb-6">Community</h4>
            <ul className="flex flex-col gap-4 text-[var(--color-brand-deep-green)]/70 text-sm">
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Discord Server</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Events & Demos</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Wall of Love</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-brand-deep-green)] mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-[var(--color-brand-deep-green)]/70 text-sm">
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-sage)]">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-brand-light-sage)]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-brand-deep-green)]/50">
          <p>© {new Date().getFullYear()} KodeToMates. All rights reserved.</p>
          <p>Designed with ♥ for developers.</p>
        </div>
      </Container>
    </footer>
  );
}

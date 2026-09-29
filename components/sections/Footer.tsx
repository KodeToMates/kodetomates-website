import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#F8F7F4] border-t border-[var(--color-brand-border)] pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16 mb-16">
          <div className="col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 text-[#17202A] font-extrabold text-xl tracking-tight mb-4">
              <div className="relative flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="KodeToMates" 
                  width={36} 
                  height={24} 
                  className="h-[24px] w-auto object-contain"
                />
              </div>
              <span>Kode<span className="text-[var(--color-brand-primary)]">To</span>Mates</span>
            </div>
            <p className="text-[var(--color-brand-secondary-text)] text-base max-w-xs mb-8">
              Build together. Learn together. Grow as mates.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[var(--color-brand-border)] flex items-center justify-center text-[#17202A] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors shadow-sm">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[var(--color-brand-border)] flex items-center justify-center text-[#17202A] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors shadow-sm">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[var(--color-brand-border)] flex items-center justify-center text-[#17202A] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors shadow-sm">
                GH
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#17202A] mb-6">Product</h4>
            <ul className="flex flex-col gap-4 text-[var(--color-brand-secondary-text)] text-sm">
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Project Board</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Pairing App</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[#17202A] mb-6">Community</h4>
            <ul className="flex flex-col gap-4 text-[var(--color-brand-secondary-text)] text-sm">
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Events & Demos</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Wall of Love</a></li>
              <li><Link href="/contact" className="hover:text-[var(--color-brand-primary)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#17202A] mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-[var(--color-brand-secondary-text)] text-sm">
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-brand-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-brand-secondary-text)]">
          <p>© {new Date().getFullYear()} KodeToMates. All rights reserved.</p>
          <p>Designed with ♥ for developers.</p>
        </div>
      </Container>
    </footer>
  );
}

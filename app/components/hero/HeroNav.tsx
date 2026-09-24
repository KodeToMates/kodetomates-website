import Link from 'next/link';

export default function HeroNav() {
  return (
    <header className="sticky top-0 z-[100] w-full pt-4 lg:pt-6 pb-2">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between px-5 lg:px-6 py-2.5 lg:py-3 bg-white/70 backdrop-blur-xl border border-[var(--color-brand-clay)]/20 rounded-full shadow-sm transition-all">
          <Link href="/" className="flex items-center gap-3 text-[var(--color-brand-deep-forest)] font-extrabold text-[1.1rem] tracking-tight no-underline">
            <div className="relative flex items-center justify-center w-9 h-9">
              <svg className="w-full h-full object-contain drop-shadow-sm" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-brand-kode-green)" />
                    <stop offset="100%" stopColor="#254231" />
                  </linearGradient>
                </defs>
                <g className="stroke-[var(--color-brand-deep-forest)] stroke-[14px] [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M30,80 Q50,20 80,50 T130,20" fill="none" />
                  <circle cx="130" cy="20" r="12" fill="url(#logoGradient)" className="stroke-none" />
                  <circle cx="30" cy="80" r="8" fill="var(--color-brand-clay)" className="stroke-none" />
                </g>
              </svg>
            </div>
            <span>KodeToMates</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2 m-0 p-0 list-none">
            {['Home', 'About', 'What We Do', 'Projects', 'Mates', 'Insights'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="px-3 lg:px-4 py-2 text-[0.9rem] font-medium text-[#3f4e3c] no-underline rounded-full hover:text-[var(--color-brand-deep-forest)] hover:bg-[var(--color-brand-kode-green)]/10 transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#build" className="inline-flex items-center gap-2 bg-[var(--color-brand-deep-forest)] text-[#FAF6EF] text-[0.875rem] font-semibold px-6 py-2.5 rounded-full shadow-md hover:-translate-y-0.5 hover:bg-[#112820] transition-all group">
              <span>Let's Build</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

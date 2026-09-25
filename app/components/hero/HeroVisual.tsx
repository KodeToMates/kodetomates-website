import React from 'react';

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-[1/0.95] max-w-[460px] lg:max-w-[540px] mx-auto flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute w-[280px] lg:w-[320px] h-[280px] lg:h-[320px] rounded-full bg-[radial-gradient(circle,rgba(216,184,140,0.38)_0%,rgba(85,116,95,0.2)_45%,transparent_70%)] blur-[40px] pointer-events-none z-[1]"></div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center z-[2]">
        <div className="absolute w-[65%] h-[65%] rounded-full border border-[var(--color-brand-warm-sand)]/30"></div>
        <div className="absolute w-[85%] h-[85%] rounded-full border border-[var(--color-brand-deep-forest)]/15 border-dashed"></div>
        <div className="absolute w-[100%] h-[100%] rounded-full border border-[var(--color-brand-warm-sand)]/20"></div>
      </div>

      {/* Central Glass Engine */}
      <div className="relative z-10 w-[200px] lg:w-[240px] h-[140px] lg:h-[160px] bg-white/90 backdrop-blur-xl border-[1.5px] border-white/95 rounded-[28px] shadow-[0_24px_50px_-15px_rgba(23,53,43,0.22),0_10px_24px_-5px_rgba(181,138,102,0.25),inset_0_1px_2px_rgba(255,255,255,0.9)] flex flex-col items-center justify-center p-4">
        {/* Simple inline SVG for core logo */}
        <svg className="w-[120px] lg:w-[140px] h-[60px] lg:h-[70px] block drop-shadow-sm" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradientLarge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-brand-kode-green)" />
              <stop offset="100%" stopColor="#254231" />
            </linearGradient>
          </defs>
          <g className="stroke-[var(--color-brand-deep-forest)] stroke-[14px] [stroke-linecap:round] [stroke-linejoin:round]">
            <path d="M30,80 Q50,20 80,50 T130,20" fill="none" />
            <circle cx="130" cy="20" r="12" fill="url(#logoGradientLarge)" className="stroke-none" />
            <circle cx="30" cy="80" r="8" fill="var(--color-brand-clay)" className="stroke-none" />
          </g>
        </svg>
        <span className="mt-2 text-[0.65rem] font-mono font-semibold tracking-[0.14em] text-[var(--color-brand-kode-green)] uppercase bg-[var(--color-brand-kode-green)]/10 px-2.5 py-1 rounded-full border border-[var(--color-brand-kode-green)]/15">
          Technology Studio
        </span>
      </div>

      {/* Floating Chips */}
      <div className="absolute z-[15] top-[16%] left-[20%] inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/90 backdrop-blur-md border border-[var(--color-brand-warm-sand)]/35 rounded-2xl text-[0.75rem] lg:text-[0.8rem] font-semibold text-[var(--color-brand-deep-forest)] shadow-md">
        <span className="flex items-center justify-center w-4 h-4 lg:w-4.5 lg:h-4.5 rounded-md text-[0.65rem] lg:text-[0.7rem] bg-[#72c7ff]/20 text-[#2d8bb9]">⚛</span>
        <span>React</span>
      </div>

      <div className="absolute z-[15] top-[12%] left-[68%] lg:left-[70%] inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/90 backdrop-blur-md border border-[var(--color-brand-warm-sand)]/35 rounded-2xl text-[0.75rem] lg:text-[0.8rem] font-semibold text-[var(--color-brand-deep-forest)] shadow-md">
        <span className="flex items-center justify-center w-4 h-4 lg:w-4.5 lg:h-4.5 rounded-md text-[0.65rem] lg:text-[0.7rem] bg-[#17352b]/10 text-[var(--color-brand-deep-forest)]">▲</span>
        <span>Next.js</span>
      </div>

      <div className="absolute z-[15] top-[26%] left-[60%] lg:left-[64%] hidden lg:flex bg-white/90 backdrop-blur-xl border border-[var(--color-brand-warm-sand)]/35 rounded-2xl p-2 px-3 shadow-md items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-kode-green)]/10 text-[var(--color-brand-kode-green)] grid place-items-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div>
          <div className="text-[0.88rem] font-bold text-[var(--color-brand-deep-forest)] leading-tight">100% Shared</div>
          <div className="text-[0.7rem] text-[#6a7765] font-medium">Peer Mentorship</div>
        </div>
      </div>

      <div className="absolute z-[15] top-[48%] left-[74%] lg:left-[78%] inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/90 backdrop-blur-md border border-[#c8f169]/60 rounded-2xl text-[0.75rem] lg:text-[0.8rem] font-semibold text-[var(--color-brand-deep-forest)] shadow-md">
        <span className="flex items-center justify-center w-4 h-4 lg:w-4.5 lg:h-4.5 rounded-md text-[0.65rem] lg:text-[0.7rem] bg-[#c8f169]/35 text-[#355e1c]">✦</span>
        <span>AI Systems</span>
      </div>

      <div className="absolute z-[15] top-[72%] left-[68%] lg:left-[72%] inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/90 backdrop-blur-md border border-[var(--color-brand-warm-sand)]/35 rounded-2xl text-[0.75rem] lg:text-[0.8rem] font-semibold text-[var(--color-brand-deep-forest)] shadow-md">
        <span className="flex items-center justify-center w-4 h-4 lg:w-4.5 lg:h-4.5 rounded-md text-[0.65rem] lg:text-[0.7rem] bg-[#ff806b]/20 text-[#d6503a]">❖</span>
        <span>UI/UX Craft</span>
      </div>

      <div className="absolute z-[15] top-[84%] left-[36%] lg:left-[40%] hidden lg:flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/90 backdrop-blur-md border border-[var(--color-brand-warm-sand)]/35 rounded-2xl text-[0.75rem] lg:text-[0.8rem] font-semibold text-[var(--color-brand-deep-forest)] shadow-md">
        <span className="flex items-center justify-center w-4 h-4 lg:w-4.5 lg:h-4.5 rounded-md text-[0.65rem] lg:text-[0.7rem] bg-[#a89bff]/20 text-[#6a57d6]">◈</span>
        <span>Modern Web</span>
      </div>

      <div className="absolute z-[12] top-[60%] left-[2%] lg:left-[6%] hidden lg:block bg-[#17352b]/95 backdrop-blur-md text-[#F7F1E7] p-2.5 rounded-[12px] font-mono text-[0.65rem] lg:text-[0.7rem] border border-white/10 shadow-lg">
        <div className="flex items-center gap-1.5 mb-1.5 opacity-75 text-[0.62rem]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF806B]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-warm-sand)]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-lime)]"></span>
          <span className="ml-1">pairProgram.ts</span>
        </div>
        <span className="block whitespace-nowrap"><span className="text-[var(--color-brand-coral)]">const</span> mate = <span className="text-[var(--color-brand-sky)]">pair</span>({`{`} mode: <span className="text-[var(--color-brand-lime)]">&apos;ship&apos;</span> {`}`});</span>
        <span className="block whitespace-nowrap"><span className="text-[var(--color-brand-coral)]">await</span> mate.<span className="text-[var(--color-brand-sky)]">buildTogether</span>();</span>
      </div>

      <div className="absolute z-[15] top-[78%] left-[10%] lg:left-[14%] inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/90 backdrop-blur-md border border-[var(--color-brand-warm-sand)]/35 rounded-2xl text-[0.75rem] lg:text-[0.8rem] font-semibold text-[var(--color-brand-deep-forest)] shadow-md">
        <span className="flex items-center justify-center w-4 h-4 lg:w-4.5 lg:h-4.5 rounded-md text-[0.65rem] lg:text-[0.7rem] bg-[#72c7ff]/20 text-[#1e6fa8] font-bold">TS</span>
        <span>TypeScript</span>
      </div>
    </div>
  );
}

import React from "react";

const MARQUEE_ITEMS = [
  "✦ Pair Programming",
  "✦ Rigorous Code Reviews",
  "✦ Realistic Mock Interviews",
  "✦ Open Source Contributions",
  "✦ Weekly Community Demos",
  "✦ Engineering Mentorship",
];

export function Marquee() {
  return (
    <div className="w-full bg-[var(--color-brand-cream)]/90 border-y border-[#EBE3D6] py-4 select-none relative z-20">
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex whitespace-nowrap min-w-full">
          {/* Double the list for infinite seamless scrolling */}
          <div className="flex shrink-0 animate-marquee items-center pr-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => {
              const text = item.replace("✦ ", "");
              return (
                <React.Fragment key={i}>
                  <span className="text-[var(--color-brand-tan)] mx-8">✦</span>
                  <span className="font-semibold text-xs md:text-sm text-[#6F7A66] uppercase tracking-[0.14em]">
                    {text}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
          <div className="flex shrink-0 animate-marquee items-center pr-10" aria-hidden="true">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => {
              const text = item.replace("✦ ", "");
              return (
                <React.Fragment key={i}>
                  <span className="text-[var(--color-brand-tan)] mx-8">✦</span>
                  <span className="font-semibold text-xs md:text-sm text-[#6F7A66] uppercase tracking-[0.14em]">
                    {text}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

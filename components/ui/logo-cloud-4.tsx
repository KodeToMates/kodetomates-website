'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[];
  theme?: 'light' | 'dark';
  fullWidth?: boolean;
};

export function LogoCloud({
  logos,
  theme = 'light',
  fullWidth = true,
  className,
  ...props
}: LogoCloudProps) {
  const isLight = theme === 'light';

  return (
    <div
      className={cn(
        'relative py-3 sm:py-4 overflow-hidden',
        fullWidth ? 'w-full max-w-none' : 'mx-auto max-w-3xl md:border-x',
        isLight
          ? 'bg-transparent border-[#E5E0D8]'
          : 'bg-gradient-to-r from-secondary via-transparent to-secondary border-white/10',
        className,
      )}
      {...props}
    >
      {/* Top border rule */}
      <div
        className={cn(
          '-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t',
          isLight ? 'border-[#E5E0D8]' : 'border-white/10',
        )}
      />

      {/* Infinite slider - full width stream */}
      <InfiniteSlider gap={56} reverse speed={45} speedOnHover={20}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center h-8 sm:h-9 px-2"
          >
            <img
              alt={logo.alt}
              className={cn(
                'pointer-events-none h-5 sm:h-6 max-w-[140px] object-contain select-none transition-all duration-300',
                isLight
                  ? 'brightness-0 opacity-70 hover:opacity-100'
                  : 'brightness-0 invert opacity-75 hover:opacity-100',
              )}
              height="auto"
              loading="lazy"
              src={logo.src}
              width="auto"
            />
          </div>
        ))}
      </InfiniteSlider>

      {/* Left Progressive Blur & Gradient Fade */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-0 left-0 h-full w-24 sm:w-48 z-10',
          isLight
            ? 'bg-gradient-to-r from-white via-white/80 to-transparent'
            : 'bg-gradient-to-r from-[#0C0B0A] via-[#0C0B0A]/80 to-transparent',
        )}
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[120px] sm:w-[160px] z-10"
        direction="left"
      />

      {/* Right Progressive Blur & Gradient Fade */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-0 right-0 h-full w-24 sm:w-48 z-10',
          isLight
            ? 'bg-gradient-to-l from-white via-white/80 to-transparent'
            : 'bg-gradient-to-l from-[#0C0B0A] via-[#0C0B0A]/80 to-transparent',
        )}
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[120px] sm:w-[160px] z-10"
        direction="right"
      />

      {/* Bottom border rule */}
      <div
        className={cn(
          '-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b',
          isLight ? 'border-[#E5E0D8]' : 'border-white/10',
        )}
      />
    </div>
  );
}

export default LogoCloud;

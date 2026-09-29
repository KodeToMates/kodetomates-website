'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  variant?: 'primary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function FlowButton({ 
  text = "Modern Button", 
  className = "", 
  href, 
  variant = 'primary',
  size = 'md',
  ...props 
}: FlowButtonProps) {
  
  // Style configurations mapped to brand palette tokens
  const variants = {
    primary: {
      container: "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white hover:border-[var(--color-brand-primary-hover)] shadow-sm",
      arrow: "stroke-white",
      arrowHover: "group-hover:stroke-white",
      circle: "bg-[var(--color-brand-primary-hover)]",
      textHover: "text-white",
    },
    outline: {
      container: "border-[var(--color-brand-primary)] bg-transparent text-[var(--color-brand-primary)] hover:border-transparent hover:text-white",
      arrow: "stroke-[var(--color-brand-primary)]",
      arrowHover: "group-hover:stroke-white",
      circle: "bg-[var(--color-brand-primary)]",
      textHover: "group-hover:text-white",
    },
    dark: {
      container: "border-[#17202A] bg-transparent text-[#17202A] hover:border-transparent hover:text-white",
      arrow: "stroke-[#17202A]",
      arrowHover: "group-hover:stroke-white",
      circle: "bg-[#17202A]",
      textHover: "group-hover:text-white",
    },
  };

  const sizes = {
    sm: {
      padding: "px-6 py-2.5 text-xs font-semibold",
      arrow: "w-3.5 h-3.5",
      circle: "group-hover:w-[220px] group-hover:h-[220px]",
    },
    md: {
      padding: "px-8 py-3 text-sm font-semibold",
      arrow: "w-4 h-4",
      circle: "group-hover:w-[280px] group-hover:h-[280px]",
    },
    lg: {
      padding: "px-10 py-4 text-base sm:text-lg font-bold tracking-wide",
      arrow: "w-5 h-5",
      circle: "group-hover:w-[360px] group-hover:h-[360px]",
    },
  };

  const currentVariant = variants[variant] || variants.primary;
  const currentSize = sizes[size] || sizes.md;

  const content = (
    <>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={`absolute ${currentSize.arrow} left-[-25%] ${currentVariant.arrow} fill-none z-[9] group-hover:left-4.5 ${currentVariant.arrowHover} transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]`} 
      />

      {/* Text */}
      <span className={`relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out ${currentVariant.textHover}`}>
        {text}
      </span>

      {/* Expanding circle animation */}
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${currentVariant.circle} rounded-[50%] opacity-0 ${currentSize.circle} group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]`}></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={`absolute ${currentSize.arrow} right-4.5 ${currentVariant.arrow} fill-none z-[9] group-hover:right-[-25%] ${currentVariant.arrowHover} transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]`} 
      />
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-[100px] border-[1.5px] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[14px] active:scale-[0.96] ${currentSize.padding} ${currentVariant.container} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      {...props}
      className={baseClasses}
    >
      {content}
    </button>
  );
}

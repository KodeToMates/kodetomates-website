'use client';

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonWithIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  size?: "sm" | "md";
}

export function ButtonWithIcon({
  text = "Let's Talk",
  href,
  size = "sm",
  className,
  ...props
}: ButtonWithIconProps) {
  const isSm = size === "sm";

  const content = (
    <>
      <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
        {text}
      </span>
      <div 
        className={cn(
          "absolute bg-white text-[#17202A] group-hover:text-[var(--color-brand-primary)] rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45 shadow-sm",
          isSm 
            ? "right-1 w-8 h-8 group-hover:right-[calc(100%-36px)]" 
            : "right-1 w-10 h-10 group-hover:right-[calc(100%-44px)]"
        )}
      >
        <ArrowUpRight size={isSm ? 15 : 17} className="transition-transform duration-300" />
      </div>
    </>
  );

  const baseClasses = cn(
    "relative group inline-flex items-center justify-center font-medium rounded-full overflow-hidden cursor-pointer transition-all duration-500 w-fit select-none",
    "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-hover)] border border-[var(--color-brand-primary)] shadow-sm hover:shadow-md",
    isSm 
      ? "h-10 text-xs sm:text-sm font-semibold p-1 ps-4 pe-11 hover:ps-11 hover:pe-4" 
      : "h-12 text-sm font-semibold p-1 ps-6 pe-14 hover:ps-14 hover:pe-6",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button {...props} className={baseClasses}>
      {content}
    </button>
  );
}

export default ButtonWithIcon;

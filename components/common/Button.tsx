import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  showArrow?: boolean
}

export function Button({ href, children, variant = 'primary', className = '', showArrow = false }: ButtonProps) {
  const baseStyles = 'group relative overflow-hidden inline-flex items-center justify-center px-6 py-3 font-sans font-semibold transition-all duration-300 ease-out rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background-sand motion-reduce:transition-none motion-reduce:transform-none'
  
  const variants = {
    primary: 'bg-brand-terracotta text-white shadow-[0_4px_14px_rgba(224,93,58,0.25)] hover:bg-brand-terracotta-dark hover:shadow-[0_6px_20px_rgba(224,93,58,0.4)] hover:-translate-y-[2px]',
    secondary: 'bg-surface-dim text-text-primary border border-brand-terracotta/30 hover:bg-brand-terracotta/10 shadow-sm hover:shadow-md hover:-translate-y-[2px]',
    outline: 'bg-white border border-brand-terracotta/30 text-brand-terracotta hover:bg-brand-terracotta/5 hover:border-brand-terracotta/60 shadow-sm hover:-translate-y-[2px]',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  const content = (
    <>
      <span className="relative z-10 transition-transform duration-300">
        {children}
      </span>
      {showArrow && (
        <svg 
          className="w-4 h-4 ml-2.5 relative z-10 transform transition-transform duration-300 ease-out group-hover:translate-x-[8px] group-focus-visible:translate-x-[8px] motion-reduce:transition-none motion-reduce:transform-none" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </>
  )

  if (href) {
    return <Link href={href} className={styles}>{content}</Link>
  }
  return <button className={styles}>{content}</button>
}




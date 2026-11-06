'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export interface DropdownSubMenuItem {
  label: string
  description: string
  icon: React.ElementType
  href?: string
  link?: string
}

export interface DropdownSubMenu {
  title: string
  items: DropdownSubMenuItem[]
}

export interface DropdownNavItem {
  id: number | string
  label: string
  link?: string
  href?: string
  subMenus?: DropdownSubMenu[]
}

export interface DropdownNavigationProps {
  navItems: DropdownNavItem[]
  className?: string
}

export function DropdownNavigation({ navItems, className = '' }: DropdownNavigationProps) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [isHover, setIsHover] = useState<number | string | null>(null)

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel)
  }

  return (
    <nav className={`relative w-full flex items-center justify-center px-4 py-4 ${className}`}>
      <div className="relative gap-5 flex flex-col items-center justify-center">
        <ul className="relative flex items-center space-x-1">
          {navItems.map((navItem) => {
            const hasSubMenus = Boolean(navItem.subMenus && navItem.subMenus.length > 0)
            const isOpen = openMenu === navItem.label
            const isItemHovered = isHover === navItem.id

            return (
              <li
                key={navItem.label}
                className="relative"
                onMouseEnter={() => handleHover(navItem.label)}
                onMouseLeave={() => handleHover(null)}
              >
                {hasSubMenus ? (
                  <button
                    type="button"
                    className="text-sm py-2 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1.5 text-muted-foreground hover:text-foreground relative font-sans font-medium"
                    onMouseEnter={() => setIsHover(navItem.id)}
                    onMouseLeave={() => setIsHover(null)}
                  >
                    <span className="relative z-10">{navItem.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 relative z-10 duration-300 transition-transform ${
                        isOpen ? 'rotate-180' : 'group-hover:rotate-180'
                      }`}
                    />
                    {(isItemHovered || isOpen) && (
                      <motion.div
                        layoutId="dropdown-nav-hover-bg"
                        className="absolute inset-0 size-full bg-primary/10 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={navItem.link || navItem.href || '#'}
                    className="text-sm py-2 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1.5 text-muted-foreground hover:text-foreground relative font-sans font-medium"
                    onMouseEnter={() => setIsHover(navItem.id)}
                    onMouseLeave={() => setIsHover(null)}
                  >
                    <span className="relative z-10">{navItem.label}</span>
                    {isItemHovered && (
                      <motion.div
                        layoutId="dropdown-nav-hover-bg"
                        className="absolute inset-0 size-full bg-primary/10 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                      />
                    )}
                  </Link>
                )}

                <AnimatePresence>
                  {isOpen && hasSubMenus && (
                    <div className="w-auto absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                      <motion.div
                        className="bg-background border border-border p-5 w-max shadow-xl"
                        style={{ borderRadius: 16 }}
                        layoutId="menu"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-fit shrink-0 flex space-x-8 sm:space-x-10 overflow-hidden">
                          {navItem.subMenus?.map((sub) => (
                            <motion.div layout className="w-full min-w-[210px]" key={sub.title}>
                              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
                                {sub.title}
                              </h3>
                              <ul className="space-y-4">
                                {sub.items.map((item) => {
                                  const Icon = item.icon
                                  const targetUrl = item.href || item.link || '#'

                                  return (
                                    <li key={item.label}>
                                      <Link
                                        href={targetUrl}
                                        className="flex items-start space-x-3 group p-1.5 -m-1.5 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                                      >
                                        <div className="border border-border text-foreground rounded-lg flex items-center justify-center size-9 shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                                          <Icon className="h-4.5 w-4.5 flex-none" />
                                        </div>
                                        <div className="leading-tight w-max max-w-[220px]">
                                          <p className="text-sm font-semibold text-foreground shrink-0 font-sans">
                                            {item.label}
                                          </p>
                                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 group-hover:text-foreground transition-colors duration-300 font-sans">
                                            {item.description}
                                          </p>
                                        </div>
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default DropdownNavigation


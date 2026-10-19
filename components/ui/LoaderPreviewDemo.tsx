'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UniqueLoader } from '@/components/ui/UniqueLoader'
import { Sparkles, Eye, X } from 'lucide-react'

export function LoaderPreviewDemo() {
  const [showFullscreen, setShowFullscreen] = useState(false)
  const [activeTab, setActiveTab] = useState<'card' | 'inline' | 'minimal'>('card')

  return (
    <div className="w-full my-12 p-6 sm:p-8 rounded-3xl bg-surface-paper/90 backdrop-blur-xl border border-brand-terracotta/15 shadow-[0_12px_40px_rgba(228,82,27,0.06)] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#FF914D]/10 blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-dim">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4521B]/10 text-[#E4521B] text-xs font-mono font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Unique UI Experience
          </div>
          <h2 className="text-xl sm:text-2xl font-playfair font-bold text-[#1A1614]">
            KodeToMates Unique Lazy Loader
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#5A5654] mt-0.5">
            Crafted with animated cyber-tomato glyph, liquid ripening progress, and micro-interactions.
          </p>
        </div>

        {/* Action Button: Trigger Fullscreen Modal */}
        <button
          onClick={() => setShowFullscreen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#AB003E] text-white font-sans text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(228,82,27,0.3)] hover:shadow-[0_6px_22px_rgba(228,82,27,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          <Eye className="w-4 h-4" />
          Preview Fullscreen Loader
        </button>
      </div>

      {/* Variant Selector Tabs */}
      <div className="pt-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-mono font-medium text-[#7D7670] uppercase tracking-wider mr-2">
            Variants:
          </span>
          {(['card', 'inline', 'minimal'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all capitalize cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#1A1614] text-white shadow-xs'
                  : 'bg-surface-dim/80 text-[#5A5654] hover:bg-[#E4521B]/10 hover:text-[#E4521B]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Live Variant Interactive Canvas */}
        <div className="min-h-[220px] rounded-2xl bg-surface-dim/50 border border-white/60 p-6 flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'card' && (
              <motion.div
                key="card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="w-full flex justify-center"
              >
                <UniqueLoader variant="card" title="Hydrating Module" tag="MODULE:ASYNC" />
              </motion.div>
            )}

            {activeTab === 'inline' && (
              <motion.div
                key="inline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                <UniqueLoader variant="inline" tag="FETCHING:CONTENT" />
              </motion.div>
            )}

            {activeTab === 'minimal' && (
              <motion.div
                key="minimal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <UniqueLoader variant="minimal" />
                <span className="text-xs font-mono text-[#8C847E]">
                  Ideal for buttons, live filters, and compact inline status indicators
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Modal Preview */}
      <AnimatePresence>
        {showFullscreen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Close button in top right */}
            <button
              onClick={() => setShowFullscreen(false)}
              className="fixed top-6 right-6 z-[10000] p-3 rounded-full bg-[#1A1614]/80 hover:bg-[#1A1614] text-white shadow-xl backdrop-blur-md transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Close fullscreen loader preview"
            >
              <X className="w-5 h-5" />
            </button>

            <UniqueLoader
              variant="fullscreen"
              title="KodeToMates"
              tag="DEMO:SUSPENSE_PREVIEW"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface KizhiChatTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
  hasUnread?: boolean;
}

export function KizhiChatTrigger({
  isOpen,
  onToggle,
  hasUnread = false,
}: KizhiChatTriggerProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? 'Close chat with Kizhi AI' : 'Chat with Kizhi - our AI'}
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl cursor-pointer select-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 shadow-[0_8px_24px_rgba(76,175,80,0.35),0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(76,175,80,0.5),0_4px_12px_rgba(0,0,0,0.12)] ${
        isOpen
          ? 'bg-[#141210] text-white border border-[#141210]'
          : 'bg-[#4CAF50] hover:bg-[#43A047] text-white border border-[#388E3C]'
      }`}
    >
      {/* Trigger Label */}
      <span className="font-sans font-semibold text-[13px] sm:text-[14px] text-inherit tracking-[-0.01em]">
        {isOpen ? 'Close chat' : 'Chat with Kizhi 🦜 - our AI'}
      </span>

      {/* Close Icon when active */}
      {isOpen && (
        <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white/80 group-hover:text-white">
          <X className="w-3.5 h-3.5" />
        </div>
      )}

      {/* Unread Message Notification Dot */}
      {hasUnread && !isOpen && (
        <span className="w-2 h-2 rounded-full bg-[#E4521B] animate-bounce" />
      )}
    </motion.button>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  X,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  Bot,
  User,
  Minus,
} from 'lucide-react';
import { ChatMessage, QuickPrompt } from './types';
import { QUICK_PROMPTS } from '@/lib/ai/kizhiService';

interface KizhiChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  onReset: () => void;
  isLoading: boolean;
}

export function KizhiChatWindow({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  onReset,
  isLoading,
}: KizhiChatWindowProps) {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom whenever messages change or loading state toggles
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Auto focus input on modal open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const handleQuickPromptClick = (prompt: QuickPrompt) => {
    if (isLoading) return;
    onSendMessage(prompt.query);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="kizhi-chat-window"
          role="dialog"
          aria-labelledby="kizhi-chat-title"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-22 right-4 sm:bottom-24 sm:right-7 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[540px] sm:h-[590px] max-h-[82vh] rounded-2xl overflow-hidden bg-white border border-[#DDD7CD] shadow-[0_20px_50px_rgba(0,0,0,0.14),0_6px_20px_rgba(228,82,27,0.1)] flex flex-col will-change-transform select-text"
        >
          {/* ========================================================
              1. HEADER BAR
             ======================================================== */}
          <div className="relative px-5 py-4 bg-white text-[#161413] flex items-center justify-between border-b border-[#E5E0D8] shrink-0">
            <div className="flex items-center gap-3 z-10">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E4521B] via-[#FF914D] to-[#AB003E] text-xl shadow-xs shrink-0">
                <span role="img" aria-label="Kizhi Parrot">🦜</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 id="kizhi-chat-title" className="font-sans font-bold text-[15px] text-[#161413] tracking-[-0.01em]">
                    Kizhi 🦜
                  </h3>
                  <span className="px-1.5 py-0.5 rounded-md text-[9.5px] font-mono uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-300 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AI Copilot
                  </span>
                </div>
                <p className="font-sans text-[11.5px] text-[#736B63]">
                  KodeToMates AI Assistant • Online
                </p>
              </div>
            </div>

            {/* Header Control Buttons */}
            <div className="flex items-center gap-1 z-10">
              <button
                type="button"
                onClick={onReset}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="p-2 rounded-lg text-[#736B63] hover:text-[#161413] hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onClose}
                title="Close chat"
                aria-label="Close chat"
                className="p-2 rounded-lg text-[#736B63] hover:text-[#161413] hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ========================================================
              2. MESSAGES STREAM
             ======================================================== */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-4 font-sans text-sm scroll-smooth bg-white">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
                >
                  <div className={`flex items-end gap-2 max-w-[86%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar Icon */}
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-xs shadow-xs ${
                        isUser
                          ? 'bg-[#141210] text-white'
                          : 'bg-gradient-to-tr from-[#E4521B] to-[#FF914D] text-white'
                      }`}
                    >
                      {isUser ? <User className="w-3.5 h-3.5" /> : '🦜'}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl text-[13.5px] sm:text-[14px] leading-relaxed shadow-[0_1px_4px_rgba(0,0,0,0.04)] ${
                        isUser
                          ? 'bg-gradient-to-r from-[#E4521B] to-[#E85D26] text-white rounded-br-xs font-medium'
                          : 'bg-[#FAF8F5] text-[#161413] border border-[#E8E3DA] rounded-bl-xs'
                      }`}
                    >
                      {/* Formatted Content */}
                      <div className="space-y-2 whitespace-pre-line">
                        {renderFormattedText(msg.text)}
                      </div>

                      {/* Action Links if returned by Kizhi */}
                      {msg.actionLinks && msg.actionLinks.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-[#E8E3DA] flex flex-wrap gap-1.5">
                          {msg.actionLinks.map((link, idx) => (
                            <Link
                              key={idx}
                              href={link.href}
                              onClick={onClose}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#E4521B]/10 hover:bg-[#E4521B] text-[#E4521B] hover:text-white transition-all duration-200 border border-[#E4521B]/30 cursor-pointer"
                            >
                              <span>{link.label}</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timestamp */}
                  <span className="text-[10px] font-mono text-[#8C847C] px-8">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-[#8C847C]">
                <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#E4521B] to-[#FF914D] text-white flex items-center justify-center text-xs shrink-0">
                  🦜
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-xs bg-[#FAF8F5] border border-[#E8E3DA] flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B] animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B] animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4521B] animate-bounce" />
                  <span className="text-[11.5px] font-sans text-[#736B63] ml-1">Kizhi is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ========================================================
              3. QUICK SUGGESTION CHIPS (Always accessible)
             ======================================================== */}
          <div className="px-4 py-2 border-t border-[#EAE5DC] bg-[#FAF8F5] overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0 select-none">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                type="button"
                onClick={() => handleQuickPromptClick(prompt)}
                disabled={isLoading}
                className="shrink-0 px-3 py-1 rounded-full bg-white hover:bg-[#E4521B] text-[#554E48] hover:text-white text-[11.5px] font-sans font-medium transition-colors border border-[#DDD7CD] shadow-xs cursor-pointer disabled:opacity-50"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* ========================================================
              4. INPUT BAR & FOOTER
             ======================================================== */}
          <form
            onSubmit={handleSubmit}
            className="p-3 sm:p-3.5 bg-white border-t border-[#E5E0D8] shrink-0"
          >
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Kizhi anything about our services..."
                disabled={isLoading}
                className="w-full pl-3.5 pr-11 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DDD7CD] focus:border-[#E4521B] focus:bg-white text-[13.5px] text-[#161413] placeholder:text-[#9A9188] outline-none transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                aria-label="Send message"
                className="absolute right-1 w-8 h-8 rounded-lg bg-[#E4521B] hover:bg-[#141210] text-white flex items-center justify-center transition-all duration-200 disabled:opacity-35 disabled:hover:bg-[#E4521B] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[10px] text-center text-[#999086] mt-2 font-mono">
              Demo Assistant • Python AI Model integration in development
            </p>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Basic markdown parser for bold (**text**) and lists
 */
function renderFormattedText(text: string) {
  const parts = text.split('\n');

  return parts.map((line, idx) => {
    // Bullet item
    if (line.trim().startsWith('• ') || line.trim().startsWith('- ')) {
      const content = line.trim().substring(2);
      return (
        <div key={idx} className="flex items-start gap-1.5">
          <span className="text-[#E4521B] font-bold mt-0.5">•</span>
          <span>{parseBold(content)}</span>
        </div>
      );
    }

    // Numbered list
    const numMatch = line.trim().match(/^(\d+)\.\s*(.*)/);
    if (numMatch) {
      return (
        <div key={idx} className="flex items-start gap-1.5">
          <span className="text-[#E4521B] font-mono font-bold text-xs mt-0.5">{numMatch[1]}.</span>
          <span>{parseBold(numMatch[2])}</span>
        </div>
      );
    }

    return (
      <p key={idx} className={line.trim() === '' ? 'h-2' : ''}>
        {parseBold(line)}
      </p>
    );
  });
}

function parseBold(text: string) {
  const segments = text.split(/(\*\*.*?\*\*)/g);
  return segments.map((seg, i) => {
    if (seg.startsWith('**') && seg.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-[#141210]">
          {seg.slice(2, -2)}
        </strong>
      );
    }
    return seg;
  });
}

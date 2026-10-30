'use client';

import React, { useState } from 'react';
import { KizhiChatTrigger } from './KizhiChatTrigger';
import { KizhiChatWindow } from './KizhiChatWindow';
import { ChatMessage } from './types';
import { INITIAL_GREETING_MESSAGE, sendChatMessage } from '@/lib/ai/kizhiService';

export function KizhiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const formatCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleToggle = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setHasUnread(false);
      return next;
    });
  };

  const handleSendMessage = async (text: string) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: formatCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const reply = await sendChatMessage(text, messages);
      const kizhiMsg: ChatMessage = {
        id: `kizhi-${Date.now()}`,
        sender: 'kizhi',
        text: reply.text,
        timestamp: formatCurrentTime(),
        actionLinks: reply.actionLinks,
      };

      setMessages((prev) => [...prev, kizhiMsg]);

      if (!isOpen) {
        setHasUnread(true);
      }
    } catch (err) {
      console.error('Failed to get Kizhi chat response:', err);
      const fallbackMsg: ChatMessage = {
        id: `kizhi-error-${Date.now()}`,
        sender: 'kizhi',
        text: "I encountered a brief hiccup connecting to my knowledge base. Feel free to rephrase or reach out to our team directly!",
        timestamp: formatCurrentTime(),
        actionLinks: [{ label: 'Contact Us', href: '/contact' }],
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        ...INITIAL_GREETING_MESSAGE,
        id: `welcome-${Date.now()}`,
        timestamp: formatCurrentTime(),
      },
    ]);
  };

  return (
    <>
      <KizhiChatTrigger
        isOpen={isOpen}
        onToggle={handleToggle}
        hasUnread={hasUnread}
      />

      <KizhiChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        onSendMessage={handleSendMessage}
        onReset={handleReset}
        isLoading={isLoading}
      />
    </>
  );
}

export default KizhiChatWidget;

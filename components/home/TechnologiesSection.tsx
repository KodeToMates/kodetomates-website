'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, Search, X, Sparkles, CheckCircle2 } from 'lucide-react'

// Definition of each technology item
interface TechnologyItem {
  id: string
  name: string
  category: 'Frontend' | 'Backend & Cloud' | 'Database' | 'AI & Automation' | 'DevOps & Tools'
  description: string
  useCase: string
  brandColor: string
  glowColor: string
  svg: (props: { className?: string }) => React.JSX.Element
}

// Complete library of SVG logos for each technology
const TECH_ITEMS: TechnologyItem[] = [
  // --- ROW 1 ITEMS ---
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    description: 'The React Framework for the Web with App Router, SSR & Streaming.',
    useCase: 'Primary frontend & serverless web framework for all client web apps.',
    brandColor: '#FFFFFF',
    glowColor: 'rgba(255,255,255,0.3)',
    svg: () => (
      <svg viewBox="0 0 180 180" fill="none" className="w-8 h-8">
        <circle cx="90" cy="90" r="88" fill="#000000" stroke="#333333" strokeWidth="4" />
        <path
          d="M149.508 157.438L69.1415 54H54V125.97H66.6343V69.3789L139.919 164.215C143.223 162.137 146.425 159.873 149.508 157.438Z"
          fill="url(#nextWhiteGrad)"
        />
        <rect x="114" y="54" width="12.5" height="72" fill="url(#nextWhiteGrad)" />
        <defs>
          <linearGradient id="nextWhiteGrad" x1="54" y1="54" x2="149" y2="164" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.75" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Component-driven user interface library with concurrent rendering.',
    useCase: 'Core component paradigm powering interactive design systems.',
    brandColor: '#61DAFB',
    glowColor: 'rgba(97,218,251,0.4)',
    svg: () => (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" className="w-8 h-8">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Typed superset of JavaScript providing compile-time type safety.',
    useCase: 'Strict typing across the entire codebase to prevent runtime bugs.',
    brandColor: '#3178C6',
    glowColor: 'rgba(49,120,198,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M77.4 69.8c0-8.5 7.1-12.7 18.2-12.7 7.2 0 12.8 1.9 16.5 4.3l-3.3 9.7c-3.6-2.2-7.8-3.6-13.1-3.6-5.4 0-8.2 1.9-8.2 5.1 0 3.3 2.7 4.9 9.9 7.6 11.2 4.1 17 8.7 17 17.5 0 10.4-8.5 16-20.9 16-7.8 0-14.7-2-19.1-5.1l3.5-9.8c4.1 2.9 9.3 4.8 15.3 4.8 6.4 0 9.8-2.4 9.8-5.7 0-3.5-3-5.3-10.4-8.1-10.2-3.8-15.2-8.5-15.2-16m-45.7-9.4h15v51.2h-15V60.4zm-14.7-2.9h44.4v11.7H17V57.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first CSS framework for rapid and maintainable styling.',
    useCase: 'Core design system token implementation and fluid typography.',
    brandColor: '#38BDF8',
    glowColor: 'rgba(56,189,248,0.4)',
    svg: () => (
      <svg viewBox="0 0 54 33" fill="none" className="w-8 h-8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'AI & Automation',
    description: 'State-of-the-art GPT-4o models, embeddings, and intelligent agents.',
    useCase: 'Automated content workflows, semantic vector search & AI assistants.',
    brandColor: '#10A37F',
    glowColor: 'rgba(16,163,127,0.4)',
    svg: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6726a.79.79 0 0 0-.402-.6906zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.407 9.2397V6.9074a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6595zm-11.455 4.4024l-2.4277-1.4018 2.4277-1.4017 2.4276 1.4017-2.4276 1.4018z"
          fill="#10A37F"
        />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend & Cloud',
    description: 'High-speed asynchronous event-driven JavaScript backend runtime.',
    useCase: 'Microservices, real-time WebSockets, and high-concurrency API servers.',
    brandColor: '#5FA04E',
    glowColor: 'rgba(95,160,78,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M64 4.8L8.6 36.8v64L64 123.2l55.4-32.4v-64L64 4.8zm33.4 83.9c-2.4 1.4-8.8 4.7-18.7 4.7-18.5 0-26.1-9.6-26.1-24.9 0-16.1 8.8-25.2 26.6-25.2 8.7 0 14.6 2.7 17.5 4.3l-3.3 8.3c-2.7-1.5-7.3-3.6-14.2-3.6-11.5 0-16.8 5.6-16.8 16.1 0 10.9 5.3 16 16.7 16 6.3 0 11.2-2.1 14.3-3.8l4 8.1zm-44-33.1v23.2c0 6.6-2.9 9.8-8.2 9.8-2.6 0-5.1-.8-6.9-1.9l-2.3 8.2c2.8 1.6 7 2.7 11.2 2.7 11.3 0 16.5-6.6 16.5-17.7V55.6H53.4z"
          fill="#5FA04E"
        />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend & Cloud',
    description: 'Versatile programming language for AI, data analytics, and automation.',
    useCase: 'Machine learning pipelines, FastAPI services, and data extraction bots.',
    brandColor: '#3776AB',
    glowColor: 'rgba(55,118,171,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M63.5 4C38.6 4 39.8 14.8 39.8 14.8l.1 11.2h24.4v3.5H30.1S16.5 28 16.5 53.1s11.9 24.3 11.9 24.3h7.1v-10.2s-.4-12.2 12-12.2h24.1s11.6.2 11.6-11.3V15.7S84.4 4 63.5 4zm-13 7.8c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z"
          fill="#3776AB"
        />
        <path
          d="M64.5 124c24.9 0 23.7-10.8 23.7-10.8l-.1-11.2H63.7v-3.5h34.2s13.6 1.5 13.6-23.6-11.9-24.3-11.9-24.3h-7.1v10.2s.4 12.2-12 12.2H66.4s-11.6-.2-11.6 11.3v18.2s-1.2 11.7 19.7 11.7zm13-7.8c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    description: 'The world’s most advanced open-source relational SQL database.',
    useCase: 'ACID-compliant transactional store, relational data, and JSONB schemas.',
    brandColor: '#336791',
    glowColor: 'rgba(51,103,145,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm28.7 89.9c-2.7 1.4-8.8 3.5-17.5 3.5-18.4 0-28.8-10.5-28.8-29.2 0-18.5 11.2-30.8 30.4-30.8 7.3 0 12.7 1.7 15.6 3.2l-2.9 8.2c-2.7-1.3-6.9-2.7-12.7-2.7-12.4 0-19.6 7.8-19.6 21.6 0 13.1 6.8 20.8 19.2 20.8 5.7 0 10.4-1.4 13.1-2.7l3.2 8.1z"
          fill="#336791"
        />
        <path
          d="M63 32c-17 0-31 14-31 31 0 12.8 7.8 23.8 19 28.4v-9.6c-6.1-3.8-10.2-10.6-10.2-18.4 0-12 9.8-21.8 21.8-21.8s21.8 9.8 21.8 21.8c0 7.8-4.1 14.6-10.2 18.4v9.6c11.2-4.6 19-15.6 19-28.4 0-17-14-31-31-31z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps & Tools',
    description: 'Container platform for packaging apps into uniform, reproducible images.',
    useCase: 'Consistent development environments and containerized microservice deploys.',
    brandColor: '#2496ED',
    glowColor: 'rgba(36,150,237,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M121.2 59.5c-1.3-.9-5.4-2.8-12.7-2-1.9-5.1-5.6-8.7-10.6-10.6l-2.4-.9-.9 2.4c-2 5.5-1.4 11 .9 15.3-3.6 2-8.5 2.6-14.7 2.6H10.5c-3.6 18.3 4.1 33.7 18.8 40.8 13.7 6.6 32.2 6.7 49.3.2 17.5-6.7 30.1-20.7 35.8-39.7 5.5.6 10.9-1.3 13.8-3.4 1.7-1.2 2.3-2.5 2.3-2.6l-2.3-2.1h-.2v-.6z"
          fill="#2496ED"
        />
        <rect x="42.5" y="44.2" width="11" height="9.5" rx="1.5" fill="#2496ED" />
        <rect x="56.6" y="44.2" width="11" height="9.5" rx="1.5" fill="#2496ED" />
        <rect x="70.7" y="44.2" width="11" height="9.5" rx="1.5" fill="#2496ED" />
        <rect x="28.4" y="55.8" width="11" height="9.5" rx="1.5" fill="#2496ED" />
        <rect x="42.5" y="55.8" width="11" height="9.5" rx="1.5" fill="#2496ED" />
        <rect x="56.6" y="55.8" width="11" height="9.5" rx="1.5" fill="#2496ED" />
        <rect x="70.7" y="55.8" width="11" height="9.5" rx="1.5" fill="#2496ED" />
      </svg>
    ),
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Database',
    description: 'Open source Firebase alternative powered by Postgres and Auth.',
    useCase: 'Instant REST/GraphQL APIs, row-level security, and realtime subscriptions.',
    brandColor: '#3ECF8E',
    glowColor: 'rgba(62,207,142,0.4)',
    svg: () => (
      <svg viewBox="0 0 109 113" fill="none" className="w-8 h-8">
        <path
          d="M63.7 110.3c-3.1 3.9-9.5 1.7-9.5-3.3V66.8H12.9c-4.8 0-7.4-5.6-4.3-9.3L56.5 2.6c3.1-3.9 9.5-1.7 9.5 3.3v40.2h41.3c4.8 0 7.4 5.6 4.3 9.3L63.7 110.3z"
          fill="url(#supabaseGrad)"
        />
        <defs>
          <linearGradient id="supabaseGrad" x1="56.5" y1="2.6" x2="63.7" y2="110.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'Backend & Cloud',
    description: 'A query language for your API and runtime for fulfilling those queries.',
    useCase: 'Precise data-fetching preventing over-fetching across complex relationships.',
    brandColor: '#E10098',
    glowColor: 'rgba(225,0,152,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M64 12.8L19.7 38.4v51.2L64 115.2l44.3-25.6V38.4L64 12.8zm0 8.5l37 21.4L64 64.1 27 42.7l37-21.4zm-40.4 27l36.5 21.1v42.8L23.6 82.3V48.3zm44.3 63.9V69.4l36.5-21.1v34L67.9 112.2z"
          fill="#E10098"
        />
      </svg>
    ),
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Database',
    description: 'Ultra-fast in-memory data store, distributed cache, and message broker.',
    useCase: 'High-speed session storage, rate limiting, and real-time pub/sub queuing.',
    brandColor: '#DC382D',
    glowColor: 'rgba(220,56,45,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M120.3 46.4l-53-24.8c-2.1-1-4.6-1-6.7 0l-53 24.8c-2.2 1-3.6 3.2-3.6 5.6v44.2c0 2.4 1.4 4.6 3.6 5.6l53 24.8c1 0.5 2.2 0.7 3.3 0.7s2.3-0.2 3.3-0.7l53-24.8c2.2-1 3.6-3.2 3.6-5.6V52c0-2.4-1.4-4.6-3.5-5.6z"
          fill="#DC382D"
        />
        <path d="M64 25.5l45 21-45 21-45-21 45-21z" fill="#F45A4E" />
        <path d="M19 52l45 21v43.5L19 95.5V52z" fill="#B72318" />
        <path d="M109 52v43.5L64 116.5V73l45-21z" fill="#DC382D" />
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'DevOps & Tools',
    description: 'Collaborative cloud interface design and interactive prototyping tool.',
    useCase: 'UX wireframing, component tokens, and client design reviews.',
    brandColor: '#F24E1E',
    glowColor: 'rgba(242,78,30,0.4)',
    svg: () => (
      <svg viewBox="0 0 38 57" fill="none" className="w-8 h-8">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: 'framer',
    name: 'Framer Motion',
    category: 'Frontend',
    description: 'Production-ready animation and gesture library for React interfaces.',
    useCase: 'Silky page transitions, physics-based springs, and scroll animations.',
    brandColor: '#0055FF',
    glowColor: 'rgba(0,85,255,0.4)',
    svg: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
      </svg>
    ),
  },

  // --- ROW 2 ITEMS (Offset Marquee) ---
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Backend & Cloud',
    description: 'Global Edge Network with zero-config preview branches and edge compute.',
    useCase: 'Serverless deployment infrastructure delivering sub-50ms latency.',
    brandColor: '#FFFFFF',
    glowColor: 'rgba(255,255,255,0.35)',
    svg: () => (
      <svg viewBox="0 0 1155 1000" fill="none" className="w-8 h-8">
        <path d="M577.346 0L1154.69 1000H0L577.346 0Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'DevOps & Tools',
    description: 'Cloud version control, pull request review workflows, and CI/CD Actions.',
    useCase: 'Code collaboration, automated testing pipelines, and issue tracking.',
    brandColor: '#FFFFFF',
    glowColor: 'rgba(255,255,255,0.25)',
    svg: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'DevOps & Tools',
    description: 'API development platform for designing, testing, and documenting endpoints.',
    useCase: 'Automated contract testing and mock servers for rapid frontend integration.',
    brandColor: '#FF6C37',
    glowColor: 'rgba(255,108,55,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm19.6 42.8c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3zm-39.2 0c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3zm38.1 45.4c-8.9 5.8-19.8 6.3-28.9 1.5-2.2-1.2-4-2.8-5.3-4.8-.8-1.2-.2-2.8 1.1-3.4 1.3-.6 2.8-.1 3.5 1.1 1.9 2.8 5 4.6 8.5 5 6.4.7 13.1-.9 18.2-4.2 1.2-.8 2.8-.5 3.6.7.7 1.2.4 2.8-.7 4.1z"
          fill="#FF6C37"
        />
      </svg>
    ),
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'DevOps & Tools',
    description: 'Productivity platform for automated deployment alerts and real-time team collaboration.',
    useCase: 'CI/CD webhooks, customer service notifications, and team sprints.',
    brandColor: '#E01E5A',
    glowColor: 'rgba(224,30,90,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path d="M28.4 80.3c0 7.8-6.3 14.1-14.1 14.1S.2 88.1.2 80.3s6.3-14.1 14.1-14.1h14.1v14.1zm7.1 0c0-7.8 6.3-14.1 14.1-14.1s14.1 6.3 14.1 14.1v35.4c0 7.8-6.3 14.1-14.1 14.1s-14.1-6.3-14.1-14.1V80.3z" fill="#E01E5A" />
        <path d="M47.7 28.4c-7.8 0-14.1-6.3-14.1-14.1S39.9.2 47.7.2s14.1 6.3 14.1 14.1v14.1H47.7zm0 7.1c7.8 0 14.1 6.3 14.1 14.1s-6.3 14.1-14.1 14.1H12.3C4.5 63.7-1.8 57.4-1.8 49.6s6.3-14.1 14.1-14.1h35.4z" fill="#36C5F0" />
        <path d="M99.6 47.7c0-7.8 6.3-14.1 14.1-14.1s14.1 6.3 14.1 14.1-6.3 14.1-14.1 14.1H99.6V47.7zm-7.1 0c0 7.8-6.3 14.1-14.1 14.1s-14.1-6.3-14.1-14.1V12.3c0-7.8 6.3-14.1 14.1-14.1s14.1 6.3 14.1 14.1v35.4z" fill="#2EB67D" />
        <path d="M80.3 99.6c7.8 0 14.1 6.3 14.1 14.1s-6.3 14.1-14.1 14.1-14.1-6.3-14.1-14.1V99.6h14.1zm0-7.1c-7.8 0-14.1-6.3-14.1-14.1s6.3-14.1 14.1-14.1h35.4c7.8 0 14.1 6.3 14.1 14.1s-6.3 14.1-14.1 14.1H80.3z" fill="#ECB22E" />
      </svg>
    ),
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'DevOps & Tools',
    description: 'Real-time community voice, video, and text platform for developers.',
    useCase: 'Host the KodeToMates member community and pair-programming events.',
    brandColor: '#5865F2',
    glowColor: 'rgba(88,101,242,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M107.7 22.8A99.8 99.8 0 0083.5 15.3a.5.5 0 00-.5.2c-1 1.9-2.2 4.4-3 6.3a92.4 92.4 0 00-28 0 69.8 69.8 0 00-3-6.3.5.5 0 00-.5-.2 100 100 0 00-24.2 7.5.5.5 0 00-.2.2C8.7 45.9 4.5 68.3 6.5 90.4a.5.5 0 00.2.4 100.2 100.2 0 0030.4 15.4.5.5 0 00.6-.2c2.4-3.3 4.5-6.8 6.3-10.5a.5.5 0 00-.3-.7 65.7 65.7 0 01-9.4-4.5.5.5 0 01 0-.8c.6-.5 1.3-1 1.9-1.5a.5.5 0 01.5-.1 71.6 71.6 0 0055.6 0 .5.5 0 01.5.1c.6.5 1.3 1 1.9 1.5a.5.5 0 01 0 .8 66 66 0 01-9.4 4.5.5.5 0 00-.3.7c1.8 3.7 4 7.2 6.3 10.5a.5.5 0 00.6.2 100.2 100.2 0 0030.4-15.4.5.5 0 00.2-.4c2.5-25.5-4.2-47.7-17.7-67.4a.5.5 0 00-.2-.2zM43.7 76.5c-6.1 0-11.2-5.6-11.2-12.5s4.9-12.5 11.2-12.5c6.3 0 11.4 5.7 11.2 12.5 0 6.9-4.9 12.5-11.2 12.5zm40.6 0c-6.1 0-11.2-5.6-11.2-12.5s4.9-12.5 11.2-12.5c6.3 0 11.3 5.7 11.2 12.5 0 6.9-4.9 12.5-11.2 12.5z"
          fill="#5865F2"
        />
      </svg>
    ),
  },
  {
    id: 'linear',
    name: 'Linear',
    category: 'DevOps & Tools',
    description: 'Issue tracking and project management built for high-velocity software teams.',
    useCase: 'Agile sprints, roadmap prioritization, and git-branch automated linking.',
    brandColor: '#5E6AD2',
    glowColor: 'rgba(94,106,210,0.4)',
    svg: () => (
      <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8">
        <path
          d="M1.2 59.8C.4 57.5 0 55 0 52.4c0-4.8 1.4-9.3 3.8-13.1l48.6 48.6C48.6 90.3 44 91.7 39.2 91.7c-2.6 0-5.1-.4-7.4-1.2L1.2 59.8z"
          fill="#5E6AD2"
        />
        <path
          d="M8.2 29.4C13.5 19.8 23.3 12.8 34.8 10.6L89.4 65.2C87.2 76.7 80.2 86.5 70.6 91.8L8.2 29.4z"
          fill="#5E6AD2"
        />
        <path
          d="M48.2 7.7C52.6 7 57.1 7.2 61.4 8.4l30.2 30.2c1.2 4.3 1.4 8.8.7 13.2L48.2 7.7z"
          fill="#5E6AD2"
        />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Backend & Cloud',
    description: 'Enterprise cloud hosting, S3 asset buckets, RDS, and scalable compute.',
    useCase: 'Cloud infrastructure hosting, static CDN caching, and server fleets.',
    brandColor: '#FF9900',
    glowColor: 'rgba(255,153,0,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M40.5 48.3c0-3.3-2.7-5.9-6-5.9s-5.9 2.7-5.9 5.9v23.2h-7.8V48.3c0-7.6 6.2-13.8 13.8-13.8s13.8 6.2 13.8 13.8v23.2h-7.8V48.3zm29.8 23.2h-7.8V35.4h7.8v36.1zm36.9-36.1h-8.2l-7.4 23-7.5-23h-8.2l11.5 32.7c1 2.9 3.8 4.8 6.9 4.8h.4c3.1 0 5.9-2 6.9-4.8l11.7-32.7z"
          fill="#FFFFFF"
        />
        <path
          d="M98.6 93.3c-23.7 14.4-53.7 12.3-76.3-1.6-1.5-.9-1.9-2.9-1-4.4.9-1.5 2.9-1.9 4.4-1 20.3 12.5 47.3 14.4 68.6 1.4 1.6-.9 3.6-.5 4.6 1.1.9 1.5.5 3.5-1.1 4.5h.8z"
          fill="#FF9900"
        />
        <path
          d="M102.3 83.2c-1.3-.4-2.7-.8-4.2-1.1-2-.4-3.8 1.1-4 3.1-.2 2 1.1 3.8 3.1 4 1.1.2 2.2.5 3.1.8l-1.6 4.9c-.6 1.8.4 3.8 2.2 4.4 1.8.6 3.8-.4 4.4-2.2l3.4-10.4c.5-1.5-.4-3.1-1.9-3.5l-4.5-1z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'Backend & Cloud',
    description: 'Global content delivery network, DDoS defense, DNS, and edge worker functions.',
    useCase: 'Zero-latency edge CDN caching and SSL security protection.',
    brandColor: '#F38020',
    glowColor: 'rgba(243,128,32,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M93.3 54.3c-1.6-14-13.6-24.8-28.1-24.8-13.2 0-24.3 9-27.4 21.4-2.4-.7-5-.8-7.5-.3-10.8 2.3-17.6 12.9-15.3 23.7.8 3.7 2.6 7 5.3 9.6h73.7c11.6 0 21-9.4 21-21 0-10.3-7.5-18.9-17.5-20.6l-4.2-8z"
          fill="#F38020"
        />
        <path
          d="M91.8 83.9H30.4c-.9 0-1.6-.7-1.6-1.6 0-.8.6-1.5 1.4-1.6l3.3-.4c11.6-1.6 20.3-11.6 20.3-23.3 0-1.2-.1-2.4-.3-3.6 2.3-1.4 5-2.2 7.8-2.2 8.3 0 15 6.7 15 15v14.4c0 1.8 1.5 3.3 3.3 3.3h12.2c.9 0 1.6.7 1.6 1.6 0 .9-.8 1.6-1.7 1.6z"
          fill="#FAAE40"
        />
      </svg>
    ),
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    description: 'Document database designed for flexibility, JSON schemas, and scaling.',
    useCase: 'NoSQL storage for unstructured collections and audit logs.',
    brandColor: '#47A248',
    glowColor: 'rgba(71,162,72,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M66.4 125.8c-1.5.8-3.4.8-4.9 0-13.8-7.7-41.5-30.8-41.5-68.5 0-25.5 13.8-44.5 37.8-54.8 2.3-1 4.9-1 7.2 0 24 10.3 37.8 29.3 37.8 54.8 0 37.7-27.7 60.8-41.5 68.5h5.1z"
          fill="#47A248"
        />
        <path
          d="M63.8 2.5c-.7.3-1.4.7-2 1.1-24 10.3-37.8 29.3-37.8 54.8 0 37.7 27.7 60.8 41.5 68.5 1.5.8 3.4.8 4.9 0V2.5h-6.6z"
          fill="#499D4A"
        />
        <path
          d="M64 7.6v114.7c-1.5-.8-3.4-.8-4.9 0-13.8-7.7-41.5-30.8-41.5-68.5 0-25.5 13.8-44.5 37.8-54.8 2.8-1.2 5.8-1.2 8.6.6v8z"
          fill="#58AA50"
        />
      </svg>
    ),
  },
  {
    id: 'prisma',
    name: 'Prisma',
    category: 'Database',
    description: 'Next-generation Node.js and TypeScript ORM with auto-generated types.',
    useCase: 'Type-safe database migrations and high-performance querying.',
    brandColor: '#2D3748',
    glowColor: 'rgba(90,103,216,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M102.5 98.4L67.1 11.2c-1.2-3-4.9-4.2-7.7-2.6l-46 26.6c-2.3 1.3-3.4 4-2.6 6.5l30.4 78.8c1.1 2.9 4.6 4.3 7.4 2.9l51.5-21.7c2.6-1.1 3.6-4.1 2.4-6.7v2.9z"
          fill="#2D3748"
        />
        <path
          d="M62.5 12.8L20.8 36.9c-1.4.8-2.1 2.4-1.6 3.9l27.5 71.3c.7 1.8 2.8 2.6 4.5 1.7l46.5-19.6c1.6-.7 2.2-2.5 1.5-4L62.5 12.8z"
          fill="#5A67D8"
        />
      </svg>
    ),
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'Frontend',
    description: 'Lightning-fast native ES modules frontend build tool and dev server.',
    useCase: 'Rapid rapid-prototyping, bundle optimization, and test runners.',
    brandColor: '#646CFF',
    glowColor: 'rgba(100,108,255,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M123.8 21.8L68.7 121.7c-1.8 3.2-6.5 3.2-8.3 0L5.3 21.8c-2-3.6.8-8 4.9-7.8l53.9 3.2 54.8-3.2c4.1-.2 6.9 4.2 4.9 7.8z"
          fill="url(#viteGrad1)"
        />
        <path
          d="M87.3 15.4L64 76.5l-6.8-17.7 20.9-43.4H87.3z"
          fill="url(#viteGrad2)"
        />
        <defs>
          <linearGradient id="viteGrad1" x1="14" y1="12" x2="114" y2="124" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="viteGrad2" x1="57" y1="15" x2="87" y2="76" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEA83" />
            <stop offset="1" stopColor="#FFDD35" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'playwright',
    name: 'Playwright',
    category: 'DevOps & Tools',
    description: 'Cross-browser reliable end-to-end testing across Chromium, WebKit & Firefox.',
    useCase: 'Automated smoke tests, visual regression, and reliability validation.',
    brandColor: '#2EAD33',
    glowColor: 'rgba(46,173,51,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <circle cx="48" cy="64" r="36" fill="#2EAD33" />
        <circle cx="80" cy="64" r="36" fill="#E23E3E" opacity="0.85" />
        <path d="M64 42v44" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <path d="M42 64h44" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'zustand',
    name: 'Zustand',
    category: 'Frontend',
    description: 'A small, fast, and scalable bearbones state-management solution.',
    useCase: 'Client state management without boilerplate or context re-render overhead.',
    brandColor: '#443E38',
    glowColor: 'rgba(255,145,77,0.35)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <circle cx="64" cy="64" r="54" fill="#3A332C" />
        <ellipse cx="64" cy="72" rx="32" ry="24" fill="#E8B07D" />
        <circle cx="50" cy="56" r="6" fill="#FFFFFF" />
        <circle cx="78" cy="56" r="6" fill="#FFFFFF" />
        <circle cx="51" cy="56" r="3" fill="#1A1817" />
        <circle cx="77" cy="56" r="3" fill="#1A1817" />
        <ellipse cx="64" cy="70" rx="9" ry="6" fill="#1A1817" />
      </svg>
    ),
  },
  {
    id: 'langchain',
    name: 'LangChain & Agents',
    category: 'AI & Automation',
    description: 'Orchestration framework for composable LLM chains and autonomous agents.',
    useCase: 'Multi-agent pair-programming systems, RAG memory, and prompt chains.',
    brandColor: '#00A67E',
    glowColor: 'rgba(0,166,126,0.4)',
    svg: () => (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect width="128" height="128" rx="28" fill="#1C1E24" />
        <circle cx="64" cy="64" r="28" stroke="#00A67E" strokeWidth="5" fill="none" strokeDasharray="12 6" />
        <circle cx="64" cy="40" r="8" fill="#FF914D" />
        <circle cx="44" cy="76" r="8" fill="#00A67E" />
        <circle cx="84" cy="76" r="8" fill="#AB003E" />
        <line x1="64" y1="48" x2="48" y2="70" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" />
        <line x1="64" y1="48" x2="80" y2="70" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" />
        <line x1="52" y1="76" x2="76" y2="76" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" />
      </svg>
    ),
  },
]

// Separate into two staggered continuous rows
const ROW_1 = TECH_ITEMS.slice(0, 14)
const ROW_2 = TECH_ITEMS.slice(14, 28)

const CATEGORIES = [
  'All',
  'Frontend',
  'Backend & Cloud',
  'Database',
  'AI & Automation',
  'DevOps & Tools',
] as const

/**
 * TechnologiesSection Component
 * Recreates the exact curved dual-marquee tech integrations banner from the reference screenshot,
 * meticulously styled to match the KodeToMates aesthetic, colors, and typography.
 */
export function TechnologiesSection() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeTech, setActiveTech] = useState<TechnologyItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Filtered tech items for the explore modal
  const filteredTechs = TECH_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.useCase.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section
      id="technologies"
      className="relative z-10 w-full py-20 sm:py-28 overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#181226_0%,#0C0A14_100%)] text-white selection:bg-[#E4521B]/30 selection:text-[#FF914D]"
      aria-labelledby="technologies-heading"
    >
      {/* ========================================================
          BACKGROUND AMBIENT ATMOSPHERE & BRAND RADIAL GLOWS
         ======================================================== */}
      {/* Central Warm Terracotta Glow (matching reference image center spotlight) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[480px] rounded-full pointer-events-none blur-[140px] opacity-35"
        style={{
          background: 'radial-gradient(circle, #E4521B 0%, #FF914D 35%, #AB003E 65%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle Starry / Cyber Dot Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#FF914D_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10">
        {/* ========================================================
            CENTERED SECTION HEADER
           ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Brand Title with Layered Dual-Square Icon */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-center gap-2.5 sm:gap-3 mb-3.5 select-none cursor-default"
          >
            {/* Layered Dual-Square Icon matching Brand Style */}
            <span className="flex items-center justify-center shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="7.5" height="7.5" rx="1.5" fill="#FF914D" fillOpacity="0.6" />
                <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.5" fill="#AB003E" />
              </svg>
            </span>

            <span className="font-sans font-bold text-[14px] sm:text-[16px] tracking-wider uppercase bg-gradient-to-r from-[#FF914D] to-[#AB003E] bg-clip-text text-transparent">
              CORE TECH ECOSYSTEM
            </span>
          </motion.div>

          {/* Main Headline (Exact title requested by user with brand styling) */}
          <motion.h2
            id="technologies-heading"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.4rem,4.6vw,4rem)] font-bold text-white leading-[1.12] tracking-tight mb-3"
          >
            Technologies{' '}
            <span className="bg-gradient-to-r from-[#FF914D] via-[#FF7A3D] to-[#AB003E] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,145,77,0.35)]">
              We Are Using
            </span>
          </motion.h2>

          {/* Decorative Dash Line with Dot (━━━━ ▪) matching What We Do */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-2 my-3 sm:my-3.5 origin-center"
            aria-hidden="true"
          >
            <span className="w-14 sm:w-16 h-[3.5px] rounded-[1px] bg-gradient-to-r from-[#FF914D] to-[#AB003E]" />
            <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#AB003E]" />
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[15px] sm:text-[17px] leading-[1.68] text-[#B0A7A0] max-w-2xl font-normal"
          >
            Production-grade frameworks, ultra-fast runtimes, cloud infrastructure, and modern AI pipelines engineered for speed, modularity, and scale.
          </motion.p>
        </div>

        {/* ========================================================
            CATEGORY FILTER TABS (Interactive Pills)
           ======================================================== */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-10 select-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans font-medium transition-all duration-200 cursor-pointer ${isActive
                  ? 'bg-gradient-to-r from-[#FF914D] to-[#AB003E] text-white shadow-[0_4px_16px_rgba(228,82,27,0.35)] scale-105'
                  : 'bg-white/5 text-[#9E958E] hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* ========================================================
          FULL-WIDTH CURVED DUAL-ROW MARQUEE (Spans 100% Viewport)
         ======================================================== */}
      <div className="relative w-full pt-30 pb-34 sm:pt-24 sm:pb-34 select-none group overflow-hidden z-10">
        {/* Left Edge Gradient Fade Mask */}
        <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-48 lg:w-72 z-20 pointer-events-none bg-gradient-to-r from-[#0C0A14] via-[#0C0A14]/90 to-transparent" />
        {/* Right Edge Gradient Fade Mask */}
        <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-48 lg:w-72 z-20 pointer-events-none bg-gradient-to-l from-[#0C0A14] via-[#0C0A14]/90 to-transparent" />

        {/* Arched Perspective Container (gentle dome curvature matching screenshot) */}
        <div className="relative flex flex-col gap-4 sm:gap-6 [perspective:1200px]">
          {/* ROW 1: Scrolls Left - Tooltip renders above */}
          <div className="flex gap-4 sm:gap-5 w-max animate-marquee-left group-hover-pause">
            {/* 4x duplicated array for ultra-wide seamless infinite loop */}
            {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((tech, idx) => {
              const isHighlighted = selectedCategory === 'All' || tech.category === selectedCategory
              return (
                <TechTile
                  key={`row1-${tech.id}-${idx}`}
                  tech={tech}
                  isHighlighted={isHighlighted}
                  tooltipPosition="top"
                  onClick={() => setActiveTech(tech)}
                />
              )
            })}
          </div>

          {/* ROW 2: Offset Scrolls Right - Tooltip renders below */}
          <div className="flex gap-4 sm:gap-5 w-max animate-marquee-right group-hover-pause pl-8">
            {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((tech, idx) => {
              const isHighlighted = selectedCategory === 'All' || tech.category === selectedCategory
              return (
                <TechTile
                  key={`row2-${tech.id}-${idx}`}
                  tech={tech}
                  isHighlighted={isHighlighted}
                  tooltipPosition="bottom"
                  onClick={() => setActiveTech(tech)}
                />
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10">
        {/* ========================================================
            CENTERED BOTTOM ACTION BUTTON
            (Matching "Browse all integrations" in reference screenshot)
           ======================================================== */}
        <div className="mt-2 sm:mt-4 flex flex-col items-center justify-center">
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF914D] via-[#E4521B] to-[#AB003E] text-white font-sans text-sm sm:text-[15px] font-semibold shadow-[0_4px_24px_rgba(228,82,27,0.38)] hover:shadow-[0_8px_36px_rgba(228,82,27,0.6)] transition-all cursor-pointer overflow-hidden"
          >
            {/* Luminous sheen wave */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
              style={{ animation: 'shimmer-sweep 2.8s infinite linear' }}
            />
            <Sparkles className="w-4 h-4 text-[#FED7AA]" />
            <span>Browse All Technologies</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>

          <p className="mt-3.5 text-xs font-mono text-[#8C847E]">
            28+ core frameworks, databases &amp; AI tools in active production
          </p>
        </div>
      </div>

      {/* ========================================================
          INTERACTIVE DETAIL MODAL / QUICK-VIEW DRAWER
         ======================================================== */}
      {/* 1. Single Tech Quick-View Popup */}
      <AnimatePresence>
        {activeTech && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/75 backdrop-blur-md"
            onClick={() => setActiveTech(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#161224] border border-[#FF914D]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-white overflow-hidden"
            >
              <button
                onClick={() => setActiveTech(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#B0A7A0] hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 border border-white/10 shadow-lg"
                  style={{ backgroundColor: '#1E1933' }}
                >
                  <activeTech.svg />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase bg-[#E4521B]/20 text-[#FF914D] border border-[#E4521B]/30 mb-1">
                    {activeTech.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">{activeTech.name}</h3>
                </div>
              </div>

              <p className="text-sm text-[#D5CEC8] leading-relaxed mb-4">
                {activeTech.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF914D] font-semibold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>How KodeToMates Uses It:</span>
                </div>
                <p className="text-xs text-[#A8A099] leading-normal">{activeTech.useCase}</p>
              </div>

              <button
                onClick={() => setActiveTech(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-sans text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Full Directory "Browse All Technologies" Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[88vh] rounded-[28px] sm:rounded-[36px] bg-[#141021] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-white"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4521B]/15 text-[#FF914D] text-xs font-mono font-semibold uppercase mb-2">
                    <Sparkles className="w-3 h-3" />
                    Complete Tech Directory
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Technologies We Are Using
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  {/* Search Input */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C847E]" />
                    <input
                      type="text"
                      placeholder="Search technology..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-sans text-white placeholder:text-[#8C847E] focus:outline-none focus:border-[#FF914D]"
                    />
                  </div>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#A39B95] hover:text-white transition-colors cursor-pointer shrink-0"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Scrollable Grid of All Technologies */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredTechs.map((tech) => (
                    <div
                      key={tech.id}
                      className="group p-4 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-[#FF914D]/40 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3.5 mb-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 shrink-0 bg-[#1D182E] border border-white/10 group-hover:scale-105 transition-transform"
                        >
                          <tech.svg />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-semibold uppercase text-[#FF914D]">
                            {tech.category}
                          </span>
                          <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#FF914D] transition-colors">
                            {tech.name}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs text-[#A8A099] line-clamp-2 leading-relaxed">
                        {tech.description}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-white/5 text-[11px] font-sans text-[#8C847E]">
                        <span className="text-[#FF914D] font-medium">Role:</span> {tech.useCase}
                      </div>
                    </div>
                  ))}
                </div>

                {filteredTechs.length === 0 && (
                  <div className="py-12 text-center text-[#8C847E] font-sans text-sm">
                    No technologies found matching &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

/**
 * Individual Squircle Technology Tile
 * Features custom brand glow, hover scale, and tooltip
 */
function TechTile({
  tech,
  isHighlighted,
  onClick,
  tooltipPosition = 'top',
}: {
  tech: TechnologyItem
  isHighlighted: boolean
  onClick: () => void
  tooltipPosition?: 'top' | 'bottom'
}) {
  const [isHovered, setIsHovered] = useState(false)
  const isTop = tooltipPosition === 'top'

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group/tile flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-2xl cursor-pointer transition-all duration-300 ${isHovered ? 'z-40' : 'z-10'
        } ${isHighlighted
          ? 'bg-[#181329]/90 border border-white/15 hover:border-[#FF914D]/70 hover:bg-[#221B38] hover:scale-110 hover:-translate-y-1.5'
          : 'bg-[#141021]/60 border border-white/5 opacity-35 hover:opacity-100 hover:border-white/20'
        }`}
      style={{
        boxShadow: isHovered
          ? `0 10px 28px -4px ${tech.glowColor}, 0 0 12px 0 ${tech.glowColor}`
          : '0 4px 16px rgba(0,0,0,0.3)',
      }}
      role="button"
      aria-label={`View details for ${tech.name}`}
    >
      {/* SVG Icon */}
      <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover/tile:scale-110">
        <tech.svg />
      </div>

      {/* Floating Hover Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: isTop ? 8 : -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isTop ? 6 : -6, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className={`absolute ${isTop ? 'bottom-full mb-3' : 'top-full mt-3'
              } z-50 pointer-events-none px-3.5 py-1.5 rounded-xl bg-[#0F0C1A] border border-white/25 shadow-[0_12px_32px_rgba(0,0,0,0.85)] whitespace-nowrap text-center`}
          >
            <div className="text-xs font-serif font-bold text-white tracking-wide">{tech.name}</div>
            <div className="text-[10px] font-mono text-[#FF914D] font-medium">{tech.category}</div>
            {/* Tooltip Arrow */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${isTop
                ? 'top-full border-t-[#0F0C1A]'
                : 'bottom-full border-b-[#0F0C1A]'
                }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

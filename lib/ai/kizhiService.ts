import { ChatMessage, ActionLink } from '@/components/ai/types';

export const INITIAL_GREETING_MESSAGE: ChatMessage = {
  id: 'welcome-kizhi',
  sender: 'kizhi',
  text: "Vanakkam! I'm **Kizhi 🦜**, KodeToMates' AI copilot. Whether you're exploring a new web build, modernizing an existing site, or scaling organic reach with technical SEO, I'm here to help guide you.",
  timestamp: 'Just now',
  actionLinks: [
    { label: 'Explore Services', href: '/what-we-do' },
    { label: 'Get in Touch', href: '/contact' },
  ],
};

export const QUICK_PROMPTS = [
  {
    id: 'services',
    label: '✨ What services do you offer?',
    query: 'What services do you offer at KodeToMates?',
  },
  {
    id: 'redesign',
    label: '🔄 Tell me about Website Redesign',
    query: 'How does your website redesign process work?',
  },
  {
    id: 'seo',
    label: '📈 How does Technical SEO help?',
    query: 'What is included in your technical SEO service?',
  },
  {
    id: 'stack',
    label: '⚡ What tech stack do you build with?',
    query: 'What technologies and frameworks do you use?',
  },
  {
    id: 'contact',
    label: '📬 How can I get a quote?',
    query: 'How do I start a project or request a quote?',
  },
];

interface IntentResponse {
  text: string;
  actionLinks?: ActionLink[];
}

/**
 * Parses user input to provide realistic, helpful demo responses.
 * When the Python backend is integrated, this function can route directly to the LLM API.
 */
function resolveDemoResponse(query: string): IntentResponse {
  const q = query.toLowerCase().trim();

  // 1. Services Overview
  if (q.includes('service') || q.includes('what do you do') || q.includes('offer')) {
    return {
      text: "At **KodeToMates**, we are a collaborative technology community & digital engineering studio. Our core solutions include:\n\n• **Bespoke Web Development**: Custom-engineered, high-performance web applications.\n• **Website Redesign & Modernization**: Transforming dated sites into high-converting digital flagships.\n• **Technical SEO & Growth**: Sub-second Core Web Vitals, topical authority, and crawlability optimization.\n• **Digital Invitations & Creative Tech**: Immersive, elegant digital experiences.",
      actionLinks: [
        { label: 'View All Services', href: '/what-we-do' },
        { label: 'Start a Project', href: '/contact' },
      ],
    };
  }

  // 2. Website Redesign
  if (q.includes('redesign') || q.includes('moderniz') || q.includes('dated') || q.includes('rebuild')) {
    return {
      text: "Our **Website Redesign** approach is built on purposeful modernization—not novelty for the sake of it:\n\n1. **Rethink Experience**: Remove friction and confusing menus to clarify customer journeys.\n2. **Reflect Current Brand**: Elevate visual craft to command instant credibility and client trust.\n3. **Sub-Second Speed**: Re-engineer the tech stack on Next.js 15 for lightning-fast edge performance.\n4. **Measurable Outcomes**: Layouts engineered directly for lead conversion and pipeline growth.",
      actionLinks: [
        { label: 'Website Redesign Scope', href: '/what-we-do/website-redesign' },
        { label: 'Request Redesign Audit', href: '/contact' },
      ],
    };
  }

  // 3. Technical SEO
  if (q.includes('seo') || q.includes('search engine') || q.includes('rank') || q.includes('google') || q.includes('traffic')) {
    return {
      text: "Our **Search Engine Optimization (SEO)** is engineering-first and sustainable:\n\n• **Technical Crawlability**: Clean indexing signals, XML sitemaps, and robots configuration.\n• **Core Web Vitals**: Sub-second Largest Contentful Paint (LCP) and zero layout shift (CLS).\n• **Topical Authority**: High-intent keyword mapping and semantic content structure.\n• **Local Reach & Analytics**: Google Business alignment and continuous performance measurement.",
      actionLinks: [
        { label: 'Explore SEO Framework', href: '/what-we-do/seo' },
        { label: 'Free SEO Audit Inquiry', href: '/contact' },
      ],
    };
  }

  // 4. Tech Stack & Engineering
  if (q.includes('stack') || q.includes('tech') || q.includes('framework') || q.includes('next') || q.includes('react') || q.includes('code')) {
    return {
      text: "We build with modern, production-grade technologies designed for longevity:\n\n• **Framework**: Next.js 15 (App Router, Server Components)\n• **Language**: TypeScript for strict end-to-end type safety\n• **Styling**: Tailwind CSS & Vanilla CSS with tailored design tokens\n• **Animations**: Framer Motion & GSAP for silky 60fps micro-interactions\n• **Infrastructure**: Global edge caching with sub-second response times.",
      actionLinks: [
        { label: 'Learn About Our Community', href: '/community' },
        { label: 'Work With Us', href: '/contact' },
      ],
    };
  }

  // 5. Pricing, Quote & Getting Started
  if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('hire') || q.includes('contact') || q.includes('start') || q.includes('budget')) {
    return {
      text: "Every project at KodeToMates is scoped collaboratively to match your exact goals, timeline, and technical requirements. We offer transparent pricing with zero hidden fees or rigid lock-ins.\n\nShare your project vision through our brief enquiry form and our team will get back to you with a tailored roadmap within 24–48 hours.",
      actionLinks: [
        { label: 'Start Your Enquiry', href: '/contact' },
      ],
    };
  }

  // 6. Greetings
  if (q.startsWith('hi') || q.startsWith('hello') || q.startsWith('hey') || q === 'vanakkam') {
    return {
      text: "Vanakkam! 🦜 Great to connect with you! I can tell you about our web development, website redesign, technical SEO services, or guide you toward getting in touch with our team. What are you looking to create?",
      actionLinks: [
        { label: 'See What We Do', href: '/what-we-do' },
        { label: 'Get in Touch', href: '/contact' },
      ],
    };
  }

  // 7. General Fallback
  return {
    text: `That's a great question! 🦜 As KodeToMates' AI copilot, I'm currently running in **Demo Mode** while our full-scale Python AI model is in training.\n\nOur engineering team would love to discuss your specific requirements directly and work through the details together.`,
    actionLinks: [
      { label: 'Talk to Our Team', href: '/contact' },
      { label: 'Explore Our Approach', href: '/what-we-do' },
    ],
  };
}
/**
 * Main chat dispatch function.
 * Connects directly to the live Groq-powered Next.js API route (/api/kizhi-chat).
 * Automatically falls back to the local demo intent engine if offline or rate-limited.
 */
export async function sendChatMessage(query: string, history: ChatMessage[] = []): Promise<IntentResponse> {
  const isBackendEnabled = process.env.NEXT_PUBLIC_ENABLE_AI_BACKEND !== 'false';

  if (isBackendEnabled) {
    try {
      const response = await fetch('/api/kizhi-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply || data.text) {
          return {
            text: data.reply || data.text,
            actionLinks: data.actionLinks,
          };
        }
      } else {
        console.warn(`Kizhi API returned ${response.status}, falling back to local intent engine.`);
      }
    } catch (err) {
      console.warn('Kizhi AI API request error, falling back to local engine:', err);
    }
  }

  // Fallback: Simulate brief thinking delay and return structured local response
  await new Promise((resolve) => setTimeout(resolve, 500));
  return resolveDemoResponse(query);
}

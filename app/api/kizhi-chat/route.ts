import { NextRequest, NextResponse } from 'next/server';

interface ActionLink {
  label: string;
  href: string;
}

const KIZHI_SYSTEM_PROMPT = `
You are Kizhi 🦜, the official AI copilot and digital ambassador for KodeToMates.
KodeToMates is a premier collaborative technology community & digital engineering studio based in Tamil Nadu, India, working with ambitious businesses globally.

Your personality:
- Warm, welcoming, modern, and engineering-savvy.
- You can naturally use the friendly Tamil greeting "Vanakkam!" when greeting or saying hello.
- Keep responses concise, well-structured, and visually scannable with markdown (bullet points, bold text).
- Avoid fluff, buzzword-heavy jargon, or overly long essays. Keep answers typically within 2 to 4 concise paragraphs or clean bullet lists.

Core Services & Expertise of KodeToMates:
1. Bespoke Web Development:
   - Modern, high-performance web applications built with Next.js 15, React 19, TypeScript, and Tailwind CSS.
   - Smooth 60fps micro-animations using Framer Motion and GSAP.
   - Sub-second edge performance and responsive design across all devices.

2. Website Redesign & Modernization:
   - Transforming dated, clunky, or slow sites into modern, high-converting digital flagships.
   - Redesigning user journeys to maximize lead generation, conversion rates, and trust.
   - Zero-downtime, safe migration with preserved SEO rankings.

3. Technical SEO & Organic Growth:
   - Engineering-first SEO: Sub-second Core Web Vitals (LCP, INP, CLS).
   - Deep technical crawlability, XML sitemaps, semantic schema markup (JSON-LD), and canonical structures.
   - Topical authority mapping and high-intent keyword strategies.

4. Community & Collaboration:
   - A thriving community of passionate developers, designers, and creators building together.
   - Transparent pricing, zero lock-in contracts, and collaborative partnerships.

Important Site Navigation / Routes:
- Services Overview: /what-we-do
- Website Redesign: /what-we-do/website-redesign
- Technical SEO: /what-we-do/seo
- Contact / Free Audit / Quotes: /contact
- Community: /community

Always be genuinely helpful, accurate, and guide prospective clients towards contacting the team or exploring relevant service pages.
`;

function determineActionLinks(query: string, reply: string): ActionLink[] {
  const combined = `${query} ${reply}`.toLowerCase();

  if (combined.includes('seo') || combined.includes('crawl') || combined.includes('search engine') || combined.includes('rank') || combined.includes('core web vital')) {
    return [
      { label: 'Explore Technical SEO', href: '/what-we-do/seo' },
      { label: 'Request Free SEO Audit', href: '/contact' },
    ];
  }

  if (combined.includes('redesign') || combined.includes('moderniz') || combined.includes('revamp') || combined.includes('dated') || combined.includes('rebuild')) {
    return [
      { label: 'Website Redesign Scope', href: '/what-we-do/website-redesign' },
      { label: 'Schedule Consultation', href: '/contact' },
    ];
  }

  if (combined.includes('quote') || combined.includes('price') || combined.includes('cost') || combined.includes('contact') || combined.includes('hire') || combined.includes('start')) {
    return [
      { label: 'Start Your Enquiry', href: '/contact' },
      { label: 'Explore Services', href: '/what-we-do' },
    ];
  }

  if (combined.includes('community') || combined.includes('developer') || combined.includes('mates') || combined.includes('join')) {
    return [
      { label: 'Explore Community', href: '/community' },
      { label: 'Get in Touch', href: '/contact' },
    ];
  }

  return [
    { label: 'Explore Services', href: '/what-we-do' },
    { label: 'Get in Touch', href: '/contact' },
  ];
}

// In-memory cache for working model to avoid repeated discovery requests
let cachedWorkingModel: string | null = null;
let lastModelFetchTime = 0;
let cachedActiveModels: string[] = [];

async function getLiveActiveModels(apiKey: string): Promise<string[]> {
  const now = Date.now();
  if (cachedActiveModels.length > 0 && now - lastModelFetchTime < 300000) {
    return cachedActiveModels;
  }

  try {
    const res = await fetch('https://api.groq.com/openai/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.data)) {
        const textModels = data.data
          .filter((m: { id: string; active?: boolean }) => {
            if (m.active === false) return false;
            const id = m.id.toLowerCase();
            // Exclude audio and guardrail models
            if (id.includes('whisper') || id.includes('guard') || id.includes('mixtral')) return false;
            return true;
          })
          .map((m: { id: string }) => m.id);

        cachedActiveModels = textModels;
        lastModelFetchTime = now;
        return textModels;
      }
    }
  } catch (err) {
    console.warn('Could not query active models from Groq:', err);
  }

  return ['llama-3.1-8b-instant', 'llama-3.3-70b-versatile'];
}

export async function GET() {
  try {
    const apiKey = process.env.GROQ_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json({
        ok: false,
        error: 'GROQ_API_KEY is not defined in environment variables or .env.local',
      }, { status: 500 });
    }

    const testRes = await fetch('https://api.groq.com/openai/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!testRes.ok) {
      const errText = await testRes.text();
      return NextResponse.json({
        ok: false,
        status: testRes.status,
        statusText: testRes.statusText,
        error: 'Failed to authenticate or fetch models from Groq',
        details: errText,
      }, { status: testRes.status });
    }

    const data = await testRes.json();
    const activeModels = Array.isArray(data.data)
      ? data.data
          .filter((m: { id: string; active?: boolean }) => m.active !== false && !m.id.includes('whisper') && !m.id.includes('mixtral'))
          .map((m: { id: string }) => m.id)
      : [];

    return NextResponse.json({
      ok: true,
      status: 'Groq API connected successfully',
      preferredModel: process.env.GROQ_MODEL?.trim() || 'llama-3.1-8b-instant',
      cachedWorkingModel,
      activeChatModelsCount: activeModels.length,
      activeChatModels: activeModels,
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: errMsg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Groq API key is not configured.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required.' },
        { status: 400 }
      );
    }

    // Format chat messages including recent history for context (up to last 6 messages)
    const formattedHistory = Array.isArray(history)
      ? history.slice(-6).map((msg: { sender?: string; role?: string; text?: string; content?: string }) => ({
          role: msg.sender === 'kizhi' || msg.role === 'assistant' ? 'assistant' : 'user',
          content: msg.text || msg.content || '',
        })).filter((m: { content: string }) => m.content.trim().length > 0)
      : [];

    const messages = [
      { role: 'system', content: KIZHI_SYSTEM_PROMPT.trim() },
      ...formattedHistory,
      { role: 'user', content: message.trim() },
    ];

    // Discover live active models from Groq
    const liveActiveModels = await getLiveActiveModels(apiKey);
    const configured = process.env.GROQ_MODEL?.trim();

    // Priority: cached working model -> configured model -> llama-3.1-8b-instant -> live active models
    const candidateModels = Array.from(
      new Set(
        [
          cachedWorkingModel,
          configured,
          'llama-3.1-8b-instant',
          'llama-3.3-70b-versatile',
          ...liveActiveModels,
        ].filter(Boolean) as string[]
      )
    );

    let lastError: { status: number; statusText: string; details: unknown } | null = null;
    let replyText: string | null = null;

    for (const model of candidateModels) {
      try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: 0.65,
            max_tokens: 500,
            top_p: 0.95,
          }),
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          const candidateText = data?.choices?.[0]?.message?.content?.trim();
          if (candidateText) {
            replyText = candidateText;
            cachedWorkingModel = model; // Cache this working model for instant reuse!
            console.log(`[Kizhi Groq] Successfully generated response using model: ${model}`);
            break;
          }
        } else {
          const rawErr = await groqResponse.text();
          let parsed: unknown = rawErr;
          try {
            parsed = JSON.parse(rawErr);
          } catch {
            // keep raw text
          }
          console.warn(`[Kizhi Groq] Model "${model}" failed (${groqResponse.status}):`, rawErr);
          lastError = {
            status: groqResponse.status,
            statusText: groqResponse.statusText,
            details: parsed,
          };

          // If model is decommissioned (400) or not found (404), continue trying next active model
          if (groqResponse.status === 404 || groqResponse.status === 400) {
            continue;
          } else {
            // Stop on 401 unauthorized or 429 rate limit
            break;
          }
        }
      } catch (networkErr: unknown) {
        console.error(`Network error attempting model "${model}":`, networkErr);
      }
    }

    if (!replyText) {
      return NextResponse.json(
        {
          error: lastError ? `Groq error: ${lastError.statusText}` : 'Failed to generate response from Groq',
          details: lastError?.details || null,
        },
        { status: lastError?.status || 500 }
      );
    }

    const actionLinks = determineActionLinks(message, replyText);

    return NextResponse.json({
      reply: replyText,
      actionLinks,
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Internal Server Error';
    console.error('Kizhi Chat Route Error:', errMsg);
    return NextResponse.json(
      { error: errMsg },
      { status: 500 }
    );
  }
}

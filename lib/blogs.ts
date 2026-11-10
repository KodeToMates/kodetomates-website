import blogsData from '@/data/blogs.json'

export type SectionType =
  | 'heading'
  | 'paragraph'
  | 'table'
  | 'chart'
  | 'image'
  | 'callout'
  | 'cta'

export interface HeadingSection {
  type: 'heading'
  level: 2 | 3
  text: string
}

export interface ParagraphSection {
  type: 'paragraph'
  text: string
}

export interface TableSection {
  type: 'table'
  caption?: string
  headers: string[]
  rows: string[][]
}

export interface ChartItem {
  label: string
  value: number
  note?: string
}

export interface ChartSection {
  type: 'chart'
  title: string
  chartType: 'metric' | 'comparison' | 'bar'
  items: ChartItem[]
}

export interface ImageSection {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export interface CalloutSection {
  type: 'callout'
  variant?: 'tip' | 'info' | 'quote'
  text: string
  citation?: string
}

export interface CTASection {
  type: 'cta'
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export type ArticleSection =
  | HeadingSection
  | ParagraphSection
  | TableSection
  | ChartSection
  | ImageSection
  | CalloutSection
  | CTASection

export interface ArticleLink {
  word: string
  startWord?: string
  endWord?: string
  startIndex?: number
  endIndex?: number
  url: string
  isExternal: boolean
}

export interface ArticleAuthor {
  name: string
  role: string
  avatar: string
}

export interface BlogArticle {
  id: string
  slug: string
  title: string
  category: string
  publishDate: string
  readTime: string
  mainImage: string
  description: string
  author: ArticleAuthor
  links: ArticleLink[]
  sections: ArticleSection[]
}

export interface BlogsJsonData {
  articles: BlogArticle[]
}

const data = blogsData as BlogsJsonData

/**
 * Synchronous local retrieval of blog articles (fallback)
 */
export function getAllArticlesSync(): BlogArticle[] {
  return data.articles
}

export function getArticleBySlugSync(slug: string): BlogArticle | undefined {
  return data.articles.find((a) => a.slug === slug)
}

/**
 * Asynchronous retrieval of all published articles from Spring Boot API with Next.js ISR.
 * Falls back to static blogs.json if the backend is asleep or during offline builds.
 */
export async function getAllArticles(): Promise<BlogArticle[]> {
  const backendBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === 'production'
      ? 'https://api.kodetomates.in/api/v1'
      : 'http://localhost:8081/api/v1')

  try {
    const res = await fetch(`${backendBaseUrl.replace(/\/+$/, '')}/public/blogs`, {
      next: { tags: ['blogs'], revalidate: 0 },
      cache: 'no-store', // Ensures immediate reflection in dev mode
      signal: AbortSignal.timeout(4000),
    })

    if (res.ok) {
      const remoteArticles: BlogArticle[] = await res.json()
      if (Array.isArray(remoteArticles) && remoteArticles.length > 0) {
        // Prepend remote database articles (newest first), then any remaining static articles
        const remoteSlugs = new Set(remoteArticles.map((a) => a.slug))
        const remainingStatic = data.articles.filter((a) => !remoteSlugs.has(a.slug))
        return [...remoteArticles, ...remainingStatic]
      }
    }
  } catch (err) {
    // Backend asleep or unreachable - safely use static fallback
  }

  return data.articles
}

/**
 * Asynchronous retrieval of a single article by slug with Next.js ISR.
 */
export async function getArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
  const backendBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === 'production'
      ? 'https://api.kodetomates.in/api/v1'
      : 'http://localhost:8081/api/v1')

  try {
    const res = await fetch(`${backendBaseUrl.replace(/\/+$/, '')}/public/blogs/${slug}`, {
      next: { tags: ['blogs', `blog-${slug}`], revalidate: 0 },
      cache: 'no-store',
      signal: AbortSignal.timeout(4000),
    })

    if (res.ok) {
      const article = await res.json()
      if (article && article.slug) {
        return article
      }
    }
  } catch (err) {
    // Backend asleep or unreachable - safely use static fallback
  }

  return data.articles.find((a) => a.slug === slug)
}

/**
 * Retrieve unique list of all categories across all articles
 */
export function getAllCategories(articles?: BlogArticle[]): string[] {
  const list = articles || data.articles
  const set = new Set<string>()
  list.forEach((a) => set.add(a.category))
  return Array.from(set)
}

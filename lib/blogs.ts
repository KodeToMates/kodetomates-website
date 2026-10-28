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
 * Retrieve all blog articles
 */
export function getAllArticles(): BlogArticle[] {
  return data.articles
}

/**
 * Retrieve a single article by its URL slug
 */
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return data.articles.find((a) => a.slug === slug)
}

/**
 * Retrieve unique list of all categories across all articles
 */
export function getAllCategories(): string[] {
  const set = new Set<string>()
  data.articles.forEach((a) => set.add(a.category))
  return Array.from(set)
}

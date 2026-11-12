import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/**
 * On-Demand Cache Revalidation Webhook
 * Triggered by Spring Boot backend when an article is published, updated, or deleted.
 * Purges the static CDN cache for /blog and /blog/[slug], ensuring 0ms visitor load times.
 */
export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('x-revalidate-secret')
    const expectedSecret = process.env.REVALIDATION_SECRET_TOKEN || 'ktm_revalidate_secure_token_2026'

    if (!secret || secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid or missing revalidation secret' }, { status: 401 })
    }

    const body = await request.json().catch(() => ({}))
    const paths: string[] = Array.isArray(body?.paths) && body.paths.length > 0 ? body.paths : ['/blog']

    for (const path of paths) {
      revalidatePath(path)
    }

    return NextResponse.json({
      revalidated: true,
      paths,
      revalidatedAt: new Date().toISOString(),
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { message: 'Error revalidating static cache', error: errorMessage },
      { status: 500 }
    )
  }
}


import { getApiBaseUrl } from './contact'

export interface SeoAuditRequestPayload {
  fullName: string
  email: string
  websiteUrl: string
  primaryGoal?: string
  monthlyTraffic?: string
  notes?: string
}

export interface SeoAuditResponse {
  success: boolean
  message: string
  id?: number
}

/**
 * Submits the technical SEO audit form payload to POST /api/v1/seo-audit
 */
export async function submitSeoAuditRequest(
  payload: SeoAuditRequestPayload
): Promise<SeoAuditResponse> {
  const baseUrl = getApiBaseUrl()
  const endpoint = `${baseUrl}/seo-audit`

  let response: Response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch (networkError) {
    const errorDetails = networkError instanceof Error ? networkError.message : 'Network error'
    throw new Error(
      `Unable to connect to the backend server (${errorDetails}). Please ensure the backend is running on ${baseUrl}.`
    )
  }

  const responseData = await response.json().catch(() => null)

  if (!response.ok) {
    const serverMessage =
      responseData?.message ||
      responseData?.error ||
      `Server returned HTTP ${response.status}`
    throw new Error(serverMessage)
  }

  return responseData as SeoAuditResponse
}

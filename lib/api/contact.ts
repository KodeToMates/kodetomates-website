import { ContactRequestPayload, ContactSuccessResponse } from '@/types/contact'

const PRODUCTION_API_URL = 'https://api.kodetomates.in/api/v1'
const LOCAL_API_URL = 'http://localhost:8081/api/v1'

/**
 * Returns the configured API base URL, stripped of any trailing slash.
 * 
 * Resolution order:
 * 1. process.env.NEXT_PUBLIC_API_BASE_URL (if configured in Vercel or .env.local)
 * 2. If running in production (e.g. Vercel deployment): https://api.kodetomates.in/api/v1
 * 3. If running in local development: http://localhost:8081/api/v1
 */
export function getApiBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/+$/, '')
  }

  // Safety guard: Never call localhost in a production deployment
  if (process.env.NODE_ENV === 'production') {
    return PRODUCTION_API_URL
  }

  return LOCAL_API_URL
}

/**
 * Submits the contact request payload to POST /api/v1/contact.
 * Throws a descriptive Error if the network fails or backend returns an error response.
 */
export async function submitContactRequest(
  payload: ContactRequestPayload
): Promise<ContactSuccessResponse> {
  const baseUrl = getApiBaseUrl()
  const endpoint = `${baseUrl}/contact`

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
      `Unable to connect to the backend server (${errorDetails}). Please ensure the backend is running and reachable, or try again later.`
    )
  }

  const responseData = await response.json().catch(() => null)

  if (!response.ok) {
    // Extract any descriptive message returned by the server
    const serverMessage =
      responseData?.message ||
      responseData?.error ||
      `Server returned HTTP ${response.status} ${response.statusText}`.trim()
    throw new Error(serverMessage)
  }

  // Verify that the response includes a confirmation message
  if (!responseData || typeof responseData.message !== 'string') {
    return { message: 'Contact request submitted successfully' }
  }

  return responseData as ContactSuccessResponse
}

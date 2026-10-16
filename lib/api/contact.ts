import { ContactRequestPayload, ContactSuccessResponse } from '@/types/contact'

/**
 * Returns the configured API base URL, stripped of any trailing slash.
 * Defaults to the local Spring Boot backend (http://localhost:8081/api/v1).
 */
export function getApiBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/+$/, '')
  }
  return 'http://localhost:8081/api/v1'
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

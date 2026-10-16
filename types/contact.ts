export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

export interface ContactRequestPayload {
  fullName: string
  email: string
  phone?: string
  company?: string
  message: string
  leadSource?: string
}

export interface ContactSuccessResponse {
  message: string
}

export interface ContactErrorResponse {
  message?: string
  error?: string
  status?: number
  timestamp?: string
  path?: string
}

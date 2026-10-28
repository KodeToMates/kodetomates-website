export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

export const CONTACT_SUBJECT_OPTIONS = [
  'General Inquiry',
  'Project Collaboration',
  'Join the Community',
  'Mentorship & Learning',
  'Technical Partnership',
  'Website / App Development',
  'Other',
] as const

export const initialContactFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
}

export interface ContactRequestPayload {
  fullName: string
  email: string
  phone?: string
  company?: string
  subject?: string
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

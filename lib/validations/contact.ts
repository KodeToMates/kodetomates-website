import { ContactFormData } from '@/types/contact'

export interface ContactValidationResult {
  isValid: boolean
  errors: Partial<Record<keyof ContactFormData, string>>
  firstError?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/

export function validateContactForm(data: ContactFormData): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {}

  const trimmedName = data.name.trim()
  if (!trimmedName) {
    errors.name = 'Please enter your full name.'
  } else if (trimmedName.length < 2) {
    errors.name = 'Full name must be at least 2 characters.'
  }

  const trimmedEmail = data.email.trim()
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }

  const trimmedSubject = data.subject.trim()
  if (!trimmedSubject) {
    errors.subject = 'Please select or specify a subject.'
  }

  const trimmedMessage = data.message.trim()
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.'
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Please write a message of at least 10 characters.'
  }

  const trimmedPhone = data.phone.trim()
  if (trimmedPhone && !PHONE_REGEX.test(trimmedPhone)) {
    errors.phone = 'Please enter a valid phone number (digits and optional country code).'
  }

  const errorKeys = Object.keys(errors) as (keyof ContactFormData)[]
  const isValid = errorKeys.length === 0
  const firstError = isValid ? undefined : errors[errorKeys[0]]

  return {
    isValid,
    errors,
    firstError,
  }
}

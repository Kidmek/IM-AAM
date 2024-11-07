import { emailRegex } from './strings/common'

export function validateEmail(email: string) {
  if (!email) {
    return 'Please enter your email address'
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }

  return ''
}

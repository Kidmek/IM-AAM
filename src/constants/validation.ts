import { emailRegex } from './strings/common'

export type UserType = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
  userName: string
}

export type LoginType = {
  username: string
  password: string
}

export function validateEmail(email: string) {
  if (!email) {
    return 'Please enter your email address'
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }

  return ''
}

export function validateUser(user: UserType, userErr: UserType) {
  let isValid = true
  const emailValidation = validateEmail(user.email)
  if (user.fullName.length < 5 || user.fullName.trim() === '') {
    userErr.fullName = 'Full name must be at least 5 characters'
    isValid = false
  }

  if (user.email.length < 5 || user.email.trim() === '') {
    userErr.email = 'Email must be at least 5 characters'
    isValid = false
  } else if (emailValidation.length) {
    userErr.email = emailValidation
    isValid = false
  }

  if (user.password.length < 8 || user.password.trim() === '') {
    userErr.password = 'Password must be at least 8 characters'
    isValid = false
  }

  if (user.confirmPassword.length < 8 || user.confirmPassword.trim() === '') {
    userErr.confirmPassword = 'Confirm password must be at least 8 characters'
    isValid = false
  } else if (user.password !== user.confirmPassword) {
    userErr.confirmPassword = 'Passwords do not match'
    isValid = false
  }

  if (user.phoneNumber.length < 5 || user.phoneNumber.trim() === '') {
    userErr.phoneNumber = 'Phone number must be at least 5 characters'
    isValid = false
  }

  if (user.userName.length < 5 || user.userName.trim() === '') {
    userErr.userName = 'Username must be at least 5 characters'
    isValid = false
  }
  return isValid
}

export function validateLogin(user: LoginType, userErr: LoginType) {
  let isValid = true
  if (user.username.length < 5 || user.username.trim() === '') {
    userErr.username = 'Username must be at least 5 characters'
    isValid = false
  }
  if (user.password.length < 8 || user.password.trim() === '') {
    userErr.password = 'Password must be at least 8 characters'
    isValid = false
  }
  return isValid
}

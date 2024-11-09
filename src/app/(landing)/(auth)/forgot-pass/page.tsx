'use client'

import { useState } from 'react'
import CustomInput from '@/components/inputs/CustomInput'
import CustomButton from '@/components/button/CustomButton'

import style from '../auth.module.css'
import Link from 'next/link'
import { validateEmail } from '@/constants/validation'
import { BackIcon_SVG } from '@/constants/images'

export default function ForgotPass() {
  const [user, setUser] = useState({ email: '' })
  const [userErr, setUserErr] = useState({ email: '' })

  const [sent, setSent] = useState(false)

  const handleChange = (value: string, name?: string) => {
    if (name) {
      setUser({ ...user, [name]: value })
    }
  }

  const onReset = () => {
    const err = { email: validateEmail(user.email) }
    setUserErr(err)
    if (err.email) {
      return
    }
    setSent(true)
  }

  return (
    <div className={style.formWrapper}>
      <div
        className={style.backIcon}
        onClick={() => {
          if (sent) {
            setSent(false)
          } else {
            window.history.back()
          }
        }}
      >
        <BackIcon_SVG /> Back
      </div>
      <div className={style.formContainer}>
        <div>{!sent ? 'Reset your Password' : 'Password Sent'}</div>
        <div className={style.form}>
          <div className={style.resetText}>
            {!sent ? (
              <span>
                Enter your <b>IM-AAM</b> email Address so we can reset your
                password
              </span>
            ) : (
              <span>
                An email has been sent to <b>{user.email}</b> if this email
                address is registered to IM-AMM.com , you’ll receive
                instructions on how to set a new password.
              </span>
            )}
          </div>

          {!sent && (
            <div>
              <CustomInput
                label='Email'
                state={user.email}
                setState={handleChange}
                name='email'
                placeholder='Email'
                type='email'
                isForm={true}
                error={userErr.email}
              />
            </div>
          )}

          {!sent ? (
            <CustomButton label='Next' onClick={onReset} />
          ) : (
            <Link href={'/reset-pass'} className={'text-end'}>
              Didn&apos;t get an email?
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

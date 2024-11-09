'use client'

import { useState } from 'react'
import CustomInput from '@/components/inputs/CustomInput'
import CustomButton from '@/components/button/CustomButton'

import style from '../auth.module.css'
import { BackIcon_SVG } from '@/constants/images'
import { useRouter } from 'next/navigation'

export default function ResetPass() {
  const navigate = useRouter()
  const [user, setUser] = useState({ password: '', confirmPassword: '' })

  const handleChange = (value: string, name?: string) => {
    if (name) {
      setUser({ ...user, [name]: value })
    }
  }

  const onReset = () => {
    navigate.replace('/login')
    return
  }

  return (
    <div className={style.formWrapper}>
      <div className={style.backIcon} onClick={() => navigate.back()}>
        <BackIcon_SVG /> Back
      </div>
      <div className={style.formContainer}>
        <div>Reset Password</div>
        <div className={style.form}>
          <div>
            <CustomInput
              label='New Password'
              state={user.password}
              setState={handleChange}
              name='password'
              placeholder='Password'
              isForm={true}
              type='password'
            />
            <CustomInput
              label='Confirm Password'
              state={user.confirmPassword}
              setState={handleChange}
              name='confirmPassword'
              placeholder='Confirm Password'
              isForm={true}
              type='password'
            />
          </div>

          <CustomButton label='Reset My Password' onClick={onReset} />
        </div>
      </div>
    </div>
  )
}

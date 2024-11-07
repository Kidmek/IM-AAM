'use client'

import { useState } from 'react'
import CustomInput from '../../../../components/inputs/CustomInput'
import CustomButton from '../../../../components/button/CustomButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import style from '../auth.module.css'

export default function Registration() {
  const navigate = useRouter()
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    userName: '',
  })
  const [agree, setAgree] = useState(false)

  const handleChange = (value: string, name?: string) => {
    if (name) {
      setUser({ ...user, [name]: value })
    }
  }

  const onRegister = () => {
    navigate.push('/email-verification')
    if (agree) {
      console.log(user)
    }
  }

  return (
    <div className={style.formWrapper}>
      <div className={style.formContainer}>
        <div>Registration</div>
        <div className={style.form}>
          <div>
            <CustomInput
              label='Full Name'
              state={user.fullName}
              setState={handleChange}
              name='fullName'
              placeholder='Full Name'
              isForm={true}
            />
            <CustomInput
              label='User Name'
              state={user.userName}
              setState={handleChange}
              name='userName'
              placeholder='User Name'
              isForm={true}
            />
            <CustomInput
              label='Email'
              state={user.email}
              setState={handleChange}
              name='email'
              placeholder='Email'
              isForm={true}
            />
            <CustomInput
              label='Phone Number'
              state={user.phoneNumber}
              setState={handleChange}
              name='phoneNumber'
              placeholder='Phone Number'
              isForm={true}
            />
            <CustomInput
              label='Password'
              state={user.password}
              setState={handleChange}
              name='password'
              placeholder='Password'
              isForm={true}
            />
            <CustomInput
              label='Confirm Password'
              state={user.confirmPassword}
              setState={handleChange}
              name='confirmPassword'
              placeholder='Confirm Password'
              isForm={true}
            />

            <div className={style.terms}>
              <input
                type='checkbox'
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <div>
                Agree with our{' '}
                <Link href='/terms-and-conditions'>terms and condition</Link>
              </div>
            </div>
          </div>

          <CustomButton label='Register' onClick={onRegister} />
          <p className={style.noAccount}>
            Already have an account? <Link href={'/login'}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

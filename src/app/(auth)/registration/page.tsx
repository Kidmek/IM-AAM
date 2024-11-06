'use client'

import { useState } from 'react'
import CustomInput from '../../../components/inputs/CustomInput'
import { Logo } from '../../../constants/images'
import style from './page.module.css'
import CustomButton from '../../../components/button/CustomButton'
import { Moto } from '@/constants/strings/common'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
    navigate.push('/home')
    if (agree) {
      console.log(user)
    }
  }

  return (
    <div className={style.registrationContainer}>
      <div className={style.logoContainer}>
        <div>
          <Image alt='Logo' src={Logo} className={style.logo} />
          <div className={style.logoText}>{Moto}</div>
        </div>
      </div>
      <div className={style.formWrapper}>
        <div className={style.formContainer}>
          <div>Registration</div>
          <div>
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
                  <span onClick={() => navigate.push('/terms-and-conditions')}>
                    terms and condition
                  </span>
                </div>
              </div>
            </div>

            <CustomButton label='Register' onClick={onRegister} />
          </div>
        </div>
      </div>
    </div>
  )
}

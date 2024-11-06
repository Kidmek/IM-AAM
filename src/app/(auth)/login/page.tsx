'use client'

import { useState } from 'react'
import CustomInput from '../../../components/inputs/CustomInput'
import { Apple_SVG, Google_SVG, Logo } from '../../../constants/images'
import style from './page.module.css'
import CustomButton from '../../../components/button/CustomButton'
import { Moto } from '@/constants/strings/common'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  const navigate = useRouter()
  const [user, setUser] = useState({
    password: '',
    userName: '',
  })
  const [remember, setRemember] = useState(false)

  const handleChange = (value: string, name?: string) => {
    if (name) {
      setUser({ ...user, [name]: value })
    }
  }

  const onLogin = () => {
    navigate.push('/home')
    if (remember) {
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
          <div>Login</div>
          <div>
            <div>
              <CustomInput
                label='Username'
                state={user.userName}
                setState={handleChange}
                name='userName'
                placeholder='Username'
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

              <div className={style.terms}>
                <input
                  type='checkbox'
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <div>Remember me</div>
              </div>
            </div>

            <CustomButton label='Login' onClick={onLogin} />

            <div className={style.forgot}>Forgot username or password?</div>
            <p className={style.noAccount}>
              New to IM-AAM? <Link href={'/registration'}>Sign up</Link>
            </p>
            <div className={style.or}>OR</div>

            <div className={style.socialLogin}>
              <CustomButton
                label='Continue with Google'
                onClick={onLogin}
                Icon={Google_SVG}
                bgColor='rgba(51, 51, 51, 1)'
              />
              <CustomButton
                label='Continue with Apple'
                onClick={onLogin}
                Icon={Apple_SVG}
                bgColor='rgba(51, 51, 51, 1)'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

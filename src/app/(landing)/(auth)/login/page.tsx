'use client'

import { useState } from 'react'
import CustomInput from '@/components/inputs/CustomInput'
import { Apple_SVG, Google_SVG } from '@/constants/icons'
import CustomButton from '@/components/button/CustomButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import style from '../auth.module.css'
import { setToken } from '@/api/apiConfig'

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
    if (remember) {
      console.log(user)
    }
    setToken('test')
    navigate.replace('/portfolio/position-trader')
  }

  return (
    <div className={style.formWrapper}>
      <div className={style.formContainer}>
        <div>Login</div>
        <div className={style.form}>
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
              type='password'
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

          <Link href={'/forgot-pass'}>
            <div className={style.forgot}>Forgot username or password?</div>
          </Link>
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
  )
}

'use client'

import { useState } from 'react'
import CustomInput from '@/components/inputs/CustomInput'
import { Apple_SVG, Google_SVG } from '@/constants/icons'
import CustomButton from '@/components/button/CustomButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import style from '../auth.module.css'
import { apiSkeleton, setToken } from '@/api/apiConfig'
import { LoginType, validateLogin } from '@/constants/validation'
import { LOGIN_API, TEST } from '@/constants/strings/api'

const initialUserState: LoginType = Object.freeze({
  username: '',
  password: '',
})

export default function Login() {
  const navigate = useRouter()
  const [user, setUser] = useState<LoginType>(initialUserState)
  const [userErr, setUserErr] = useState<LoginType>(initialUserState)

  const [remember, setRemember] = useState(false)
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (value: string, name?: string) => {
    if (name) {
      setUser({ ...user, [name]: value })
    }
  }

  const onLogin = () => {
    if (remember) {
      console.log(user)
    }
    if (TEST) {
      setToken('test', 'test')
      navigate.replace('/portfolio/position-trader')
      return
    }
    const newUserErr = { ...initialUserState }
    const valid = validateLogin(user, newUserErr)
    setUserErr(newUserErr)

    if (valid) {
      apiSkeleton({
        type: 'post',
        url: LOGIN_API,
        dataToSend: user,
        setLoading,
        onSuccess(data) {
          console.log('Response', data)
          navigate.replace('/portfolio/position-trader')
          setToken(data.access, data.refresh)
        },
        onError(error) {
          if (error && error?.length < 100) {
            setFormError(error)
          } else {
            setFormError('Unable to login')
          }
        },
      })
    }
  }

  return (
    <div className={style.formWrapper}>
      <div className={style.formContainer}>
        <div>Login</div>
        <div className={style.form}>
          <div>
            <CustomInput
              label='Username'
              state={user.username}
              setState={handleChange}
              name='username'
              placeholder='username'
              error={userErr.username}
              isForm={true}
            />

            <CustomInput
              label='Password'
              state={user.password}
              setState={handleChange}
              name='password'
              placeholder='Password'
              error={userErr.password}
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

          {formError && <span className={style.formError}>{formError}</span>}

          <CustomButton label='Login' onClick={onLogin} loading={loading} />

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
              Icon={Google_SVG}
              bgColor='rgba(51, 51, 51, 1)'
            />
            <CustomButton
              label='Continue with Apple'
              Icon={Apple_SVG}
              bgColor='rgba(51, 51, 51, 1)'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

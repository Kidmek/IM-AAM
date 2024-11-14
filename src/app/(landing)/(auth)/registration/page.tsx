'use client'

import { useState } from 'react'
import CustomInput from '../../../../components/inputs/CustomInput'
import CustomButton from '../../../../components/button/CustomButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import style from '../auth.module.css'
import Dialog from '@/components/dialog/Dialog'
import WarningPopup from '@/components/popUp/WarningPopup'
import { UserType, validateUser } from '@/constants/validation'
import { apiSkeleton, setToken } from '@/api/apiConfig'
import { REGISTER_API } from '@/constants/strings/api'

const initialUserState: UserType = Object.freeze({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  userName: '',
})

export default function Registration() {
  const navigate = useRouter()
  const [user, setUser] = useState<UserType>(initialUserState)
  const [formError, setFormError] = useState('')

  const [userErr, setUserErr] = useState<UserType>(initialUserState)

  const [loading, setLoading] = useState(false)
  const [agree, setAgree] = useState(false)
  const [popUpShown, setPopUpShown] = useState<boolean>(true)

  const handleChange = (value: string, name?: string) => {
    if (name) {
      setUser({ ...user, [name]: value })
    }
  }

  const onRegister = () => {
    if (!agree) {
      setPopUpShown(false)
    } else {
      setToken('test')
      navigate.push('/home')
      return
      const newUserErr = { ...initialUserState }
      const valid = validateUser(user, newUserErr)
      setUserErr(newUserErr)

      if (valid) {
        setToken('test')
        navigate.push('/home')
        return
        const {
          email,
          password,
          fullName: full_name,
          confirmPassword: password2,
          phoneNumber: phone,
          userName: username,
        } = user
        apiSkeleton({
          type: 'post',
          url: REGISTER_API,
          dataToSend: {
            full_name,
            email,
            password,
            password2,
            phone,
            username,
          },
          setLoading,
          onSuccess(data) {
            console.log('Response', data)
            setToken('test')
            navigate.push('/home')
          },
          onError(error) {
            if (error && error?.length < 100) {
              setFormError(error)
            } else {
              setFormError('Unable to register')
            }
          },
        })
      }
    }
  }

  return (
    <div className={style.formWrapper}>
      {!popUpShown && (
        <Dialog
          child={
            <WarningPopup
              onResponse={(response) => {
                setAgree(response)
                setPopUpShown(true)
              }}
            />
          }
          onClose={() => setPopUpShown(true)}
        />
      )}
      <div className={style.formContainer}>
        <div>Registration</div>
        <div className={style.form}>
          <div>
            <CustomInput
              label='Full Name'
              state={user.fullName}
              error={userErr.fullName}
              setState={handleChange}
              name='fullName'
              placeholder='Full Name'
              isForm={true}
            />
            <CustomInput
              label='User Name'
              state={user.userName}
              error={userErr.userName}
              setState={handleChange}
              name='userName'
              placeholder='User Name'
              isForm={true}
            />
            <CustomInput
              label='Email'
              state={user.email}
              error={userErr.email}
              setState={handleChange}
              name='email'
              placeholder='Email'
              isForm={true}
            />
            <CustomInput
              label='Phone Number'
              state={user.phoneNumber}
              error={userErr.phoneNumber}
              setState={handleChange}
              name='phoneNumber'
              placeholder='Phone Number'
              isForm={true}
            />
            <CustomInput
              label='Password'
              state={user.password}
              error={userErr.password}
              setState={handleChange}
              name='password'
              placeholder='Password'
              isForm={true}
              type='password'
            />
            <CustomInput
              label='Confirm Password'
              state={user.confirmPassword}
              error={userErr.confirmPassword}
              setState={handleChange}
              name='confirmPassword'
              placeholder='Confirm Password'
              isForm={true}
              type='password'
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
          {formError && <span>{formError}</span>}
          <CustomButton
            label='Register'
            onClick={onRegister}
            loading={loading}
          />
          <p className={style.noAccount}>
            Already have an account? <Link href={'/login'}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

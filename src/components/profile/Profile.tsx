import { useState } from 'react'
import CustomButton from '../button/CustomButton'
import CustomInput from '../inputs/CustomInput'
import style from './profile.module.css'

const user = {
  name: 'John Doe',
  email: 'L9M4Z@example.com',
}
export default function Profile() {
  const [password, setPassword] = useState({
    old: '',
    new: '',
    confirm: '',
  })
  const renderDetails = (label: string, value: string) => {
    return (
      <div className={style.single}>
        <div className={style.label}>{label}</div>
        <div>{value}</div>
      </div>
    )
  }

  const renderPassInput = (label: string, value: 'old' | 'new' | 'confirm') => {
    return (
      <div className={style.single}>
        <div className={style.label}>{label}</div>
        <CustomInput
          state={password[value]}
          setState={(v) => setPassword({ ...password, [value]: v })}
          placeholder={label}
        />
      </div>
    )
  }

  return (
    <div className={style.container}>
      <div>
        <div className={style.header}>
          <div>Profile Details</div>
          <CustomButton label='Edit Profile' variant='slim' />
        </div>
        <div className={style.details}>
          {renderDetails('Full Name', user.name)}
          {renderDetails('Email', user.email)}
        </div>
      </div>
      <div>
        <div className={style.header}>
          <div>Change Password</div>
        </div>
        <div className={style.changePass}>
          {renderPassInput('Old Password', 'old')}
          {renderPassInput('New Password', 'new')}
          {renderPassInput('Confirm Password', 'confirm')}
        </div>
      </div>
      <CustomButton label='Submit' variant='slim' />
    </div>
  )
}

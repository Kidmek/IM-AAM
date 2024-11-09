import React from 'react'
import style from './header.module.css'
import { Logo } from '@/constants/images'

import { Moto } from '@/constants/strings/common'

export default function EmailHeader() {
  return (
    <div className={style.emailHeader}>
      <div className={style.emailHeaderWrapper}>
        <img alt='Logo' src={Logo} />
        <div>{Moto}</div>
      </div>
    </div>
  )
}

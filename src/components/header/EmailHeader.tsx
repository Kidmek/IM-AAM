import React from 'react'
import style from './header.module.css'
import { Logo } from '@/constants/images'

import { Moto } from '@/constants/strings/common'
import Link from 'next/link'

export default function EmailHeader() {
  return (
    <div className={style.emailHeader}>
      <div className={style.emailHeaderWrapper}>
        <Link href='/home'>
          <img alt='Logo' src={Logo} />
        </Link>
        <div>{Moto}</div>
      </div>
    </div>
  )
}

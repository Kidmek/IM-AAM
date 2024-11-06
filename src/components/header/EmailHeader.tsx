import React from 'react'
import style from './header.module.css'
import { Logo } from '@/constants/images'
import Image from 'next/image'
import { Moto } from '@/constants/strings/common'

export default function EmailHeader() {
  return (
    <div className={style.emailHeader}>
      <div className={style.emailHeaderWrapper}>
        <Image alt='Logo' src={Logo} />
        <div>{Moto}</div>
      </div>
    </div>
  )
}

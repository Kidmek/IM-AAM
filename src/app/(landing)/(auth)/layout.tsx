import Image from 'next/image'
import style from './layout.module.css'
import { Logo } from '@/constants/images'
import { Moto } from '@/constants/strings/common'

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={style.authContainer}>
      <div className={style.logoContainer}>
        <div>
          <Image alt='Logo' src={Logo} className={style.logo} />
          <div className={style.logoText}>{Moto}</div>
        </div>
      </div>
      {children}
    </div>
  )
}

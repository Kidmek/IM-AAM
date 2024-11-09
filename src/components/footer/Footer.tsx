'use client'

import { Logo } from '@/constants/images'
import style from './footer.module.css'
import { Moto } from '@/constants/strings/common'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { ArrowUp_SVG } from '@/constants/icons'

export default function Footer() {
  const path = usePathname()
  return (
    <div className={style.footerContainer}>
      <div className={style.footerLogoContainer}>
        <img alt='Logo' src={Logo} />
        <div>{Moto}</div>
      </div>
      <div className={style.footerMiddle}>
        <div className={style.links}>
          <Link
            href={'/home'}
            className={`link ${path === '/home' && 'selectedLink'}`}
          >
            Home
          </Link>
          <Link
            href={'/about-us'}
            className={`link ${path === '/about-us' && 'selectedLink'}`}
          >
            About Us
          </Link>
          <Link
            href={'/tips-and-strategy'}
            className={`link ${
              path === '/tips-and-strategy' && 'selectedLink'
            }`}
          >
            Tips & Strategy
          </Link>
          <Link
            href={'/terms-and-conditions'}
            className={`link ${
              path === '/terms-and-conditions' && 'selectedLink'
            }`}
          >
            Terms & Condition
          </Link>
        </div>
        <div className={style.rightsReserved}>© 2021 All Rights Reserved</div>
      </div>

      <ArrowUp_SVG className={style.arrowUp} />
    </div>
  )
}

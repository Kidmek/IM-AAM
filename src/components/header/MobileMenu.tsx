import React from 'react'
import style from './mobileNav.module.css'
import { mobileMenus } from '@/constants/nav'
import Link from 'next/link'

export default function MobileMenu({ path }: { path: string }) {
  return (
    <div className={style.container}>
      {mobileMenus.map((m) => {
        return (
          <Link
            href={m.path}
            key={m.path}
            className={`${path === m.path && style.selected}`}
          >
            {m.name}
          </Link>
        )
      })}
    </div>
  )
}

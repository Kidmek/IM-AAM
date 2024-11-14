'use client'

import { usePathname } from 'next/navigation'
import style from './tabs.module.css'
import Link from 'next/link'

interface Props {
  title?: string
  tabs: { value: string; link: string }[]
}
export default function RoutingTab({ title, tabs }: Props) {
  const pathname = usePathname()
  return (
    <div className={style.contentHeaderContainer}>
      {title && <div className={style.contentHeaderTitle}>{title}</div>}
      <div className={style.tabs}>
        {tabs.map((tab, index) => (
          <Link
            key={index}
            className={`${style.tab} ${pathname === tab.link && style.active} ${
              !title && style.noTitle
            }`}
            href={tab.link}
            style={{
              paddingInline: '28px',
              textAlign: 'left',
            }}
          >
            {tab.value}
          </Link>
        ))}
      </div>
    </div>
  )
}

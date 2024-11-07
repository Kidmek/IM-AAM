import { FC, SVGProps } from 'react'
import { Logo } from '../../constants/images'
import style from './nav.module.css'
import { usePathname } from 'next/navigation'
import { NavElements } from '@/constants/nav'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav({ navOpen }: { navOpen: boolean }) {
  const pathname = usePathname()

  const renderSingleNav = (nav: {
    name: string
    subElements: {
      name: string
      path: string
    }[]
    path: string
    icon: FC<SVGProps<SVGElement>>
  }) => {
    const { name: text, subElements: navSubElements, path, icon: Icon } = nav

    const found = pathname.startsWith(path)

    return (
      <div className={style.singleNavContainer} key={path}>
        <Link
          className={`${style.singleNav} ${found && style.selected} ${
            !navOpen && style.closed
          }`}
          href={navSubElements.length ? navSubElements[0].path : path}
        >
          <Icon className={style.navIcon} />
          {navOpen && text}
        </Link>
        {navOpen &&
          found &&
          navSubElements?.map((s) => {
            return (
              <Link
                key={text + s.path}
                className={`${style.subNav} ${
                  s.path === pathname && style.selectedSub
                }`}
                href={s.path}
              >
                {s.name}
              </Link>
            )
          })}
      </div>
    )
  }

  return (
    <div className={style.navContainer}>
      <Link href={'/home'}>
        <Image
          src={Logo}
          alt='Logo'
          className={`${style.navLogo} ${!navOpen && style.small}`}
        />
      </Link>

      <div className={style.navList}>
        {NavElements.map((nav) => renderSingleNav(nav))}
      </div>
    </div>
  )
}

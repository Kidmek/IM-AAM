'use client'

import Link from 'next/link'
import { Logo, profile } from '../../constants/images'

import {
  AlignIcon_SVG,
  MenuIcon_SVG,
  NoNotificationIcon_SVG,
  NotificationIcon_SVG,
  SearchIcon_SVG,
} from '@/constants/icons'

import style from './header.module.css'

import { usePathname } from 'next/navigation'
interface Props {
  toggleNav?: () => void
  navOpen?: boolean
  noSideBar: boolean
}
export default function Header({ toggleNav, navOpen, noSideBar }: Props) {
  const path = usePathname()

  return (
    <div className={`${style.headerContainer} ${noSideBar && style.noSideBar}`}>
      {noSideBar ? (
        <img alt='Logo' src={Logo} className={style.headerLogo} />
      ) : (
        <div>
          <AlignIcon_SVG
            className={`${style.alignLeft} ${!navOpen && style.rotate}`}
            onClick={toggleNav}
          />
          <div className={style.navInputContainer}>
            <SearchIcon_SVG className={style.searchIcon} />
            <input className={style.navInput} placeholder='Search' />
          </div>
        </div>
      )}
      <div>
        {noSideBar && (
          <Link
            href={'/home'}
            className={`link ${path === '/home' && 'selectedLink'}`}
          >
            Home
          </Link>
        )}
        <Link
          href={'/about-us'}
          className={`link ${path === '/about-us' && 'selectedLink'}`}
        >
          About Us
        </Link>
        <Link
          href={'/tips-and-strategy'}
          className={`link ${path === '/tips-and-strategy' && 'selectedLink'}`}
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

        {!noSideBar ? (
          <>
            <Link
              href={'/notification'}
              className={style.notificationBtnContainer}
            >
              <NotificationIcon_SVG className={style.notificationIcon} />
              <div className={style.notificationCount}>1</div>
            </Link>
            <Link href={'/profile'}>
              <img
                src={profile}
                alt='Profile Image'
                className={style.profileImg}
              />
            </Link>
          </>
        ) : (
          <div></div>
        )}
        <div className={style.menuIconContainer}>
          <MenuIcon_SVG />
          <NoNotificationIcon_SVG />
        </div>
      </div>
      {noSideBar && <div className={style.emptyDiv}></div>}
    </div>
  )
}

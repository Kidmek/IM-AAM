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
import MobileMenu from './MobileMenu'
interface Props {
  toggleNav?: () => void
  navOpen?: boolean
  noSideBar: boolean
  notificationCount?: number
}
export default function Header({
  toggleNav,
  navOpen,
  noSideBar,
  notificationCount,
}: Props) {
  const path = usePathname()

  const renderNotification = () => {
    if (notificationCount && notificationCount > 0) {
      return (
        <Link href={'/notification'} className={style.notificationBtnContainer}>
          <NotificationIcon_SVG className={style.notificationIcon} />
          <div className={style.notificationCount}>{notificationCount}</div>
        </Link>
      )
    }
    return (
      <Link href={'/notification'} className={style.notificationBtnContainer}>
        <NoNotificationIcon_SVG className={style.notificationIcon} />
      </Link>
    )
  }
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
            {renderNotification()}
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
          <div
            style={{
              display: 'flex',
            }}
            className={style.menuIcon}
          >
            <MenuIcon_SVG />
            <div className={style.mobileNavContainer}>
              <MobileMenu path={path} />
            </div>
          </div>
          {renderNotification()}
        </div>
      </div>
      {noSideBar && <div className={style.emptyDiv}></div>}
    </div>
  )
}

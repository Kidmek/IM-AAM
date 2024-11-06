'use client'

import Nav from '@/components/nav/Nav'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { useEffect, useState } from 'react'
import style from '../layout.module.css'

export default function SideBarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [navOpen, setNavOpen] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (navOpen) {
      root.style.setProperty('--nav-width', '280px') // Open width
    } else {
      root.style.setProperty('--nav-width', '100px') // Collapsed width
    }
  }, [navOpen])
  return (
    <>
      <Nav navOpen={navOpen} />
      <div className={style.sideBarContainer}>
        <Header
          toggleNav={() => setNavOpen(!navOpen)}
          navOpen={navOpen}
          noSideBar={false}
        />
        <div className={style.pageContent}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

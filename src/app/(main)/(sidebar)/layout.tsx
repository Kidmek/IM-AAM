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
  const [noSideBar, setNoSideBar] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (navOpen) {
      root.style.setProperty('--nav-width', '280px') // Open width
    } else {
      root.style.setProperty('--nav-width', '100px') // Collapsed width
    }
  }, [navOpen])

  useEffect(() => {
    setNoSideBar(window.innerWidth < 1000)
    const handleResize = () => {
      setNoSideBar(window.innerWidth < 1000)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {!noSideBar && <Nav navOpen={navOpen} />}
      <div
        className={
          noSideBar ? style.noSideBarContainer : style.sideBarContainer
        }
      >
        <Header
          toggleNav={() => setNavOpen(!navOpen)}
          navOpen={navOpen}
          noSideBar={noSideBar}
        />
        <div className={style.pageContent}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

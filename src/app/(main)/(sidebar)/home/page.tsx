'use client'

import { Home1, Home2, Home3, Home4 } from '@/constants/images'

import style from './page.module.css'
import { useEffect, useState } from 'react'
import Dialog from '@/components/dialog/Dialog'
import GuestPopup from '@/components/popUp/GuestPopup'
import AttentionPopup from '@/components/popUp/AttentionPopup'
import { getToken } from '@/api/apiConfig'
import WelcomePopup from '@/components/popUp/WelcomePopup'

export default function Home() {
  const [popUpShown, setPopUpShown] = useState<1 | 2 | null>(1)
  const [isAuthenticated, setIsAuthenticated] = useState<undefined | boolean>(
    undefined
  )

  const renderHomeRow = (content: string, image: string, title?: string) => {
    return (
      <div className={`${style.singleRow} ${!title && style.reversed}`}>
        <div>
          <div className={style.title}>{title}</div>
          <div>{content}</div>
        </div>
        <img src={image} alt='Home Image' />
      </div>
    )
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuthenticated(!!getToken())
    }
  }, [])
  return (
    <div className={style.homeContainer}>
      {popUpShown && isAuthenticated !== undefined && (
        <Dialog
          child={
            isAuthenticated ? (
              popUpShown == 1 ? (
                <WelcomePopup />
              ) : (
                <AttentionPopup onClose={() => setPopUpShown(null)} />
              )
            ) : (
              <GuestPopup />
            )
          }
          onClose={() => {
            setPopUpShown(null)
            setTimeout(() => {
              if (popUpShown === 1) {
                setPopUpShown(2)
              }
            }, 200)
          }}
        />
      )}
      <p className={style.title}>How to Win with Our Stock Recommendations</p>
      {renderHomeRow(
        'Purchase our expertly curated stock recommendations to see which stocks are primed for growth.',
        Home1,
        'Get Insider Knowledge:'
      )}
      {renderHomeRow(
        'With our guidance in hand, head to your stockbroker and purchase the recommended stock(s) while prices are low.',
        Home2,
        'Buy Your Stock:'
      )}
      {renderHomeRow(
        'Sit back and let the market work for you as stock prices go up. Enjoy watching your smart investments pay off!',
        Home3,
        'Watch Your Gains Grow:'
      )}
      {renderHomeRow(
        'Make Your Money Work Smarter – Start with the Right Information',
        Home4
      )}
    </div>
  )
}

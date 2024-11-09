'use client'

import { useState } from 'react'
import style from './page.module.css'
import Tabs from '@/components/contentHeader/Tabs'
import Profile from '@/components/profile/Profile'
import Payment from '@/components/profile/Payment'
import Deposit from '@/components/profile/Deposit'

export default function ProfilePage() {
  const [tab, setTab] = useState(0)
  return (
    <div className={style.container}>
      <div className={style.tabsContainer}>
        <Tabs
          selected={tab}
          setSelected={setTab}
          tabs={['Profile', 'Payment', 'Deposit']}
        />
      </div>
      {tab === 0 ? (
        <Profile />
      ) : tab === 1 ? (
        <Payment />
      ) : (
        <Payment isDeposit />
      )}
    </div>
  )
}

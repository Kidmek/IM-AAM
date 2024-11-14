'use client'

import { useState } from 'react'
import Tabs from '@/components/contentHeader/Tabs'
import Settings from '@/components/settings/Settings'
import DailyTable from '@/components/tables/porfolio/DailyTable'

export default function SwingTrader() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <Tabs
        selected={tab}
        setSelected={setTab}
        tabs={['Overview', 'Porfolio Setting']}
      />

      {tab === 0 ? <DailyTable title='Daily Trader' /> : <Settings inner />}
    </>
  )
}

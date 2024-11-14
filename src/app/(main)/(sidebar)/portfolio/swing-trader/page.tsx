'use client'

import PortfolioTable from '@/components/tables/porfolio/PorfolioTable'
import { useState } from 'react'
import Tabs from '@/components/contentHeader/Tabs'
import Settings from '@/components/settings/Settings'

export default function SwingTrader() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <Tabs
        selected={tab}
        setSelected={setTab}
        tabs={['Overview', 'Porfolio Setting']}
      />

      {tab === 0 ? (
        <PortfolioTable title='Position Trader' />
      ) : (
        <Settings inner />
      )}
    </>
  )
}

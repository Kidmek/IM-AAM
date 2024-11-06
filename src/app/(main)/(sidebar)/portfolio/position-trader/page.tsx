'use client'

import ContentHeader from '@/components/contentHeader/ContentHeader'
import PortfolioTable from '@/components/tables/porfolio/PorfolioTable'
import { useState } from 'react'
import Settings from '../../settings/page'

export default function PositionTrader() {
  const [tab, setTab] = useState(0)
  return (
    <>
      <ContentHeader title='Porfolio' selected={tab} setSelected={setTab} />

      {tab === 0 ? <PortfolioTable /> : <Settings inner />}
    </>
  )
}

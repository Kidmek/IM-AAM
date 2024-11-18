'use client'

import { useState } from 'react'
import Tabs from '@/components/contentHeader/Tabs'
import Settings from '@/components/settings/Settings'
import DailyTable from '@/components/tables/porfolio/DailyTable'
import MobileTables from '@/components/tables/porfolio/MobileTables'

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
        <div>
          <div className='singleTable'>
            <DailyTable title='Daily Trader' />
          </div>
          <div className={'mobileTables'}>
            <MobileTables />
          </div>
        </div>
      ) : (
        <Settings inner />
      )}
    </>
  )
}

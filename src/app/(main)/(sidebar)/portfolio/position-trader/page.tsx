'use client'

import PortfolioTable from '@/components/tables/porfolio/PorfolioTable'
import { useState } from 'react'
import Tabs from '@/components/contentHeader/Tabs'
import Dialog from '@/components/dialog/Dialog'
import Settings from '@/components/settings/Settings'
import InsufficientPopUp from '@/components/popUp/InsufficientPopup'
import MobileTables from '@/components/tables/porfolio/MobileTables'

export default function PositionTrader() {
  const [tab, setTab] = useState(0)
  const [popUpShown, setPopUpShown] = useState<boolean>(false)

  return (
    <>
      {!popUpShown && (
        <Dialog
          child={<InsufficientPopUp onClose={() => setPopUpShown(true)} />}
          onClose={() => setPopUpShown(true)}
        />
      )}
      <Tabs
        selected={tab}
        setSelected={setTab}
        tabs={['Overview', 'Porfolio Setting']}
      />

      {tab === 0 ? (
        <div>
          <div className={'singleTable'}>
            <PortfolioTable title='Position Trader' />
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

'use client'

import PortfolioTable from '@/components/tables/porfolio/PorfolioTable'
import { useState } from 'react'
import Tabs from '@/components/contentHeader/Tabs'
import InsufficientPopUp from '@/components/popUp/InsufficientPopup'
import Dialog from '@/components/dialog/Dialog'
import Settings from '@/components/settings/Settings'

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
        title='Porfolio'
        tabs={['Overview', 'Porfolio Setting']}
      />

      {tab === 0 ? <PortfolioTable title='Recommended' /> : <Settings inner />}
    </>
  )
}

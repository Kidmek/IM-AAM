'use client'

import PortfolioTable from '@/components/tables/porfolio/PorfolioTable'
import { useState } from 'react'
import Tabs from '@/components/contentHeader/Tabs'
import InsufficientPopUp from '@/components/popUp/InsufficientPopup'
import Dialog from '@/components/dialog/Dialog'
import Settings from '@/components/settings/Settings'
import MobileTables from '@/components/tables/porfolio/MobileTables'

export default function PortfolioManagement() {
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

      {tab === 0 ? (
        <div>
          <div className='singleTable'>
            <PortfolioTable title='Recommended' />
          </div>
          <div className='mobileTables'>
            <MobileTables />
          </div>
        </div>
      ) : (
        <Settings inner />
      )}
    </>
  )
}

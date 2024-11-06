'use client'

import { useState } from 'react'
import CustomInput from '@/components/inputs/CustomInput'
import style from './page.module.css'
import { currencies, tooltips } from '@/constants/strings/settings'
import CustomDrowpdown from '@/components/inputs/CustomDropdown'
import InfoHeader from '@/components/infoHeader/InfoHeader'
import CountryTable from '@/components/tables/setting/CountryTable'
import RecommendedTable from '@/components/tables/setting/RecommendedTable'

export default function Settings({ inner }: { inner?: boolean }) {
  const [money, setMoney] = useState({
    currency: currencies[0].value,
    amount: '',
  })

  return (
    <div className={`${style.settingsContainer} ${inner && style.inner}`}>
      <div>
        <InfoHeader
          title='Total money to invest in stock market'
          info={tooltips.investment}
        />

        <div className={style.settingInputs}>
          <CustomDrowpdown
            label='Choose Currency'
            state={money.currency}
            setState={(v) => {
              setMoney({ ...money, currency: v })
            }}
            options={currencies}
          />
          <CustomInput
            label='Amount'
            state={money.amount}
            setState={(v) => {
              setMoney({ ...money, amount: v })
            }}
            type='number'
            placeholder='$ 10,000'
          />
        </div>
      </div>
      {/* Preferred Countries for investment */}
      <div>
        <InfoHeader
          title='Preferred Countries for investment'
          info={tooltips.country}
        />
        <CountryTable />
      </div>
      {/* Offered Recommended Stocks */}
      <div>
        <InfoHeader
          title='Offered Recommended Stocks'
          info={tooltips.recommended}
        />
        <RecommendedTable />
      </div>
    </div>
  )
}

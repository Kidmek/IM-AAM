import style from './page.module.css'
import { tooltips } from '@/constants/strings/settings'
import InfoHeader from '@/components/infoHeader/InfoHeader'
import CountryTable from '@/components/tables/setting/CountryTable'
import BrokerageFeeTable from '../tables/setting/BrokerageFeeTable'

export default function Settings({ inner }: { inner?: boolean }) {
  return (
    <div className={`${style.settingsContainer} ${inner && style.inner} `}>
      <p>Porfolio Settings</p>
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
          title='Brokerage Fee Per Country'
          info={tooltips.brokerage}
        />
        <BrokerageFeeTable />
      </div>
    </div>
  )
}

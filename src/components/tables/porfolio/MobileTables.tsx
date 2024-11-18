import React from 'react'
import DailyTable from './DailyTable'
import PortfolioTable from './PorfolioTable'

export default function MobileTables() {
  return (
    <div>
      <PortfolioTable title='Position Trader' />
      <PortfolioTable title='Swing Trader' />
      <DailyTable title='Daily Trader' />
    </div>
  )
}

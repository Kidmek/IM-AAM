import Chart from '../chart/Chart'
import style from './chart.module.css'
import { chartFooters } from '@/constants/strings/chart'

export default function ChartPopup() {
  const renderSingleFooter = (
    values: { label: string; value: string }[],
    isLast?: boolean
  ) => {
    return (
      <div>
        <div className={style.singleFooter}>
          {values.map((v, index) => (
            <div key={index}>
              <div>{v.label}</div>
              <span>{v.value}</span>
            </div>
          ))}
        </div>
        {!isLast && <div className={style.divider} />}
      </div>
    )
  }
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.stockName}>
          <div>
            <div className={style.stockIndex}>BRO</div>
            <div>BROWN & BROWN INC</div>
          </div>
          <div>NYSE - USD</div>
        </div>
        <div>
          <div className={style.change}>
            <div>105.62</div>
            <span>+7.3%</span>
          </div>
          <div>PAST WEEK</div>
        </div>
      </div>
      <div className={style.subHeader}>Earning Report on 29 October</div>
      <div className={style.chart}>
        <Chart />
      </div>
      <div className={style.footer}>
        {renderSingleFooter(chartFooters.footer1)}
        {renderSingleFooter(chartFooters.footer2)}
        {renderSingleFooter(chartFooters.footer3)}
        {renderSingleFooter(chartFooters.footer4, true)}
      </div>
    </div>
  )
}

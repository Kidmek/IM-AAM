import { DropDownIcon_SVG } from '../../constants/images'

import style from './contentFooter.module.css'

export default function ContentFooter() {
  return (
    <div className={style.contentFooterContainer}>
      <div className={`${style.stat} ${style.header}`}>
        <p className={style.netAssetValue}>Net Asset Value</p>
        <div className={style.stat}>
          <DropDownIcon_SVG className={style.black} />
          <p className={style.text_4_254}>&#x24; 4,254</p>
        </div>
      </div>
      <div className={style.statsContainer}>
        <div className={style.stat}>
          <p>Invested</p>
          <p className={style.black}>&#x24; 5,000</p>
        </div>
        <div className={style.stat}>
          <p>Unrealized P&amp;L</p>
          <p className={style.green}>+&#x24;524</p>
        </div>
        <div className={style.stat}>
          <p>Asset Gain/Loss</p>
          <p className={style.green}>+&#x24;524</p>
        </div>
        <div className={style.stat}>
          <p>Forex Gain/Loss</p>
          <p>&#x24;0.00</p>
        </div>
      </div>
    </div>
  )
}

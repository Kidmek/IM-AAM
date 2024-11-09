import {
  chart,
  strategy,
  tip,
  tipsHeader1,
  tipsHeader2,
} from '../../../../constants/images'
import style from './page.module.css'
import { strategies, tips, tipsHeader } from '@/constants/strings/tips'

export default function TipAndStrategies() {
  const renderSingle = (isTip: boolean) => {
    const data = isTip ? tips : strategies
    return (
      <div className={style.tipBlock}>
        <div className={style.title}>{isTip ? 'Tips' : 'Strategy'}</div>
        <div className={`${style.tipList} ${!isTip && style.strategy}`}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`${style.singleTipItem} ${!isTip && style.strategy}`}
              >
                <img
                  src={isTip ? tip.src : strategy.src}
                  alt='Image'
                  className={style.tipImg}
                />

                <h1 className={style.header}>{item.title}</h1>
                <p className={style.content}>{item.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return (
    <div className={style.tipsContainer}>
      <div className={style.tipHeader}>
        <p>{tipsHeader}</p>
        <div>
          <img src={tipsHeader1.src} alt='Tip Header' />
          <img src={tipsHeader2.src} alt='Tip Header' />
        </div>
      </div>
      {renderSingle(true)}
      {renderSingle(false)}

      <img src={chart.src} alt='Chart' className={style.tipChart} />
    </div>
  )
}

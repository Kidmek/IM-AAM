import Image from 'next/image'
import {
  chart,
  strategy,
  tip,
  tipsHeader1,
  tipsHeader2,
} from '../../../../constants/images'
import style from './page.module.css'
import { strategies, tips, tipsHeader } from '@/constants/strings/common'

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
                <Image
                  src={isTip ? tip : strategy}
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
          <Image src={tipsHeader1} alt='Tip Header' />
          <Image src={tipsHeader2} alt='Tip Header' />
        </div>
      </div>
      {renderSingle(true)}
      {renderSingle(false)}

      <Image src={chart} alt='Chart' className={style.tipChart} />
    </div>
  )
}

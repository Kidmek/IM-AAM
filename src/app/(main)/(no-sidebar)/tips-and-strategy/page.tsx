import { tipsHeaderImg } from '@/constants/images'
import style from './page.module.css'
import { strategies, tips, tipsHeader } from '@/constants/strings/tips'

export default function TipAndStrategies() {
  const renderSingle = (isTip: boolean) => {
    const data = isTip ? tips : strategies
    return (
      <div className={style.tipBlock}>
        <div className={style.title}>{isTip ? 'Tips' : 'Strategy'}</div>
        <div className={`${style.tipList} `}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`${style.singleTipItem} ${
                  index % 2 !== 0 ? style.reversed : ''
                }`}
              >
                <div>
                  <h1 className={style.header}>
                    0{index + 1} {item.title}
                  </h1>
                  <p className={style.content}>{item.content}</p>
                </div>
                {item.image && (
                  <img src={item.image} alt='Image' className={style.tipImg} />
                )}
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
        <img src={tipsHeaderImg} alt='Tip Header' />
      </div>
      <div className={style.tipTitle}>Tips & Strategies</div>
      {renderSingle(true)}
      {renderSingle(false)}

      <div>
        {/* <p className={style.header}>Position Trader</p> */}
        <div className={style.chart}>
          <div>Position</div>
          <div>Daily Trader</div>
          <div>Swing Trader</div>
        </div>
      </div>
    </div>
  )
}

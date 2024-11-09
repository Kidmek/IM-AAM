import CustomButton from '@/components/button/CustomButton'
import style from './page.module.css'
import { bull, celebrate, finance, robot } from '@/constants/images'

export default function AboutUs() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.horizontal}>
        <div className={style.vertical}>
          <div className={style.noContent}>
            Your financial success is our Success
          </div>
          <div className={style.content}>
            IM-AAM is an investment manager technology that is powered by an
            artificial machine.
          </div>
          <div className={style.learnMoreBtn}>
            <CustomButton label='Learn More' />
          </div>
        </div>
        <img alt='celebrate' src={celebrate.src} className={style.aboutImg} />
      </div>
      <div className={style.horizontal}>
        <div className={`${style.vertical} ${style.second}`}>
          Our goal is to help as many people as possible achieve financial
          success in the stock market. Our advanced AI system is designed to
          maximise your earnings and help you earn quickly as well as minimise
          financial loss.
        </div>
        <img alt='robot' src={robot.src} className={style.aboutImg} />
      </div>
      <div className={`${style.vertical} ${style.centered}`}>
        <img alt='finance' src={finance.src} className={style.aboutImg} />

        <div className={style.content}>
          Our approach helps investors identify undervalue stocks with strong
          momentum. Research shows that both momentum and value investing are
          effective long-term strategies. However, no strategy is perfect.
          Investors should diversify their portfolios and consider their risk
          tolerance and investment goals when choosing a strategy.
        </div>
      </div>
      <div className={`${style.vertical} ${style.centered}`}>
        <img alt='bull' src={bull.src} className={style.aboutImg} />

        <div className={style.content}>
          Our service helps you find stocks categorised as bullish stocks for
          position trader, swing stocks and high frequent daily stocks.
          We&apos;re excited to develop a machine learning system to analyse and
          predict stock price movements, helping you diversify your portfolio
          and aim for maximum returns and expecting under a minimum risk..
        </div>
      </div>
    </div>
  )
}

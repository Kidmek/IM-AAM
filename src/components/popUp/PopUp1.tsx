import style from './popup.module.css'
import { PopUp1Top, PopUp2Top } from '@/constants/images'

export default function PopUp1() {
  return (
    <div className={style.popUpContainer}>
      <img
        src={PopUp1Top.src}
        alt='Pop Up Image'
        className={style.popUpImage}
      />
      <p className='fw-700'>
        Welcome to IM-AAM &#x2013; Your Stock Price Movement Advisor
      </p>
      <p>
        Congratulations on joining IM-AAM &#x2013; your go-to source for
        valuable insights into stock price movements! We&apos;re thrilled to
        have you on board as we embark on a journey to unlock the potential of
        the stock market together.
      </p>
      <p className='fw-700'>Empowering You with Analytical Insights</p>
      <p>
        At IM-AAM, our mission is simple: to equip you with the knowledge and
        insights you need to navigate the complexities of the stock market with
        confidence. Utilizing a combination of technical analysis and
        fundamental analysis, we aim to provide you with accurate predictions of
        stock price movements within the boundaries of regulatory compliance.
      </p>
      <p className='fw-700'>Your Path to Financial Success</p>
      <img
        src={PopUp2Top.src}
        alt='Pop Up Image'
        className={style.popUpImage}
      />
      <p>
        While IM-AAM does not facilitate stock trading directly, our platform
        serves as your trusted advisor, offering timely advice and
        recommendations based on thorough technical and fundamental analyses.
        Whether you&apos;re a seasoned investor or just starting out, our
        user-friendly interface and actionable insights make it easy to stay
        ahead of the curve while ensuring full compliance with regulatory
        guidelines.
        <br /> <br />
      </p>
      <p className='fw-700'>Key Features Include:</p>
      <p>
        <span className='fw-700'>Real-Time Analysis:</span> <br />
        <br />
        Gain access to up-to-the-minute analysis of stock price movements,
        including comprehensive breakdowns of key indicators and potential
        market trends, derived from rigorous technical and fundamental analyses.
        <br />
        <br />
        <span className='fw-700'>Customized Recommendations:</span> <br />
        <br />
        Receive personalized recommendations tailored to your investment goals
        and risk appetite, informed by our sophisticated analytical models and
        expertise in technical and fundamental analysis.
        <br />
        <br />
        <span className='fw-700 '>Educational Resources:</span>
        <br />
        <br />
        Expand your knowledge with our library of educational resources,
        including articles, tutorials, and expert insights designed to enhance
        your understanding of market dynamics while promoting responsible
        investing practices grounded in sound analytical principles.
        <br />
        <br />
      </p>
      <div>
        <p className='fw-700 text-center'>How to Get Started</p>
        <br />
        <br />
      </div>
      <p>
        To begin harnessing the power of IM-AAM, simply explore our platform and
        start uncovering valuable insights into stock price movements. While
        you&apos;ll need to execute trades through external platforms, rest
        assured that our team is here to guide you every step of the way,
        ensuring that your investment activities remain legal, ethical, and
        analytically sound.
        <br /> <br />
        Remember, the journey to financial success is a marathon, not a sprint.
        Stay disciplined, stay informed, and let Im-AAM be your trusted
        companion on the road to prosperity while upholding the highest
        standards of legality, integrity, and analytical excellence.
        <br /> <br />
        Welcome aboard!
      </p>
    </div>
  )
}

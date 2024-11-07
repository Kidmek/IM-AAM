import { PopUp2Bottom, PopUp2Top } from '@/constants/images'
import CustomButton from '../button/CustomButton'
import style from './popup.module.css'
import Image from 'next/image'

export default function PopUpAttention() {
  return (
    <div className={style.popUpContainer}>
      <Image src={PopUp2Top} alt='Image' className={style.popUpImage} />
      <p>
        <span className={`${style.popUpAttention} fw-700`}>
          Attention New Users:
        </span>{' '}
        <br />
        <br />
        Important Information About Your Trial Period and Management Fees
      </p>
      <p className='fw-600'>Dear [User&apos;s Name],</p>
      <p>
        At IM-AAM, our mission is simple: to equip you with the knowledge and
        insights you need to navigate the complexities of the stock market with
        confidence. Utilizing a combination of technical analysis and
        fundamental analysis, we aim to provide you with accurate predictions of
        stock price movements within the boundaries of regulatory compliance.
      </p>
      <p>7-Day Free Trial Period</p>

      <p>
        As a newly registered user, you&apos;re entitled to a complimentary
        7-day trial period to experience the full range of services offered by
        IM-AAM. During this time, you&apos;ll have unrestricted access to our
        stock recommendation service, allowing you to explore our insights and
        make informed investment decisions.
        <br />
        <br />
        After the conclusion of your free trial period, IM-AAM operates on a
        unique fee structure designed to align our interests with yours. At
        IM-AAM, we offer a streamlined stock recommendation service designed to
        identify stocks with high potential for growth. For a fee of per stock
        recommendation, clients gain access to specific stock insights tailored
        to their trading style&#x2014;whether they&apos;re daily traders, swing
        traders, or bullish position traders. Each recommendation includes key
        information on optimal purchase times, potential gains, and other
        valuable metrics, helping clients make informed decisions with ease. Our
        goal is to empower clients with high-quality insights that align with
        their investment goals, offering value at an affordable rate per stock.
        <br />
        <br />
        At IM-AAM, your success is our top priority. Our team of experienced
        analysts works tirelessly to deliver high-quality stock recommendations
        tailored to your investment goals and risk tolerance. We&apos;re here to
        empower you with the tools and insights you need to thrive in the stock
        market.&#x2028;
      </p>
      <div className={style.popUpButton}>
        <Image src={PopUp2Bottom} alt='Image' className={style.popUpImage} />
        <CustomButton
          label='Get Started Today'
          bgColor='var(--green)'
          txtColor='white'
          onClick={() => {}}
          variant='bold'
        />
      </div>
      <p>
        Take advantage of your free trial period to explore the features and
        benefits of IM-AAM. Simply log in to your account and start receiving
        expert stock recommendations right away.
        <br />
        <br />
        If you have any questions or concerns about our trial period or
        management fee structure, please don&apos;t hesitate to contact our
        support team. We&apos;re here to assist you every step of the way.
        <br />
        <br />
        Thank you for choosing IM-AAM as your trusted investment advisor.
        We&apos;re excited to embark on this journey with you and help you
        achieve your financial goals!
      </p>
      <p>
        <span className='fw-600'>Best regards,</span>
        <br />
        <br />
        Customer Success Team
        <br />
        IM-AAM
      </p>
    </div>
  )
}

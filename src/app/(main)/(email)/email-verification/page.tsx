import { Email1, Email2 } from '@/constants/images'
import style from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function EmailVerification() {
  const renderActivation = () => {
    return <Link href='/home'>[Activation Link]</Link>
  }

  return (
    <>
      <div className={style.emaiVContainer}>
        <div className={style.emailBody}>
          <div className={style.emailTitle}>
            <div>Dear [User&apos;s Name],</div>
            <Image src={Email1} alt='Email' />
          </div>
          <div>
            Welcome to IM-AAM – your ultimate destination for unlocking the
            potential of the stock market and making informed investment
            decisions! To get started on your journey to financial success,
            please click the link below to activate your account:
          </div>
          {renderActivation()}
          <div>
            By activating your account, you&apos;ll gain access to a wealth of
            resources, including real-time analysis, personalized
            recommendations, and expert insights into stock price movements.
            Whether you&apos;re a seasoned investor or just beginning to explore
            the world of finance, IM-AAM is here to support you every step of
            the way. Why Activate Your Account? Stay Informed: Receive timely
            updates on market trends and potential investment opportunities.
          </div>
          <div className={style.emailMiddle}>
            <div>
              <div>
                <div className={style.emailMiddleTitle}>
                  Personalized Recommendations
                </div>
                <div>
                  Tailored advice to suit your investment goals and risk
                  tolerance.
                </div>
              </div>
              <div>
                <div className={style.emailMiddleTitle}>
                  Educational Resources
                </div>
                <div>
                  Access our library of articles, tutorials, and expert insights
                  to enhance your financial knowledge.
                </div>
              </div>
            </div>
            <Image src={Email2} alt='Email' />
          </div>
          <div>
            Simply click the link below to activate your IM-AAM account and
            begin your journey towards financial freedom:
          </div>
          {renderActivation()}
          <div>
            If you encounter any issues or have questions about the activation
            process, please don&apos;t hesitate to contact our support team.
            We&apos;re excited to have you on board and look forward to helping
            you achieve your investment goals!
          </div>
          <div className={`${style.bestRegards} fw-500`}>Best regards,</div>
          <div className='fw-500'>Customer Success Team IM-AAM</div>
        </div>
      </div>
    </>
  )
}

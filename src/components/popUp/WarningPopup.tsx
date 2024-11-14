import CustomButton from '../button/CustomButton'
import style from './popup.module.css'
import { WarningPopup1, WarningPopup2, WarningPopup3 } from '@/constants/images'

export default function WarningPopup({
  onResponse,
}: {
  onResponse: (response: boolean) => void
}) {
  return (
    <div className={style.popUpContainer}>
      <div />
      <img
        src={WarningPopup1}
        alt='Pop Up Image'
        className={style.popUpImage}
      />
      <p>
        <span className='fw-700'>Welcome to im-aam!</span>
      </p>
      <p className={`fw-600`}>
        Before you proceed, please carefully read and agree to the following
        important information:
      </p>
      <img
        src={WarningPopup2}
        alt='Pop Up Image'
        className={style.popUpImage}
      />
      <p className='fw-600'>
        Investing in the Stock Market Involves Significant Risk
      </p>

      <div className={style.riskBody}>
        <span>For Personal Use Only:</span> <br />
        <br />
        The information, tools, and recommendations provided on this website are
        intended solely for your personal use. You are prohibited from sharing,
        distributing, or using this content for commercial purposes. Any
        unauthorized use of our content may result in legal action.
        <br />
        <br />
        <span>Content Ownership and License:</span>
        <br />
        <br />
        All content on this site, including proprietary tools, stock
        recommendations, and research, is owned by im-aam. By using this site,
        you agree not to copy, distribute, or modify any content without our
        explicit written permission. Unauthorized use of our content may violate
        copyright, trademark, and other laws.
        <br />
        <br />
        <span>No Guarantees on Information:</span> <br />
        <br />
        While im-aam strives to provide accurate, timely, and reliable stock
        recommendations, we do not guarantee the accuracy, completeness, or
        reliability of the information presented. The stock market is highly
        volatile, and all investments involve risk. Past performance is not
        indicative of future results.
        <br />
        <br />
        <span>Assumption of Risk:</span> <br />
        <br />
        By using this website, you acknowledge that investing in the stock
        market is inherently risky, and there is no guarantee of profit. It is
        possible to lose some or all of your invested capital. You agree that
        im-aam and its affiliates will not be liable for any financial losses,
        damages, or negative outcomes resulting from your investment decisions
        based on our recommendations.
        <br />
        <br />
        <span>No Financial Advice:</span>
        <br />
        <br />
        The content on im-aam is for informational purposes only and does not
        constitute professional financial advice. Our stock recommendations and
        research are based on our analysis and should not be viewed as a
        guarantee of future performance. You should consult with a qualified
        financial advisor to consider your individual circumstances before
        making any investment decisions.
        <br />
        <br />
        <span>Privacy Policy:</span> <br />
        <br />
        im-aam collects and uses personal data in accordance with our privacy
        policy. We are committed to protecting your privacy and ensuring the
        security of your personal information. Please review the privacy policy
        to understand how your information is collected, used, and protected. By
        using this website, you consent to the collection and use of your
        personal data as described in our privacy policy.
        <br />
        <br />
        <span>Termination of Access:</span> <br />
        <br />
        im-aam reserves the right to terminate or suspend your access to the
        site without notice if you violate our terms of service or engage in any
        unauthorized use of the site. Continued access to the site is
        conditional upon compliance with our terms and policies.
        <br />
        <br />
        <div className={style.attention}>
          <span>Agreement Required </span>
          <img
            src={WarningPopup3}
            alt='Pop Up Image'
            className={style.popUpImage}
          />
        </div>
        <br />
        To proceed and use our services, you must agree to the terms outlined
        above, acknowledging that you fully understand the risks involved in
        stock market investing and agree that im-aam is not responsible for any
        financial losses or damages you may incur. By clicking &quot;Yes, I
        Agree,&quot; you confirm that you have read, understood, and accepted
        these terms and conditions.
      </div>

      <div className={style.btnContainer}>
        <p>Do you agree to these terms?</p>
        <div>
          <CustomButton
            label='Yes'
            onClick={() => {
              onResponse(true)
            }}
          />
          <CustomButton
            label='Cancel'
            onClick={() => {
              onResponse(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}

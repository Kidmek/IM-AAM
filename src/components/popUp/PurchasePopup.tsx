import { Purchase } from '@/constants/images'
import style from './popup.module.css'
import CustomButton from '../button/CustomButton'

export default function PurchasePopup({
  onResponse,
}: {
  onResponse: (response: boolean) => void
}) {
  return (
    <div className={style.popUpContainer}>
      <img src={Purchase} alt='Pop Up Image' className={style.popUpImage} />
      <p className='fw-700'>Purchase Information:</p>

      <p>
        You’re about to make an informed step forward! By purchasing this
        recommendation, you’re gaining access to valuable insights tailored to
        your investment strategy. Please confirm that you’d like to proceed with
        this purchase, and we’ll promptly deliver the details to help guide your
        next move. <br />
        <br />
        Are you certain you’d like to continue?
      </p>
      <div
        className={style.btnContainer}
        style={{
          marginTop: '10px',
        }}
      >
        <div>
          <CustomButton label='Yes' onClick={() => onResponse(true)} />
          <CustomButton label='Cancel' onClick={() => onResponse(false)} />
        </div>
      </div>
    </div>
  )
}

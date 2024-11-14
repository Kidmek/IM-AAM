'use client'

import {
  GuestPopup1,
  GuestPopup2,
  GuestPopup3,
  GuestPopup4,
} from '@/constants/images'
import CustomButton from '../button/CustomButton'
import style from './popup.module.css'
import { useRouter } from 'next/navigation'

export default function GuestPopup() {
  const router = useRouter()
  const renderSingle = (content: string, image: string) => {
    return (
      <div className={style.singleContent}>
        <div className='fw-700'>{content}</div>
        <img src={image} alt='Pop Up Image' className={style.popUpImage} />
      </div>
    )
  }
  return (
    <div className={style.popUpContainer}>
      <img src={GuestPopup1} alt='Pop Up Image' className={style.popUpImage} />
      <p>
        Please log in to access our full range of features and the complete
        stock recommendations we offer. You will be able to see
      </p>
      {renderSingle('Timely notifications', GuestPopup2)}
      {renderSingle('Complete list of recommended stocks', GuestPopup3)}
      {renderSingle('Target profit calculation', GuestPopup4)}
      <div
        className={style.btnContainer}
        style={{
          marginTop: '9px',
        }}
      >
        <div
          style={{
            alignSelf: 'center',
            width: '100%',
          }}
        >
          <CustomButton
            label='Login'
            onClick={() => {
              router.push('/login')
            }}
          />
        </div>
      </div>
    </div>
  )
}

'use client'

import style from './popup.module.css'
import { Insuffient } from '@/constants/images'
import CustomButton from '../button/CustomButton'
import { useRouter } from 'next/navigation'

type Props = {
  onClose: () => void
}
export default function InsufficientPopUp({ onClose }: Props) {
  const router = useRouter()

  return (
    <div className={`${style.popUpContainer} ${style.insufficientPopUp}`}>
      <img src={Insuffient} alt='Insuffient' />

      <p className='fw-700'>Insufficient Balance</p>
      <p>
        It looks like your e-wallet balance isn’t enough to complete this
        purchase. Please top up your e-wallet to continue accessing valuable
        stock insights tailored to your strategy. A quick top-up will allow you
        to proceed with the recommendation and make the most of our expert
        analysis.
      </p>

      <div>
        <CustomButton
          label='Top Up Now'
          variant='slim'
          onClick={() => router.push('/profile/deposit')}
        />
        <CustomButton label='Cancel' variant='slim' onClick={onClose} />
      </div>
    </div>
  )
}

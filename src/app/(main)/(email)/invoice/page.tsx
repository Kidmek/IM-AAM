'use client'

import { Invoice } from '@/constants/images'
import style from './page.module.css'
import CustomButton from '@/components/button/CustomButton'

export default function InvoicePage() {
  const renderItem = (label: string, value: string, light: boolean = true) => {
    return (
      <div className={`${style.singleItem} ${!light && style.dark}`}>
        <div className={style.label}>{label}</div>
        <div className={style.value}>{value}</div>
      </div>
    )
  }

  const print = () => {
    window.print()
  }
  return (
    <div className={style.printWrapper}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.topHeader}>
            <div>
              <div>Receipt from IM-AAM</div>
              <div className={style.value}>$5.00</div>
              <div> Paid September 5, 2024</div>
            </div>
            <img src={Invoice} alt='reciept' />
          </div>

          <div className={style.itemContainer}>
            {renderItem('Receipt Number', '2383-2047')}
            {renderItem('Invoice Number', 'EE0A0745-0001')}
            {renderItem('Payment Number', '**** 3565')}
          </div>
        </div>
        <div className={style.bottom}>
          <div>Receipt #2383-2407</div>
          <p>Plan Payment</p>
          <div className={style.itemContainer}>
            {renderItem('Qty 1', '$5.00', false)}
            {renderItem('Total  ', '$5.00', false)}
            {renderItem('Amount Paid', '$5.00', false)}
          </div>
          <span>Question? Visit our support site or contact us</span>
        </div>
        <CustomButton
          label='Export PDF'
          className={style.printBtn}
          onClick={print}
        />
      </div>
    </div>
  )
}

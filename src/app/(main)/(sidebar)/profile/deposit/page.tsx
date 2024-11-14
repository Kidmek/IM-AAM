'use client'

import {
  AmericanExpress_SVG,
  Apple_SVG,
  CreditCard_SVG,
  InfoIcon_SVG,
  MasterCard_SVG,
  Paypal_SVG,
  Tick_SVG,
  Visa_SVG,
} from '@/constants/icons'
import style from './page.module.css'
import CustomInput from '@/components/inputs/CustomInput'
import { FC, SVGProps, useState } from 'react'
import CustomDrowpdown from '@/components/inputs/CustomDropdown'
import { Countries } from '@/constants/strings/settings'
import CustomCheckBox from '@/components/inputs/CustomCheckBox'
import CustomButton from '@/components/button/CustomButton'
import Dialog from '@/components/dialog/Dialog'
import PurchasePopup from '@/components/popUp/PurchasePopup'

export default function Deposit() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    ccv: '',
    country: '',
    save: true,
    selected: 'PayPal',
  })

  const [popUpShown, setPopUpShown] = useState(true)

  const [payment, setPayment] = useState('')

  const renderCards = () => {
    return (
      <div className={style.cardsContainer}>
        <Visa_SVG />
        <MasterCard_SVG />
        <AmericanExpress_SVG />
      </div>
    )
  }

  const renderPaymentTicks = (message: string) => {
    return (
      <div className={style.singleTick}>
        <Tick_SVG />
        <div>{message}</div>
      </div>
    )
  }

  const renderPaymentOptions = (
    Icon: FC<SVGProps<SVGElement>>,
    title: string,
    showCards: boolean = false
  ) => {
    const selected = title === paymentInfo.selected
    return (
      <div
        className={`${style.card} ${style.paymentOption} ${
          selected && style.selected
        }`}
        onClick={() => {
          setPaymentInfo({ ...paymentInfo, selected: title })
        }}
      >
        <div>
          <div
            className={`${style.circleCheckBox} ${selected && style.selected}`}
          />

          <Icon />
          {title}
        </div>
        {showCards && renderCards()}

        {selected && renderSelectedDetails(title)}
      </div>
    )
  }

  const renderSelectedDetails = (name: string) => {
    return (
      <div className={style.paymentDetails}>
        {!popUpShown && (
          <Dialog
            child={<PurchasePopup onResponse={() => setPopUpShown(true)} />}
            onClose={() => setPopUpShown(true)}
          />
        )}
        <div className={`green ${style.smaller}`}>Deposit with {name}</div>
        <div className={style.inputs}>
          <CustomInput
            state={paymentInfo.cardNumber}
            setState={handleChange}
            name='cardNumber'
            placeholder='1231422353254465757'
            label='Card Number'
          />
          <div className={style.row}>
            <CustomInput
              state={paymentInfo.expiryDate}
              setState={handleChange}
              name='expiryDate'
              placeholder='MM / YY'
              label='Expiry Date'
            />
            <CustomInput
              state={paymentInfo.ccv}
              setState={handleChange}
              name='ccv'
              placeholder='CCV'
              label='CCV'
            />
          </div>
          <CustomDrowpdown
            state={paymentInfo.country}
            label='Country'
            placeholder='Select a country'
            options={Countries.map((c) => {
              return {
                label: c.name,
                value: c.name,
              }
            })}
            name='country'
            setState={handleChange}
          />
        </div>

        <CustomCheckBox
          agree={paymentInfo.save}
          setAgree={() =>
            setPaymentInfo({ ...paymentInfo, save: !paymentInfo.save })
          }
          label='Save credit card info'
          customContainerStyles={{
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
          }}
        />
      </div>
    )
  }

  const handleChange = (value: string, name?: string) => {
    if (name) {
      setPaymentInfo({ ...paymentInfo, [name]: value })
    }
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>Make a Deposit</div>
        <div className={`green ${style.smaller}`}>Deposit Method</div>
      </div>
      <div className={style.body}>
        <div>
          {renderPaymentOptions(CreditCard_SVG, 'Credit Card', true)}
          {renderPaymentOptions(Paypal_SVG, 'PayPal')}
          {renderPaymentOptions(Apple_SVG, 'ApplePay')}
        </div>

        <div className={`${style.card} ${style.completePayment}`}>
          <div>Complete Deposit</div>
          <div className={style.innerBody}>
            <div className={style.amountContainer}>
              <CustomInput
                state={payment}
                setState={(v) => setPayment(v)}
                placeholder='20'
                label='Amount'
              />
              <div>
                <InfoIcon_SVG />
                <div>Minimum amount is $20</div>
              </div>
            </div>
            <div className={style.amountView}>
              <div>Amount</div>
              <div>$20.00</div>
            </div>
            <div className={style.ticksContainer}>
              {renderPaymentTicks('Deposit Never Expires')}
              {renderPaymentTicks('Use Anytime')}
              {renderPaymentTicks('No Commitment')}
            </div>
            <CustomButton
              label={'Deposit'}
              onClick={() => setPopUpShown(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

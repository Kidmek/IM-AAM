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
import style from './payment.module.css'
import CustomInput from '../inputs/CustomInput'
import { FC, SVGProps, useState } from 'react'
import CustomDrowpdown from '../inputs/CustomDropdown'
import { Countries } from '@/constants/strings/settings'
import CustomCheckBox from '../inputs/CustomCheckBox'
import CustomButton from '../button/CustomButton'

export default function Payment({ isDeposit = false }) {
  const title = isDeposit
    ? { main: 'Deposit', action: 'Deposit' }
    : { main: 'Payment', action: 'Pay' }
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    ccv: '',
    country: '',
    save: true,
    selected: 'PayPal',
  })

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
    title: string
  ) => {
    return (
      <div className={`${style.card} ${style.paymentOption}`}>
        <div
          className={`${style.circleCheckBox} ${
            title === paymentInfo.selected && style.selected
          }`}
          onClick={() => {
            setPaymentInfo({ ...paymentInfo, selected: title })
          }}
        />

        <Icon />
        {title}
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
        <div>Make a Payment</div>
        <div className={`green ${style.smaller}`}>{title.main} Method</div>
      </div>
      <div className={style.body}>
        <div>
          <div className={`${style.card} ${style.creditCard}`}>
            <div>
              <CreditCard_SVG />
              <div>Credit Card</div>
            </div>
            {renderCards()}
            <div className={`green ${style.smaller}`}>
              {title.action} with Credit Card
            </div>
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
          {renderPaymentOptions(Paypal_SVG, 'PayPal')}
          {renderPaymentOptions(Apple_SVG, 'ApplePay')}
        </div>

        <div className={`${style.card} ${style.completePayment}`}>
          <div>Complete {title.main}</div>
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
            <CustomButton label={title.action} />
          </div>
        </div>
      </div>
    </div>
  )
}

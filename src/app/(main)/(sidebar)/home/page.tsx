'use client'

import {
  Crypto_SVG,
  Home1,
  Home2,
  Home3,
  Home4,
  Home5,
  HomeQR,
  NFT_SVG,
  Stock_SVG,
} from '@/constants/images'
import style from './page.module.css'
import { useState } from 'react'
import Dialog from '@/components/dialog/Dialog'
import PopUp1 from '@/components/popUp/PopUp1'
import PopUpAttention from '@/components/popUp/PopUpAttention'

export default function Home() {
  const [popUpShown, setPopUpShown] = useState<1 | 2 | null>(1)
  return (
    <div className={style.homeContainer}>
      {popUpShown && (
        <Dialog
          child={popUpShown === 1 ? <PopUp1 /> : <PopUpAttention />}
          onClose={() => {
            setPopUpShown(null)
            setTimeout(() => {
              if (popUpShown === 1) {
                setPopUpShown(2)
              }
            }, 200)
          }}
        />
      )}
      <div className={style.homeTop}>
        <div>
          <div className={style.homeTitle}>
            Your financial success is our Success
          </div>
          <div className={style.homeDesc}>
            Everyone is charged their share Say hello to multiplayer payment
          </div>
          <div className={style.qr}>
            <div>Scan and Invest</div>
            <img src={HomeQR.src} alt='QR' />
          </div>

          <div>One platform. Multiple investment opportunities.</div>
          <div className={style.homeIcons}>
            <div>
              <Stock_SVG />
              <div>STOCKS</div>
            </div>
            <div className={style.iconDivider}></div>
            <div>
              <NFT_SVG />
              <div>NFT</div>
            </div>
            <div className={style.iconDivider}></div>
            <div>
              <Crypto_SVG />
              <div>CRYPTO</div>
            </div>
          </div>
        </div>
        <img src={Home1.src} alt='chart' />
      </div>
      <div className={style.homeImages}>
        <div>
          <img src={Home2.src} alt='chart' />
          <img src={Home3.src} alt='chart' />
        </div>
        <div>
          <img src={Home4.src} alt='chart' />
          <img src={Home5.src} alt='chart' />
        </div>
      </div>
    </div>
  )
}

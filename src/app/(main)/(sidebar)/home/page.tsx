import Image from 'next/image'
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

export default function Home() {
  return (
    <div className={style.homeContainer}>
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
            <Image src={HomeQR} alt='QR' />
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
        <Image src={Home1} alt='chart' />
      </div>
      <div className={style.homeImages}>
        <div>
          <Image src={Home2} alt='chart' />
          <Image src={Home3} alt='chart' />
        </div>
        <div>
          <Image src={Home4} alt='chart' />
          <Image src={Home5} alt='chart' />
        </div>
      </div>
    </div>
  )
}

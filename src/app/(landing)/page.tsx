import Link from 'next/link'
import { Landing1, LandingBg, Logo } from '../../constants/images'
import { Moto } from '@/constants/strings/common'
import style from './page.module.css'

export default function Landing() {
  return (
    <div
      className={style.landingContainer}
      style={{
        backgroundImage: `url(${LandingBg})`,
      }}
    >
      <div>
        <div className={style.landingTop}>
          <img src={Logo.src} alt='Logo' />
          <div>{Moto}</div>
        </div>
        <div className={style.landingBody}>
          <img src={Landing1.src} alt='Logo' />
          <div>Strategically grow your net asset value</div>
          <div>
            <Link href={'/login'}>
              <button>Login</button>
            </Link>
            <Link href={'/registration'}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.landingBottom} />
    </div>
  )
}

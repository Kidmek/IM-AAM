import Link from 'next/link'
import { Landing1, Logo } from '../../constants/images'
import { Moto } from '@/constants/strings/common'
import style from './page.module.css'
import Image from 'next/image'

export default function Landing() {
  return (
    <div className={style.landingContainer}>
      <div>
        <div className={style.landingTop}>
          <Image src={Logo} alt='Logo' />
          <div>{Moto}</div>
        </div>
        <div className={style.landingBody}>
          <Image src={Landing1} alt='Logo' />
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

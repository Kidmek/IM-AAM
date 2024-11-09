import {
  Facebook_SVG,
  Instagram_SVG,
  Linkedin_SVG,
  Tiktok_SVG,
  Twitter_SVG,
  Youtube_SVG,
} from '@/constants/icons'

import style from './footer.module.css'

export default function EmailFooter() {
  return (
    <div className={style.emailFooter}>
      <div>Folow Us</div>
      <div>
        <Facebook_SVG />
        <Twitter_SVG />
        <Instagram_SVG />
        <Tiktok_SVG />
        <Linkedin_SVG />
        <Youtube_SVG />
      </div>
    </div>
  )
}

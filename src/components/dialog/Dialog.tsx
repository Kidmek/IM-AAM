'use client'

import { CloseIcon_SVG } from '@/constants/icons'
import style from './dialog.module.css'
type Props = {
  child: JSX.Element
  onClose: () => void
}

export default function Dialog({ child, onClose }: Props) {
  return (
    <div className={style.dialogContainer}>
      <div className={style.dialogWrapper}>
        <CloseIcon_SVG className={style.closeBtn} onClick={onClose} />
        <div className={style.contentWrapper}>{child}</div>
      </div>
    </div>
  )
}

'use client'

import { CloseIcon_SVG } from '@/constants/icons'
import style from './dialog.module.css'
type Props = {
  child: JSX.Element
  onClose: () => void
  maxWidth?: string
  width?: string
  noTopPadding?: boolean
}

export default function Dialog({
  child,
  onClose,
  maxWidth,
  width,
  noTopPadding,
}: Props) {
  return (
    <div className={style.dialogContainer}>
      <div
        className={style.dialogWrapper}
        style={{
          maxWidth: maxWidth,
          width,
        }}
      >
        <CloseIcon_SVG className={style.closeBtn} onClick={onClose} />
        <div
          className={style.contentWrapper}
          style={{
            marginTop: noTopPadding ? '0px' : '41px',
          }}
        >
          {child}
        </div>
      </div>
    </div>
  )
}

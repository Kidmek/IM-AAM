import { InfoIcon_SVG } from '@/constants/images'
import style from './infoHeader.module.css'

type Props = {
  title: string
  info: { title: string; tip: string }[]
}

export default function InfoHeader({ title, info }: Props) {
  return (
    <div className={style.header}>
      <div
        className={style.contentTitle}
        style={{
          color: 'black',
        }}
      >
        {title}
      </div>
      <div className={style.tooltip}>
        <InfoIcon_SVG className={style.infoIcon} />
        <div className={style.tooltiptext}>
          {info.map((t, index) => {
            return (
              <div key={index}>
                <span
                  className={`${style.tooltipTitle} ${
                    index > 0 ? style.topMargin : ''
                  }`}
                >
                  {t.title}
                </span>
                {t.tip}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

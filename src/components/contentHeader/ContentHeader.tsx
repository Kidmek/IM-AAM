'use client'

import style from './contentHeader.module.css'

interface Props {
  title: string
  selected: number
  setSelected: (value: number) => void
}
export default function ContentHeader({ title, selected, setSelected }: Props) {
  return (
    <div className={style.contentHeaderContainer}>
      <div className={style.contentHeaderTitle}>{title}</div>
      <div className={style.tabs}>
        <div
          className={`${style.tab} ${selected === 0 && style.active}`}
          onClick={() => {
            setSelected(0)
          }}
        >
          Overview
        </div>
        <div
          className={`${style.tab} ${selected === 1 && style.active}`}
          onClick={() => {
            setSelected(1)
          }}
        >
          {title} Setting
        </div>
      </div>
      {selected == 0 && (
        <div className={style.contentHeaderDesc}>
          <div>
            <div className={style.contentHeaderSubTitle}>{title} Value</div>
            <div className={style.subTitleValue}>$5,458</div>
            <div className={style.subSubValue}>
              + $151.152 <span>All</span>
            </div>
          </div>
          <div className={style.updatedContainer}>
            <div className={style.updated}>Updated 00:25</div>
            <div className={style.sharpRatio}>
              <div>Sharp Ratio</div>
              <div>100%</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

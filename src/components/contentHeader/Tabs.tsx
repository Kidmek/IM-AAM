'use client'

import style from './tabs.module.css'

interface Props {
  title?: string
  selected: number
  setSelected: (value: number) => void
  tabs: string[]
}
export default function Tabs({ title, selected, setSelected, tabs }: Props) {
  return (
    <div className={style.contentHeaderContainer}>
      {title && <div className={style.contentHeaderTitle}>{title}</div>}
      <div className={style.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${style.tab} ${selected === index && style.active} ${
              !title && style.noTitle
            }`}
            onClick={() => {
              setSelected(index)
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  )
}

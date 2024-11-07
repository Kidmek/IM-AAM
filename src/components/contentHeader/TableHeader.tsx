import style from './tabs.module.css'

export default function TableHeader({ title }: { title: string }) {
  return (
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
  )
}

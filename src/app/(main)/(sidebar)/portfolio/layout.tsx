import style from './layout.module.css'

export default function PorfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={style.porfolioContainer}>{children}</div>
}

import style from './layout.module.css'

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={style.appContainer}>{children}</div>
}

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import style from '../layout.module.css'

export default function NoSideBarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={style.noSideBarContainer}>
      <Header noSideBar={true} />
      <div className={style.pageContent}>{children}</div>
      <Footer />
    </div>
  )
}

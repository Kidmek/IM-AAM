import style from '../layout.module.css'
import EmailHeader from '@/components/header/EmailHeader'
import EmailFooter from '@/components/footer/EmailFooter'

export default function EmailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <EmailHeader />

      <div className={style.pageContent}>{children}</div>
      <EmailFooter />
    </>
  )
}

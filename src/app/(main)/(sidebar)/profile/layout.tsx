import style from './page.module.css'
import RoutingTab from '@/components/contentHeader/RoutingTab'

export default function ProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={style.container}>
      <div className={style.tabsContainer}>
        <RoutingTab
          tabs={[
            { value: 'Profile', link: '/profile' },
            { value: 'Payment', link: '/profile/payment' },
            { value: 'Deposit', link: '/profile/deposit' },
          ]}
        />
      </div>
      {children}
    </div>
  )
}

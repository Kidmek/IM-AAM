import { notificaitions } from '@/constants/strings/notification'
import style from './page.module.css'
import Image from 'next/image'

export default function Notification() {
  return (
    <div className={style.notificationContainer}>
      <div className={style.notificationHeader}>Notifications</div>
      {notificaitions.map((item, index) => {
        return (
          <div key={index} className={style.notificationItem}>
            {item.image && <Image src={item.image} alt='Notification Image' />}
            <div>
              <h1 className={style.notificationTitle}>{item.title}</h1>
              <p className={style.notificationContent}>{item.content}</p>
            </div>
            <div className={style.notificationTime}>1 day</div>
          </div>
        )
      })}
    </div>
  )
}

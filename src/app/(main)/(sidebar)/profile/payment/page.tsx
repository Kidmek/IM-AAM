'use client'

import PaymentTable from '@/components/tables/payment/PaymentTable'
import style from './page.module.css'
import { useState } from 'react'

export default function Payment() {
  const [pageInfo, setPageInfo] = useState({
    total: 50,
    pageSize: 1,
    page: 1,
  })

  return (
    <div className={style.container}>
      <div className={style.header}>Payments</div>
      <div className={style.body}>
        <div className={style.table}>
          <PaymentTable
            pageInfo={pageInfo}
            onPageChange={(page) => setPageInfo({ ...pageInfo, page })}
          />
        </div>
      </div>
    </div>
  )
}

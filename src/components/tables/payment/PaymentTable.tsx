import { PreviousIcon_SVG } from '@/constants/icons'
import style from './paymentTable.module.css'
import Link from 'next/link'

type Props = {
  pageInfo: {
    total: number
    pageSize: number
    page: number
  }
  onPageChange: (page: number) => void
}
export default function PaymentTable({ pageInfo, onPageChange }: Props) {
  const headers = ['Date Time', 'Name', 'Email', 'Label', 'Amount', 'Invoice']
  const data = [
    {
      dateTime: '9/4/2024 12:41 AM',
      name: 'John Doe',
      email: 'john23@gmail.com',
      label: 'Label',
      amount: '$12',
      invoice: 'dfterwersaepp.pdf',
    },
  ]

  return (
    <div className={style.container}>
      <div className={style.tableContainer}>
        <table>
          <thead>
            <tr>
              {headers.map((h, index) => (
                <th key={index}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => {
              return (
                <tr key={index}>
                  <td>{d.dateTime}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.label}</td>
                  <td>{d.amount}</td>
                  <td className={style.link}>
                    <Link href={'/invoice'} target='_blank'>
                      {d.invoice}
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={style.pagination}>
        <button
          onClick={() => onPageChange(pageInfo.page - 1)}
          disabled={pageInfo.page === 1}
        >
          <PreviousIcon_SVG />
        </button>
        <div>
          {Array.from(
            { length: Math.min(pageInfo.total / pageInfo.pageSize, 5) },
            (_, index) => {
              const pageValue = index + pageInfo.page
              return (
                <p
                  key={index}
                  onClick={() => onPageChange(pageValue)}
                  className={pageInfo.page === pageValue ? style.active : ''}
                >
                  {pageValue}
                </p>
              )
            }
          )}
        </div>
        <button
          onClick={() => onPageChange(pageInfo.page + 1)}
          disabled={
            pageInfo.page === Math.ceil(pageInfo.total / pageInfo.pageSize)
          }
          className={style.reversed}
        >
          <div>
            <PreviousIcon_SVG />
          </div>
        </button>
      </div>
    </div>
  )
}

import {
  ClientColumns,
  StockPurchaseColumns,
  Weekly,
} from '@/constants/strings/weekly'
import style from './page.module.css'

type RowType = {
  accessValue: string
  label: string
}

export default function WeeklySummary() {
  const renderSingleTable = (
    title: string,
    rows: RowType[],
    data: unknown[]
  ) => {
    return (
      <div className={style.weeklySummaryTable}>
        <p className='fw-700'>{title}</p>
        <div>
          <table className={`${rows.length > 4 ? 'large' : 'small'}`}>
            <thead>
              <tr>
                {rows.map((row, index) => {
                  return <th key={index}>{row.label}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {data.map((value: any, rowIndex: number) => {
                const isLastRow = rowIndex === data.length - 1
                return (
                  <tr key={rowIndex}>
                    {rows.map((row, columnIndex) => {
                      let className = ''
                      if (isLastRow) {
                        if (columnIndex === 0) {
                          className = 'lastRowFirstCol'
                        } else if (columnIndex === rows.length - 1) {
                          className = 'lastRowLastCol'
                        }
                      }
                      return (
                        <td key={columnIndex} className={className}>
                          {value[row.accessValue]}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  return (
    <div className={style.weeklySummaryContainer}>
      <p className={style.paddedInline}>
        Dear [Client&apos;s Name], <br /> <br />
        Thank you for being a valued member of our stock recommendation service!
        We appreciate your trust in us to help guide your investment journey.
        Below is a summary of your recent stock recommendations, based on the
        information purchases you made through our platform during the week of
        [09/25/2024 - 10/01/2024]. We hope this summary provides valuable
        insights and helps you track potential gains. Should you have any
        questions or need further assistance, please feel free to reach out to
        our support team.
      </p>

      {renderSingleTable('Client Information', ClientColumns, Weekly.client)}
      {renderSingleTable(
        'Stock Purchase Summary',
        StockPurchaseColumns,
        Weekly.stock
      )}
      <p className={style.paddedInline}>
        Thank you again for the continued partnership. We look forward to
        supporting your success in the upcoming weeks. <br /> <br />
        Best Regards, <br /> <br />
        <span className='fw-700'>IM-AAM Customer Support</span>
      </p>
    </div>
  )
}

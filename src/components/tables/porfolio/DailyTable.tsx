import { FilterIcon_SVG, HelpIcon_SVG } from '@/constants/icons'

import style from './porfolioTable.module.css'
import ContentFooter from '@/components/contentFooter/ContentFooter'
import { dailyHeaders, technicalIndicators } from '@/constants/strings/daily'

export default function DailyTable({ title }: { title: string }) {
  const renderCol = (values: string[], isValue?: boolean) => {
    return (
      <div>
        {values.map((value, index) => {
          let color = 'black'
          if (isValue) {
            if (value.toLowerCase().includes('buy')) {
              color = 'rgba(52, 147, 92, 1)'
            } else if (value.toLowerCase().includes('sell')) {
              color = 'rgba(253, 33, 37, 1)'
            } else {
              color = 'rgba(164, 164, 164, 1)'
            }
          }
          return (
            <div
              key={index}
              style={{
                color,
              }}
            >
              {value}
            </div>
          )
        })}
      </div>
    )
  }

  const renderTechnical = () => {
    return (
      <div className={style.technical}>
        {renderCol(technicalIndicators.firstHalf.times)}
        {renderCol(technicalIndicators.firstHalf.values, true)}
        {renderCol(technicalIndicators.secondHalf.times)}
        {renderCol(technicalIndicators.secondHalf.values, true)}
      </div>
    )
  }
  return (
    <div className={style.container}>
      <div className={style.tableContainer}>
        <p>{title}</p>
        <table>
          <thead>
            <tr>
              {dailyHeaders.map((h, index) => {
                const minWidth =
                  h.name.length * 6 + h.name.split(' ').length * 5
                const hasBoth = h.help && !h.filter_disabled
                return (
                  <th
                    key={index}
                    style={{
                      backgroundColor: `var(--green)`,
                      minWidth: `${minWidth > 70 ? minWidth : 70}px`,
                      color: 'white',
                    }}
                  >
                    <div className={style.headerCell}>
                      <div className={style.headerTitle}>{h.name}</div>
                      <div className={style.headerIcons}>
                        {h.help && (
                          <div className={style.tooltip}>
                            <HelpIcon_SVG
                              className={`${style.helpIcon} ${
                                hasBoth && style.absolute
                              }`}
                            />
                            {h.tooltip && h.tooltip.length > 0 && (
                              <div className={style.tooltiptext}>
                                <div key={index}>{h.tooltip}</div>
                              </div>
                            )}
                          </div>
                        )}
                        {!h.filter_disabled ? (
                          <FilterIcon_SVG className={style.filterIcon} />
                        ) : (
                          <div className={style.filterIcon} />
                        )}
                      </div>
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody>
            {[dailyHeaders, dailyHeaders, dailyHeaders, dailyHeaders].map(
              (t, index) => {
                return (
                  <tr key={index}>
                    {t.map((h, index) => {
                      if (index === 0) {
                        return <td key={index}>{renderTechnical()}</td>
                      }
                      return <td key={index}>{h.value}</td>
                    })}
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
      <ContentFooter />
    </div>
  )
}

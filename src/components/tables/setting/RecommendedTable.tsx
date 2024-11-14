import { FilterIcon_SVG } from '@/constants/icons'
import { recommendedStocks } from '@/constants/strings/recommended'
import style from './settingTable.module.css'

export default function RecommendedTable() {
  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            {recommendedStocks.map((h, index) => {
              const isDark = h.textLight
              return (
                <th
                  key={index}
                  style={{
                    minWidth: `${
                      h.name.length * 6 + h.name.split(' ').length * 5
                    }px`,
                  }}
                >
                  <div className={style.headerCell}>
                    <div>{h.name}</div>
                    {!h.filter_disabled && (
                      <FilterIcon_SVG
                        className={`${style.filterIcon} ${
                          isDark && style.dark
                        } `}
                      />
                    )}
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {[
            recommendedStocks,
            recommendedStocks,
            recommendedStocks,
            recommendedStocks,
          ].map((t, index) => {
            return (
              <tr key={index}>
                {t.map((h, index) => {
                  return <td key={index}>{h.value}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

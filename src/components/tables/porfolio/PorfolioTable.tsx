import { positionHeaders } from '@/constants/strings/position'
import { FilterIcon_SVG, HelpIcon_SVG, MapPin_SVG } from '@/constants/icons'

import style from './porfolio.module.css'

export default function PortfolioTable({ title }: { title: string }) {
  const renderMomentumLine = (days: string, option: string, color?: string) => {
    const colorClassName = `${color && style[color]}`
    return (
      <div className={style.quarter}>
        <div className={colorClassName}>{days}</div>
        <div className={`${style.line} ${colorClassName}`}></div>
        <div className={colorClassName}>{option}</div>
      </div>
    )
  }
  const renderMomentum = (progress: number) => {
    return (
      <div className={style.momentum}>
        <div
          className={style.locationPin}
          style={{
            left: `calc(${progress}% - 5px)`,
          }}
        >
          <MapPin_SVG />
        </div>
        {renderMomentumLine('0d', 'Buy')}
        {renderMomentumLine('50d', 'Buy', 'lightGreen')}

        {renderMomentumLine('75d', 'Sell', 'green')}
        {renderMomentumLine('100d', 'Buy', 'green')}
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
              {positionHeaders.map((h, index) => {
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
                            <div className={style.tooltiptext}>
                              {h.tooltip.length > 0 && (
                                <div key={index}>{h.tooltip}</div>
                              )}
                            </div>
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
            {[
              positionHeaders,
              positionHeaders,
              positionHeaders,
              positionHeaders,
            ].map((t, index) => {
              return (
                <tr key={index}>
                  {t.map((h, index) => {
                    if (index == 0) {
                      return <td key={index}>{renderMomentum(80)}</td>
                    }
                    return <td key={index}>{h.value}</td>
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

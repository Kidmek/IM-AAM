import { positionHeaders } from '@/constants/strings/position'
import {
  FilterIcon_SVG,
  HelpIcon_SVG,
  MapPin_SVG,
} from '../../../constants/images'

import style from './porfolio.module.css'

export default function PortfolioTable() {
  const renderMomentumLine = (days: string, option: string, color?: string) => {
    return (
      <div className={style.quarter}>
        <div className={style.blue}>{days}</div>
        <div className={`${style.line} ${color && style[color]}`}></div>
        <div className={style.blue}>{option}</div>
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
        {renderMomentumLine('50d', 'Buy', 'blue')}

        {renderMomentumLine('75d', 'Sell', 'green')}
        {renderMomentumLine('100d', 'Buy', 'green')}
      </div>
    )
  }
  return (
    <div className={style.tableContainer}>
      <p>Recommended</p>
      <table>
        <thead>
          <tr>
            {positionHeaders.map((h, index) => {
              const minWidth = h.name.length * 6 + h.name.split(' ').length * 5
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
                        <HelpIcon_SVG
                          className={`${style.helpIcon} ${
                            hasBoth && style.absolute
                          }`}
                        />
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
  )
}

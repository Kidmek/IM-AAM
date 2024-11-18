import { positionHeaders } from '@/constants/strings/position'
import { FilterIcon_SVG, HelpIcon_SVG, MapPin_SVG } from '@/constants/icons'

import style from './porfolioTable.module.css'
import { Chart } from '@/constants/images'
import { useState } from 'react'
import ChartPopup from '@/components/popUp/ChartPopup'
import Dialog from '@/components/dialog/Dialog'

export default function PortfolioTable({ title }: { title: string }) {
  const [popUpShown, setPopUpShown] = useState(true)

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
      {!popUpShown && (
        <Dialog
          child={<ChartPopup />}
          onClose={() => setPopUpShown(true)}
          noTopPadding
          maxWidth='fit-content'
        />
      )}
      <div className={style.tableContainer}>
        <p>{title}</p>
        <div
          style={{
            height: '400px',
          }}
        >
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
              {[
                positionHeaders,
                positionHeaders,
                positionHeaders,
                positionHeaders,
              ].map((t, index) => {
                return (
                  <tr key={index}>
                    {t.map((h, index) => {
                      if (index === 0) {
                        return <td key={index}>{renderMomentum(80)}</td>
                      } else if (index + 1 === positionHeaders.length) {
                        return (
                          <td key={index}>
                            <div
                              style={{
                                display: 'flex',
                                gap: '26px',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                src={Chart}
                                alt='chart'
                                style={{
                                  cursor: 'pointer',
                                }}
                                onClick={() => setPopUpShown(false)}
                              />
                              {h.value}
                            </div>
                          </td>
                        )
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
    </div>
  )
}

import { Countries } from '@/constants/strings/settings'

import style from './settingTable.module.css'

export default function CountryTable() {
  return (
    <div className={`${style.tableContainer} `}>
      <table>
        <thead>
          <tr>
            <th
              style={{
                width: '5%',
              }}
            >
              S.No
            </th>
            <th
              style={{
                width: '25%',
              }}
            >
              Countries
            </th>
            <th
              style={{
                width: '50%',
              }}
            >
              Recommended Stocks Amount
            </th>
            <th
              style={{
                width: '10%',
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className={style.emptyRow}>
          <tr></tr>
        </tbody>
        <tbody>
          {Countries.map((c, index) => {
            return (
              <tr key={index} className={style.settingRow}>
                <td>0{index + 1}</td>
                <td>{c.name}</td>
                <td>{c.recommended}</td>
                <td>
                  <input type='checkbox' />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

import { Countries } from '@/constants/strings/settings'
import style from './setting.module.css'

export default function BrokerageFeeTable() {
  return (
    <div className={style.tableContainer}>
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
                minWidth: '30%',
              }}
            >
              Countries
            </th>
            <th
              style={{
                minWidth: '20%',
              }}
            >
              Maximum
            </th>
            <th
              style={{
                minWidth: '20%',
              }}
            >
              Minimum
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
        <tbody>
          {Countries.map((c, index) => {
            return (
              <tr key={index} className={style.settingRow}>
                <td>0{index + 1}</td>
                <td>{c.name}</td>
                <td>{c.maximum}</td>
                <td>{c.minimum}</td>

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

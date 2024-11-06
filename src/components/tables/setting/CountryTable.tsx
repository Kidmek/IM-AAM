import { Countries } from '@/constants/strings/settings'
import React from 'react'

import style from './setting.module.css'

export default function CountryTable() {
  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th style={{}}>S.No</th>
            <th
              style={{
                minWidth: '10rem',
              }}
            >
              Countries
            </th>
            <th
              style={{
                minWidth: '30rem',
              }}
            >
              Recommended Stocks Amount
            </th>
            <th
              style={{
                width: '100px',
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

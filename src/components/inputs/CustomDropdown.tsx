'use client'

import { useState } from 'react'
import { DropDownIcon_SVG } from '@/constants/icons'
import style from './input.module.css'

interface Props {
  label: string
  state: string
  setState: (value: string, name?: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  isForm?: boolean
  name?: string
}

export default function CustomDrowpdown({
  label,
  state,
  setState,
  options,
  placeholder,
  isForm,
  name,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={style.inputContainer}>
      <label className={`${style.inputLabel} ${isForm && style.formLabel}`}>
        {label}
      </label>
      <div className={style.customSelect}>
        <div
          className={style.dropDownSelect}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <div className={state ? style.selectedOption : style.placeholder}>
            {state ?? placeholder}
          </div>

          <DropDownIcon_SVG
            className={`${style.dropDownIcon} ${isOpen && style.rotate}`}
          />
        </div>

        {isOpen && (
          <div className={style.optionContainer}>
            {options.map((o) => {
              return (
                <div
                  key={o.value}
                  className={`${style.option} ${
                    state === o.value && style.selected
                  }`}
                  onClick={() => {
                    setState(o.value, name)
                    setIsOpen(!isOpen)
                  }}
                >
                  {o.label}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

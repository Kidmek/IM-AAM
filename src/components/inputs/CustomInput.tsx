import { HTMLInputTypeAttribute } from 'react'
import style from './input.module.css'

interface Props {
  label?: string
  state: string
  setState: (value: string, name?: string) => void
  type?: HTMLInputTypeAttribute | undefined
  placeholder?: string
  name?: string
  isForm?: boolean
  error?: string | null
}
export default function CustomInput({
  label,
  state,
  setState,
  type,
  placeholder,
  name,
  isForm,
  error,
}: Props) {
  return (
    <div className={style.inputContainer}>
      {label && (
        <label
          className={`${style.inputLabel} ${isForm && style.formLabel} ${
            error && style.error
          }`}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        className={`${isForm && style.formInput} ${error && style.inputError}`}
        value={state}
        onChange={(e) => {
          setState(e.target.value, name)
        }}
        placeholder={placeholder}
      />
      {error && (
        <span className={`${isForm && style.formLabel} ${style.error}`}>
          {error}
        </span>
      )}
    </div>
  )
}

import style from './input.module.css'

interface Props {
  label: string
  state: string
  setState: (value: string, name?: string) => void
  type?: 'text' | 'number' | 'password' | undefined
  placeholder?: string
  name?: string
  isForm?: boolean
}
export default function CustomInput({
  label,
  state,
  setState,
  type,
  placeholder,
  name,
  isForm,
}: Props) {
  return (
    <div className={style.inputContainer}>
      <label className={`${style.inputLabel} ${isForm && style.formLabel}`}>
        {label}
      </label>

      <input
        type={type ?? 'text'}
        className={`${isForm && style.formInput}`}
        value={state}
        onChange={(e) => {
          setState(e.target.value, name)
        }}
        placeholder={placeholder}
      />
    </div>
  )
}

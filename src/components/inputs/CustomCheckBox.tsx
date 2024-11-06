type Props = {
  agree: boolean
  setAgree: React.Dispatch<React.SetStateAction<boolean>>
  label: string
  customContainerStyles?: React.CSSProperties
}
export default function CustomCheckBox({
  agree,
  setAgree,
  label,
  customContainerStyles,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        ...customContainerStyles,
      }}
    >
      <input
        type='checkbox'
        checked={agree}
        onChange={() => setAgree(!agree)}
      />
      <div>{label}</div>
    </div>
  )
}

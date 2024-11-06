import { FC, SVGProps } from 'react'

interface Props {
  label: string
  onClick?: () => void
  bgColor?: string
  txtColor?: string
  customContainerStyles?: React.CSSProperties
  variant?: 'bold'
  Icon?: FC<SVGProps<SVGSVGElement>>
}

export default function CustomButton({
  label,
  onClick,
  bgColor,
  txtColor,
  customContainerStyles,
  variant,
  Icon,
}: Props) {
  const boldText = {
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '20px',
    letterSpacing: ' 0.30000001192092896px',
  }

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor ?? 'var(--green)',
        border: 'none',
        color: txtColor ?? 'white',
        padding: '15px 24px',
        borderRadius: 'var(--border-radius)',
        width: '100%',
        cursor: 'pointer',
        ...customContainerStyles,
        ...(variant === 'bold' ? boldText : undefined),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      {Icon && <Icon />}
      {label}
    </button>
  )
}

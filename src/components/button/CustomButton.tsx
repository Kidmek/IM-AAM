import { Loading_SVG } from '@/constants/icons'
import { CSSProperties, FC, SVGProps } from 'react'

interface Props {
  label: string
  onClick?: () => void
  bgColor?: string
  txtColor?: string
  customContainerStyles?: React.CSSProperties
  variant?: 'bold' | 'slim'
  Icon?: FC<SVGProps<SVGSVGElement>>
  loading?: boolean
}

export default function CustomButton({
  label,
  onClick,
  bgColor,
  txtColor,
  customContainerStyles,
  variant,
  Icon,
  loading,
}: Props) {
  const boldText: CSSProperties = {
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '20px',
    letterSpacing: ' 0.30000001192092896px',
  }

  const slim: CSSProperties = {
    maxWidth: '172px',
    paddingBlock: '10px',
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

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        ...customContainerStyles,
        ...(variant === 'bold'
          ? boldText
          : variant === 'slim'
          ? slim
          : undefined),
        opacity: loading ? '0.5' : undefined,
      }}
      type='button'
    >
      {loading ? (
        <Loading_SVG style={{ color: 'white' }} />
      ) : (
        <>
          {Icon && <Icon />}
          {label}
        </>
      )}
    </button>
  )
}

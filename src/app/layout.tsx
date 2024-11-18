import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Moto } from '@/constants/strings/common'

const poppins = localFont({
  src: './fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
  weight: '100 200 300 400 500 600 700 800 900',
})

export const metadata: Metadata = {
  title: 'IM-AAM',
  description: Moto,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.png' type='image/png' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </head>
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artes Vidros W.R.R',
  description: 'Vidraçaria Profissional em São Paulo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'

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
      <body className='flex flex-col min-h-screen py-4 bg-gray-600'>
        <NavBar/>
        <main className='flex-grow'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

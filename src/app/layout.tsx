import { NavBar } from '@/components/NavBar'
import { NavBarMobile } from '@/components/NavBarMobile'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Whatsapp } from '@/components/Whatsapp'

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
    <html lang="en" className='scroll-smooth scroll-p-4'>
      <body className='min-h-screen py-4 bg-gray-600'>
        <NavBarMobile/>
        <NavBar/>
        <main>
          {children}
        </main>
        <Whatsapp/>
        <Footer/>
      </body>
    </html>
  )
}

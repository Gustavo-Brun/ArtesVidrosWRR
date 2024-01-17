import { NavBar } from '@/components/NavBar'
import { NavBarMobile } from '@/components/NavBarMobile'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { FooterMobile } from '@/components/FooterMobile'
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
      <head>
        <link rel="icon" href="/logo/logopic.png" sizes="any" />
      </head>
      <body className='min-h-screen py-4 bg-gray-600'>
        <NavBar/>
        <NavBarMobile/>
        <main>
          {children}
        </main>
        <Whatsapp/>
        <Footer/>
        <FooterMobile/>
      </body>
    </html>
  )
}

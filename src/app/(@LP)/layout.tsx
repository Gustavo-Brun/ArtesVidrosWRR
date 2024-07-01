import { NavBar } from '@/components/NavBar'
import { NavBarMobile } from '@/components/NavBarMobile'
import { Footer } from '@/components/Footer'
import { FooterMobile } from '@/components/FooterMobile'
import { Whatsapp } from '@/components/Whatsapp'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <NavBarMobile />
      {children}
      <Whatsapp />
      <Footer />
      <FooterMobile />
    </>

  )
}

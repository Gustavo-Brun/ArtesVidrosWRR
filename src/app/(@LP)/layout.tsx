import { NavBar } from '@/components/LandingPages/@global/NavBar'
import { NavBarMobile } from '@/components/LandingPages/@global/NavBarMobile'
import { Footer } from '@/components/LandingPages/@global/Footer'
import { FooterMobile } from '@/components/LandingPages/@global/FooterMobile'
import { Whatsapp } from '@/components/@utils/Whatsapp'

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

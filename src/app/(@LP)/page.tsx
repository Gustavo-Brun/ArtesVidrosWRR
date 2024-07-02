import { Cards } from "@/components/LandingPages/Cards";
import { Header } from "@/components/LandingPages/Header";
import { HeaderMobile } from "@/components/LandingPages/HeaderMobile";
import { Sash } from "@/components/@utils/Sash";
import { Section1 } from "@/components/LandingPages/Section1";
import { Section1Mobile } from "@/components/LandingPages/Section1Mobile";
import { Section2 } from "@/components/LandingPages/Section2";
import { Section2Mobile } from "@/components/LandingPages/Section2Mobile";
import { SwiperCarousel } from "@/components/LandingPages/Swiper";
import { Contact } from "@/components/LandingPages/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <HeaderMobile />
      <Section1 />
      <Section1Mobile />
      <Sash text="Nossos Serviços" />
      <Cards />
      <Section2 />
      <Section2Mobile />
      <SwiperCarousel />
      <Contact />
    </main>
  )
}

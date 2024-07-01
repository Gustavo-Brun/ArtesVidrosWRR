import { Cards } from "@/components/Cards";
import { Header } from "@/components/Header";
import { HeaderMobile } from "@/components/HeaderMobile";
import { Sash } from "@/components/Sash";
import { Section1 } from "@/components/Section1";
import { Section1Mobile } from "@/components/Section1Mobile";
import { Section2 } from "@/components/Section2";
import { Section2Mobile } from "@/components/Section2Mobile";
import { SwiperCarousel } from "@/components/Swiper";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header/>
      <HeaderMobile/>
      <Section1/>
      <Section1Mobile/>
      <Sash text="Nossos Serviços"/>
      <Cards/>
      <Section2/>
      <Section2Mobile/>
      <SwiperCarousel/>
      <Contact/>
    </main>
  )
}

import { Cards } from "@/components/Cards";
import { Carousel } from "@/components/Carousel";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { HeaderMobile } from "@/components/HeaderMobile";
import { Sash } from "@/components/Sash";
import { Section1 } from "@/components/Section1";
import { Section1Mobile } from "@/components/Section1Mobile";
import { Section2 } from "@/components/Section2";

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
      <Carousel/>
      <Contact/>
    </main>
  )
}

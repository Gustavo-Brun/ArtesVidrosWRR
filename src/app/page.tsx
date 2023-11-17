import { Cards } from "@/components/Cards";
import { Header } from "@/components/Header";
import { Sash } from "@/components/Sash";

export default function Home() {
  return (
    <main>
      <Header/>
      <Sash text="Nossos Serviços"/>
      <Cards/>
    </main>
  )
}

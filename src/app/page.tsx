import { Cards } from "@/components/Cards";
import { Sash } from "@/components/Sash";
import { Section1 } from "@/components/Section1";
import { Spacer } from "@/components/Spacer";

export default function Home() {
  return (
    <main>
      <Spacer h={'10'}/>
      <Section1/>
      <Sash text="Nossos Serviços"/>
      <Cards/>
    </main>
  )
}

import { Cards } from "@/components/Cards";
import { Sash } from "@/components/Sash";
import { Spacer } from "@/components/Spacer";

export default function HomeServicos() {
  return (
    <main>
      <Spacer h={'10'}/>
      <Sash text="Nossos Serviços"/>
      <Cards/>
    </main>
  )
}

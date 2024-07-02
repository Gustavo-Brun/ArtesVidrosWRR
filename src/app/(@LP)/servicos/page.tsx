import { Cards } from "@/components/LandingPages/Cards";
import { Sash } from "@/components/@utils/Sash";
import { Spacer } from "@/components/@utils/Spacer";

export default function HomeServicos() {
  return (
    <main>
      <Spacer style={'h-10 invisible'} />
      <Sash text="Nossos Serviços" />
      <Cards />
    </main>
  )
}

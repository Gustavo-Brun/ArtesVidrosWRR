import { Cards } from "@/components/Cards";
import { Sash } from "@/components/Sash";
import Spacer from "@/components/Spacer";

export default function Home() {
  return (
    <main className="bg-sky-100 ">
      <Spacer h={'10'} w={'full'} bg={'sky-100'}/>
      <Sash/>
      <Cards/>
    </main>
  )
}

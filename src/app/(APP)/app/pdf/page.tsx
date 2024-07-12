import { ReturnButton } from "@/components/AppPages/@global/ReturnButton";
import { DataRequest } from "@/components/AppPages/PDF/DataRequest";

export default async function HomePdf() {
  return (
    <main>
      <ReturnButton />
      <DataRequest />
    </main>
  )
}

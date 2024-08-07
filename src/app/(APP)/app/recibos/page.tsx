import { ReturnButton } from "@/components/AppPages/@global/ReturnButton";
import { DataRequest } from "@/components/AppPages/Receipt/DataRequest";

export default async function HomeRecibos() {
    return (
        <main>
            <ReturnButton />
            <DataRequest />
        </main>
    )
}

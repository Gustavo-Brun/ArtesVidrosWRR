import { Button } from "@/components/ui/button"
import Link from "next/link"

import { IoIosReturnLeft } from "react-icons/io"

export const ReturnButton = () => {
    return (
        <Link
            href="/app"
            className="m-10"
        >
            <Button variant={"outline"}>

                <p>Voltar</p>
                <IoIosReturnLeft style={{ fontSize: 22 }} />

            </Button>
        </Link>
    )

}
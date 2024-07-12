import Image from "next/image";
import Link from "next/link";

import { FaFilePdf } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";

export const ToolList = () => {
    return(
        <section className="flex flex-col lg:flex-row items-center justify-center text-center">

            <Link href={'/app/agendamentos'} 
            className='flex flex-col items-center w-fit m-5 my-10 p-5 border-b-4 border-color-secundary rounded-xl shadow-2xl bg-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-90' >
                <AiFillSchedule style={{fontSize: '50px', marginBottom: '8px'}}/>

                <h3 className="my-2 text-2xl font-bold">Agendamentos</h3>
            </Link>

            <Link href={'/app/pdf'} 
            className='flex flex-col items-center w-fit m-5 my-10 p-5 border-b-4 border-color-primary rounded-xl shadow-2xl bg-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-90' >
                <FaFilePdf style={{fontSize: '50px', marginBottom: '8px'}}/>
                <h3 className="my-2 text-2xl font-bold">Orçamentos</h3>
            </Link>
   
        </section>
    )
}
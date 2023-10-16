import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="z-50 sticky top-2 flex mx-auto px-5 justify-between items-center h-20 w-5/6 backdrop-blur-sm bg-color-header-footer rounded-3xl shadow-md text-black text-lg font-mono font-bold">
        <Image 
        src={"/logo/Artes-Vidros-nBg.png"} 
        alt="Logo Artes Vidros W.R.R"
        width={100}
        height={100}
        />
        <nav>
            <ul className=" grid gap-10 grid-cols-4 ">
                <li className="hover:text-gray-600 transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/"}>
                        Início
                    </Link>
                </li>
                <li className="hover:text-gray-600 transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/servicos"}>
                        Serviços
                    </Link>
                </li>
                <li className="hover:text-gray-600 transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/"}>
                        Sobre Nós
                    </Link>
                </li>
                <li className="hover:text-gray-600 transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/"}>
                        Fale Conosco
                    </Link>
                </li>
            </ul>
        </nav>
        <div>
            social midia
        </div>
    </header>
  )
}

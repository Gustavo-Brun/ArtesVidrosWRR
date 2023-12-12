import Image from "next/image"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";

export const NavBar = () => {
  return (
    <section className="z-50 sticky top-2 flex mx-auto px-5 justify-between items-center h-20 w-5/6 backdrop-blur-sm bg-color-header-footer rounded-3xl shadow-md text-white text-lg font-mono font-bold">
        <Image 
        src={"/logo/Artes-Vidros-nBg.png"} 
        alt="Logo Artes Vidros W.R.R"
        width={100}
        height={100}
        />
        <nav>
            <ul className=" grid gap-10 grid-cols-4 ">
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/"}>
                        Início
                    </Link>
                </li>
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/servicos"}>
                        Serviços
                    </Link>
                </li>
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/"}>
                        Sobre Nós
                    </Link>
                </li>
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/contato"}>
                        Fale Conosco
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="items-center flex"> 
            <Link 
            href={'https://www.instagram.com/artesvidroswrr/'} 
            target="blank"
            className="mr-5 ">
                <FaInstagram style={{ color: 'white' , fontSize: '30px' , background:'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)' , borderRadius: '30%' , padding: '2px' }}/>
            </Link>
        </div>
    </section>
  )
}

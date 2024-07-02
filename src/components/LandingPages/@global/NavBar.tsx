'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

export const NavBar = () => {
    
    useEffect(() => {
        const handleScroll = () => {
            // Lógica para estilos durante o scroll
            const scrollY = window.scrollY;
            const navBar = document.getElementById("navBar");

            if (navBar) {
                switch (true) {

                    case scrollY === 0:
                    navBar.style.color = "white";
                    break;

                case scrollY > 100:

                    if (scrollY < 580) {
                        navBar.style.color = "white"
                    } else if (scrollY > 580 && scrollY < 3100) {
                        navBar.style.color = "black";
                    } else if (scrollY > 3100 && scrollY < 4000) {
                        navBar.style.color = "white";
                    } else if (scrollY > 4000 && scrollY < 4950) {
                        navBar.style.color = "black";
                    } else if (scrollY > 4950)
                        navBar.style.color = "white";
                    break;
                }
              }
        };

        // Adiciona o ouvinte de evento de rolagem quando o componente é montado
        window.addEventListener("scroll", handleScroll);

        // Remove o ouvinte de evento de rolagem quando o componente é desmontado
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // O segundo argumento vazio garante que o useEffect só é executado uma vez, semelhante ao componentDidMount

  return (
    <section 
    id="navBar"
    className="md:flex hidden z-50 sticky top-2 mx-auto px-5 justify-between items-center h-20 w-5/6 backdrop-blur-sm bg-color-header-footer rounded-3xl shadow-md text-white text-lg font-mono font-bold">
        <Image 
        src={"/logo/Artes-Vidros-nBg.png"} 
        alt="Logo Artes Vidros W.R.R"
        width={100}
        height={100}
        />
        <nav>
            <ul className=" grid gap-10 grid-cols-4 ">
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/#inicio"}>
                        Início
                    </Link>
                </li>
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/servicos"}>
                        Serviços
                    </Link>
                </li>
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/#sobre"}>
                        Sobre Nós
                    </Link>
                </li>
                <li className="hover:text-color-logo transition-colors duration-300 hover:underline underline-offset-1">
                    <Link href={"/#contato"}>
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

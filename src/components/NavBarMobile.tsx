'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export const NavBarMobile = () => {

    useEffect(() => {
        const handleScroll = () => {
            // Lógica para estilos durante o scroll
            const scrollY = window.scrollY;
            const navBar = document.getElementById("navBar");

            if (navBar) {
                if (scrollY > 100) {
                  navBar.style.position = "fixed";
                  navBar.style.right = "8px";
                  navBar.style.top = "8px";
                } else {
                  navBar.style.position = "absolute";
                  navBar.style.right = "40%";
                  navBar.style.top = "20px";
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

    
    const [isOpen, setIsOpen] = useState(false)

    let navControl
    let navArrowUp
    let navArrowDown

    switch (isOpen) {
        case false:
            navControl = "hidden"
            navArrowUp = "none"
            navArrowDown = "flex" 
            break;
    
        case true:
            navControl = "flex"
            navArrowUp = "flex"
            navArrowDown = "none"
            break;
    }

    const setNav = () => {
        setIsOpen(!isOpen)
    }

  return (
    <section 
    id="navBar"
    onClick={setNav}
    className="md:hidden flex-col items-center z-50 absolute right-[40%] top-5  w-fit py-2 backdrop-blur-sm bg-color-header-footer rounded-3xl shadow-md text-black text-xl font-mono font-bold hover:cursor-pointer">
        <div className="flex items-center">
            <div className="ml-2 animate-pulse ">
                <IoIosArrowDown style={{display:navArrowDown, fontSize:"1.5em"}}/>
                <IoIosArrowUp style={{display:navArrowUp, fontSize:"1.5em"}}/>
            </div>
            <Image
            src={"/logo/Artes-Vidros-nBg.png"}
            alt="Logo Artes Vidros W.R.R"
            width={100}
            height={100}
            />
        </div>
       
        <nav>
            <ul className={`${navControl} flex-col gap-6 items-center`}>
                <li className="active:text-color-logo transition-colors duration-300 active:underline underline-offset-1 after:border-b-2 after:my-2 after:w-2/4 after:block after:border-color-primary after:mx-auto">
                    <Link href={"/#inicio"}>
                        Início
                    </Link>
                </li>
                <li className="active:text-color-logo transition-colors duration-300 active:underline underline-offset-1 after:border-b-2 after:my-2 after:w-2/4 after:block after:border-color-secundary after:mx-auto">
                    <Link href={"/servicos"}>
                        Serviços
                    </Link>
                </li>
                <li className="active:text-color-logo transition-colors duration-300 active:underline underline-offset-1 after:border-b-2 after:my-2 after:w-2/4 after:block after:border-color-primary after:mx-auto">
                    <Link href={"/#sobre"}>
                        Sobre Nós
                    </Link>
                </li>
                <li className="active:text-color-logo transition-colors duration-300 active:underline underline-offset-1 after:border-b-2 after:my-2 after:w-2/4 after:block after:border-color-secundary after:mx-auto">
                    <Link href={"/#contato"}>
                        Fale Conosco
                    </Link>
                </li>
                <li>
                    <div> 
                        <Link 
                        href={'https://www.instagram.com/artesvidroswrr/'} 
                        target="blank"
                        >
                            <FaInstagram style={{ color: 'white' , fontSize: '30px' , background:'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)' , borderRadius: '30%' , padding: '2px' }}/>
                        </Link>
                     </div>
                </li>
            </ul>
        </nav>
        
    </section>
  )
}

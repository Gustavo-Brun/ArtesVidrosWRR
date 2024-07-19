'use client'

import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const NavBarMobile = () => {

    useEffect(() => {
        const handleScroll = () => {
            // Lógica para estilos durante o scroll
            const scrollY = window.scrollY;
            const navBar = document.getElementById("navBarMobile");

            if (navBar) {
                switch (true) {

                    case scrollY === 0:
                        navBar.style.position = "absolute";
                        navBar.style.right = "35%";
                        navBar.style.top = "20px";
                        navBar.style.color = "black";
                        break;

                    case scrollY > 100:
                        navBar.style.position = "fixed";
                        navBar.style.right = "8px";
                        navBar.style.top = "8px";

                        if (scrollY < 800) {
                            navBar.style.color = "black"
                        } else if (scrollY > 700 && scrollY < 1200) {
                            navBar.style.color = "white";
                        } else if (scrollY > 1200 && scrollY < 5600) {
                            navBar.style.color = "black";
                        } else if (scrollY > 5600 && scrollY < 7000) {
                            navBar.style.color = "white";
                        } else if (scrollY > 7000)
                            navBar.style.color = "black";
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
            id="navBarMobile"
            onClick={setNav}
            className="md:hidden flex-col items-center z-50 absolute right-[35%] top-5  w-fit py-2 backdrop-blur-sm bg-color-header-footer rounded-3xl shadow-md text-black text-xl font-mono font-bold hover:cursor-pointer">
            <div className="flex items-center">
                <div className="ml-2 animate-pulse ">
                    <IoIosArrowDown style={{ display: navArrowDown, fontSize: "1.5em" }} />
                    <IoIosArrowUp style={{ display: navArrowUp, fontSize: "1.5em" }} />
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
                                href={'/login'}
                                className="my-5 bg-gradient-to-r from-color-primary  to-color-secundary hover:from-color-secundary  hover:to-color-primary text-black font-bold py-2 px-6 rounded-full shadow-md transition-transform duration-1000 ease-in-out transform hover:scale-110 active:text-red-600">
                                Entrar
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

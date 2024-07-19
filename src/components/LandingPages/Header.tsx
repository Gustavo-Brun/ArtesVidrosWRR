import Image from "next/image"
import Link from "next/link"

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Header = () => {
    return (
        <header id="inicio" className="flex min-h-screen h-fit px-4 py-4 pt-32 lg:py-4 lg:pt-10 lg:pl-20">
            <section className=" text-white text-center lg:text-start h-fit xl:w-2/5 flex flex-col gap-10 font-font-heebo z-10">
                <h1 className="tracking-widest">Vidraçaria Profissional no Jardim Selma - Zona Sul de São Paulo</h1>
                <div>
                    <h2 className="lg:text-6xl text-3xl mb-4">Vidraçaria Artes Vidros W.R.R</h2>
                    <p>TRANSFORME SEU ESPAÇO COM OS MELHORES SERVIÇOS DE VIDRAÇARIA!</p>
                </div>
                <div
                    className="before:border-t-2 before:block before:mb-10 before:border-gray-500"
                >
                    <div className="flex text-center items-center space-x-6">
                        <div className="flex flex-col gap-4">
                            <Link
                                target="_blank"
                                href={'https://wa.me/5511980977240/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito.'}
                                className="ml-6 animate-pulse active:text-color-gray"
                            >
                                <FaWhatsapp
                                    style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)', borderRadius: '50%', fontSize: '50px', padding: '2px' }}
                                />
                            </Link>
                            <Link
                                href={'https://www.instagram.com/artesvidroswrr/'}
                                target="blank"
                                className="ml-6 animate-pulse active:text-color-gray">
                                <FaInstagram
                                    style={{ color: 'white', fontSize: '50px', background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)', borderRadius: '30%', padding: '2px' }}
                                />

                            </Link>
                        </div>

                        <Link
                            href="tel:+5511980977240"
                            className="space-y-2 active:text-green-600"
                        >
                            <p className="text-lg my-2">
                                Agende seu Orçamento Gratuito:
                            </p>
                            <p className="text-2xl lg:text-4xl">
                                (11) 98097-7240
                            </p>
                            <p className="text-2xl lg:text-4xl">
                                (11) 97835-1205
                            </p>
                        </Link>
                    </div>

                </div>
            </section>
            <Image
                src={'/img/header-img.png'}
                alt="Header Image"
                fill
                style={{ objectFit: 'cover' }}
                className="mix-blend-overlay"
            />
        </header>
    )
}

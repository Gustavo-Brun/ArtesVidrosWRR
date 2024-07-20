import { servicesData } from "@/data/servicesData"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

export const Footer = () => {
    return (

        <footer className="hidden lg:grid grid-cols-3 w-[90%] mx-auto items-center p-2 bg-color-header-footer rounded-3xl shadow-md font-mono font-semibold text-white">

            <section className="ml-10 w-fit">
                <Link href="tel:+5511980977240" className="space-y-2 active:text-green-600">
                    <p>+55 11 98097-7240</p>
                </Link>
                <Link href={'mailto:artesvidroswrr@gmail.com'} className=" active:text-green-600">
                    <p className="my-2">artesvidroswrr@gmail.com</p>
                </Link>
                <div>
                    <p className="mb-2">NOS SIGA NAS REDES SOCIAIS</p>
                    <Link
                        target="blank"
                        href={'https://www.instagram.com/artesvidroswrr/'}
                        aria-label="Instagram da Vidraçaria Artes Vidros W.R.R"
                    >
                        <FaInstagram style={{ color: 'white', fontSize: '30px', background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)', borderRadius: '30%', padding: '2px' }} />
                    </Link>
                </div>
            </section>

            <section className="grid grid-cols-3 space-y-2 items-center text-center p-2 rounded-xl shadow-2xl bg-slate-200  text-black">
                {servicesData.map(({ title, url }, index) => {

                    return (
                        <Link className="hover:scale-105 active:scale-90 active:text-red-600" key={index} href={`/servicos/${url}`}>
                            {title}
                        </Link>
                    )

                })}
            </section>
            <section className="">
                <p className="flex justify-center my-2">&copy; 2024 Artes Vidros W.R.R. </p>
                <p className="flex justify-center my-2">Todos os direitos reservados.</p>
            </section>

        </footer>
    )

}
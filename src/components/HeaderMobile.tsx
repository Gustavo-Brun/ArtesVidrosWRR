import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";


export const HeaderMobile = () => {
  return (
    <header id="inicio" className="md:hidden flex bg-[url('/img/header-img-mobile.jpeg')] bg-bottom bg-cover bg-no-repeat -mt-4 h-screen pt-40">
    
        <div className="bg-gray-600 h-headerMobile-height-calc w-full absolute top-0 left-0 mix-blend-overlay"></div>

        <div className="text-white text-center space-y-8 font-font-heebo z-10 place-content-between flex flex-col">
            <h2 className="tracking-widest ">TRANSFORME SEU ESPAÇO COM OS MELHORES SERVIÇOS DE VIDRAÇARIA!</h2>
            <div>
                <h1 className="text-6xl mb-4">Vidraçaria Artes Vidros W.R.R</h1>
                <p>Vidraçaria Profissional no Jardim Selma - Zona Sul de São Paulo</p>
            </div>
            <div 
            className="before:border-t-2 before:block before:mb-10 before:mx-10 before:border-gray-500"
            >
                <div className="flex text-center items-center justify-between px-2 pb-8">
                    <Link
                    target="_blank" 
                    href={'https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito.'}
                    className="ml-6 animate-pulse active:text-color-gray"
                    >
                        <FaWhatsapp
                        style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)' , borderRadius: '50%', fontSize: '90px' , padding: '10px' }}
                        />
                    </Link>

                    <Link 
                    href="tel:+5511980977240"
                    className="space-y-2 active:text-green-600 "
                    >
                        <p className="text-lg my-2">
                            Agende seu Orçamento Gratuito:
                        </p>
                        <p className="sm:text-4xl text-2xl">
                            (11) 97427-6250
                        </p>
                        <p className="sm:text-4xl text-2xl">
                            (11) 98097-7240
                        </p>
                    </Link>
                </div>
                
            </div>
        </div>
    </header>
  )
}

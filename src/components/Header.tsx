import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";


export const Header = () => {
  return (
    <header id="inicio" className="md:flex hidden h-screen bg-gray-600 pt-14 pl-20">
        <Image 
            src={'/img/header-img.png'} 
            alt="Header Image" 
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
        />
        
        <div className=" text-white h-fit xl:w-2/5 grid grid-cols-1 gap-10 font-font-heebo z-10 ">
            <h2 className="tracking-widest">TRANSFORME SEU ESPAÇO COM OS MELHORES SERVIÇOS DE VIDRAÇARIA!</h2>
            <div>
                <h1 className="text-6xl mb-4">Vidraçaria Artes Vidros W.R.R</h1>
                <p>Vidraçaria Profissional no Jardim Selma - Zona Sul de São Paulo</p>
            </div>
            <div 
            className="before:border-t-2 before:block before:mb-10 before:border-gray-500"
            >
                <div className="flex text-center items-center space-x-6 ">
                    <Link
                    target="_blank" 
                    href={'https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito.'}
                    className="ml-6 animate-pulse active:text-color-gray"
                    >
                        <FaWhatsapp
                        style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)' , borderRadius: '50%', fontSize: '70px' , padding: '10px' }}
                        />
                    </Link>

                    <Link 
                    href="tel:+5511980977240"
                    className="space-y-2 active:text-green-600"
                    >
                        <p className="text-lg my-2">
                            Agende seu Orçamento Gratuito: 
                        </p>
                        <p className="text-4xl">
                            (11) 97427-6250
                        </p>
                        <p className="text-4xl">
                            (11) 98097-7240
                        </p>
                    </Link>
                </div>
                
            </div>
        </div>
    </header>
  )
}

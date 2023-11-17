import Image from "next/image"
import Link from "next/link"


export const Header = () => {
  return (
    <header className="h-screen bg-gray-600">
        <Image 
            src={'/img/header-img.png'} 
            alt="Header Image" 
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
        />
        
        <div className="border-8 border-white text-white">
            <h2>TRANSFORME SEU ESPAÇO COM OS MELHORES SERVIÇOS DE VIDRAÇARIA!</h2>
            <h1>Vidraçaria Artes Vidros W.R.R</h1>
            <h2>Vidraçaria Profissional no Jardim Selma U+002d Zona Sul de São Paulo</h2>
            <Link 
            target="_blank" 
            href={'https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito.'}
            >
                {/* whatsapp icon */}
                <p>
                    Agende seu Orçamento Gratuito:
                </p>
                <p>
                    (11) 97427-6250
                </p>
            </Link>
        </div>
    </header>
  )
}

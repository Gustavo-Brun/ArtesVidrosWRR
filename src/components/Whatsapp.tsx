'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa"

export const Whatsapp = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Define um timeout para mudar o estado após 2000 milissegundos (2 segundos)
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
  
      // Limpa o timeout se o componente for desmontado antes de o timeout ser atingido
      return () => clearTimeout(timeoutId);
    }, []); // O array vazio garante que este efeito seja executado apenas uma vez, equivalente a componentDidMount

  return (
    <div className="fixed bottom-14 right-14 text-white animate-bounce">
        {isVisible &&
        
        <Link 
            target="_blank" 
            href={'https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Gostaria+de+Solicitar+um+Or%C3%A7amento+Gratuito.'}
            className="hover:text-color-gray"
            >
                <div className="flex text-center items-center">
                    <FaWhatsapp 
                    style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)' , borderRadius: '50%', fontSize: '100px' , padding: '10px' }} 
                    />
                </div>
                
            </Link>
            
        }
        
    </div>
  )
}

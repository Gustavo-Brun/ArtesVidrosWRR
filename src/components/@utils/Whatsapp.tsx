'use client'

import Link from "next/link"

import { useEffect, useState } from "react";

import { sendGAEvent } from '@next/third-parties/google'

import { FaWhatsapp } from "react-icons/fa"

export const Whatsapp = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
    onClick={() => sendGAEvent({ event: 'Global WhatsApp Button Clicked', value: 'xyz' })}
    className="fixed bottom-2 right-4 md:bottom-14 md:right-14 text-white animate-bounce">
      
      {isVisible &&

        <Link
          target="_blank"
          href={'https://wa.me/5511978351205/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Gostaria+de+Solicitar+um+Or%C3%A7amento+Gratuito.'}
          aria-label="WhatsApp da Vidraçaria Artes Vidros W.R.R"
          className="active:text-color-gray md:hover:text-color-gray"
        >
          <div className="flex text-center items-center">
            <FaWhatsapp
              style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)', borderRadius: '50%', fontSize: '100px', padding: '10px' }}
            />
          </div>

        </Link>

      }

    </div>
  )
}
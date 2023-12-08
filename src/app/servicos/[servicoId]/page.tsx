'use client'

import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import { useState } from "react";
import { FaArrowCircleLeft , FaArrowCircleRight } from "react-icons/fa";

export default function HomeServicoId({ params }: { params: { servicoId: string } }) {

    const servico = servicesData.find((s) => s.url === params.servicoId);

    if (!servico) {
        return (
        <div className={"text-3xl font-medium mx-auto text-center mt-20 p-6 border-2 border-black rounded-xl shadow-2xl bg-white w-2/4"}>
            Serviço não encontrado
        </div>
        )
      }

    const [ imageIndex, setImageIndex ] = useState(0)

    const nextImage = () => {
        
        if (imageIndex < servico.photos.length -1) {        
            setImageIndex(imageIndex+1)
        } 
    }

    const prevImage = () => {
        
        if (imageIndex > 0 ) {
            setImageIndex(imageIndex-1)
        } else {
            setImageIndex(0)
        }
    }
    
    return (
        
        <main className= {"grid grid-cols-1 gap-2 mx-auto my-3 p-6 border-2 border-black rounded-xl shadow-2xl bg-white w-2/4"}>
            
            <h2 className="my-2 text-4xl font-bold text-center"> {servico.title} </h2>

            <div className="relative">
                <FaArrowCircleLeft onClick={prevImage} 
                    style={{ 
                        position: "absolute", 
                        left: 80, 
                        top: "50%", 
                        transform: "translateY(-50%)", 
                        cursor: "pointer", 
                        fontSize: '2em'
                        }}
                    />

                <img className="w-28 mx-auto my-5"
                src= {servico.photos[imageIndex]}
                alt= {`Carrosel de Imagens de ${servico.title}.`} />

                <FaArrowCircleRight onClick={nextImage} 
                    style={{ 
                        position: "absolute", 
                        right: 80, 
                        top: "50%", 
                        transform: "translateY(-50%)", 
                        cursor: "pointer", 
                        fontSize: '2em',        
                        }}
                    />
            </div>

            <p className="my-5 text-xl text-center"> {servico.text} </p>
            
            <Link 
            target="_blank" 
            href={`https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito+de+${servico.title}.`} 
            className='flex mx-auto my-3 text-2xl rounded-3xl shadow-md text-white p-3 border-2 bg-black font-mono font-bold'>Solicitar Orçamento</Link>

        </main> 

    )
}
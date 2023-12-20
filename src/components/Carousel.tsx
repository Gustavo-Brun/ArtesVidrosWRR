'use client'

import { carouselData } from "@/data/carouselData"
import Link from "next/link"
import { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import { Sash } from "./Sash"

export const Carousel = () => {

    const [ imageIndex, setImageIndex ] = useState(0)

    const nextImage = () => {
        
        if (imageIndex < carouselData.length -1) {        
            setImageIndex(imageIndex+1)
        } else {
            setImageIndex(0)
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
        
        <section className= "my-3 p-6 py-10 shadow-2xl bg-white -mt-24 ">
            
            <div className="mt-4 mb-14">
                <Sash text="Conheça nosso Trabalho"/>
            </div>

            <div className="relative">
                <FaArrowCircleLeft onClick={prevImage} 
                    style={{ 
                        position: "absolute", 
                        left: 300, 
                        top: "50%", 
                        transform: "translateY(-50%)", 
                        cursor: "pointer", 
                        fontSize: '2em'
                        }}
                    />

                <img className="h-[500px] mx-auto my-5 rounded "
                    src= {carouselData[imageIndex]}
                    alt= {`Imagem número ${imageIndex +1} do Carrosel de Imagens.`} />

                <FaArrowCircleRight onClick={nextImage} 
                    style={{ 
                        position: "absolute", 
                        right: 300, 
                        top: "50%", 
                        transform: "translateY(-50%)", 
                        cursor: "pointer", 
                        fontSize: '2em',        
                        }}
                    />
            </div>

            <Link 
            target="_blank" 
            href={"/servicos"} 
            className='flex w-fit mx-auto mt-10 text-2xl shadow-md text-white p-3  bg-black font-mono font-bold transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-red-600'>Ver mais</Link>
            
             </section> 

)
}
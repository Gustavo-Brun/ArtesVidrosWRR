'use client'

import { carouselData } from "@/data/carouselData"
import Link from "next/link"
import { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

export const Carousel = () => {

    const [ imageIndex, setImageIndex ] = useState(0)

    const nextImage = () => {
        
        if (imageIndex < carouselData.length -1) {        
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
        
        <section className= {"my-3 p-6 shadow-2xl bg-white -mt-24"}>
        

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

                    <p>{carouselData[imageIndex]}</p>
                <img className="w-28 mx-auto my-5"
                    src= {carouselData[imageIndex]}
                    alt= {`Imagem número ${imageIndex +1} do Carrosel de Imagens.`} />

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

            <Link 
            target="_blank" 
            href={"/servicos"} 
            className='flex w-fit mx-auto text-2xl rounded-3xl shadow-md text-white p-3  bg-black font-mono font-bold'>Ver mais</Link>
            
             </section> 

)
}
'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export function Section1() {
     

    const NumberAnimation = (finalNumber:number, time:number) => {
    
        const [number, setNumber] = useState(0);
      
        useEffect(() => {
            
          const interval = setInterval(() => {
            
            setNumber((prevNumber) => {
                const nextNumber = prevNumber + 1;
        
                if (nextNumber <= finalNumber) {
                  return nextNumber;
                } else {
                  clearInterval(interval);
                  return prevNumber;
                }
              });
            }, time);
      
          
          return () => clearInterval(interval);
        }, []);
      
        return <span>{number}</span>;
      };

  return (
    <section className="flex h-3/4 mb-10 -mt-24 items-center px-20  bg-white ">

        <div className='w-1/2 grid gap-12 mr-16 justify-items-start '>
            <h2 className="font-bold text-5xl">
                Descubra a Excelência em Serviços de Vidraçaria
            </h2>
            <p className='text-lg'> 
                Nossa equipe altamente qualificada e materiais de alta qualidade garantem resultados impecáveis para suas necessidades. Entre em contato conosco agora mesmo e descubra como podemos atender suas expectativas com excelência.
            </p>
            <Link  
            target='blank'
            href={'https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito.'}
            className='text-xl shadow-md text-white p-3 border-2 bg-black font-mono font-bold transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-red-600'>
                FALE CONOSCO
            </Link>
        </div>

        <div className='bg-color-section1 text-white h-full w-3/5 py-40 grid gap-12 justify-items-center items-center text-xl'>
            <p className="font-bold text-lg">
                DEIXE OS NÚMEROS FALAREM
            </p>
            <div className='flex'>
                <div className='mr-14 text-center'>
                    <span className='text-7xl font-bold'>{NumberAnimation(26, 100)}+</span>
                    <p>Anos de Experiência</p>
                </div>
                <div className='text-center'>
                    <p className='text-7xl font-bold'>Diversos </p>
                    <p>Projetos Concluídos</p>
                </div>
            </div>
            <div className='text-center'>
                <span className='text-7xl font-bold'>{NumberAnimation(100, 50)}%</span>
                <p>Clientes Satisfeitos</p>
            </div>
        </div>


    </section>
  )
}

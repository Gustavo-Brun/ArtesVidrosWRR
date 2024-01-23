'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Spacer } from './Spacer';

export function Section1Mobile() {
     

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
    <section className="lg:hidden md:-mt-24 flex flex-col mb-10 p-8 items-center bg-white ">

        <div className='flex flex-col space-y-12 mb-10 '>
            <h2 className="font-bold text-3xl">
                Descubra a Excelência em Serviços de Vidraçaria
            </h2>
            <p className='text-lg'> 
                Nossa equipe altamente qualificada e materiais de alta qualidade garantem resultados impecáveis para suas necessidades. Entre em contato conosco agora mesmo e descubra como podemos atender suas expectativas com excelência.
            </p>
            <Link  
            target='blank'
            href={'https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito.'}
            className='text-xl shadow-md text-white w-fit p-3 border-2 bg-black font-mono font-bold transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-red-600'>
                FALE CONOSCO
            </Link>
        </div>

        <div className='bg-color-section1 text-white h-full p-10 w-[90vw] grid gap-12 justify-items-center items-center '>
            <p className="font-bold ">
                DEIXE OS NÚMEROS FALAREM
            </p>
            <div className='flex'>
                <div className='mr-14 text-center'>
                    <span className='sm:text-5xl text-3xl font-bold'>{NumberAnimation(26, 100)}+</span>
                    <p>Anos de Experiência</p>
                </div>
                <div className='text-center'>
                    <p className='sm:text-5xl text-3xl font-bold'>Diversos </p>
                    <p>Projetos Concluídos</p>
                </div>
            </div>
            <div className='text-center'>
                <span className='sm:text-5xl text-3xl font-bold'>{NumberAnimation(100, 50)}%</span>
                <p>Clientes Satisfeitos</p>
            </div>
        </div>

        <Spacer style={'bg-[url(/img/divider.png)] bg-center bg-contain bg-no-repeat h-20 w-full -mb-8'}/>

    </section>
  )
}

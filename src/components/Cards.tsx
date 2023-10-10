import Link from "next/link";
import { servicesData } from "@/data/servicesData";

export const Cards = () => {

//Componente Principal - Rodando map e Rendenizando Cards 
  return (
    <section className="m-auto w-9/12 grid grid-cols-3 ">
        {servicesData.map(({ image, title, url }, index) =>  {

        const borderColor = index % 2 === 0 ? 'border-color-primary' : 'border-color-secundary';
        
        return (

            <Link  key= {url} href={url}  className= {` grid justify-items-center m-5 my-10 p-5 border-b-4 ${borderColor} rounded-xl shadow-2xl bg-white	 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110`} >
                
                <div className="my-2"> 
                    <img className="w-28 "
                    src= {image} 
                    alt= {`ícone do item ${title}.`} />
                </div>
        
                <h3 className="my-2 text-2xl font-bold"> {title} </h3>
        
                <p className="my-1 mt-3  text-lg   hover:text-gray-600 transition-colors duration-300">Mais detalhes</p>
            
            </Link>
        
            )})} 
    </section>
  )
};
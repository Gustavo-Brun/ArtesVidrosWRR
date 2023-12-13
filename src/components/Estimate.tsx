'use client'

import { servicesData } from "@/data/servicesData"
import { useState } from "react"

export const Estimate = () => {
    
    const [ valor, setValor ] = useState(0)

    const calc = () => {

        const serviceInput = document.getElementById('service') as HTMLSelectElement 
        const service = serviceInput.value

        const alturaInput = document.getElementById('altura') as HTMLInputElement 
        const altura = Number(alturaInput.value)
        const comprimentoInput = document.getElementById('comprimento') as HTMLInputElement 
        const comprimento = Number(comprimentoInput.value)

        switch(service){
            case "Vidros Comuns":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;
            
            case "Vidros Temperados":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 500).toString())
                })
                break;

            case "Vidros Jateados":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Vidros Laminados":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Vidros Serigrafados":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Gabinetes":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Box":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Espelhos":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Sacadas":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Janelas":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;

            case "Corrimão":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;
                
            case "Cobertura de Área":
                setValor(altura * comprimento);  
                setValor((prevValue) => { 
                    return parseInt((prevValue * 0).toString())
                })
                break;    
        }
    }



  return (
    
    <section 
    className="flex" >

        <section 
        className= {"text-xl flex w-1/3 mx-auto my-10 p-6 border-2 border-black rounded-xl shadow-2xl bg-white "}>
            <aside 
            className="w-1/2">
                <div 
                className="flex flex-col ">
                    <label htmlFor="service">Serviço/Produto</label>
                    <select id="service" name="service">
                        {servicesData.map( ( { title } ) => {
                            return (
                                <option value= {title} > {title} </option>
                            )
                        } )}
                    </select>
                </div>
                <div 
                className="flex flex-col my-10">
                    <label htmlFor="altura">Altura</label>
                    <input 
                    className="p-1" type="number" name="altura" id="altura" placeholder="0"/>
                    <label htmlFor="comprimento">Comprimento</label>
                    <input 
                    className="p-1" type="number" name="comprimento" id="comprimento" placeholder="0"/>
                </div>
                <button
                    className='flex mx-auto rounded-xl shadow-md text-white p-3 border-2 bg-black  font-bold'
                    onClick={calc}
                >
                    Calcular
                </button>
            </aside>
            <aside 
            className="w-1/2 text-center my-auto ">
                <span 
                    className="text-3xl font-bold"
                > 
                    R$ {valor} 
                </span>
            </aside>
        </section>

        <section 
        className= {"text-xl flex mx-auto my-10 p-6 border-2 border-black rounded-xl shadow-2xl bg-white"}>
            
            <div >
                
                <h1 className="font-bold mb-5 text-center">
                    Tabela de Valores - m²  
                </h1>

                <div className=" grid grid-cols-2 gap-6 ">
                    <p>Vidros Comuns - R$ 00,00 </p>
                    <p>Vidros Temperados - R$ 00,00 </p>
                    <p>Vidros Jateados - R$ 00,00 </p>
                    <p>Vidros Laminados - R$ 00,00 </p>
                    <p>Vidros Serigrafados - R$ 00,00 </p>
                    <p>Gabinetes - R$ 00,00 </p>
                    <p>Box - R$ 00,00 </p>
                    <p>Espelhos - R$ 00,00 </p>
                    <p>Sacadas - R$ 00,00 </p>
                    <p>Janelas - R$ 00,00 </p>
                    <p>Corrimão - R$ 00,00 </p>
                    <p>Cobertura de Área - R$ 00,00 </p>
                </div>

            </div>

        </section>

    </section>
  )
}

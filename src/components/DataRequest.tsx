'use client'

import { ChangeEvent, useState } from "react"

export const DataRequest = () => {
 
    interface UserDataProps {
        data: string;
        cliente: string;
        contato: number | string;
        serviço: string[]; 
        valor: string[];
        total: number;
      }

    const [ userData, setUserData ] = useState<UserDataProps>({
        data: new Date().toLocaleDateString('pt-BR'), 
        cliente: ' ',
        contato: ' ', 
        serviço: [], 
        valor: [],
        total: 0,
    })

    const userDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target
        setUserData((prevData) => ({
            ...prevData,
            [name] : value

        }))
    }

    const addService = () => {
        const serviçoInput = document.getElementById('serviçoInput') as HTMLInputElement;
        const novoServiço = serviçoInput.value;

        const valorInput = document.getElementById('valorInput') as HTMLInputElement
        const valorServiço = valorInput.value;
    
        if (novoServiço.trim() !== '' && (valorServiço.trim() !== '')) {
          setUserData((prevData) => ({
            ...prevData,
            serviço: [...prevData.serviço, novoServiço],
            valor: [...prevData.valor, valorServiço], /* preciso ver pq isso aqui tá retornando diferente no log 
            depois tenta botar esses dois itens em um objeto só*/
          }));
    
          serviçoInput.value = '';
          valorInput.value = '';
        } else{
            window.alert('Os campos: Serviço/Produto e Valor devem ser preenchidos.')
        }
      };
 
    return (
        <section>
            <div className= {`grid grid-cols-1 gap-2 mx-auto my-14 p-5 border-2 border-black rounded-xl shadow-2xl bg-white w-2/4 `}>
                
                <label htmlFor="clienteInput">Cliente</label>
                <input type="text" id="clienteInput" placeholder="Insira o nome do cliente." name="cliente" onChange={userDataHandler}/>

                <label htmlFor="contatoInput">Contato</label>
                <input type="text" id="contatoInput" placeholder="Telefone/Email." name="contato" onChange={userDataHandler}/>

                <label htmlFor="serviçoInput">Serviço/Produto</label>
                <input type="text" id="serviçoInput" placeholder="Ex: Vidro comum." name="serviço" />

                <label htmlFor="valorInput">Valor</label>
                <input type="text" id="valorInput" placeholder="R$00,00." name="valor" onChange={userDataHandler}/>
                <button onClick={addService}>Adicionar Serviço/Produto</button>
            
                <button onClick={() => console.log(userData)}>Gerar Orçamento em PDF</button>
            </div>
        </section>
      );
    
}
'use client'
import { Pdf } from './GeneratePDF';
import { ChangeEvent, useState, useRef } from "react"

export const DataRequest = () => {

  interface UserDataProps {

    cliente: string;
    endereço?: string;
    contato: number | string;
    serviços: { serviço: string; valor: number }[];
    total: number;
    observações: string;
  }

  const [userData, setUserData] = useState<UserDataProps>({
    cliente: ' ',
    endereço: ' ',
    contato: ' ',
    serviços: [],
    total: 0,
    observações: ' ',
  })

  const userDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value

    }))
  }

  const addService = () => {
    const serviçoInput = document.getElementById('serviçoInput') as HTMLInputElement;
    const novoServiço = serviçoInput.value;

    const valorInput = document.getElementById('valorInput') as HTMLInputElement
    const valorServiço = parseFloat(valorInput.value);

    if (novoServiço.trim() !== '' && valorServiço !== 0) {
      setUserData((prevData) => {
        const novoTotal = prevData.total + (valorServiço);

        return {
          ...prevData,
          serviços: [...prevData.serviços, { serviço: novoServiço, valor: valorServiço }],
          total: novoTotal,
        };
      });

      serviçoInput.value = '';
      valorInput.value = '';
    } else {
      window.alert('Os campos: Serviço/Produto e Valor devem ser preenchidos.')
    }
  };

  const contentRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    const content = contentRef.current;

    if (content) {
      const html2pdf = (await import('html2pdf.js')).default;
      const options = {
        filename: `Pedido ${userData.cliente}.pdf`,
      };

      html2pdf(content, options);
    }
  };

  return (
    <section>
      <div className={`grid grid-cols-1 gap-2 md:mx-auto mx-2 md:my-14 p-5 border-2 border-black rounded-xl shadow-2xl bg-white md:w-2/4 mt-10 text-xl `}>

        <label htmlFor="clienteInput">Cliente</label>
        <input type="text" id="clienteInput" placeholder="Insira o nome do cliente." name="cliente" onChange={userDataHandler} />

        <label htmlFor="endereçoInput">Endereço (Opcional)</label>
        <input type="text" id="endereçoInput" placeholder="Insira o nome do cliente." name="endereço" onChange={userDataHandler} />

        <label htmlFor="cnpjInput">CPF/CNPJ (Opcional)</label>
        <input type="text" id="cnpjInput" placeholder="Insira o nome do cliente." name="cnpj" onChange={userDataHandler} />

        <label htmlFor="contatoInput">Contato</label>
        <input type="tel" id="contatoInput" placeholder="Telefone." name="contato" onChange={userDataHandler} />

        <label htmlFor="serviçoInput">Serviço/Produto</label>
        <input type="text" id="serviçoInput" placeholder="Ex: Vidro comum." name="serviço" />

        <label htmlFor="valorInput">Valor</label>
        <input type="number" id="valorInput" placeholder="R$00,00." name="valor" onChange={userDataHandler} />
        <button className='flex mx-auto mb-10  rounded-3xl shadow-md text-white p-3 border-2 bg-black  font-bold' onClick={addService}>Adicionar Serviço/Produto</button>

        <label htmlFor="observaçõesInput">Observações</label>
        <input type="text" id="observaçõesInput" placeholder="Insira observações caso necessário." name="observações" onChange={userDataHandler} />

      </div>

      <div className="md:mx-auto mx-2 my-14 border-2 border-black rounded-xl shadow-2xl bg-white md:w-4/5 ">
        <Pdf userData={userData} generatePDF={generatePDF} contentRef={contentRef} />
      </div>

    </section>
  );

}
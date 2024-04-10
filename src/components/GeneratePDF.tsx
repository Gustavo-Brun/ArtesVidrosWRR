'use client'

import React from 'react';

interface PdfProps {
  userData: {
    cliente: string;
    contato: number | string;
    serviços: { serviço: string; valor: number }[];
    total: number;
    observações: string;
  };
  generatePDF: () => void;
  contentRef: React.RefObject<HTMLDivElement>;
}

export const Pdf: React.FC<PdfProps> = ({ userData, generatePDF, contentRef }) => {

  const primeiroNome = (nome: string) => {
    return (nome.split(" ")[0] || null);
  }


  return (
    <section>

      <section ref={contentRef} className='relative m-10 text-base'>

        <div className="absolute opacity-30 bg-contain bg-no-repeat bg-center h-full w-full -z-10" style={{ backgroundImage: 'url("/logo/Artes-Vidros-nBg.png")' }}></div>

        <section className='my-8'>
          <h1 className='text-6xl font-bold mb-4'>Pedido - {primeiroNome(userData.cliente)}</h1>
          <p className='text-lg text italic'>Emissão: <span>{new Date().toLocaleDateString('pt-BR')}</span></p>
        </section>

        <section className='grid grid-cols-2 gap-6 my-5'>
          <div className='after:border-t-2 after:block after:mt-6 after:border-gray-500 after:w-45vw'>
            <h2 className='text-xl font-medium mb-4'>Empresa</h2>
            <p>Vidraçaria Artes Vidros W.R.R</p>
            <p>Rua Alice dos Santos Peixe, nº 131 - Jardim Selma, São Paulo - SP, 04431-140 </p>
            <p>41.648.910/0001-62</p>
          </div>

          <div>
            <h2 className='text-xl font-medium mb-4'>Contato</h2>
            <p>(11) 98097-7240</p>
            <p>artesvidroswrr@gmail.com</p>
          </div>

          <div className='after:border-t-2 after:block after:mt-6 after:border-gray-500 after:w-45vw'>
            <h2 className='text-xl font-medium mb-4'>Cliente</h2>
            <p>{userData.cliente}</p>
          </div>

          <div>
            <h2 className='text-xl font-medium mb-4'>Contato</h2>
            <p>{userData.contato}</p>
          </div>
        </section>

        <section>
          <table className='border border-collapse table-auto '>
            <thead>
              <tr>
                <th className='p-2 border border-black w-45vw'>Serviço/Produto</th>
                <th className='p-2 border border-black'>Valor</th>
              </tr>
            </thead>

            <tbody>
              {userData.serviços.map((serviço, index) => (
                <tr key={index}>
                  <td className='p-2 border border-black'>{serviço.serviço}</td>
                  <td className='p-2 border border-black'>R${serviço.valor},00</td>
                </tr>
              ))}
            </tbody>
          </table>

          <aside className='flex flex-col items-end m-4 font-medium'>
            <p>Total de Serviços/Produtos <span>{userData.serviços.length}</span></p>
            <p>Valor Total: R$<span>{userData.total}</span>,00 </p>
          </aside>
        </section>

        <section className='my-10'>
          <h2 className='text-xl font-medium mb-4'>Observações</h2>
          <span>{userData.observações}</span>
          <p className='mt-4'>Início do projeto mediante:</p>
          <br />
          <p>1 - Pagamento do Valor Integral;</p>
          <p>
            2 - Pagamento do valor de Sinal (50%). Pagamento do valor restante após a conclusão do
            serviço.
          </p>
        </section>

      </section>

      <br />

      <button className='flex mx-auto mb-10 text-2xl rounded-3xl shadow-md text-white p-3 border-2 bg-black font-mono font-bold' onClick={generatePDF}>Gerar Orçamento em PDF</button>
    </section>
  );
};

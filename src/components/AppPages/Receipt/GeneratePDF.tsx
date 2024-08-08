'use client'

import React from 'react';

import Image from 'next/image';

var extenso = require('extenso')

interface PdfProps {
    userData: {
        name: string
        cnpj?: string
        value: number
        regarding: string
    };
    generatePDF: () => void;
    contentRef: React.RefObject<HTMLDivElement>;
}

export const Pdf: React.FC<PdfProps> = ({ userData, generatePDF, contentRef }) => {

    let cnpj = userData.cnpj?.trim()
    const date = new Date();

    return (
        <section>

            <section ref={contentRef} className='relative flex flex-col gap-4 m-10 h-fit'>

                <div className="absolute opacity-30 bg-contain bg-no-repeat bg-center h-full w-full -z-10" style={{ backgroundImage: 'url("/logo/Artes-Vidros-nBg.png")' }}></div>

                <header className='my-8 w-full flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold'>Recibo de Pagamento</h1>
                        <p className='text-xl text italic'>Emissão: <span>{new Date().toLocaleDateString('pt-BR')}</span></p>
                    </div>
                    <div>
                        <h2 className='text-5xl font-bold underline'>Valor: R${userData.value},00</h2>
                    </div>
                </header>

                <div className='text-lg flex flex-col gap-2'>
                    <p> Recebemos de <span className='font-semibold'>{userData.name}</span>{cnpj !== null && cnpj !== undefined && cnpj.length >= 1 && <span className="font-semibold">, portador do CPF/CNPJ n° {cnpj},</span>} a importância de <span className="font-semibold">{extenso(userData.value, { mode: "currency" })}</span> referente a(o) <span className="font-semibold">{userData.regarding}</span>.</p>
                    <p>Para maior clareza, firmamos o presente recibo, que comprova o recebimento integral do valor mencionado, concedendo quitação plena, geral e irrevogável pela quantia recebida.</p>
                </div>


                <span className='text-xl text-end'>São Paulo, {date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>

                <div className="relative mt-4 mb-2 ml-auto w-[367px] h-[85px]">
                    <Image
                        src={'/img/signature.png'}
                        alt='Signature'
                        fill
                    />
                </div>


                <footer className='flex flex-col text-center text-sm'>
                    <p>Vidraçaria Artes Vidros W.R.R - CNPJ: 41.648.910/0001-62</p>
                    <p> Rua Alice dos Santos Peixe, n° 131 - Jardim Selma - São Paulo - São Paulo - CEP: 04431-140</p>
                    <p>www.artesvidroswrr.com.br / artesvidroswrr@gmail.com</p>
                    <p>(11) 98097-7240 / (11) 97835-1205</p>
                </footer>

            </section>

            <br />

            <button className='flex mx-auto mb-10 text-2xl rounded-3xl shadow-md text-white p-3 border-2 bg-black font-mono font-bold' onClick={generatePDF}>Gerar Recibo em PDF</button>
        </section>
    );
};

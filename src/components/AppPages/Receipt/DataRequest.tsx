'use client'

import { Pdf } from './GeneratePDF';
import { ChangeEvent, useState, useRef } from "react"

export const DataRequest = () => {

    interface UserDataProps {
        name: string
        cpf?: string
        value: number
        regarding: string
    }

    const [userData, setUserData] = useState<UserDataProps>({
        name: '',
        value: 0,
        regarding: ' ',
    })

    const userDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData((prevData) => ({
            ...prevData,
            [name]: value

        }))
    }

    const contentRef = useRef<HTMLDivElement>(null);

    const generatePDF = async () => {
        const content = contentRef.current;

        if (content) {
            const html2pdf = (await import('html2pdf.js')).default;
            const options = {
                filename: `Recibo - ${userData.name}.pdf`,
            };

            html2pdf(content, options);
        }
    };

    return (
        <section>
            <div className={`grid grid-cols-1 gap-2 md:mx-auto mx-2 md:my-14 p-5 border-2 border-black rounded-xl shadow-2xl bg-white md:w-2/4 mt-10 text-xl `}>

                <label htmlFor="clienteInput">Cliente</label>
                <input type="text" id="clienteInput" placeholder="Insira o nome do cliente." name="name" onChange={userDataHandler} />

                <label htmlFor="cnpjInput">CPF/CNPJ (Opcional)</label>
                <input type="text" id="cnpjInput" placeholder="Insira o nome do cliente." name="cnpj" onChange={userDataHandler} />

                <label htmlFor="valorInput">Valor</label>
                <input type="number" id="valorInput" placeholder="R$00,00." name="value" onChange={userDataHandler} />

                <label htmlFor="regardingInput">Referente a(o)</label>
                <input type="text" id="regardingInput" placeholder="Insira observações caso necessário." name="regarding" onChange={userDataHandler} />

            </div>

            <div className="md:mx-auto mx-2 my-14 border-2 border-black rounded-xl shadow-2xl bg-white md:w-4/5 ">
                <Pdf userData={userData} generatePDF={generatePDF} contentRef={contentRef} />
            </div>

        </section>
    );

}
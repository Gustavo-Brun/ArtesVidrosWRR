'use client'

import { useForm } from "react-hook-form"

export const Form = () => {

    interface FormProps {
        nome: string ;
        contato: string ;
        mensagem: string;
      }

    const { register , handleSubmit, formState: { errors } } = useForm<FormProps>()

    const onSubmit = async (data:FormProps) => {

        try {
            const response = await fetch('https://apiartesvidroswrr.onrender.com/clientes/cadastro', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                // Dados enviados com sucesso
                window.alert('Recebemos seu registro, logo entraremos em contato! :)')
            } else {
                // Lidar com erro na resposta do servidor
                window.alert('Ops! Houve um problema. Entre em contato através do nosso WhatsApp! Aguardamos seu contato.')
            }
        } catch (error) {
            // Lidar com erro na requisição
            window.alert('Ops! Houve um problema. Entre em contato através do nosso WhatsApp! Aguardamos seu contato.')
        }
    }

    return (
        <section className="flex items-center justify-center ">
            <div className="flex flex-col gap-4 w-full max-w-xs font-medium my-2 ">

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Nome</label>
                    <input {...register('nome', {required:true})} 
                    className={` border shadow-sm rounded h-10 p-3 font-normal ${errors?.nome ? 'border-red-600 ' : 'border-black'}`}
                     type="text" placeholder="Seu nome"/>
                    {errors?.nome?.type === 'required' && <p className="text-sm text-red-700">O nome é obrigatório.</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Contato</label>
                    <input {...register('contato', {required:true})}
                    className={`border shadow-sm rounded h-10 p-3 font-normal ${errors?.contato ? 'border-red-600 ' : 'border-black'}`}
                     type="text" placeholder="Seu E-mail ou Telefone"/>
                    {errors?.contato?.type === 'required' && <p className="text-sm text-red-700">O e-mail é obrigatório.</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="paragraph_text">Mensagem</label>
                    <textarea {...register('mensagem', {required:true})}
                    className={`border shadow-sm rounded p-3 font-normal ${errors?.mensagem ? 'border-red-600 ' : 'border-black'}`} id="paragraph_text"
                    rows={3}
                    placeholder="Sua mensagem aqui"></textarea>
                    {errors?.mensagem?.type === 'required' && <p className="text-sm text-red-700">Escreva uma mensagem!</p>}
                </div>

                <button onClick={() => handleSubmit(onSubmit)()} className="mx-auto my-4 rounded-2xl shadow-md text-white p-3 px-8 border-2 bg-black  font-bold active:text-red-600 active:scale-95">Enviar</button>
                
            </div>
        </section>
    )
}
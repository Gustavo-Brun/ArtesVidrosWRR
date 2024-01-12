'use client'

import { useForm } from "react-hook-form"

export const Form = () => {

    interface FormProps {
        name: string ;
        contato: string ;
        msg: string;
      }

    const { register , handleSubmit, formState: { errors } } = useForm<FormProps>()

    const onSubmit =  (data:FormProps) => {
        //Enviar para banco de dados
    }

    return (
        <section className="flex items-center justify-center ">
            <div className="flex flex-col gap-4 w-full max-w-xs font-medium my-2 ">

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Nome</label>
                    <input {...register('name', {required:true})} 
                    className={` border shadow-sm rounded h-10 p-3 font-normal ${errors?.name ? 'border-red-600 ' : 'border-black'}`}
                     type="text" placeholder="Seu nome"/>
                    {errors?.name?.type === 'required' && <p className="text-sm text-red-700">O nome é obrigatório.</p>}
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
                    <textarea {...register('msg', {required:true})}
                    className={`border shadow-sm rounded p-3 font-normal ${errors?.msg ? 'border-red-600 ' : 'border-black'}`} id="paragraph_text"
                    rows={3}
                    placeholder="Sua mensagem aqui"></textarea>
                    {errors?.msg?.type === 'required' && <p className="text-sm text-red-700">Escreva uma mensagem!</p>}
                </div>

                <button onClick={() => handleSubmit(onSubmit)()} className="mx-auto my-4 rounded-2xl shadow-md text-white p-3 px-8 border-2 bg-black  font-bold active:text-red-600 active:scale-95">Enviar</button>
                
            </div>
        </section>
    )
}
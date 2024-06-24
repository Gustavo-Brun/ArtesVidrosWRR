'use client'

import { useForm } from "react-hook-form"
import { Toaster, toast } from 'sonner'
import emailjs from '@emailjs/browser'

export const Form = () => {

    interface FormProps {
        name: string;
        contact: string;
        message: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

    const onSubmitFx = async (data: FormProps) => {

        const templateParams = {
            name: data.name,
            contact: data.contact,
            message: data.message,
        }

        try {
            emailjs
                .send('service_l2hcwno', 'template_xfv5t7c', templateParams, {
                    publicKey: 'zegVQAIj2NPMlrqEL',
                })
                .then(
                    () => {

                        toast.success('Recebemos sua mensagem, logo entraremos em contato! :)')
                    },
                    () => {

                        toast.error('Ops! Houve um problema. Entre em contato através do nosso WhatsApp! Aguardamos seu contato.')
                    },
                );
        }
        catch (error) {
            // Lidar com erro na requisição
            window.alert('Ops! Houve um problema. Entre em contato através do nosso WhatsApp! Aguardamos seu contato.')
        }
    }

    return (
        <section className="flex items-center justify-center ">
            <Toaster richColors />
            <form onSubmit={handleSubmit(onSubmitFx)} className="flex flex-col gap-4 w-full max-w-xs font-medium my-2 ">

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Nome</label>
                    <input {...register('name', { required: true })}
                        className={` border shadow-sm rounded h-10 p-3 font-normal ${errors?.name ? 'border-red-600 ' : 'border-black'}`}
                        type="text" placeholder="Seu nome" />
                    {errors?.name?.type === 'required' && <p className="text-sm text-red-700">O nome é obrigatório.</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Contato</label>
                    <input {...register('contact', { required: true })}
                        className={`border shadow-sm rounded h-10 p-3 font-normal ${errors?.contact ? 'border-red-600 ' : 'border-black'}`}
                        type="text" placeholder="Seu E-mail ou Telefone" />
                    {errors?.contact?.type === 'required' && <p className="text-sm text-red-700">Informe seu e-mail ou telefone.</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="paragraph_text">Mensagem</label>
                    <textarea {...register('message', { required: true })}
                        className={`border shadow-sm rounded p-3 font-normal ${errors?.message ? 'border-red-600 ' : 'border-black'}`} id="paragraph_text"
                        rows={3}
                        placeholder="Sua mensagem aqui"></textarea>
                    {errors?.message?.type === 'required' && <p className="text-sm text-red-700">Escreva uma mensagem!</p>}
                </div>

                <button type="submit" className="mx-auto my-4 rounded-2xl shadow-md text-white p-3 px-8 border-2 bg-black  font-bold active:text-red-600 active:scale-95">Enviar</button>

            </form>
        </section>
    )
}
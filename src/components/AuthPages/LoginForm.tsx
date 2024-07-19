'use client'

import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner";

import { onSubmitFx } from "@/functions/onSubmitFx";

export type FormProps = {
    password: string;
}

export const LoginForm = () => {


    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

    const onSubmit = async (data: FormProps) => {

        try {
            await onSubmitFx(data)
        } catch {
            toast.error('Senha incorreta, tente novamente.')
        }

    }

    return (
        <section className="p-10 rounded-xl shadow-2xl bg-white ">
            <Toaster richColors />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full max-w-xs font-medium my-2 ">

                <div className="flex flex-col gap-1">
                    <label htmlFor="paragraph_text">Senha</label>
                    <input {...register('password', { required: true })}
                        className={`border shadow-sm rounded h-10 p-3 font-normal ${errors?.password ? 'border-red-600 ' : 'border-black'}`}
                        type="password" />
                    {errors?.password?.type === 'required' && <p className="text-sm text-red-700">Insira a senha.</p>}
                </div>

                <button className="mx-auto lg:mt-10 mt-2 rounded-2xl shadow-md text-white p-3 px-8 border-2 bg-black  font-bold active:text-red-600 active:scale-95">Entrar</button>
            </form>

        </section>
    )
}

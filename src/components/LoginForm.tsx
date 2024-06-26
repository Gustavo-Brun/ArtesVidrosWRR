'use client'

import { useForm } from "react-hook-form"

import { onSubmitFx } from "@/functions/onSubmitFx";

export type FormProps = {
    name: string;
    password: string;
}

export const LoginForm = () => {


    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

    const onSubmit = async (data: FormProps) => {

        await onSubmitFx(data)

    }

    return (
        <section className="p-10 rounded-xl shadow-2xl bg-white ">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full max-w-xs font-medium my-2 ">

                <div className="flex flex-col gap-1">
                    <select
                        defaultValue={"default"}
                        {...register("name", { required: true, validate: (value) => value !== "default" })}
                        className={`border shadow-sm rounded h-22 p-3 font-normal ${errors?.name ? 'border-red-600 ' : 'border-black'}`}
                    >
                        <option value="default" disabled>
                            Quem está acessando?
                        </option>
                        <option value="carlos">Carlos</option>
                        <option value="gustavo">Gustavo</option>
                    </select>
                    {errors?.name?.type === 'required' && <p className="text-sm text-red-700">Selecione uma opção.</p>}
                    {errors?.name?.type === 'validate' && <p className="text-sm text-red-700">Selecione uma opção.</p>}
                </div>

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

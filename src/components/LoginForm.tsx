'use client'

import { useForm } from "react-hook-form"

export const LoginForm = () => {

    interface FormProps {
        password: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

    const onSubmit = (data: FormProps) => {

        try {
            console.log(data)
        } catch (error) {

        }
    }

    return (
        <section className=" lg:border-2 lg:p-20 p-10 rounded-xl border-black shadow-2xl bg-white ">

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

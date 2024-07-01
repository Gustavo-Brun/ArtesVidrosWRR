import { auth } from "@/services/auth"

import { redirect } from 'next/navigation'

import { LoginForm } from "@/components/LoginForm";

export default async function FormPage() {

    const session = await auth()

    if (session) {
        redirect('/app')
    }

    return (
        <main className="min-h-[80vh] flex items-center justify-center">

            <section className="w-fit h-full lg:border-2 lg:p-20 p-10 rounded-xl border-black shadow-2xl space-y-10 bg-white ">
                <div>
                    <h1 className="lg:text-4xl text-2xl font-bold">Login</h1>
                    <h2 className="text-gray-500 dark:text-gray-400">Confirme os dados para acessar o sistema.</h2>
                </div>
                <LoginForm />
            </section>

        </main>
    )
}

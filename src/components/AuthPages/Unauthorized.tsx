import Link from 'next/link';

export const Unauthorized = () => {

    return (
        <section className='h-error-height-calc flex items-center '>
            <div className={'m-auto space-y-20 p-10 place-content-evenly flex flex-col text-center  border-2 border-black rounded-xl shadow-2xl bg-white '}>
                <p className='text-3xl font-medium'>Acesso não autorizado! Faça login para continuar.</p>
                <Link
                    className='mx-auto rounded-2xl shadow-md text-black p-3 px-8 border-2 border-black bg-color-secundary font-bold active:text-red-600 active:scale-95 hover:scale-110'
                    href={'https://artesvidroswrr.com.br/login'}
                >
                    Fazer Login
                </Link>
                <Link
                    className='mx-auto rounded-2xl shadow-md text-black p-3 px-8 border-2 border-black bg-color-primary font-bold active:text-red-600 active:scale-95 hover:scale-110'
                    href={'https://artesvidroswrr.com.br/'}
                >
                    Voltar para o início
                </Link>
            </div>
        </section>
    );
}

'use client' // Error components must be Client Components
 
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleReload = () => {
    // Attempt to recover by trying to re-render the segment
    reset();
    // Reload the page
    window.location.reload();
  };

  return (
    <section className='h-error-height-calc flex items-center '>
      <div className={'m-auto space-y-20 p-10 place-content-evenly flex flex-col text-center  border-2 border-black rounded-xl shadow-2xl bg-white '}>
        <p className='text-3xl font-medium'>Ops! Algo deu errado.</p>
        <button
          className='mx-auto rounded-2xl shadow-md text-black p-3 px-8 border-2 border-black bg-color-primary  font-bold active:text-red-600 active:scale-95 hover:scale-110'
          onClick={handleReload}
        >
          Tente Novamente
        </button>
        <Link
          className='mx-auto rounded-2xl shadow-md text-black p-3 px-8 border-2 border-black bg-color-secundary font-bold active:text-red-600 active:scale-95 hover:scale-110'
          href={'https://artesvidroswrr.com.br/'}
        >
          Volte para o Início
        </Link>
      </div>
    </section>
  );
}

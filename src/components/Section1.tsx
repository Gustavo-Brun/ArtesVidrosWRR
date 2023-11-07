import React from 'react'

export function Section1() {
  return (
    <section className="flex mx-20 my-10 items-center ">

        <div className='bg-red-400'>
            <h2 className="font-bold text-5xl    ">
                Descubra a Excelência em Serviços de Vidraçaria
            </h2>
            <p> 
                Nossa equipe altamente qualificada e materiais de alta qualidade garantem resultados impecáveis para suas necessidades. Entre em contato conosco agora mesmo e descubra como podemos atender suas expectativas com excelência.
            </p>
            <button>
                FALE CONOSCO
            </button>
        </div>

        <div className='bg-orange-400 w-6/12'>
            <p>
                DEIXE OS NÚMEROS FALAREM
            </p>
            <p>
                <span>26+</span>
                Anos de Experiência
            </p>
            <p>
                <span>100%</span>
                Clientes Satisfeitos
            </p>
        </div>

    </section>
  )
}

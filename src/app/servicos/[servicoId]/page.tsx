import { servicesData } from "@/data/servicesData";
import Link from "next/link";;

export default function HomeServicoId({ params }: { params: { servicoId: string } }) {

    const servico = servicesData.find((s) => s.url === params.servicoId);

    if (!servico) {
        return (
        <div className={"text-3xl font-medium mx-auto text-center my-48 p-6 border-2 border-black rounded-xl shadow-2xl bg-white w-2/4"}>
            Serviço não encontrado
        </div>
        )
      }

    return (
        
        <main>
            
            <section className= {"md:w-2/3 md:mx-auto grid grid-cols-1 gap-2 mx-10 my-24 mt-20  p-6 border-2 border-black rounded-xl shadow-2xl bg-white "}>
                <h2 className="my-2 text-4xl font-bold text-center"> {servico.title} </h2>
                <div>
                    <img className="w-28 mx-auto my-5"
                    src= {servico.photos[0]}
                    alt= {`Carrosel de Imagens de ${servico.title}.`} />
                </div>
                <p className="my-5 text-xl text-center"> {servico.text} </p>
                
                <Link
                target="_blank"
                href={`https://wa.me/5511974276250/?text=Ol%C3%A1+Vidra%C3%A7aria+Artes+Vidros+W.R.R.+Quero+Solicitar+um+Or%C3%A7amento+Gratuito+de+${servico.title}.`}
                className='flex mx-auto my-3 text-2xl rounded-3xl shadow-md text-white p-3 border-2 bg-black font-mono font-bold'>Solicitar Orçamento</Link>
            </section>

        </main> 

    )
}
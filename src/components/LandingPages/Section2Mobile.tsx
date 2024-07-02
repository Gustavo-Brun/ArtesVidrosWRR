import Image from "next/image";
import { FaClock, FaTools, FaFireExtinguisher, FaToolbox } from "react-icons/fa";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { Sash } from "../@utils/Sash";

export function Section2Mobile() {
    return (

        <section id="sobre" className="md:hidden relative p-20  text-black bg-gradient-to-br from-color-gray to-slate-600  bg-center bg-cover bg-no-repeat">

            <section className="flex mx-auto justify-center items-center h-40 px-2 mb-10 bg-black rounded-3xl shadow-md">

                <h2 className="md:text-7xl text-4xl text-white text-center font-semibold after:block after:border-b-2 after:mt-4 after:w-1/5 after:mx-auto after:border-red-600">
                    Como Trabalhamos
                </h2>

            </section>

            <div className=" content-center text-xl space-y-4 ">
                <div className="flex flex-col items-center text-center bg-white border border-gray-400 p-8 space-y-4  ">
                    <FaClock style={{ color: '#F2382C', fontSize: '50px' }} />
                    <h3 className="text-2xl font-semibold">Processos Ágeis</h3>
                    <p>Com nossa eficiência e agilidade, entregamos resultados rápidos e de qualidade.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border border-gray-400 p-8 space-y-4 ">
                    <IoChatboxEllipsesSharp style={{ color: '#F2382C', fontSize: '50px' }} />
                    <h3 className="text-2xl font-semibold">Comunicação</h3>
                    <p>Valorizamos a comunicação clara e transparente com nossos clientes, garantindo que suas demandas sejam entendidas e atendidas.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border border-gray-400 p-8 space-y-4 ">
                    <FaTools style={{ color: '#F2382C', fontSize: '50px' }} />
                    <h3 className="text-2xl font-semibold">Equipamentos</h3>
                    <p>Utilizamos equipamentos modernos e de última geração, o que nos permite executar trabalhos precisos e sofisticados.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border border-gray-400 p-8 space-y-4 ">
                    <FaFireExtinguisher style={{ color: '#F2382C', fontSize: '50px' }} />
                    <h3 className="text-2xl font-semibold">Atendimentos emergenciais</h3>
                    <p>Sabemos que imprevistos acontecem, por isso, oferecemos atendimentos emergenciais para resolver seus problemas com rapidez.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border border-gray-400 p-8 space-y-4 ">
                    <FaToolbox style={{ color: '#F2382C', fontSize: '50px' }} />
                    <h3 className="text-2xl font-semibold">Tecnologias inovadoras</h3>
                    <p>Estamos sempre atualizados com as últimas tecnologias do setor, nos tornando capazes de oferecer soluções inovadoras e de alto padrão.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border border-gray-400 p-8 space-y-4 ">
                    <GrUserWorker style={{ color: '#F2382C', fontSize: '50px' }} />
                    <h3 className="text-2xl font-semibold">Profissionais capacitados</h3>
                    <p>Nossa equipe é composta por profissionais experientes e altamente capacitados, prontos para transformar suas ideias em realidade.</p>
                </div>

            </div>


        </section>
    )
}

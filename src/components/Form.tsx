export const Form = () => {

    return (
        <section className="flex items-center justify-center ">
            <form className="flex flex-col gap-4 w-full max-w-xs font-medium ">

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Nome</label>
                    <input className="border border-black shadow-sm rounded h-10 p-3 font-normal "
                     type="text" placeholder="Seu nome"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">E-mail</label>
                    <input className="border border-black shadow-sm rounded h-10 p-3 font-normal "
                     type="text" placeholder="exemplo@contato.com"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Celular</label>
                    <input className="border border-black shadow-sm rounded h-10 p-3 font-normal "
                     type="text" placeholder="(99) 99999-9999"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="paragraph_text">Mensagem</label>
                    <textarea className="border border-black shadow-sm rounded  p-3 font-normal " id="paragraph_text" placeholder="Sua mensagem aqui"></textarea>
                </div>

                <button className="mx-auto rounded-2xl shadow-md text-white p-3 border-2 bg-black  font-bold">Enviar</button>
                
            </form>
        </section>
    )
}
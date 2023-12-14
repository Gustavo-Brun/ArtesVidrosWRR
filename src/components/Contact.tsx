import { Form } from "./Form"

export const Contact = () => {
  return (
    <section className=" m-10 flex w-4/5 mx-auto ">
        <aside className="w-1/2 bg-color-gray text-white p-5 rounded-l-3xl space-y-4">
            <h2 className="text-4xl font-bold after:border-t-2 after:block after:mt-4 after:w-1/12 after:m after:border-red-600"> Estamos ansiosos para conhecer você </h2>
            <h3 className="text-2xl font-semibold"> Em caso de dúvidas, não hesite em nos contatar! </h3>
            <p className="font-medium"> Nossa equipe da Vidraçaria Artes Vidros W.R.R está pronta para ajudar e esclarecer qualquer questão que você possa ter. </p>
            <p> Sinta-se à vontade para nos enviar suas perguntas ou solicitações, estamos aqui para tornar seus projetos realidade. </p>
            <p> Aguardamos seu contato! 🌟 </p>
        </aside>

        <aside className="w-1/2 bg-white p-5 rounded-r-3xl">

          <Form />
        
        </aside>
    </section>
  )
}

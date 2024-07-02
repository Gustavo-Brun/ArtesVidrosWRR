import { Form } from "./Form"

export const Contact = () => {
  return (
    <section id="contato" className=" m-10 flex flex-col md:flex-row w-4/5 mx-auto py-10 ">
      <aside className="md:w-1/2 bg-color-gray text-white p-5 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl space-y-4">
        <h2 className="text-4xl font-bold after:border-t-2 after:block after:mt-4 after:w-1/12 after:m after:border-red-600"> Estamos ansiosos para conhecer você </h2>
        <h3 className="text-2xl font-semibold"> Em caso de dúvidas, não hesite em nos contatar! </h3>
        <p className="font-medium"> Nossa equipe da Vidraçaria Artes Vidros W.R.R está pronta para ajudar e esclarecer qualquer questão que você possa ter. </p>
        <p> Sinta-se à vontade para nos enviar suas perguntas ou solicitações, estamos aqui para tornar seus projetos realidade. </p>
        <p> Aguardamos seu contato! 🌟 </p>
      </aside>

      <aside className="md:w-1/2 bg-white p-5 rounded-b-3xl md:rounded-r-3xl  md:rounded-bl-none">

        <Form />

      </aside>
    </section>
  )
}

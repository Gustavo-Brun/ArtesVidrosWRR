export const Cards = () => {

// Dados dos Cards
const cardData = [
{
    image: "../icons/vidro.png" , title: "Vidros Comuns" , text: "Nossa equipe altamente capacitada está pronta para realizar a instalação de vidros, proporcionando qualidade e conforto aos seus ambientes. Seja para janelas, portas ou sacadas, garantimos um acabamento impecável e duradouro."
},

{
    image: "../icons/temperado.png", title: "Vidros Temperados" , text: "Priorizamos sua segurança e tranquilidade. Com a instalação de vidros temperados, você terá a proteção necessária contra impactos e quebras acidentais. Desfrute de ambientes elegantes, modernos e seguros."
},

{
    image: "../icons/jateado.png" , title: "Vidros Jateados" , text: "Dê um toque de privacidade e sofisticação aos seus espaços com nossos vidros jateados. Essa opção permite a passagem de luz natural, preservando a intimidade e conferindo um charme especial a banheiros, divisórias e portas."
},

{
    image: "../icons/laminado.png" , title: "Vidros Laminados" , text: "Proporcionamos máxima segurança e resistência com a instalação de vidros laminados. Compostos por camadas intercaladas, esses vidros oferecem proteção contra raios UV, ruídos externos e até mesmo tentativas de arrombamento."
},

{
    image: "../icons/serigrafado.png" , title: "Vidros Serigrafados" , text: "Combinando beleza, privacidade e funcionalidade. Com designs personalizados, é ideal para portas, janelas e divisórias, adicionando um toque sofisticado aos ambientes. Preservando a privacidade sem comprometer a entrada de luz natural, é durável e fácil de limpar."
},

{
    image: "../icons/gabinete.png" , title: "Gabinetes" , text: "Oferecemos gabinetes personalizados que combinam estilo, qualidade e praticidade. Nossa equipe especializada criará soluções que se encaixam perfeitamente em seu espaço, proporcionando um visual moderno e organizado."
},

{
    image: "../icons/box.png" , title: "Box" , text: "Transforme seu banheiro em um espaço moderno e funcional com nossos elegantes boxes de vidro. Com variedade de modelos e opções personalizadas, garantimos um design único e adaptado às suas preferências."
},

{
    image: "../icons/espelho.png" , title: "Espelhos" , text: "Acrescente luminosidade e elegância aos seus ambientes com nossos espelhos de alta qualidade. Seja para decoração, vestiários ou academia, oferecemos espelhos sob medida que refletem sua personalidade e estilo."
},

{
    image: "../icons/sacada.png" , title: "Sacadas" , text: "Proporcione uma vista panorâmica deslumbrante e aproveite a conexão com o ambiente externo. Nossa equipe experiente realiza a instalação de sacadas de vidro sob medida, garantindo segurança, resistência e beleza."
},

{
    image: "../icons/janela.png" , title: "Janelas" , text: "As janelas de vidro são a opção ideal para trazer luminosidade natural aos seus espaços. Oferecemos diversos tipos de janelas, como basculantes de correr e pivotantes, com acabamentos impecáveis e materiais de alta qualidade."
},

{
    image: "../icons/corrimao.png" , title: "Corrimão" , text: "Oferecemos soluções personalizadas de corrimão, combinando funcionalidade e estética. Nossa equipe especializada garante a instalação segura e duradoura, adaptando-se a diferentes estilos de decoração."
},

{
    image: "../icons/cobertura.png" , title: "Cobertura de Área" , text: "Soluções personalizadas de cobertura de área para aprimorar seus espaços externos, garantindo funcionalidade e conforto. Resguardando contra os elementos naturais, com durabilidade e um design feito especialmente para você."
},
];

//Componente Principal - Rodando map e Rendenizando Cards 
  return (
    <section className="m-auto w-9/12 grid grid-cols-3 ">
        {cardData.map(({ image, title }, index) =>  {

        const borderColor = index % 2 === 0 ? 'border-color-primary' : 'border-color-secundary';
        
        return (
            
            <div key= {title}  className= {` grid justify-items-center m-5 p-5 border-b-4 ${borderColor} rounded-xl shadow-2xl bg-white	`} >
                
                <div className="my-2"> 
                    <img className="w-28 "
                    src= {image} 
                    alt= {`ícone do item ${title}.`} />
                </div>
        
                <h3 className="my-2 text-2xl font-bold"> {title} </h3>
        
            <button className="my-1 mt-3 text-lg">Mais detalhes</button>
            
            </div> 
            
            )})} 
    </section>
  )
};
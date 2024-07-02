type SashProps = {
  text: string,
};

export const Sash = ({text}:SashProps) => {

  return (
    <section className="flex mx-auto justify-center items-center h-40 w-4/6 mb-10 bg-color-gray rounded-3xl shadow-md">
      <h2 className="lg:text-7xl text-4xl text-white text-center font-semibold after:block after:border-b-2 after:mt-4 after:w-1/5 after:mx-auto after:border-red-600"> 
        {text}
      </h2>

    </section>
  )
}

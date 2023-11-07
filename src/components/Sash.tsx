type SashProps = {
  text: string,
};

export const Sash = ({text}:SashProps) => {

  return (
    <section className="flex mx-auto justify-center items-center h-40 w-4/6 mb-10 bg-color-sash rounded-3xl shadow-md">
      <h2 className="text-7xl text-white font-semibold"> 
        {text}
      </h2>

    </section>
  )
}

export function TextGallery() {
  return (
    <div className=" grid lg:grid-cols-2 ">
      <div>
        <p className=" font-bold lg:text-[2rem] text-orange-500">Marcial</p>
        <h2 className=" font-bold lg:text-[3.6rem] flex flex-col">
          Desarrollos web <span> que necesitas</span>
        </h2>
      </div>
      <div>
        <p className=" lg:text-[1.8rem] font-bold sm:mb-[2rem] my-5 lg:m-0  ">
          Ponemos a tu disposición soluciones web innovadoras y personalizadas
          que se adaptan a tus necesidades específicas.
        </p>
        <p className=" lg:text-[1.4rem] lg:my-[1rem]">
          Desde diseño hasta implementación, estamos aquí para hacer realidad tu
          visión digital. Impulsa tu presencia en línea y alcanzar tus objetivos
          en la web.
        </p>
      </div>
    </div>
  );
}

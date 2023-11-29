export function TextGallery() {
  return (
    <div className=" grid sm:grid-cols-2 ">
      <div>
        <p className=" font-bold text-[2rem] text-orange-500">Marcial</p>
        <h2 className="text-[4rem] flex flex-col">
          Desarrollos web <span> que necesitas</span>
        </h2>
      </div>
      <div>
        <p className=" text-[1.8rem] font-bold mb-[2rem]">
          Ponemos a tu disposición soluciones web innovadoras y personalizadas
          que se adaptan a tus necesidades específicas.
        </p>
        <p className=" text-[1.4rem] text-gray-300">
          Desde diseño hasta implementación, estamos aquí para hacer realidad tu
          visión digital. Impulsa tu presencia en línea y alcanzar tus objetivos
          en la web.
        </p>
      </div>
    </div>
  );
}

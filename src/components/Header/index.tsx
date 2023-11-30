import { Button, Image } from "@nextui-org/react";

export function Header() {
  return (
    <header
      id="header"
      className={`min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-w-[95%] m-auto my-[30px] `}
    >
      <div className=" h-full flex flex-col justify-center">
        <h1 className="text-[3rem] font-bold md:text-[5rem] m-0 flex flex-col">
          <span>
            Hola
            <span className=" text-warning-500 pl-[2rem]">soy Marcial!</span>
          </span>
          Freelancer
        </h1>
        <p className="text-[2rem] my-10">
          Listo para solucionar tus problemas!
        </p>
        <div className=" flex gap-[2rem] ">
          <Button
            color="warning"
            variant="shadow"
            className="text-[1.8rem] p-9 text-white"
          >
            Háblame{" "}
          </Button>
          <Button
            variant="ghost"
            className="text-[1.8rem] p-9 border-gray-500 border-solid border-2 "
          >
            Trabajos
          </Button>
        </div>
      </div>
      <picture className="flex items-center justify-center">
        <Image isZoomed isBlurred src={"/images/header.jpg"} alt="hola"></Image>
      </picture>
    </header>
  );
}

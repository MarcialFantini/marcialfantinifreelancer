import { Button, Image } from "@nextui-org/react";

export function Header() {
  return (
    <header
      className={`min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-w-[95%] m-auto my-[30px]`}
    >
      <div className=" h-full flex flex-col justify-center">
        <h1 className="text-[7rem] m-0 flex flex-col">
          <span>
            Hola
            <span className=" text-warning-500 pl-[2rem]">soy Marcial!</span>
          </span>{" "}
          Freelance
        </h1>
        <p className="text-[1.8rem] my-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className=" flex gap-[2rem] ">
          <Button className="text-[1.8rem] p-9 bg-orange-500">Háblame </Button>
          <Button className="text-[1.8rem] p-9 bg-black border-gray-500 border-solid border-2 hover:border-gray-400">
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

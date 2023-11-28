import Image from "next/image";
import srcImage from "../../../public/images/header.jpg";

export function Gallery() {
  return (
    <div className="flex flex-col gap-[1rem] sm:flex-row my-[3rem]">
      <picture className="sm:w-[25%] bg-black  overflow-hidden ">
        <Image
          className="w-full h-full object-cover  transition-all hover:scale-125"
          alt="project"
          src={srcImage}
        ></Image>
      </picture>
      <picture className="sm:w-[50%]  overflow-hidden">
        <Image
          className=" w-full h-full object-cover  transition-all hover:scale-125"
          alt="project"
          src={srcImage}
        ></Image>
      </picture>
      <div className="sm:w-[25%] flex flex-col gap-[1rem]">
        <picture className=" bg-black overflow-hidden ">
          <Image
            className="w-full h-full object-cover  transition-all hover:scale-125"
            alt="project"
            src={srcImage}
          ></Image>
        </picture>
        <picture className=" bg-black overflow-hidden ">
          <Image
            className="w-full h-full object-cover  transition-all hover:scale-125"
            alt="project"
            src={srcImage}
          ></Image>
        </picture>
      </div>
    </div>
  );
}

import Image from "next/image";
import srcImage4 from "../../../public/images/zor.png";
import srcImage1 from "../../../public/images/farm.png";
import srcImage2 from "../../../public/images/cafe.png";
import srcImage3 from "../../../public/images/law.png";

export function Gallery() {
  return (
    <div className="flex flex-col gap-[1rem] sm:flex-row my-[3rem]">
      <picture className="sm:w-[25%] bg-black  overflow-hidden border-black border-2 rounded-md">
        <Image
          className="w-full h-full object-cover  transition-all hover:scale-125"
          alt="project"
          src={srcImage1}
        ></Image>
      </picture>
      <picture className="sm:w-[50%]  overflow-hidden  border-black border-2 rounded-md">
        <Image
          className=" w-full h-full object-cover  transition-all hover:scale-125"
          alt="project"
          src={srcImage2}
        ></Image>
      </picture>
      <div className="sm:w-[25%] flex flex-col gap-[1rem]">
        <picture className=" bg-black overflow-hidden  border-black border-2 rounded-md ">
          <Image
            className="w-full h-full object-cover  transition-all hover:scale-125"
            alt="project"
            src={srcImage3}
          ></Image>
        </picture>
        <picture className=" bg-black overflow-hidden  border-black border-2 rounded-md ">
          <Image
            className="w-full h-full object-cover  transition-all hover:scale-125"
            alt="project"
            src={srcImage4}
          ></Image>
        </picture>
      </div>
    </div>
  );
}

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export function SectionProjects() {
  return (
    <section className=" w-[95%]  m-auto p-0 flex flex-col  justify-center">
      <h2 className=" font-bold  text-[4rem] ">Projects</h2>
      <p className="my-[30px] text-[1.8rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sint est
        excepturi quis! Consequatur numquam, accusantium suscipit, illum sint
        maiores quas rem molestiae sed, facilis quidem quo aliquid animi nemo!
      </p>
      <picture className=" relative flex align-center justify-center my-[3rem]">
        <Image
          isBlurred
          isZoomed
          className=" rounded-none aspect-[2] "
          alt="project one"
          src={"/images/header.jpg"}
        ></Image>
        <div className=" absolute bottom-0 left-0 w-[30%] h-[40%]  z-40 flex flex-col justify-center pl-[5%] ">
          <div>
            <h2 className="text-[4rem] font-bold">Cicu Marketing</h2>
            <p className="text-[2rem] font-bold my-[2rem]">Technology</p>
            <Button className="text-[2rem] px-6 py-8 bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
              Web Online
            </Button>
          </div>
        </div>
      </picture>
      <picture className=" my-[3rem] relative flex align-center justify-center">
        <Image
          isBlurred
          isZoomed
          className=" rounded-none aspect-[2] "
          alt="project one"
          src={"/images/header.jpg"}
        ></Image>
      </picture>
    </section>
  );
}

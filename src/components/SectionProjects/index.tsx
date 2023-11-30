import { Button, Image } from "@nextui-org/react";
import { Suspense } from "react";

export function SectionProjects() {
  return (
    <section
      id="projects"
      className=" w-[95%]  m-auto p-0 flex flex-col  justify-center"
    >
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
          src={"/images/mainPanel.png"}
        ></Image>
        <div className=" top-0 left-0 bg-black/40 absolute w-full h-full z-30"></div>
        <div className=" absolute sm:bottom-2 left-0 w-full h-[40%] z-40 flex flex-col self-center justify-center pl-[5%] ">
          <div>
            <h2 className="text-[1.4rem] m-0 font-bold">Cicu Marketing</h2>
            <p className="text-[1.4rem] my-1 font-bold ">Technology</p>
            <Button className=" bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">
              Web Online
            </Button>
          </div>
        </div>
      </picture>

      <Suspense fallback={<div></div>}>
        <div className="lg:h-[400px] relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg shadow-warning-500/40">
          <video
            className=" lg:absolute lg:w-full lg:h-auto"
            src="/videos/production.webm"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </Suspense>
    </section>
  );
}

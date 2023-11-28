"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export function SectionService() {
  return (
    <section className="w-full max-w-[95%] mx-auto my-[40px] font-bold flex flex-col gap-[3rem] ">
      <h2 className="text-[4rem] font-bold ">Desarrollo de soluciones </h2>
      <h2 className="text-[4rem] font-bold "> Optimizaciones de sistemas</h2>
      <div className="grid sm:grid-cols-2 items-center justify-between">
        <h2 className=" text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r  from-red-500 to-orange-500">
          Resolviendo con Código
        </h2>
        <div className=" ml-auto flex flex-row gap-[1.5rem]">
          <Button className="text-[1.8rem] p-9 bg-purple-500">
            Get in touch
          </Button>
          <Button className="  text-[1.8rem] p-9 bg-black border-gray-500 border-solid border-2 hover:border-gray-400">
            View all works
          </Button>
        </div>
      </div>

      <div className="flex sm:flex-row gap-[1rem] ">
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/header.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/header.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/header.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/header.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/header.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/header.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Accordion
        className="mt-[40px]"
        variant="bordered"
        itemClasses={{
          title: "text-[2.4rem] ",
        }}
      >
        <AccordionItem
          className="text-[1.6rem] "
          key="1"
          aria-label="Accordion 1"
          title="Landing Page"
        >
          Una landing page es un sitio web de presentación, diseñada para
          convencer a tus futuros clientes de tus servicios o productos y
          posicionar tu Marca.
        </AccordionItem>
        <AccordionItem
          className="text-[1.6rem]"
          key="2"
          aria-label="Accordion 2"
          title="Blogs"
        >
          Posicionamiento de marca con marketing de contenido, permite conseguir
          una audiencia para que luego consuman tus productos/servicios.
        </AccordionItem>
        <AccordionItem
          className="text-[1.6rem]"
          key="3"
          aria-label="Accordion 3"
          title="Ecommerce"
        >
          Efectúa ventas online, funciona 24/7, reduce los costos operativos al
          no tener una tienda física, facilita la gestión de inventario.
        </AccordionItem>
      </Accordion>
    </section>
  );
}

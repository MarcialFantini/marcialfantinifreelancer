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

const data = [
  {
    title: "Landing page",
    srcImage: "images/header.jpg",
    subTitle: "Pagina de presentación!",
    type: "landing",
  },
  {
    title: "Blog",
    srcImage: "images/header.jpg",
    subTitle: "Postea tu contenido!",
    type: "blog",
  },
  {
    title: "Ecommerce",
    srcImage: "images/header.jpg",
    subTitle: "Vende tus productos!",
    type: "ecommerce",
  },
];

export function SectionService() {
  return (
    <section className="w-full max-w-[95%] mx-auto my-[40px] font-bold flex flex-col gap-[3rem]">
      <div>
        <h2 className="text-[4rem] font-bold  ">Desarrollo de soluciones </h2>
        <h2 className="text-[4rem] font-bold "> Optimizaciones de sistemas</h2>
        <div className="grid sm:grid-cols-2 items-center justify-between">
          <h2 className=" text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r  from-red-500 to-orange-500">
            Resolviendo con Código
          </h2>
          <div className=" ml-auto flex flex-row gap-[1.5rem]">
            <Button className="text-[1.8rem] p-9 bg-purple-500">
              Háblame!
            </Button>
            <Button className="  text-[1.8rem] p-9 bg-black border-gray-500 border-solid border-2 hover:border-gray-400">
              Trabajos!
            </Button>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row gap-[1rem] ">
        {data.map((item) => {
          return (
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-[1.8rem] text-white/70 uppercase font-bold">
                  Web
                </p>
                <h4 className="text-white font-bold text-[3rem]">
                  {item.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={item.srcImage}
              />
              <CardFooter className="absolute bg-black/5 backdrop:blur-sm bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between min-h-[30%]">
                <div>
                  <p className="text-white  text-[2rem]  ">{item.subTitle}</p>
                </div>
                <Button
                  className="text-[1.6rem] p-[2rem]"
                  color="primary"
                  radius="full"
                  variant="shadow"
                >
                  Información
                </Button>
              </CardFooter>
            </Card>
          );
        })}
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

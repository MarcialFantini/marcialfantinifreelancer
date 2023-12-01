"use client";
import { Button } from "@nextui-org/react";
import { CardComponent } from "../ServiceCard";
import { Acordion } from "../Acordion";
const handlerToElement = (id: string) => () => {
  const element = document.getElementById(id);

  console.log(element);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
const data = [
  {
    title: "Landing page",
    srcImage: "/images/landing.webp",
    subTitle: "Pagina de presentación!",
    type: "landing",
    texts: [
      {
        title: "Conversión Efectiva:",
        text: "Diseñamos landing pages centradas en la conversión, maximizando la probabilidad de convertir visitantes en clientes.",
      },
      {
        title: "Diseño Atractivo:",
        text: "Nuestras landing pages no solo son funcionales, sino también visualmente atractivas, generando una primera impresión positiva.",
      },
      {
        title: "Optimización para Móviles:",
        text: "Garantizamos que la landing page sea completamente responsive, brindando una experiencia óptima tanto en dispositivos móviles como en computadoras de escritorio.",
      },
    ],
  },
  {
    title: "Blog",
    srcImage: "/images/blog.jpg",
    subTitle: "Postea tu contenido!",
    type: "blog",
    texts: [
      {
        title: "Contenido Relevante y Valioso:",
        text: "Ofrecemos blogs con contenido que responde a las necesidades y preguntas de tu audiencia, posicionándote como una autoridad en tu industria.",
      },
      {
        title: "Diseño Agradable:",
        text: "Creamos blogs con diseños intuitivos y atractivos que facilitan la navegación y la lectura, mejorando la experiencia del usuario.",
      },
      {
        title: "Integración con Redes Sociales:",
        text: " Facilitamos la compartición del contenido en redes sociales, amplificando su alcance y aumentando la interacción.",
      },
    ],
  },
  {
    title: "Ecommerce",
    srcImage: "/images/ecommerce.jpg",
    subTitle: "Vende tus productos!",
    type: "ecommerce",
    texts: [
      {
        title: "Experiencia de Compra Simplificada: ",
        text: "Diseñamos tiendas online con procesos de compra intuitivos y fluidos, minimizando los obstáculos para convertir visitantes en clientes.",
      },
      {
        title: "Seguridad de Pago:",
        text: "Implementamos medidas de seguridad robustas para garantizar transacciones seguras y proteger la información del cliente.",
      },
      {
        title: "Gestión de Inventarios Eficiente: ",
        text: "Integración de sistemas que facilitan la gestión de inventarios, evitando problemas de stock y mejorando la eficiencia operativa.",
      },
    ],
  },
];

export function SectionService() {
  return (
    <section
      id="servicios"
      className="w-full max-w-[95%] mx-auto my-[40px] font-bold flex flex-col gap-[3rem]"
    >
      <div>
        <h2 className="text-[2rem]  sm:text-[4rem] font-bold  ">
          Desarrollo de soluciones{" "}
        </h2>
        <h2 className="text-[2rem] my-5  sm:text-[4rem] font-bold ">
          {" "}
          Optimizaciones de sistemas
        </h2>
        <div className="grid sm:grid-cols-2 items-center justify-between gap-10">
          <h2 className=" text-[2rem] sm:text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r  from-red-500 to-orange-500">
            Resolviendo con Código
          </h2>
          <div className=" ml-auto flex flex-row gap-[1.5rem] items-center justify-center ">
            <Button
              onClick={handlerToElement("contact")}
              variant="shadow"
              color="warning"
              className="text-[1.8rem] p-9 text-white "
            >
              Háblame
            </Button>
            <Button
              onClick={handlerToElement("desarrollo")}
              variant="ghost"
              className=" text-[1.8rem] p-9 "
            >
              Trabajos
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[2rem]  ">
        {data.map((item, index) => {
          return (
            <CardComponent
              key={index}
              index={index}
              item={item}
            ></CardComponent>
          );
        })}
      </div>
      <Acordion></Acordion>
    </section>
  );
}

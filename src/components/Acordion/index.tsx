"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export function Acordion() {
  return (
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
        Efectúa ventas online, funciona 24/7, reduce los costos operativos al no
        tener una tienda física, facilita la gestión de inventario.
      </AccordionItem>
    </Accordion>
  );
}

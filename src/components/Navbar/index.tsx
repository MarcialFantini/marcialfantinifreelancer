"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handlerToElement = (id: string) => () => {
    const element = document.getElementById(id);

    console.log(element);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={" p-[1.5rem] " + (theme !== "dark" ? " bg-gray-500/30" : "")}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className=" lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand
          onClick={handlerToElement("header")}
          className=" cursor-pointer"
        >
          <h1 className="font-bold  text-[2.4rem]">Marcial</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4 flex-row items-center justify-center">
        <NavbarItem
          onClick={handlerToElement("servicios")}
          className=" text-[2rem]  text-center cursor-pointer"
        >
          <p> Servicios</p>
        </NavbarItem>
        <NavbarItem
          onClick={handlerToElement("projects")}
          className=" text-[2rem] text-center  hover:text-white "
        >
          <p aria-current="page">Proyectos </p>
        </NavbarItem>
        <NavbarItem
          onClick={handlerToElement("desarrollo")}
          className=" text-[2rem] text-center  hover:text-white"
        >
          <p color="foreground">Desarrollo</p>
        </NavbarItem>{" "}
        <NavbarItem
          onClick={handlerToElement("contact")}
          className=" text-[2rem] text-center  hover:text-white"
        >
          <p color="foreground">Contacto</p>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className=" py-5">
        <p className=" text-transparent">Servicios</p>

        <p onClick={handlerToElement("servicios")} className=" text-xl">
          {" "}
          Servicios
        </p>

        <p onClick={handlerToElement("projects")} className=" text-xl">
          Proyectos{" "}
        </p>
        <p onClick={handlerToElement("desarrollo")} className=" text-xl">
          Desarrollo
        </p>
        <p onClick={handlerToElement("contact")} className=" text-xl">
          Contacto
        </p>
      </NavbarMenu>
    </Navbar>
  );
};

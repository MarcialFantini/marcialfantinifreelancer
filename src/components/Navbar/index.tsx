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
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" p-[1.5rem]"
      onClick={() => setTheme("dark")}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className=" sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand
          onClick={handlerToElement("header")}
          className=" cursor-pointer"
        >
          <h1 className="font-bold  text-[2.4rem]">Marcial</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 flex-row items-center justify-center">
        <NavbarItem
          onClick={handlerToElement("header")}
          className=" text-[2rem]  hover:text-white text-center cursor-pointer"
        >
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem className=" text-[2rem] text-center  hover:text-white ">
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className=" text-[2rem] text-center  hover:text-white">
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Link href="#"> Data</Link>
        </NavbarItem>{" "}
        <NavbarItem>
          <Link href="#"> Data</Link>
        </NavbarItem>{" "}
        <NavbarItem>
          <Link href="#"> Data</Link>
        </NavbarItem>{" "}
        <NavbarItem>
          <Link href="#"> Data</Link>
        </NavbarItem>{" "}
        <NavbarItem>
          <Link href="#"> Data</Link>
        </NavbarItem>{" "}
        <NavbarItem>
          <Link href="#"> Data</Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

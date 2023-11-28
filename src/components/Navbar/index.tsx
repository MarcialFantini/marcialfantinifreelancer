"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className=" sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Marcial</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
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

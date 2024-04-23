import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, Avatar} from "@nextui-org/react";

export default function App() {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "https://blog.techit.win/" },
    { name: "Resources", link: "/resources" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  
  const isActive = (link: string) => window.location.pathname === link;

  return (
    <React.Fragment>
        <Navbar disableAnimation isBordered className="fixed">
        <NavbarContent className="sm:hidden pr-3" justify="start">
            <NavbarBrand>
            <Avatar src="http://files.techit.win/wp-content/uploads/2024/04/381373437_878368530383292_1922118991557438707_n.jpg" size="lg" />
            <p className="font-bold text-inherit text-2xl">Techit Thawiang</p>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarBrand className="gap-3">
            <Avatar src="http://files.techit.win/wp-content/uploads/2024/04/381373437_878368530383292_1922118991557438707_n.jpg" className="w-[48px] h-[48px]" />
            <p className="font-bold text-inherit text-2xl">Techit Thawiang</p>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex" justify="end">
            {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                className={isActive(item.link) ? "font-bold" : "font-regular" }
                href={item.link}
                color={isActive(item.link) ? "primary" : "foreground" }
                underline={isActive(item.link) ? "always" : "hover" }
                >
                {item.name}
                </Link>
            </NavbarMenuItem>
            ))}
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
            {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                className="w-full"
                href={item.link}
                color={isActive(item.link) ? "primary" : "foreground" }
                underline={isActive(item.link) ? "always" : "none" }
                >
                {item.name}
                </Link>
            </NavbarMenuItem>
            ))}
        </NavbarMenu>

        </Navbar>     
    </React.Fragment>

  );
}

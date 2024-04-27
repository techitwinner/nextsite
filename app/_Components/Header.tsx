"use client";

import React, {useState} from "react";
import { useRouter } from 'next/navigation';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent ,Link, Button, Avatar,Tooltip} from "@nextui-org/react";

const Header = () => {
  const menuItems = [
    { id: "home", name: "Home", link: "/", icoFamily: "solid", ico: "house"},
    { id: "blog", name: "Blog", link: "/blog", icoFamily: "solid", ico: "comment-dots" },
    { id: "resources", name: "Resources", link: "/resources", icoFamily: "solid", ico: "box" },
    { id: "projects", name: "Projects", link: "/projects", icoFamily: "solid", ico: "code" },
    { id: "about", name: "About", link: "/about", icoFamily: "solid", ico: "circle-info" },
    { id: "contact", name: "Contact", link: "/contact", icoFamily: "solid", ico: "envelope" },
  ];
  
  const ActiveOrNot = (link: string) => {
    const currentUrl = new URL(window.location.href);
    const targetUrl = new URL(link, window.location.origin);
    return currentUrl.pathname === targetUrl.pathname;
    };

  const handleButtonClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <React.Fragment>
        <Navbar disableAnimation isBordered className="fixed">
        <NavbarContent className="sm:hidden pr-3" justify="start">
            <NavbarBrand>
            <p className="font-bold text-inherit text-2xl">Techit Thawiang</p>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarBrand className="gap-3">
            <p className="font-bold text-inherit text-2xl">Techit Thawiang</p>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-2" justify="end">
            {menuItems.map((item, index) => (
                <Tooltip showArrow content={item.name} key={`${item}-${index}`}>
                    <Button
                    isIconOnly={!ActiveOrNot(item.link)}
                    className={ActiveOrNot(item.link) ? "font-bold" : "font-regular" }
                    onClick={() => handleButtonClick(item.link)}
                    color={ActiveOrNot(item.link) ? "primary" : "default"}
                    variant={ActiveOrNot(item.link) ? "shadow" : "flat"}
                    >
                    <i className={`fa-${item.icoFamily} fa-${item.ico}`}></i>
                    <p className={ActiveOrNot(item.link) ? "flex" : "hidden"}>{item.name}</p>
                    </Button>
                </Tooltip>
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
                size="lg"
                onClick={() => handleButtonClick(item.link)}
                color={ActiveOrNot(item.link) ? "primary" : "foreground" }
                underline={ActiveOrNot(item.link) ? "always" : "none" }
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

export default Header

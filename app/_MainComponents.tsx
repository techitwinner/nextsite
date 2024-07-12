"use client";

import React, {useState} from "react";
import {Inter_Tight} from "next/font/google";
import {Button, Link, Tooltip, Image} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

const interTight = Inter_Tight({ subsets: ["latin"]});

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

const day = new Date();

const logoUrl = "https://images.techit.win/logos/techit.win/TechitDotWin-Squarcle-Auto.svg"

const Navigator = () => {
    const currentPath = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMyStupidMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        enter: { y: 0, opacity: 1 },
        leave: { y: "100%", opacity: 1 },
    };

    const menuTransition = {type: "spring",  bounce: 0, duration: .5};

    const navigatorContents = () => [
        {"label": "Home", "url": "/", "icon": "house"},
        {"label": "About Me", "url": "/about", "icon": "user-circle"},
        {"label": "Contact", "url": "/contact", "icon": "phone"},
    ];

    const navigatorContentsOffCanvas = () => [
        {"label": "Home", "url": "/"},
        {"label": "Blog", "url": "/blog"},
        {"label": "Projects", "url": "/projects"},
        {"label": "About Me", "url": "/about"},
        {"label": "Contact", "url": "/contact"},
    ];

    const offCanvasMenuToggle = () => [
        {"label": "Menu", "icon": "dots-three-circle-vertical", "iconAlt": "x"}
    ];

    return (
        <React.Fragment>
                <div className="fixed w-full h-[64px] z-[9999]">
                    <section
                        className="flex flex-row h-full justify-center items-center backdrop-blur border-b-1 border-black border-opacity-15 dark:border-white dark:border-opacity-15 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
                        <nav className="flex flex-row max-w-[64rem] px-4 sm:px-8 w-full justify-between items-center">
                            <section>
                                <p className={`text-2xl font-bold cursor-pointer select-none`}
                                   onClick={() => handleButtonClick("/")}>Techit Thawiang</p>
                            </section>
                            <ul className="flex flex-row gap-2">
                                {offCanvasMenuToggle().map((toggle, index) => (
                                    <Button
                                        key="index"
                                        onClick={toggleMyStupidMobileMenu}
                                        className="flex flex-row max-h-[40px]"
                                        isIconOnly
                                        size={"md"}
                                        variant={isOpen ? "solid" : "ghost"}
                                        color={isOpen ? "primary" : "default"}
                                    >
                                        <p className={`ph ${isOpen ? `ph-${toggle.iconAlt}` : `ph-${toggle.icon}`} text-[1.25rem]`}></p>
                                    </Button>
                                ))}
                            </ul>
                        </nav>
                    </section>
                </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`${isOpen ? 'fixed' : 'hidden transition-background'} z-[9998] scrollbar-hide flex w-screen h-screen gap-2 pt-20 justify-center overflow-auto`}
                        initial="leave"
                        animate="enter"
                        exit="leave"
                        variants={{enter: {y: 0, opacity: 1}, leave: {y: "5%", opacity: 0},}}
                        transition={menuTransition}
                    >
                        <nav className="flex flex-col max-w-[64rem] w-full gap-2 px-6 sm:px-8 items-end">
                            {navigatorContentsOffCanvas().map((nav, index) => (
                                <Link key={index}
                                      href={nav.url}
                                      className={`text-5xl sm:text-7xl gap-2 ${currentPath === nav.url ? "font-bold" : "font-regular"}`}
                                      color={currentPath === nav.url ? "primary" : "secondary"}
                                >
                                    {nav.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`${isOpen ? 'fixed backdrop-blur' : 'hidden transition-all backdrop-blur-0'} z-[9997] flex w-screen h-screen bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70`}
                        initial="leave"
                        animate="enter"
                        exit="leave"
                        variants={{enter: {opacity: 1}, leave: {opacity: 0},}}
                        transition={menuTransition}
                    >
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}

const Footer = () => {
    const footerLogoSize = "96px"
    const currentPath = usePathname();

    const legalSection = () => [
        {"label": "Imprint", "url": "/imprint"},
        {"label": "Attributions", "url": "/attributions"},
        {"label": "HTML Editor", "url": "/html-editor"},
        {"label": "Drop Files", "url": "https://drive.techit.win/s/drop"},
        {"label": "Warehouse", "url": "https://drive.techit.win/s/warehouse"},
    ];

    const socialSection = () => [
        {"label": "GitHub", "website": "https://github.com/", "username": "techitwinner", "icon": "github-logo"},
        {"label": "X / Twitter", "website": "https://x.com/", "username": "techitwinner", "icon": "x-logo"},
        {"label": "Facebook", "website": "https://facebook.com/", "username": "techitwinner", "icon": "facebook-logo"},
        {"label": "LinkedIn", "website": "https://linkedin.com/", "username": "in/techit-thawiang-02b56b27a", "icon": "linkedin-logo"}
    ];

    return (
        <React.Fragment>
            <div className="flex flex-col gap-6 w-full items-center justify-center border-t-1 border-black border-opacity-15 dark:border-white dark:border-opacity-15 py-10">
                <section
                    className="flex flex-row h-full justify-center items-center max-w-[64rem] w-full">
                    <nav className="flex flex-row max-w-[64rem] px-4 sm:px-8 w-full justify-center items-stretch">
                        <section className="items-start flex flex-col w-full gap-4">
                            <Image alt=""
                                   src={logoUrl}
                                   width={footerLogoSize}
                                   radius="sm"
                            />
                        </section>
                    </nav>
                </section>
                <section
                    className="flex flex-row h-full justify-center items-center max-w-[64rem] w-full">
                    <nav className="flex flex-col sm:flex-row max-w-[64rem] px-4 sm:px-8 w-full justify-center items-stretch gap-2">
                        <section className="items-start flex flex-col w-full sm:w-[135%]">
                            <p className={`${interTight.className} text-2xl font-bold select-none cursor-default`}>Techit Thawiang</p>
                            <p>© 2023-{day.getFullYear()}, All rights reserved.</p>
                        </section>
                        <div className="grid grid-cols-2 sm:flex sm:flex-row w-full">
                            <section className="items-start flex flex-col w-full">
                                <section className="flex flex-row justify-start gap-1">
                                    <i className="text-2xl ph-bold ph-asterisk-simple self-start mt-1"></i>
                                    <section className="flex flex-col">
                                        <p className={`${interTight.className} flex flex-col md:flex-row text-2xl font-bold select-none cursor-default`}>
                                            Sites</p>
                                        {legalSection().map((legal, index) => (
                                            <Link key={index}
                                                  href={legal.url}
                                                  underline={`${currentPath === legal.url ? "always" : "none"}`}
                                                  color={`${currentPath === legal.url ? "primary" : "secondary"}`}
                                                  className="select-none cursor-pointer"
                                            >
                                                {legal.label}
                                            </Link>
                                        ))}
                                    </section>
                                </section>
                            </section>
                            <section className="items-start flex flex-col w-full">
                                <section className="flex flex-row justify-start gap-1">
                                    <i className="text-2xl ph-bold ph-asterisk-simple self-start mt-1"></i>
                                    <section className="flex flex-col">
                                        <p className={`${interTight.className} flex flex-col md:flex-row text-2xl font-bold select-none cursor-default`}>
                                            Social</p>
                                        {socialSection().map((social, index) => (
                                            <Link key={index}
                                                  href={`${social.website}${social.username}`}
                                                  color="secondary"
                                                  className="select-none cursor-pointer"
                                            >
                                                {social.label}
                                            </Link>
                                        ))}
                                    </section>
                                </section>
                            </section>
                        </div>
                    </nav>
                </section>
            </div>
        </React.Fragment>
    );
}

export {Navigator, Footer};
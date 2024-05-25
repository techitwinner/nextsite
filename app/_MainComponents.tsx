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

const logoUrl = "https://images.techit.win/logos/techit.win/TechitDotWinLogo.png"

const Navigator = () => {
    const currentPath = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMyStupidMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    const menuTransition = {
        open: { ease: 'easeOut', duration: 0.3 },
        closed: { ease: 'easeIn', duration: 0.3 },
    };

    const navigatorContents = () => [
        {"label": "Home", "url": "/", "icon": "house"},
        {"label": "About Me", "url": "/about", "icon": "user-circle"},
        {"label": "Contact", "url": "/contact", "icon": "phone"},
    ];

    const offCanvasMenuToggle = () => [
        {"label": "Menu", "icon": "dots-three-circle-vertical", "iconAlt": "x"}
    ];

    return (
        <React.Fragment>
            <div className="fixed w-full h-[64px] z-[9999]">
                <section className="flex flex-row h-full justify-center items-center backdrop-blur border-b-2 border-black border-opacity-15 dark:border-white dark:border-opacity-15 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
                    <nav className="flex flex-row max-w-[64rem] px-4 sm:px-8 w-full justify-between items-center">
                        <section>
                            <p className={`${interTight.className} text-2xl font-bold hover:font-black active:font-normal transition-all cursor-pointer select-none`}
                               onClick={() => handleButtonClick("/")}>Techit Thawiang</p>
                        </section>
                        <ul className="flex sm:hidden flex-row gap-2">
                            {offCanvasMenuToggle().map((toggle, index) => (
                                <Button
                                    key="index"
                                    onClick={toggleMyStupidMobileMenu}
                                    className="flex flex-row max-h-[40px]"
                                    isIconOnly
                                    size={"md"}
                                    variant={isOpen ? "solid" : "ghost"}
                                    color={isOpen ? "danger" : "default"}
                                    radius={isOpen ? "full" : "sm"}
                                >
                                    <p className={`ph ${isOpen ? `ph-${toggle.iconAlt}` : `ph-${toggle.icon}`} text-[1.25rem]`}></p>
                                </Button>
                            ))}
                        </ul>
                        <ul className="hidden sm:flex flex-row gap-2">
                            {navigatorContents().map((nav, index) => (
                                <Tooltip key={index} showArrow={currentPath !== nav.url} content={nav.label}
                                         className={currentPath === nav.url ? "hidden" : "flex"} placement="bottom">
                                    <Button
                                        onClick={() => handleButtonClick(nav.url)}
                                        className="flex flex-row max-h-[40px]"
                                        isIconOnly={currentPath !== nav.url}
                                        size="md"
                                        variant={currentPath === nav.url ? "solid" : "ghost"}
                                        color={currentPath === nav.url ? "primary" : "default"}
                                        radius={currentPath === nav.url ? "full" : "sm"}
                                    >
                                        <p className={`ph ph-${nav.icon} text-[1.25rem] ${currentPath === nav.url ? 'ph-fill' : ''}`}></p>
                                        <p className={currentPath === nav.url ? "flex" : "hidden"}>
                                            {nav.label}
                                        </p>
                                    </Button>
                                </Tooltip>
                            ))}
                        </ul>
                    </nav>
                </section>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`${isOpen ? 'fixed' : 'hidden'} z-[9998] flex w-screen h-screen backdrop-blur bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 gap-2 pt-20 justify-center`}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={menuTransition}
                    >
                        <nav className="flex flex-col max-w-[64rem] w-full gap-2 px-4 sm:px-8">
                            {navigatorContents().map((nav, index) => (
                                <Link key={index}
                                      href={nav.url}
                                      className="text-5xl font-bold gap-2"
                                      color={currentPath === nav.url ? "primary" : "foreground"}
                                >
                                    {nav.label}
                                </Link>
                            ))}
                        </nav>

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
    ];

    const socialSection = () => [
        {"label": "GitHub", "website": "https://github.com/", "username": "techitwinner", "icon": "github-logo"},
        {"label": "X / Twitter", "website": "https://x.com/", "username": "techitwinner", "icon": "x-logo"},
        {"label": "Facebook", "website": "https://facebook.com/", "username": "techitwinner", "icon": "facebook-logo"},
        {"label": "LinkedIn", "website": "https://linkedin.com/", "username": "in/techit-thawiang-02b56b27a", "icon": "linkedin-logo"}
    ];

    return (
        <React.Fragment>
            <div className="flex flex-col gap-6 w-full items-center justify-center border-t-2 border-black border-opacity-15 dark:border-white dark:border-opacity-15 py-10">
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
                            <p className={`${interTight.className} text-2xl font-bold select-none cursor-default`}>Techit
                                Thawiang</p>
                            <p>© 2023-{day.getFullYear()}, All rights reserved.</p>
                        </section>
                        <div className="grid grid-cols-2 sm:flex sm:flex-row w-full">
                            <section className="items-start flex flex-col w-full">
                                <section className="flex flex-row justify-start gap-1">
                                    <i className="text-2xl ph-bold ph-asterisk-simple self-start mt-1"></i>
                                    <section className="flex flex-col">
                                        <p className={`${interTight.className} flex flex-col md:flex-row text-2xl font-bold select-none cursor-default`}>
                                            Legal</p>
                                        {legalSection().map((legal, index) => (
                                            <Link key={index}
                                                  href={legal.url}
                                                  underline={`${currentPath === legal.url ? "always" : "none"}`}
                                                  color={`${currentPath === legal.url ? "primary" : "foreground"}`}
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
                                                  color="foreground"
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
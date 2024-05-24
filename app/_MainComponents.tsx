"use client";

import React, {useState} from "react";
import {Inter_Tight} from "next/font/google";
import {Button, Link, Tooltip} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

const interTight = Inter_Tight({ subsets: ["latin"]});

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

const day = new Date();

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
                        className={`${isOpen ? 'fixed' : 'hidden'} z-[9998] flex flex-col w-screen h-screen backdrop-blur bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 gap-2 p-4 pt-20`}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={menuTransition}
                    >
                        {navigatorContents().map((nav, index) => (
                            <Link key={index}
                                    href={nav.url}
                                    className="text-5xl font-bold"
                                    underline={currentPath === nav.url ? "always" : "hover"}
                                    color={currentPath === nav.url ? "primary" : "foreground"}
                            >
                                {nav.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}

const Footer = () => {
    return (
        <React.Fragment>
            <div className="w-full items-center justify-center">
                <section
                    className="py-2 flex flex-row h-full justify-center items-center border-t-2 border-black border-opacity-15 dark:border-white dark:border-opacity-15">
                    <nav className="flex flex-col max-w-[64rem] px-4 sm:px-8 w-full justify-center items-center">
                        <p className="text-[12px]">© 2023-{day.getFullYear()} Techit Thawiang. All rights reserved.</p>
                        <p className="text-[12px]">Any logos or trademarks appearing on this site are the property of
                            their respective owners.</p>
                    </nav>
                </section>
            </div>
        </React.Fragment>
    );
}

export {Navigator, Footer};
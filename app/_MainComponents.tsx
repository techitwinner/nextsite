"use client";

import React, {useEffect, useRef, useState} from "react";
import {Inter_Tight} from "next/font/google";
import {Button, Tooltip} from "@nextui-org/react";

const interTight = Inter_Tight({ subsets: ["latin"]});

const navigatorContents = () => [
    {"label": "Home", "url": "/", "icon": "house"},
    {"label": "Blog", "url": "/blog", "icon": "chat-teardrop-text"},
    {"label": "About Me", "url": "/about", "icon": "user-circle"},
    {"label": "Contact Me", "url": "/contact", "icon": "phone"},
];

const ActiveOrNot = (link: string) => {
    const [isActive, setIsActive] = React.useState(false);

    useEffect(() => {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(link, window.location.origin);
        setIsActive(currentUrl.pathname === targetUrl.pathname);
    }, [link]);

    return isActive;
};

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

const day = new Date();

const Navigator = () => {
    return (
        <React.Fragment>
            <div className="fixed w-full h-[64px] z-[9999]">
                <section className="flex flex-row h-full justify-center items-center backdrop-blur border-b-2 border-black border-opacity-15 dark:border-white dark:border-opacity-15 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
                    <nav className="flex flex-row max-w-[64rem] px-4 sm:px-8 w-full justify-between items-center">
                        <section>
                            <p className={`${interTight.className} text-2xl font-bold hover:font-black active:font-normal transition-all cursor-pointer select-none`} onClick={() => handleButtonClick("/")}>Techit Thawiang</p>
                        </section>
                        <ul className="flex flex-row gap-2">
                            {navigatorContents().map((nav, index) => (
                                <Tooltip key={index} showArrow={!ActiveOrNot(nav.url)} content={nav.label} className={ActiveOrNot(nav.url) ? "hidden" : "flex"} placement="bottom">
                                    <Button
                                            onClick={() => handleButtonClick(nav.url)}
                                            className="flex flex-row max-h-[40px]"
                                            isIconOnly={!ActiveOrNot(nav.url)}
                                            size={"md"}
                                            variant={ActiveOrNot(nav.url) ? "solid" : "ghost"}
                                            color={ActiveOrNot(nav.url) ? "primary" : "default"}
                                            radius={"sm"}>
                                        <p className={`ph ph-${nav.icon} text-[1.25rem] ${ActiveOrNot(nav.url) ? 'ph-fill' : ''}`}></p>
                                        <p className={ActiveOrNot(nav.url) ? "flex" : "hidden"}>
                                            {nav.label}
                                        </p>
                                    </Button>
                                </Tooltip>
                            ))}
                        </ul>
                    </nav>
                </section>
            </div>
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
                        <p className="text-[12px]">Any logos or trademarks appearing on this site are the property of their respective owners.</p>
                    </nav>
                </section>
            </div>
        </React.Fragment>
    );
}

export {Navigator, Footer};
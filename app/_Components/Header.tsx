"use client";

import React, {useState,useEffect} from "react";
import {motion} from "framer-motion";

const Header = () => {

    const sidebarItems =  [
        {"name": "Home", "url": "/", "ico": "house"},
        {"name": "Blog", "url": "/blog", "ico": "chat"},
        {"name": "Projects", "url": "/projects", "ico": "work"},
    ]

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

    return (
        <React.Fragment>
            <motion.div
                initial={{x: -63}} // Start off-canvas to the left
                animate={{x: 0}} // Move into the viewport
                exit={{x: -63}}
                transition={{duration: 0.5, ease: "easeOut",}}
                style={{width: "63px"}} // Set the desired width
                className="top-0 fixed hidden md:flex flex-col h-screen w-fit gap-5 p-2 justify-between items-center z-50 bg-[rgba(var(--background-start-rgb))]
                nav-right"
            >
                <section className="flex flex-col gap-2">
                    <img alt="" className="rounded-full image press"
                         src="https://images.techit.win/custom/381373437_878368530383292_1922118991557438707_n.jpg"
                         width="48px" height="48px"/>
                    <hr/>
                    <section className="flex flex-col gap-2">
                        {sidebarItems.map((item, index) => (
                            <button key={`${item}-${index}`}
                                    data-toggle="tooltip" data-placement="right" title={item.name}
                                    onClick={() => handleButtonClick(item.url)}
                                    className={ActiveOrNot(item.url) ? "select-none nav active flex items-center font-bold" : "select-none ghost nav flex items-center font-regular"}>
                                <span className="material-symbols-rounded">{item.ico}</span>
                            </button>
                        ))}
                    </section>
                </section>
                <section className="flex flex-col gap-2">
                    <img alt="" className="select-none"
                    tabIndex={-1}
                         src="https://images.techit.win/custom/TechitT.svg"
                         width="48px" height="48px"/>

                </section>
            </motion.div>
            <motion.div
                initial={{y: 63}} // Start off-canvas to the left
                animate={{y: 0}} // Move into the viewport
                exit={{y: 63}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className="bottom-0 fixed flex md:hidden flex-row w-full h-fit gap-5 p-2 items-center nav-top z-50 bg-[rgba(var(--background-start-rgb))]"
            >
                <section className="flex flex-row gap-2 justify-center w-full">
                    <section className="flex flex-row gap-2">
                        {sidebarItems.map((item, index) => (
                            <button key={`${item}-${index}`}
                                    data-toggle="tooltip" data-placement="right" title={item.name}
                                    onClick={() => handleButtonClick(item.url)}
                                    className={ActiveOrNot(item.url) ? "select-none nav active flex items-center font-bold" : "select-none ghost nav flex items-center font-regular"}>
                                <span className="material-symbols-rounded">{item.ico}</span>
                            </button>
                        ))}
                    </section>
                </section>
            </motion.div>
        </React.Fragment>
    )
}

export default Header
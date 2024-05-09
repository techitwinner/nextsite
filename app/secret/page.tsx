"use client";

import React from "react";
import {motion} from "framer-motion";

export default function Home() {


    const handleButtonClick = (link: string) => {
        if (typeof window !== 'undefined') {
            window.location.href = link;
        }
    };

    return (
        <main className={"flex flex-col w-full min-h-screen items-center px-4 max-w-[1024px] self-center"}>
            <motion.div initial={{filter: "blur(16    px)", opacity: 0}}
                        animate={{filter: "blur(0)", opacity: 1}}
                        transition={{duration: 0.75}} id=""
                        className={"flex flex-col gap-4 justify-center min-h-screen w-full"}
            >
                <p className="noto-color-emoji-regular mx-[-8px]">🤣</p>
                <section className={"flex flex-col gap-1 w-full"}>
                    <p className="self-start">Welcome to...</p>
                    <p className="font-black text-5xl self-start">Secret page lol</p>
                </section>
                <hr/>
                <section className={"flex flex-col gap-2 w-full"}>
                    <p className="self-start">This is where I keep whatever I wanted, but it&apos;s useless.</p>
                    <p className="self-start">So let&apos;s see what I have keep or created in here lol.</p>
                    <section className="flex flex-row gap-2">
                        <button onClick={() => handleButtonClick("#quote")}>👇 Scroll Down</button>
                    </section>
                </section>
            </motion.div>
            <div id="quote" className={"flex flex-col gap-4 justify-center min-h-screen py-24 w-full"}>
                <section className={"flex flex-col gap-1 w-full"}>
                    <p className="self-start mono">01.</p>
                    <p className="font-black text-5xl self-start">Quote</p>
                    <p className="self-start">Some meaningful quote and philosophy by my friends.</p>
                </section>
                <section className={"grid grid-cols-1 gap-2 w-full"}>
                    <div className="border-[rgb(var(--color-border))] border-2 rounded-lg pl-12 flex flex-row justify-between">
                        <section className="w-[45%] py-16 flex flex-col justify-center">
                            <p className="playfaird-italic text-5xl mb-[-20px] ml-[-30px]">“</p>
                            <h1 className="playfaird-italic">Hi Hi Hello Yes Hi Hi Yes Thank u Hi Yes Hello Hi Hello
                                Thank u Yes Hi Hi Hello Yes Hi Hi Yes Thank u Hi Yes Hello Hi Hello Thank u Yes Hi Hi
                                Hello Yes Hi Hi Yes Thank u Hi Yes Hello Hi</h1>
                            <p className="playfaird-italic text-5xl mr-[-10px] text-end">”</p>
                            <p className="self-end text-end">— Northeatgrass</p>
                        </section>
                        <section className="w-[50%]">
                            <img src="https://images.techit.win/custom/PFP/northcool.png" className="w-full" />
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
}

"use client";

import React from "react";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <main  className={"flex flex-col w-full min-h-screen items-center px-4 max-w-[1024px] self-center"}>
            <motion.div  initial={{ filter: "blur(16    px)", opacity: 0 }}
                         animate={{ filter: "blur(0)", opacity: 1 }}
                         transition={{ duration: 0.75 }}
                         className={"flex flex-col gap-4 justify-center min-h-screen w-full"}
            >
                <p className="noto-color-emoji-regular mx-[-8px]">👋</p>
                <section className={"flex flex-col gap-1 w-full"}>
                    <p className="self-start">My name is...</p>
                    <p className="font-black text-5xl self-start">Techit Thawiang</p>
                </section>
                <hr/>
                <section className={"flex flex-col gap-2 w-full"}>
                    <p className="self-start">This is where I keep portfolio, certificates or whatever I wanted to
                        keep.</p>
                    <p className="self-start">If you want Thai version, it is under development! It will be available it a bit.</p>
                </section>
            </motion.div>
        </main>
    );
}

"use client";

import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Home() {

    const [contact, setContact] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [d1] = await Promise.all([
                    fetch('https://api.techit.win/contact'),
                ]);

                const jsonData1 = await d1.json();

                setContact(jsonData1);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <motion.div className="w-full justify-center flex flex-col items-center h-[calc(100vh-63px)]">
                <p className="font-bold text-2xl">techit.win</p>
                <p>Fetching Data, Please wait...</p>
            </motion.div>
        );
    }

    const handleButtonClick = (link: string) => {
        if (typeof window !== 'undefined') {
            window.location.href = link;
        }
    };

    return (
        <main className={"flex flex-col w-full min-h-screen items-center px-4 max-w-[1024px] self-center"} >
            <motion.div initial={{filter: "blur(16    px)", opacity: 0}}
                        animate={{filter: "blur(0)", opacity: 1}}
                        transition={{duration: 0.75}} id=""
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
                    <p className="self-start">If you want Thai version, it is on the plan but not yet develop.</p>
                    <section className="flex flex-row gap-2">
                        <button onClick={() => handleButtonClick("#about")}>About Me</button>
                        <button className="ghost" onClick={() => handleButtonClick("#contact")}>Contact Me</button>
                    </section>
                </section>
            </motion.div>
            <div id="about" className={"flex flex-col gap-4 justify-center min-h-screen py-24 w-full"}>
                <p className="noto-color-emoji-regular mx-[-8px]">🧑</p>
                <section className={"flex flex-col gap-1 w-full"}>
                    <p className="self-start mono">01.</p>
                    <p className="font-black text-5xl self-start">About Me</p>
                </section>
                <section className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full"}>
                    <div className="card sa">
                        <h1 className="font-bold">Name:</h1>
                        <p className="mono">Techit Thawiang</p>
                    </div>
                    <div className="card sa">
                        <h1 className="font-bold">Birthdate:</h1>
                        <p className="mono">Jan 5th</p>
                    </div>
                    <div className="card sa">
                        <h1 className="font-bold">Interested In:</h1>
                        <p className="mono">Computer, Coding</p>
                    </div>
                    <div className="card sa">
                        <h1 className="font-bold">Located in:</h1>
                        <p className="mono">Thailand</p>
                    </div>
                </section>
            </div>
            <div id="contact" className={"flex flex-col gap-4 justify-center min-h-screen py-24 w-full"}>
                <p className="noto-color-emoji-regular mx-[-8px]">💭</p>
                <section className={"flex flex-col gap-1 w-full"}>
                    <p className="self-start mono">02.</p>
                    <p className="font-black text-5xl self-start">Contact Me</p>
                </section>
                <section className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full"}>
                    {(contact ?? []).map((contact:any, index) => (
                        <a className="card sa gap-3" key={index} href={contact.url}>
                            <img alt={contact.name} src={contact.logourl} height="64px" width="64px" />
                            <p className="mono">{contact.username}</p>
                        </a>
                    ))}
                    <button onClick={() => handleButtonClick("https://forms.gle/MLR6EWtwChGSd2A77")}>or Google Form</button>
                </section>
            </div>
        </main>
    );
}

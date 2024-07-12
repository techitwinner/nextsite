"use client";

import {Button, Link, Tooltip} from "@nextui-org/react";
import React from "react";
import {Image} from "@nextui-org/react";

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

const Contact = () => {
    const pfpSize = "200px"

    return (
        <div className="min-h-screen py-24 flex flex-col gap-16">
            <h1 className="text-5xl font-bold">Contact Me</h1>
            <div className="grid grid-row-2 gap-2 items-stretch">
                <p className="font-bold text-2xl">Contact via form:</p>
                <section className="border-1 w-[1024px] h-[602px] rounded-md">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScPlejeBtQ9zH1kr52DeyraayFsiKGJTUQnvrlQeC6FnpQAzA/viewform?embedded=true"
                        width="1024" height="600" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…
                    </iframe>
                </section>
            </div>
            <div className="grid grid-row-2 gap-2 items-stretch">
                <p className="font-bold text-2xl">More ways to contact:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
                    <Button className="flex flex-row py-12 border-1 rounded-md items-center justify-center" color="primary" variant="ghost" onClick={() => handleButtonClick("mailto://techit@dailitation.xyz")}>
                        <p className="ph ph-envelope text-3xl"></p>
                        <p className="text-xl">techit@dailitation.xyz</p>
                    </Button>
                    <Button className="flex flex-row py-12 border-1 rounded-md items-center justify-center" color="primary" variant="ghost" onClick={() => handleButtonClick("mailto://techit.taken@gmail.com")}>
                        <p className="ph ph-envelope text-3xl"></p>
                        <p className="text-xl">techit.taken@gmail.com</p>
                    </Button>
                    <Button className="flex flex-row py-12 border-1 rounded-md items-center justify-center" color="primary" variant="ghost">
                        <p className="ph ph-telegram-logo text-3xl"></p>
                        <p className="text-xl">@techitwinner</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Contact